/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-02-10 10:08:52
 * @version $Id$
消息提示
 #tip{
    position: fixed;
    border-radius:.092593rem;
    font-size:.407407rem;
    width: 60%;
    padding:.277778rem 0;
    background-color:rgba(0,0,0,.8);
    top:20%;
    left: 50%;
    margin-left:-30%;
    color:#ffffff;
}
<div id="tip"></div>
<form onsubmit="return false;" id="signForm">
    <input type="text" hidden name="fromflag" value="6">
    <p><input class="t-font" type="number" name="mobile" id="phone" oninput="if(value.length>11)value=value.slice(0,11)" placeholder="请输入手机号"></p>
    <p><input class="t-font" type="password" name="password" id="pwd" placeholder="请输入密码"></p>
    <p><input class="t-font" type="number" name="mobilecode" id="code" placeholder="请输入验证密码"><input class="text-center" type="button" id="verify" value="点击获取"></p>
    <button id="send" class="t-font text-center">确认</button>
</form>
<div id="tip" class="visHide"></div>
 调用案例：
 $('#verify').on('touchstart',function(){
    var self = $(this);
    if(!self.attr('disabled')){
        verify(true,function(phone){//获取验证码
            //console.log(phone+'获取验证码');
            $.post("/wapauth/sendmobilecode",{'mobile':phone,'codetype':1},function(res){  
                errMsg(res.sendmsg);
                if(res.sendstatus==200){//已注册
                    count(60,self);
                }
            });
        })
    }
})
$("#send").on('touchstart',function(){
    verify(false,function(){//表单提交    
        $.post("/wapauth/lotteryregister",$("#signForm").serialize(),function(res){  
                errMsg(res.sendmsg);
                localStorage.prizenum = res.data.num;
                if(res.sendstatus==200){
                    //getCode(res.data.num);
                }

        });
    })
});

 */

function errMsg(txt){
    var $tip = $("#tip"),$verify = $('#verify');
    $verify.attr('disabled',true);
    $tip.removeClass('visHide').text(txt);
    setTimeout(function(){
        $verify.removeAttr('disabled');
        $tip.addClass('visHide');
    },800);
};
function version(){
    var ua = navigator.userAgent;
    if(/MicroMessenger/gi.test(ua)){//微信
        return 0
    }else if(ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1){
        //Android
        return 1
    }
}
function count(time,obj){
    var curtime = time || 80,
    timer=setInterval(countDown,1000);
    function countDown(){
        var inittime=0,ctime;
        if(inittime < curtime){
            curtime--;
            ctime=curtime<10?'0'+curtime:curtime;
            obj.val(ctime).attr('disabled',true);
        }else{
            obj.val('重新发送').removeAttr('disabled');
           clearInterval(timer);
        }
    }
}
function verify(send,fn){
    var phoneExp = /^1\d{10}$/,
        pwdExp = /^\w{6,}$/,
        msg = {
            'ptxt':'手机号不得为空',
            'pformat':'手机格式错误',
            'pwdtxt':'密码不得为空',
            'pwdbit':'密码不得少于6位',
            'noetpwd':'确认密码不得为空',
            'vertxt':'验证码不得为空'
        },
        codeVal = $('#code').val().replace(/\s+/g,""),
        pwdVal = $('#pwd').val().replace(/\s+/g,""),
        phoneVal = $('#phone').val().replace(/\s+/g,"");
    if(send){//发送验证码验证
       if(phoneVal.length == 0){
            errMsg(msg.ptxt);
            return false;
        }else if(!phoneExp.test(phoneVal)){
            errMsg(msg.pformat);
            return false;
        }else{
            fn(phoneVal);
        } 
    }else{//表单验证
        if(phoneVal.length == 0){
            errMsg(msg.ptxt);
            return false;
        }else if(!phoneExp.test(phoneVal)){
            errMsg(msg.pformat);
            return false;
        }else if(pwdVal.length == 0){
            errMsg(msg.pwdtxt);
            return false;
        }else if(!pwdExp.test(pwdVal)){
            errMsg(msg.pwdbit);
            return false;
        }else if(codeVal.length == 0){
            errMsg(msg.vertxt);
            return false;
        }else{
            fn();
        } 
    }
    
};