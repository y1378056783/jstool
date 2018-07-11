/**
 * 当前为worker子线程
 * @authors Your Name (you@example.org)
 * @date    2018-03-16 16:25:45
 * @version $Id$
 * 方法说明：
WEB主线程:

通过 var worker = new Worker(url) 加载一个 js 文件来创建一个 worker，同时返回一个 worker 实例。
通过 worker.postMessage(data) 方法来向 worker 发送数据。
绑定 worker.onmessage 方法来接收 worker 发送过来的数据。
可以使用 worker.terminate() 来终止一个 worker 的执行。

worker新线程：

绑定 onmessage 方法来接收主线程发送过来的数据。
通过 postMessage(data) 方法来向主线程发送数据。
可以使用 self.close() 来终止一个 worker 的执行。
this.importScripts('路径');载入外部脚本;

在 Web Worker 中，同样有一个全局对象（worker 对象本身，this 和 self 引用的都是 worker 对象本身）和其他对象以及方法。
Web Worker 中的代码不能访问 DOM。
那么 Worker 里的代码能访问以下对象：
1、最小化 的navigator 对象，包括 onLine、appName、appVersion、userAgent 和 platform 属性
2、只读的 location 对象
3、setTimeout()、setInterval()、clearTimeout()、clearInterval() 方法
4、XMLHttpRequest 构造函数

 */
 
this.onmessage = function(event) { 
    var data = event.data; 
  //console.log(data);
	this.postMessage(fibonacci(data));
}; 
function fibonacci(n) { 
  return n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2); 
} 
