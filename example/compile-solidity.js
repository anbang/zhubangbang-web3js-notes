var Web3 = require('../lib/web3');

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);//如果已经设置了 Provider
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

//同步获取方法;
let coinbase=web3.eth.coinbase;
console.log("同步获取节点的挖矿奖励地址:",coinbase);

let sources=[
    'pragma solidity ^0.4.0;',
    'contract Calc{',
    '  /*区块链存储*/',
    '  uint count;',
    '  /*执行会写入数据，所以需要`transaction`的方式执行。*/',
    '  function add(uint a, uint b) returns(uint){',
    '    count++;',
    '    return a + b;',
    '  }',

    '  /*执行不会写入数据，所以允许`call`的方式执行。*/',
    '  function getCount() constant returns (uint){',
    '    return count;',
    '  }',
    '}'].join("");

console.log(sources);

/*
let calc=web3.eth.compile.solidity(sources,function (err, result) {
    if(!err){
        console.log(result);
    }else{
        console.log(err);
    }
});
*/


/*var source = "" +
    "contract test {\n" +
    "   function multiply(uint a) returns(uint d) {\n" +
    "       return a * 7;\n" +
    "   }\n" +
    "}\n";
var compiled = web3.eth.compile.solidity(source);*/

// let calc = web3.eth.compile.solidity(sources);
