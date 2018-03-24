/**
 * 主界面ui布局
 * @authors Your Name (you@example.org)
 * @date    2018-03-24 15:29:43
 * @version $Id$
 */
var MainUILayer = function(e) { //主界面ui层
    function f(d) {
        e.call(this);
        this.skinName = skins.scene.IndexSceneSkin;
        this.UIStage = d;
        f._instance = this
    }
    __extends(f, e);
    var g = f.prototype;
    g.createChildren = function() {
        e.prototype.createChildren.call(this);
        this.tool = GameScene.getInstance().mTool
    };
    g.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        this.hideElements();
        this.sellNum.visible = !1; //鱼类价格默认隐藏
        this.window = new RodListWindow(this.UIStage); //初始化鱼杆容器
        this.fishWindow = new FishWindow(this.UIStage); //初始化鱼类说明容器
        this.btn_sound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.soundTurner, this); //播放音乐
        this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showPauseIndex, this); //开始游戏按钮
        this.btn_shop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addRodWindow, this); //商店按钮
        this.btn_allship.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addfishWindow, this); //钓鱼大全按钮
        this.btn_sell.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sell, this); //卖钱按钮
        var d = DataManager.instance.levelValue;
        this.lb_lv.text = Math.ceil(d / 30).toString(); //等级数据
        this.Bar_experience._setScaleX(d % 30 / 30); //等级进度条
        DataManager.instance.money += 0
    };
    g.soundTurner = function() { //音乐播放暂停
        DataManager.instance.musicSW()
    };
    g.resetDate = function() { //重置数据
        egret.localStorage.setItem("playtimes", "0");
        egret.localStorage.setItem("best", "0")
    };
    g.backToMain = function() {
        this.skin.currentState = "normal";
        this.dispatchEventWith(EventType.BACK_TO_MAIN)
    };
    g.showPauseIndex = function(d) {
        DataManager.instance.musicSW();
        this.showElements();
        this.skin.currentState = "pause";
        this.btn_shop.y = -80;
        this.lb_score.y = -114;
        this.btn_allship.x = 1E3;
        this.coin.y = this.lb_score.y;
        egret.Tween.get(this.btn_shop).to({
                y: 30
            },
            500);
        egret.Tween.get(this.lb_score).to({
                y: 38
            },
            500);
        egret.Tween.get(this.coin).to({
                y: 30
            },
            500);
        egret.Tween.get(this.btn_allship).to({
                x: 860
            },
            500);
        this.btn_sound.y = -this.btn_sound.height;
        egret.Tween.get(this.btn_sound).to({
                y: 20
            },
            500);
        this.btn_sell.y = Const.stageHeight + this.btn_sell.height;
        this.skin.currentState = "pause";
        this.dispatchEventWith(EventType.START_GAME);
        this.tool.view.addEventListener(Action.OUT, this.showSell, this);
        this.tool.view.addEventListener(Action.CAST, this.hideSell, this)
    };
    g.showSell = function(d) {
    	//d.data是鱼类的价值
        //console.log(d.data);
        0 != d.data && (egret.Tween.get(this.btn_sell).to({
                y: 550
            },
            500), this.sellNum.text = "$" + Math.round(this.tool.fishPrice * this.tool.fishHP / 3), this.sellNum.visible = !0)
    };
    g.hideSell = function(d) {
        egret.Tween.get(this.btn_sell).to({
                y: 750
            },
            500);
        this.sellNum.visible = !1
    };
    g.sell = function() {
        console.log('卖鱼')
        this.tool.fishPrice && (this.hideSell(), this.tool.beSell())
    };
    g.upgrade = function(d) {
        var b = 0;
        switch (d) {
            case 2:
                b = 1;
                break;
            case 3:
                b = 5;
                break;
            case 4:
                b = 15;
                break;
            case 5:
                b = 50
        }
        DataManager.instance.levelValue += b;
        d = DataManager.instance.levelValue;
        this.lb_lv.text = Math.floor(d / 30).toString();
        this.Bar_experience._setScaleX(d % 30 / 30)
    };
    g.restart = function() {
        this.skin.currentState = "gamein";
        this.dispatchEventWith(EventType.RESTART_GAME)
    };
    g.showMenus = function() {
        //console.log('显示菜单')
        egret.Tween.get(this.coin).to({
                y: 11
            },
            500);
        egret.Tween.get(this.lb_score).to({
                y: 28
            },
            500);
        egret.Tween.get(this.btn_sound).to({
                x: 844
            },
            500);
        egret.Tween.get(this.lv).to({
                y: 595
            },
            500);
        egret.Tween.get(this.lb_lv).to({
                y: 593
            },
            500);
        egret.Tween.get(this.Bar_experience).to({
                y: 592
            },
            500);
        egret.Tween.get(this.expBarBg).to({
                y: 592
            },
            500);
        egret.Tween.get(this.btn_allship).to({
                x: 860
            },
            500);
        egret.Tween.get(this.btn_shop).to({
                y: 30
            },
            500)
    };
    g.hideMenus = function() {
        //console.log('隐藏菜单')
        egret.Tween.get(this.coin).to({
                y: -100
            },
            500);
        egret.Tween.get(this.lb_score).to({
                y: -100
            },
            500);
        egret.Tween.get(this.btn_sound).to({
                x: 1E3
            },
            500);
        egret.Tween.get(this.lv).to({
                y: 750
            },
            500);
        egret.Tween.get(this.lb_lv).to({
                y: 750
            },
            500);
        egret.Tween.get(this.Bar_experience).to({
                y: 750
            },
            500);
        egret.Tween.get(this.expBarBg).to({
                y: 750
            },
            500);
        egret.Tween.get(this.btn_allship).to({
                x: 1E3
            },
            500);
        egret.Tween.get(this.btn_shop).to({
                y: -120
            },
            500)
    };
    g.addRodWindow = function() {
        this.window.show()
    };
    g.changeHandler = function(d) {};
    g.stopgame = function() {
        this.skin.currentState = "gameover"
    };
    g.setScore = function(d) {
        var b = egret.localStorage.getItem("bestscore") ? Number(egret.localStorage.getItem("bestscore")) : 0;
        b > d ? this.setBest(b) : (this.setBest(d), egret.localStorage.setItem("bestscore", d + ""))
    };
    g.setBest = function(d) {};
    g.setPlayTimes = function(d) {};
    g.addfishWindow = function() {
        this.fishWindow.show()
    };
    f.instance = function() {
        return f._instance
    };
    g.hideElements = function() {
        this.btn_sound.visible = !1;
        this.expBarBg.visible = !1;
        this.coin.visible = !1;
        this.Bar_experience.visible = !1;
        this.version.text = "version " + Const.versionNum
    };
    g.showElements = function() {
        this.btn_sound.visible = !0;
        this.expBarBg.visible = !0;
        this.coin.visible = !0;
        this.Bar_experience.visible = !0;
        this.version.visible = !1
    };
    return f
}(egret.gui.SkinnableComponent);
MainUILayer.prototype.__class__ = "MainUILayer";
