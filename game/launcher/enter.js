/**
 * 主入口类
 * @authors Your Name (you@example.org)
 * @date    2018-03-24 15:28:33
 * @version $Id$
 */
var AssetAdapter = function() {
    function e() {}
    e.prototype.getAsset = function(e, g, d, b) {
        function a(a) {
            g.call(d, a, e)
        }
        b = e;
        e.prototype && (b = new e);
        b instanceof egret.DisplayObject || b instanceof egret.Texture ? g.call(d, b, e) : "string" == typeof e ? RES.hasRes(e) ? RES.getResAsync(e, a, this) : RES.getResByUrl(e, a, this) : g.call(d, b, e)
    };
    return e
}();
AssetAdapter.prototype.__class__ = "AssetAdapter";
var LoadingUI = function(e) { //进度条加载
    function f() {
        e.call(this);
        this.createView()
    }
    __extends(f, e);
    var g = f.prototype;
    g.createView = function() { //创建主窗口
        this.textField = new egret.TextField;
        this.addChild(this.textField);
        this.textField.y = 100;
        this.textField.textAlign = "center";
        this.textField.width = 960;
        this.textField.height = 100
    };
    g.setProgress = function(d, b) { //进度条
        this.textField.text = "Loading..." + d + "/" + b
    };
    return f
}(egret.Sprite);
LoadingUI.prototype.__class__ = "LoadingUI";
var Main = function(e) {
    function f() {
        e.call(this);
        this.verOrHor = !0;
        this.iniM = this.iniMF = 0;
        this.lastY = Const.waterPanel + 500;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this)
    }
    __extends(f, e);
    var g = f.prototype;
    g.onAddToStage = function(d) {
        egret.Injector.mapClass("egret.gui.IAssetAdapter", AssetAdapter);
        this.loadingView = new LoadingUI;
        this.stage.addChild(this.loadingView);
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/")
    };
    g.onConfigComplete = function(d) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload")
    };
    g.onResourceLoadComplete = function(d) {
        "preload" == d.groupName && (this.stage.removeChild(this.loadingView), d = document.getElementById("huhu-logo"), d.innerHTML = "", d.parentNode.removeChild(d), RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), this.createScene())
    };
    g.onResourceLoadError = function(d) {
        console.warn("Group:" + d.groupName + " has failed to load");
        this.onResourceLoadComplete(d)
    };
    g.onResourceProgress = function(d) {
        "preload" == d.groupName && this.loadingView.setProgress(d.itemsLoaded, d.itemsTotal)
    };
    g.createScene = function() {
        f.instance = this;
        DataManager.instance.init();
        this.gameLayer = new egret.DisplayObjectContainer;
        //this.reqWeb = new ReqWebSocket(); 初始化websocket
        //this.reqWeb.init();
        this.addChild(this.gameLayer);
        (new Game(this.gameLayer)).startup();
        var d = new egret.gui.UIStage;
        d.scaleX = 0.2;
        var b = new egret.DisplayObjectContainer;
        b.addChild(new MainUILayer(d));
        this.addChild(b);
        b = new egret.Shape;
        b.graphics.beginFill(0, 1);
        b.graphics.drawRect(0, 0, 960, 640);
        b.graphics.endFill();
        b.alpha = 0.5;
        b.touchEnabled = !0;
        this.addChild(b);
        MainUILayer.instance().blackLayer = b;
        b.visible = !1;
        this.addChild(d);
        d = new egret.TextField;
        this.addChild(d);
        d.text = "暂停中...";
        d.visible = !1;
        d.x = Const.stageWidth / 2;
        d.y = Const.stageHeight / 2
    };
    f.getInstance = function() {
        return f.instance
    };
    g.setScenePos = function(d) {
        this.verOrHor && (d[0] > Const.BoatMovePoint && 1540 > d[0] && (this.gameLayer.x = 600 - d[0]), d[1] > Const.waterPanel + 400 && 1E3 > d[1] ? (this.gameLayer.y = d[1] - Const.waterPanel - 400, d[1] > Const.waterPanel + 500 && this.mountainMove(d[1])) : d[1] < Const.waterPanel - 50 && -890 < d[1] && (this.gameLayer.y = d[1] - Const.waterPanel + 50))
    };
    g.mountainMove = function(d) {
        this.iniM || (this.iniMF = BgScene.getInstance().mountainF0.y, this.iniM = BgScene.getInstance().mountain0.y);
        BgScene.getInstance().mountainF1.y += 0.6 * (this.lastY - d);
        BgScene.getInstance().mountainF0.y += 0.6 * (this.lastY - d);
        BgScene.getInstance().mountain1.y += 0.3 * (this.lastY - d);
        BgScene.getInstance().mountain0.y += 0.3 * (this.lastY - d);
        this.lastY = d
    };
    return f
}(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";

