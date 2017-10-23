# web3.eth 的Api

通过打印出所有的Api

	console.dir(web3.eth);

其中Api如下

** 交易对象相关的 **

* web3.eth.sendTransaction(transactionObject [, callback])			//发送一个交易对象到网络,返回32字节的16进制格式的交易哈希串；合约创建需在交易完成后获取合约地址
* web3.eth.sendRawTransaction(signedTransactionData [, callback])	//发送一个已经签名的交易,返回32字节的16进制格式的交易哈希串,（代码跑完不报错，也不成功）

* web3.eth.getTransaction(transactionHash [, callback])								//获取交易对象（通过交易哈希值的）
* web3.eth.getTransactionFromBlock(hashStringOrNumber, indexNumber [, callback])	//从指定区块的指定序号，获取交易对象
* web3.eth.getTransactionReceipt(hashString [, callback])							//获取交易的收据对象（通过交易的哈希,处于pending状态的交易，收据是不可用的）

* web3.eth.getTransactionCount(addressHexString [, defaultBlock] [, callback])		//获取指定地址发起的交易数量
* web3.eth.getBlockTransactionCount(hashStringOrBlockNumber [, callback])			//获取指定区块的交易数量。

* web3.eth.sign(address, dataToSign, [, callback])		//签名要发送的数据，帐户需要处于unlocked状态；返回签名后的数据
* web3.eth.signTransaction								//签名交易?? 该api没有走通

* web3.eth.isSyncing(callback)							//同步开始，更新，停止的回调函数方法；
* web3.eth.filter										//过滤对象,用来做事件监听的

** 合约相关的 **

* web3.eth.contract(abiArray)				//创建一个Solidity的合约对象，用来在某个地址上初始化合约,一个合约对象
* web3.eth.contract(abiArray).at(address)	//通过ABI和地址获取已部署的合约对象


** 当前节点相关的 有get的都是异步获取**

* web3.eth.mining							//表示该节点是否配置挖矿
		* web3.eth.getMining
* web3.eth.coinbase							//用于接收挖矿奖励的地址
		* web3.eth.getCoinbase
* web3.eth.accounts							//返回当前节点持有的帐户列表。
		* web3.eth.getAccounts
* web3.eth.defaultBlock						//默认区块 、 一般是latest
* web3.eth.blockNumber						//返回当前区块号
		* web3.eth.getBlockNumber
* web3.eth.gasPrice							//返回当前的gas价格（打包费用）,BigNumber格式。这个值由最近几个块的gas价格的中值决定,https://baike.baidu.com/item/%E4%B8%AD%E5%80%BC
		* web3.eth.getGasPrice
* web3.eth.hashrate							//表示的是当前每秒的哈希难度
		* web3.eth.getHashrate
* web3.eth.protocolVersion					//协议版本  -> 63
		* web3.eth.getProtocolVersion
* web3.eth.syncing							//正在sync的情况返回同步对象,（startingBlock、currentBlock、highestBlock），否则false；
		* web3.eth.getSyncing

** 获取数据相关的 **

* web3.eth.getBalance(addressHexString [, defaultBlock] [, callback])					//获得余额				(指定区块下指定地址的,余额是BigNumber实例，单位为wei,区块不传,用defaultBlock设置的)
* web3.eth.getStorageAt(addressHexString, position [, defaultBlock] [, callback])		//获得存储的状态值		(某个地址指定位置的)。
* web3.eth.getCode(addressHexString [, defaultBlock] [, callback])						//获取合约编译后的字节代码 (指定地址)
* web3.eth.getBlock(blockHashOrBlockNumber [, returnTransactionObjects] [, callback])	//获取区块对象			(通过区块号或区块哈希值)

* web3.eth.getBlockUncleCount																		//获得叔块数量
* web3.eth.getUncle(blockHashStringOrNumber, uncleNumber [, returnTransactionObjects] [, callback])	//获取指定叔块的区块对象，（通过指定叔位置，返回指定叔块的区块对象。叔块没有自己的交易数据）


* web3.eth.getCompilers([callback])										//获取一组可用的编译器

* web3.eth.call(callObject [, defaultBlock] [, callback])				//用来向一个合约发送消息,不修改源数据
* web3.eth.estimateGas(callObject [, callback])							//模拟打包费 （获取一个模拟的call/transcation花费gas）

* web3.eth.submitWork
* web3.eth.getWork



** web3编译源码的方式 **

* web3.eth.compile
	* web3.eth.compile.solidity(sourceString [, callback])		//编译Solidity源代码
	* web3.eth.compile.lll(sourceString [, callback])			//编译LLL源代码。
	* web3.eth.compile.serpent(sourceString [, callback])		//编译serpent源代码

** IBAN相关的 **

