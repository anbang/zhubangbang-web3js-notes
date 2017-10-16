# Global-api

### 途径：查看web3.js的源码，可以发现；

##### 全局的属性有

* _requestManager
* currentProvider	+
* eth
* db			+
* shh			+
* net			+
* personal		+
* bzz			+
* settings		+
* version		+
* providers		+
* _extend		+  扩展了 formatters、utils、Method、Property


##### 定义在  Web3.prototype 的方法

* web3.setProvider(provider)    //设置Provider
* web3.reset(keepIsSyncing)     //用来重置web3的状态,参数可以控制 web3.eth.isSyncing()
* web3.isConnected()            //检查到节点的连接是否存在
* web3.createBatch()            //批量创建
* web3.fromICAP(icap)           //icap https://baike.baidu.com/item/ICAP/5058238?fr=aladdin
* web3.sha3(string, options)    //返回值： 使用Keccak-256 SHA3算法哈希过的结果。
*       String - 传入的需要使用Keccak-256 SHA3算法进行哈希运算的字符串。
*       Object - 可选项设置。如果要解析的是hex格式的十六进制字符串。需要设置encoding为hex,因为JS中会默认忽略0x,如：{encoding: 'hex'}




### 途径：通过console.dir(web3.xxxx);查看，比如查看 web3.providers 的属性和方法

##### web3.currentProvider 的属性和方法


	{
	  host: 'http://localhost:8545',
	  timeout: 0,
	  user: undefined,
	  password: undefined }


* web3.currentProvider.host
* web3.currentProvider.timeout
* web3.currentProvider.user
* web3.currentProvider.password


##### web3.net 的属性和方法

* web3.net.listening	//true表示连接上的节点正在listen网络请求，否则返回false；此属性是只读的，表示当前连接的节点，
						* 是否正在listen网络连接。listen可以理解为接收;getListener为异步
* web3.net.peerCount	//连接节点连上的其它以太坊节点的数量 (.getPeerCount是异步)

##### web3.settings 的属性和方法

* web3.settings.defaultBlock	//默认阻止
* web3.settings.defaultAccount	//默认帐户


##### web3.providers 的属性和方法

* Web3.providers.HttpProvider   //从Web3.providers设置所需的提供程序
* Web3.providers.IpcProvider    //从Web3.providers设置所需的提供程序



##### web3.version 的属性和方法

* web3.version.api          //以太坊js的api版本              -> '0.20.2'
* web3.version.node         //客户端或节点的版本信息 同步方式  -> EthereumJS TestRPC/v1.1.3/ethereum-js
    * getNode() //异步
* web3.version.network      //网络协议版本  同步方式      -> 1508136413945
    * getNetwork() //异步
* web3.version.ethereum     //以太坊的协议版本 同步方式    -> 63
    * getEthereum() //异步
* web3.version.whisper      //whisper协议的版本 同步方式  ->2
    * getWhisper()   //异步


### web3.db 	的属性和方法

* web3.db.putString(db, key, value)		//在本地数据库的级别存储一个字符串 参数(存储使用的数据库,存储的键,存储的值)
* web3.db.getString(db, key)			//从本地的leveldb数据库中获取一个属性值 参数(存储使用的数据库,存储的键)

* web3.db.putHex(db, key, value)	//储存本地的leveldb中的二进制数据  参数(存储使用的数据库,存储的键,十六进制格式的二进制)
* web3.db.getHex(db, key)			//获取本地的leveldb中的二进制数据  参数(存储使用的数据库,存储的键)



### web3.shh 	的属性和方法

* web3.shh.version()						//版本号	->"2"
* web3.shh.info								//信息
* web3.shh.setMaxMessageSize				//最大消息大小
* web3.shh.setMinPoW						//设置最小Pow
* web3.shh.markTrustedPeer					//标记可信标记
* web3.shh.newKeyPair						//新密钥对
* web3.shh.addPrivateKey					//添加私钥
* web3.shh.deleteKeyPair					//删除密钥对
* web3.shh.hasKeyPair						//是否含有某密钥
* web3.shh.getPublicKey						//获取公钥
* web3.shh.getPrivateKey					//获取私钥
* web3.shh.newSymKey						//新系统键
* web3.shh.addSymKey						//添加系统键
* web3.shh.generateSymKeyFromPassword		//用密码生成系统键
* web3.shh.hasSymKey						//是否含有某个系统键
* web3.shh.getSymKey						//获取某个系统键
* web3.shh.deleteSymKey						//删除某个系统键
* web3.shh.post(object [, callback])		//发送私密消息时候调用此方法，返回一个布尔值，true发送成功。false是失败；


 ##### 下面方式是API里提到了，但是我自己跑的时候是undefined；

