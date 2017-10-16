var Web3 = require('../lib/web3');

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);//如果已经设置了 Provider
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    console.log("*****当前的Provider Star*****");
    console.log(web3.currentProvider);//如果已经设置了Provider，则返回当前的Provider。
    console.log("*****End\n");
    // 这个方法可以用来检查在使用mist浏览器等情况下已经设置过Provider，避免重复设置的情况。
}

var coinbase = web3.eth.coinbase;//节点的挖矿奖励地址
console.log("节点的挖矿奖励地址:",coinbase);
