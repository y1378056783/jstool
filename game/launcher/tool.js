/**
 * 工具类、对象池
 * @authors Your Name (you@example.org)
 * @date    2018-03-24 15:18:35
 * @version $Id$
 */

var ToolObject = function(e) { //工具对象
    function f() {
        e.call(this);
        this.pullSpeed = 1;
        this.mState = -1;
        this.positions = [
            [350, 240],
            [38, 434],
            [72, 488],
            [128, 532],
            [366, 351],
            [356, 383],
            [354, 402]
        ];
        this.iniFishWireLength = 1.5;
        this.isExecuteTurnBack = this.touch = this.isOnCast = this.ForwardOrBackward = !1;
        this.fishs = [];
        this.baitLevel = -1;
        this.fishHP = 3;
        this.fishPrice = 0;
        this.SW = this.isFly = this.isOnTouch = this.isCanPull = this.isAutoBack = !1;
        this.flySpeedx = 1;
        this.world = new p2.World;
        this.world.gravity = [0, -50];
        this.world.sleepMode = p2.World.BODY_SLEEPING;
        this.view = new egret.Sprite;
        this.pole = new egret.Bitmap(RES.getRes("pole1_png"));
        this.setPole(DataManager.instance.Cfg.usingPole);
        this.pole.anchorX = 0;
        this.pole.anchorY = 0.5;
        this.catGroup = new CatLocation(this.pole);
        this.view.addChild(this.catGroup);
        this.end = new p2.Body({
            mass: 0//质量为0的物体不会动
        });
        var d = new p2.Rectangle(1, 1);//鱼线
        this.end.addShape(d);//添加鱼线形状
        this.end.type = p2.Body.STATIC;
        this.world.addBody(this.end);
        this.bait = new p2.Body({//诱饵
            mass: 1,
            position: [15, 15]
        });
        d = new p2.Rectangle(1, 1);
        this.bait.addShape(d);
        this.bait.damping = 0.5;
        this.world.addBody(this.bait);
        this.bait.allowSleep = !1;
        this.yueshu = new p2.DistanceConstraint(this.end, this.bait, {
            wakeUpBodies: !1,
            collideConnected: !1
        });
        this.yueshu.lowerLimit = 0;
        this.yueshu.upperLimit = this.iniFishWireLength;
        this.yueshu.upperLimitEnabled = !0;
        this.yueshu.lowerLimitEnabled = !0;
        this.yueshu.setStiffness(1E6);
        this.world.addConstraint(this.yueshu);
        this.gLine = new egret.Shape;
        this.view.addChild(this.gLine);
        this.baitImg = new egret.Bitmap(RES.getRes("smallbait1_png")); //鱼饵素材
        this.baitImg.anchorX = 0.5;
        this.baitImg.anchorY = 0.5;
        this.view.addChild(this.baitImg);
        this.bait.displays = [this.baitImg];
        this.end.displays = [];
        this.ini();
        egret.Ticker.getInstance().register(this.loop, this)//鱼杆动画关键部分,抛杆，收杆
    }
    __extends(f, e);
    var g = f.prototype;
    f.instance = function() {
        return f._instance
    };
    g.ini = function() {
        this.bait.damping = 0.8;
        this.poleRota = Const.iniPoleRota
    };
    g.setPole = function(d) { //设置鱼杆
    	console.log(d);
        var b = GameModel.getInstance().poleGroupData[d - 1];
        this.pole.texture = RES.getRes("pole" + d + "_png");
        this.pole.name = d.toString();
        this.poleCastLength = b.
        throw;
        this.pullSpeed = Const.basePullSpeed * b.pull
    };
    g.loop = function(d) {
        if (!(Const.isOnBlur || 10 > d || 1E3 < d)) {
            this.world.step(d / 1E3);
            30 * this.bait.position[1] < Const.waterPanel - 20 && this.bait.displays[0].y <= Const.stageHeight - Const.waterPanel + 20 && this.enterWater();
            30 * this.bait.position[1] > Const.waterPanel - 20 && this.bait.displays[0].y >= Const.stageHeight - Const.waterPanel + 20 && this.leaveWater();
            3 == this.state && (this.yueshu.upperLimitEnabled || (this.yueshu.upperLimitEnabled = !0), 0 != this.world.gravity[0] && this.bait.position[0] < this.end.position[0] + 3 && (this.world.gravity[0] = 0));
            if (this.isOnTouch && this.isCanPull || this.isAutoBack) {
                3 == this.state && !0 == this.world.applyGravity && (this.world.applyGravity = !1);
                if (30 * this.bait.position[1] >= Const.waterPanel - 30 && this.bait.position[0] > this.end.position[0] + 2) this.bait.position[0] -= this.pullSpeed * d / 500,
                    this.bait.position[1] = (Const.waterPanel - 30) / 30,
                    this.SW || (this.SW = !this.SW);
                else {
                    if (this.SW) {
                        this.SW = !this.SW;
                        var b = [this.bait.position[0] - this.end.position[0], this.bait.position[1] - this.end.position[1]],
                            b = Math.sqrt(b[0] * b[0] + b[1] * b[1]);
                        this.yueshu.upperLimit = b
                    }
                    this.yueshu.upperLimit -= this.pullSpeed * d / 300
                }
                this.yueshu.upperLimit <= this.iniFishWireLength && (this.isAutoBack = this.isCanPull = !1, this.yueshu.upperLimit = this.iniFishWireLength)
            } else 3 != this.state || this.world.applyGravity || (this.world.applyGravity = !0);
            30 * this.bait.position[1] < Const.waterPanel - 25 && !this.isCanPull && (this.isCanPull = !0);
            this.catGroup.moveWave(2 * d);
            this.touch && ((-180 > this.pole.rotation && (this.ForwardOrBackward = !0, this.turnBack()), this.ForwardOrBackward) ? this.poleRota < Const.iniPoleRota && (Const.iniPoleRota - this.poleRota < 0.4 * d ? this.CastOver() : this.poleRota += 0.4 * d) : this.poleRota -= 0.4 * d);
            this.isFly && this.fly(d);
            this.bait.angle = Math.atan2(this.world.bodies[0].position[1] - this.world.bodies[1].position[1], this.world.bodies[0].position[0] - this.world.bodies[1].position[0]);
            if (d = this.bait.displays[0]) d.x = 30 * this.bait.position[0],
                d.y = Const.stageHeight - 30 * this.bait.position[1],
                d.rotation = 360 - 180 * this.bait.angle / Math.PI,
                Main.getInstance().setScenePos([30 * this.bait.position[0], 30 * this.bait.position[1]]);
            this.gLine.graphics.clear();
            this.gLine.graphics.lineStyle(1, 14869202, 1);
            this.gLine.graphics.moveTo(30 * this.end.position[0], Const.stageHeight - 30 * this.end.position[1]);
            this.gLine.graphics.lineTo(30 * this.bait.position[0], Const.stageHeight - 30 * this.bait.position[1])
        }
    };
    g.turnBack = function() {
        //console.log('鱼杆回头');
        this.bait.velocity = [0, 40];
        this.isExecuteTurnBack = !0
    };
    g.CastOver = function() {
        //console.log('抛鱼杆');
        !0 == this.isOnCast && (this.isExecuteTurnBack = this.touch = this.isOnCast = !1, this.poleRota = Const.iniPoleRota, this.isFly ? this.yueshu.upperLimitEnabled = !1 : this.bait.velocity = [10, -10])
    };
    g.chaseBack = function() {
        //console.log('鱼咬钩');
        for (var d in this.fishs) this.fishs[d].isCanGiveUpChaseHook();
        this.fishs = []
    };
    g.isOnHook = function(d) {
        //console.log('鱼饵被吃啦！');
        3 == this.state && (0 > this.baitLevel ? d.grade <= Math.abs(this.baitLevel) + 1 ? (console.log(this.baitLevel, d.grade, d.price, "y"), this.onHook(d)) : (this.baitLevel = 0, this.fishResId = "hook", this.bait.displays[0].anchorX = 0.9, this.bait.displays[0].anchorY = 0.18, this.baitImg.texture = RES.getRes("thefishhook_png"), d.isCanGiveUpChaseHook(!0)) : 0 == this.baitLevel ? d.isCanGiveUpChaseHook() : this.baitLevel < d.grade && (this.fishHP--, this.baitImg.texture = RES.getRes(this.fishResId + "_0" + (4 - this.fishHP) + "_png"), d.isCanGiveUpChaseHook(!0), this.createBlood(d), this.fishHP || (this.baitLevel = 0)))
    };
    g.onHook = function(d) {
        //console.log('鱼的价值：'+d.price)
        this.chaseBack();
        this.fish = d;
        this.baitLevel = d.grade;
        this.fishHP = 3;
        this.fishPrice = d.price;
        FishRule.getInstance().deleteFish(this.fish);
        this.baitImg.texture = RES.getRes(d.resid + "_01_png");
        this.baitImg.anchorX = d.view.anchorX;
        this.baitImg.anchorY = d.view.anchorY;
        this.fishResId = d.resid
    };
    g.beSell = function() {
        //console.log('卖钱');
        this.baitImg.texture = RES.getRes("smallbait1_png");
        this.baitLevel = -1;
        MainUILayer.instance().upgrade(this.fish.grade);//等级更新
        DataManager.instance.money += Math.round(this.fishPrice * this.fishHP / 3);
        this.fishPrice = 0;
        this.fishHP = 3;
        this.baitImg.anchorX = this.baitImg.anchorY = 0.5
    };
    g.createBlood = function(d) { //咬中之后出现红色血液
        var b = this,
            a = new egret.Bitmap;
        a.texture = RES.getRes("blood_png");
        a.x = d.view.x;
        a.y = d.view.y;
        a.anchorX = a.anchorY = 0.5;
        this.view.addChild(a);
        egret.Tween.get(a).to({
                y: a.y + 150,
                alpha: 0
            },
            1500).call(function() {
            b.view.removeChild(a)
        })
    };
    Object.defineProperty(g, "state", {
        get: function() {
            return this.mState
        },
        set: function(d) {
            d != this.mState && (this.mState = d)
        },
        enumerable: !0,
        configurable: !0
    });
    g.enterWater = function() {
        //console.log('鱼饵进入水面')
        this.fish && (this.fish.position[0] = this.fish.center[0], this.fish.position[1] = this.fish.center[1] - this.fish.radius + 10, this.fish.view.x = this.fish.position[0], this.fish.view.y = Const.stageHeight - this.fish.position[1], this.fish.view.rotation = 360 - this.fish.angle, GameScene.getInstance().view.addChild(this.fish.view), this.fish = null);
        this.world.gravity = [-3, -15];
        this.state = 3;
        0 < this.baitLevel ? (this.baitImg.texture = RES.getRes("smallbait" + this.baitLevel + "_png"), this.baitLevel = -this.baitLevel) : 0 == this.baitLevel && (this.baitImg.texture = RES.getRes("smallbait1_png"), this.baitLevel = -1);
        this.fishPrice = 0;
        this.yueshu.upperLimitEnabled = !0;
        this.world.applyGravity = !0;
        this.baitImg.anchorX = this.baitImg.anchorY = 0.5;
        this.freeTheBaitWhenEnterWater();
        this.isCanPull = !0;
        this.view.dispatchEventWith(Action.IN)
    };
    g.freeTheBaitWhenEnterWater = function() {
        //console.log('鱼饵在水中')
        this.bait.damping = 0.6;
        this.isFly = !1;
        this.bait.mass = 0.3;
        var d = [this.bait.position[0] - this.end.position[0], this.bait.position[1] - this.end.position[1]],
            b = Math.sqrt(d[0] * d[0] + d[1] * d[1]);
        this.yueshu.upperLimit = "4" == this.pole.name ? 1.3 * b : b;
        this.world.applyGravity || (this.world.applyGravity = !0);
        d = Math.atan2(d[1], d[0]) - 90;
        b = Math.sqrt(this.bait.velocity[0] * this.bait.velocity[0] + this.bait.velocity[1] * this.bait.velocity[1]) / 3;
        this.bait.velocity = [0.2 * b * Math.cos(d), 0.2 * b * Math.sin(d)]
    };
    g.leaveWater = function() {
        //console.log('鱼饵离开水面')
        this.world.gravity = [0, -50];
        this.state = 0;
        this.isAutoBack = !0;
        this.bait.velocity = [0, 3];
        this.bait.damping = 0.8;
        this.world.applyGravity = !0;
        MainUILayer.instance().showMenus();
        var d = [this.bait.position[0] - this.end.position[0], this.bait.position[1] - this.end.position[1]],
            d = Math.sqrt(d[0] * d[0] + d[1] * d[1]);
        this.yueshu.upperLimit = d;
        this.view.dispatchEventWith(Action.OUT, !1, this.fishPrice)
    };
    g.setClickLayer = function(d) {
        this.clickLayer = d;
        this.clickLayer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.clickLayer.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.clickLayer.touchEnabled = !0
    };
    g.onCreate = function() {
        e.prototype.onCreate.call(this)
    };
    g.onTouchBegin = function(d) {
        this.isOnTouch = !0;
        this.isFly || this.isAutoBack || (3 != this.state && !this.isOnCast && 1 > Math.abs(this.yueshu.upperLimit - this.iniFishWireLength) ? (this.bait.mass = 1, this.ForwardOrBackward = !1, this.touch = !0, this.bait.velocity = [0, 1], this.isOnCast = !0, this.isFly = this.isExecuteTurnBack = !1, this.yueshu.upperLimit = this.iniFishWireLength) : 3 == this.state && "4" == this.pole.name && (d = [this.bait.position[0] - this.end.position[0], this.bait.position[1] - this.end.position[1]], d = Math.sqrt(d[0] * d[0] + d[1] * d[1]), this.yueshu.upperLimit = d))
    };
    g.onTouchEnd = function(d) {
        this.isOnTouch = !1;
        if (!this.isFly && !this.isAutoBack)
            if (3 == this.state) {
            	//console.log('鱼饵在水下')
                d = [this.bait.position[0] - this.end.position[0], this.bait.position[1] - this.end.position[1]];
                var b = Math.sqrt(d[0] * d[0] + d[1] * d[1]);
                this.yueshu.upperLimit = b;
                if(this.world.gravity[0]!=false){
                	d = Math.atan2(d[1], d[0]) - 90;
                	b = Math.sqrt(this.bait.velocity[0] * this.bait.velocity[0] + this.bait.velocity[1] * this.bait.velocity[1]) / 3;
                	this.bait.velocity = [b * Math.cos(d), b * Math.sin(d)]//速率
                }else{
                	this.bait.velocity = [0, 0]
                }
            }else{
                //console.log('鱼饵在水面')
                if(this.isExecuteTurnBack && this.touch){
                	if(this.poleRota == Const.iniPoleRota){
						this.ForwardOrBackward = !1
                	}
                	this.castBait()
                }
            }
    };
    g.castBait = function() {
        console.log('鱼杆甩出')
        if (!this.isFly && this.yueshu.upperLimitEnabled && 3 != this.state) {
            this.isFly = !0;
            this.yueshu.upperLimitEnabled = !1;
            this.world.gravity[0] = 0;
            var d = this.pole.rotation,
                d = -115 > d ? Math.cos(-15 * Math.PI / 180) : Math.cos(1.5 * (d - -90) * Math.PI / 180),
                b = GameModel.getInstance().poleGroupData[Number(this.pole.name) - 1].pull;
            this.bait.velocity[1] = 20 * d * b;
            this.flySpeedx = 0.3 * b;
            this.bait.damping = 0.1;
            this.view.dispatchEventWith(Action.CAST);
            this.bait.mass = this.poleCastLength;
            MainUILayer.instance().hideMenus()
            console.log(b);
        }
    };
    g.onDestroy = function() {
        this.view && this.view.parent && this.view.parent.removeChild(this.view);
        GameScene.getInstance().world.removeBody(this.end)
    };
    Object.defineProperty(g, "poleRota", {
        get: function() {
            return this.pole.rotation
        },
        set: function(d) {
            this.pole.rotation = d;
            this.end.position[0] = (this.pole.x + 185 * Math.cos(this.pole.rotation * Math.PI / 180)) / 30;
            this.end.position[1] = (Const.stageHeight - this.pole.y - 185 * Math.sin(this.pole.rotation * Math.PI / 180)) / 30;
            this.isFly || (d = this.ForwardOrBackward ? d - 15 : d + 15, this.bait.position[0] = (this.pole.x + 215 * Math.cos(d * Math.PI / 180)) / 30, this.bait.position[1] = (Const.stageHeight - this.pole.y - 215 * Math.sin(d * Math.PI / 180)) / 30)
        },
        enumerable: !0,
        configurable: !0
    });
    g.fly = function(d) {
        //console.log('鱼杆飞出')
        this.isFly && (0 < this.flySpeedx && 51 > this.bait.position[0] ? (this.bait.position[0] += this.flySpeedx * d / 15, 0.1 < this.flySpeedx && (this.flySpeedx -= d / 500)) : 0 > this.flySpeedx && (this.flySpeedx = 0))
    };
    f.key = "toolObject";
    return f
}(GameObject);
ToolObject.prototype.__class__ = "ToolObject";
var ObjectPool = function() { //对象池
    function e() {
        this._isPause = !1;
        this._pool = {};
        this._list = [];
        egret.Ticker.getInstance().register(this.onEnterFrame, this)//鱼类动画关键部位
    }
    var f = e.prototype;
    f.onEnterFrame = function(e) {
        if (!this._isPause)
            for (var d = this._list.concat(), b = 0, a = d.length; b < a; b++) d[b].onEnterFrame(e)
    };
    f.pauseEnterFrame = function() {
        this._isPause = !0;
        for (var e = this._list.concat(), d = 0, b = e.length; d < b; d++) e[d].onPause()
    };
    f.resumeEnterFrame = function() {
        this._isPause = !1;
        for (var e = this._list.concat(), d = 0, b = e.length; d < b; d++) e[d].onResume()
    };
    f.createObject = function(e) {
        var d = e.key,
            b = this._pool[d];
        null != b && b.length ? e = b.pop() : (e = new e, e.key = d);
        this._list.push(e);
        e.onCreate();
        return e
    };
    f.destroyObject = function(e) {
        var d = e.key;
        null == this._pool[d] && (this._pool[d] = []); - 1 == this._pool[d].indexOf(e) && this._pool[d].push(e);
        e.onDestroy();
        e = this._list.indexOf(e); - 1 != e && this._list.splice(e, 1)
    };
    f.destroyObjectByKey = function(e) {
        var d = this._pool[e];
        null == d && (this._pool[e] = d = []);
        this._list = this._list.filter(function(b, a, c) {
            return b.key == e ? (-1 == d.indexOf(b) && d.push(b), b.onDestroy(), !1) : !0
        })
    };
    f.destroyAllObject = function() {
        for (; this._list.length;) this.destroyObject(this._list[0])
    };
    e.getInstance = function() {
        null == e.instance && (e.instance = new e);
        return e.instance
    };
    return e
}();
ObjectPool.prototype.__class__ = "ObjectPool";
