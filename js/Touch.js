/*
移动端监测用户手指滑动方向的方法
new TouchAngle({
    "obj":"#wrap",
    "callback":{
        up:function(){
            console.log('向上')
        },
        down:function(){
            console.log('向下')
        }
    }
});

'use strict';*/ 
    var TouchAngle = function (o){
        var opt = o || {};
            this.callback = opt.callback;
            //console.log(this.callback);
            //callback = (typeof opt.fn != 'function') ? function(){} : opt.fn;
            this.startX = null;
            this.startY = null;
            this.endX = null;
            this.endY = null;
            this.obj = $(opt.obj) || $(document);
            this.childNode=opt.targetNode||'li';
            this.last = this.obj.find(this.childNode+':last');
            this.handleInit();
    };
    TouchAngle.prototype = {
        isInViewport : function (el) {
            if(el.length==0) return false;
            var rect = el.getBoundingClientRect();
            return rect.bottom > 0 &&
                rect.right > 0 &&
                rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
                rect.top < (window.innerHeight || document.documentElement.clientHeight);
        },
        handleDefault : function(){
            console.log("默认操作");
        },
        handleUp : function(dom){
            (typeof this.callback['up'] == 'function' && this.isInViewport(this.last)) && this.callback['up'](dom)
            //console.log("向上");
        },
        handleDown : function(){
            (typeof this.callback['down'] == 'function') && this.callback['down']()
            //console.log("向下");
        },
        handleLeft : function(){
            console.log("向左");
        },
        handleRight : function(){
            console.log("向右");
        },
        getSlideAngle : function(dx, dy) {
            return Math.atan2(dy, dx) * 180 / Math.PI;
        },
        //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
        getSlideDirection : function(startX, startY, endX, endY) {
            var dy = startY - endY,
                dx = endX - startX,
                result = 0;
            //如果滑动距离太短
            if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {
                return result;
            }
            var angle = this.getSlideAngle(dx, dy);
            if(angle >= -45 && angle < 45) {
                result = 4;
            }else if (angle >= 45 && angle < 135) {
                result = 1;
            }else if (angle >= -135 && angle < -45) {
                result = 2;
            }
            else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
                result = 3;
            }
            return result;
        },
        handleInit : function(){
            //默认操作
            //this.handleDefault();
            var self = this;
            this.obj.on('touchstart',function (ev) {
                var erEv = ev.originalEvent;
                self.startX = erEv.touches[0].pageX;
                self.startY = erEv.touches[0].pageY;  
            }).on('touchend',function (ev) {
                var erEv = ev.originalEvent,domObj=this;
                self.endX = erEv.changedTouches[0].pageX;
                self.endY = erEv.changedTouches[0].pageY;
                var direction = self.getSlideDirection(self.startX, self.startY,self.endX,self.endY);
                switch(direction) {
                    case 0:
                        //没有滑动
                        break;
                    case 1:
                        self.handleUp(domObj);
                        break;
                    case 2:
                        self.handleDown();
                        break;
                    case 3:
                        self.handleLeft();
                        break;
                    case 4:
                        self.handleRight();
                        break;
                    default:         
                }
            });
        }
    };
        

   
