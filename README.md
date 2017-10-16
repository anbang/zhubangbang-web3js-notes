# web3-notes
web3.js的笔记

英文的API Doc ：

- https://web3js.readthedocs.io/en/1.0/index.html
- https://github.com/ethereum/wiki/wiki/JavaScript-API


### 我认为的名词理解

whisper 	私密消息
Provider	宿主

### 准备工作

安装环境：

	//安装Node （npm会自带）
	brew install node

	//安装开发环境的区块链节点
	npm install -g ethereumjs-testrpc

	//安装web3的模块
	npm install web3


通过testrpc命令，直接开启区块链节点：

	testrpc


![](https://i.imgur.com/W3oPOLb.png)

此时会生成一些区块链地址，密钥，等相关基础数据；

实例化WEB3；需要配置基于的 Provider (上面testrpc执行后不能关闭)

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

直接 webstorm 邮件运行，打印的数据如下

	*****当前的Provider Star*****
	HttpProvider {
	  host: 'http://localhost:8545',
	  timeout: 0,
	  user: undefined,
	  password: undefined }
	*****End
	
	节点的挖矿奖励地址: 0xb8a40492830e8fc0e4d045e866c36fd0c9368154