* web3.shh.newIdentity([callback])				//创建一个新的身份，返回值是当前身份的HEX字符串；
* web3.shh.hasIdentity(identity, [callback])	//检查用户身份信息是否存在，返回布尔，true表示存在；
* web3.shh.newGroup
* web3.shh.addToGroup
* web3.shh.filter					//观察收到的私密消息

### web3.personal 	的属性和方法  (私人的)

* web3.personal.newAccount				//创建一个地址，比如 "0x463242a73404faf224a81ed0ac40823eef03a02e"
* web3.personal.importRawKey			//导入原始Key
* web3.personal.ecRecover				//验证签名使用的？？
* web3.personal.sign					//标记
* web3.personal.sendTransaction			//发送交易
* web3.personal.lockAccount				//锁定账号 返回布尔，结果true是锁定成功
* web3.personal.unlockAccount			//解锁账号
* web3.personal.listAccounts			//账户列表
* web3.personal.getListAccounts			//异步获取账户列表

### web3.bzz 	的属性和方法  允许您互动群集分散的文件存储

* web3.bzz.blockNetworkRead		//启用在线读取
* web3.bzz.syncEnabled			//启用同步
* web3.bzz.swapEnabled			//启用数据交换
* web3.bzz.download				//从swarm下载文件和文件夹，作为缓冲区或磁盘（仅node.js）
* web3.bzz.upload				//将文件文件夹或原始数据上传到群集。
* web3.bzz.retrieve				//恢复纠正
* web3.bzz.store				//储存
* web3.bzz.get					//获取
* web3.bzz.put					//
* web3.bzz.modify				//修改
* web3.bzz.hive					//集群里
* web3.bzz.getHive
* web3.bzz.info					//info
* web3.bzz.getInfo


###  web3._extend 扩展

扩展了：formatters、utils、Method、Property

** formatters **

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


** utils **

* web3._extend.utils.padLeft				//在字符串的左侧添加一个填充，可用于将填充添加到十六进制字符串。
* web3._extend.utils.padRight				//在字符串右侧添加一个填充，用于将填充添加到十六进制字符串。
* web3._extend.utils.toHex					//自动将任何给定值转换为十六进制。数字字符串将被解释为数字。文本字符串将被解释为UTF-8字符串。
* web3._extend.utils.toDecimal
* web3._extend.utils.fromDecimal
* web3._extend.utils.toUtf8
* web3._extend.utils.toAscii
* web3._extend.utils.fromUtf8
* web3._extend.utils.fromAscii
* web3._extend.utils.transformToFullName
* web3._extend.utils.extractDisplayName
* web3._extend.utils.extractTypeName
* web3._extend.utils.toWei
* web3._extend.utils.fromWei
* web3._extend.utils.toBigNumber			//检查给定值是否为BigNumber.js实例
* web3._extend.utils.toTwosComplement
* web3._extend.utils.toAddress
* 
* web3._extend.utils.isBigNumber
* web3._extend.utils.isStrictAddress
* web3._extend.utils.isAddress				//检查给定的字符串是否是有效的Ethereum地址。它还将检查校验和，如果地址有大写和小写字母。
* web3._extend.utils.isChecksumAddress		//是否为校验和地址。
* web3._extend.utils.toChecksumAddress		//将将大写或小写的Ethereum地址转换为校验和地址。
* web3._extend.utils.isFunction
* web3._extend.utils.isString
* web3._extend.utils.isObject
* web3._extend.utils.isBoolean
* web3._extend.utils.isArray
* web3._extend.utils.isJson
* web3._extend.utils.isBloom
* web3._extend.utils.isTopic