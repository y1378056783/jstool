/**
 * @authors yyp
 * @description fishing h5 game
 * @date    2018-03-23 10:48:50
 * @version $Id$
 */
var FishObject = function(e) {
    function f() {
        e.call(this, {
            type: p2.Body.KINEMATIC
        });
        this.radius = 250;
        this.life = 3;
        this.onHookRange = 15;
        this.senseRange = 100;
        this.frameTime = this.time = 0;
        this.view = new egret.Bitmap;
        this.view.anchorX = 0.7;
        this.view.anchorY = 0.5
    }
    __extends(f, e);
    var g = f.prototype;
    Object.defineProperty(g, "x", {
        get: function() {
            return this.position[0]
        },
        set: function(d) {
            this.position[0] = d
        },
        enumerable: !0,
        configurable: !0
    });
    Object.defineProperty(g, "y", {
        get: function() {
            return this.position[1]
        },
        set: function(d) {
            this.position[1] = d
        },
        enumerable: !0,
        configurable: !0
    });
    g.onDestroy = function() {
        this.view.parent && this.view.parent.removeChild(this.view);
        this.world && this.world.removeBody(this)
    }
    ;
    g.onEnterFrame = function(d) {}
    ;
    g.onCreate = function() {}
    ;
    g.onPause = function() {}
    ;
    g.onResume = function() {}
    ;
    f.key = "fishObject";
    return f
}(p2.Body);
FishObject.prototype.__class__ = "FishObject";
var GameObject = function(e) {
    function f() {
        e.call(this);
        this.key = "gameObject"
    }
    __extends(f, e);
    var g = f.prototype;
    g.onCreate = function() {}
    ;
    g.onDestroy = function() {}
    ;
    g.onPause = function() {}
    ;
    g.onResume = function() {}
    ;
    g.onEnterFrame = function(d) {}
    ;
    return f
}(egret.HashObject);
GameObject.prototype.__class__ = "GameObject";
var SceneObject = function(e) {
    function f() {
        e.call(this);
        this.key = "sceneObject"
    }
    __extends(f, e);
    var g = f.prototype;
    g.onCreate = function() {}
    ;
    g.onDestroy = function() {}
    ;
    g.onPause = function() {}
    ;
    g.onResume = function() {}
    ;
    g.onEnterFrame = function(d) {}
    ;
    return f
}(egret.EventDispatcher);
SceneObject.prototype.__class__ = "SceneObject";
var Fish = function(e) {
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
        k ? this.position[0] = -1E3 : (this.position[0] = d[0] + 2 * b * (Math.random() - 0.5),
        this.position[1] = d[1] + 2 * b * (Math.random() - 0.5));
        this.view.texture = RES.getRes(a + "_01_png");
        this.resid = a;
        d = new p2.Rectangle(10,10);
        this.addShape(d);
        GameScene.getInstance().world.addBody(this);
        this.view.anchorX = e;
        this.view.anchorY = f;
        this.view.x = this.position[0];
        this.view.y = Const.stageHeight - this.position[1];
        this.view.rotation = 360 - this.angle;
        this.reSetFishData()
    }
    ;
    g.reSetFishData = function() {}
    ;
    Object.defineProperty(g, "rota", {
        get: function() {
            return this.angle
        },
        set: function(d) {
            this.angle = d;
            for (d = this.rota; -180 > d; )
                d += 360;
            for (; 180 < d; )
                d -= 360;
            -90 < d && 90 > d ? -1 == this.view.scaleY && (this.view.scaleY = 1) : 1 == this.view.scaleY && (this.view.scaleY = -1)
        },
        enumerable: !0,
        configurable: !0
    });
    g.angAnimation = function(d) {
        if (0 != this.goToAng) {
            var b = this.goToAng / Math.abs(this.goToAng);
            0 > this.goToAng * (this.goToAng - this.angSpeed * b) ? (this.rota += this.goToAng,
            this.goToAng = 0) : (d = d * this.angSpeed * b / 20,
            this.goToAng -= d,
            this.rota += d)
        }
    }
    ;
    g.go = function(d) {
        this.position[0] += this.speed * this.vector[0] * d / 10;
        this.position[1] += this.speed * this.vector[1] * d / 10
    }
    ;
    g.arcGo = function(d) {
        var b = this.angle * Math.PI / 180;
        this.position[0] += this.speed * Math.cos(b) * d / 20;
        this.position[1] += this.speed * Math.sin(b) * d / 20
    }
    ;
    g.setDir = function(d, b) {
        this.AirLoc = [d, b];
        this.isOut = !0;
        this.speed = Math.abs(this.speed);
        var a = [d - this.x, b - this.y]
          , c = Math.sqrt(a[0] * a[0] + a[1] * a[1])
          , e = 0.7 + 0.3 * Math.random();
        this.vector[0] = e * a[0] / c;
        this.vector[1] = e * a[1] / c;
        this.rota = 180 * Math.atan2(this.vector[1], this.vector[0]) / Math.PI
    }
    ;
    g.setChaseHookDir = function(d, b) {
        !1 == this.isChaseHook && (this.isChaseHook = !0,
        this.campaignsId = 1,
        GameScene.getInstance().mTool.fishs.push(this));
        this.AirLoc = [d, b];
        this.speed = Math.abs(this.speed);
        1 > this.speed && (this.speed = 1);
        var a = [d - this.x, b - this.y]
          , c = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
        this.vector[0] = a[0] / c;
        this.vector[1] = a[1] / c;
        this.rota = 180 * Math.atan2(a[1], a[0]) / Math.PI
    }
    ;
    g.reachPoint = function() {
        this.isChaseHook ? (Math.abs(this.AirLoc[0] - this.center[0]) < this.radius && Math.abs(this.AirLoc[1] - this.center[1]) < this.radius && (this.isOut = !1),
        GameScene.getInstance().mTool.isOnHook(this)) : this.isOut && this.goBackArea()
    }
    ;
    g.goBackArea = function(d) {
        if (Math.abs(this.AirLoc[0] - this.center[0]) < this.radius && Math.abs(this.AirLoc[1] - this.center[1]) < this.radius)
            this.isOut = !1,
            d && (this.vector[0] /= 10,
            this.vector[1] /= 10,
            this.time = 1E3 * Math.random() + 1E3,
            this.frameTime = 0);
        else {
            this.isOut = !0;
            d = this.center[0] + 0.7 * this.radius * (Math.random() - 0.5);
            var b = this.center[1] + 0.7 * this.radius * (Math.random() - 0.5);
            this.setDir(d, b)
        }
    }
    ;
    g.goBack = function(d) {
        Math.abs(this.center[0] - this.x) < this.radius && Math.abs(this.center[1] - this.y) < this.radius && (this.isOut = this.isBack = !1);
        this.go(d)
    }
    ;
    g.setGoBack = function() {
        this.isBack = !0;
        this.speed = Math.abs(this.speed);
        var d = [this.center[0] - this.x, this.center[1] - this.y]
          , b = Math.sqrt(d[0] * d[0] + d[1] * d[1])
          , a = 0.5 + Math.random();
        this.vector[0] = a * d[0] / b;
        this.vector[1] = a * d[1] / b;
        this.rota = 180 * Math.atan2(this.vector[1], this.vector[0]) / Math.PI
    }
    ;
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
    }
    ;
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
    }
    ;
    g.getMoveTime = function() {
        return (1E3 * Math.random() + 1E3) / this.speed
    }
    ;
    g.locationChanged = function(d) {
        if (!this.isGiveUpChaseHook && 3 == GameScene.getInstance().mTool.state) {
            d = [30 * GameScene.getInstance().mTool.bait.position[0], 30 * GameScene.getInstance().mTool.bait.position[1]];
            var b = [d[0] - this.x, d[1] - this.y]
              , b = Math.sqrt(b[0] * b[0] + b[1] * b[1]);
            b < this.senseRange ? 8 > b && !0 == this.isChaseHook ? this.reachPoint() : GameScene.getInstance().mTool.baitLevel < this.grade && 0 != GameScene.getInstance().mTool.baitLevel && 5 < b && this.setChaseHookDir(d[0], d[1]) : this.isCanGiveUpChaseHook();
            this.lastHookLength = b
        }
        this.y >= Const.waterPanel && this.isCanGiveUpChaseHook();
        this.view.x = this.position[0];
        this.view.y = Const.stageHeight - this.position[1];
        this.view.rotation = 360 - this.angle
    }
    ;
    g.isCanGiveUpChaseHook = function(d) {
        !0 == this.isChaseHook && (this.frameTime = 0,
        this.isChaseHook = !1,
        !1 == this.isGiveUpChaseHook && (this.isGiveUpChaseHook = !0),
        d ? this.goBackArea(d) : this.goBackArea())
    }
    ;
    g.beginPart = function(d) {
        Const.isOnBlur || this.isBack && this.goBack(d)
    }
    ;
    g.reSetMoveDirPart = function() {
        !0 == this.isGiveUpChaseHook && (this.isGiveUpChaseHook = !1,
        this.time += 1E3,
        this.priSpeed != this.speed && (this.speed = this.priSpeed));
        if (180 < Math.abs(this.angle))
            if (0 < this.angle)
                for (; -180 < this.angle; )
                    this.angle -= 360;
            else
                for (; 180 > this.angle; )
                    this.angle += 360
    }
    ;
    f.key = "fish";
    return f
}(FishObject);
Fish.prototype.__class__ = "Fish";
var DataManager = function() {
    function e() {
        this.levelValue = this._money = 0;
        this._music = !1
    }
    var f = e.prototype;
    Object.defineProperty(e, "instance", {
        get: function() {
            e._instance || (e._instance = new e);
            return e._instance
        },
        enumerable: !0,
        configurable: !0
    });
    f.init = function() {
        this.sound = RES.getRes("0_mp3");
        this.loadCfg();
        this._money = this.Cfg.money;
        this.levelValue = this.Cfg.levelValue
    }
    ;
    Object.defineProperty(f, "money", {
        get: function() {
            return this._money
        },
        set: function(f) {
            this._money = f;
            MainUILayer.instance().lb_score.text = this._money.toString();
            e.instance.saveCfg()
        },
        enumerable: !0,
        configurable: !0
    });
    f.musicSW = function() {
        !0 == this._music ? this.sound.pause() : this.sound.play(!0);
        this._music = !this._music
    }
    ;
    f.loadCfg = function() {
        var e = egret.localStorage.getItem("panpan-game22-1");
        if (e) {
            var d = JSON.parse(e)
              , b = d.vertify
              , d = d.data
              , e = JSON.stringify(d)
              , e = (new md5).hex_md5(e + Const.MD5KEY);
            b == e ? this.Cfg = d : this.useInitFullData()
        } else
            this.useInitFullData()
    }
    ;
    f.saveCfg = function() {
        var e = {
            money: this.money,
            levelValue: this.levelValue,
            pole: RodListWindow.instance().getPoleData(),
            place: RodListWindow.instance().getShipData(),
            music: this._music,
            usingPole: Number(GameScene.getInstance().mTool.pole.name),
            usingPlace: GameScene.getInstance().mTool.catGroup.placeId
        }
          , d = JSON.stringify(e)
          , e = {
            vertify: (new md5).hex_md5(d + Const.MD5KEY),
            data: e
        };
        egret.localStorage.setItem("panpan-game22-1", JSON.stringify(e))
    }
    ;
    f.useInitFullData = function() {
        this.Cfg = {
            money: Const.iniMoney,
            levelValue: 0,
            pole: [1],
            place: [1],
            music: !1,
            usingPole: 1,
            usingPlace: 1
        }
    }
    ;
    return e
}();
DataManager.prototype.__class__ = "DataManager";
var skins;
(function(e) {
    (function(e) {
        (function(e) {
            var d = function(b) {
                function a() {
                    b.call(this);
                    this.__s = egret.gui.setProperties;
                    this.elementsContent = [this.__4_i()];
                    this.states = [new egret.gui.State("up",[]), new egret.gui.State("down",[]), new egret.gui.State("disabled",[])]
                }
                __extends(a, b);
                a.prototype.__4_i = function() {
                    var a = new egret.gui.UIAsset;
                    this.__s(a, ["fillMode", "height", "source", "verticalCenter", "width"], ["scale", 22, "scrollbtn_png", 0, 41]);
                    return a
                }
                ;
                return a
            }(egret.gui.Skin);
            e.HScrollBarThumbSkin = d;
            d.prototype.__class__ = "skins.button.scrolBar.HScrollBarThumbSkin"
        }
        )(e.scrolBar || (e.scrolBar = {}))
    }
    )(e.button || (e.button = {}))
}
)(skins || (skins = {}));
var Action = function(e) {
    function f(f, d, b) {
        void 0 === d && (d = !1);
        void 0 === b && (b = !1);
        e.call(this, f, d, b)
    }
    __extends(f, e);
    f.OUT = "out_water";
    f.IN = "in_water";
    f.CAST = "cast";
    f.SELL = "sell";
    f.ON_HOOK = "on_hook";
    f.USING_POLE = "using_pole";
    f.USING_SHIP = "using_ship";
    return f
}(egret.Event);
Action.prototype.__class__ = "Action";
var GameModel = function() {
    function e() {
        this.fishTypeData = {};
        this.fishGroupData = [];
        this.poleGroupData = [{
            id: 1,
            name: "rod1_png",
            path: "rodfont1_png",
            arm: 26,
            throw: 1,
            pull: 1,
            cost: 0,
            purchased: !0
        }, {
            id: 2,
            name: "rod2_png",
            path: "rodfont2_png",
            arm: 35,
            throw: 0.85,
            pull: 1.2,
            cost: 2E3,
            purchased: !1
        }, {
            id: 3,
            name: "rod3_png",
            path: "rodfont3_png",
            arm: 50,
            throw: 0.7,
            pull: 1.3,
            cost: 6E3,
            purchased: !1
        }, {
            id: 4,
            name: "rod4_png",
            path: "rodfont4_png",
            arm: 70,
            throw: 0.65,
            pull: 1.5,
            cost: 15E3,
            purchased: !1
        }];
        this.shipgroupData = [{
            id: 1,
            name: "shatanicn_png",
            path: "beach_png",
            descr: "\u5cb8\u8fb9\u5782\u9493",
            cost: 0,
            purchased: !0
        }, {
            id: 2,
            name: "shipicn1_png",
            path: "shipfont1_png",
            descr: "\u53ef\u4ee5\u5e26\u4f60\u5230\u6d77\u6ee9\u4e4b\u5916\u9493\u9c7c",
            cost: 5E3,
            purchased: !1
        }, {
            id: 3,
            name: "shipicn2_png",
            path: "shipfont2_png",
            descr: "\u53ef\u4ee5\u5e26\u4f60\u5230\u8fdc\u79bb\u5cb8\u8fb9\u7684\u5730\u65b9\u9493\u9c7c",
            cost: 1E4,
            purchased: !1
        }];
        this.fishDescr1 = [{
            id: 1,
            name: "fish1_01_png",
            price: 45,
            des: "\u5c0f\u578b\u9c7c\u7c7b\uff0c\u751f\u6d3b\u533a\u57df\u5728\u6d77\u7684\u6700\u4e0a\u5c42\uff0c\u8d2a\u5403\uff0c\u901f\u5ea6\u5feb"
        }, {
            id: 2,
            name: "fish2_01_png",
            price: 45,
            des: "\u5c0f\u578b\u9c7c\u7c7b\uff0c\u751f\u6d3b\u533a\u57df\u5728\u6d77\u7684\u4e0a\u5c42\uff0c\u8d2a\u5403\uff0c\u901f\u5ea6\u6162"
        }, {
            id: 3,
            name: "fish3_01_png",
            price: 45,
            des: "\u5c0f\u578b\u9c7c\u7c7b\uff0c\u751f\u6d3b\u533a\u57df\u5728\u6d77\u7684\u4e0a\u5c42\uff0c\u8d2a\u5403\uff0c\u901f\u5ea6\u5feb"
        }, {
            id: 4,
            name: "fish4_01_png",
            price: 180,
            des: "\u5c0f\u578b\u9c7c\u7c7b\uff0c\u751f\u6d3b\u533a\u57df\u5728\u6d77\u7684\u4e2d\u5c42\uff0c\u8d2a\u5403\uff0c\u901f\u5ea6\u6162"
        }, {
            id: 5,
            name: "fish5_01_png",
            price: 45,
            des: "\u5c0f\u578b\u9c7c\u7c7b\uff0c\u751f\u6d3b\u533a\u57df\u5728\u6d77\u7684\u6700\u4e0a\u5c42\uff0c\u98df\u5c0f\u578b\u9c7c\u7c7b\uff0c\u901f\u5ea6\u5feb"
        }, {
            id: 14,
            name: "fish14_01_png",
            price: 2E3,
            des: "\u5c0f\u578b\u9c7c\u7c7b\uff0c\u751f\u6d3b\u533a\u57df\u5728\u6d77\u7684\u6df1\u6d77\uff0c\u98df\u4e2d\u3001\u5c0f\u578b\u9c7c\u7c7b\uff0c\u901f\u5ea6\u5feb"
        }, {
            id: 6,
            name: "fish6_01_png",
            price: 400,
            des: "\u4e2d\u578b\u9c7c\u7c7b\uff0c\u751f\u6d3b\u533a\u57df\u5728\u6d77\u7684\u4e2d\u4e0b\u5c42\uff0c\u98df\u5c0f\u578b\u9c7c\u7c7b\uff0c\u901f\u5ea6\u5feb"
        }, {
            id: 7,
            name: "fish7_01_png",
            price: 400,
            des: "\u4e2d\u578b\u9c7c\u7c7b\uff0c\u751f\u6d3b\u533a\u57df\u5728\u6d77\u7684\u6700\u4e0a\u5c42\u3001\u4e2d\u5c42\uff0c\u98df\u5c0f\u578b\u9c7c\u7c7b\uff0c\u901f\u5ea6\u6162"
        }, {
            id: 8,
            name: "fish8_01_png",
            price: 800,
            des: "\u4e2d\u578b\u9c7c\u7c7b\uff0c\u751f\u6d3b\u533a\u57df\u5728\u6d77\u7684\u4e2d\u5c42\uff0c\u98df\u5c0f\u578b\u9c7c\u7c7b\uff0c\u901f\u5ea6\u5feb"
        }, {
            id: 9,
            name: "fish9_01_png",
            price: 1E3,
            des: "\u4e2d\u578b\u9c7c\u7c7b\uff0c\u751f\u6d3b\u533a\u57df\u5728\u6d77\u7684\u4e0b\u5c42\uff0c\u98df\u5c0f\u578b\u9c7c\u7c7b\uff0c\u901f\u5ea6\u5feb"
        }];
        this.fishDescr2 = [{
            id: 10,
            name: "fish10_01_png",
            price: 2500,
            des: "\u4e2d\u578b\u9c7c\u7c7b\uff0c\u751f\u6d3b\u533a\u57df\u5728\u6d77\u7684\u6df1\u6d77\uff0c\u98df\u4e2d\u3001\u5c0f\u578b\u9c7c\u7c7b\uff0c\u901f\u5ea6\u5feb"
        }, {
            id: 12,
            name: "fish12_01_png",
            price: 5E3,
            des: "\u5927\u578b\u9c7c\u7c7b\uff0c\u751f\u6d3b\u533a\u57df\u5728\u6d77\u7684\u6700\u4e0a\u5c42\uff0c\u98df\u4e2d\u3001\u5c0f\u578b\u9c7c\u7c7b\uff0c\u901f\u5ea6\u5feb"
        }, {
            id: 13,
            name: "fish13_01_png",
            price: 5E3,
            des: "\u5927\u578b\u9c7c\u7c7b\uff0c\u751f\u6d3b\u533a\u57df\u5728\u6d77\u7684\u6df1\u6d77\uff0c\u98df\u4e2d\u3001\u5c0f\u578b\u9c7c\u7c7b\uff0c\u901f\u5ea6\u5feb"
        }, {
            id: 15,
            name: "fish15_01_png",
            price: 8E3,
            des: "\u5927\u578b\u9c7c\u7c7b\uff0c\u751f\u6d3b\u533a\u57df\u5728\u6d77\u7684\u6df1\u6d77\uff0c\u7d20\u98df\u4e3b\u4e49\u8005\uff0c\u901f\u5ea6\u4e2d"
        }];
        this.getFishsCfg();
        this.loadPole();
        this.loadShip()
    }
    var f = e.prototype;
    e.getInstance = function() {
        e.instance || (e.instance = new e);
        return e.instance
    }
    ;
    f.getFishsCfg = function() {
        for (var e = RES.getRes("data_json"), d = e.fish, b = 0; b < d.length; b++)
            this.fishTypeData[d[b].id] = d[b];
        this.fishGroupData = e.fishLoc
    }
    ;
    f.loadPole = function() {
        var e = this.poleGroupData
          , d = DataManager.instance.Cfg.pole;
        if (d)
            for (var b = 0; b < d.length; b++)
                e[d[b] - 1].purchased = !0
    }
    ;
    f.loadShip = function() {
        var e = this.shipgroupData
          , d = DataManager.instance.Cfg.place;
        if (d)
            for (var b = 0; b < d.length; b++)
                e[d[b] - 1].purchased = !0
    }
    ;
    f.addOneFish = function(e) {
        this.fishGroupData[e - 1].fishCount++
    }
    ;
    return e
}();
GameModel.prototype.__class__ = "GameModel";
(function(e) {
    (function(e) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [new egret.gui.State("up",[]), new egret.gui.State("down",[]), new egret.gui.State("disabled",[])]
            }
            __extends(b, d);
            b.prototype.__4_i = function() {
                var a = new egret.gui.Button;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("buyrodbtn1_png","buyrodbtn2_png"), 0, 0]);
                return a
            }
            ;
            return b
        }(egret.gui.Skin);
        e.Button1 = g;
        g.prototype.__class__ = "skins.button.Button1"
    }
    )(e.button || (e.button = {}))
}
)(skins || (skins = {}));
(function(e) {
    (function(f) {
        (function(f) {
            var d = function(b) {
                function a() {
                    b.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "minHeight", "minWidth"], [22, 10, 20]);
                    this.elementsContent = [this.track_i(), this.thumb_i()];
                    this.states = [new egret.gui.State("normal",[]), new egret.gui.State("disabled",[])]
                }
                __extends(a, b);
                var c = a.prototype;
                Object.defineProperty(c, "skinParts", {
                    get: function() {
                        return a._skinParts
                    },
                    enumerable: !0,
                    configurable: !0
                });
                c.thumb_i = function() {
                    var a = new egret.gui.Button;
                    this.thumb = a;
                    this.__s(a, ["height", "skinName", "verticalCenter", "width", "x"], [10, e.button.scrolBar.HScrollBarThumbSkin, 0, 24, 0]);
                    return a
                }
                ;
                c.track_i = function() {
                    var a = new egret.gui.UIAsset;
                    this.track = a;
                    this.__s(a, "height scale9Grid source verticalCenter percentWidth x".split(" "), [24, egret.gui.getScale9Grid("8,7,17,9"), "scrollbar_png", 1, 100, 0]);
                    return a
                }
                ;
                a._skinParts = ["track", "thumb"];
                return a
            }(egret.gui.Skin);
            f.HScrollBarSkin = d;
            d.prototype.__class__ = "skins.button.scrolBar.HScrollBarSkin"
        }
        )(f.scrolBar || (f.scrolBar = {}))
    }
    )(e.button || (e.button = {}))
}
)(skins || (skins = {}));
var Const = function() {
    function e() {}
    e.versionNum = "0.33";
    e.stageWidth = 960;
    e.stageHeight = 640;
    e.initspeed1 = 1200;
    e.initspeed2 = 900;
    e.initspeed = 1E3;
    e.FACTOR = 1;
    e.FISH_LIFE = 3;
    e.waterPanel = 180;
    e.MD5KEY = "theOldPan";
    e.iniMoney = 500;
    e.baseYueShu = 1;
    e.iniPoleRota = -5;
    e.basePullSpeed = 1.5;
    e.isOnBlur = !1;
    e.BoatMovePoint = 600;
    return e
}();
Const.prototype.__class__ = "Const";
var FishRule = function() {
    function e() {
        this.containers = {};
        this.Group = [];
        this.Type = {};
        this.SellCount = 0;
        e.instance = this;
        this.containers = GameScene.getInstance().containers;
        this.mTool = GameScene.getInstance().mTool;
        this.Group = GameModel.getInstance().fishGroupData;
        this.Type = GameModel.getInstance().fishTypeData
    }
    var f = e.prototype;
    e.getInstance = function() {
        return e.instance
    }
    ;
    f.deleteFish = function(e) {
        this.SellCount++;
        var d = this.containers[e.fishGroupId]
          , b = d.indexOf(e);
        d.splice(b, 1);
        this.fishSwitch(e.fishGroupId);
        e.view.parent.removeChild(e.view)
    }
    ;
    f.addFish = function(e) {
        var d = this.Group[e - 1]
          , b = this.Type[d.fishId]
          , a = d.pos
          , c = d.radius
          , d = GameScene.getInstance().createFish(a, c, b.id, b.resid, b.ClassName, b.grade, b.anchorX, b.anchorY, b.speed, b.price, d.id, !0);
        d.position[0] = d.center[0];
        d.position[1] = d.center[1] - d.radius + 10;
        this.containers[e].push(Fish)
    }
    ;
    f.setGroupMove = function(e, d) {
        120 < d[1] + this.Group[e - 1].radius && (console.warn("\u9c7c\u5df2\u7ecf\u8d85\u51fa\u4e86\u6c34\u5e73\u9762\u6ce8\u610f,\u5c06\u81ea\u52a8\u8c03\u6574\u9c7c\u7684\u4f4d\u7f6e\u5230\u6c34\u5e73\u9762\u4ee5\u4e0b"),
        d[1] = 120 - this.Group[e - 1].radius);
        this.Group[e - 1].pos = d;
        for (var b = this.containers[e], a = 0; a < b.length; a++)
            b[a].center = d
    }
    ;
    f.fishSwitch = function(e) {
        switch (e) {
        case 10:
            if (0 == this.containers[3].length)
                for (e = 0; e < this.Group[3].fishAllCount; e++)
                    this.addFish(3)
        }
    }
    ;
    return e
}();
FishRule.prototype.__class__ = "FishRule";
var ToolObject = function(e) {
    function f() {
        e.call(this);
        this.pullSpeed = 1;
        this.mState = -1;
        this.positions = [[350, 240], [38, 434], [72, 488], [128, 532], [366, 351], [356, 383], [354, 402]];
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
            mass: 0
        });
        var d = new p2.Rectangle(1,1);
        this.end.addShape(d);
        this.end.type = p2.Body.STATIC;
        this.world.addBody(this.end);
        this.bait = new p2.Body({
            mass: 1,
            position: [15, 15]
        });
        d = new p2.Rectangle(1,1);
        this.bait.addShape(d);
        this.bait.damping = 0.5;
        this.world.addBody(this.bait);
        this.bait.allowSleep = !1;
        this.yueshu = new p2.DistanceConstraint(this.end,this.bait,{
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
        this.baitImg = new egret.Bitmap(RES.getRes("smallbait1_png"));
        this.baitImg.anchorX = 0.5;
        this.baitImg.anchorY = 0.5;
        this.view.addChild(this.baitImg);
        this.bait.displays = [this.baitImg];
        this.end.displays = [];
        this.ini();
        egret.Ticker.getInstance().register(this.loop, this)
    }
    __extends(f, e);
    var g = f.prototype;
    f.instance = function() {
        return f._instance
    }
    ;
    g.ini = function() {
        this.bait.damping = 0.8;
        this.poleRota = Const.iniPoleRota
    }
    ;
    g.setPole = function(d) {
        var b = GameModel.getInstance().poleGroupData[d - 1];
        this.pole.texture = RES.getRes("pole" + d + "_png");
        this.pole.name = d.toString();
        this.poleCastLength = b.throw;
        this.pullSpeed = Const.basePullSpeed * b.pull
    }
    ;
    g.loop = function(d) {
        if (!(Const.isOnBlur || 10 > d || 1E3 < d)) {
            this.world.step(d / 1E3);
            30 * this.bait.position[1] < Const.waterPanel - 20 && this.bait.displays[0].y <= Const.stageHeight - Const.waterPanel + 20 && this.enterWater();
            30 * this.bait.position[1] > Const.waterPanel - 20 && this.bait.displays[0].y >= Const.stageHeight - Const.waterPanel + 20 && this.leaveWater();
            3 == this.state && (this.yueshu.upperLimitEnabled || (this.yueshu.upperLimitEnabled = !0),
            0 != this.world.gravity[0] && this.bait.position[0] < this.end.position[0] + 3 && (this.world.gravity[0] = 0));
            if (this.isOnTouch && this.isCanPull || this.isAutoBack) {
                3 == this.state && !0 == this.world.applyGravity && (this.world.applyGravity = !1);
                if (30 * this.bait.position[1] >= Const.waterPanel - 30 && this.bait.position[0] > this.end.position[0] + 2)
                    this.bait.position[0] -= this.pullSpeed * d / 500,
                    this.bait.position[1] = (Const.waterPanel - 30) / 30,
                    this.SW || (this.SW = !this.SW);
                else {
                    if (this.SW) {
                        this.SW = !this.SW;
                        var b = [this.bait.position[0] - this.end.position[0], this.bait.position[1] - this.end.position[1]]
                          , b = Math.sqrt(b[0] * b[0] + b[1] * b[1]);
                        this.yueshu.upperLimit = b
                    }
                    this.yueshu.upperLimit -= this.pullSpeed * d / 300
                }
                this.yueshu.upperLimit <= this.iniFishWireLength && (this.isAutoBack = this.isCanPull = !1,
                this.yueshu.upperLimit = this.iniFishWireLength)
            } else
                3 != this.state || this.world.applyGravity || (this.world.applyGravity = !0);
            30 * this.bait.position[1] < Const.waterPanel - 25 && !this.isCanPull && (this.isCanPull = !0);
            this.catGroup.moveWave(2 * d);
            this.touch && ((-180 > this.pole.rotation && (this.ForwardOrBackward = !0,
            this.turnBack()),
            this.ForwardOrBackward) ? this.poleRota < Const.iniPoleRota && (Const.iniPoleRota - this.poleRota < 0.4 * d ? this.CastOver() : this.poleRota += 0.4 * d) : this.poleRota -= 0.4 * d);
            this.isFly && this.fly(d);
            this.bait.angle = Math.atan2(this.world.bodies[0].position[1] - this.world.bodies[1].position[1], this.world.bodies[0].position[0] - this.world.bodies[1].position[0]);
            if (d = this.bait.displays[0])
                d.x = 30 * this.bait.position[0],
                d.y = Const.stageHeight - 30 * this.bait.position[1],
                d.rotation = 360 - 180 * this.bait.angle / Math.PI,
                Main.getInstance().setScenePos([30 * this.bait.position[0], 30 * this.bait.position[1]]);
            this.gLine.graphics.clear();
            this.gLine.graphics.lineStyle(1, 14869202, 1);
            this.gLine.graphics.moveTo(30 * this.end.position[0], Const.stageHeight - 30 * this.end.position[1]);
            this.gLine.graphics.lineTo(30 * this.bait.position[0], Const.stageHeight - 30 * this.bait.position[1])
        }
    }
    ;
    g.turnBack = function() {
        this.bait.velocity = [0, 40];
        this.isExecuteTurnBack = !0
    }
    ;
    g.CastOver = function() {
        !0 == this.isOnCast && (this.isExecuteTurnBack = this.touch = this.isOnCast = !1,
        this.poleRota = Const.iniPoleRota,
        this.isFly ? this.yueshu.upperLimitEnabled = !1 : this.bait.velocity = [10, -10])
    }
    ;
    g.chaseBack = function() {
        for (var d in this.fishs)
            this.fishs[d].isCanGiveUpChaseHook();
        this.fishs = []
    }
    ;
    g.isOnHook = function(d) {
        3 == this.state && (0 > this.baitLevel ? d.grade <= Math.abs(this.baitLevel) + 1 ? (console.log(this.baitLevel, d.grade, d.price, "y"),
        this.onHook(d)) : (this.baitLevel = 0,
        this.fishResId = "hook",
        this.bait.displays[0].anchorX = 0.9,
        this.bait.displays[0].anchorY = 0.18,
        this.baitImg.texture = RES.getRes("thefishhook_png"),
        d.isCanGiveUpChaseHook(!0)) : 0 == this.baitLevel ? d.isCanGiveUpChaseHook() : this.baitLevel < d.grade && (this.fishHP--,
        this.baitImg.texture = RES.getRes(this.fishResId + "_0" + (4 - this.fishHP) + "_png"),
        d.isCanGiveUpChaseHook(!0),
        this.createBlood(d),
        this.fishHP || (this.baitLevel = 0)))
    }
    ;
    g.onHook = function(d) {
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
    }
    ;
    g.beSell = function() {
        this.baitImg.texture = RES.getRes("smallbait1_png");
        this.baitLevel = -1;
        MainUILayer.instance().upgrade(this.fish.grade);
        DataManager.instance.money += Math.round(this.fishPrice * this.fishHP / 3);
        this.fishPrice = 0;
        this.fishHP = 3;
        this.baitImg.anchorX = this.baitImg.anchorY = 0.5
    }
    ;
    g.createBlood = function(d) {
        var b = this
          , a = new egret.Bitmap;
        a.texture = RES.getRes("blood_png");
        a.x = d.view.x;
        a.y = d.view.y;
        a.anchorX = a.anchorY = 0.5;
        this.view.addChild(a);
        egret.Tween.get(a).to({
            y: a.y + 150,
            alpha: 0
        }, 1500).call(function() {
            b.view.removeChild(a)
        })
    }
    ;
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
        this.fish && (this.fish.position[0] = this.fish.center[0],
        this.fish.position[1] = this.fish.center[1] - this.fish.radius + 10,
        this.fish.view.x = this.fish.position[0],
        this.fish.view.y = Const.stageHeight - this.fish.position[1],
        this.fish.view.rotation = 360 - this.fish.angle,
        GameScene.getInstance().view.addChild(this.fish.view),
        this.fish = null);
        this.world.gravity = [-3, -15];
        this.state = 3;
        0 < this.baitLevel ? (this.baitImg.texture = RES.getRes("smallbait" + this.baitLevel + "_png"),
        this.baitLevel = -this.baitLevel) : 0 == this.baitLevel && (this.baitImg.texture = RES.getRes("smallbait1_png"),
        this.baitLevel = -1);
        this.fishPrice = 0;
        this.yueshu.upperLimitEnabled = !0;
        this.world.applyGravity = !0;
        this.baitImg.anchorX = this.baitImg.anchorY = 0.5;
        this.freeTheBaitWhenEnterWater();
        this.isCanPull = !0;
        this.view.dispatchEventWith(Action.IN)
    }
    ;
    g.freeTheBaitWhenEnterWater = function() {
        this.bait.damping = 0.6;
        this.isFly = !1;
        this.bait.mass = 0.3;
        var d = [this.bait.position[0] - this.end.position[0], this.bait.position[1] - this.end.position[1]]
          , b = Math.sqrt(d[0] * d[0] + d[1] * d[1]);
        this.yueshu.upperLimit = "4" == this.pole.name ? 1.3 * b : b;
        this.world.applyGravity || (this.world.applyGravity = !0);
        d = Math.atan2(d[1], d[0]) - 90;
        b = Math.sqrt(this.bait.velocity[0] * this.bait.velocity[0] + this.bait.velocity[1] * this.bait.velocity[1]) / 3;
        this.bait.velocity = [0.2 * b * Math.cos(d), 0.2 * b * Math.sin(d)]
    }
    ;
    g.leaveWater = function() {
        this.world.gravity = [0, -50];
        this.state = 0;
        this.isAutoBack = !0;
        this.bait.velocity = [0, 3];
        this.bait.damping = 0.8;
        this.world.applyGravity = !0;
        MainUILayer.instance().showMenus();
        var d = [this.bait.position[0] - this.end.position[0], this.bait.position[1] - this.end.position[1]]
          , d = Math.sqrt(d[0] * d[0] + d[1] * d[1]);
        this.yueshu.upperLimit = d;
        this.view.dispatchEventWith(Action.OUT, !1, this.fishPrice)
    }
    ;
    g.setClickLayer = function(d) {
        this.clickLayer = d;
        this.clickLayer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.clickLayer.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.clickLayer.touchEnabled = !0
    }
    ;
    g.onCreate = function() {
        e.prototype.onCreate.call(this)
    }
    ;
    g.onTouchBegin = function(d) {
        this.isOnTouch = !0;
        this.isFly || this.isAutoBack || (3 != this.state && !this.isOnCast && 1 > Math.abs(this.yueshu.upperLimit - this.iniFishWireLength) ? (this.bait.mass = 1,
        this.ForwardOrBackward = !1,
        this.touch = !0,
        this.bait.velocity = [0, 1],
        this.isOnCast = !0,
        this.isFly = this.isExecuteTurnBack = !1,
        this.yueshu.upperLimit = this.iniFishWireLength) : 3 == this.state && "4" == this.pole.name && (d = [this.bait.position[0] - this.end.position[0], this.bait.position[1] - this.end.position[1]],
        d = Math.sqrt(d[0] * d[0] + d[1] * d[1]),
        this.yueshu.upperLimit = d))
    }
    ;
    g.onTouchEnd = function(d) {
        this.isOnTouch = !1;
        if (!this.isFly && !this.isAutoBack)
            if (3 == this.state) {
                d = [this.bait.position[0] - this.end.position[0], this.bait.position[1] - this.end.position[1]];
                var b = Math.sqrt(d[0] * d[0] + d[1] * d[1]);
                this.yueshu.upperLimit = b;
                0 != this.world.gravity[0] ? (d = Math.atan2(d[1], d[0]) - 90,
                b = Math.sqrt(this.bait.velocity[0] * this.bait.velocity[0] + this.bait.velocity[1] * this.bait.velocity[1]) / 3,
                this.bait.velocity = [b * Math.cos(d), b * Math.sin(d)]) : this.bait.velocity = [0, 0]
            } else
                this.isExecuteTurnBack && this.touch && (this.poleRota == Const.iniPoleRota && (this.ForwardOrBackward = !1),
                this.castBait())
    };
    g.castBait = function() {
        if (!this.isFly && this.yueshu.upperLimitEnabled && 3 != this.state) {
            this.isFly = !0;
            this.yueshu.upperLimitEnabled = !1;
            this.world.gravity[0] = 0;
            var d = this.pole.rotation
              , d = -115 > d ? Math.cos(-15 * Math.PI / 180) : Math.cos(1.5 * (d - -90) * Math.PI / 180)
              , b = GameModel.getInstance().poleGroupData[Number(this.pole.name) - 1].pull;
            this.bait.velocity[1] = 20 * d * b;
            this.flySpeedx = 0.3 * b;
            this.bait.damping = 0.1;
            this.view.dispatchEventWith(Action.CAST);
            this.bait.mass = this.poleCastLength;
            MainUILayer.instance().hideMenus()
        }
    }
    ;
    g.onDestroy = function() {
        this.view && this.view.parent && this.view.parent.removeChild(this.view);
        GameScene.getInstance().world.removeBody(this.end)
    }
    ;
    Object.defineProperty(g, "poleRota", {
        get: function() {
            return this.pole.rotation
        },
        set: function(d) {
            this.pole.rotation = d;
            this.end.position[0] = (this.pole.x + 185 * Math.cos(this.pole.rotation * Math.PI / 180)) / 30;
            this.end.position[1] = (Const.stageHeight - this.pole.y - 185 * Math.sin(this.pole.rotation * Math.PI / 180)) / 30;
            this.isFly || (d = this.ForwardOrBackward ? d - 15 : d + 15,
            this.bait.position[0] = (this.pole.x + 215 * Math.cos(d * Math.PI / 180)) / 30,
            this.bait.position[1] = (Const.stageHeight - this.pole.y - 215 * Math.sin(d * Math.PI / 180)) / 30)
        },
        enumerable: !0,
        configurable: !0
    });
    g.fly = function(d) {
        this.isFly && (0 < this.flySpeedx && 51 > this.bait.position[0] ? (this.bait.position[0] += this.flySpeedx * d / 15,
        0.1 < this.flySpeedx && (this.flySpeedx -= d / 500)) : 0 > this.flySpeedx && (this.flySpeedx = 0))
    }
    ;
    f.key = "toolObject";
    return f
}(GameObject);
ToolObject.prototype.__class__ = "ToolObject";
var ObjectPool = function() {
    function e() {
        this._isPause = !1;
        this._pool = {};
        this._list = [];
        egret.Ticker.getInstance().register(this.onEnterFrame, this)
    }
    var f = e.prototype;
    f.onEnterFrame = function(e) {
        if (!this._isPause)
            for (var d = this._list.concat(), b = 0, a = d.length; b < a; b++)
                d[b].onEnterFrame(e)
    }
    ;
    f.pauseEnterFrame = function() {
        this._isPause = !0;
        for (var e = this._list.concat(), d = 0, b = e.length; d < b; d++)
            e[d].onPause()
    }
    ;
    f.resumeEnterFrame = function() {
        this._isPause = !1;
        for (var e = this._list.concat(), d = 0, b = e.length; d < b; d++)
            e[d].onResume()
    }
    ;
    f.createObject = function(e) {
        var d = e.key
          , b = this._pool[d];
        null != b && b.length ? e = b.pop() : (e = new e,
        e.key = d);
        this._list.push(e);
        e.onCreate();
        return e
    }
    ;
    f.destroyObject = function(e) {
        var d = e.key;
        null == this._pool[d] && (this._pool[d] = []);
        -1 == this._pool[d].indexOf(e) && this._pool[d].push(e);
        e.onDestroy();
        e = this._list.indexOf(e);
        -1 != e && this._list.splice(e, 1)
    }
    ;
    f.destroyObjectByKey = function(e) {
        var d = this._pool[e];
        null == d && (this._pool[e] = d = []);
        this._list = this._list.filter(function(b, a, c) {
            return b.key == e ? (-1 == d.indexOf(b) && d.push(b),
            b.onDestroy(),
            !1) : !0
        })
    }
    ;
    f.destroyAllObject = function() {
        for (; this._list.length; )
            this.destroyObject(this._list[0])
    }
    ;
    e.getInstance = function() {
        null == e.instance && (e.instance = new e);
        return e.instance
    }
    ;
    return e
}();
ObjectPool.prototype.__class__ = "ObjectPool";
var Fish1 = function(e) {
    function f() {
        e.call(this);
        this.campaignsId = 1;
        this.angSpeed = 0.8
    }
    __extends(f, e);
    var g = f.prototype;
    g.onEnterFrame = function(d) {
        if (this.isBack)
            this.goBack(d);
        else if (this.isOut || this.isChaseHook)
            this.go(d),
            10 > Math.abs(this.x - this.AirLoc[0]) + Math.abs(this.y - this.AirLoc[1]) && this.reachPoint();
        else {
            if ((Math.abs(this.center[0] - this.x) > this.radius || Math.abs(this.center[1] - this.y) > this.radius) && !this.isBack) {
                this.reSetMoveDir(2);
                return
            }
            this.frameTime += d;
            if (this.frameTime >= this.time) {
                this.reSetMoveDir(1);
                return
            }
            this.goToAng && this.angAnimation(d);
            this.arcGo(d)
        }
        this.locationChanged(d)
    }
    ;
    g.reSetMoveDir = function(d) {
        this.frameTime = 0;
        this.campaignsId = d;
        this.time = 5E3 * Math.random() + 4E3;
        this.reSetMoveDirPart();
        this.goToAng = (45 + 135 * Math.random()) * (2 * Math.round(Math.random()) - 1);
        switch (d) {
        case 1:
            this.speed = Math.abs(this.speed);
            this.vector = [Math.random() - 0.5, Math.random() - 0.5];
            this.rota = 180 * Math.atan2(this.vector[1], this.vector[0]) / Math.PI;
            break;
        case 2:
            this.setGoBack()
        }
    }
    ;
    f.key = "fish1";
    return f
}(Fish);
Fish1.prototype.__class__ = "Fish1";
var Fish10 = function(e) {
    function f() {
        e.call(this);
        this.campaignsId = 1;
        this.onHookRange = 25
    }
    __extends(f, e);
    var g = f.prototype;
    g.onEnterFrame = function(d) {
        if (this.isBack)
            this.goBack(d);
        else if (this.isOut || this.isChaseHook)
            this.go(d),
            10 > Math.abs(this.x - this.AirLoc[0]) + Math.abs(this.y - this.AirLoc[1]) && this.reachPoint();
        else {
            if ((Math.abs(this.center[0] - this.x) > this.radius || Math.abs(this.center[1] - this.y) > this.radius) && !this.isBack) {
                this.reSetMoveDir(2);
                return
            }
            this.frameTime += d;
            if (this.frameTime >= this.time) {
                this.reSetMoveDir(1);
                return
            }
            3 == this.campaignsId ? this.goArc(d) : this.go(d)
        }
        this.locationChanged(d)
    }
    ;
    g.reSetMoveDir = function(d) {
        this.frameTime = 0;
        this.campaignsId = d;
        this.time = 1E3 * Math.random() + 1E3;
        this.reSetMoveDirPart();
        switch (d) {
        case 1:
            this.speed = Math.abs(this.speed);
            this.vector = [(2 * Math.round(Math.random()) - 1) * (0.2 * Math.random() + 0.6), 0.5 * (Math.random() - 0.5)];
            this.rota = 180 * Math.atan2(this.vector[1], this.vector[0]) / Math.PI;
            break;
        case 2:
            this.setGoBack();
            break;
        case 3:
            d = (2 * Math.ceil(Math.random()) - 1) * (1 + Math.random()) * this.arcBaseLength,
            this.setArcLength(d),
            this.speed = 2 * Math.round(Math.random()) - 1,
            d = 180 * Math.atan2(this._arcPos[1] - this.position[1], this._arcPos[0] - this.position[0]) / Math.PI,
            this.rota = 0 < this.speed ? d - 90 : d + 90
        }
    }
    ;
    f.key = "fish10";
    return f
}(Fish);
Fish10.prototype.__class__ = "Fish10";
var Fish11 = function(e) {
    function f() {
        e.call(this)
    }
    __extends(f, e);
    var g = f.prototype;
    g.onEnterFrame = function(d) {
        this.frameTime += d;
        this.frameTime >= this.time ? this.reSetMoveDir(3) : (this.goArc(d),
        this.locationChanged(d))
    }
    ;
    g.reSetMoveDir = function(d) {
        this.frameTime = 0;
        this.time = 15E3;
        this.arcLength = 2E3;
        d = -0.25 * Math.PI;
        this._arcPos = [this.x + Math.cos(d) * this.arcLength, this.y + Math.sin(d) * this.arcLength];
        this.speed = -this.speed;
        d = 180 * Math.atan2(this._arcPos[1] - this.position[1], this._arcPos[0] - this.position[0]) / Math.PI;
        this.rota = 0 < this.speed ? d - 90 : d + 90
    }
    ;
    f.key = "fish11";
    return f
}(Fish);
Fish11.prototype.__class__ = "Fish11";
var Fish12 = function(e) {
    function f() {
        e.call(this);
        this.campaignsId = 1;
        this.onHookRange = 40
    }
    __extends(f, e);
    var g = f.prototype;
    g.onEnterFrame = function(d) {
        if (this.isBack)
            this.goBack(d);
        else if (this.isOut || this.isChaseHook)
            this.go(d),
            10 > Math.abs(this.x - this.AirLoc[0]) + Math.abs(this.y - this.AirLoc[1]) && this.reachPoint();
        else {
            if ((Math.abs(this.center[0] - this.x) > this.radius || Math.abs(this.center[1] - this.y) > this.radius) && !this.isBack) {
                this.reSetMoveDir(2);
                return
            }
            this.frameTime += d;
            if (this.frameTime >= this.time) {
                this.reSetMoveDir(1);
                return
            }
            3 == this.campaignsId ? this.goArc(d) : this.go(d)
        }
        this.locationChanged(d)
    }
    ;
    g.reSetMoveDir = function(d) {
        this.frameTime = 0;
        4 == this.campaignsId ? this.campaignsId = 1 : 0.5 > Math.random() ? this.campaignsId = 4 : this.campaignsId = 1;
        2 != d && (d = this.campaignsId);
        this.time = this.getMoveTime();
        this.reSetMoveDirPart();
        switch (d) {
        case 1:
            this.speed = Math.abs(this.speed);
            this.vector = [(2 * Math.round(Math.random()) - 1) * (0.2 * Math.random() + 0.6), 0.5 * (Math.random() - 0.5)];
            this.rota = 180 * Math.atan2(this.vector[1], this.vector[0]) / Math.PI;
            break;
        case 2:
            this.setGoBack();
            break;
        case 3:
            d = (2 * Math.ceil(Math.random()) - 1) * (1 + Math.random()) * this.arcBaseLength,
            this.setArcLength(d),
            this.speed = 2 * Math.round(Math.random()) - 1,
            d = 180 * Math.atan2(this._arcPos[1] - this.position[1], this._arcPos[0] - this.position[0]) / Math.PI,
            this.rota = 0 < this.speed ? d - 90 : d + 90;
        case 4:
            this.time = 5E3 * Math.random() + 1E4
        }
    }
    ;
    f.key = "fish12";
    return f
}(Fish);
Fish12.prototype.__class__ = "Fish12";
var Fish13 = function(e) {
    function f() {
        e.call(this);
        this.campaignsId = 1
    }
    __extends(f, e);
    var g = f.prototype;
    g.onEnterFrame = function(d) {
        if (this.isBack)
            this.goBack(d);
        else {
            if (Math.abs(this.center[0] - this.x) > this.radius || Math.abs(this.center[1] - this.y) > this.radius) {
                this.reSetMoveDir(2);
                return
            }
            this.frameTime += d;
            if (this.frameTime >= this.time) {
                this.reSetMoveDir(1);
                return
            }
            3 == this.campaignsId ? this.goArc(d) : this.go(d)
        }
        this.locationChanged(d)
    }
    ;
    g.reSetMoveDir = function(d) {
        this.frameTime = 0;
        this.campaignsId = d;
        this.time = 5E3 * Math.random() + 5E3;
        this.reSetMoveDirPart();
        switch (d) {
        case 1:
            this.speed = Math.abs(this.speed);
            this.vector[0] = this.vector[1] = (2 * Math.round(Math.random()) - 1) * (0.2 * Math.random() + 0.6);
            this.vector[1] = 0;
            this.rota = 180 * Math.atan2(0, this.vector[0]) / Math.PI;
            break;
        case 2:
            this.setGoBack();
            this.vector[1] = 0;
            this.rota = 180 * Math.atan2(0, this.vector[0]) / Math.PI;
            break;
        case 3:
            d = (2 * Math.ceil(Math.random()) - 1) * (1 + Math.random()) * this.arcBaseLength,
            this.setArcLength(d),
            this.speed = 2 * Math.round(Math.random()) - 1,
            d = 180 * Math.atan2(this._arcPos[1] - this.position[1], this._arcPos[0] - this.position[0]) / Math.PI,
            this.rota = 0 < this.speed ? d - 90 : d + 90
        }
    }
    ;
    g.reSetFishData = function() {
        this.rota = 90;
        this.position[1] = this.center[1]
    }
    ;
    f.key = "fish13";
    return f
}(Fish);
Fish13.prototype.__class__ = "Fish13";
var Fish14 = function(e) {
    function f() {
        e.call(this);
        this.view.scaleY = 2 * Math.round(Math.random()) - 1;
        this.campaignsId = 1
    }
    __extends(f, e);
    var g = f.prototype;
    g.reSetFishData = function() {
        this.view.rotation = 90;
        this.position[1] = this.center[1]
    }
    ;
    g.onEnterFrame = function(d) {
        if (this.isBack)
            this.goBack(d);
        else {
            if (Math.abs(this.center[0] - this.x) > this.radius || Math.abs(this.center[1] - this.y) > this.radius) {
                this.reSetMoveDir(2);
                return
            }
            this.frameTime += d;
            if (this.frameTime >= this.time) {
                this.reSetMoveDir(1);
                return
            }
            3 == this.campaignsId ? this.goArc(d) : this.go(d)
        }
        this.locationChanged(d)
    }
    ;
    g.reSetMoveDir = function(d) {
        this.frameTime = 0;
        this.campaignsId = d;
        this.time = 5E3 * Math.random() + 5E3;
        this.reSetMoveDirPart();
        switch (d) {
        case 1:
            this.speed = Math.abs(this.speed);
            this.vector[0] = 0;
            this.vector[1] = (2 * Math.round(Math.random()) - 1) * (0.2 * Math.random() + 0.6);
            this.rota = 90;
            break;
        case 2:
            this.setGoBack();
            this.vector[0] = 0;
            this.rota = 90;
            break;
        case 3:
            d = (2 * Math.ceil(Math.random()) - 1) * (1 + Math.random()) * this.arcBaseLength,
            this.setArcLength(d),
            this.speed = 2 * Math.round(Math.random()) - 1,
            d = 180 * Math.atan2(this._arcPos[1] - this.position[1], this._arcPos[0] - this.position[0]) / Math.PI,
            this.rota = 0 < this.speed ? d - 90 : d + 90
        }
    }
    ;
    f.key = "fish14";
    return f
}(Fish);
Fish14.prototype.__class__ = "Fish14";
var Fish15 = function(e) {
    function f() {
        e.call(this);
        this.view.scaleY = 2 * Math.round(Math.random()) - 1;
        this.campaignsId = 1
    }
    __extends(f, e);
    var g = f.prototype;
    g.reSetFishData = function() {
        this.position[0] = this.center[0]
    }
    ;
    g.onEnterFrame = function(d) {
        if (this.isBack)
            this.goBack(d);
        else {
            if (Math.abs(this.center[0] - this.x) > this.radius || Math.abs(this.center[1] - this.y) > this.radius) {
                this.reSetMoveDir(2);
                return
            }
            this.frameTime += d;
            if (this.frameTime >= this.time) {
                this.reSetMoveDir(1);
                return
            }
            3 == this.campaignsId ? this.goArc(d) : this.go(d)
        }
        this.locationChanged(d)
    }
    ;
    g.reSetMoveDir = function(d) {
        this.frameTime = 0;
        this.campaignsId = d;
        this.time = 5E3 * Math.random() + 5E3;
        this.reSetMoveDirPart();
        switch (d) {
        case 1:
            this.speed = Math.abs(this.speed);
            this.vector[0] = 0;
            this.vector[1] = (2 * Math.round(Math.random()) - 1) * (0.2 * Math.random() + 0.6);
            this.rota = 90;
            break;
        case 2:
            this.setGoBack();
            this.vector[0] = 0;
            this.rota = 90;
            break;
        case 3:
            d = (2 * Math.ceil(Math.random()) - 1) * (1 + Math.random()) * this.arcBaseLength,
            this.setArcLength(d),
            this.speed = 2 * Math.round(Math.random()) - 1,
            d = 180 * Math.atan2(this._arcPos[1] - this.position[1], this._arcPos[0] - this.position[0]) / Math.PI,
            this.rota = 0 < this.speed ? d - 90 : d + 90
        }
    }
    ;
    f.key = "fish15";
    return f
}(Fish);
Fish15.prototype.__class__ = "Fish15";
var Fish2 = function(e) {
    function f() {
        e.call(this);
        this.campaignsId = 1;
        this.angSpeed = 0.5
    }
    __extends(f, e);
    var g = f.prototype;
    g.onEnterFrame = function(d) {
        if (this.isBack)
            this.goBack(d);
        else if (this.isOut || this.isChaseHook)
            this.go(d),
            10 > Math.abs(this.x - this.AirLoc[0]) + Math.abs(this.y - this.AirLoc[1]) && this.reachPoint();
        else {
            if ((Math.abs(this.center[0] - this.x) > this.radius || Math.abs(this.center[1] - this.y) > this.radius) && !this.isBack) {
                this.reSetMoveDir(2);
                return
            }
            this.frameTime += d;
            if (this.frameTime >= this.time) {
                this.reSetMoveDir(1);
                return
            }
            this.goToAng && this.angAnimation(d);
            this.arcGo(d)
        }
        this.locationChanged(d)
    }
    ;
    g.reSetMoveDir = function(d) {
        this.frameTime = 0;
        this.campaignsId = d;
        this.time = 5E3 * Math.random() + 4E3;
        this.reSetMoveDirPart();
        this.goToAng = (45 + 135 * Math.random()) * (2 * Math.round(Math.random()) - 1);
        switch (d) {
        case 1:
            this.speed = Math.abs(this.speed);
            this.vector = [Math.random() - 0.5, Math.random() - 0.5];
            this.rota = 180 * Math.atan2(this.vector[1], this.vector[0]) / Math.PI;
            break;
        case 2:
            this.setGoBack()
        }
    }
    ;
    f.key = "fish2";
    return f
}(Fish);
Fish2.prototype.__class__ = "Fish2";
var Fish3 = function(e) {
    function f() {
        e.call(this);
        this.campaignsId = 1;
        this.angSpeed = 0.5
    }
    __extends(f, e);
    var g = f.prototype;
    g.onEnterFrame = function(d) {
        if (this.isBack)
            this.goBack(d);
        else if (this.isOut || this.isChaseHook)
            this.go(d),
            10 > Math.abs(this.x - this.AirLoc[0]) + Math.abs(this.y - this.AirLoc[1]) && this.reachPoint();
        else {
            if ((Math.abs(this.center[0] - this.x) > this.radius || Math.abs(this.center[1] - this.y) > this.radius) && !this.isBack) {
                this.reSetMoveDir(2);
                return
            }
            this.frameTime += d;
            if (this.frameTime >= this.time) {
                this.reSetMoveDir(1);
                return
            }
            this.goToAng && this.angAnimation(d);
            this.arcGo(d)
        }
        this.locationChanged(d)
    }
    ;
    g.reSetMoveDir = function(d) {
        this.frameTime = 0;
        this.campaignsId = d;
        this.time = 5E3 * Math.random() + 4E3;
        this.reSetMoveDirPart();
        this.goToAng = (45 + 135 * Math.random()) * (2 * Math.round(Math.random()) - 1);
        switch (d) {
        case 1:
            this.speed = Math.abs(this.speed);
            this.vector = [Math.random() - 0.5, Math.random() - 0.5];
            this.rota = 180 * Math.atan2(this.vector[1], this.vector[0]) / Math.PI;
            break;
        case 2:
            this.setGoBack()
        }
    }
    ;
    f.key = "fish3";
    return f
}(Fish);
Fish3.prototype.__class__ = "Fish3";
var Fish4 = function(e) {
    function f() {
        e.call(this);
        this.campaignsId = 1
    }
    __extends(f, e);
    var g = f.prototype;
    g.onEnterFrame = function(d) {
        if (this.isBack)
            this.goBack(d);
        else if (this.isOut || this.isChaseHook)
            this.go(d),
            10 > Math.abs(this.x - this.AirLoc[0]) + Math.abs(this.y - this.AirLoc[1]) && this.reachPoint();
        else {
            if ((Math.abs(this.center[0] - this.x) > this.radius || Math.abs(this.center[1] - this.y) > this.radius) && !this.isBack) {
                this.reSetMoveDir(2);
                return
            }
            this.frameTime += d;
            if (this.frameTime >= this.time) {
                this.reSetMoveDir(1);
                return
            }
            3 == this.campaignsId ? this.goArc(d) : this.go(d)
        }
        this.locationChanged(d)
    }
    ;
    g.reSetMoveDir = function(d) {
        this.frameTime = 0;
        this.campaignsId = d;
        this.time = 1E3 * Math.random() + 1E3;
        this.reSetMoveDirPart();
        switch (d) {
        case 1:
            this.speed = Math.abs(this.speed);
            this.vector = [(2 * Math.round(Math.random()) - 1) * (0.2 * Math.random() + 0.6), 0.5 * (Math.random() - 0.5)];
            this.rota = 180 * Math.atan2(this.vector[1], this.vector[0]) / Math.PI;
            break;
        case 2:
            this.setGoBack();
            break;
        case 3:
            d = (2 * Math.ceil(Math.random()) - 1) * (1 + Math.random()) * this.arcBaseLength,
            this.setArcLength(d),
            this.speed = 2 * Math.round(Math.random()) - 1,
            d = 180 * Math.atan2(this._arcPos[1] - this.position[1], this._arcPos[0] - this.position[0]) / Math.PI,
            this.rota = 0 < this.speed ? d - 90 : d + 90
        }
    }
    ;
    f.key = "fish4";
    return f
}(Fish);
Fish4.prototype.__class__ = "Fish4";
var Fish5 = function(e) {
    function f() {
        e.call(this);
        this.speed = 2;
        this.campaignsId = 1
    }
    __extends(f, e);
    var g = f.prototype;
    g.onEnterFrame = function(d) {
        if (this.isBack)
            this.goBack(d);
        else if (this.isOut || this.isChaseHook)
            this.go(d),
            10 > Math.abs(this.x - this.AirLoc[0]) + Math.abs(this.y - this.AirLoc[1]) && this.reachPoint();
        else {
            if ((Math.abs(this.center[0] - this.x) > this.radius || Math.abs(this.center[1] - this.y) > this.radius) && !this.isBack) {
                this.reSetMoveDir(2);
                return
            }
            this.frameTime += d;
            if (this.frameTime >= this.time) {
                this.reSetMoveDir(1);
                return
            }
            3 == this.campaignsId ? this.goArc(d) : this.go(d)
        }
        this.locationChanged(d)
    }
    ;
    g.reSetMoveDir = function(d) {
        this.frameTime = 0;
        this.campaignsId = d;
        this.time = 1E3 * Math.random() + 1E3;
        this.reSetMoveDirPart();
        switch (d) {
        case 1:
            this.speed = Math.abs(this.speed);
            this.vector = [(2 * Math.round(Math.random()) - 1) * (0.2 * Math.random() + 0.6), 0.5 * (Math.random() - 0.5)];
            this.rota = 180 * Math.atan2(this.vector[1], this.vector[0]) / Math.PI;
            break;
        case 2:
            this.setGoBack();
            break;
        case 3:
            d = (2 * Math.ceil(Math.random()) - 1) * (1 + Math.random()) * this.arcBaseLength,
            this.setArcLength(d),
            this.speed = 2 * Math.round(Math.random()) - 1,
            d = 180 * Math.atan2(this._arcPos[1] - this.position[1], this._arcPos[0] - this.position[0]) / Math.PI,
            this.rota = 0 < this.speed ? d - 90 : d + 90
        }
    }
    ;
    f.key = "fish5";
    return f
}(Fish);
Fish5.prototype.__class__ = "Fish5";
var Fish6 = function(e) {
    function f() {
        e.call(this);
        this.campaignsId = 1;
        this.onHookRange = 25
    }
    __extends(f, e);
    var g = f.prototype;
    g.onEnterFrame = function(d) {
        if (this.isBack)
            this.goBack(d);
        else if (this.isOut || this.isChaseHook)
            this.go(d),
            10 > Math.abs(this.x - this.AirLoc[0]) + Math.abs(this.y - this.AirLoc[1]) && this.reachPoint();
        else {
            if ((Math.abs(this.center[0] - this.x) > this.radius || Math.abs(this.center[1] - this.y) > this.radius) && !this.isBack) {
                this.reSetMoveDir(2);
                return
            }
            this.frameTime += d;
            if (this.frameTime >= this.time) {
                this.reSetMoveDir(1);
                return
            }
            3 == this.campaignsId ? this.goArc(d) : this.go(d)
        }
        this.locationChanged(d)
    }
    ;
    g.reSetMoveDir = function(d) {
        this.frameTime = 0;
        this.campaignsId = d;
        this.time = this.getMoveTime() + 2E3;
        this.reSetMoveDirPart();
        switch (d) {
        case 1:
            this.speed = Math.abs(this.speed);
            this.vector = [(2 * Math.round(Math.random()) - 1) * (0.2 * Math.random() + 0.6), 0.5 * (Math.random() - 0.5)];
            this.rota = 180 * Math.atan2(this.vector[1], this.vector[0]) / Math.PI;
            break;
        case 2:
            this.setGoBack();
            break;
        case 3:
            d = (2 * Math.ceil(Math.random()) - 1) * (1 + Math.random()) * this.arcBaseLength,
            this.setArcLength(d),
            this.speed = 2 * Math.round(Math.random()) - 1,
            d = 180 * Math.atan2(this._arcPos[1] - this.position[1], this._arcPos[0] - this.position[0]) / Math.PI,
            this.rota = 0 < this.speed ? d - 90 : d + 90
        }
    }
    ;
    f.key = "fish6";
    return f
}(Fish);
Fish6.prototype.__class__ = "Fish6";
var Fish7 = function(e) {
    function f() {
        e.call(this);
        this.campaignsId = 1;
        this.onHookRange = 25
    }
    __extends(f, e);
    var g = f.prototype;
    g.onEnterFrame = function(d) {
        if (this.isBack)
            this.goBack(d);
        else if (this.isOut || this.isChaseHook)
            this.go(d),
            10 > Math.abs(this.x - this.AirLoc[0]) + Math.abs(this.y - this.AirLoc[1]) && this.reachPoint();
        else {
            if ((Math.abs(this.center[0] - this.x) > this.radius || Math.abs(this.center[1] - this.y) > this.radius) && !this.isBack) {
                this.reSetMoveDir(2);
                return
            }
            this.frameTime += d;
            if (this.frameTime >= this.time) {
                this.reSetMoveDir(1);
                return
            }
            3 == this.campaignsId ? this.goArc(d) : this.go(d)
        }
        this.locationChanged(d)
    }
    ;
    g.reSetMoveDir = function(d) {
        this.frameTime = 0;
        this.campaignsId = d;
        this.time = 2E3 * Math.random() + 2E3;
        this.reSetMoveDirPart();
        switch (d) {
        case 1:
            this.speed = Math.abs(this.speed);
            this.vector = [(2 * Math.round(Math.random()) - 1) * (0.2 * Math.random() + 0.6), 0.5 * (Math.random() - 0.5)];
            this.rota = 180 * Math.atan2(this.vector[1], this.vector[0]) / Math.PI;
            break;
        case 2:
            this.setGoBack();
            break;
        case 3:
            d = (2 * Math.ceil(Math.random()) - 1) * (1 + Math.random()) * this.arcBaseLength,
            this.setArcLength(d),
            this.speed = 2 * Math.round(Math.random()) - 1,
            d = 180 * Math.atan2(this._arcPos[1] - this.position[1], this._arcPos[0] - this.position[0]) / Math.PI,
            this.rota = 0 < this.speed ? d - 90 : d + 90
        }
    }
    ;
    f.key = "fish7";
    return f
}(Fish);
Fish7.prototype.__class__ = "Fish7";
var Fish8 = function(e) {
    function f() {
        e.call(this);
        this.campaignsId = 1;
        this.onHookRange = 25
    }
    __extends(f, e);
    var g = f.prototype;
    g.onEnterFrame = function(d) {
        if (this.isBack)
            this.goBack(d);
        else if (this.isOut || this.isChaseHook)
            this.go(d),
            10 > Math.abs(this.x - this.AirLoc[0]) + Math.abs(this.y - this.AirLoc[1]) && this.reachPoint();
        else {
            if ((Math.abs(this.center[0] - this.x) > this.radius || Math.abs(this.center[1] - this.y) > this.radius) && !this.isBack) {
                this.reSetMoveDir(2);
                return
            }
            this.frameTime += d;
            if (this.frameTime >= this.time) {
                this.reSetMoveDir(1);
                return
            }
            3 == this.campaignsId ? this.goArc(d) : this.go(d)
        }
        this.locationChanged(d)
    }
    ;
    g.reSetMoveDir = function(d) {
        this.frameTime = 0;
        this.campaignsId = d;
        this.time = 1E3 * Math.random() + 1E3;
        this.reSetMoveDirPart();
        switch (d) {
        case 1:
            this.speed = Math.abs(this.speed);
            this.vector = [(2 * Math.round(Math.random()) - 1) * (0.2 * Math.random() + 0.6), 0.5 * (Math.random() - 0.5)];
            this.rota = 180 * Math.atan2(this.vector[1], this.vector[0]) / Math.PI;
            break;
        case 2:
            this.setGoBack();
            break;
        case 3:
            d = (2 * Math.ceil(Math.random()) - 1) * (1 + Math.random()) * this.arcBaseLength,
            this.setArcLength(d),
            this.speed = 2 * Math.round(Math.random()) - 1,
            d = 180 * Math.atan2(this._arcPos[1] - this.position[1], this._arcPos[0] - this.position[0]) / Math.PI,
            this.rota = 0 < this.speed ? d - 90 : d + 90
        }
    }
    ;
    f.key = "fish8";
    return f
}(Fish);
Fish8.prototype.__class__ = "Fish8";
var Fish9 = function(e) {
    function f() {
        e.call(this);
        this.campaignsId = 1;
        this.onHookRange = 25
    }
    __extends(f, e);
    var g = f.prototype;
    g.onEnterFrame = function(d) {
        if (this.isBack)
            this.goBack(d);
        else if (this.isOut || this.isChaseHook)
            this.go(d),
            10 > Math.abs(this.x - this.AirLoc[0]) + Math.abs(this.y - this.AirLoc[1]) && this.reachPoint();
        else {
            if ((Math.abs(this.center[0] - this.x) > this.radius || Math.abs(this.center[1] - this.y) > this.radius) && !this.isBack) {
                this.reSetMoveDir(2);
                return
            }
            this.frameTime += d;
            if (this.frameTime >= this.time) {
                this.reSetMoveDir(1);
                return
            }
            3 == this.campaignsId ? this.goArc(d) : this.go(d)
        }
        this.locationChanged(d)
    }
    ;
    g.reSetMoveDir = function(d) {
        this.frameTime = 0;
        this.campaignsId = d;
        this.time = 1E3 * Math.random() + 1E3;
        this.reSetMoveDirPart();
        switch (d) {
        case 1:
            this.speed = Math.abs(this.speed);
            this.vector = [(2 * Math.round(Math.random()) - 1) * (0.2 * Math.random() + 0.6), 0.5 * (Math.random() - 0.5)];
            this.rota = 180 * Math.atan2(this.vector[1], this.vector[0]) / Math.PI;
            break;
        case 2:
            this.setGoBack();
            break;
        case 3:
            d = (2 * Math.ceil(Math.random()) - 1) * (1 + Math.random()) * this.arcBaseLength,
            this.setArcLength(d),
            this.speed = 2 * Math.round(Math.random()) - 1,
            d = 180 * Math.atan2(this._arcPos[1] - this.position[1], this._arcPos[0] - this.position[0]) / Math.PI,
            this.rota = 0 < this.speed ? d - 90 : d + 90
        }
    }
    ;
    f.key = "fish9";
    return f
}(Fish);
Fish9.prototype.__class__ = "Fish9";
(function(e) {
    (function(f) {
        (function(f) {
            var d = function(b) {
                function a() {
                    b.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["maxWidth", "minHeight", "minWidth"], [710, 230, 370]);
                    this.elementsContent = [this.horizontalScrollBar_i()]
                }
                __extends(a, b);
                var c = a.prototype;
                Object.defineProperty(c, "skinParts", {
                    get: function() {
                        return a._skinParts
                    },
                    enumerable: !0,
                    configurable: !0
                });
                c.horizontalScrollBar_i = function() {
                    var a = new egret.gui.HScrollBar;
                    this.horizontalScrollBar = a;
                    this.__s(a, ["skinName", "visible"], [e.button.scrolBar.HScrollBarSkin, !0]);
                    return a
                }
                ;
                a._skinParts = ["horizontalScrollBar"];
                return a
            }(egret.gui.Skin);
            f.ScrollerSkin = d;
            d.prototype.__class__ = "skins.button.scrolBar.ScrollerSkin"
        }
        )(f.scrolBar || (f.scrolBar = {}))
    }
    )(e.button || (e.button = {}))
}
)(skins || (skins = {}));
(function(e) {
    (function(e) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1920, 1920]);
                this.elementsContent = [this.__3_i(), this.mountainF1_i(), this.mountainF0_i(), this.mountain1_i(), this.mountain0_i(), this.__4_i(), this.__5_i(), this.waves1_i(), this.waves2_i(), this.waves3_i(), this.cloud0_i(), this.cloud1_i(), this.cloud2_i(), this.cloud3_i(), this.cloud4_i(), this.cloud5_i(), this.cloud6_i(), this.wave1_i(), this.wave0_i(), this.wave2_i(), this.wave3_i(), this.__6_i(), this.__7_i()];
                this.states = [new egret.gui.State("normal",[]), new egret.gui.State("disabled",[])]
            }
            __extends(b, d);
            var a = b.prototype;
            Object.defineProperty(a, "skinParts", {
                get: function() {
                    return b._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, "height scale9Grid source width x y".split(" "), [81, egret.gui.getScale9Grid("1,31,9,191"), "seaColorBlue_png", 1919, 0, 776]);
                return a
            }
            ;
            a.__5_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["iland_png", 630, 673]);
                return a
            }
            ;
            a.__6_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["seabed_png", 0, 1421]);
                return a
            }
            ;
            a.__7_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["scaleX", "source", "x", "y"], [-1, "seabed_png", 1919, 1421]);
                return a
            }
            ;
            a.cloud0_i = function() {
                var a = new egret.gui.UIAsset;
                this.cloud0 = a;
                this.__s(a, ["source", "x", "y"], ["cloud_png", 304, 65]);
                return a
            }
            ;
            a.cloud1_i = function() {
                var a = new egret.gui.UIAsset;
                this.cloud1 = a;
                this.__s(a, ["source", "x", "y"], ["cloud_png", 938, 159]);
                return a
            }
            ;
            a.cloud2_i = function() {
                var a = new egret.gui.UIAsset;
                this.cloud2 = a;
                this.__s(a, ["height", "source", "width", "x", "y"], [70, "cloud_png", 160, 1428, 137]);
                return a
            }
            ;
            a.cloud3_i = function() {
                var a = new egret.gui.UIAsset;
                this.cloud3 = a;
                this.__s(a, ["source", "width", "x", "y"], ["cloud_png", 152, 1422, 403]);
                return a
            }
            ;
            a.cloud4_i = function() {
                var a = new egret.gui.UIAsset;
                this.cloud4 = a;
                this.__s(a, ["height", "source", "width", "x", "y"], [130, "cloud_png", 298, 850, 371]);
                return a
            }
            ;
            a.cloud5_i = function() {
                var a = new egret.gui.UIAsset;
                this.cloud5 = a;
                this.__s(a, ["height", "source", "width", "x", "y"], [130, "cloud_png", 298, 1764, 267]);
                return a
            }
            ;
            a.cloud6_i = function() {
                var a = new egret.gui.UIAsset;
                this.cloud6 = a;
                this.__s(a, ["height", "source", "width", "x", "y"], [130, "cloud_png", 298, 114, 311]);
                return a
            }
            ;
            a.mountain0_i = function() {
                var a = new egret.gui.UIAsset;
                this.mountain0 = a;
                this.__s(a, ["source", "x", "y"], ["yuanjing1_png", 958, 602]);
                return a
            }
            ;
            a.mountain1_i = function() {
                var a = new egret.gui.UIAsset;
                this.mountain1 = a;
                this.__s(a, ["source", "x", "y"], ["yuanjing1_png", -1, 601]);
                return a
            }
            ;
            a.mountainF0_i = function() {
                var a = new egret.gui.UIAsset;
                this.mountainF0 = a;
                this.__s(a, ["source", "x", "y"], ["yuanjing2_png", 958, 526]);
                return a
            }
            ;
            a.mountainF1_i = function() {
                var a = new egret.gui.UIAsset;
                this.mountainF1 = a;
                this.__s(a, ["source", "x", "y"], ["yuanjing2_png", -2, 543]);
                return a
            }
            ;
            a.__3_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, "height scale9Grid source width x y".split(" "), [1212, egret.gui.getScale9Grid("1,83,8,498"), "sky_png", 1925, -5, -460]);
                return a
            }
            ;
            a.wave0_i = function() {
                var a = new egret.gui.UIAsset;
                this.wave0 = a;
                this.__s(a, ["source", "x", "y"], ["waveLight_png", -773, 783]);
                return a
            }
            ;
            a.wave1_i = function() {
                var a = new egret.gui.UIAsset;
                this.wave1 = a;
                this.__s(a, ["source", "x", "y"], ["waveLight_png", 2138, 762]);
                return a
            }
            ;
            a.wave2_i = function() {
                var a = new egret.gui.UIAsset;
                this.wave2 = a;
                this.__s(a, ["source", "x", "y"], ["waveLight_png", 1741, 802]);
                return a
            }
            ;
            a.wave3_i = function() {
                var a = new egret.gui.UIAsset;
                this.wave3 = a;
                this.__s(a, ["source", "x", "y"], ["waveLight_png", -1120, 821]);
                return a
            }
            ;
            a.waves1_i = function() {
                var a = new egret.gui.UIAsset;
                this.waves1 = a;
                this.__s(a, ["source", "x", "y"], ["waveBlue_png", 0, 733]);
                return a
            }
            ;
            a.waves2_i = function() {
                var a = new egret.gui.UIAsset;
                this.waves2 = a;
                this.__s(a, ["source", "x", "y"], ["waveBlue_png", 957, 733]);
                return a
            }
            ;
            a.waves3_i = function() {
                var a = new egret.gui.UIAsset;
                this.waves3 = a;
                this.__s(a, ["source", "x", "y"], ["waveBlue_png", 1915, 733]);
                return a
            }
            ;
            b._skinParts = "mountainF1 mountainF0 mountain1 mountain0 waves1 waves2 waves3 cloud0 cloud1 cloud2 cloud3 cloud4 cloud5 cloud6 wave1 wave0 wave2 wave3".split(" ");
            return b
        }(egret.gui.Skin);
        e.BgScene = g;
        g.prototype.__class__ = "skins.scene.BgScene"
    }
    )(e.scene || (e.scene = {}))
}
)(skins || (skins = {}));
(function(e) {
    (function(f) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.__5_i(), this.ui_source_i(), this.__6_i(), this.ui_font_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.ui_bar1_i(), this.ui_bar2_i(), this.ui_bar3_i(), this.btn_buy_i(), this.lb_costprice_i()];
                this.states = [new egret.gui.State("normal",[]), new egret.gui.State("down",[]), new egret.gui.State("disabled",[])]
            }
            __extends(b, d);
            var a = b.prototype;
            Object.defineProperty(a, "skinParts", {
                get: function() {
                    return b._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.__11_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["property3_png", 27, 301]);
                return a
            }
            ;
            a.__12_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["shuxing_bg_png", 56, 303]);
                return a
            }
            ;
            a.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, "height scale9Grid source width x y".split(" "), [414, egret.gui.getScale9Grid("10,9,15,14"), "goodsbg_png", 236, 0, 0]);
                return a
            }
            ;
            a.__5_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, "height horizontalCenter scale9Grid source width y".split(" "), [146, 0, egret.gui.getScale9Grid("7,8,20,17"), "shoprect_png", 189, 17]);
                return a
            }
            ;
            a.__6_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["horizontalCenter", "source", "y"], [0.5, "rodlist_part3_png", 180]);
                return a
            }
            ;
            a.__7_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["property1_png", 27, 231]);
                return a
            }
            ;
            a.__8_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["shuxing_bg_png", 57, 230]);
                return a
            }
            ;
            a.__9_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["property2_png", 27, 266]);
                return a
            }
            ;
            a.btn_buy_i = function() {
                var a = new egret.gui.Button;
                this.btn_buy = a;
                this.__s(a, ["horizontalCenter", "skinName", "touchEnabled", "y"], [1.5, e.button.Button1, !0, 338]);
                return a
            }
            ;
            a.lb_costprice_i = function() {
                var a = new egret.gui.BitmapLabel;
                this.lb_costprice = a;
                this.__s(a, ["font", "text", "x", "y"], ["pricenumber_fnt", "1000", 83, 355]);
                return a
            }
            ;
            a.__10_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["shuxing_bg_png", 57, 265]);
                return a
            }
            ;
            a.ui_bar1_i = function() {
                var a = new egret.gui.UIAsset;
                this.ui_bar1 = a;
                this.__s(a, ["source", "x", "y"], ["shuxing_top_png", 57, 230]);
                return a
            }
            ;
            a.ui_bar2_i = function() {
                var a = new egret.gui.UIAsset;
                this.ui_bar2 = a;
                this.__s(a, ["source", "x", "y"], ["shuxing_top_png", 57, 265]);
                return a
            }
            ;
            a.ui_bar3_i = function() {
                var a = new egret.gui.UIAsset;
                this.ui_bar3 = a;
                this.__s(a, ["source", "x", "y"], ["shuxing_top_png", 57, 303]);
                return a
            }
            ;
            a.ui_font_i = function() {
                var a = new egret.gui.UIAsset;
                this.ui_font = a;
                this.__s(a, ["horizontalCenter", "source", "y"], [0, "rodfont1_png", 193]);
                return a
            }
            ;
            a.ui_source_i = function() {
                var a = new egret.gui.UIAsset;
                this.ui_source = a;
                this.__s(a, ["horizontalCenter", "source", "y"], [0, "rod1_png", 30]);
                return a
            }
            ;
            b._skinParts = "ui_source ui_font ui_bar1 ui_bar2 ui_bar3 btn_buy lb_costprice".split(" ");
            return b
        }(egret.gui.Skin);
        f.RodItemRenderer = g;
        g.prototype.__class__ = "skins.window.RodItemRenderer"
    }
    )(e.window || (e.window = {}))
}
)(skins || (skins = {}));
var EventType = function() {
    function e() {}
    e.START_GAME = "START_GAME";
    e.STOP_GAME = "STOP_GAME";
    e.RESTART_GAME = "RESTART_GAME";
    e.BACK_TO_MAIN = "BACK_TO_MAIN";
    e.RESET_SCORE = "RESET_SCORE";
    e.RESET_BSET = "RESET_BSET";
    e.RESET_TIMES = "RESET_TIMES";
    e.FISH_UP = "fish_up";
    e.FISH_OVER = "fish_over";
    return e
}();
EventType.prototype.__class__ = "EventType";
var BgScene = function(e) {
    function f() {
        e.call(this);
        this.waveArr = [[], [], [], []];
        this.skinName = skins.scene.BgScene;
        this.y = -350;
        f.instance = this
    }
    __extends(f, e);
    var g = f.prototype;
    f.getInstance = function() {
        return f.instance
    }
    ;
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
        egret.Ticker.getInstance().register(this.loop, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.reMoved, this)
    }
    ;
    g.reMoved = function() {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.reMoved, this);
        egret.Ticker.getInstance().unregister(this.loop, this)
    }
    ;
    g.loop = function(d) {
        if (!Const.isOnBlur) {
            this.moveLeft(this.cloud0, d);
            this.moveLeft(this.cloud1, d);
            this.moveLeft(this.cloud2, d);
            this.moveLeft(this.cloud3, d);
            this.moveLeft(this.cloud4, d);
            this.moveLeft(this.cloud5, d);
            this.moveLeft(this.cloud6, d);
            for (var b = 0; b < this.waveArr[0].length; b++)
                this.waveMove1(this.waveArr[0], b, 0.5 * d);
            this.waveMove2(this.waveArr[1], 0, 0.7 * d);
            this.waveMove2(this.waveArr[1], 1, 0.7 * d);
            this.waveMove2(this.waveArr[2], 0, 1.4 * d);
            this.waveMove2(this.waveArr[2], 1, 1.4 * d)
        }
    }
    ;
    g.moveLeft = function(d, b) {
        d.x -= b / 30;
        0 > d.x + d.width && (d.x += 2E3 + d.width)
    }
    ;
    g.waveMove1 = function(d, b, a) {
        d[b].x -= a / 30;
        0 > d[b].x + d[b].width && (d[b].x = d[(b + 2) % 3].x + d[b].width - 3)
    }
    ;
    g.waveMove2 = function(d, b, a) {
        d[b].x += a / 30;
        1920 < d[b].x && (d[b].x = d[(b + 1) % 2].x - d[b].width)
    }
    ;
    return f
}(egret.gui.SkinnableComponent);
BgScene.prototype.__class__ = "BgScene";
var GameScene = function(e) {
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
    g.createScene = function() {
        this.mTool = ObjectPool.getInstance().createObject(ToolObject);
        this.view.addChild(this.mTool.view);
        this.createFishes();
        new FishRule
    }
    ;
    g.createFishes = function() {
        for (var d = GameModel.getInstance().fishGroupData, b = GameModel.getInstance().fishTypeData, a = 0; a < d.length; a++) {
            for (var c = d[a], e = [], f = c.fishCount, g = b[c.fishId], u = c.pos, n = c.radius, k = 0; k < f; k++)
                e.push(this.createFish(u, n, g.id, g.resid, g.ClassName, g.grade, g.anchorX, g.anchorY, g.speed, g.price, c.id));
            this.containers[c.id] = e
        }
    }
    ;
    g.createFish = function(d, b, a, c, e, f, g, u, n, k, m, l) {
        a = egret.getDefinitionByName(e);
        a = ObjectPool.getInstance().createObject(a);
        a.setFish(d, b, c, f, g, u, n, k, m, l);
        this.world.addBody(a);
        this.view.addChild(a.view);
        return a
    }
    ;
    g.reUseFish = function(d) {
        this.view.addChild(d.view)
    }
    ;
    g.destroyObject = function(d) {
        ObjectPool.getInstance().destroyObject(d)
    }
    ;
    g.onEnterFrame = function(d) {
        10 > d || 1E3 < d || this.world.step(1 / 60, d / 1E3)
    }
    ;
    f.getInstance = function() {
        return f.instance
    }
    ;
    f.key = "gameScene";
    return f
}(SceneObject);
GameScene.prototype.__class__ = "GameScene";
(function(e) {
    (function(e) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [];
                this.__7_i();
                this.__8_i();
                this.__9_i();
                this.__10_i();
                this.states = [new egret.gui.State("up",[new egret.gui.AddItems("__9","","last",""), new egret.gui.AddItems("__10","","last","")]), new egret.gui.State("down",[new egret.gui.AddItems("__9","","last",""), new egret.gui.AddItems("__10","","last","")]), new egret.gui.State("disabled",[new egret.gui.AddItems("__9","","last",""), new egret.gui.AddItems("__10","","last","")]), new egret.gui.State("upAndSelected",[new egret.gui.AddItems("__7","","last",""), new egret.gui.AddItems("__8","","last","")]), new egret.gui.State("downAndSelected",[new egret.gui.AddItems("__7","","last",""), new egret.gui.AddItems("__8","","last","")]), new egret.gui.State("disabledAndSelected",[new egret.gui.AddItems("__7","","last",""), new egret.gui.AddItems("__8","","last","")])]
            }
            __extends(b, d);
            var a = b.prototype;
            a.__10_i = function() {
                var a = new egret.gui.UIAsset;
                this.__10 = a;
                this.__s(a, ["horizontalCenter", "source"], [98, "btnship2_png"]);
                return a
            }
            ;
            a.__7_i = function() {
                var a = new egret.gui.UIAsset;
                this.__7 = a;
                this.__s(a, ["horizontalCenter", "source"], [-100, "btnrod2_png"]);
                return a
            }
            ;
            a.__8_i = function() {
                var a = new egret.gui.UIAsset;
                this.__8 = a;
                this.__s(a, ["horizontalCenter", "source"], [98, "btnship1_png"]);
                return a
            }
            ;
            a.__9_i = function() {
                var a = new egret.gui.UIAsset;
                this.__9 = a;
                this.__s(a, ["horizontalCenter", "source"], [-100, "btnrod1_png"]);
                return a
            }
            ;
            return b
        }(egret.gui.Skin);
        e.Toggleswitch = g;
        g.prototype.__class__ = "skins.button.Toggleswitch"
    }
    )(e.button || (e.button = {}))
}
)(skins || (skins = {}));
(function(e) {
    (function(f) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [new egret.gui.State("normal",[]), new egret.gui.State("disabled",[])]
            }
            __extends(b, d);
            var a = b.prototype;
            Object.defineProperty(a, "skinParts", {
                get: function() {
                    return b._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.__4_i = function() {
                var a = new egret.gui.Scroller;
                this.__s(a, "percentHeight horizontalScrollPolicy skinName verticalScrollPolicy visible percentWidth".split(" "), [100, "on", e.button.scrolBar.ScrollerSkin, "off", !0, 100]);
                a.viewport = this.dataGroup_i();
                return a
            }
            ;
            a.dataGroup_i = function() {
                var a = new egret.gui.DataGroup;
                this.dataGroup = a;
                a.itemRendererSkinName = e.window.RodItemRenderer;
                a.layout = this.__3_i();
                return a
            }
            ;
            a.__3_i = function() {
                return new egret.gui.HorizontalLayout
            }
            ;
            b._skinParts = ["dataGroup"];
            return b
        }(egret.gui.Skin);
        f.List = g;
        g.prototype.__class__ = "skins.window.List"
    }
    )(e.window || (e.window = {}))
}
)(skins || (skins = {}));
(function(e) {
    (function(f) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.__5_i(), this.ui_source_i(), this.__6_i(), this.ui_font_i(), this.btn_buy_i(), this.lb_costprice_i(), this.lb_shiplabel_i()];
                this.states = [new egret.gui.State("normal",[new egret.gui.SetProperty("lb_shiplabel","text","\u53ef\u4ee5\u5e26\u4f60\u5230\u79bb\u5cb8\u8fb9\u8fd1\u70b9\u5728\u5730\u65b9\u9493\u9c7c")]), new egret.gui.State("down",[]), new egret.gui.State("disabled",[])]
            }
            __extends(b, d);
            var a = b.prototype;
            Object.defineProperty(a, "skinParts", {
                get: function() {
                    return b._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.__5_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, "height horizontalCenter scale9Grid source width y".split(" "), [146, 0, egret.gui.getScale9Grid("7,8,20,17"), "shoprect_png", 189, 17]);
                return a
            }
            ;
            a.__6_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["horizontalCenter", "source", "y"], [0.5, "rodlist_part3_png", 180]);
                return a
            }
            ;
            a.btn_buy_i = function() {
                var a = new egret.gui.Button;
                this.btn_buy = a;
                this.__s(a, ["horizontalCenter", "skinName", "y"], [1, e.button.Button1, 338]);
                return a
            }
            ;
            a.lb_costprice_i = function() {
                var a = new egret.gui.BitmapLabel;
                this.lb_costprice = a;
                this.__s(a, ["font", "horizontalCenter", "text", "y"], ["pricenumber_fnt", 16.5, "1000", 353]);
                return a
            }
            ;
            a.lb_shiplabel_i = function() {
                var a = new egret.gui.Label;
                this.lb_shiplabel = a;
                this.__s(a, "fontFamily height horizontalCenter size text textAlign width y".split(" "), ["\u5fae\u8f6f\u96c5\u9ed1", 68, 0.5, 23, "\u53ef\u4ee5\u5e26\u4f60\u5230\u79bb\u5cb8\u8fb9\u8fd1\u70b9\u5728\u5730\u65b9\u9493\u9c7c", "center", 197, 222]);
                return a
            }
            ;
            a.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, "height scale9Grid source width x y".split(" "), [414, egret.gui.getScale9Grid("10,9,15,14"), "goodsbg_png", 279, 0, 0]);
                return a
            }
            ;
            a.ui_font_i = function() {
                var a = new egret.gui.UIAsset;
                this.ui_font = a;
                this.__s(a, ["horizontalCenter", "source", "y"], [0, "rodfont1_png", 193]);
                return a
            }
            ;
            a.ui_source_i = function() {
                var a = new egret.gui.UIAsset;
                this.ui_source = a;
                this.__s(a, ["horizontalCenter", "source", "y"], [0, "shipicn1_png", 30]);
                return a
            }
            ;
            b._skinParts = ["ui_source", "ui_font", "btn_buy", "lb_costprice", "lb_shiplabel"];
            return b
        }(egret.gui.Skin);
        f.ShipItemRender = g;
        g.prototype.__class__ = "skins.window.ShipItemRender"
    }
    )(e.window || (e.window = {}))
}
)(skins || (skins = {}));
var AssetAdapter = function() {
    function e() {}
    e.prototype.getAsset = function(e, g, d, b) {
        function a(a) {
            g.call(d, a, e)
        }
        b = e;
        e.prototype && (b = new e);
        b instanceof egret.DisplayObject || b instanceof egret.Texture ? g.call(d, b, e) : "string" == typeof e ? RES.hasRes(e) ? RES.getResAsync(e, a, this) : RES.getResByUrl(e, a, this) : g.call(d, b, e)
    }
    ;
    return e
}();
AssetAdapter.prototype.__class__ = "AssetAdapter";
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
    }
    ;
    f.startGame = function() {
        this.mGameScene = ObjectPool.getInstance().createObject(GameScene);
        this.mGameLayer.addChild(this.mGameScene.view)
    }
    ;
    f.correctLocation = function() {
        GameScene.getInstance().view.y = 30;
        GameScene.getInstance().view.x = 50
    }
    ;
    return e
}();
Game.prototype.__class__ = "Game";
var LoadingUI = function(e) {
    function f() {
        e.call(this);
        this.createView()
    }
    __extends(f, e);
    var g = f.prototype;
    g.createView = function() {
        this.textField = new egret.TextField;
        this.addChild(this.textField);
        this.textField.y = 0;
        this.textField.textAlign = "center";
        this.textField.width = 960;
        this.textField.height = 100
    }
    ;
    g.setProgress = function(d, b) {
        this.textField.text = "Loading..." + d + "/" + b
    }
    ;
    return f
}(egret.Sprite);
LoadingUI.prototype.__class__ = "LoadingUI";
var MainUILayer = function(e) {
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
    }
    ;
    g.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        this.hideElements();
        this.sellNum.visible = !1;
        this.window = new RodListWindow(this.UIStage);
        this.fishWindow = new FishWindow(this.UIStage);
        this.btn_sound.addEventListener(egret.TouchEvent.TOUCH_TAP, this.soundTurner, this);
        this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showPauseIndex, this);
        this.btn_shop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addRodWindow, this);
        this.btn_allship.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addfishWindow, this);
        this.btn_sell.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sell, this);
        var d = DataManager.instance.levelValue;
        this.lb_lv.text = Math.ceil(d / 30).toString();
        this.Bar_experience._setScaleX(d % 30 / 30);
        DataManager.instance.money += 0
    }
    ;
    g.soundTurner = function() {
        DataManager.instance.musicSW()
    }
    ;
    g.resetDate = function() {
        egret.localStorage.setItem("playtimes", "0");
        egret.localStorage.setItem("best", "0")
    }
    ;
    g.backToMain = function() {
        this.skin.currentState = "normal";
        this.dispatchEventWith(EventType.BACK_TO_MAIN)
    }
    ;
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
        }, 500);
        egret.Tween.get(this.lb_score).to({
            y: 38
        }, 500);
        egret.Tween.get(this.coin).to({
            y: 30
        }, 500);
        egret.Tween.get(this.btn_allship).to({
            x: 860
        }, 500);
        this.btn_sound.y = -this.btn_sound.height;
        egret.Tween.get(this.btn_sound).to({
            y: 20
        }, 500);
        this.btn_sell.y = Const.stageHeight + this.btn_sell.height;
        this.skin.currentState = "pause";
        this.dispatchEventWith(EventType.START_GAME);
        this.tool.view.addEventListener(Action.OUT, this.showSell, this);
        this.tool.view.addEventListener(Action.CAST, this.hideSell, this)
    }
    ;
    g.showSell = function(d) {
        0 != d.data && (egret.Tween.get(this.btn_sell).to({
            y: 550
        }, 500),
        this.sellNum.text = "$" + Math.round(this.tool.fishPrice * this.tool.fishHP / 3),
        this.sellNum.visible = !0)
    }
    ;
    g.hideSell = function(d) {
        egret.Tween.get(this.btn_sell).to({
            y: 750
        }, 500);
        this.sellNum.visible = !1
    }
    ;
    g.sell = function() {
        this.tool.fishPrice && (this.hideSell(),
        this.tool.beSell())
    }
    ;
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
    }
    ;
    g.restart = function() {
        this.skin.currentState = "gamein";
        this.dispatchEventWith(EventType.RESTART_GAME)
    }
    ;
    g.showMenus = function() {
        egret.Tween.get(this.coin).to({
            y: 11
        }, 500);
        egret.Tween.get(this.lb_score).to({
            y: 28
        }, 500);
        egret.Tween.get(this.btn_sound).to({
            x: 844
        }, 500);
        egret.Tween.get(this.lv).to({
            y: 595
        }, 500);
        egret.Tween.get(this.lb_lv).to({
            y: 593
        }, 500);
        egret.Tween.get(this.Bar_experience).to({
            y: 592
        }, 500);
        egret.Tween.get(this.expBarBg).to({
            y: 592
        }, 500);
        egret.Tween.get(this.btn_allship).to({
            x: 860
        }, 500);
        egret.Tween.get(this.btn_shop).to({
            y: 30
        }, 500)
    }
    ;
    g.hideMenus = function() {
        egret.Tween.get(this.coin).to({
            y: -100
        }, 500);
        egret.Tween.get(this.lb_score).to({
            y: -100
        }, 500);
        egret.Tween.get(this.btn_sound).to({
            x: 1E3
        }, 500);
        egret.Tween.get(this.lv).to({
            y: 750
        }, 500);
        egret.Tween.get(this.lb_lv).to({
            y: 750
        }, 500);
        egret.Tween.get(this.Bar_experience).to({
            y: 750
        }, 500);
        egret.Tween.get(this.expBarBg).to({
            y: 750
        }, 500);
        egret.Tween.get(this.btn_allship).to({
            x: 1E3
        }, 500);
        egret.Tween.get(this.btn_shop).to({
            y: -120
        }, 500)
    }
    ;
    g.addRodWindow = function() {
        this.window.show()
    }
    ;
    g.changeHandler = function(d) {}
    ;
    g.stopgame = function() {
        this.skin.currentState = "gameover"
    }
    ;
    g.setScore = function(d) {
        var b = egret.localStorage.getItem("bestscore") ? Number(egret.localStorage.getItem("bestscore")) : 0;
        b > d ? this.setBest(b) : (this.setBest(d),
        egret.localStorage.setItem("bestscore", d + ""))
    }
    ;
    g.setBest = function(d) {}
    ;
    g.setPlayTimes = function(d) {}
    ;
    g.addfishWindow = function() {
        this.fishWindow.show()
    }
    ;
    f.instance = function() {
        return f._instance
    }
    ;
    g.hideElements = function() {
        this.btn_sound.visible = !1;
        this.expBarBg.visible = !1;
        this.coin.visible = !1;
        this.Bar_experience.visible = !1;
        this.version.text = "version " + Const.versionNum
    }
    ;
    g.showElements = function() {
        this.btn_sound.visible = !0;
        this.expBarBg.visible = !0;
        this.coin.visible = !0;
        this.Bar_experience.visible = !0;
        this.version.visible = !1
    }
    ;
    return f
}(egret.gui.SkinnableComponent);
MainUILayer.prototype.__class__ = "MainUILayer";
(function(e) {
    (function(e) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 309;
                this.elementsContent = [this.__4_i(), this.ui_source_i(), this.__5_i(), this.lb_price_i(), this.lb_des_i(), this.__6_i()];
                this.states = [new egret.gui.State("normal",[]), new egret.gui.State("down",[]), new egret.gui.State("disabled",[])]
            }
            __extends(b, d);
            var a = b.prototype;
            Object.defineProperty(a, "skinParts", {
                get: function() {
                    return b._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.__5_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x"], ["fishlist_part2_png", 0]);
                return a
            }
            ;
            a.__6_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "y"], ["fishlist_part3_png", 80]);
                return a
            }
            ;
            a.lb_des_i = function() {
                var a = new egret.gui.Label;
                this.lb_des = a;
                this.__s(a, "fontFamily height size text textColor width x y".split(" "), ["\u9ed1\u4f53", 68, 16, "\u5355\u4e2a\u58f0\u4ef745\uff0c\u53ef\u4f5c\u4e3a\u4e2d\u7ea7\u9c7c\u7684\u9c7c\u9975\u4f7f\u7528\u3002", 6625561, 156, 152, 1]);
                return a
            }
            ;
            a.lb_price_i = function() {
                var a = new egret.gui.BitmapLabel;
                this.lb_price = a;
                a.setStyle("size", 26);
                this.__s(a, "font rotation scaleX scaleY text x y".split(" "), ["pricenumber_fnt", -35, 0.7, 0.7, "88", -1, 29]);
                return a
            }
            ;
            a.__4_i = function() {
                var a = new egret.gui.UIAsset;
                a.source = "fishlist_part1_png";
                return a
            }
            ;
            a.ui_source_i = function() {
                var a = new egret.gui.UIAsset;
                this.ui_source = a;
                this.__s(a, ["source", "x", "y"], ["fish6_01_png", 14, -49]);
                return a
            }
            ;
            b._skinParts = ["ui_source", "lb_price", "lb_des"];
            return b
        }(egret.gui.Skin);
        e.FishItemRenderer = g;
        g.prototype.__class__ = "skins.window.FishItemRenderer"
    }
    )(e.window || (e.window = {}))
}
)(skins || (skins = {}));
(function(e) {
    (function(f) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [new egret.gui.State("normal",[]), new egret.gui.State("disabled",[])]
            }
            __extends(b, d);
            var a = b.prototype;
            Object.defineProperty(a, "skinParts", {
                get: function() {
                    return b._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.__4_i = function() {
                var a = new egret.gui.Scroller;
                this.__s(a, ["percentHeight", "horizontalScrollPolicy", "verticalScrollPolicy", "percentWidth"], [100, "off", "off", 100]);
                a.viewport = this.dataGroup_i();
                return a
            }
            ;
            a.dataGroup_i = function() {
                var a = new egret.gui.DataGroup;
                this.dataGroup = a;
                a.itemRendererSkinName = e.window.RodItemRenderer;
                a.layout = this.__3_i();
                return a
            }
            ;
            a.__3_i = function() {
                var a = new egret.gui.TileLayout;
                a.padding = 0;
                return a
            }
            ;
            b._skinParts = ["dataGroup"];
            return b
        }(egret.gui.Skin);
        f.FishList = g;
        g.prototype.__class__ = "skins.window.FishList"
    }
    )(e.window || (e.window = {}))
}
)(skins || (skins = {}));
(function(e) {
    (function(f) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.height = 463;
                this.elementsContent = [this.bg_i(), this.ship_list_i(), this.btn_switch_i(), this.closeButton_i()];
                this.ui_list_i();
                this.__13_i();
                this.__14_i();
                this.states = [new egret.gui.State("normal",[new egret.gui.AddItems("ui_list","","before","ship_list"), new egret.gui.SetProperty("bg","horizontalCenter",0), new egret.gui.SetProperty("__13","source","btnrod2_png"), new egret.gui.SetProperty("__14","source","btnrod2_png")]), new egret.gui.State("disabled",[new egret.gui.AddItems("__13","","before","btn_switch"), new egret.gui.AddItems("__14","","before","btn_switch"), new egret.gui.SetProperty("bg","horizontalCenter",0)])]
            }
            __extends(b, d);
            var a = b.prototype;
            Object.defineProperty(a, "skinParts", {
                get: function() {
                    return b._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.__12_i = function() {
                var a = new egret.gui.ArrayCollection;
                a.source = [this.__9_i(), this.__10_i()];
                return a
            }
            ;
            a.__13_i = function() {
                var a = new egret.gui.UIAsset;
                this.__13 = a;
                this.__s(a, ["x", "y"], [17, -37]);
                return a
            }
            ;
            a.__14_i = function() {
                var a = new egret.gui.UIAsset;
                this.__14 = a;
                this.__s(a, ["x", "y"], [17, -37]);
                return a
            }
            ;
            a.__3_i = function() {
                return {
                    label: "\u6570\u636e1"
                }
            }
            ;
            a.__4_i = function() {
                return {
                    label: "null"
                }
            }
            ;
            a.__5_i = function() {
                return {
                    label: "null"
                }
            }
            ;
            a.__6_i = function() {
                return {
                    label: "null"
                }
            }
            ;
            a.__8_i = function() {
                var a = new egret.gui.ArrayCollection;
                a.source = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i()];
                return a
            }
            ;
            a.__9_i = function() {
                return {
                    label: "\u6570\u636e1"
                }
            }
            ;
            a.bg_i = function() {
                var a = new egret.gui.UIAsset;
                this.bg = a;
                this.__s(a, ["source", "x", "y"], ["store_bg_png", 0, 60]);
                return a
            }
            ;
            a.btn_switch_i = function() {
                var a = new egret.gui.ToggleSwitch;
                this.btn_switch = a;
                this.__s(a, ["label", "skinName", "x", "y"], ["\u5f00\u5173\u6309\u94ae", e.button.Toggleswitch, 28, 0]);
                return a
            }
            ;
            a.closeButton_i = function() {
                var a = new egret.gui.Button;
                this.closeButton = a;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("closebtn1_png","closebtn1_png"), 809, 46]);
                return a
            }
            ;
            a.ship_list_i = function() {
                var a = new egret.gui.List;
                this.ship_list = a;
                this.__s(a, "height itemRendererSkinName skinName useVirtualLayout width x y".split(" "), [440, e.window.ShipItemRender, e.window.List, !1, 801, 28, 82]);
                a.dataProvider = this.__12_i();
                return a
            }
            ;
            a.__10_i = function() {
                return {
                    label: "\u6570\u636e2"
                }
            }
            ;
            a.ui_list_i = function() {
                var a = new egret.gui.List;
                this.ui_list = a;
                this.__s(a, "height itemRendererSkinName skinName useVirtualLayout visible width x y".split(" "), [440, e.window.RodItemRenderer, e.window.List, !1, !1, 800, 30, 83]);
                a.dataProvider = this.__8_i();
                return a
            }
            ;
            b._skinParts = ["bg", "ui_list", "ship_list", "btn_switch", "closeButton"];
            return b
        }(egret.gui.Skin);
        f.RodWindow = g;
        g.prototype.__class__ = "skins.window.RodWindow"
    }
    )(e.window || (e.window = {}))
}
)(skins || (skins = {}));
var RodItemRenderer = function(e) {
    function f() {
        e.call(this);
        this.skinName = skins.window.RodItemRenderer
    }
    __extends(f, e);
    var g = f.prototype;
    g.dataChanged = function() {
        e.prototype.dataChanged.call(this);
        this.updateDisplay();
        this.btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.whenTouch, this);
        this.lb_costprice.touchEnabled = !1;
        this.stage.addEventListener(Action.USING_POLE, this.changeUsingBtn, this)
    }
    ;
    g.changeUsingBtn = function(d) {
        GameScene.getInstance().mTool.pole.name == this.data.id.toString() ? (this.lb_costprice.visible = !1,
        this.btn_buy.skinName = skins.button.Button3) : this.data.purchased && (this.btn_buy.skinName = skins.button.Button2)
    }
    ;
    g.whenTouch = function(d) {
        this.data.purchased ? (GameScene.getInstance().mTool.setPole(this.data.id),
        DataManager.instance.money -= 0,
        this.stage.dispatchEventWith(Action.USING_POLE)) : DataManager.instance.money >= this.data.cost && (this.data.purchased = !0,
        DataManager.instance.money -= this.data.cost,
        this.data.cost = 0,
        this.updateDisplay(),
        GameScene.getInstance().mTool.setPole(this.data.id),
        this.stage.dispatchEventWith(Action.USING_POLE));
        DataManager.instance.money -= 0
    }
    ;
    g.setvalue = function(d, b) {
        d._setScaleX(b / 100)
    }
    ;
    g.updateDisplay = function() {
        this.ui_source.source = RES.getRes(this.data.name);
        this.ui_font.source = RES.getRes(this.data.path);
        this.setvalue(this.ui_bar1, this.data.arm);
        this.setvalue(this.ui_bar2, 130 - 100 * this.data.throw);
        this.setvalue(this.ui_bar3, 100 * this.data.pull - 90);
        this.data.purchased ? (this.lb_costprice.visible = !1,
        this.btn_buy.skinName = skins.button.Button2) : this.lb_costprice.text = this.data.cost + "";
        Number(GameScene.getInstance().mTool.pole.name) == this.data.id.toString() && (this.btn_buy.skinName = skins.button.Button3)
    }
    ;
    return f
}(egret.gui.ItemRenderer);
RodItemRenderer.prototype.__class__ = "RodItemRenderer";
var ShipItemRender = function(e) {
    function f() {
        e.call(this);
        this.skinName = skins.window.ShipItemRender
    }
    __extends(f, e);
    var g = f.prototype;
    g.dataChanged = function() {
        e.prototype.dataChanged.call(this);
        this.updateDisplay();
        this.btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP, this.whenTouch, this);
        this.stage.addEventListener(Action.USING_SHIP, this.changeUsingBtn, this)
    }
    ;
    g.changeUsingBtn = function(d) {
        GameScene.getInstance().mTool.catGroup.placeId == this.data.id.toString() ? (this.lb_costprice.visible = !1,
        this.btn_buy.skinName = skins.button.Button3) : this.data.purchased && (this.btn_buy.skinName = skins.button.Button2)
    }
    ;
    g.whenTouch = function(d) {
        this.data.purchased ? (GameScene.getInstance().mTool.catGroup.createPlace(this.data.id),
        DataManager.instance.money -= 0,
        GameScene.getInstance().mTool.poleRota = Const.iniPoleRota,
        this.stage.dispatchEventWith(Action.USING_SHIP)) : DataManager.instance.money >= this.data.cost && (this.data.purchased = !0,
        DataManager.instance.money -= this.data.cost,
        this.data.cost = 0,
        this.updateDisplay(),
        GameScene.getInstance().mTool.catGroup.createPlace(this.data.id),
        GameScene.getInstance().mTool.poleRota = Const.iniPoleRota,
        this.stage.dispatchEventWith(Action.USING_SHIP));
        DataManager.instance.money -= 0
    }
    ;
    g.updateDisplay = function() {
        this.lb_shiplabel.text = this.data.descr;
        this.lb_costprice.touchEnabled = !1;
        this.ui_source.source = this.data.name;
        this.data.path ? this.ui_font.source = this.data.path : this.ui_font.visible = !1;
        console.log(this.data.purchased, this.data.id);
        this.data.purchased ? (this.lb_costprice.visible = !1,
        this.btn_buy.skinName = skins.button.Button2) : this.lb_costprice.text = this.data.cost + "";
        GameScene.getInstance().mTool.catGroup.placeId == this.data.id && (this.btn_buy.skinName = skins.button.Button3)
    }
    ;
    return f
}(egret.gui.ItemRenderer);
ShipItemRender.prototype.__class__ = "ShipItemRender";
var md5 = function() {
    function e() {
        this.hexcase = 0;
        this.b64pad = ""
    }
    var f = e.prototype;
    f.hex_md5 = function(e) {
        return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(e)))
    }
    ;
    f.b64_md5 = function(e) {
        return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(e)))
    }
    ;
    f.any_md5 = function(e, d) {
        return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(e)), d)
    }
    ;
    f.hex_hmac_md5 = function(e, d) {
        return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(d)))
    }
    ;
    f.b64_hmac_md5 = function(e, d) {
        return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(d)))
    }
    ;
    f.any_hmac_md5 = function(e, d, b) {
        return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(d)), b)
    }
    ;
    f.md5_vm_test = function() {
        return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase()
    }
    ;
    f.rstr_md5 = function(e) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(e), 8 * e.length))
    }
    ;
    f.rstr_hmac_md5 = function(e, d) {
        var b = this.rstr2binl(e);
        16 < b.length && (b = this.binl_md5(b, 8 * e.length));
        for (var a = Array(16), c = Array(16), f = 0; 16 > f; f++)
            a[f] = b[f] ^ 909522486,
            c[f] = b[f] ^ 1549556828;
        b = this.binl_md5(a.concat(this.rstr2binl(d)), 512 + 8 * d.length);
        return this.binl2rstr(this.binl_md5(c.concat(b), 640))
    }
    ;
    f.rstr2hex = function(e) {
        try {
            this.hexcase
        } catch (d) {
            this.hexcase = 0
        }
        for (var b = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", a = "", c, f = 0; f < e.length; f++)
            c = e.charCodeAt(f),
            a += b.charAt(c >>> 4 & 15) + b.charAt(c & 15);
        return a
    }
    ;
    f.rstr2b64 = function(e) {
        try {
            this.b64pad
        } catch (d) {
            this.b64pad = ""
        }
        for (var b = "", a = e.length, c = 0; c < a; c += 3)
            for (var f = e.charCodeAt(c) << 16 | (c + 1 < a ? e.charCodeAt(c + 1) << 8 : 0) | (c + 2 < a ? e.charCodeAt(c + 2) : 0), p = 0; 4 > p; p++)
                b = 8 * c + 6 * p > 8 * e.length ? b + this.b64pad : b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(f >>> 6 * (3 - p) & 63);
        return b
    }
    ;
    f.rstr2any = function(e, d) {
        var b = d.length, a, c, f, p, v, u = Array(Math.ceil(e.length / 2));
        for (a = 0; a < u.length; a++)
            u[a] = e.charCodeAt(2 * a) << 8 | e.charCodeAt(2 * a + 1);
        var n = Math.ceil(8 * e.length / (Math.log(d.length) / Math.log(2)))
          , k = Array(n);
        for (c = 0; c < n; c++) {
            v = [];
            for (a = p = 0; a < u.length; a++)
                if (p = (p << 16) + u[a],
                f = Math.floor(p / b),
                p -= f * b,
                0 < v.length || 0 < f)
                    v[v.length] = f;
            k[c] = p;
            u = v
        }
        b = "";
        for (a = k.length - 1; 0 <= a; a--)
            b += d.charAt(k[a]);
        return b
    }
    ;
    f.str2rstr_utf8 = function(e) {
        for (var d = "", b = -1, a, c; ++b < e.length; )
            a = e.charCodeAt(b),
            c = b + 1 < e.length ? e.charCodeAt(b + 1) : 0,
            55296 <= a && 56319 >= a && 56320 <= c && 57343 >= c && (a = 65536 + ((a & 1023) << 10) + (c & 1023),
            b++),
            127 >= a ? d += String.fromCharCode(a) : 2047 >= a ? d += String.fromCharCode(192 | a >>> 6 & 31, 128 | a & 63) : 65535 >= a ? d += String.fromCharCode(224 | a >>> 12 & 15, 128 | a >>> 6 & 63, 128 | a & 63) : 2097151 >= a && (d += String.fromCharCode(240 | a >>> 18 & 7, 128 | a >>> 12 & 63, 128 | a >>> 6 & 63, 128 | a & 63));
        return d
    }
    ;
    f.str2rstr_utf16le = function(e) {
        for (var d = "", b = 0; b < e.length; b++)
            d += String.fromCharCode(e.charCodeAt(b) & 255, e.charCodeAt(b) >>> 8 & 255);
        return d
    }
    ;
    f.str2rstr_utf16be = function(e) {
        for (var d = "", b = 0; b < e.length; b++)
            d += String.fromCharCode(e.charCodeAt(b) >>> 8 & 255, e.charCodeAt(b) & 255);
        return d
    }
    ;
    f.rstr2binl = function(e) {
        for (var d = Array(e.length >> 2), b = 0; b < d.length; b++)
            d[b] = 0;
        for (b = 0; b < 8 * e.length; b += 8)
            d[b >> 5] |= (e.charCodeAt(b / 8) & 255) << b % 32;
        return d
    }
    ;
    f.binl2rstr = function(e) {
        for (var d = "", b = 0; b < 32 * e.length; b += 8)
            d += String.fromCharCode(e[b >> 5] >>> b % 32 & 255);
        return d
    }
    ;
    f.binl_md5 = function(e, d) {
        e[d >> 5] |= 128 << d % 32;
        e[(d + 64 >>> 9 << 4) + 14] = d;
        for (var b = 1732584193, a = -271733879, c = -1732584194, f = 271733878, p = 0; p < e.length; p += 16)
            var v = b
              , u = a
              , n = c
              , k = f
              , b = this.md5_ff(b, a, c, f, e[p + 0], 7, -680876936)
              , f = this.md5_ff(f, b, a, c, e[p + 1], 12, -389564586)
              , c = this.md5_ff(c, f, b, a, e[p + 2], 17, 606105819)
              , a = this.md5_ff(a, c, f, b, e[p + 3], 22, -1044525330)
              , b = this.md5_ff(b, a, c, f, e[p + 4], 7, -176418897)
              , f = this.md5_ff(f, b, a, c, e[p + 5], 12, 1200080426)
              , c = this.md5_ff(c, f, b, a, e[p + 6], 17, -1473231341)
              , a = this.md5_ff(a, c, f, b, e[p + 7], 22, -45705983)
              , b = this.md5_ff(b, a, c, f, e[p + 8], 7, 1770035416)
              , f = this.md5_ff(f, b, a, c, e[p + 9], 12, -1958414417)
              , c = this.md5_ff(c, f, b, a, e[p + 10], 17, -42063)
              , a = this.md5_ff(a, c, f, b, e[p + 11], 22, -1990404162)
              , b = this.md5_ff(b, a, c, f, e[p + 12], 7, 1804603682)
              , f = this.md5_ff(f, b, a, c, e[p + 13], 12, -40341101)
              , c = this.md5_ff(c, f, b, a, e[p + 14], 17, -1502002290)
              , a = this.md5_ff(a, c, f, b, e[p + 15], 22, 1236535329)
              , b = this.md5_gg(b, a, c, f, e[p + 1], 5, -165796510)
              , f = this.md5_gg(f, b, a, c, e[p + 6], 9, -1069501632)
              , c = this.md5_gg(c, f, b, a, e[p + 11], 14, 643717713)
              , a = this.md5_gg(a, c, f, b, e[p + 0], 20, -373897302)
              , b = this.md5_gg(b, a, c, f, e[p + 5], 5, -701558691)
              , f = this.md5_gg(f, b, a, c, e[p + 10], 9, 38016083)
              , c = this.md5_gg(c, f, b, a, e[p + 15], 14, -660478335)
              , a = this.md5_gg(a, c, f, b, e[p + 4], 20, -405537848)
              , b = this.md5_gg(b, a, c, f, e[p + 9], 5, 568446438)
              , f = this.md5_gg(f, b, a, c, e[p + 14], 9, -1019803690)
              , c = this.md5_gg(c, f, b, a, e[p + 3], 14, -187363961)
              , a = this.md5_gg(a, c, f, b, e[p + 8], 20, 1163531501)
              , b = this.md5_gg(b, a, c, f, e[p + 13], 5, -1444681467)
              , f = this.md5_gg(f, b, a, c, e[p + 2], 9, -51403784)
              , c = this.md5_gg(c, f, b, a, e[p + 7], 14, 1735328473)
              , a = this.md5_gg(a, c, f, b, e[p + 12], 20, -1926607734)
              , b = this.md5_hh(b, a, c, f, e[p + 5], 4, -378558)
              , f = this.md5_hh(f, b, a, c, e[p + 8], 11, -2022574463)
              , c = this.md5_hh(c, f, b, a, e[p + 11], 16, 1839030562)
              , a = this.md5_hh(a, c, f, b, e[p + 14], 23, -35309556)
              , b = this.md5_hh(b, a, c, f, e[p + 1], 4, -1530992060)
              , f = this.md5_hh(f, b, a, c, e[p + 4], 11, 1272893353)
              , c = this.md5_hh(c, f, b, a, e[p + 7], 16, -155497632)
              , a = this.md5_hh(a, c, f, b, e[p + 10], 23, -1094730640)
              , b = this.md5_hh(b, a, c, f, e[p + 13], 4, 681279174)
              , f = this.md5_hh(f, b, a, c, e[p + 0], 11, -358537222)
              , c = this.md5_hh(c, f, b, a, e[p + 3], 16, -722521979)
              , a = this.md5_hh(a, c, f, b, e[p + 6], 23, 76029189)
              , b = this.md5_hh(b, a, c, f, e[p + 9], 4, -640364487)
              , f = this.md5_hh(f, b, a, c, e[p + 12], 11, -421815835)
              , c = this.md5_hh(c, f, b, a, e[p + 15], 16, 530742520)
              , a = this.md5_hh(a, c, f, b, e[p + 2], 23, -995338651)
              , b = this.md5_ii(b, a, c, f, e[p + 0], 6, -198630844)
              , f = this.md5_ii(f, b, a, c, e[p + 7], 10, 1126891415)
              , c = this.md5_ii(c, f, b, a, e[p + 14], 15, -1416354905)
              , a = this.md5_ii(a, c, f, b, e[p + 5], 21, -57434055)
              , b = this.md5_ii(b, a, c, f, e[p + 12], 6, 1700485571)
              , f = this.md5_ii(f, b, a, c, e[p + 3], 10, -1894986606)
              , c = this.md5_ii(c, f, b, a, e[p + 10], 15, -1051523)
              , a = this.md5_ii(a, c, f, b, e[p + 1], 21, -2054922799)
              , b = this.md5_ii(b, a, c, f, e[p + 8], 6, 1873313359)
              , f = this.md5_ii(f, b, a, c, e[p + 15], 10, -30611744)
              , c = this.md5_ii(c, f, b, a, e[p + 6], 15, -1560198380)
              , a = this.md5_ii(a, c, f, b, e[p + 13], 21, 1309151649)
              , b = this.md5_ii(b, a, c, f, e[p + 4], 6, -145523070)
              , f = this.md5_ii(f, b, a, c, e[p + 11], 10, -1120210379)
              , c = this.md5_ii(c, f, b, a, e[p + 2], 15, 718787259)
              , a = this.md5_ii(a, c, f, b, e[p + 9], 21, -343485551)
              , b = this.safe_add(b, v)
              , a = this.safe_add(a, u)
              , c = this.safe_add(c, n)
              , f = this.safe_add(f, k);
        return [b, a, c, f]
    }
    ;
    f.md5_cmn = function(e, d, b, a, c, f) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(d, e), this.safe_add(a, f)), c), b)
    }
    ;
    f.md5_ff = function(e, d, b, a, c, f, p) {
        return this.md5_cmn(d & b | ~d & a, e, d, c, f, p)
    }
    ;
    f.md5_gg = function(e, d, b, a, c, f, p) {
        return this.md5_cmn(d & a | b & ~a, e, d, c, f, p)
    }
    ;
    f.md5_hh = function(e, d, b, a, c, f, p) {
        return this.md5_cmn(d ^ b ^ a, e, d, c, f, p)
    }
    ;
    f.md5_ii = function(e, d, b, a, c, f, p) {
        return this.md5_cmn(b ^ (d | ~a), e, d, c, f, p)
    }
    ;
    f.safe_add = function(e, d) {
        var b = (e & 65535) + (d & 65535);
        return (e >> 16) + (d >> 16) + (b >> 16) << 16 | b & 65535
    }
    ;
    f.bit_rol = function(e, d) {
        return e << d | e >>> 32 - d
    }
    ;
    return e
}();
md5.prototype.__class__ = "md5";
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
    }
    ;
    g.onConfigComplete = function(d) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload")
    }
    ;
    g.onResourceLoadComplete = function(d) {
        "preload" == d.groupName && (this.stage.removeChild(this.loadingView),
        d = document.getElementById("huhu-logo"),
        d.innerHTML = "",
        d.parentNode.removeChild(d),
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this),
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this),
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this),
        this.createScene())
    }
    ;
    g.onResourceLoadError = function(d) {
        console.warn("Group:" + d.groupName + " has failed to load");
        this.onResourceLoadComplete(d)
    }
    ;
    g.onResourceProgress = function(d) {
        "preload" == d.groupName && this.loadingView.setProgress(d.itemsLoaded, d.itemsTotal)
    }
    ;
    g.createScene = function() {
        f.instance = this;
        DataManager.instance.init();
        this.gameLayer = new egret.DisplayObjectContainer;
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
        d.text = "\u6682\u505c\u4e2d...";
        d.visible = !1;
        d.x = Const.stageWidth / 2;
        d.y = Const.stageHeight / 2
    }
    ;
    f.getInstance = function() {
        return f.instance
    }
    ;
    g.setScenePos = function(d) {
        this.verOrHor && (d[0] > Const.BoatMovePoint && 1540 > d[0] && (this.gameLayer.x = 600 - d[0]),
        d[1] > Const.waterPanel + 400 && 1E3 > d[1] ? (this.gameLayer.y = d[1] - Const.waterPanel - 400,
        d[1] > Const.waterPanel + 500 && this.mountainMove(d[1])) : d[1] < Const.waterPanel - 50 && -890 < d[1] && (this.gameLayer.y = d[1] - Const.waterPanel + 50))
    }
    ;
    g.mountainMove = function(d) {
        this.iniM || (this.iniMF = BgScene.getInstance().mountainF0.y,
        this.iniM = BgScene.getInstance().mountain0.y);
        BgScene.getInstance().mountainF1.y += 0.6 * (this.lastY - d);
        BgScene.getInstance().mountainF0.y += 0.6 * (this.lastY - d);
        BgScene.getInstance().mountain1.y += 0.3 * (this.lastY - d);
        BgScene.getInstance().mountain0.y += 0.3 * (this.lastY - d);
        this.lastY = d
    }
    ;
    return f
}(egret.DisplayObjectContainer);
Main.prototype.__class__ = "Main";
(function(e) {
    (function(e) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i()];
                this.states = [new egret.gui.State("normal",[]), new egret.gui.State("disabled",[])]
            }
            __extends(b, d);
            var a = b.prototype;
            a.__3_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["desk_png", 68, 547]);
                return a
            }
            ;
            a.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["leaf1_png", -3, 253]);
                return a
            }
            ;
            a.__5_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["umbrella_png", 127, 408]);
                return a
            }
            ;
            a.__6_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["grass_png", 121, 588]);
                return a
            }
            ;
            a.__7_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["shatan_png", -2, 630]);
                return a
            }
            ;
            a.__8_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["shu_png", 20, 71]);
                return a
            }
            ;
            return b
        }(egret.gui.Skin);
        e.Ship0Skin = g;
        g.prototype.__class__ = "skins.button.Ship0Skin"
    }
    )(e.button || (e.button = {}))
}
)(skins || (skins = {}));
(function(e) {
    (function(e) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i()];
                this.states = [new egret.gui.State("normal",[]), new egret.gui.State("disabled",[])]
            }
            __extends(b, d);
            b.prototype.__3_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["ship1_png", 0, 0]);
                return a
            }
            ;
            return b
        }(egret.gui.Skin);
        e.Ship1Skin = g;
        g.prototype.__class__ = "skins.button.Ship1Skin"
    }
    )(e.button || (e.button = {}))
}
)(skins || (skins = {}));
(function(e) {
    (function(e) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i()];
                this.states = [new egret.gui.State("normal",[]), new egret.gui.State("disabled",[])]
            }
            __extends(b, d);
            b.prototype.__3_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x"], ["ship2_png", 0]);
                return a
            }
            ;
            return b
        }(egret.gui.Skin);
        e.Ship2Skin = g;
        g.prototype.__class__ = "skins.button.Ship2Skin"
    }
    )(e.button || (e.button = {}))
}
)(skins || (skins = {}));
(function(e) {
    (function(e) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [];
                this.__7_i();
                this.__8_i();
                this.__9_i();
                this.__10_i();
                this.states = [new egret.gui.State("up",[new egret.gui.AddItems("__10","","last","")]), new egret.gui.State("down",[new egret.gui.AddItems("__9","","last","")]), new egret.gui.State("disabled",[]), new egret.gui.State("upAndSelected",[new egret.gui.AddItems("__8","","last","")]), new egret.gui.State("downAndSelected",[new egret.gui.AddItems("__7","","last","")]), new egret.gui.State("disabledAndSelected",[])]
            }
            __extends(b, d);
            var a = b.prototype;
            a.__10_i = function() {
                var a = new egret.gui.UIAsset;
                this.__10 = a;
                a.source = "musicon1_png";
                return a
            }
            ;
            a.__7_i = function() {
                var a = new egret.gui.UIAsset;
                this.__7 = a;
                a.source = "musicoff2_png";
                return a
            }
            ;
            a.__8_i = function() {
                var a = new egret.gui.UIAsset;
                this.__8 = a;
                a.source = "musicoff1_png";
                return a
            }
            ;
            a.__9_i = function() {
                var a = new egret.gui.UIAsset;
                this.__9 = a;
                a.source = "musicon2_png";
                return a
            }
            ;
            return b
        }(egret.gui.Skin);
        e.SoundButton = g;
        g.prototype.__class__ = "skins.button.SoundButton"
    }
    )(e.button || (e.button = {}))
}
)(skins || (skins = {}));
(function(e) {
    (function(f) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.gray_i(), this.__3_i(), this.ui_list_i(), this.btn_pre_i(), this.btn_next_i(), this.closeButton_i()];
                this.states = [new egret.gui.State("normal",[]), new egret.gui.State("disabled",[])]
            }
            __extends(b, d);
            var a = b.prototype;
            Object.defineProperty(a, "skinParts", {
                get: function() {
                    return b._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.__11_i = function() {
                return {
                    label: "null"
                }
            }
            ;
            a.__12_i = function() {
                return {
                    label: "null"
                }
            }
            ;
            a.__13_i = function() {
                return {
                    label: "null"
                }
            }
            ;
            a.__15_i = function() {
                var a = new egret.gui.ArrayCollection;
                a.source = [this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i()];
                return a
            }
            ;
            a.__3_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["height", "source", "x"], [576, "allfish_bg_png", 19]);
                return a
            }
            ;
            a.__4_i = function() {
                return {
                    label: "\u6570\u636e1"
                }
            }
            ;
            a.__5_i = function() {
                return {
                    label: "\u6570\u636e2"
                }
            }
            ;
            a.__6_i = function() {
                return {
                    label: "\u6570\u636e3"
                }
            }
            ;
            a.__7_i = function() {
                return {
                    label: "null"
                }
            }
            ;
            a.__8_i = function() {
                return {
                    label: "null"
                }
            }
            ;
            a.__9_i = function() {
                return {
                    label: "null"
                }
            }
            ;
            a.btn_next_i = function() {
                var a = new egret.gui.Button;
                this.btn_next = a;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("nextpage1_png","nextpage1_png"), 705, 540]);
                return a
            }
            ;
            a.btn_pre_i = function() {
                var a = new egret.gui.Button;
                this.btn_pre = a;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("prepage2_png","prepage1_png"), -21, 539]);
                return a
            }
            ;
            a.closeButton_i = function() {
                var a = new egret.gui.Button;
                this.closeButton = a;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("closebtn1_png","closebtn1_png"), 751, -22]);
                return a
            }
            ;
            a.gray_i = function() {
                var a = new egret.gui.Rect;
                this.gray = a;
                this.__s(a, "fillAlpha fillColor height width x y".split(" "), [0.5, 0, 890, 1292, -379, -234]);
                return a
            }
            ;
            a.__10_i = function() {
                return {
                    label: "null"
                }
            }
            ;
            a.ui_list_i = function() {
                var a = new egret.gui.List;
                this.ui_list = a;
                this.__s(a, "height itemRendererSkinName skinName width x y".split(" "), [507, e.window.FishItemRenderer, e.window.FishList, 673, 101, 27]);
                a.dataProvider = this.__15_i();
                return a
            }
            ;
            b._skinParts = ["gray", "ui_list", "btn_pre", "btn_next", "closeButton"];
            return b
        }(egret.gui.Skin);
        f.FishWindow = g;
        g.prototype.__class__ = "skins.window.FishWindow"
    }
    )(e.window || (e.window = {}))
}
)(skins || (skins = {}));
var FishItemRenderer = function(e) {
    function f() {
        e.call(this);
        this.skinName = skins.window.FishItemRenderer
    }
    __extends(f, e);
    var g = f.prototype;
    g.dataChanged = function() {
        e.prototype.dataChanged.call(this);
        this.updateDisplay();
        this.lb_price.touchEnabled = !1
    }
    ;
    g.updateDisplay = function() {
        this.ui_source.source = this.data.name;
        var d = RES.getRes("assets2_json")._textureMap[this.data.name]._textureWidth
          , b = RES.getRes("assets2_json")._textureMap[this.data.name]._textureHeight;
        console.log(this.ui_source.width, this.ui_source.height, "wh");
        this.ui_source.anchorX = this.ui_source.anchorY = 0.5;
        this.ui_source.x = 70;
        this.ui_source.y = 35;
        105 > d && 70 > b ? (this.ui_source.width = d,
        this.ui_source.height = b) : 1.5 < d / b ? (this.ui_source.width = 105,
        this.ui_source.height = 105 * b / d) : (this.ui_source.height = 70,
        this.ui_source.width = 70 * d / b);
        this.lb_des.text = this.data.des;
        this.lb_price.text = this.data.price + ""
    }
    ;
    return f
}(egret.gui.ItemRenderer);
FishItemRenderer.prototype.__class__ = "FishItemRenderer";
var RodListWindow = function(e) {
    function f(d) {
        e.call(this);
        this.mIndex = 0;
        this.arrrod = [];
        this.arrship = [];
        this.skinName = skins.window.RodWindow;
        this.gui = d;
        d = GameModel.getInstance().poleGroupData;
        for (var b = 0; b < d.length; b++)
            this.arrrod.push(d[b]);
        for (b = 0; b < GameModel.getInstance().shipgroupData.length; b++)
            this.arrship.push(GameModel.getInstance().shipgroupData[b]);
        f._instance = this
    }
    __extends(f, e);
    var g = f.prototype;
    f.instance = function() {
        return f._instance
    }
    ;
    g.getPoleData = function() {
        for (var d = [], b = 0; b < this.arrrod.length; b++)
            this.arrrod[b].purchased && d.push(this.arrrod[b].id);
        return d
    }
    ;
    g.getShipData = function() {
        for (var d = [], b = 0; b < this.arrship.length; b++)
            this.arrship[b].purchased && d.push(this.arrship[b].id);
        return d
    }
    ;
    g.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        this.ui_list.itemRenderer = new egret.gui.ClassFactory(RodItemRenderer);
        this.ui_list.dataProvider = new egret.gui.ArrayCollection(this.arrrod);
        this.ship_list.itemRenderer = new egret.gui.ClassFactory(ShipItemRender);
        this.ship_list.dataProvider = new egret.gui.ArrayCollection(this.arrship);
        this.addEventListener(egret.gui.CloseEvent.CLOSE, this.onClose, this);
        this.btn_switch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.swichlist, this)
    }
    ;
    g.showIndex = function(d) {
        this.mIndex = d
    }
    ;
    g.touchrod1 = function(d) {
        console.log("rod1 is touch!!")
    }
    ;
    g.onClose = function(d) {
        this.hide()
    }
    ;
    g.show = function() {
        this.visible = MainUILayer.instance().blackLayer.visible = !0;
        this.gui.addElement(this);
        this.y = this.x = 50;
        this.bg.x = 0
    }
    ;
    g.hide = function() {
        MainUILayer.instance().blackLayer.visible = !1;
        this.gui.removeElement(this)
    }
    ;
    g.onListSelectionChange = function(d) {
        this.ui_list.selectedItem.cost = 0
    }
    ;
    g.swichlist = function() {
        this.ui_list.visible = !this.ui_list.visible;
        this.ship_list.visible = !this.ship_list.visible
    }
    ;
    f.LIFE = 0;
    f.SHOES = 1;
    f.MAGNET = 2;
    f.ALL = 3;
    return f
}(egret.gui.TitleWindow);
RodListWindow.prototype.__class__ = "RodListWindow";
var CatLocation = function(e) {
    function f(d) {
        e.call(this);
        this.placeId = 1;
        this.otherLayer = [];
        this.waveArr = [];
        this.thePole = d;
        this.cat = new egret.Bitmap(RES.getRes("cat_png"));
        this.cat.anchorX = 0.5;
        this.cat.anchorY = 0.5;
        this.place = new egret.gui.SkinnableComponent;
        this.createWaves();
        console.log(DataManager.instance.Cfg.usingPlace);
        this.createPlace(DataManager.instance.Cfg.usingPlace)
    }
    __extends(f, e);
    var g = f.prototype;
    g.createPlace = function(d) {
        switch (d) {
        case 1:
            this.createPlace1();
            break;
        case 2:
            this.createPlace2();
            break;
        case 3:
            this.createPlace3()
        }
        this.placeId = d;
        console.log(this.placeId, "placeID");
        for (d = 0; 3 > d; d++)
            this.addChild(this.waveArr[d]);
        for (d = 0; 3 > d; d++)
            this.addChild(this.otherLayer[d])
    }
    ;
    g.createPlace1 = function() {
        this.cat.x = 250;
        this.cat.y = 360;
        this.place.skinName = skins.button.Ship0Skin;
        this.place.x = -60;
        this.place.y = this.cat.y - 600;
        this.place.anchorX = 0;
        this.place.anchorY = 0;
        this.addChild(this.place);
        this.addPole();
        this.addChild(this.cat);
        Const.BoatMovePoint = 600;
        Main.getInstance().gameLayer.x = -(Const.BoatMovePoint - 600)
    }
    ;
    g.createPlace2 = function() {
        this.cat.x = 450;
        this.cat.y = 350;
        this.place.skinName = skins.button.Ship1Skin;
        this.place.x = 415;
        this.place.y = this.cat.y + 70;
        this.place.anchorX = 0.52;
        this.place.anchorY = 0.75;
        this.addPole();
        this.addChild(this.cat);
        this.addChild(this.place);
        Const.BoatMovePoint = 750;
        Main.getInstance().gameLayer.x = -(Const.BoatMovePoint - 600)
    }
    ;
    g.createPlace3 = function() {
        this.cat.x = 630;
        this.cat.y = 350;
        this.place.skinName = skins.button.Ship2Skin;
        this.place.x = 615;
        this.place.y = this.cat.y + 60;
        this.place.anchorX = 0.52;
        this.place.anchorY = 0.75;
        this.addPole();
        this.addChild(this.cat);
        this.addChild(this.place);
        Const.BoatMovePoint = 900;
        Main.getInstance().gameLayer.x = -(Const.BoatMovePoint - 600)
    }
    ;
    g.addPole = function() {
        this.addChild(this.thePole);
        this.thePole.x = this.cat.x + 30;
        this.thePole.y = this.cat.y
    }
    ;
    g.createWaves = function() {
        for (var d = 0; 3 > d; d++)
            this.waveArr.push(this.createWave(960 * d - 60 - d));
        d = new egret.Bitmap(RES.getRes("seaColorDep_png"));
        d.width = 1920;
        d.height = 948;
        d.y = Const.stageHeight - Const.waterPanel + 20;
        d.x = -60;
        var b = new egret.Bitmap(RES.getRes("seabed_png"));
        b.y = d.y + 650;
        b.x = -60;
        var a = new egret.Bitmap(RES.getRes("seabed_png"));
        a.y = d.y + 650;
        a.x = 898;
        a.anchorX = 1;
        a.scaleX = -1;
        this.otherLayer.push(d);
        this.otherLayer.push(b);
        this.otherLayer.push(a)
    }
    ;
    g.moveWave = function(d) {
        if (!Const.isOnBlur)
            for (var b = 0; b < this.waveArr.length; b++)
                this.waveMove1(this.waveArr, b, d)
    }
    ;
    g.createWave = function(d) {
        var b = new egret.Bitmap(RES.getRes("waveDep_png"));
        b.y = Const.stageHeight - Const.waterPanel - 45;
        b.x = d;
        this.addChild(b);
        return b
    }
    ;
    g.waveMove1 = function(d, b, a) {
        d[b].x -= a / 30;
        -60 > d[b].x + d[b].width && (d[b].x = d[(b + 2) % 3].x + d[b].width - 3)
    }
    ;
    return f
}(egret.DisplayObjectContainer);
CatLocation.prototype.__class__ = "CatLocation";
(function(e) {
    (function(e) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [new egret.gui.State("up",[]), new egret.gui.State("down",[]), new egret.gui.State("disabled",[])]
            }
            __extends(b, d);
            b.prototype.__4_i = function() {
                var a = new egret.gui.Button;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("use_up_png","use_doun_png"), 0, 0]);
                return a
            }
            ;
            return b
        }(egret.gui.Skin);
        e.Button2 = g;
        g.prototype.__class__ = "skins.button.Button2"
    }
    )(e.button || (e.button = {}))
}
)(skins || (skins = {}));
(function(e) {
    (function(e) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [new egret.gui.State("up",[]), new egret.gui.State("down",[]), new egret.gui.State("disabled",[])]
            }
            __extends(b, d);
            b.prototype.__4_i = function() {
                var a = new egret.gui.Button;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("onusing_png","use_doun_png"), 0, 0]);
                return a
            }
            ;
            return b
        }(egret.gui.Skin);
        e.Button3 = g;
        g.prototype.__class__ = "skins.button.Button3"
    }
    )(e.button || (e.button = {}))
}
)(skins || (skins = {}));
(function(e) {
    (function(f) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [640, 960]);
                this.elementsContent = [this.expBarBg_i(), this.Bar_experience_i(), this.sellNum_i(), this.coin_i(), this.version_i()];
                this.bg_i();
                this.btn_shop_i();
                this.lb_lv_i();
                this.lb_score_i();
                this.btn_allship_i();
                this.lv_i();
                this.lb_center_i();
                this.btn_sell_i();
                this.btn_sound_i();
                this.tittle_i();
                this.playBtn_i();
                this.states = [new egret.gui.State("normal",[new egret.gui.AddItems("bg","","before","expBarBg"), new egret.gui.AddItems("btn_sound","","before","sellNum"), new egret.gui.AddItems("tittle","","before","sellNum"), new egret.gui.AddItems("playBtn","","before","sellNum"), new egret.gui.SetProperty("btn_sound","x",13), new egret.gui.SetProperty("btn_sound","y",512)]), new egret.gui.State("disabled",[new egret.gui.AddItems("btn_sound","","before","sellNum")]), new egret.gui.State("gamein",[new egret.gui.AddItems("lb_lv","","before","sellNum"), new egret.gui.AddItems("lv","","before","sellNum"), new egret.gui.SetProperty("lv","source","lv_png")]), new egret.gui.State("gameover",[new egret.gui.AddItems("btn_sound","","before","sellNum")]), new egret.gui.State("pause",[new egret.gui.AddItems("btn_shop","","before","sellNum"), new egret.gui.AddItems("lb_lv","","before","sellNum"), new egret.gui.AddItems("lb_score","","before","sellNum"), new egret.gui.AddItems("btn_allship","","before","sellNum"), new egret.gui.AddItems("lv","","before","sellNum"), new egret.gui.AddItems("lb_center","","before","sellNum"), new egret.gui.AddItems("btn_sell","","before","sellNum"), new egret.gui.AddItems("btn_sound","","before","sellNum"), new egret.gui.SetProperty("lv","source","lv_png")])]
            }
            __extends(b, d);
            var a = b.prototype;
            Object.defineProperty(a, "skinParts", {
                get: function() {
                    return b._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.bg_i = function() {
                var a = new egret.gui.UIAsset;
                this.bg = a;
                this.__s(a, ["height", "source", "width"], [640, "bg_jpg", 960]);
                return a
            }
            ;
            a.btn_allship_i = function() {
                var a = new egret.gui.Button;
                this.btn_allship = a;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("allfish1_png","allfish2_png"), 857, 139]);
                return a
            }
            ;
            a.btn_sell_i = function() {
                var a = new egret.gui.Button;
                this.btn_sell = a;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("sell_up_png","sell_down_png"), 3, 581]);
                return a
            }
            ;
            a.btn_shop_i = function() {
                var a = new egret.gui.Button;
                this.btn_shop = a;
                this.__s(a, ["skinName", "width", "x", "y"], [new egret.gui.ButtonSkin("shop1_png","shop2_png"), 113, 32, 17]);
                return a
            }
            ;
            a.btn_sound_i = function() {
                var a = new egret.gui.ToggleButton;
                this.btn_sound = a;
                this.__s(a, ["label", "skinName", "x", "y"], ["\u5207\u6362\u6309\u94ae", e.button.SoundButton, 844, 5]);
                return a
            }
            ;
            a.coin_i = function() {
                var a = new egret.gui.UIAsset;
                this.coin = a;
                this.__s(a, ["source", "x", "y"], ["gold_png", 588, 11]);
                return a
            }
            ;
            a.expBarBg_i = function() {
                var a = new egret.gui.UIAsset;
                this.expBarBg = a;
                this.__s(a, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("19,7,121,12"), "shuxing_bg_png", 274, 651, 592]);
                return a
            }
            ;
            a.lb_center_i = function() {
                var a = new egret.gui.Label;
                this.lb_center = a;
                this.__s(a, ["horizontalCenter", "verticalCenter"], [0, 0]);
                return a
            }
            ;
            a.lb_lv_i = function() {
                var a = new egret.gui.BitmapLabel;
                this.lb_lv = a;
                a.setStyle("textColor", 9839652);
                this.__s(a, ["font", "text", "x", "y"], ["goldnumber_fnt", "8", 610, 593]);
                return a
            }
            ;
            a.lb_score_i = function() {
                var a = new egret.gui.BitmapLabel;
                this.lb_score = a;
                a.setStyle("textColor", 9839652);
                this.__s(a, ["font", "text", "x", "y"], ["goldnumber_fnt", "$0", 645, 28]);
                return a
            }
            ;
            a.lv_i = function() {
                var a = new egret.gui.UIAsset;
                this.lv = a;
                this.__s(a, ["source", "x", "y"], ["lv_png", 573, 595]);
                return a
            }
            ;
            a.playBtn_i = function() {
                var a = new egret.gui.Button;
                this.playBtn = a;
                this.__s(a, ["horizontalCenter", "skinName", "y"], [0, new egret.gui.ButtonSkin("start1_png","start2_png"), 474]);
                return a
            }
            ;
            a.sellNum_i = function() {
                var a = new egret.gui.BitmapLabel;
                this.sellNum = a;
                this.__s(a, ["font", "text", "x", "y"], ["goldnumber_fnt", "$450", 15, 522]);
                return a
            }
            ;
            a.Bar_experience_i = function() {
                var a = new egret.gui.UIAsset;
                this.Bar_experience = a;
                this.__s(a, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("11,7,135,10"), "shuxing_top_png", 276, 653, 592]);
                return a
            }
            ;
            a.tittle_i = function() {
                var a = new egret.gui.UIAsset;
                this.tittle = a;
                this.__s(a, ["horizontalCenter", "source", "y"], [0, "tittle_png", 108]);
                return a
            }
            ;
            a.version_i = function() {
                var a = new egret.gui.Label;
                this.version = a;
                this.__s(a, ["size", "text", "x", "y"], [20, "version 2.316", 6, 616]);
                return a
            }
            ;
            b._skinParts = "bg expBarBg Bar_experience btn_shop lb_lv lb_score btn_allship lv lb_center btn_sell btn_sound tittle playBtn sellNum coin version".split(" ");
            return b
        }(egret.gui.Skin);
        f.IndexSceneSkin = g;
        g.prototype.__class__ = "skins.scene.IndexSceneSkin"
    }
    )(e.scene || (e.scene = {}))
}
)(skins || (skins = {}));
var FishWindow = function(e) {
    function f(d) {
        e.call(this);
        this.arrfish = [];
        this.skinName = skins.window.FishWindow;
        this.gui = d;
        for (d = 0; d < GameModel.getInstance().fishDescr1.length; d++)
            this.arrfish.push(GameModel.getInstance().fishDescr1[d])
    }
    __extends(f, e);
    var g = f.prototype;
    g.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        this.btn_pre.visible = !1;
        this.btn_next.visible = !0;
        this.ui_list.itemRenderer = new egret.gui.ClassFactory(FishItemRenderer);
        this.ui_list.dataProvider = new egret.gui.ArrayCollection(this.arrfish);
        this.addEventListener(egret.gui.CloseEvent.CLOSE, this.onClose, this);
        this.btn_next.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goNextPage, this);
        this.btn_pre.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goPrePage, this)
    }
    ;
    g.showIndex = function(d) {}
    ;
    g.touchrod1 = function(d) {
        console.log("rod1 is touch!!")
    }
    ;
    g.onClose = function(d) {
        this.hide()
    }
    ;
    g.show = function() {
        this.gui.addElement(this);
        this.x = 50;
        this.y = 30;
        console.log(MainUILayer.instance().blackLayer.visible, "visiba")
    }
    ;
    g.hide = function() {
        this.gui.removeElement(this)
    }
    ;
    g.onListSelectionChange = function(d) {
        console.log("You have selected " + this.ui_list.selectedItem.id);
        this.ui_list.selectedItem.cost = 0
    }
    ;
    g.swichlist = function() {
        console.log("switch");
        this.ui_list.visible = !this.ui_list.visible
    }
    ;
    g.goNextPage = function() {
        console.log("go next page");
        this.btn_next.visible = !1;
        this.btn_pre.visible = !0;
        this.arrfish = [];
        for (var d = 0; d < GameModel.getInstance().fishDescr2.length; d++)
            this.arrfish.push(GameModel.getInstance().fishDescr2[d]);
        this.ui_list.dataProvider = new egret.gui.ArrayCollection(this.arrfish)
    }
    ;
    g.goPrePage = function() {
        console.log("go pre page");
        this.btn_pre.visible = !1;
        this.btn_next.visible = !0;
        this.arrfish = [];
        for (var d = 0; d < GameModel.getInstance().fishDescr1.length; d++)
            this.arrfish.push(GameModel.getInstance().fishDescr1[d]);
        this.ui_list.dataProvider = new egret.gui.ArrayCollection(this.arrfish)
    }
    ;
    g.updateDisplay = function() {}
    ;
    return f
}(egret.gui.TitleWindow);
FishWindow.prototype.__class__ = "FishWindow";

