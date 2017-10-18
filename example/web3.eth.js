var Web3 = require('../lib/web3');

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);//如果已经设置了 Provider
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
var coinbase = web3.eth.coinbase;//节点的挖矿奖励地址
console.log("节点的挖矿奖励地址:",coinbase);//0xb8a40492830e8fc0e4d045e866c36fd0c9368154
console.log(web3.isConnected());//true      检查到节点的连接是否存在
console.log(web3.currentProvider);//如果已经设置了Provider，则返回当前的Provider

console.log("\n");



console.log("*******web3.eth");
/*
* web3.eth.getBalance
* web3.eth.getStorageAt
* web3.eth.getCode
* web3.eth.getBlock
* web3.eth.getUncle
* web3.eth.getCompilers
* web3.eth.getBlockTransactionCount
* web3.eth.getBlockUncleCount
* web3.eth.getTransaction
* web3.eth.getTransactionFromBlock
* web3.eth.getTransactionReceipt
* web3.eth.getTransactionCount
* web3.eth.call
* web3.eth.estimateGas
* web3.eth.sendRawTransaction
* web3.eth.signTransaction
* web3.eth.sendTransaction
* web3.eth.sign
* web3.eth.compile
* web3.eth.submitWork
* web3.eth.getWork
* web3.eth.coinbase
* web3.eth.getCoinbase
* web3.eth.mining
* web3.eth.getMining
* web3.eth.hashrate
* web3.eth.getHashrate
* web3.eth.syncing
* web3.eth.getSyncing
* web3.eth.gasPrice
* web3.eth.getGasPrice
* web3.eth.accounts
* web3.eth.getAccounts
* web3.eth.blockNumber
* web3.eth.getBlockNumber
* web3.eth.protocolVersion
* web3.eth.getProtocolVersion
* web3.eth.iban
*
* */

// console.log(web3.currentProvider.host)
var from = web3.eth.accounts[0];
var to = web3.eth.accounts[1];


var result1 =web3.eth.iban.fromAddress('0x00c5496aee77c1ba1f0854206a26dda82a81d6d8');
var result2 =web3.eth.iban.fromBban('ETHXREGGAVOFYORK');
var iban = new web3.eth.iban("XE81ETHXREGGAVOFYORK");

// console.log(result1);
// console.log(result2.checksum());
console.log(iban.toString());
// console.log(web3.eth.iban.fromBban('ETHXREGGAVOFYORK'));


console.log("\n");