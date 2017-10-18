var Web3 = require('web3');
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);//如果已经设置了 Provider
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

//同步获取方法;
var coinbase = web3.eth.coinbase;
console.log("同步获取节点的挖矿奖励地址:", coinbase);
console.log("账号:", web3.eth.accounts);
console.log("******************************");

console.log(web3.eth.mining);//latest
console.log(web3.eth.coinbase);//latest
console.log(web3.eth.defaultBlock);//latest
console.log(web3.eth.blockNumber);//
console.log(web3.eth.gasPrice.toNumber(10));//20000000000
console.log(web3.eth.hashrate);//20000000000
console.log(web3.eth.protocolVersion);//20000000000
console.log(web3.eth.syncing);//20000000000

//获取数据相关的
console.log(web3.eth.getBalance(coinbase));//
console.log(web3.eth.getStorageAt(coinbase));//0x00
console.log(web3.eth.getCode(coinbase));//0x0
console.log(web3.eth.getBlock(1));//
// console.log(web3.eth.getBlockUncleCount(coinbase));//
// console.log(web3.eth.getUncle(coinbase));//
console.log(web3.eth.getCompilers());//[ 'solidity' ]






// console.log(web3.eth.getBlock(web3.eth.defaultBlock,true));//latest