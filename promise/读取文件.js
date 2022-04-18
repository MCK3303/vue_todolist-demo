// 引入fs模块 属于node.js里的API
const fs = require ('fs');
// 调用fs方法readfile读取文件
fs.readFile('./Promise笔记.md',(error,data)=>{
    if(error){
        // console.log(error);
        throw error;
    }else{
        console.log(data.toString())
    }
})

