/*
*滑动验证插件
*此插件适用于pc端
前端示例
<link rel="stylesheet" type="text/css" href="jquery.drag.css">
<div class="box" data-draglock='false' title="draglock值为true时禁用此功能"></div>
<input type="button" name="verify" value="提交" id="verify">
<p id="txt"></p>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="jquery.drag.js"></script>
<script type="text/javascript">

  var yzmBtnStatus = false,
      encryption = "";
    $('.box').draglock({
        width: 241, // width
        height: 34, // height
        keyUrl: "index.php?act=getCode",
        callback: function(result, key) {
            //console.log(result, key);
            yzmBtnStatus = result;
            if(result) {
                //$("#yiyuan-send").removeClass("disabled");
              encryption = key;
            }
        }
    });
    $('#verify').on('click',function(){
      if(!yzmBtnStatus) return;
      $.post("index.php?act=verify",{code:encryption},function(res){
        //console.log(res);
        $('#txt').text(res.codes)
      })
    })
</script>
后端示例
session_start();
//随机数  
function get_random2($length = 4) {  
    $min = pow(10 , ($length - 1));  
    $max = pow(10, $length) - 1;  
    return mt_rand($min, $max);  
}
if($_GET['act']=='getCode'){
  header('Content-Type: text/plain'); //返回纯文本格式
  $ran = get_random2();
  $_SESSION["rand"]=$ran;
  echo $ran;
}
if($_GET['act']=='verify'){
  header('Content-Type: application/json'); //返回json格式
  $code = null;
  $key='asdekkdkdkekeked';//与插件中的key保持一致
  $ran = $_SESSION["rand"];
  $result=md5($key.$ran);
  if($_POST['code']==$result){
    $code = array('msg'=>'验证通过','code'=>'true');
  }else{
    $code = array('msg'=>'验证码不匹配','code'=>'false');
  }
  echo json_encode($code);
}
 */
