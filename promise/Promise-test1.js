const p = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let data ='数据库传来的数据';
        //调用resolve Promise对象状态为成功
        resolve(data);

        let err = 'ERROR 01';
        // 调用reject Promise对象状态为失败
        reject(err);
    },1000)

});

const rt = p.then(function(val){
    // resolve 成功状态 进入then第一个回调函数↓
    console.log('成功接收 '+val);
    
    // 如果返回的是一个Promise对象 由该Promise对象状态决定↓
    // return new Promise((resolve,reject)=>{
    //     reject('失败测试');
    // });
    // 如果返回的是非Promise类型 状态为成功，值为对象成功的值↓
    return val;
},function(error){
    // reject 失败状态 进入then第二个回调函数↓
    console.log('接收失败 '+error);
})
console.log(rt);