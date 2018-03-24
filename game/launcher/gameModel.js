/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-24 15:12:41
 * @version $Id$
 */
var Const = function() { //默认常量数据
    function e() {}
    e.versionNum = "0.33";
    e.stageWidth = 960;
    e.stageHeight = 640;
    e.initspeed1 = 1200;
    e.initspeed2 = 900;
    e.initspeed = 1E3;
    e.FACTOR = 10;
    e.FISH_LIFE = 3;
    e.waterPanel = 180;
    e.MD5KEY = "theOldPan";
    e.iniMoney = 10e4;
    e.baseYueShu = 1;
    e.iniPoleRota = -5;
    e.basePullSpeed = 1.5;
    e.isOnBlur = !1;
    e.BoatMovePoint = 600;
    return e
}();
Const.prototype.__class__ = "Const";
var EventType = function() { //定义事件类型
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
var Action = function(e) { //自定义事件行为
    function f(f, d, b) {
        void 0 === d && (d = !1);
        void 0 === b && (b = !1);
        e.call(this, f, d, b)
    }
    __extends(f, e);
    f.OUT = "out_water"; //出水面
    f.IN = "in_water"; //在水中
    f.CAST = "cast"; //抛鱼杆
    f.SELL = "sell"; //卖鱼
    f.ON_HOOK = "on_hook"; //鱼咬钩
    f.USING_POLE = "using_pole"; //使用鱼杆
    f.USING_SHIP = "using_ship"; //使用鱼船
    return f
}(egret.Event);
Action.prototype.__class__ = "Action";
var GameModel = function() { //游戏模型
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
            },
            {
                id: 2,
                name: "rod2_png",
                path: "rodfont2_png",
                arm: 35,
                throw: 0.85,
                pull: 1.2,
                cost: 2E3,
                purchased: !1
            },
            {
                id: 3,
                name: "rod3_png",
                path: "rodfont3_png",
                arm: 50,
                throw: 0.7,
                pull: 1.3,
                cost: 6E3,
                purchased: !1
            },
            {
                id: 4,
                name: "rod4_png",
                path: "rodfont4_png",
                arm: 70,
                throw: 0.65,
                pull: 1.5,
                cost: 15E3,
                purchased: !1
            }
        ];
        this.shipgroupData = [{
                id: 1,
                name: "shatanicn_png",
                path: "beach_png",
                descr: "岸边垂钓",
                cost: 0,
                purchased: !0
            },
            {
                id: 2,
                name: "shipicn1_png",
                path: "shipfont1_png",
                descr: "可以带你到海滩之外钓鱼",
                cost: 5E3,
                purchased: !1
            },
            {
                id: 3,
                name: "shipicn2_png",
                path: "shipfont2_png",
                descr: "可以带你到远离岸边的地方钓鱼",
                cost: 1E4,
                purchased: !1
            }
        ];
        this.fishDescr1 = [{
                id: 1,
                name: "fish1_01_png",
                price: 45,
                des: "小型鱼类，生活区域在海的最上层，贪吃，速度快"
            },
            {
                id: 2,
                name: "fish2_01_png",
                price: 45,
                des: "小型鱼类，生活区域在海的上层，贪吃，速度慢"
            },
            {
                id: 3,
                name: "fish3_01_png",
                price: 45,
                des: "小型鱼类，生活区域在海的上层，贪吃，速度快"
            },
            {
                id: 4,
                name: "fish4_01_png",
                price: 180,
                des: "小型鱼类，生活区域在海的中层，贪吃，速度慢"
            },
            {
                id: 5,
                name: "fish5_01_png",
                price: 45,
                des: "小型鱼类，生活区域在海的最上层，食小型鱼类，速度快"
            },
            {
                id: 14,
                name: "fish14_01_png",
                price: 2E3,
                des: "小型鱼类，生活区域在海的深海，食中、小型鱼类，速度快"
            },
            {
                id: 6,
                name: "fish6_01_png",
                price: 400,
                des: "中型鱼类，生活区域在海的中下层，食小型鱼类，速度快"
            },
            {
                id: 7,
                name: "fish7_01_png",
                price: 400,
                des: "中型鱼类，生活区域在海的最上层、中层，食小型鱼类，速度慢"
            },
            {
                id: 8,
                name: "fish8_01_png",
                price: 800,
                des: "中型鱼类，生活区域在海的中层，食小型鱼类，速度快"
            },
            {
                id: 9,
                name: "fish9_01_png",
                price: 1E3,
                des: "中型鱼类，生活区域在海的下层，食小型鱼类，速度快"
            }
        ];
        this.fishDescr2 = [{
                id: 10,
                name: "fish10_01_png",
                price: 2500,
                des: "中型鱼类，生活区域在海的深海，食中、小型鱼类，速度快"
            },
            {
                id: 12,
                name: "fish12_01_png",
                price: 5E3,
                des: "大型鱼类，生活区域在海的最上层，食中、小型鱼类，速度快"
            },
            {
                id: 13,
                name: "fish13_01_png",
                price: 5E3,
                des: "大型鱼类，生活区域在海的深海，食中、小型鱼类，速度快"
            },
            {
                id: 15,
                name: "fish15_01_png",
                price: 8E3,
                des: "大型鱼类，生活区域在海的深海，素食主义者，速度中"
            }
        ];
        this.getFishsCfg();
        this.loadPole();
        this.loadShip()
    }
    var f = e.prototype;
    e.getInstance = function() {
        e.instance || (e.instance = new e);
        return e.instance
    };
    f.getFishsCfg = function() {
        for (var e = RES.getRes("data_json"), d = e.fish, b = 0; b < d.length; b++) this.fishTypeData[d[b].id] = d[b];
        this.fishGroupData = e.fishLoc
    };
    f.loadPole = function() {
        var e = this.poleGroupData,
            d = DataManager.instance.Cfg.pole;
        if (d)
            for (var b = 0; b < d.length; b++) e[d[b] - 1].purchased = !0
    };
    f.loadShip = function() {
        var e = this.shipgroupData,
            d = DataManager.instance.Cfg.place;
        if (d)
            for (var b = 0; b < d.length; b++) e[d[b] - 1].purchased = !0
    };
    f.addOneFish = function(e) {
        this.fishGroupData[e - 1].fishCount++
    };
    return e
}();
GameModel.prototype.__class__ = "GameModel";
var FishRule = function() { //定义鱼类规则
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
    };
    f.deleteFish = function(e) { //删除鱼类
        this.SellCount++;
        var d = this.containers[e.fishGroupId],
            b = d.indexOf(e);
        d.splice(b, 1);
        this.fishSwitch(e.fishGroupId);
        e.view.parent.removeChild(e.view)
    };
    f.addFish = function(e) { //添加鱼类
        var d = this.Group[e - 1],
            b = this.Type[d.fishId],
            a = d.pos,
            c = d.radius,
            d = GameScene.getInstance().createFish(a, c, b.id, b.resid, b.ClassName, b.grade, b.anchorX, b.anchorY, b.speed, b.price, d.id, !0);
        d.position[0] = d.center[0];
        d.position[1] = d.center[1] - d.radius + 10;
        this.containers[e].push(Fish)
    };
    f.setGroupMove = function(e, d) { //鱼类移动
        120 < d[1] + this.Group[e - 1].radius && (console.warn("鱼已经超出了水平面注意,将自动调整鱼的位置到水平面以下"), d[1] = 120 - this.Group[e - 1].radius);
        this.Group[e - 1].pos = d;
        for (var b = this.containers[e], a = 0; a < b.length; a++) b[a].center = d
    };
    f.fishSwitch = function(e) {
        switch (e) {
            case 10:
                if (0 == this.containers[3].length)
                    for (e = 0; e < this.Group[3].fishAllCount; e++) this.addFish(3)
        }
    };
    return e
}();
FishRule.prototype.__class__ = "FishRule";
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

