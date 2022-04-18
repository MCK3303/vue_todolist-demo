const fs = require('fs');
const p = new Promise(function(resolve,reject){
    fs.readFile("./Promise笔记.md",(error,data)=>{
        if(error){
            reject(error);
        }
        resolve(data);
    })
})
p.then(function(val){
    console.log(val.toString());
},function(reason){
    console.log(reason);
})