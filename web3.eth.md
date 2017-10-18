# web3.eth 的Api

通过cons打印出所有的Api

console.log(web3.eth);

其中Api如下

* web3.eth.getBalance(addressHexString [, defaultBlock] [, callback])		//获得指定区块下指定地址的余额,余额是BigNumber实例，单位为wei,区块不传用defaultBlock设置的
* web3.eth.getStorageAt(addressHexString, position [, defaultBlock] [, callback])		//获得某个地址指定位置的存储的状态值。
* web3.eth.getCode(addressHexString [, defaultBlock] [, callback])			//获取指定地址合约编译后的字节代码
* web3.eth.getBlock(blockHashOrBlockNumber [, returnTransactionObjects] [, callback])	//获取块号或区块哈希值所对应的区块对象
* web3.eth.getUncle(blockHashStringOrNumber, uncleNumber [, returnTransactionObjects] [, callback])	//通过指定叔位置，返回指定叔块的区块对象。叔块没有自己的交易数据
* web3.eth.getCompilers([callback])				//获取一组可用的编译器
* web3.eth.getBlockTransactionCount(hashStringOrBlockNumber [, callback])	//获取指定区块的交易数量。
* web3.eth.getBlockUncleCount								//获得叔块数量
* web3.eth.getTransaction(transactionHash [, callback])		//获取指定交易哈希值的交易对象
* web3.eth.getTransactionFromBlock(hashStringOrNumber, indexNumber [, callback])	//获取指定区块的指定序号的交易对象
* web3.eth.getTransactionReceipt(hashString [, callback])		//获取一个交易的收据对象（通过交易的哈希）,处于pending状态的交易，收据是不可用的。
* web3.eth.getTransactionCount(addressHexString [, defaultBlock] [, callback])	//获取定地址发起的交易数
* web3.eth.call(callObject [, defaultBlock] [, callback])		//用来向一个合约发送消息
* web3.eth.estimateGas(callObject [, callback])					//获取一个模拟的call/transcation花费gas。
* web3.eth.signTransaction						
* web3.eth.sendTransaction(transactionObject [, callback])			//发送一个交易对象到网络,返回32字节的16进制格式的交易哈希串；合约创建需在交易完成后获取合约地址
* web3.eth.sendRawTransaction(signedTransactionData [, callback])	//发送一个已经签名的交易,返回32字节的16进制格式的交易哈希串,（代码跑完不报错，也不成功）
* web3.eth.sign(address, dataToSign, [, callback])			//签名要发送的数据，帐户需要处于unlocked状态,返回签名后的数据
* web3.eth.compile		//web3编译源码的方式
	* web3.eth.compile.solidity(sourceString [, callback])		//编译Solidity源代码
	* web3.eth.compile.lll(sourceString [, callback])			//编译LLL源代码。
	* web3.eth.compile.serpent(sourceString [, callback])		//编译serpent源代码
* web3.eth.submitWork
* web3.eth.getWork
* web3.eth.coinbase		//用于接收挖矿奖励的地址
		* web3.eth.getCoinbase	//异步方式
* web3.eth.mining		//表示该节点是否配置挖矿
		* web3.eth.getMining	//异步方式
* web3.eth.hashrate		//表示的是当前的每秒的哈希难度
		* web3.eth.getHashrate
* web3.eth.syncing		//正在sync的情况返回同步对象（startingBlock、currentBlock、highestBlock），否则false；
		* web3.eth.getSyncing	//异步方式
* web3.eth.gasPrice		//返回当前的gas价格（打包费用）。这个值由最近几个块的gas价格的中值决定,https://baike.baidu.com/item/%E4%B8%AD%E5%80%BC
		* web3.eth.getGasPrice
* web3.eth.accounts		//返回当前节点持有的帐户列表。
		* web3.eth.getAccounts
* web3.eth.blockNumber	//返回当前区块号
		* web3.eth.getBlockNumber
* web3.eth.protocolVersion		//协议版本
		* web3.eth.getProtocolVersion
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
	* address
	* toString					//IBAN实例的字符串地址



#### Api文档上的，

* web3.eth.isSyncing(callback)	//同步开始，更新，停止的回调函数方法；
* web3.eth.defaultBlock			//默认区块
* web3.eth.filter				//过滤对象,用来做事件监听的
* web3.eth.contract(abiArray)	//创建一个Solidity的合约对象，用来在某个地址上初始化合约,一个合约对象




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

