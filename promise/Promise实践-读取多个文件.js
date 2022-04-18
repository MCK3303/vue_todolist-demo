const fs = require('fs');
// fs.readFile('./markdown/算法学习笔记.md',(error,data)=>{
//     console.log(data.toString());
// })
// 需求：连续读取三个文档，最后合并输出
const p = new Promise((resolve,reject)=>{
    fs.readFile('./测试文档/算法学习笔记.md',(error,data)=>{
        if(error){
            reject(error)
        }
        else{
            // 成功读取第一个md文档
            resolve(data.toString());
        }
    })
})
p.then(val=>{
    // console.log(val)
    // 第一个文档读取成功后，then再读取第二个文档↓ 再次调用then，这里要返回一个Promise对象
    return new Promise((resolve,reject)=>{
        fs.readFile('./测试文档/jQuery复习.md',(error,data)=>{
            if(error){
                reject(error)
            }
            else{
                resolve([val,data.toString()]);
            }
        });
    })
}).then(val=>{
    //此时的val是一个数组↓
    // console.log(val);
    return new Promise((resolve,reject)=>{
        // 读取第三个文档
        fs.readFile('./Promise笔记.md',(error,data)=>{
            if(error){
                reject(error)
            }
            else{
                // 因为此时val是由第一个文档、第二个文档数据组成的数组
                // 把此次读取的第三个文档数据data 使用数组操作方法.push()添加进val
                val.push(data.toString());
                // 调用resolve 传参val
                resolve(val);
            }
        });
    })
}).then(val=>{
    // 成功
    console.log(val);
})