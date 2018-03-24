/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-24 15:15:14
 * @version $Id$
 */
var DataManager = function() { //数据管理
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
    f.init = function() { //初始化数据管理
        this.sound = RES.getRes("0_mp3");
        this.loadCfg();
        this._money = this.Cfg.money;
        this.levelValue = this.Cfg.levelValue
    };
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
    };
    f.loadCfg = function() { //加载配置
        var e = egret.localStorage.getItem("panpan-game22-1");
        if (e) {
            var d = JSON.parse(e),
                b = d.vertify,
                d = d.data,
                e = JSON.stringify(d),
                e = (new md5).hex_md5(e + Const.MD5KEY);
            b == e ? this.Cfg = d : this.useInitFullData()
        } else {
            this.useInitFullData()
        }
    };
    f.saveCfg = function() { //保存配置
        var e = {
                money: this.money,
                levelValue: this.levelValue,
                pole: RodListWindow.instance().getPoleData(),
                place: RodListWindow.instance().getShipData(),
                music: this._music,
                usingPole: Number(GameScene.getInstance().mTool.pole.name),
                usingPlace: GameScene.getInstance().mTool.catGroup.placeId
            },
            d = JSON.stringify(e),
            e = {
                vertify: (new md5).hex_md5(d + Const.MD5KEY),
                data: e
            };
        egret.localStorage.setItem("panpan-game22-1", JSON.stringify(e))
    };
    f.useInitFullData = function() { //使用默认数据
        this.Cfg = {
            money: Const.iniMoney,
            levelValue: 0,
            pole: [1],
            place: [1],
            music: !1,
            usingPole: 1,
            usingPlace: 1
        }
    };
    return e
}();
DataManager.prototype.__class__ = "DataManager";
