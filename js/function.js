;(function($,window){
var basic={};
/*
时间对比函数
参数说明
hisTime:表示历史时间戳
nowTime:表示当前时间戳
调用示例
time.diff(1400047164,1410047164)
*/
basic.diff = function (hisTime,nowTime){
    var now =nowTime?nowTime:new Date().getTime(),
        diffValue = now - hisTime,
        result='',
        minute = 1000 * 60,
        hour = minute * 60,
        day = hour * 24,
        month = day * 30,
        year = month * 12,

        _year = diffValue/year,
        _month =diffValue/month,
        _week =diffValue/(7*day),
        _day =diffValue/day,
        _hour =diffValue/hour,
        _min =diffValue/minute;

    if(_year>=1) result=parseInt(_year) + "年前";
    else if(_month>=1) result=parseInt(_month) + "个月前";
    else if(_week>=1) result=parseInt(_week) + "周前";
    else if(_day>=1) result=parseInt(_day) +"天前";
    else if(_hour>=1) result=parseInt(_hour) +"小时前";
    else if(_min>=1) result=parseInt(_min) +"分钟前";
    else result="刚刚";
    return result;
}
/*
时间格式化
参数说明
now：表示当前时间戳
type：表示时间显示格式（date表示用‘-’分格,time表示用‘:’分格）
调用示例
var time = +new Date();
time.format(1400047164,'time')
*/
basic.format = function (now,type){
    var now = now + '';
    now = now.replace(/000$/,'')*1;
    now *= 1000;
    var _now = new Date(now);
    var rst='';
    if (type){
        if (type == 'date'){
            rst = year+"-"+month+"-"+date;
        }else if(type == 'time'){
            rst = hour+':'+minute+':'+second;
        }else{
            rst = hour+minute+second;
        }
    }else{
        rst = _date() + ' ' + _time();
    }

    function _date(){
        var year=_now.getFullYear();
        var month=_now.getMonth()+1;
        var date=_now.getDate();
        if ((month+'').length <= 1){
            month = '0'+month;
        }
        if ((date+'').length <= 1){
            date = '0'+date;
        }
        return year+"-"+month+"-"+date;
    }

    function _time(){
        var hour=_now.getHours();
        var minute=_now.getMinutes();
        var second=_now.getSeconds();
        return hour+':'+minute+':'+second;
    }

    return  rst
}
basic.formatNum = function(t) {
    return parseInt(t) < 0 || null == t || void 0 == t ? "--" : -1 != String(t).indexOf(".") || -1 != String(t).indexOf("-") ? t : 0 === parseInt(t) ? 0 : (t = parseInt(t)) >= 1e4 && t < 1e8 ? (t / 1e4).toFixed(1) + "万" : t >= 1e8 ? (t / 1e8).toFixed(1) + "亿" : t
}

function o(t) {
    return t < 10 ? "0" + t : t
}
basic.formatDate = function(t) {
    if (t) {
        var e = new Date(t);
        return e.getFullYear() + "-" + (o(e.getMonth() + 1) + "-") + o(e.getDate())
    }
}

basic.formatDateTime = function(t) {
    if (t) {
        var e = new Date(t);
        return e.getFullYear() + "-" + (o(e.getMonth() + 1) + "-") + o(e.getDate()) + " " + (o(e.getHours()) + ":") + (o(e.getMinutes()) + ":") + o(e.getSeconds())
    }
}
basic.formatCurrentTime=function (t) {
    return t <= 0 ? "今日" : t > 0 && t <= 864e5 ? "昨日" : t > 864e5 && t <= 6048e5 ? "近1周" : t > 6048e5 && t <= 2592e6 ? "1周前" : t > 2592e6 && t <= 7776e6 ? "1个月前" : "last"
}
basic.formatDuration = function(t) {
    if (-1 != String(t).indexOf(":"))
        return t;
    var e = void 0
      , i = void 0
      , a = void 0
      , n = void 0;
    return t < 60 ? "00:" + (n = t < 10 ? "0" + t : t) : t < 3600 ? (a = t % 60,
    i = parseInt(t / 60),
    n = a < 10 ? "0" + a : a,
    (i < 10 ? "0" + i : i) + ":" + n) : (a = t % 60,
    i = parseInt(t % 3600 / 60),
    e = parseInt(t / 3600),
    n = a < 10 ? "0" + a : a,
    e + ":" + (i < 10 ? "0" + i : i) + ":" + n)
}
/*
时间对比
 */
basic.dateFormat=function(t, e) {
    if (t) {
        if ("number" != typeof t)
            try {
                t = Number(t)
            } catch (n) {
                throw Error("Expected to be a number.", n)
            }
        var r = new Date(t)
          , e = e || "YYYY年MM月DD日"
          , o = +new Date
          , u = o - t
          , i = r.getFullYear()
          , a = r.getMonth() + 1
          , l = r.getDate()
          , s = r.getHours()
          , c = r.getMinutes()
          , f = (r.getSeconds(),
        1e3)
          , p = 60 * f
          , g = 60 * p
          , d = 24 * g
          , m = ["YYYY", "MM", "DD", "H", "M", "S"]
          , v = [i, a, l, s, c];
        if (u > 3 * d) {
            366 * d > u && (e = "MM月DD日");
            for (var h = 0; h < m.length - 1; h++)
                e = e.replace(m[h], v[h]);
            return e
        }
        return parseInt(u / d, 10) >= 1 && parseInt(u / d, 10) < 3 ? parseInt(u / d, 10) + "天前" : parseInt(u / g, 10) >= 1 ? parseInt(u / g, 10) + "小时前" : parseInt(u / p, 10) >= 1 ? parseInt(u / p, 10) + "分钟前" : "刚刚"
    }
}
/**
 * 防拌函数：n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
 * 主要应用场景：文本输入的验证
 * 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 *
 * @param  {function} func        传入函数，最后一个参数是额外增加的this对象，.apply(this, args) 这种方式，this无法传递进函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，调用触发于开始边界而不是结束边界
 * @return {function}             返回客户调用函数
 */
basic.debounce = function(func, wait, immediate) {
    let timeout, args, context, timestamp, result;

    const later = function() {
        // 据上一次触发时间间隔
        let last = Number(new Date()) - timestamp;

        // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
            if (!immediate) {
                result = func.call(context, ...args, context);
                if (!timeout) {
                    context = args = null;
                }
            }
        }
    };

    return function(..._args) {
        context = this;
        args = _args;
        timestamp = Number(new Date());
        const callNow = immediate && !timeout;
        // 如果延时不存在，重新设定延时
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
        if (callNow) {
            result = func.call(context, ...args, context);
            context = args = null;
        }

        return result;
    };
};
/**
 * 节流函数：高频事件在规定时间内只会执行一次，执行一次后，只有大于设定的执行周期后才会执行第二次。
 * 主要应用场景是：下拉加载更多数据，搜索联想，计算鼠标移动的距离
 * 频率控制 返回函数连续调用时，func 执行频率限定为 次 / wait
 *
 * @param  {function}   func      传入函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     options   如果想忽略开始边界上的调用，传入{leading: false}。
 *                                如果想忽略结尾边界上的调用，传入{trailing: false}
 * @return {function}             返回客户调用函数
 */
basic.throttle = function(func, wait, options) {
    let context, args, result;
    let timeout = null;
    // 上次执行时间点
    let previous = 0;
    if (!options) options = {};
    // 延迟执行函数
    let later = function() {
        // 若设定了开始边界不执行选项，上次执行时间始终为0
        previous = options.leading === false ? 0 : Number(new Date());
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function(..._args) {
        let now = Number(new Date());
        // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
        if (!previous && options.leading === false) previous = now;
        // 延迟执行时间间隔
        let remaining = wait - (now - previous);
        context = this;
        args = _args;
        // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
        // remaining大于时间窗口wait，表示客户端系统时间被调整过
        if (remaining <= 0 || remaining > wait) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
            //如果延迟执行不存在，且没有设定结尾边界不执行选项
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};
/*
倒计时
参数说明
    e 代表开始时间戳
    t 代表结束时间戳
    n 显示合计时方法
    a 时间结束后的回调方法
    方法调用示例
    countDown(1512355200,1512355500,function(o, r, s, l){
        console.log(o+':'+r+':'+s+':'+l);
    },function(){
        console.log('时间到！');
    })
*/
basic.countDown = function(e, t, n, a){
    var i = 1e3 * (t - e),
        self = this
      , o = Math.floor(i / 864e5)
      , r = Math.floor(i / 36e5) % 24
      , s = Math.floor(i / 6e4) % 60
      , l = Math.floor(i / 1e3) % 60;
    if (o = o < 10 ? "0" + o : o,
    r = r < 10 ? "0" + r : r,
    s = s < 10 ? "0" + s : s,
    l = l < 10 ? "0" + l : l,
    n(o, r, s, l),
    0 == o && 0 == r && 0 == s && 0 == l)
        return a(),
        !1;
    setTimeout(function() {
        self.countDown(++e, t, n, a)
    }, 1e3)
}

/**价格加减数字操作计算值方法*/
function operaNum(obj) {
    var $this = obj,
        operation = +$this.data('opt'),
        $input = $this.siblings('input'),
        price = $input.data('def'),
        maxNum = $input.data('max'),
        minNum = $input.data('min'),
        curNum = +$input.val();
    //console.log(operation);
    (operation==1) ? ++curNum : --curNum;
    if (curNum >= maxNum) {
        curNum = maxNum;
        $this.addClass('disabled');
    }else if (curNum <= minNum) {
        curNum = minNum; 
        $this.addClass('disabled');
    }else{
        $this.siblings('span').removeClass('disabled');
    }
    $input.val(curNum).data('total',curNum*price);
    basic.setMoney();
}
/**价格加减数字操作设置值方法*/
basic.setMoney = function (){
    var total = 0,
        $input=$('.product'),
        $money=$("#money");
    $input.each(function(){
        total += +$(this).data('total');
    })
    $money.text(total);
}
/**价格加减数字操作
 * @author yuyingping 2018-02-28
 * @param  {string} [当前按钮类名]
 * @param  {Function} [点击后的回调方法]
 * 调用示例
basic.setMoney();
$('.plus').on('click',function(){
    basic.getMoneyVal(this);
    //callback();请求数据
})
$('.reduce').on('click',function(){
    basic.getMoneyVal(this);
    //callback();请求数据
})
 * html结构
 * 自定义属性说明
 * value 、data-min、data-total有依赖关系
 * value 与 data-min 是一致的 
 * data-total总和值
 * data-def默认单价
 * data-max最大值
 * data-min最小值
 * data-opt值为0执行减法，值为1执行加法
<div class="plusNum">
    <span class='reduce' data-opt='0'>-</span>
    <input type='number' readonly class='product' value="1" data-total='100' data-def='100' data-max='5' data-min='1'/>
    <span class='plus' data-opt='1'>+</span>
</div>
<p id="money"></p>
 */
basic.getMoneyVal = function (obj){
    var self=$(obj);
    !self.hasClass('disabled') && operaNum(self);
}

/**判断内容是否出现在可视区
 * @author yuyingping 2018-02-28
 * @param  {object} [原生dom对象]
 * @return {Boolean} [true表示出现在可视区]
 * 调用示例
$('.scroll').on('touchend',function(){
    var last=$(this).find('li:last');
    basic.isInViewport($(last)[0]) && callback();
})
 * html结构
<ul class="scroll">
    <li></li>
</ul>
*/
basic.isInViewport = function (el) {
    var rect = el.getBoundingClientRect();
    return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight);
}
basic.checkInView = function(t, e) {
    if (!t)
        return;
    var i = t.getBoundingClientRect()
      , a = e || 0;
    return i.top < window.innerHeight + a && i.bottom >= 0
}
/**水平滑动菜单
 * @author yuyingping 2018-02-28
 * @param  {string} [外层容器id]
 * @param  {string} [当前点击的样式类]
 * @param  {Function} [点击后的回调方法]
 * 调用示例
basic.scrollMenu("#nav",'on',function(index){
    //console.log(index);
    var typeId = index,$wrap=$('#wrap'),tpl="<p id='refresh' class='loading'>刷新数据中...</p>";
    $.getJSON('接口地址?type='+typeId,function(res){//请求数据
        if (res.code > 0) {
            res.data.forEach(function(i,e){
                tpl+="<li><img src='"+i.imgurl+"'/></li>";
            })
            tpl+="<p id='loading' class='loading'>加载数据中...</p>";
            $wrap.removeClass("empty").html(tpl);
        }else{
            $wrap.addClass("empty").html('')//'没有该分类！'
        }
    })
});
 * html结构
.snav{
    width: 100%;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
}
.snav li{
    display:inline-block;
    padding:15px 20px;
    box-sizing:border-box;
}
.snav li.on{
    border-bottom: 1px solid #ea6f5a;
    color: #ea6f5a;
}
.snav::-webkit-scrollbar{
    height: 0;
}
.empty{width:100%;height:80%;background:url('img/empty.png') no-repeat center center;background-size:40%;}
<ul id="nav" class="snav">
    <li i="1" class="on">角色</li>
    <li i="2">格斗</li>
    <li i="3">休闲</li>
    <li i="4">竞速</li>
    <li i="5">策略</li>
    <li i="6">射击</li>
    <li i="7">其它</li>
    <li i="8">回合</li>
    <li i="9">卡牌</li>
</ul>
*/
basic.scrollMenu = function(obj,active,fn){
    var $nav = $(obj);
    $(obj+" li").on('touchstart',function(e){
        var $this=$(this),
            data = $this.attr('i'),
            liOffset = $this.offset().left + $nav.scrollLeft(),//li元素总偏移值
            cenLeft = ($nav.width() - $this.width()) / 2, //居中
            sLeft = liOffset-cenLeft;
        $this.addClass(active).siblings().removeClass(active);
        console.log(sLeft);
        //$nav.scrollLeft(sLeft);
        $nav.animate({scrollLeft: sLeft}, 280);
        fn(data);
    })
}
/*
*vue版水平滑动菜单
*menu方法直接绑定到对应的菜单中
*例如:
*css:
*class-menu{
   display: flex;
   white-space: nowrap;
   overflow-x: scroll;
}
*html:
*<ul class="class-menu f-tac f-pk" ref="menus">
    <li @click="menu">
    </li>
</ul>
 */
basic.getStep = function(star, end, callback, t, rate) {//执行一定范围的步长
  var diff = end - star; // 差值
  if (t === 0 || diff === 0) {
    callback && callback(end);
    return;
  }
  t = t || 300; // 时长 300ms
  rate = rate || 30; // 周期 30ms
  var count = t / rate; // 次数
  var step = diff / count; // 步长
  var i = 0; // 计数
  var timer = setInterval(function () {
    if (i < count - 1) {
      star += step;
      callback && callback(star, timer);
      i++;
    } else {
      callback && callback(end, timer); // 最后一次直接设置end,避免计算误差
      clearInterval(timer);
    }
  }, rate);
}
basic.menu = function({target}){
  let {$refs:{menus}}=this,
      mLeft=menus.scrollLeft,
      mWidth=menus.offsetWidth,
      liLeft=target.offsetLeft,
      liWidth=target.offsetWidth,
      end=liLeft+liWidth/2-mWidth/2;//居中计算
      //console.log(menus)
  this.getStep(mLeft,end,(s)=>{
    //console.log(s|0)
    if(menus.scrollLeft){//判断兼容性
      menus.scrollLeft = num//加｜表示保留整数
    }else{
      menus.scrollTo(num,0)
    }
  })
  //this.getData()请求数据
}
/**移动端监测用户手指滑动方向的方法
 * @author yuyingping 2018-02-28
 * @param  {string} [obj]   [外层容器id]
 * @param  {Function} [callback] [回调方法]
 * 调用案例
    new TouchAngle({
        "obj":"#wrap",
        "callback":{
            up:function(){
                console.log('加载更多')
            },
            down:function(){
                console.log('刷新数据')
            }
        }
    });
*/ 

var TouchAngle = function (o){
    var opt = o || {};
        this.callback = opt.callback;
        //callback = (typeof opt.fn != 'function') ? function(){} : opt.fn;
        this.startX = null;
        this.startY = null;
        this.endX = null;
        this.endY = null;
        this.obj = $(opt.targets) || $(document);
        this.handleInit();
};
TouchAngle.prototype = {
    handleDefault : function(){
        console.log("默认操作");
    },
    handleUp : function(dom){
        (typeof this.callback['up'] == 'function') && this.callback['up'](dom)
        //console.log("向上");
    },
    handleDown : function(dom){
        (typeof this.callback['down'] == 'function') && this.callback['down'](dom)
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
            //console.log(this);
            var domObj=this,erEv = ev.originalEvent;
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
                    self.handleDown(domObj);
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
/**下拉加载更多
 * @author yuyingping 2018-02-28
 * @param  {string} 接口地址
 * 调用案例
 * basic.loadMore('接口地址')
 * 后端数据结构
{
    "data":[
        {"imgurl":"img/2.jpg"},
        {"imgurl":"img/3.jpg"},
        {"imgurl":"img/4.jpg"},
        {"imgurl":"img/5.jpg"},
        {"imgurl":"img/6.jpg"}
    ],
    "code":"1"
}
 * html结构
*{margin:0;padding:0;}
html,body{height:100%}
ul{list-style:none;}
.col-m{width:90%;margin:2.5% auto;position: relative;}
.col-m li,.loading{width:50%;}
.col-m li{margin:2.5% 0;}
.col-m li img,.col-m li.place{width:100%;}
.place{display:block;height:600px;visibility:hidden;}
.drop > li.place{display:none;}
.col-m li:nth-child(odd){float:left;}
.col-m li:nth-child(even){float:right;}
.loading{text-align:center;display:none;position: absolute;left: 50%;padding: 8px 0;margin-left: -25%;background: rgba(0,0,0,.9);color: #fff;border-radius: 5px;}
#refresh{top:0;}
#loading{bottom:10%;}
.fixed{position: fixed;top: 52px;left: 0;z-index: 100;overflow-y: scroll;height:100%;}
.cc:after{content: '.';clear: both;height:0;display:block;visibility:hidden;overflow: hidden;}
.cc{zoom:1;}
<div class="fixed">
<ul class="col-m cc" id="wrap">
    <p id="refresh" class="loading">刷新数据中...</p>
    <li class="place"></li>
    <p id="loading" class="loading">加载中...</p>
</ul>
</div>
*/
basic.loadMore = function (obj,url){
    //console.log(this);
    var page=2,
        loadStop=true,
        refStop=true,
        //timer=null,
        tpl = '',
        self = this,
        $load=$("#loading"),
        $ref = $("#refresh"),
        loadHide = function(obj,flag){
            obj.show();
            flag && obj.text('没有更多了');
            setTimeout(function(){
                obj.hide();
            },400);
        },
        getMore = function (){
            //$load.show();
            if(loadStop){// && isload()
                loadStop=false;
                $.getJSON(url+"?type=1&page="+page+'&callback=?',function (res) {
                    if (res.data.length != 0) {
                        res.data.gamelist.forEach(function(i,e){
                            //console.log(i)
                            tpl+="<li><img src='"+i.micon+"'/></li>";
                        })
                        $load.before(tpl);
                        loadHide($load,false);
                        page++;
                        loadStop = true;
                   }else {
                        loadHide($load,true);
                        loadStop = false;
                   }
                })
            }
        },
        reFresh = function(){
            //$ref.show();
            if(refStop){
                refStop=false;
                $.getJSON(url+'?callback=?',function (res) {
                    if (res.data.length != 0) {
                        res.data.gamelist.forEach(function(i,e){
                            tpl+="<li><img src='"+i.micon+"'/></li>";
                        })
                        $ref.after(tpl);
                        loadHide($ref,false);
                        refStop = true;
                   }else {
                        loadHide($ref,true);
                        refStop = false;
                   }
                })
            }
        },
        init = new TouchAngle({
            "targets":obj,
            "callback":{
                up:function(dom){
                    console.log('加载更多');
                    var $dom=$(dom),last=$dom.find('li:last');
                    self.isInViewport($(last)[0]) && getMore();
                    $dom.addClass('drop');
                },
                down:function(dom){
                    /*console.log('刷新数据')
                    var first=$(dom).find('li:first');
                    self.isInViewport($(first)[0]) && reFresh();*/
                }
            }
        }); 
    //init.callback.down(obj);初始化加载数据
}
/*
滑动到指定位置
<a href="#a1">asdfasdf</a>
<div class="center red" id="a1" name="a1">
调用示例
$("a[href*='#']").click(function(){
    backTop(this)
})
*/
basic.backTop = function(obj){
    if (location.pathname.replace(/^\//,'') == obj.pathname.replace(/^\//,'')
         && location.hostname == obj.hostname) {
           var $target = $(obj.hash);
           $target = $target.length && $target || $('[name=' + obj.hash.slice(1) +']');
       if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body').animate({scrollTop: targetOffset}, 500);
        return false;
       }
    }
};
/*
滑动固定导航
调用示例
basic.fixedNav("#nav")
*/
basic.fixedNav = function(id){
    var $obj = $(id),$winTop,$fixedTop = $obj.offset().top;
    //$body=$('body'),
    $(window).scroll(function (){
        $winTop=$(this).scrollTop();
        if($winTop>=$fixedTop){
            $obj.css('position','fixed')
            //console.log($winTop+'\n'+$fixedTop);
        }else{
            $obj.removeAttr('style');
        }
    })
}
/* -----文本输入字数限制方法-----
*field  表单域元素名
*maxlimit   限制字符
*textNum    字数显示容器
<textarea name="message" cols="28" rows="5" id="message"></textarea>  
您还可以输入:<span id="remLen">10</span>个字符
$('#message').on('keydown',function(event){
  var self = this,e = event.keyCode;
  if(e == 32)return false;
  textCounter(self,10,'#remLen');
})
*/
basic.textCounter = function(field, maxlimit,textNum) {
    var $field =  $(field),$val = $field.val();
   if ($val.length > maxlimit)  {
       //如果元素区字符数大于最大字符数，按照最大字符数截断；  
       $field.val($val[0].substring(0, maxlimit));  
   }else{  
       //在记数区文本框内显示剩余的字符数；  
       $(textNum).text(maxlimit - $val.length);  
   }
}
/**
 * [unicode转译中文字符]
 * @author yuyingping 2018-03-02
 * @param  {[string]} v [unicode编码]
 * 调用示例
 * basic.unicodeToutf8('\\u52a8\\u529b')
 */
basic.unicodeToutf8 = function(v){
    var r = v.match(/\\u[0-9a-fA-F]{4}/g);
    //console.log(v);
    for(var i = 0; i < r.length; i++){
        v = v.replace(r[i],unescape(r[i].replace("\\u","%u")));
    }
    return v;
}
/**
 * [中文字符转译unicode]
 * @author yuyingping 2018-03-02
 * @param  {[string]} str [中文字符]
 * 
 */
basic.utf8Tounicode = function(str){
    var v = str.split("");
    var ascii = "";
    for (var i = 0; i < v.length; i++) {
        var code = Number(v[i].charCodeAt(0));
        if (code > 127) {
            var charAscii = code.toString(16);
            charAscii = new String("0000").substring(charAscii.length, 4) + charAscii;
            ascii += "\\u" + charAscii;
        } else {
            ascii += v[i];
        }
    }
    return ascii;
}
/**
 * [在固定范围内生成随机数]
 * @author yuyingping 2018-03-03
 * @param  {string} obj [dom元素的id]
 * 调用示例：
 * <p id="price"></p>
 * basic.random('#price');
 */
basic.setRandom = function(obj){
    /*console.log(obj);*/
    var $obj = $(obj);
    setInterval(function(){
        $obj.text(Math.ceil(Math.random()*190000)+10000);
    },200);
}

/* 数组随机混合
*var arr = [2, 11, 37, 42];
*arr = shuffle(arr);
*/
basic.shuffle=function (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/*
从数组随机抽取n个数据
调用示例
var items = ['1','2','4','5','6','7','8','9','10'];
basic.getRanArrEle(items, 4);
*/
basic.getRanArrEle = function(arr, count){
    var shuffled = arr.slice(0),
        i = arr.length,
        min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}
/*生成随机字符串*/
basic.makeSalt = function (len) {
    var str = 'qwertyuiop[]asdfghjkl;zxcvbnm,./';
    var salt = '';
    for(var i=0; i<len; i++){
        salt += str.charAt(this.rand(0, str.length));
    }
    return salt;
}
basic.generateRandomAlphaNum=function(len) {
    var rdmString = "";
    for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
    return rdmString.substr(0, len);
}
basic.rand = function (max,min){
    return Math.random()*(max-min+1) + min | 0;
}
//计算百分比
basic.getPercent = function (curNum, totalNum, isHasPercentStr) {
    curNum = parseFloat(curNum);
    totalNum = parseFloat(totalNum);
    if (isNaN(curNum) || isNaN(totalNum)) {
        return '-';
    }
    return isHasPercentStr ?
        totalNum <= 0 ? '0%' : (Math.round(curNum / totalNum * 10000) / 100.00 + '%') :
        totalNum <= 0 ? 0 : (Math.round(curNum / totalNum * 10000) / 100.00);
}
//手机号中间4位星号代替
basic.replaceMobile=function (mobile, front_len, end_len) {
    var symbol = '', mobile_len = mobile.length;
    var len = mobile_len - front_len - end_len;
    for(var i=0; i<len; i++) {  symbol += '*'; }
    return mobile.substr(0,front_len) + symbol + mobile.substr(mobile_len-end_len);
}
/*去除重复*/
basic.deleteRepetion = function (arr){
 var arrTable = {},arrData = [];
    for (var i = 0; i < arr.length; i++) {
        if( !arrTable[ arr[i] ]){
            arrTable[ arr[i] ] = true;
            arrData.push(arr[i])
         }
     }
    return arrData;
}
/*字符串去重*/
basic.uniqueStr=function (str){  
    var newStr="";  
    for(var i=0;i<str.length;i++){  
        if(newStr.indexOf(str[i])==-1){  
            newStr+=str[i];  
        }  
    }  
    return newStr;  
} 
/*数组去重*/
basic.simplifyRepetion = function (arr){
    var data=arr.filter(function(x, index,self) {
        return self.indexOf(x)===index;
    }); 
    return data;
}
/*快速排序*/
basic.quickSort = function (arr){
    //如果数组<=1,则直接返回
    if(arr.length<=1){return arr;}
    var pivotIndex=Math.floor(arr.length/2);
    //找基准，并把基准从原数组删除
    var pivot=arr.splice(pivotIndex,1)[0];
    //定义左右数组
    var left=[];
    var right=[];

    //比基准小的放在left，比基准大的放在right
    for(var i=0;i<arr.length;i++){
        if(arr[i]<=pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    //递归
    return this.quickSort(left).concat([pivot],this.quickSort(right));
} 
/*
非空判断
*/    
basic.isNull = function (obj){
    return obj == '' || obj == 'undefined' || obj == null;
}
/*
方法只执行一次
调用示例
basic.once(function() {
    console.log('Fired!');
});
*/
basic.once = function(fn, context) { 
    var result;
    return function() { 
        if(fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }

        return result;
    };
}
/*按序号取值
var data=[
        [1,'江西','庐山'],
        [2,'广州','白云山'],
        [3,'湖北','武当山'],
        [4,'山东','泰山'],   
        [5,'合肥','蜀山森林公园'],
        [6,'淮南','八公山国家地质公园'],
        [7,'黄山','龙源九龙瀑'],
        [8,'厦门',' 万石岩'],
        [9,'泉州','泉州中山'],
        [10,'韶关','苍石寨']
    ];
var dataNum = [2,6,10,9,5,4];
basic.setValByNum(data,dataNum);
*/

basic.setValByNum = function(data,diff){ 
    var str='';
    data.map(function(el,i){
      diff.map(function(sl){
        if(el[0]===sl){
          str += el[0]+'-'+el[1]+'-'+el[2]+'\n';       
        }
      })
    })
    return str
    //document.getElementById('content').innerHTML = str;
}

/**[异步请求方法]
*支持jsonp跨域
 * @author yuyingping 2018-07-07
new Fetch({
  type:'POST',
  //jsonp:true,
  url:'//bd/test.php',
  data:'act=init&name=jack&age=10&callback',
  succ:function(e){}
})
new Fetch({
  type:'GET',
  //jsonp:true,
  url:'//bd/test.php?&name=jack&age=10',
  succ:function(e){}
})
*/
basic.Fetch=function (arg){
  var self=this;
  this.suffix=+new Date();
  this.fetch=window.fetch||new XMLHttpRequest();
  this.arg=arg||{};
  this.urls=this.arg.jsonp?this.arg.url+'&callback=jsonp'+this.suffix:this.arg.url;
  (typeof this.fetch === 'object')?this.httpRequest(self):this.httpFetch(self);
  return this;
}
basic.Fetch.prototype={
  httpRequest:function(self){
    var parme=null;
    this.fetch.onreadystatechange=function (){
        if(self.fetch.status==200&&self.fetch.readyState==4){
          self.arg.jsonp?self.jsonpCallback(self):self.arg['succ'](JSON.parse(self.fetch.response))
        }else{
          typeof self.arg['error']=='function' && self.arg['error'](self.fetch.statusText);
        }
    };
    this.fetch.open(this.arg.type,this.urls,true);
    if(this.arg.type=='POST'){
      this.fetch.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      parme=this.arg.data;
    }
    this.fetch.send(parme);/**/
  },
  jsonpCallback:function (self){
    var script=document.createElement('script');
        script.src=this.urls;
        document.head.appendChild(script);
        document.head.removeChild(script);
        window['jsonp'+this.suffix]=function(e){
          self.arg['succ'](e)
        };
  },
  httpFetch:function(self){
    var parm={};
    if(this.arg.jsonp) parm.mode='no-cors';
    parm.method=this.arg.type;
    if(this.arg.type=='POST'){
      parm.headers={"Content-Type": "application/x-www-form-urlencoded"};
      parm.body=this.arg.data;
    }
    fetch(this.urls,parm).then(function(e){
      self.arg.jsonp ? self.jsonpCallback(self) : e.json().then(function(res){
          self.arg['succ'](JSON.parse(JSON.stringify(res)));
        })
    }).catch(function(err){
      typeof self.arg['error']=='function' && self.arg['error'](err)
    })
  }
}
/**
 * [悬浮球效果]
 * @author yuyingping 2018-07-07
 * @param  {[type]} el [dom节点]
 * @return {[type]}    [description]
 * css:
 * #rate{
  position: fixed;
  left: 1em;
  top: 1em;
  z-index: 100;
  width: 3em;
  height: 3em;
  background: red;
  border-radius: 50%;
  transition: all .1s ease-out;
}
 * 示例：basic.sphere('#rate')
 */
basic.sphere=function(el){
  var beginX=beginY=endX=endY=0,
      rate=document.querySelector(el);
  rate.addEventListener('touchstart',start);
  rate.addEventListener('touchmove',move);
  rate.addEventListener('touchend',end);
  /*rate.ontouchstart=start;
  rate.ontouchmove=move;
  rate.ontouchend=end;*/

  function start(e){
    beginX=e.touches[0].pageX;
    beginY=e.touches[0].pageY;
    return false;
  }
  function move(e){
    endX=e.touches[0].pageX-beginX;
    endY=e.touches[0].pageY-beginY;
    this.style.left=(beginX+endX)-(this.offsetWidth*.5)+'px';
    this.style.top=(beginY+endY)-(this.offsetHeight*.5)+'px';
    return false;
    //console.log()
  }
  function end(e){
    var left = parseInt(this.style.left) || 0,
      width = parseInt(this.offsetWidth) || 0,
      windowWith = (document.documentElement || document.body).offsetWidth;
    if (left > (windowWith - width) / 2) {
      left = windowWith - width ;//+10
    } else {
      left = 5;
    }
    this.style.left=left+'px';
    this.style.top=this.style.top+endY+'px';
    //console.log('X:'+endX+'Y:'+endY)
  }
}
/**
 * 字符串转换成dom元素
 */
basic.domToString=function(node) {  
    let i, a = document.createElement("div"),
        b = document.createDocumentFragment();
        a.innerHTML = node;
    while (i = a.firstChild) b.appendChild(i);
    return b;
}
/*
生成uuid
 */
basic.uuid=function() {
    var t = (new Date).getTime();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        var i = (t + 16 * Math.random()) % 16 | 0;
        return t = Math.floor(t / 16),
        ("x" === e ? i : 7 & i | 8).toString(16)
    })
}
/*
阻止频繁操作
调用示例
<a id="btn">操作</a>
$("#btn").click(function(){
    basic.optOften(this,5000)
})
*/
basic.optOften=function(o,t){  
    var nowTime = +new Date(),
        time = t || 3000,
        $obj = $(o),
        clickTime = $obj.attr("ctime");
    if( clickTime != 'undefined' && (nowTime - clickTime < time)){
        console.log('操作过于频繁，稍后再试');
        return false;
     }else{
        $obj.attr("ctime",nowTime);
        console.info('提交成功');
     }       
}
/*
cookie操作
*/
basic.cookie = {
    del: function(name, path, domain){
        document.cookie = name + "=" +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    },
    get: function(name){
        var v = document.cookie.match('(?:^|;)\\s*' + name + '=([^;]*)');
        return v ? decodeURIComponent(v[1]) : null;
    },
    set: function(name, value ,expires, path, domain){
        var str = name + "=" + encodeURIComponent(value);
        if (expires != null || expires != '') {
            if (expires == 0) {expires = 100*365*24*60;}
            var exp = new Date();
            exp.setTime(exp.getTime() + expires*60*1000);
            str += "; expires=" + exp.toGMTString();
        }
        if (path) {str += "; path=" + path;}
        if (domain) {str += "; domain=" + domain;}
        document.cookie = str;
    }
};
/*
获取url参数
*/
basic.url = {
    getQueryString : function(){//获取url键值对
        var result = [], queryString = location.search.substring(1)
        ,   re = /([^&=]+)=([^&]*)/g, m;
        while (m = re.exec(queryString)) {
            result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
        }
        return result;
    },
    getUrlParm : function(name){//获取url参数值
        var regexS = "[\\?&]"+name+"=([^&#]*)",
            regex = new RegExp( regexS ),
            tmpURL = window.location.href,
            results = regex.exec( tmpURL );
        return ( results == null ) ? "" : results[1];
    }
}
window['basic'] = basic;
})(jQuery,window)