(function ($, doc) {
  var options = function (ele, s) {
    this.ele = ele;
    this.defaults = {
      width: 300,
      height: 34,
      draglockBg: "#e8e8e8",
      color: "#666",
      fontSize: 12,
      privateKey: "asdekkdkdkekeked",
      bgColor: "#7ac23c",
      textMsg: "请按住滑块，拖动到最右边",
      successMsg: "验证成功",
      loadingMsg: "加载中...",
      errorMag: "验证失败，点击重试",
      successColor: "#fff",
      keyUrl: "/",
      time: 160,
      callback: function (t) {}
    };
    this.opts = $.extend({}, this.defaults, s);
    this.init()
  };
  options.prototype = {
    init: function () {
      this.result = false;
      this.key = "";
      this.draglockBtn_left = 0;
      this.maxLeft = this.opts.width - this.opts.height;
      this.isMobile = $(window).width()<640 ? true : false;//pc端与移动端事件类型切换
      this.render();
      if(this.isMobile){
        this.eTypeStart = "touchstart";
        this.eTypeMove = "touchmove";
        this.eTypeUp = "touchend";
      }else{
        this.eTypeStart = "mousedown";
        this.eTypeMove = "mousemove";
        this.eTypeUp = "mouseup";
      }
      this.eventBind()
    },
    render: function () {
      var html = '<div class="ui-draglock-wrap">' +
        '<div class="ui-draglock-text ui-draglock-no-select ui-draglock-textMsg">' +
          this.opts.textMsg +
        "</div>" +
        '<div class="ui-draglock-btn init ui-draglock-no-select"></div>' +
        '<div class="ui-draglock-bg"></div>' +
      "</div>";
      this.ele.html(html);
      this.initStatus()
    },
    initStatus: function () {
      var This = this;
      var ele = this.ele;
      this.draglock = ele.find(".ui-draglock-wrap");
      this.draglockBtn = ele.find(".ui-draglock-btn");
      this.bgColor = ele.find(".ui-draglock-bg");
      this.draglockText = ele.find(".ui-draglock-text");
      this.draglock.css({
        width: This.opts.width,
        height: This.opts.height,
        backgroundColor: This.opts.draglockBg
      });
      this.draglockBtn.css({
        width: This.opts.height,
        height: This.opts.height,
        lineHeight: This.opts.height + "px"
      });
      this.bgColor.css({
        height: This.opts.height,
        backgroundColor: This.opts.bgColor
      });
      this.draglockText.css({
        lineHeight: This.opts.height + "px",
        fontSize: This.opts.fontSize,
        color: This.opts.color
      })
    },
    restore: function () {
      var This = this;
      var time = t.opts.time;
      this.result = false;
      this.key = "";
      this.initStatus();
      this.draglockBtn.removeClass("success").animate({ left: 0 }, time);
      this.bgColor.animate({ width: 0 }, time, function () {
        This.draglockText.text(This.opts.textMsg)
      })
    },
    eventBind: function () {
      var This = this;
      this.ele.on(this.eTypeStart,".ui-draglock-btn", function (element) {//"mousedown"
        if (This.result) return;
        This.draglockMousedown(element);
      })
    },
    draglockMousedown: function (element) {
      var This = this,
          clientX = null;
      if(this.isMobile){
        clientX = element.originalEvent.touches[0].clientX;
      }else{
        clientX = element.clientX;
      }
      var leftX = clientX - this.draglockBtn.offset().left;
      This.draglockMousemove(clientX, leftX);
      This.draglockMouseup();
    },
    draglockMousemove: function (i, e) {
      var This = this;
      $(doc).on(this.eTypeMove+".draglock", function (element) {//"mousemove.draglock"
        if(This.isMobile){
          This.draglockBtn_left = element.originalEvent.touches[0].clientX - i - e;
        }else{
          This.draglockBtn_left = element.clientX - i - e;
        }
        if (This.draglockBtn_left < 0) return;

        if (This.draglockBtn_left > This.maxLeft) {
          This.draglockBtn_left = This.maxLeft
        }

        This.draglockBtn.css("left",This.draglockBtn_left);
        This.bgColor.width(This.draglockBtn_left);
      })
    },
    draglockMouseup: function () {
      var This = this;
      $(doc).on(this.eTypeUp+".draglock", function () {//"mouseup.draglock"
        if (This.draglockBtn_left != This.maxLeft) {
          This.draglockBtn_left = 0
        } else {
          This.getKey();
        }
        This.draglockBtn.animate({
          left: This.draglockBtn_left
        }, This.opts.time);

        This.bgColor.animate({
          width: This.draglockBtn_left
        }, This.opts.time);

        $(this).off(This.eTypeMove+".draglock "+This.eTypeUp+".draglock");//"mousemove.draglock mouseup.draglock"
      })
    },
    getKey: function () {
      var This = this;
      $.ajax({
        type: "post",
        url: This.opts.keyUrl,
        dataType: 'text',
        timeout: 2000,
        beforeSend: function() {
          This.ele.find(".ui-draglock-text")
            .text(This.opts.loadingMsg)
            .css({color: This.opts.successColor});
        },
        success:function(data){
          This.ele.find(".ui-draglock-text")
            .text(This.opts.successMsg)
            .css({color: This.opts.successColor});

          This.ele.find(".ui-draglock-btn").addClass("success");
          This.ele.find(".ui-draglock-bg").css({
            backgroundColor: This.opts.bgColor
          });
          This.ele.find(".ui-draglock-textMsg")
            .removeClass("ui-draglock-textMsg");
          This.key = $.md5(This.opts.privateKey + data);
          This.result = true;
          if (This.opts.callback && typeof This.opts.callback === "function") {
            This.opts.callback(This.result, This.key);
          }
        },
        error:function(xhr,type){
          This.ele.find(".ui-draglock-bg").css({
            backgroundColor: "#ff714b"
          });
          This.ele.find(".ui-draglock-text")
            .text(This.opts.errorMag)
            .css({
              color: This.opts.successColor,
              cursor: "pointer"
            })
            .on("click", function(){
              This.getKey();
            });
        },
        async: false
      });
    }
  };
  $.fn.draglock = function (i) {
    return this.each(function () {
      var This = $(this);
      var data = This.data("draglock");
      if (!data) {
        data = new options(This,i);
        This.data("draglock", data)
      } 
      /*if (typeof i === "string") {
        //console.log(typeof data);
        data[i]()
      }*/
    })
  }
})(jQuery, document);
(function($){
  var rotateLeft = function(lValue, iShiftBits) {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
  }
  var addUnsigned = function(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = (lX & 0x80000000);
    lY8 = (lY & 0x80000000);
    lX4 = (lX & 0x40000000);
    lY4 = (lY & 0x40000000);
    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
    if (lX4 | lY4) {
      if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
      else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
    } else {
      return (lResult ^ lX8 ^ lY8);
    }
  }
  var F = function(x, y, z) {
    return (x & y) | ((~ x) & z);
  }
  var G = function(x, y, z) {
    return (x & z) | (y & (~ z));
  }
  var H = function(x, y, z) {
    return (x ^ y ^ z);
  }
  var I = function(x, y, z) {
    return (y ^ (x | (~ z)));
  }
  var FF = function(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };
  var GG = function(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };
  var HH = function(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };
  var II = function(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };
  var convertToWordArray = function(string) {
    var lWordCount;
    var lMessageLength = string.length;
    var lNumberOfWordsTempOne = lMessageLength + 8;
    var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - (lNumberOfWordsTempOne % 64)) / 64;
    var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
    var lWordArray = Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = (lByteCount % 4) * 8;
      lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
      lByteCount++;
    }
    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
    lBytePosition = (lByteCount % 4) * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  };
  var wordToHex = function(lValue) {
    var WordToHexValue = "", WordToHexValueTemp = "", lByte, lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = (lValue >>> (lCount * 8)) & 255;
      WordToHexValueTemp = "0" + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
    }
    return WordToHexValue;
  };
  var uTF8Encode = function(string) {
    string = string.replace(/\x0d\x0a/g, "\x0a");
    var output = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        output += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        output += String.fromCharCode((c >> 6) | 192);
        output += String.fromCharCode((c & 63) | 128);
      } else {
        output += String.fromCharCode((c >> 12) | 224);
        output += String.fromCharCode(((c >> 6) & 63) | 128);
        output += String.fromCharCode((c & 63) | 128);
      }
    }
    return output;
  };
  $.extend({
    md5: function(string) {
      var x = Array();
      var k, AA, BB, CC, DD, a, b, c, d;
      var S11=7, S12=12, S13=17, S14=22;
      var S21=5, S22=9 , S23=14, S24=20;
      var S31=4, S32=11, S33=16, S34=23;
      var S41=6, S42=10, S43=15, S44=21;
      string = uTF8Encode(string);
      x = convertToWordArray(string);
      a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
      for (k = 0; k < x.length; k += 16) {
        AA = a; BB = b; CC = c; DD = d;
        a = FF(a, b, c, d, x[k+0],  S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k+1],  S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k+2],  S13, 0x242070DB);
        b = FF(b, c, d, a, x[k+3],  S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k+4],  S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k+5],  S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k+6],  S13, 0xA8304613);
        b = FF(b, c, d, a, x[k+7],  S14, 0xFD469501);
        a = FF(a, b, c, d, x[k+8],  S11, 0x698098D8);
        d = FF(d, a, b, c, x[k+9],  S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k+10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k+11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k+12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k+13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k+14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k+15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k+1],  S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k+6],  S22, 0xC040B340);
        c = GG(c, d, a, b, x[k+11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k+0],  S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k+5],  S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k+10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k+15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k+4],  S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k+9],  S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k+14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k+3],  S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k+8],  S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k+13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k+2],  S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k+7],  S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k+12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k+5],  S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k+8],  S32, 0x8771F681);
        c = HH(c, d, a, b, x[k+11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k+14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k+1],  S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k+4],  S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k+7],  S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k+10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k+13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k+0],  S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k+3],  S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k+6],  S34, 0x4881D05);
        a = HH(a, b, c, d, x[k+9],  S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k+12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k+15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k+2],  S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k+0],  S41, 0xF4292244);
        d = II(d, a, b, c, x[k+7],  S42, 0x432AFF97);
        c = II(c, d, a, b, x[k+14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k+5],  S44, 0xFC93A039);
        a = II(a, b, c, d, x[k+12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k+3],  S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k+10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k+1],  S44, 0x85845DD1);
        a = II(a, b, c, d, x[k+8],  S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k+15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k+6],  S43, 0xA3014314);
        b = II(b, c, d, a, x[k+13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k+4],  S41, 0xF7537E82);
        d = II(d, a, b, c, x[k+11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k+2],  S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k+9],  S44, 0xEB86D391);
        a = addUnsigned(a, AA);
        b = addUnsigned(b, BB);
        c = addUnsigned(c, CC);
        d = addUnsigned(d, DD);
      }
      var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
      return tempValue.toLowerCase();
    }
  });
})(jQuery);
