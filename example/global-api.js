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

//web3.net
console.log("*****web3.currentProvider");
console.dir(web3.currentProvider);//
console.dir(web3.currentProvider.host);//
console.dir(web3.currentProvider.timeout);//
console.dir(web3.currentProvider.user);//
console.dir(web3.currentProvider.password);//

console.log("\n");


//web3.net
console.log("*****web3.net");
console.dir(web3.net);//
// console.dir(web3.net.RequestManager);//

console.dir(web3.net.listening);//

console.dir(web3.net.peerCount);//

console.log("\n");



//web3.settings
console.log("*****web3.settings");
// console.dir(web3.settings);//
console.dir(web3.settings.defaultBlock);//
console.dir(web3.settings.defaultAccount);//
console.log("\n");



//web3.providers
console.log("*****web3.providers");
console.dir(web3.providers);
console.log("\n");
/*
* Web3.providers.HttpProvider   //Web3.providers设置所需的提供程序
* Web3.providers.IpcProvider    //Web3.providers设置所需的提供程序
*
* */


//web3.version
// console.dir(web3.version);
console.log("*****web3.version");
console.log(web3.version);
console.log(web3.version.api);
console.log(web3.version.node);
console.log(web3.version.network);
console.log(web3.version.ethereum);
console.log(web3.version.whisper);
console.log("\n");

/*
* web3.version的属性和方法
* web3.version.api          //以太坊js的api版本              -> '0.20.2'
* web3.version.node         //客户端或节点的版本信息 同步方式  -> EthereumJS TestRPC/v1.1.3/ethereum-js
    * getNode() //异步
* web3.version.network      //网络协议版本  同步方式      -> 1508136413945
    * getNetwork() //异步
* web3.version.ethereum     //以太坊的协议版本 同步方式    -> 63
    * getEthereum() //异步
* web3.version.whisper      //whisper协议的版本 同步方式  ->2
    * getWhisper()   //异步
*
* */




//查看源码发现
/*
* 全局属性
* _requestManager
* currentProvider
* eth
* db
* shh
* net
* personal
* bzz
* settings
* version
* providers
* _extend
* */

/*
* 定义在  Web3.prototype 的方法
*
* web3.setProvider(provider)    //设置Provider
* web3.reset(keepIsSyncing)     //用来重置web3的状态,参数可以控制 web3.eth.isSyncing()
* web3.isConnected()            //检查到节点的连接是否存在
* web3.createBatch()            //批量创建
* web3.fromICAP(icap)           //icap https://baike.baidu.com/item/ICAP/5058238?fr=aladdin
* web3.sha3(string, options)    //返回值： 使用Keccak-256 SHA3算法哈希过的结果。
*       String - 传入的需要使用Keccak-256 SHA3算法进行哈希运算的字符串。
*       Object - 可选项设置。如果要解析的是hex格式的十六进制字符串。需要设置encoding为hex,因为JS中会默认忽略0x,如：{encoding: 'hex'}
*
*
* */


//web3.net
console.log("*****web3.db");
console.dir(web3.db);//
console.dir(web3.db.putString);//
console.dir(web3.db.getString);//
console.dir(web3.db.putHex);//
console.dir(web3.db.getHex);//

console.log("\n");

//web3.shh
console.log("*****web3.shh");
/*
* web3.shh.version
* web3.shh.info
* web3.shh.setMaxMessageSize
* web3.shh.setMinPoW
* web3.shh.markTrustedPeer
* web3.shh.newKeyPair
* web3.shh.addPrivateKey
* web3.shh.deleteKeyPair
* web3.shh.hasKeyPair
* web3.shh.getPublicKey
* web3.shh.getPrivateKey
* web3.shh.newSymKey
* web3.shh.addSymKey
* web3.shh.generateSymKeyFromPassword
* web3.shh.hasSymKey
* web3.shh.getSymKey
* web3.shh.deleteSymKey
* web3.shh.post
*
* */
console.dir(web3.shh);//
console.log("\n");


//web3.personal
console.log("*****web3.personal");
/*
* web3.personal.newAccount
* web3.personal.importRawKey
* web3.personal.unlockAccount
* web3.personal.ecRecover
* web3.personal.sign
* web3.personal.sendTransaction
* web3.personal.lockAccount
* web3.personal.listAccounts
* web3.personal.getListAccounts
*
* */
// console.dir(web3.personal.lockAccount("0x463242a73404faf224a81ed0ac40823eef03a02e"));//0x463242a73404faf224a81ed0ac40823eef03a02e

console.log("\n");

//web3.personal
console.log("*****web3.bzz");
/*
* web3.bzz.blockNetworkRead
* web3.bzz.syncEnabled
* web3.bzz.swapEnabled
* web3.bzz.download
* web3.bzz.upload
* web3.bzz.retrieve
* web3.bzz.store
* web3.bzz.get
* web3.bzz.put
* web3.bzz.modify
* web3.bzz.hive
* web3.bzz.getHive
* web3.bzz.info
* web3.bzz.getInfo
*
* */
// console.dir(web3.bzz.info);

console.log("\n");

//web3.personal
console.log("*****web3._extend");
/*
* web3._extend 上有 formatters utils Method Property
* web3._extend.formatters.inputDefaultBlockNumberFormatter
* web3._extend.formatters.inputBlockNumberFormatter
* web3._extend.formatters.inputCallFormatter
* web3._extend.formatters.inputTransactionFormatter
* web3._extend.formatters.inputAddressFormatter
* web3._extend.formatters.inputPostFormatter
* web3._extend.formatters.outputBigNumberFormatter
* web3._extend.formatters.outputTransactionFormatter
* web3._extend.formatters.outputTransactionReceiptFormatter
* web3._extend.formatters.outputBlockFormatter
* web3._extend.formatters.outputLogFormatter
* web3._extend.formatters.outputPostFormatter
* web3._extend.formatters.outputSyncingFormatter
*
*
* */
// console.dir(web3._extend.formatters);

/*
*
*
*
* */

console.dir(web3);

console.log("\n");