Promise：
是ES6引入的异步编程的新解决方案。语法上Promise是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果。

Promise构造函数：Promise(excutor){ }	括号里两个形参resolve/reject
Promise.prototype.then 	方法
Promise.prototype.catch	方法

有三种状态 初始化、成功、失败↓

调用resolve() 则表示状态是成功
成功(resolve) 则调用promise对象的then方法的第一个回调函数

调用reject() 则表示状态是失败
失败(reject) 则调用promise对象的then方法的第二个回调函数

定义常量：const p = new Promise(function(成功参数resolve,失败参数reject){要执行的方法}) 这里p表示Promise实例
调用p.then方法： p.then(resolve后调用的方法(value),reject后调用的方法(reason)) 
then方法里括号是两个参数，分别为成功或失败时调用的方法。其中的value指的就是resolve后括号里的参数，reason就是reject后括号里的参数。

Promise.prototype.then方法：
then方法的返回结果是Promise对象，对象状态(resolve/reject)由回调函数的执行结果决定
(1)如果回调函数中返回的结果是 非promise类型的属性(比如return 1)，状态为成功，返回值[PromiseResult]为对象成功的值
(2)如果返回的结果是 Promise对象，则由返回的Promise的状态(resolve/reject)决定。

Promise可以链式调用：
p.then(value => {},reason => {}).then(value => {},reason => {}) 嵌套then
要进行链式调用then，需要上一个then函数体的返回值也是Promise对象才能进行
链式调用可以避免 回调地狱

Promise对象catch方法：相当于把.then的第二个参数方法（即reject失败时才调用的方法）单独拿了出来。
语法： p.catch(function(reason){ });或者p.catch(reason => { });

