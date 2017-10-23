var Web3 = require('../lib/web3');
// var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);//如果已经设置了 Provider
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

//同步获取方法;
var coinbase = web3.eth.coinbase;
console.log("同步获取节点的挖矿奖励地址:", coinbase);
console.log("账号:", web3.eth.accounts);

// 合约ABI
var abi = [
    {
        "constant":false,
        "inputs": [{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],
        "name":"sendCoin",
        "outputs":[{"name":"sufficient","type":"bool"}],
        "payable":false,
        "type":"function"
    },
    {
        "constant":false,
        "inputs":[{"name":"addr","type":"address"}],
        "name":"getBalance",
        "outputs":[{"name":"","type":"uint256"}],
        "payable":false,
        "type":"function"
    },
    {
        "inputs":[],
        "payable":false,
        "type":"constructor"
    },
    {
        "anonymous":false,
        "inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],
        "name":"Transfer",
        "type":"event"
    } ];
// 合约地址
var address = web3.eth.accounts[0];
console.log("合约地址",address);
// 通过ABI和地址获取已部署的合约对象
var metacoin = web3.eth.contract(abi).at(address);


// console.log(metacoin.getBalance(address));//throw new Error('invalid address'); 不能直接使用该方法，需要call；
/*
* 1、在getBalance后加上.call()来显式指明用call的方式调用
* 2、通过call的方式调用可以得到getBalance函数的返回值
* 3、通过call的方式调用的函数只在节点本地虚拟机中执行，不会产生交易，不会花费费用，不会修改数据
* */
console.log(metacoin.getBalance.call(address).toNumber(10));//bigNumber格式，需要toNumber转换下；

/*
* 在sendCoin函数后加上.sendTransaction()指明要向区块链发送交易
* 合约代码中sendCoin函数只有两个参数，而在web3中通过.sendTransaction()调用合约函数的时候需要增加最后一个参数，它是一个javascript对象，里面可以指定from/value/gas等属性，下面的例子用from来指定交易的发送者
* 下面的调用语句执行后，会向区块链提交一笔交易，这笔交易的发送者是account_one，接收者是metacoin的地址，交易的作用是以account_two和100作为参数执行合约的sendCoin函数
* 函数会立即返回交易的hash，表明交易已经提交到区块链，但是并不知道交易何时处理完成，交易要等到被旷工收录到区块中后才会生效
* */
var account_one = web3.eth.accounts[0];
var account_two = web3.eth.accounts[1];
// 提交交易到区块链，会立即返回交易hash，但是交易要等到被矿工收录到区块中后才生效
var txhash = metacoin.sendCoin.sendTransaction(account_two, 100, {from:account_one});
console.log("收据信息",web3.eth.getTransactionReceipt(txhash));

//监听合约事件
var myEvent = metacoin.Transfer();
myEvent.watch(function (err, result) {
    if(!err){
        //通过检测事件中的transactionHash与调用合约函数返回的交易hash是否一致，可以判定某一笔交易是否已完成：
        if (result.transactionHash == txhash) {
            var account_one_balance = metacoin.getBalance.call(account_one);
            console.log("account one balance after sendCoin:", account_one_balance.toNumber());
        }
    }else{
        console.log("ERR_INFO",err)
    }
    myEvent.stopWatching();
});


