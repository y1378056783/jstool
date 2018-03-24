/**
 * 通讯类
 * @authors Your Name (you@example.org)
 * @date    2018-03-24 15:42:26
 * @version $Id$
 */
var ReqWebSocket = function(e) {
    function f() {
        e.call(this);
    }
    __extends(f, e);
    var g = f.prototype;
    g.init = function() {
        this.webSocket = new egret.WebSocket();
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        this.webSocket.connect("echo.websocket.org", 80);
    }
    g.onSocketOpen = function() {
        var cmd = "Hello Egret WebSocket";
        console.log("The connection is successful, send data: " + cmd);
        this.webSocket.writeUTF(cmd);
    };
    g.onReceiveMessage = function(e) {
        var msg = this.webSocket.readUTF();
        console.log("Receive data:" + msg);
    };
    return f;
}(egret.WebSocket)
ReqWebSocket.prototype.__class__ = "ReqWebSocket"
