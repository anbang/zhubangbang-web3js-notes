var Web3 = require('web3');


if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);//如果已经设置了 Provider
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

//同步获取方法;
var coinbase = web3.eth.coinbase;
console.log("同步获取节点的挖矿奖励地址:", coinbase);
console.log("所有账号:", web3.eth.accounts);//所有账户，包含personal账户
console.log("私有账户:", web3.personal.listAccounts);//personal账户；

console.log("******************************");

