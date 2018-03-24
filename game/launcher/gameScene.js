/**
 * 游戏场景
 * @authors yyp
 * @description fishing h5 game
 * @date    2018-03-23 10:48:50
 * @version $Id$
 */

var BgScene = function(e) { //游戏背景
    function f() {
        e.call(this);
        this.waveArr = [
            [],
            [],
            [],
            []
        ];
        this.skinName = skins.scene.BgScene;
        this.y = -350;
        f.instance = this
    }
    __extends(f, e);
    var g = f.prototype;
    f.getInstance = function() {
        return f.instance
    };
    g.createChildren = function() {
        e.prototype.createChildren.call(this);
        this.mountainF0.anchorY = 1;
        this.mountainF0.y += 300;
        this.mountainF1.anchorY = 1;
        this.mountainF1.y += 300;
        this.mountain0.anchorY = 1;
        this.mountain0.y = 826;
        this.mountain1.anchorY = 1;
        this.mountain1.y = 826;
        this.waveArr[0].push(this.waves1);
        this.waveArr[0].push(this.waves2);
        this.waveArr[0].push(this.waves3);
        this.waveArr[1].push(this.wave0);
        this.waveArr[1].push(this.wave1);
        this.waveArr[2].push(this.wave2);
        this.waveArr[2].push(this.wave3);
        egret.Ticker.getInstance().register(this.loop, this);//让场景运动起来，云、水流
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.reMoved, this)
    };
    g.reMoved = function() {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.reMoved, this);
        egret.Ticker.getInstance().unregister(this.loop, this)
    };
    g.loop = function(d) {
        if (!Const.isOnBlur) {
            this.moveLeft(this.cloud0, d);
            this.moveLeft(this.cloud1, d);
            this.moveLeft(this.cloud2, d);
            this.moveLeft(this.cloud3, d);
            this.moveLeft(this.cloud4, d);
            this.moveLeft(this.cloud5, d);
            this.moveLeft(this.cloud6, d);
            for (var b = 0; b < this.waveArr[0].length; b++) this.waveMove1(this.waveArr[0], b, 0.5 * d);
            this.waveMove2(this.waveArr[1], 0, 0.7 * d);
            this.waveMove2(this.waveArr[1], 1, 0.7 * d);
            this.waveMove2(this.waveArr[2], 0, 1.4 * d);
            this.waveMove2(this.waveArr[2], 1, 1.4 * d)
        }
    };
    g.moveLeft = function(d, b) {
        d.x -= b / 30;
        0 > d.x + d.width && (d.x += 2E3 + d.width)
    };
    g.waveMove1 = function(d, b, a) {
        d[b].x -= a / 30;
        0 > d[b].x + d[b].width && (d[b].x = d[(b + 2) % 3].x + d[b].width - 3)
    };
    g.waveMove2 = function(d, b, a) {
        d[b].x += a / 30;
        1920 < d[b].x && (d[b].x = d[(b + 1) % 2].x - d[b].width)
    };
    return f
}(egret.gui.SkinnableComponent);
BgScene.prototype.__class__ = "BgScene";

var GameScene = function(e) { //游戏背景
    function f() {
        e.call(this);
        this.containers = {};
        f.instance = this;
        this.view = new egret.DisplayObjectContainer;
        this.world = new p2.World({
            gravity: [0, -100]
        });
        this.world.emitImpactEvent = !1;
        this.world.sleepMode = p2.World.NO_SLEEPING;
        this.createScene()
    }
    __extends(f, e);
    var g = f.prototype;
    g.createScene = function() { //创建场景
        this.mTool = ObjectPool.getInstance().createObject(ToolObject);
        this.view.addChild(this.mTool.view);
        this.createFishes();
        new FishRule
    };
    g.createFishes = function() { //生成小鱼
        for (var d = GameModel.getInstance().fishGroupData, b = GameModel.getInstance().fishTypeData, a = 0; a < d.length; a++) {
            for (var c = d[a], e = [], f = c.fishCount, g = b[c.fishId], u = c.pos, n = c.radius, k = 0; k < f; k++) e.push(this.createFish(u, n, g.id, g.resid, g.ClassName, g.grade, g.anchorX, g.anchorY, g.speed, g.price, c.id));
            this.containers[c.id] = e
        }
    };
    g.createFish = function(d, b, a, c, e, f, g, u, n, k, m, l) {
        a = egret.getDefinitionByName(e);
        a = ObjectPool.getInstance().createObject(a);
        a.setFish(d, b, c, f, g, u, n, k, m, l);
        this.world.addBody(a);
        this.view.addChild(a.view);
        return a
    };
    g.reUseFish = function(d) {
        this.view.addChild(d.view)
    };
    g.destroyObject = function(d) {
        ObjectPool.getInstance().destroyObject(d)
    };
    g.onEnterFrame = function(d) {
        10 > d || 1E3 < d || this.world.step(1 / 60, d / 1E3)
    };
    f.getInstance = function() {
        return f.instance
    };
    f.key = "gameScene";
    return f
}(SceneObject);
GameScene.prototype.__class__ = "GameScene";
var Game = function() {
    function e(e) {
        this.mGameModel = GameModel.getInstance();
        this.mRoot = e;
        this.mGameLayer = new egret.DisplayObjectContainer;
        this.mGuiLayer = new egret.gui.Group;
        this.mGuiLayer.width = Const.stageWidth;
        this.mGuiLayer.height = Const.stageHeight;
        this.mRoot.addChild(this.mGuiLayer);
        this.mRoot.addChild(this.mGameLayer)
    }
    var f = e.prototype;
    f.startup = function() {
        this.startGame();
        this.mGuiLayer.addElement(new BgScene);
        this.correctLocation();
        GameScene.getInstance().mTool.setClickLayer(this.mRoot)
    };
    f.startGame = function() {
        this.mGameScene = ObjectPool.getInstance().createObject(GameScene);
        this.mGameLayer.addChild(this.mGameScene.view)
    };
    f.correctLocation = function() {
        GameScene.getInstance().view.y = 30;
        GameScene.getInstance().view.x = 50
    };
    return e
}();
Game.prototype.__class__ = "Game";

