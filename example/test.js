var Web3 = require('../lib/web3');

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);//如果已经设置了 Provider
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

//同步获取方法;
var coinbase=web3.eth.coinbase;
console.log("同步获取节点的挖矿奖励地址:",coinbase);


//异步的方法；
var getCoinbase;
web3.eth.getCoinbase(function (err, data) {
    if(!err){
        getCoinbase=data;
        console.log("异步获取节点的挖矿奖励地址:",getCoinbase);
    } else{
        console.error("失败",err);
    }
});

//合约
var targetAccount = web3.eth.accounts[1],//获取的账号
    accountBalance=web3.eth.getBalance(targetAccount);//当前的余额

console.log("targetAccount相关的:",targetAccount,accountBalance.toNumber(10));

var receipt;
var tranObj={
    from:coinbase,
    to:targetAccount,
    value:100
};
/*var tranObj2={
    from:targetAccount,
    to:web3.eth.accounts[2],
    value:888888
};*/

var tran=web3.eth.sendTransaction(tranObj,function(err, address) {
    if (!err){
        receipt=web3.eth.getTransactionReceipt(address);
        console.log("普通交易的收据地址",address);// 提交交易到区块链，会立即返回交易hash，但是交易要等到被矿工收录到区块中后才生效
        console.log("普通交易的收据信息",receipt);

        console.log("奖励地址余额：",web3.eth.getBalance(coinbase).toNumber(10));
        console.log("目标地址余额：",web3.eth.getBalance(targetAccount).toNumber(10));
    }
});

/*web3.eth.sendTransaction(tranObj2,function(err, address) {
    /!*if (!err){
        receipt=web3.eth.getTransactionReceipt(address);
        console.log(address);// 提交交易到区块链，会立即返回交易hash，但是交易要等到被矿工收录到区块中后才生效
        console.log(receipt);
    }*!/
});*/



//签名交易
var Tx = require('ethereumjs-tx');
var privateKey = new Buffer('e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109', 'hex');

var rawTx = {
    // nonce: '0x00',
    /*gasPrice: '0x09184e72a000',
    gasLimit: '0x2710',*/
    from:coinbase,
    to: targetAccount,
    value: 1,
    // data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
};

var tx = new Tx(rawTx);
tx.sign(privateKey);
console.log("tx信息是",tx);

var serializedTx = tx.serialize();
console.log("序列化后的Tx：",serializedTx);

var hexData='0x' + serializedTx.toString('hex');
console.log("十六进制：",hexData);

//console.log(serializedTx.toString('hex'));
//f889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f

web3.eth.sendRawTransaction(hexData, function(err, hash) {
    if (!err){
        console.log("拿到的hash收据：",hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
        receipt=web3.eth.getTransactionReceipt(hash);
        console.log("签名的收据信息",receipt);
    }else{
        // console.log(err)
    }


});