表达以太坊原始地址有一个更具特色的方法，叫作ICAP协议,这种协议使用的字母数字字符的范围更大，可以节省空间。ICAP协议是一个有效的国际银行账户号码（IBAN），银行软件可以读取并与之通信。

IBAN解释:http://baike.fobshanghai.com/index.php?doc-view-261

* web3.eth.iban		//IBAN编码,将无效的地址转换为IBAN/BBAN
	* //var iban = new web3.eth.iban("XE81ETHXREGGAVOFYORK");//生成一个iban对象
	* fromAddress
	* fromBban(bbanAddress)		//将BBAN地址转换为直接IBAN实例,web3.eth.iban.fromBban('ETHXREGGAVOFYORK')
	* createIndirect(options)	//用institution 和 identifier 创建一个间接IBAN地址,
	* isValid(address)			//检查IBAN地址是否有效
	* isDirect					//检查IBAN实例是否直接
	* isIndirect				//检查IBAN实例是否间接
	* checksum					//IBAN实例的校验和
	* institution				//IBAN实例的institution
	* client					//IBAN实例的客户端
	* address					//
	* toString					//IBAN实例的字符串地址






******************************************* USE **************************************************


##### sendTransaction / getTransactionReceipt 发起交易，并获取交易收据

sendTransaction : 发送一个交易对象到网络,返回32字节的16进制格式的交易哈希串,如果交易是一个合约创建，请使用web3.eth.getTransactionReceipt()在交易完成后获取合约的地址。

getTransactionReceipt : 获取一个交易的收据对象（通过交易的哈希）,处于pending状态的交易，收据是不可用的。

	var receipt;
	var tranObj={
	    from:coinbase,
	    to:targetAccount,
	    value:100
	};
	
	var tran=web3.eth.sendTransaction(tranObj,function(err, address) {
	    if (!err){
	        receipt=web3.eth.getTransactionReceipt(address);
	        console.log(address);//0xe7a14a7ed6d3edbefbaed13a54f08775a8a9967eace287a124125d2615ceb26f
	        console.log(receipt);
	    }
	});

address 是返回是hash地址，表明交易已经提交到区块链，但是并不知道交易何时处理完成，交易要等到被旷工收录到区块中后才会生效 

receipt 的数据如下；

	{ 
	  transactionHash: '0xe7a14a7ed6d3edbefbaed13a54f08775a8a9967eace287a124125d2615ceb26f',	//32字节，交易的哈希值
	  transactionIndex: 0,		//交易在区块里面的序号，整数。
	  blockHash: '0xdc642c4dac7363936e811a24dd59466910654e9ca1866fe3b72eb8a7a76d02f2',			//这个交易所在区块的哈希
	  blockNumber: 3,			//交易所在区块的块号
	  gasUsed: 21000,			//执行当前这个交易单独花费的gas
	  cumulativeGasUsed: 21000,	//当前交易执行后累计花费的gas总值
	  contractAddress: null,	//创建的合约地址。如果是一个合约创建交易，返回合约地址，其它情况返回null。
	  logs: []					//这个交易产生的日志对象数组
	}

可以查看账户的余额

	console.log("奖励地址余额：",web3.eth.getBalance(coinbase).toNumber(10));
	console.log("目标地址余额：",web3.eth.getBalance(targetAccount).toNumber(10));


当通过.sendTransaction()调用合约的时候，交易会被提交到区块链进行处理，这个处理需要一定的时间，如果需要等交易完成之后再执行其他操作，就必须要知道交易何时完成，那么如何知道交易何时完成呢？可以通过监听合约事件来实现。

** 合约的 **

	// 合约ABI
	var abi = [{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"}];
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


** 收据信息的格式 **

	{ 
	  transactionHash: '0x301133516231292f3dc3354b3eac4a903177c816529a6ebee1cf53bdcf860941',
	  transactionIndex: 0,
	  blockHash: '0xabd3a04dcbc5f9ab2c2a5d940504d24eabae4eeea81dd967208728d6b0d04b75',
	  blockNumber: 1,
	  gasUsed: 22872,
	  cumulativeGasUsed: 22872,
	  contractAddress: null,
	  logs: [] 
	}



** eth.filter **

    function watchBalance() {
        var coinbase = web3.eth.coinbase;//当前奖励的地址

        var originalBalance = web3.eth.getBalance(coinbase).toNumber();//数字格式的余额
        document.getElementById('coinbase').innerText = 'coinbase: ' + coinbase;
        document.getElementById('original').innerText = ' original balance: ' + originalBalance + '    watching...';

		//观察的区块 （latest）
        web3.eth.filter('latest').watch(function() {
            var currentBalance = web3.eth.getBalance(coinbase).toNumber();
            document.getElementById("current").innerText = 'current: ' + currentBalance;
            document.getElementById("diff").innerText = 'diff:    ' + (currentBalance - originalBalance);
        });
    }