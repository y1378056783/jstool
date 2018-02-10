var jssdk = {
    debug : false,
    link : '',
};
jssdk.init = function(){
    $.ajax({type:"get", url:URL.base+"?ac=ajax&do=jssdk",dataType:"json", async :false, success:function(data) {
        if (data.code > 0) {
            jssdk.link = data.msg.url;
            wx.config({
                debug     : jssdk.debug,
                appId     : data.msg.appId,
                timestamp : data.msg.timestamp,
                nonceStr  : data.msg.nonceStr,
                signature : data.msg.signature,
                jsApiList : ["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"]
            });
        }
    }});
};
jssdk.share = function(title, desc, link, imgUrl, type, dataUrl) {
    if (link == '') {
        link = this.link;
    }
    wx.ready(function(){
        wx.onMenuShareTimeline({
            title   : title,
            link    : link,
            imgUrl  : imgUrl,
            success : function () { },
            cancel  : function () { }
        });
        wx.onMenuShareAppMessage({
            title   : title,
            desc    : desc,
            link    : link,
            imgUrl  : imgUrl,
            type    : type,
            dataUrl : dataUrl,
            success : function () { },
            cancel  : function () { }
        });
        wx.onMenuShareQQ({
            title   : title,
            desc    : desc,
            link    : link,
            imgUrl  : imgUrl,
            success : function () { },
            cancel  : function () {  }
        });
        wx.onMenuShareWeibo({
            title   : title,
            desc    : desc,
            link    : link,
            imgUrl  : imgUrl,
            success : function () { },
            cancel  : function () { }
        });
    });
};
jssdk.init();
