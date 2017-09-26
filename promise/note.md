Promise的一些缺点
1.首先,无法取消Promise,一旦新建它就会立即执行,无法中途取消.
2.其次,如果不设置回调函数,Promise内部抛出的错误,不会反应到外部.
3.第三,当处于pending状态时,无法得知目前进展到哪一个阶段(刚刚开始还是即将完成)

Promise.all() 全部完成才是resolve
Promise.race()  有一个完成就是Promise的状态
Promise.resolve()  将现有对象转为Promise对象 
1)参数是promise,原样返回  
2)参数是thenable,运行then
3)参数不是thenable,返回一个新的Promise对象,状态为resolved,参数会传给回调函数

立即resolve的Promise对象,是在本轮"时间循环"(event loop)的结束时,而不是在下一轮"时间循环"的开始时

Promise.reject()  返回一个状态为rejected的Promise
reject方法的参数,会原封不动地作为reject的理由,作为参数传给后续处理函数

Promise.done()
Promise.finally() 