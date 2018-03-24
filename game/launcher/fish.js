/**
 * 鱼类活动
 * @authors Your Name (you@example.org)
 * @date    2018-03-24 15:11:18
 * @version $Id$
 */
var Fish = function(e) { //方法
    function f() {
        e.call(this);
        this.speed = 1.2;
        this.angSpeed = 0.7;
        this.vector = [0, 0];
        this.isOut = !1;
        this.campaignsId = 1;
        this.isBack = !1;
        this.arcBaseLength = 5;
        this._arcPos = [];
        this.isGiveUpChaseHook = this.isChaseHook = !1;
        this.lastHookLength = 0;
        this.view.x = -1E3
    }
    __extends(f, e);
    var g = f.prototype;
    g.setFish = function(d, b, a, c, e, f, g, u, n, k) {
        this.price = u;
        this.center = d;
        this.radius = b;
        this.grade = c;
        3 == this.grade ? this.senseRange = 125 : 4 == this.grade && (this.senseRange = 150);
        this.fishGroupId = n;
        this.arcBaseLength = this.radius * this.grade * 0.5;
        g && (this.priSpeed = this.speed = g);
        k ? this.position[0] = -1E3 : (this.position[0] = d[0] + 2 * b * (Math.random() - 0.5), this.position[1] = d[1] + 2 * b * (Math.random() - 0.5));
        this.view.texture = RES.getRes(a + "_01_png");
        this.resid = a;
        d = new p2.Rectangle(10, 10);
        this.addShape(d);
        GameScene.getInstance().world.addBody(this);
        this.view.anchorX = e;
        this.view.anchorY = f;
        this.view.x = this.position[0];
        this.view.y = Const.stageHeight - this.position[1];
        this.view.rotation = 360 - this.angle;
        this.reSetFishData()
    };
    g.reSetFishData = function() {};
    Object.defineProperty(g, "rota", {
        get: function() {
            return this.angle
        },
        set: function(d) {
            this.angle = d;
            for (d = this.rota; - 180 > d;) d += 360;
            for (; 180 < d;) d -= 360; - 90 < d && 90 > d ? -1 == this.view.scaleY && (this.view.scaleY = 1) : 1 == this.view.scaleY && (this.view.scaleY = -1)
        },
        enumerable: !0,
        configurable: !0
    });
    g.angAnimation = function(d) {
        if (0 != this.goToAng) {
            var b = this.goToAng / Math.abs(this.goToAng);
            0 > this.goToAng * (this.goToAng - this.angSpeed * b) ? (this.rota += this.goToAng, this.goToAng = 0) : (d = d * this.angSpeed * b / 20, this.goToAng -= d, this.rota += d)
        }
    };
    g.go = function(d) {
    	//console.log('鱼类动作')
        this.position[0] += this.speed * this.vector[0] * d / 10;
        this.position[1] += this.speed * this.vector[1] * d / 10
    };
    g.arcGo = function(d) {
        var b = this.angle * Math.PI / 180;
        this.position[0] += this.speed * Math.cos(b) * d / 20;
        this.position[1] += this.speed * Math.sin(b) * d / 20
    };
    g.setDir = function(d, b) {
        this.AirLoc = [d, b];
        this.isOut = !0;
        this.speed = Math.abs(this.speed);
        var a = [d - this.x, b - this.y],
            c = Math.sqrt(a[0] * a[0] + a[1] * a[1]),
            e = 0.7 + 0.3 * Math.random();
        this.vector[0] = e * a[0] / c;
        this.vector[1] = e * a[1] / c;
        this.rota = 180 * Math.atan2(this.vector[1], this.vector[0]) / Math.PI
    };
    g.setChaseHookDir = function(d, b) {
        !1 == this.isChaseHook && (this.isChaseHook = !0, this.campaignsId = 1, GameScene.getInstance().mTool.fishs.push(this));
        this.AirLoc = [d, b];
        this.speed = Math.abs(this.speed);
        1 > this.speed && (this.speed = 1);
        var a = [d - this.x, b - this.y],
            c = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
        this.vector[0] = a[0] / c;
        this.vector[1] = a[1] / c;
        this.rota = 180 * Math.atan2(a[1], a[0]) / Math.PI
    };
    g.reachPoint = function() {//到达一定范围自动上钩
        if(this.isChaseHook){
        	if(Math.abs(this.AirLoc[0] - this.center[0]) < this.radius && Math.abs(this.AirLoc[1] - this.center[1]) < this.radius){
				this.isOut = !1
        	} 
        	console.log('自动上钩');
        	GameScene.getInstance().mTool.isOnHook(this)
        } else{
        	this.isOut && this.goBackArea()
        }
    };
    g.goBackArea = function(d) {
        if (Math.abs(this.AirLoc[0] - this.center[0]) < this.radius && Math.abs(this.AirLoc[1] - this.center[1]) < this.radius){
        	this.isOut = !1
            if(d){
            	this.vector[0] /= 10
        		this.vector[1] /= 10
        		this.time = 1E3 * Math.random() + 1E3
        		this.frameTime = 0;
        	}
        	//console.log('上钩')
        	//已经上钩
        }else {
        	//鱼饵被吃，没上钩
            this.isOut = !0;
            d = this.center[0] + 0.7 * this.radius * (Math.random() - 0.5);
            var b = this.center[1] + 0.7 * this.radius * (Math.random() - 0.5);
            this.setDir(d, b)
        }
    };
    g.goBack = function(d) {
        Math.abs(this.center[0] - this.x) < this.radius && Math.abs(this.center[1] - this.y) < this.radius && (this.isOut = this.isBack = !1);
        this.go(d)
    };
    g.setGoBack = function() {
        this.isBack = !0;
        this.speed = Math.abs(this.speed);
        var d = [this.center[0] - this.x, this.center[1] - this.y],
            b = Math.sqrt(d[0] * d[0] + d[1] * d[1]),
            a = 0.5 + Math.random();
        this.vector[0] = a * d[0] / b;
        this.vector[1] = a * d[1] / b;
        this.rota = 180 * Math.atan2(this.vector[1], this.vector[0]) / Math.PI
    };
    Object.defineProperty(g, "arcPos", {
        get: function() {
            return this._arcPos
        },
        set: function(d) {
            this._arcPos = d;
            this.arcLength = Math.sqrt((d[0] - this.x) * (d[0] - this.x) + (d[1] - this.y) * (d[1] - this.y))
        },
        enumerable: !0,
        configurable: !0
    });
    g.setArcLength = function(d) {
        this.arcLength = d;
        var b = 2 * Math.random() * Math.PI;
        this._arcPos = [this.x + Math.cos(b) * d, this.y + Math.sin(b) * d]
    };
    Object.defineProperty(g, "arcMove", {
        get: function() {
            return this.angle
        },
        set: function(d) {
            var b = d - this.rota;
            this.rota = d;
            d = 0 > b ? this.angle + 90 : this.angle - 90;
            this.position[0] = this._arcPos[0] + Math.cos(d * Math.PI / 180) * this.arcLength;
            this.position[1] = this._arcPos[1] + Math.sin(d * Math.PI / 180) * this.arcLength
        },
        enumerable: !0,
        configurable: !0
    });
    g.goArc = function(d) {
        this.arcMove += this.speed * d * 360 / (2 * Math.PI * this.arcLength * 10)
    };
    g.getMoveTime = function() {
        return (1E3 * Math.random() + 1E3) / this.speed
    };
    g.locationChanged = function(d) {
        if (!this.isGiveUpChaseHook && 3 == GameScene.getInstance().mTool.state) {
            d = [30 * GameScene.getInstance().mTool.bait.position[0], 30 * GameScene.getInstance().mTool.bait.position[1]];
            var b = [d[0] - this.x, d[1] - this.y],
                b = Math.sqrt(b[0] * b[0] + b[1] * b[1]);
            b < this.senseRange ? 8 > b && !0 == this.isChaseHook ? this.reachPoint() : GameScene.getInstance().mTool.baitLevel < this.grade && 0 != GameScene.getInstance().mTool.baitLevel && 5 < b && this.setChaseHookDir(d[0], d[1]) : this.isCanGiveUpChaseHook();
            this.lastHookLength = b
        }
        this.y >= Const.waterPanel && this.isCanGiveUpChaseHook();
        this.view.x = this.position[0];
        this.view.y = Const.stageHeight - this.position[1];
        this.view.rotation = 360 - this.angle
    };
    g.isCanGiveUpChaseHook = function(d) {
        if(!0 == this.isChaseHook){
        	this.frameTime = 0;
        	this.isChaseHook = !1
        	if(!1 == this.isGiveUpChaseHook){
        		this.isGiveUpChaseHook = !0
        	}
        	if(d){//鱼饵被吃
        		this.goBackArea(d)
        	}else{//已经上钩了
        		this.goBackArea()
        	}
        }
    };
    g.beginPart = function(d) {
        Const.isOnBlur || this.isBack && this.goBack(d)
    };
    g.reSetMoveDirPart = function() {
        !0 == this.isGiveUpChaseHook && (this.isGiveUpChaseHook = !1, this.time += 1E3, this.priSpeed != this.speed && (this.speed = this.priSpeed));
        if (180 < Math.abs(this.angle))
            if (0 < this.angle)
                for (; - 180 < this.angle;) this.angle -= 360;
            else
                for (; 180 > this.angle;) this.angle += 360
    };
    f.key = "fish";
    return f
}(FishObject);
Fish.prototype.__class__ = "Fish";

