const p = new Promise(function(resolve,reject){
    const xhr = new XMLHttpRequest();
    // 初始化
    xhr.open("GET","https://api.apiopen.top/getJoke");
    //监听状态
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status <300){
                resolve(1);
            }
            else{
                reject(xhr.status);
            }
        }
    }
    xhr.send(); 
})

// resolve后第一个参数方法的val 就是resolve()中传入的参数
// reason同理，是reject()中传入的参数
p.then(function(val){
    console.log(val);
},function(reason){
    console.log(reason);
})