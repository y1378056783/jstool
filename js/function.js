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
function countDown(e, t, n, a) {
    var i = 1e3 * (t - e)
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
        countDown(++e, t, n, a)
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
 operaNum('#timeNum','#plus','#reduce','color-red',-1);
 operaNum('#timeNum','#plus','#reduce','color-red',1);
 调用示例：
$('#plus').on('tap',function(){
    var price=$('#money').attr('data-def');
    if (! $(this).hasClass('color-red')){return false}
    var num = operaNum('#timeNum','#plus','#reduce','color-red',1);
    $('#money').text(num*price);
    freetime();//请求数据
})
 */
function operaNum(numObj, incObj, decObj, curStyle, operation) {
    var $numObj = $(numObj), $incObj = $(incObj), $decObj = $(decObj);
    var maxNum = $numObj.attr('data-max'), minNum = $numObj.attr('data-min');
    var curNum = $numObj.val();
    if (isNull(operation)) {
        handler = function(i){return ++i};
    } else if (! isNaN(operation)) {
        handler = function(i){return parseInt(i) + operation};
    } else {
        handler = operation;
    }
    $incObj.addClass(curStyle);
    $decObj.addClass(curStyle);
    curNum = handler(curNum);
    console.log(curNum);
    if (curNum >= maxNum) {
        curNum = maxNum;
        $incObj.removeClass(curStyle);
    } else if (curNum <= minNum) {
        curNum = minNum; 
        $decObj.removeClass(curStyle);
    }
    $numObj.val(curNum);
    return curNum;
}
/*
下拉加载更多
<ul>
    <li></li>
    <p id="loading">加载中...</p>
</ul>
调用案例
new getMore('http://api.miduo.com/getcode')
*/
function getMore(surl){
    this.page=2;
    this.stop=true;
    this.timer=null;
    this.url=surl;
    this.init();
}
getMore.prototype={
    isload:function(){
        var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
        if(($(document).height()-$(window).height()/2)<= totalheight){//达到加载条件
            return true
        }else{
            return false
        }
    },
    getList:function (){
        var self = this;
        $("#Loading").show();
        if(this.stop==true && this.isload()){
            this.stop=false;
            $.getJSON(this.url+'&page='+page, function (data) {
                if (data.code > 0) {
                    $("#Loading").before(data.res);
                    self.page ++;
                    self.stop = true;
               }else {
                    $("#Loading").html('没有更多了');
                    self.stop = false;
               }
            })
        }
    },
    dbcRefresh:function () {//函数节流
        var self = this;
        clearTimeout(self.timer);
        self.timer = setTimeout(self.getList, 100);
    },
    init:function(){
        var self = this;
        $(window).scroll(self.dbcRefresh);
    }
}


function showLoading(content, time) {
    if (typeof(time) == 'undefined' || time == '') {
        var time = 2000; 
    }
    if (content == '') {
        var content = '加载中...';
    }
    var el =$.loading({ content:content, })
    setTimeout(function(){ el.loading("hide"); }, time);
}

function dialog(content, btn, callbackYes, callbackNo){
    if (isNull(content)) {
        content = '确认要进行改操作吗';
    }
    if (isNull(btn)) {
        btn = ['确认', '取消'];
    }
    layer.open({
        title: '温馨提示',
        content: content,
        btn: btn,
        yes: callbackYes,
        no: callbackNo,
    });
}

function dialog_warn(content, time, callbackEnd) {
    var config = {content:content,title:['温馨提示'],};
    //var config = {content:content,style:'border:none; background-color:rgba(0, 0, 0, 0.52); color:#fff;'};
    if(! isNull(time)) {
        config.time =time;
    }
    if (callbackEnd != 'undefined') {
        config.end = callbackEnd;
    }
    layer.open(config);
}

function isNull(obj){
    return obj == '' || obj == 'undefined' || obj == null;
}
