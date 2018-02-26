!(function($){
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

/**
 * //价格加减数字操作
numObj:数字输入框
incObj:加按钮
decObj:减按钮
curstyle:当前点击样式
operation:传1执行加法操作
          传-1执行减法操作
basic.operaNum({
    "numObj":'#timeNum',
    "incObj":'#plus',
    "decObj":'#reduce',
    "curStyle":'color-red',
    "operation":-1
});
basic.operaNum({
    "numObj":'#timeNum',
    "incObj":'#plus',
    "decObj":'#reduce',
    "curStyle":'color-red',
    "operation":1
});
<span id='reduce'>-</span>
<input type='text' id='timeNum' data-max='10' data-min='1'/>
<span id='plus'>+</span>
 调用示例：
$('#plus').on('tap',function(){
    var price=$('#money').attr('data-def');
    if (! $(this).hasClass('color-red')){return false}
    var num = basic.operaNum('#timeNum','#plus','#reduce','color-red',1);
    $('#money').text(num*price);
    freetime();//请求数据
})
 */
basic.operaNum = function(arg) {
    var opt = {
        "$numObj":$(arg.numObj),
        "$incObj":$(arg.incObj),
        "$decObj":$(arg.decObj),
        "curStyle":arg.curStyle,
        "operation":arg.operation
    },
    self = this,
    maxNum = opt.$numObj.data('max'),
    minNum = opt.$numObj.data('min'),
    curNum = opt.$numObj.val();
    if (self.isNull(opt.operation)) {
        handler = function(i){return ++i};
    } else if (! isNaN(opt.operation)) {
        handler = function(i){return parseInt(i) + opt.operation};
    } else {
        handler = opt.operation;
    }
    opt.$incObj.addClass(opt.curStyle);
    opt.$decObj.addClass(opt.curStyle);
    curNum = handler(curNum);
    console.log(curNum);
    if (curNum >= maxNum) {
        curNum = maxNum;
        opt.$incObj.removeClass(opt.curStyle);
    } else if (curNum <= minNum) {
        curNum = minNum; 
        opt.$decObj.removeClass(opt.curStyle);
    }
    opt.$numObj.val(curNum);
    return curNum;
}
/*
判断内容是否出现在可视区
参数说明：
el 表示原生dom对象
调用示例
var last=$(this).find('li').last();
isInViewport($(last)[0]);
*/
basic.isInViewport = function (el) {
    var rect = el.getBoundingClientRect();
    return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight);
}
/*
下拉加载更多
<ul>
    <li><img src='exmple.jpg'/></li>
    <p id="loading">加载中...</p>
</ul>
调用案例
basic.loadMore('路径?page=')
后端数据结构
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
*/
basic.loadMore = function (url){
    //console.log(this);
    var page=2,
        stop=true,
        timer=null,
        tpl = '',
        $win=$(window),
        $doc=$(document),
        height=$win.height(),
        $load=$("#loading"),
        fire = false,// rAF 触发锁
        isload = function(){//达到加载条件
            var totalHeight = parseFloat(height) + parseFloat($win.scrollTop())
                docHeight = $doc.height()-height/2;
            return docHeight <= totalHeight;
        },
        getList = function (){
            fire = false;
            $load.show();
            if(stop && isload()){
                stop=false;
                $.getJSON(url+page,function (res) {
                    if (res.code > 0) {
                        res.data.forEach(function(i,e){
                            tpl+="<li><img src='"+i.imgurl+"'/></li>";
                        })
                        //console.log(tpl);
                        $load.before(tpl);
                        page++;
                        stop = true;
                   }else {
                        $load.text('没有更多了');
                        setTimeout(function(){
                            $load.hide();
                        },400);
                        stop = false;
                   }
                })
            }
        },
        onScroll = function(){//效率更高
            if(!fire) {
                requestAnimationFrame(getList);
                fire = true;
            }
        },
        throttle = function () {//函数节流，效率略低
            clearTimeout(timer);
            timer = setTimeout(function(){
                getList();
            },300);
        };
    $(window).scroll(function(){
        //console.time();
        throttle();
        //onScroll();
        //console.timeEnd();
    });
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
basic.city(data,false);
*/

basic.city = function(strid,reorder){ 
    var html='',self=this,link=[];
    reorder && strid.reverse();
    //console.log(arr);
    for(var i=0;i<strid.length;i++){ 
        link=strid[i]; 
        if(self.diffNum(dataNum,link[0])){
            html+='<tr><td>'+link[0]+'</td><td>'+link[1]+'</td><td>'+link[2]+'</td></tr>'
        }
    }
    return html;
    //document.getElementById('content').innerHTML = html;
}

basic.diffNum = function(num,link){
    for(var k=0;k<num.length;k++){
        return (num[k]==link) ? true : false;
    }
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
获取绝对路径
调用示例
basic.getAbsoluteUrl()('/shirlyzhang');  // "http://imweb.io/shirlyzhang"
*/
basic.getAbsoluteUrl = function() {
    var a;
    return function(url) {
        if(!a) a = document.createElement('a');
        a.href = url;
        return a.href;
    };
};
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
})(jQuery)