/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-24 15:25:52
 * @version $Id$
 */
var Fish1 = function(e) {
    function f() {
        e.call(this);
        this.campaignsId = 1;
        this.angSpeed = 0.8
    }
    __extends(f, e);
    var g = f.prototype;
    g.onEnterFrame = function(d) {
        if (this.isBack) this.goBack(d);
        else if (this.isOut || this.isChaseHook) this.go(d),
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
    };
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
    };
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
        if (this.isBack) this.goBack(d);
        else if (this.isOut || this.isChaseHook) this.go(d),
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
    };
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
    };
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
        this.frameTime >= this.time ? this.reSetMoveDir(3) : (this.goArc(d), this.locationChanged(d))
    };
    g.reSetMoveDir = function(d) {
        this.frameTime = 0;
        this.time = 15E3;
        this.arcLength = 2E3;
        d = -0.25 * Math.PI;
        this._arcPos = [this.x + Math.cos(d) * this.arcLength, this.y + Math.sin(d) * this.arcLength];
        this.speed = -this.speed;
        d = 180 * Math.atan2(this._arcPos[1] - this.position[1], this._arcPos[0] - this.position[0]) / Math.PI;
        this.rota = 0 < this.speed ? d - 90 : d + 90
    };
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
        if (this.isBack) this.goBack(d);
        else if (this.isOut || this.isChaseHook) this.go(d),
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
    };
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
    };
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
        if (this.isBack) {
            this.goBack(d);
        } else {
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
    };
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
    };
    g.reSetFishData = function() {
        this.rota = 90;
        this.position[1] = this.center[1]
    };
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
    };
    g.onEnterFrame = function(d) {
        if (this.isBack) this.goBack(d);
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
    };
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
    };
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
    };
    g.onEnterFrame = function(d) {
        if (this.isBack) this.goBack(d);
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
    };
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
    };
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
        if (this.isBack) this.goBack(d);
        else if (this.isOut || this.isChaseHook) this.go(d),
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
    };
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
    };
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
        if (this.isBack) this.goBack(d);
        else if (this.isOut || this.isChaseHook) this.go(d),
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
    };
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
    };
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
        if (this.isBack) this.goBack(d);
        else if (this.isOut || this.isChaseHook) this.go(d),
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
    };
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
    };
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
        if (this.isBack) this.goBack(d);
        else if (this.isOut || this.isChaseHook) this.go(d),
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
    };
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
    };
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
        if (this.isBack) this.goBack(d);
        else if (this.isOut || this.isChaseHook) this.go(d),
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
    };
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
    };
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
        if (this.isBack) this.goBack(d);
        else if (this.isOut || this.isChaseHook) this.go(d),
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
    };
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
    };
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
        if (this.isBack) this.goBack(d);
        else if (this.isOut || this.isChaseHook) this.go(d),
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
    };
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
    };
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
        if (this.isBack) this.goBack(d);
        else if (this.isOut || this.isChaseHook) this.go(d),
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
    };
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
    };
    f.key = "fish9";
    return f
}(Fish);
Fish9.prototype.__class__ = "Fish9";
