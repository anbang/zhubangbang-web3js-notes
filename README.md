# web3-notes

web3.js有很多能与区块链进行交互的Api；

英文的API Doc ：

- https://web3js.readthedocs.io/en/1.0/index.html
- https://github.com/ethereum/wiki/wiki/JavaScript-API


### 名词理解

whisper 	私密消息
Provider	宿主/以太坊节点

### 准备工作

安装环境：

	//1、安装Node （npm会自带）

	//2、安装开发环境的区块链节点（方便与web3.js进行交互）
	npm install -g ethereumjs-testrpc

	//3、安装web3的模块
	npm install web3 --save

通过testrpc命令，直接开启区块链节点：

	testrpc


![](https://i.imgur.com/W3oPOLb.png)

此时会生成一些区块链地址，密钥，等相关基础数据；上面testrpc执行后,命令行工具不能关闭，因为web3.js就是用来与那个节点进行交互的；

创建web3对象：需要先创建web3对象，然后连接到以太坊节点（成功后，就可以使用web3.js与节点进行交互了）

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
	
	var coinbase = web3.eth.coinbase;//用于接收挖矿奖励的地址
	console.log("节点的挖矿奖励地址:",coinbase);

网页中，直接引用web3.js 创建还可以下面这种 

    var Web3 = require('web3');
    var web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

直接 webstorm 右键运行，打印的数据如下

	*****当前的Provider Star*****
	HttpProvider {
	  host: 'http://localhost:8545',
	  timeout: 0,
	  user: undefined,
	  password: undefined }
	*****End
	
	节点的挖矿奖励地址: 0xb8a40492830e8fc0e4d045e866c36fd0c9368154


回调函数支持error first callback的风格;比如coinbase是同步获取奖励地址，如果想异步获取，可以使用getCoinbase方法；

两者的代码格式如下


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



##### 创建合约交易；

如果提示：Method eth_compileSolidity not supported.

参考：https://ethereum.gitbooks.io/frontier-guide/content/compiling_contract.html