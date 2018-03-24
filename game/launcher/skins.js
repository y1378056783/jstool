/**
 * 皮肤类
 * @authors Your Name (you@example.org)
 * @date    2018-03-24 15:25:10
 * @version $Id$
 */
var skins;
(function(e) {
    (function(e) {
        (function(e) {
            var d = function(b) {
                function a() {
                    b.call(this);
                    this.__s = egret.gui.setProperties;
                    this.elementsContent = [this.__4_i()];
                    this.states = [new egret.gui.State("up", []), new egret.gui.State("down", []), new egret.gui.State("disabled", [])]
                }
                __extends(a, b);
                a.prototype.__4_i = function() {
                    var a = new egret.gui.UIAsset;
                    this.__s(a, ["fillMode", "height", "source", "verticalCenter", "width"], ["scale", 22, "scrollbtn_png", 0, 41]);
                    return a
                };
                return a
            }(egret.gui.Skin);
            e.HScrollBarThumbSkin = d;
            d.prototype.__class__ = "skins.button.scrolBar.HScrollBarThumbSkin"
        })(e.scrolBar || (e.scrolBar = {}))
    })(e.button || (e.button = {}))
})(skins || (skins = {}));
(function(e) {
    (function(e) {
        var g = function(d) { //按钮皮肤
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [new egret.gui.State("up", []), new egret.gui.State("down", []), new egret.gui.State("disabled", [])]
            }
            __extends(b, d);
            b.prototype.__4_i = function() {
                var a = new egret.gui.Button;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("buyrodbtn1_png", "buyrodbtn2_png"), 0, 0]);
                return a
            };
            return b
        }(egret.gui.Skin);
        e.Button1 = g;
        g.prototype.__class__ = "skins.button.Button1"
    })(e.button || (e.button = {}))
})(skins || (skins = {}));
(function(e) {
    (function(f) {
        (function(f) {
            var d = function(b) { //滚动条
                function a() {
                    b.call(this);
                    this.__s = egret.gui.setProperties;
                    this.__s(this, ["height", "minHeight", "minWidth"], [22, 10, 20]);
                    this.elementsContent = [this.track_i(), this.thumb_i()];
                    this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
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
                };
                c.track_i = function() {
                    var a = new egret.gui.UIAsset;
                    this.track = a;
                    this.__s(a, "height scale9Grid source verticalCenter percentWidth x".split(" "), [24, egret.gui.getScale9Grid("8,7,17,9"), "scrollbar_png", 1, 100, 0]);
                    return a
                };
                a._skinParts = ["track", "thumb"];
                return a
            }(egret.gui.Skin);
            f.HScrollBarSkin = d;
            d.prototype.__class__ = "skins.button.scrolBar.HScrollBarSkin"
        })(f.scrolBar || (f.scrolBar = {}))
    })(e.button || (e.button = {}))
})(skins || (skins = {}));
(function(e) {
    (function(e) { //使用按钮布局
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [new egret.gui.State("up", []), new egret.gui.State("down", []), new egret.gui.State("disabled", [])]
            }
            __extends(b, d);
            b.prototype.__4_i = function() {
                var a = new egret.gui.Button;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("use_up_png", "use_doun_png"), 0, 0]);
                return a
            };
            return b
        }(egret.gui.Skin);
        e.Button2 = g;
        g.prototype.__class__ = "skins.button.Button2"
    })(e.button || (e.button = {}))
})(skins || (skins = {}));
(function(e) {
    (function(e) { //使用按钮布局
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [new egret.gui.State("up", []), new egret.gui.State("down", []), new egret.gui.State("disabled", [])]
            }
            __extends(b, d);
            b.prototype.__4_i = function() {
                var a = new egret.gui.Button;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("onusing_png", "use_doun_png"), 0, 0]);
                return a
            };
            return b
        }(egret.gui.Skin);
        e.Button3 = g;
        g.prototype.__class__ = "skins.button.Button3"
    })(e.button || (e.button = {}))
})(skins || (skins = {}));
(function(e) {
    (function(f) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [640, 960]);
                this.elementsContent = [
                    this.expBarBg_i(), //经验进度条背景
                    this.Bar_experience_i(), //经验进度条
                    this.sellNum_i(), //卖出数值图标
                    this.coin_i(), //金币图标
                    this.version_i() //版本号图标
                ];
                this.bg_i(); //开始游戏初始背景
                this.btn_shop_i(); //商店图标
                this.lb_lv_i(); //等级进度条
                this.lb_score_i(); //评分
                this.btn_allship_i(); //所有鱼类说明背景
                this.lv_i(); //等级数字
                this.lb_center_i(); //使用中按钮
                this.btn_sell_i(); //卖出按钮
                this.btn_sound_i(); //音效按钮
                this.tittle_i(); //游戏标题
                this.playBtn_i(); //开始游戏按钮
                this.states = [new egret.gui.State("normal", [new egret.gui.AddItems("bg", "", "before", "expBarBg"), new egret.gui.AddItems("btn_sound", "", "before", "sellNum"), new egret.gui.AddItems("tittle", "", "before", "sellNum"), new egret.gui.AddItems("playBtn", "", "before", "sellNum"), new egret.gui.SetProperty("btn_sound", "x", 13), new egret.gui.SetProperty("btn_sound", "y", 512)]), new egret.gui.State("disabled", [new egret.gui.AddItems("btn_sound", "", "before", "sellNum")]), new egret.gui.State("gamein", [new egret.gui.AddItems("lb_lv", "", "before", "sellNum"), new egret.gui.AddItems("lv", "", "before", "sellNum"), new egret.gui.SetProperty("lv", "source", "lv_png")]), new egret.gui.State("gameover", [new egret.gui.AddItems("btn_sound", "", "before", "sellNum")]), new egret.gui.State("pause", [new egret.gui.AddItems("btn_shop", "", "before", "sellNum"), new egret.gui.AddItems("lb_lv", "", "before", "sellNum"), new egret.gui.AddItems("lb_score", "", "before", "sellNum"), new egret.gui.AddItems("btn_allship", "", "before", "sellNum"), new egret.gui.AddItems("lv", "", "before", "sellNum"), new egret.gui.AddItems("lb_center", "", "before", "sellNum"), new egret.gui.AddItems("btn_sell", "", "before", "sellNum"), new egret.gui.AddItems("btn_sound", "", "before", "sellNum"), new egret.gui.SetProperty("lv", "source", "lv_png")])]
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
            };
            a.btn_allship_i = function() {
                var a = new egret.gui.Button;
                this.btn_allship = a;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("allfish1_png", "allfish2_png"), 857, 139]);
                return a
            };
            a.btn_sell_i = function() {
                var a = new egret.gui.Button;
                this.btn_sell = a;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("sell_up_png", "sell_down_png"), 3, 581]);
                return a
            };
            a.btn_shop_i = function() {
                var a = new egret.gui.Button;
                this.btn_shop = a;
                this.__s(a, ["skinName", "width", "x", "y"], [new egret.gui.ButtonSkin("shop1_png", "shop2_png"), 113, 32, 17]);
                return a
            };
            a.btn_sound_i = function() {
                var a = new egret.gui.ToggleButton;
                this.btn_sound = a;
                this.__s(a, ["label", "skinName", "x", "y"], ["切换声音按钮", e.button.SoundButton, 844, 5]);
                return a
            };
            a.coin_i = function() {
                var a = new egret.gui.UIAsset;
                this.coin = a;
                this.__s(a, ["source", "x", "y"], ["gold_png", 588, 11]);
                return a
            };
            a.expBarBg_i = function() {
                var a = new egret.gui.UIAsset;
                this.expBarBg = a;
                this.__s(a, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("19,7,121,12"), "shuxing_bg_png", 274, 651, 592]);
                return a
            };
            a.lb_center_i = function() {
                var a = new egret.gui.Label;
                this.lb_center = a;
                this.__s(a, ["horizontalCenter", "verticalCenter"], [0, 0]);
                return a
            };
            a.lb_lv_i = function() {
                var a = new egret.gui.BitmapLabel;
                this.lb_lv = a;
                a.setStyle("textColor", 9839652);
                this.__s(a, ["font", "text", "x", "y"], ["goldnumber_fnt", "8", 610, 593]);
                return a
            };
            a.lb_score_i = function() {
                var a = new egret.gui.BitmapLabel;
                this.lb_score = a;
                a.setStyle("textColor", 9839652);
                this.__s(a, ["font", "text", "x", "y"], ["goldnumber_fnt", "$0", 645, 28]);
                return a
            };
            a.lv_i = function() {
                var a = new egret.gui.UIAsset;
                this.lv = a;
                this.__s(a, ["source", "x", "y"], ["lv_png", 573, 595]);
                return a
            };
            a.playBtn_i = function() {
                var a = new egret.gui.Button;
                this.playBtn = a;
                this.__s(a, ["horizontalCenter", "skinName", "y"], [0, new egret.gui.ButtonSkin("start1_png", "start2_png"), 474]);
                return a
            };
            a.sellNum_i = function() {
                var a = new egret.gui.BitmapLabel;
                this.sellNum = a;
                this.__s(a, ["font", "text", "x", "y"], ["goldnumber_fnt", "$450", 15, 522]);
                return a
            };
            a.Bar_experience_i = function() {
                var a = new egret.gui.UIAsset;
                this.Bar_experience = a;
                this.__s(a, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("11,7,135,10"), "shuxing_top_png", 276, 653, 592]);
                return a
            };
            a.tittle_i = function() {
                var a = new egret.gui.UIAsset;
                this.tittle = a;
                this.__s(a, ["horizontalCenter", "source", "y"], [0, "tittle_png", 108]);
                return a
            };
            a.version_i = function() {
                var a = new egret.gui.Label;
                this.version = a;
                this.__s(a, ["size", "text", "x", "y"], [20, "version 2.316", 6, 616]);
                return a
            };
            b._skinParts = "bg expBarBg Bar_experience btn_shop lb_lv lb_score btn_allship lv lb_center btn_sell btn_sound tittle playBtn sellNum coin version".split(" ");
            return b
        }(egret.gui.Skin);
        f.IndexSceneSkin = g;
        g.prototype.__class__ = "skins.scene.IndexSceneSkin"
    })(e.scene || (e.scene = {}))
})(skins || (skins = {}));
(function(e) {
    (function(f) {
        (function(f) {
            var d = function(b) { //设置滚动条
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
                };
                a._skinParts = ["horizontalScrollBar"];
                return a
            }(egret.gui.Skin);
            f.ScrollerSkin = d;
            d.prototype.__class__ = "skins.button.scrolBar.ScrollerSkin"
        })(f.scrolBar || (f.scrolBar = {}))
    })(e.button || (e.button = {}))
})(skins || (skins = {}));
(function(e) {
    (function(e) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1920, 1920]);
                this.elementsContent = [this.__3_i(), this.mountainF1_i(), this.mountainF0_i(), this.mountain1_i(), this.mountain0_i(), this.__4_i(), this.__5_i(), this.waves1_i(), this.waves2_i(), this.waves3_i(), this.cloud0_i(), this.cloud1_i(), this.cloud2_i(), this.cloud3_i(), this.cloud4_i(), this.cloud5_i(), this.cloud6_i(), this.wave1_i(), this.wave0_i(), this.wave2_i(), this.wave3_i(), this.__6_i(), this.__7_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
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
            };
            a.__5_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["iland_png", 630, 673]);
                return a
            };
            a.__6_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["seabed_png", 0, 1421]);
                return a
            };
            a.__7_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["scaleX", "source", "x", "y"], [-1, "seabed_png", 1919, 1421]);
                return a
            };
            a.cloud0_i = function() {
                var a = new egret.gui.UIAsset;
                this.cloud0 = a;
                this.__s(a, ["source", "x", "y"], ["cloud_png", 304, 65]);
                return a
            };
            a.cloud1_i = function() {
                var a = new egret.gui.UIAsset;
                this.cloud1 = a;
                this.__s(a, ["source", "x", "y"], ["cloud_png", 938, 159]);
                return a
            };
            a.cloud2_i = function() {
                var a = new egret.gui.UIAsset;
                this.cloud2 = a;
                this.__s(a, ["height", "source", "width", "x", "y"], [70, "cloud_png", 160, 1428, 137]);
                return a
            };
            a.cloud3_i = function() {
                var a = new egret.gui.UIAsset;
                this.cloud3 = a;
                this.__s(a, ["source", "width", "x", "y"], ["cloud_png", 152, 1422, 403]);
                return a
            };
            a.cloud4_i = function() {
                var a = new egret.gui.UIAsset;
                this.cloud4 = a;
                this.__s(a, ["height", "source", "width", "x", "y"], [130, "cloud_png", 298, 850, 371]);
                return a
            };
            a.cloud5_i = function() {
                var a = new egret.gui.UIAsset;
                this.cloud5 = a;
                this.__s(a, ["height", "source", "width", "x", "y"], [130, "cloud_png", 298, 1764, 267]);
                return a
            };
            a.cloud6_i = function() {
                var a = new egret.gui.UIAsset;
                this.cloud6 = a;
                this.__s(a, ["height", "source", "width", "x", "y"], [130, "cloud_png", 298, 114, 311]);
                return a
            };
            a.mountain0_i = function() {
                var a = new egret.gui.UIAsset;
                this.mountain0 = a;
                this.__s(a, ["source", "x", "y"], ["yuanjing1_png", 958, 602]);
                return a
            };
            a.mountain1_i = function() {
                var a = new egret.gui.UIAsset;
                this.mountain1 = a;
                this.__s(a, ["source", "x", "y"], ["yuanjing1_png", -1, 601]);
                return a
            };
            a.mountainF0_i = function() {
                var a = new egret.gui.UIAsset;
                this.mountainF0 = a;
                this.__s(a, ["source", "x", "y"], ["yuanjing2_png", 958, 526]);
                return a
            };
            a.mountainF1_i = function() {
                var a = new egret.gui.UIAsset;
                this.mountainF1 = a;
                this.__s(a, ["source", "x", "y"], ["yuanjing2_png", -2, 543]);
                return a
            };
            a.__3_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, "height scale9Grid source width x y".split(" "), [1212, egret.gui.getScale9Grid("1,83,8,498"), "sky_png", 1925, -5, -460]);
                return a
            };
            a.wave0_i = function() {
                var a = new egret.gui.UIAsset;
                this.wave0 = a;
                this.__s(a, ["source", "x", "y"], ["waveLight_png", -773, 783]);
                return a
            };
            a.wave1_i = function() {
                var a = new egret.gui.UIAsset;
                this.wave1 = a;
                this.__s(a, ["source", "x", "y"], ["waveLight_png", 2138, 762]);
                return a
            };
            a.wave2_i = function() {
                var a = new egret.gui.UIAsset;
                this.wave2 = a;
                this.__s(a, ["source", "x", "y"], ["waveLight_png", 1741, 802]);
                return a
            };
            a.wave3_i = function() {
                var a = new egret.gui.UIAsset;
                this.wave3 = a;
                this.__s(a, ["source", "x", "y"], ["waveLight_png", -1120, 821]);
                return a
            };
            a.waves1_i = function() {
                var a = new egret.gui.UIAsset;
                this.waves1 = a;
                this.__s(a, ["source", "x", "y"], ["waveBlue_png", 0, 733]);
                return a
            };
            a.waves2_i = function() {
                var a = new egret.gui.UIAsset;
                this.waves2 = a;
                this.__s(a, ["source", "x", "y"], ["waveBlue_png", 957, 733]);
                return a
            };
            a.waves3_i = function() {
                var a = new egret.gui.UIAsset;
                this.waves3 = a;
                this.__s(a, ["source", "x", "y"], ["waveBlue_png", 1915, 733]);
                return a
            };
            b._skinParts = "mountainF1 mountainF0 mountain1 mountain0 waves1 waves2 waves3 cloud0 cloud1 cloud2 cloud3 cloud4 cloud5 cloud6 wave1 wave0 wave2 wave3".split(" ");
            return b
        }(egret.gui.Skin);
        e.BgScene = g;
        g.prototype.__class__ = "skins.scene.BgScene"
    })(e.scene || (e.scene = {}))
})(skins || (skins = {}));
(function(e) {
    (function(f) {
        var g = function(d) {//鱼杆与船列表
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.__5_i(), this.ui_source_i(), this.__6_i(), this.ui_font_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.ui_bar1_i(), this.ui_bar2_i(), this.ui_bar3_i(), this.btn_buy_i(), this.lb_costprice_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("down", []), new egret.gui.State("disabled", [])]
            }
            __extends(b, d);
            var a = b.prototype;
            Object.defineProperty(a, "skinParts", {
                get: function() {
                	//console.log(b._skinParts);
                    return b._skinParts
                },
                enumerable: !0,
                configurable: !0
            });
            a.__11_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["property3_png", 27, 301]);
                return a
            };
            a.__12_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["shuxing_bg_png", 56, 303]);
                return a
            };
            a.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, "height scale9Grid source width x y".split(" "), [414, egret.gui.getScale9Grid("10,9,15,14"), "goodsbg_png", 236, 0, 0]);
                return a
            };
            a.__5_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, "height horizontalCenter scale9Grid source width y".split(" "), [146, 0, egret.gui.getScale9Grid("7,8,20,17"), "shoprect_png", 189, 17]);
                return a
            };
            a.__6_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["horizontalCenter", "source", "y"], [0.5, "rodlist_part3_png", 180]);
                return a
            };
            a.__7_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["property1_png", 27, 231]);
                return a
            };
            a.__8_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["shuxing_bg_png", 57, 230]);
                return a
            };
            a.__9_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["property2_png", 27, 266]);
                return a
            };
            a.btn_buy_i = function() {
                var a = new egret.gui.Button;
                this.btn_buy = a;
                this.__s(a, ["horizontalCenter", "skinName", "touchEnabled", "y"], [1.5, e.button.Button1, !0, 338]);
                return a
            };
            a.lb_costprice_i = function() {
                var a = new egret.gui.BitmapLabel;
                this.lb_costprice = a;
                this.__s(a, ["font", "text", "x", "y"], ["pricenumber_fnt", "1000", 83, 355]);
                return a
            };
            a.__10_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["shuxing_bg_png", 57, 265]);
                return a
            };
            a.ui_bar1_i = function() {
                var a = new egret.gui.UIAsset;
                this.ui_bar1 = a;
                this.__s(a, ["source", "x", "y"], ["shuxing_top_png", 57, 230]);
                return a
            };
            a.ui_bar2_i = function() {
                var a = new egret.gui.UIAsset;
                this.ui_bar2 = a;
                this.__s(a, ["source", "x", "y"], ["shuxing_top_png", 57, 265]);
                return a
            };
            a.ui_bar3_i = function() {
                var a = new egret.gui.UIAsset;
                this.ui_bar3 = a;
                this.__s(a, ["source", "x", "y"], ["shuxing_top_png", 57, 303]);
                return a
            };
            a.ui_font_i = function() {
                var a = new egret.gui.UIAsset;
                this.ui_font = a;
                this.__s(a, ["horizontalCenter", "source", "y"], [0, "rodfont1_png", 193]);
                return a
            };
            a.ui_source_i = function() {
                var a = new egret.gui.UIAsset;
                this.ui_source = a;
                this.__s(a, ["horizontalCenter", "source", "y"], [0, "rod1_png", 30]);
                return a
            };
            b._skinParts = "ui_source ui_font ui_bar1 ui_bar2 ui_bar3 btn_buy lb_costprice".split(" ");
            return b
        }(egret.gui.Skin);
        f.RodItemRenderer = g;
        g.prototype.__class__ = "skins.window.RodItemRenderer"
    })(e.window || (e.window = {}))
})(skins || (skins = {}));
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
                this.states = [new egret.gui.State("up", [new egret.gui.AddItems("__9", "", "last", ""), new egret.gui.AddItems("__10", "", "last", "")]), new egret.gui.State("down", [new egret.gui.AddItems("__9", "", "last", ""), new egret.gui.AddItems("__10", "", "last", "")]), new egret.gui.State("disabled", [new egret.gui.AddItems("__9", "", "last", ""), new egret.gui.AddItems("__10", "", "last", "")]), new egret.gui.State("upAndSelected", [new egret.gui.AddItems("__7", "", "last", ""), new egret.gui.AddItems("__8", "", "last", "")]), new egret.gui.State("downAndSelected", [new egret.gui.AddItems("__7", "", "last", ""), new egret.gui.AddItems("__8", "", "last", "")]), new egret.gui.State("disabledAndSelected", [new egret.gui.AddItems("__7", "", "last", ""), new egret.gui.AddItems("__8", "", "last", "")])]
            }
            __extends(b, d);
            var a = b.prototype;
            a.__10_i = function() {
                var a = new egret.gui.UIAsset;
                this.__10 = a;
                this.__s(a, ["horizontalCenter", "source"], [98, "btnship2_png"]);
                return a
            };
            a.__7_i = function() {
                var a = new egret.gui.UIAsset;
                this.__7 = a;
                this.__s(a, ["horizontalCenter", "source"], [-100, "btnrod2_png"]);
                return a
            };
            a.__8_i = function() {
                var a = new egret.gui.UIAsset;
                this.__8 = a;
                this.__s(a, ["horizontalCenter", "source"], [98, "btnship1_png"]);
                return a
            };
            a.__9_i = function() {
                var a = new egret.gui.UIAsset;
                this.__9 = a;
                this.__s(a, ["horizontalCenter", "source"], [-100, "btnrod1_png"]);
                return a
            };
            return b
        }(egret.gui.Skin);
        e.Toggleswitch = g;
        g.prototype.__class__ = "skins.button.Toggleswitch"
    })(e.button || (e.button = {}))
})(skins || (skins = {}));
(function(e) {
    (function(f) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
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
            };
            a.dataGroup_i = function() {
                var a = new egret.gui.DataGroup;
                this.dataGroup = a;
                a.itemRendererSkinName = e.window.RodItemRenderer;
                a.layout = this.__3_i();
                return a
            };
            a.__3_i = function() {
                return new egret.gui.HorizontalLayout
            };
            b._skinParts = ["dataGroup"];
            return b
        }(egret.gui.Skin);
        f.List = g;
        g.prototype.__class__ = "skins.window.List"
    })(e.window || (e.window = {}))
})(skins || (skins = {}));
(function(e) {
    (function(f) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.__5_i(), this.ui_source_i(), this.__6_i(), this.ui_font_i(), this.btn_buy_i(), this.lb_costprice_i(), this.lb_shiplabel_i()];
                this.states = [new egret.gui.State("normal", [new egret.gui.SetProperty("lb_shiplabel", "text", "\u53ef\u4ee5\u5e26\u4f60\u5230\u79bb\u5cb8\u8fb9\u8fd1\u70b9\u5728\u5730\u65b9\u9493\u9c7c")]), new egret.gui.State("down", []), new egret.gui.State("disabled", [])]
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
            };
            a.__6_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["horizontalCenter", "source", "y"], [0.5, "rodlist_part3_png", 180]);
                return a
            };
            a.btn_buy_i = function() {
                var a = new egret.gui.Button;
                this.btn_buy = a;
                this.__s(a, ["horizontalCenter", "skinName", "y"], [1, e.button.Button1, 338]);
                return a
            };
            a.lb_costprice_i = function() {
                var a = new egret.gui.BitmapLabel;
                this.lb_costprice = a;
                this.__s(a, ["font", "horizontalCenter", "text", "y"], ["pricenumber_fnt", 16.5, "1000", 353]);
                return a
            };
            a.lb_shiplabel_i = function() {
                var a = new egret.gui.Label;
                this.lb_shiplabel = a;
                this.__s(a, "fontFamily height horizontalCenter size text textAlign width y".split(" "), ["\u5fae\u8f6f\u96c5\u9ed1", 68, 0.5, 23, "\u53ef\u4ee5\u5e26\u4f60\u5230\u79bb\u5cb8\u8fb9\u8fd1\u70b9\u5728\u5730\u65b9\u9493\u9c7c", "center", 197, 222]);
                return a
            };
            a.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, "height scale9Grid source width x y".split(" "), [414, egret.gui.getScale9Grid("10,9,15,14"), "goodsbg_png", 279, 0, 0]);
                return a
            };
            a.ui_font_i = function() {
                var a = new egret.gui.UIAsset;
                this.ui_font = a;
                this.__s(a, ["horizontalCenter", "source", "y"], [0, "rodfont1_png", 193]);
                return a
            };
            a.ui_source_i = function() {
                var a = new egret.gui.UIAsset;
                this.ui_source = a;
                this.__s(a, ["horizontalCenter", "source", "y"], [0, "shipicn1_png", 30]);
                return a
            };
            b._skinParts = ["ui_source", "ui_font", "btn_buy", "lb_costprice", "lb_shiplabel"];
            return b
        }(egret.gui.Skin);
        f.ShipItemRender = g;
        g.prototype.__class__ = "skins.window.ShipItemRender"
    })(e.window || (e.window = {}))
})(skins || (skins = {}));
(function(e) {
    (function(e) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 309;
                this.elementsContent = [this.__4_i(), this.ui_source_i(), this.__5_i(), this.lb_price_i(), this.lb_des_i(), this.__6_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("down", []), new egret.gui.State("disabled", [])]
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
            };
            a.__6_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "y"], ["fishlist_part3_png", 80]);
                return a
            };
            a.lb_des_i = function() {
                var a = new egret.gui.Label;
                this.lb_des = a;
                this.__s(a, "fontFamily height size text textColor width x y".split(" "), ["\u9ed1\u4f53", 68, 16, "\u5355\u4e2a\u58f0\u4ef745\uff0c\u53ef\u4f5c\u4e3a\u4e2d\u7ea7\u9c7c\u7684\u9c7c\u9975\u4f7f\u7528\u3002", 6625561, 156, 152, 1]);
                return a
            };
            a.lb_price_i = function() {
                var a = new egret.gui.BitmapLabel;
                this.lb_price = a;
                a.setStyle("size", 26);
                this.__s(a, "font rotation scaleX scaleY text x y".split(" "), ["pricenumber_fnt", -35, 0.7, 0.7, "88", -1, 29]);
                return a
            };
            a.__4_i = function() {
                var a = new egret.gui.UIAsset;
                a.source = "fishlist_part1_png";
                return a
            };
            a.ui_source_i = function() {
                var a = new egret.gui.UIAsset;
                this.ui_source = a;
                this.__s(a, ["source", "x", "y"], ["fish6_01_png", 14, -49]);
                return a
            };
            b._skinParts = ["ui_source", "lb_price", "lb_des"];
            return b
        }(egret.gui.Skin);
        e.FishItemRenderer = g;
        g.prototype.__class__ = "skins.window.FishItemRenderer"
    })(e.window || (e.window = {}))
})(skins || (skins = {}));
(function(e) {
    (function(f) {
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
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
            };
            a.dataGroup_i = function() {
                var a = new egret.gui.DataGroup;
                this.dataGroup = a;
                a.itemRendererSkinName = e.window.RodItemRenderer;
                a.layout = this.__3_i();
                return a
            };
            a.__3_i = function() {
                var a = new egret.gui.TileLayout;
                a.padding = 0;
                return a
            };
            b._skinParts = ["dataGroup"];
            return b
        }(egret.gui.Skin);
        f.FishList = g;
        g.prototype.__class__ = "skins.window.FishList"
    })(e.window || (e.window = {}))
})(skins || (skins = {}));
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
                this.states = [new egret.gui.State("normal", [new egret.gui.AddItems("ui_list", "", "before", "ship_list"), new egret.gui.SetProperty("bg", "horizontalCenter", 0), new egret.gui.SetProperty("__13", "source", "btnrod2_png"), new egret.gui.SetProperty("__14", "source", "btnrod2_png")]), new egret.gui.State("disabled", [new egret.gui.AddItems("__13", "", "before", "btn_switch"), new egret.gui.AddItems("__14", "", "before", "btn_switch"), new egret.gui.SetProperty("bg", "horizontalCenter", 0)])]
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
            };
            a.__13_i = function() {
                var a = new egret.gui.UIAsset;
                this.__13 = a;
                this.__s(a, ["x", "y"], [17, -37]);
                return a
            };
            a.__14_i = function() {
                var a = new egret.gui.UIAsset;
                this.__14 = a;
                this.__s(a, ["x", "y"], [17, -37]);
                return a
            };
            a.__3_i = function() {
                return {
                    label: "数据1"
                }
            };
            a.__4_i = function() {
                return {
                    label: "null"
                }
            };
            a.__5_i = function() {
                return {
                    label: "null"
                }
            };
            a.__6_i = function() {
                return {
                    label: "null"
                }
            };
            a.__8_i = function() {
                var a = new egret.gui.ArrayCollection;
                a.source = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i()];
                return a
            };
            a.__9_i = function() {
                return {
                    label: "数据1"
                }
            };
            a.bg_i = function() {
                var a = new egret.gui.UIAsset;
                this.bg = a;
                this.__s(a, ["source", "x", "y"], ["store_bg_png", 0, 60]);
                return a
            };
            a.btn_switch_i = function() {
                var a = new egret.gui.ToggleSwitch;
                this.btn_switch = a;
                this.__s(a, ["label", "skinName", "x", "y"], ["\u5f00\u5173\u6309\u94ae", e.button.Toggleswitch, 28, 0]);
                return a
            };
            a.closeButton_i = function() {
                var a = new egret.gui.Button;
                this.closeButton = a;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("closebtn1_png", "closebtn1_png"), 809, 46]);
                return a
            };
            a.ship_list_i = function() {
                var a = new egret.gui.List;
                this.ship_list = a;
                this.__s(a, "height itemRendererSkinName skinName useVirtualLayout width x y".split(" "), [440, e.window.ShipItemRender, e.window.List, !1, 801, 28, 82]);
                a.dataProvider = this.__12_i();
                return a
            };
            a.__10_i = function() {
                return {
                    label: "数据2"
                }
            };
            a.ui_list_i = function() {
                var a = new egret.gui.List;
                this.ui_list = a;
                this.__s(a, "height itemRendererSkinName skinName useVirtualLayout visible width x y".split(" "), [440, e.window.RodItemRenderer, e.window.List, !1, !1, 800, 30, 83]);
                a.dataProvider = this.__8_i();
                return a
            };
            b._skinParts = ["bg", "ui_list", "ship_list", "btn_switch", "closeButton"];
            return b
        }(egret.gui.Skin);
        f.RodWindow = g;
        g.prototype.__class__ = "skins.window.RodWindow"
    })(e.window || (e.window = {}))
})(skins || (skins = {}));
(function(e) {
    (function(e) { //海滩布局
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
            }
            __extends(b, d);
            var a = b.prototype;
            a.__3_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["desk_png", 68, 547]);
                return a
            };
            a.__4_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["leaf1_png", -3, 253]);
                return a
            };
            a.__5_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["umbrella_png", 127, 408]);
                return a
            };
            a.__6_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["grass_png", 121, 588]);
                return a
            };
            a.__7_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["shatan_png", -2, 630]);
                return a
            };
            a.__8_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["shu_png", 20, 71]);
                return a
            };
            return b
        }(egret.gui.Skin);
        e.Ship0Skin = g;
        g.prototype.__class__ = "skins.button.Ship0Skin"
    })(e.button || (e.button = {}))
})(skins || (skins = {}));
(function(e) {
    (function(e) { //小渔船布局
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
            }
            __extends(b, d);
            b.prototype.__3_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x", "y"], ["ship1_png", 0, 0]);
                return a
            };
            return b
        }(egret.gui.Skin);
        e.Ship1Skin = g;
        g.prototype.__class__ = "skins.button.Ship1Skin"
    })(e.button || (e.button = {}))
})(skins || (skins = {}));
(function(e) {
    (function(e) { //冒险号大船布局
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
            }
            __extends(b, d);
            b.prototype.__3_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["source", "x"], ["ship2_png", 0]);
                return a
            };
            return b
        }(egret.gui.Skin);
        e.Ship2Skin = g;
        g.prototype.__class__ = "skins.button.Ship2Skin"
    })(e.button || (e.button = {}))
})(skins || (skins = {}));
(function(e) {
    (function(e) { //音效播放按钮
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [];
                this.__7_i();
                this.__8_i();
                this.__9_i();
                this.__10_i();
                this.states = [new egret.gui.State("up", [new egret.gui.AddItems("__10", "", "last", "")]), new egret.gui.State("down", [new egret.gui.AddItems("__9", "", "last", "")]), new egret.gui.State("disabled", []), new egret.gui.State("upAndSelected", [new egret.gui.AddItems("__8", "", "last", "")]), new egret.gui.State("downAndSelected", [new egret.gui.AddItems("__7", "", "last", "")]), new egret.gui.State("disabledAndSelected", [])]
            }
            __extends(b, d);
            var a = b.prototype;
            a.__10_i = function() {
                var a = new egret.gui.UIAsset;
                this.__10 = a;
                a.source = "musicon1_png";
                return a
            };
            a.__7_i = function() {
                var a = new egret.gui.UIAsset;
                this.__7 = a;
                a.source = "musicoff2_png";
                return a
            };
            a.__8_i = function() {
                var a = new egret.gui.UIAsset;
                this.__8 = a;
                a.source = "musicoff1_png";
                return a
            };
            a.__9_i = function() {
                var a = new egret.gui.UIAsset;
                this.__9 = a;
                a.source = "musicon2_png";
                return a
            };
            return b
        }(egret.gui.Skin);
        e.SoundButton = g;
        g.prototype.__class__ = "skins.button.SoundButton"
    })(e.button || (e.button = {}))
})(skins || (skins = {}));
(function(e) {
    (function(f) { //钓鱼大全窗口布局
        var g = function(d) {
            function b() {
                d.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.gray_i(), this.__3_i(), this.ui_list_i(), this.btn_pre_i(), this.btn_next_i(), this.closeButton_i()];
                this.states = [new egret.gui.State("normal", []), new egret.gui.State("disabled", [])]
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
            };
            a.__12_i = function() {
                return {
                    label: "null"
                }
            };
            a.__13_i = function() {
                return {
                    label: "null"
                }
            };
            a.__15_i = function() {
                var a = new egret.gui.ArrayCollection;
                a.source = [this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i()];
                return a
            };
            a.__3_i = function() {
                var a = new egret.gui.UIAsset;
                this.__s(a, ["height", "source", "x"], [576, "allfish_bg_png", 19]);
                return a
            };
            a.__4_i = function() {
                return {
                    label: "数据1"
                }
            };
            a.__5_i = function() {
                return {
                    label: "数据2"
                }
            };
            a.__6_i = function() {
                return {
                    label: "数据3"
                }
            };
            a.__7_i = function() {
                return {
                    label: "null"
                }
            };
            a.__8_i = function() {
                return {
                    label: "null"
                }
            };
            a.__9_i = function() {
                return {
                    label: "null"
                }
            };
            a.btn_next_i = function() {
                var a = new egret.gui.Button;
                this.btn_next = a;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("nextpage1_png", "nextpage1_png"), 705, 540]);
                return a
            };
            a.btn_pre_i = function() {
                var a = new egret.gui.Button;
                this.btn_pre = a;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("prepage2_png", "prepage1_png"), -21, 539]);
                return a
            };
            a.closeButton_i = function() {
                var a = new egret.gui.Button;
                this.closeButton = a;
                this.__s(a, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("closebtn1_png", "closebtn1_png"), 751, -22]);
                return a
            };
            a.gray_i = function() {
                var a = new egret.gui.Rect;
                this.gray = a;
                this.__s(a, "fillAlpha fillColor height width x y".split(" "), [0.5, 0, 890, 1292, -379, -234]);
                return a
            };
            a.__10_i = function() {
                return {
                    label: "null"
                }
            };
            a.ui_list_i = function() {
                var a = new egret.gui.List;
                this.ui_list = a;
                this.__s(a, "height itemRendererSkinName skinName width x y".split(" "), [507, e.window.FishItemRenderer, e.window.FishList, 673, 101, 27]);
                a.dataProvider = this.__15_i();
                return a
            };
            b._skinParts = ["gray", "ui_list", "btn_pre", "btn_next", "closeButton"];
            return b
        }(egret.gui.Skin);
        f.FishWindow = g;
        g.prototype.__class__ = "skins.window.FishWindow"
    })(e.window || (e.window = {}))
})(skins || (skins = {}));
