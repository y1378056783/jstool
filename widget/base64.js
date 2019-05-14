export default class Base64 {
  constructor(){
    // private property 
    this.arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8',
      '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
      'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
      'Z', '*', '!', '/', '+', '=', '#'];
    this.arrlen = this.arr.length;
     
    this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  }
  
  decode(words) {
    var first = words[0],
        len = words.length,
        end = words[len - 1],
        strnum = '',
        endstr = '',
        output = null;
    if (first === 'x' && end === 'y') {
      var tem = words.slice(1, len - 1),
          temlist = tem.split('_');
      temlist.forEach((el, i) => {
        strnum = parseInt(el) - this.arr[i % this.arrlen].charCodeAt();
        endstr += String.fromCharCode(strnum)
      })
      
      output = JSON.parse(this.decompression(endstr))
    }
    return output;
  }
  /**
   * 编码逻辑顺序
   *  ·将传入参数通过json.stringify转成字符串
   *  ·用base64进行转译再分割生成数组
   *  ·遍历上一步的数组混淆生成对应的ascii码
   *  ·用join连接数组并加上头尾的字符串
   */
  encode(words) {
    var strs = JSON.stringify(words),
      temlist = this.compression(strs).split(''),
        strnum = [],
        endstr = '';
    temlist.forEach((el, i) => {
      strnum.push(el.charCodeAt() + this.arr[i % this.arrlen].charCodeAt())
    })
    endstr = `x${strnum.join('_')}y`;
    
    return endstr;
  }
  // public method for encoding  
  compression(input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = this._utf8_encode(input);
    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output = output +
        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
    }
    return output;
  }

  // public method for decoding  
  decompression(input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = this._utf8_decode(output);
    return output;
  }

  // private method for UTF-8 encoding  
  _utf8_encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }

    }
    return utftext;
  }

  // private method for UTF-8 decoding  
  _utf8_decode (utftext) {
    var string = "";
    var i = 0,
        c =0,
        c1 = 0,
        c2 = 0,
        c3 = 0;
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }
    }
    return string;
  }
}


/*var base = new Base64();

function encode(str) {
  return base.encode(str);
}
function decode(str) {
  return base.decode(str);
}

function safeEncode(str) {
  return encode(str).replace(/[\+=\/]/g, function (c) {
    switch (c) {
      case '+': return '.';
      case '=': return '-';
      case '/': return '_';
    }
  })
}


export default {
  encode,
  decode
  //safeEncode,
}*/