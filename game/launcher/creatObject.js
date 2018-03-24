/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-24 16:28:04
 * @version $Id$
 */
var FishObject = function(e) { //鱼类对象
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
    };
    g.onEnterFrame = function(d) {};
    g.onCreate = function() {};
    g.onPause = function() {};
    g.onResume = function() {};
    f.key = "fishObject";
    return f
}(p2.Body);
FishObject.prototype.__class__ = "FishObject";
var GameObject = function(e) { //游戏对象
    function f() {
        e.call(this);
        this.key = "gameObject"
    }
    __extends(f, e);
    var g = f.prototype;
    g.onCreate = function() {};
    g.onDestroy = function() {};
    g.onPause = function() {};
    g.onResume = function() {};
    g.onEnterFrame = function(d) {};
    return f
}(egret.HashObject);
GameObject.prototype.__class__ = "GameObject";
var SceneObject = function(e) { //场景对象
    function f() {
        e.call(this);
        this.key = "sceneObject"
    }
    __extends(f, e);
    var g = f.prototype;
    g.onCreate = function() {};
    g.onDestroy = function() {};
    g.onPause = function() {};
    g.onResume = function() {};
    g.onEnterFrame = function(d) {};
    return f
}(egret.EventDispatcher);
SceneObject.prototype.__class__ = "SceneObject";
