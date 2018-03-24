/**
 * 子窗口布局类
 * @authors Your Name (you@example.org)
 * @date    2018-03-24 15:30:12
 * @version $Id$
 */

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
    };
    g.changeUsingBtn = function(d) {

        GameScene.getInstance().mTool.pole.name == this.data.id.toString() ? (this.lb_costprice.visible = !1, this.btn_buy.skinName = skins.button.Button3) : this.data.purchased && (this.btn_buy.skinName = skins.button.Button2)
    };
    g.whenTouch = function(d) {
        this.data.purchased ? (GameScene.getInstance().mTool.setPole(this.data.id), DataManager.instance.money -= 0, this.stage.dispatchEventWith(Action.USING_POLE)) : DataManager.instance.money >= this.data.cost && (this.data.purchased = !0, DataManager.instance.money -= this.data.cost, this.data.cost = 0, this.updateDisplay(), GameScene.getInstance().mTool.setPole(this.data.id), this.stage.dispatchEventWith(Action.USING_POLE));
        DataManager.instance.money -= 0
    };
    g.setvalue = function(d, b) {
        d._setScaleX(b / 100)
    };
    g.updateDisplay = function() {
        this.ui_source.source = RES.getRes(this.data.name);
        this.ui_font.source = RES.getRes(this.data.path);
        this.setvalue(this.ui_bar1, this.data.arm);
        this.setvalue(this.ui_bar2, 130 - 100 * this.data.throw);
        this.setvalue(this.ui_bar3, 100 * this.data.pull - 90);
        this.data.purchased ? (this.lb_costprice.visible = !1, this.btn_buy.skinName = skins.button.Button2) : this.lb_costprice.text = this.data.cost + "";
        Number(GameScene.getInstance().mTool.pole.name) == this.data.id.toString() && (this.btn_buy.skinName = skins.button.Button3)
    };
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
    };
    g.changeUsingBtn = function(d) {
        GameScene.getInstance().mTool.catGroup.placeId == this.data.id.toString() ? (this.lb_costprice.visible = !1, this.btn_buy.skinName = skins.button.Button3) : this.data.purchased && (this.btn_buy.skinName = skins.button.Button2)
    };
    g.whenTouch = function(d) {
        this.data.purchased ? (GameScene.getInstance().mTool.catGroup.createPlace(this.data.id), DataManager.instance.money -= 0, GameScene.getInstance().mTool.poleRota = Const.iniPoleRota, this.stage.dispatchEventWith(Action.USING_SHIP)) : DataManager.instance.money >= this.data.cost && (this.data.purchased = !0, DataManager.instance.money -= this.data.cost, this.data.cost = 0, this.updateDisplay(), GameScene.getInstance().mTool.catGroup.createPlace(this.data.id), GameScene.getInstance().mTool.poleRota = Const.iniPoleRota, this.stage.dispatchEventWith(Action.USING_SHIP));
        DataManager.instance.money -= 0
    };
    g.updateDisplay = function() {
        this.lb_shiplabel.text = this.data.descr;
        this.lb_costprice.touchEnabled = !1;
        this.ui_source.source = this.data.name;
        this.data.path ? this.ui_font.source = this.data.path : this.ui_font.visible = !1;
        console.log(this.data.purchased, this.data.id);
        this.data.purchased ? (this.lb_costprice.visible = !1, this.btn_buy.skinName = skins.button.Button2) : this.lb_costprice.text = this.data.cost + "";
        GameScene.getInstance().mTool.catGroup.placeId == this.data.id && (this.btn_buy.skinName = skins.button.Button3)
    };
    return f
}(egret.gui.ItemRenderer);
ShipItemRender.prototype.__class__ = "ShipItemRender";

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
    };
    g.updateDisplay = function() {
        this.ui_source.source = this.data.name;
        var d = RES.getRes("assets2_json")._textureMap[this.data.name]._textureWidth,
            b = RES.getRes("assets2_json")._textureMap[this.data.name]._textureHeight;
        console.log(this.ui_source.width, this.ui_source.height, "wh");
        this.ui_source.anchorX = this.ui_source.anchorY = 0.5;
        this.ui_source.x = 70;
        this.ui_source.y = 35;
        105 > d && 70 > b ? (this.ui_source.width = d, this.ui_source.height = b) : 1.5 < d / b ? (this.ui_source.width = 105, this.ui_source.height = 105 * b / d) : (this.ui_source.height = 70, this.ui_source.width = 70 * d / b);
        this.lb_des.text = this.data.des;
        this.lb_price.text = this.data.price + ""
    };
    return f
}(egret.gui.ItemRenderer);
FishItemRenderer.prototype.__class__ = "FishItemRenderer";
var RodListWindow = function(e) { //挑选鱼杆列表
    function f(d) {
        e.call(this);
        this.mIndex = 0;
        this.arrrod = [];
        this.arrship = [];
        this.skinName = skins.window.RodWindow;
        this.gui = d;
        d = GameModel.getInstance().poleGroupData;
        for (var b = 0; b < d.length; b++) this.arrrod.push(d[b]);
        for (b = 0; b < GameModel.getInstance().shipgroupData.length; b++) this.arrship.push(GameModel.getInstance().shipgroupData[b]);
        f._instance = this
    }
    __extends(f, e);
    var g = f.prototype;
    f.instance = function() {
        return f._instance
    };
    g.getPoleData = function() {
        for (var d = [], b = 0; b < this.arrrod.length; b++) this.arrrod[b].purchased && d.push(this.arrrod[b].id);
        return d
    };
    g.getShipData = function() {
        for (var d = [], b = 0; b < this.arrship.length; b++) this.arrship[b].purchased && d.push(this.arrship[b].id);
        return d
    };
    g.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        this.ui_list.itemRenderer = new egret.gui.ClassFactory(RodItemRenderer);
        this.ui_list.dataProvider = new egret.gui.ArrayCollection(this.arrrod);
        this.ship_list.itemRenderer = new egret.gui.ClassFactory(ShipItemRender);
        this.ship_list.dataProvider = new egret.gui.ArrayCollection(this.arrship);
        this.addEventListener(egret.gui.CloseEvent.CLOSE, this.onClose, this);
        this.btn_switch.addEventListener(egret.TouchEvent.TOUCH_TAP, this.swichlist, this)
    };
    g.showIndex = function(d) {
        this.mIndex = d
    };
    g.touchrod1 = function(d) {
        console.log("rod1 is touch!!")
    };
    g.onClose = function(d) {
        this.hide()
    };
    g.show = function() {
        this.visible = MainUILayer.instance().blackLayer.visible = !0;
        this.gui.addElement(this);
        this.y = this.x = 50;
        this.bg.x = 0
    };
    g.hide = function() {
        MainUILayer.instance().blackLayer.visible = !1;
        this.gui.removeElement(this)
    };
    g.onListSelectionChange = function(d) {
        this.ui_list.selectedItem.cost = 0
    };
    g.swichlist = function() {
        console.log('切换鱼杆列表');
        this.ui_list.visible = !this.ui_list.visible;
        this.ship_list.visible = !this.ship_list.visible
    };
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
