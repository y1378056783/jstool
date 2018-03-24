/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-03-24 15:20:33
 * @version $Id$
 */
var md5 = function() {
    function e() {
        this.hexcase = 0;
        this.b64pad = ""
    }
    var f = e.prototype;
    f.hex_md5 = function(e) {
        return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(e)))
    };
    f.b64_md5 = function(e) {
        return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(e)))
    };
    f.any_md5 = function(e, d) {
        return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(e)), d)
    };
    f.hex_hmac_md5 = function(e, d) {
        return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(d)))
    };
    f.b64_hmac_md5 = function(e, d) {
        return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(d)))
    };
    f.any_hmac_md5 = function(e, d, b) {
        return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(d)), b)
    };
    f.md5_vm_test = function() {
        return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase()
    };
    f.rstr_md5 = function(e) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(e), 8 * e.length))
    };
    f.rstr_hmac_md5 = function(e, d) {
        var b = this.rstr2binl(e);
        16 < b.length && (b = this.binl_md5(b, 8 * e.length));
        for (var a = Array(16), c = Array(16), f = 0; 16 > f; f++) a[f] = b[f] ^ 909522486,
            c[f] = b[f] ^ 1549556828;
        b = this.binl_md5(a.concat(this.rstr2binl(d)), 512 + 8 * d.length);
        return this.binl2rstr(this.binl_md5(c.concat(b), 640))
    };
    f.rstr2hex = function(e) {
        try {
            this.hexcase
        } catch (d) {
            this.hexcase = 0
        }
        for (var b = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", a = "", c, f = 0; f < e.length; f++) c = e.charCodeAt(f),
            a += b.charAt(c >>> 4 & 15) + b.charAt(c & 15);
        return a
    };
    f.rstr2b64 = function(e) {
        try {
            this.b64pad
        } catch (d) {
            this.b64pad = ""
        }
        for (var b = "",
                a = e.length,
                c = 0; c < a; c += 3)
            for (var f = e.charCodeAt(c) << 16 | (c + 1 < a ? e.charCodeAt(c +

                    2) : 0), p = 0; 4 > p; p++) b = 8 * c + 6 * p > 8 * e.length ? b + this.b64pad : b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(f >>> 6 * (3 - p) & 63);
        return b
    };
    f.rstr2any = function(e, d) {
        var b = d.length,
            a, c, f, p, v, u = Array(Math.ceil(e.length / 2));
        for (a = 0; a < u.length; a++) u[a] = e.charCodeAt(2 * a) << 8 | e.charCodeAt(2 * a + 1);
        var n = Math.ceil(8 * e.length / (Math.log(d.length) / Math.log(2))),
            k = Array(n);
        for (c = 0; c < n; c++) {
            v = [];
            for (a = p = 0; a < u.length; a++)
                if (p = (p << 16) + u[a], f = Math.floor(p / b), p -= f * b, 0 < v.length || 0 < f) v[v.length] = f;
            k[c] = p;
            u = v
        }
        b = "";
        for (a = k.length - 1; 0 <= a; a--) b += d.charAt(k[a]);
        return b
    };
    f.str2rstr_utf8 = function(e) {
        for (var d = "",
                b = -1,
                a, c; ++b < e.length;) a = e.charCodeAt(b),
            c = b + 1 < e.length ? e.charCodeAt(b + 1) : 0,
            55296 <= a && 56319 >= a && 56320 <= c && 57343 >= c && (a = 65536 + ((a & 1023) << 10) + (c & 1023), b++),
            127 >= a ? d += String.fromCharCode(a) : 2047 >= a ? d += String.fromCharCode(192 | a >>> 6 & 31, 128 | a & 63) : 65535 >= a ? d += String.fromCharCode(224 | a >>> 12 & 15, 128 | a >>> 6 & 63, 128 | a & 63) : 2097151 >= a && (d += String.fromCharCode(240 | a >>> 18 & 7, 128 | a >>> 12 & 63, 128 | a >>> 6 & 63, 128 | a & 63));
        return d
    };
    f.str2rstr_utf16le = function(e) {
        for (var d = "",
                b = 0; b < e.length; b++) d += String.fromCharCode(e.charCodeAt(b) & 255, e.charCodeAt(b) >>> 8 & 255);
        return d
    };
    f.str2rstr_utf16be = function(e) {
        for (var d = "",
                b = 0; b < e.length; b++) d += String.fromCharCode(e.charCodeAt(b) >>> 8 & 255, e.charCodeAt(b) & 255);
        return d
    };
    f.rstr2binl = function(e) {
        for (var d = Array(e.length >> 2), b = 0; b < d.length; b++) d[b] = 0;
        for (b = 0; b < 8 * e.length; b += 8) d[b >> 5] |= (e.charCodeAt(b / 8) & 255) << b % 32;
        return d
    };
    f.binl2rstr = function(e) {
        for (var d = "",
                b = 0; b < 32 * e.length; b += 8) d += String.fromCharCode(e[b >> 5] >>> b % 32 & 255);
        return d
    };
    f.binl_md5 = function(e, d) {
        e[d >> 5] |= 128 << d % 32;
        e[(d + 64 >>> 9 << 4) + 14] = d;
        for (var b = 1732584193,
                a = -271733879,
                c = -1732584194,
                f = 271733878,
                p = 0; p < e.length; p += 16) var v = b,
            u = a,
            n = c,
            k = f,
            b = this.md5_ff(b, a, c, f, e[p + 0], 7, -680876936),
            f = this.md5_ff(f, b, a, c, e[p + 1], 12, -389564586),
            c = this.md5_ff(c, f, b, a, e[p + 2], 17, 606105819),
            a = this.md5_ff(a, c, f, b, e[p + 3], 22, -1044525330),
            b = this.md5_ff(b, a, c, f, e[p + 4], 7, -176418897),
            f = this.md5_ff(f, b, a, c, e[p + 5], 12, 1200080426),
            c = this.md5_ff(c, f, b, a, e[p + 6], 17, -1473231341),
            a = this.md5_ff(a, c, f, b, e[p + 7], 22, -45705983),
            b = this.md5_ff(b, a, c, f, e[p + 8], 7, 1770035416),
            f = this.md5_ff(f, b, a, c, e[p + 9], 12, -1958414417),
            c = this.md5_ff(c, f, b, a, e[p + 10], 17, -42063),
            a = this.md5_ff(a, c, f, b, e[p + 11], 22, -1990404162),
            b = this.md5_ff(b, a, c, f, e[p + 12], 7, 1804603682),
            f = this.md5_ff(f, b, a, c, e[p + 13], 12, -40341101),
            c = this.md5_ff(c, f, b, a, e[p + 14], 17, -1502002290),
            a = this.md5_ff(a, c, f, b, e[p + 15], 22, 1236535329),
            b = this.md5_gg(b, a, c, f, e[p + 1], 5, -165796510),
            f = this.md5_gg(f, b, a, c, e[p + 6], 9, -1069501632),
            c = this.md5_gg(c, f, b, a, e[p + 11], 14, 643717713),
            a = this.md5_gg(a, c, f, b, e[p + 0], 20, -373897302),
            b = this.md5_gg(b, a, c, f, e[p + 5], 5, -701558691),
            f = this.md5_gg(f, b, a, c, e[p + 10], 9, 38016083),
            c = this.md5_gg(c, f, b, a, e[p + 15], 14, -660478335),
            a = this.md5_gg(a, c, f, b, e[p + 4], 20, -405537848),
            b = this.md5_gg(b, a, c, f, e[p + 9], 5, 568446438),
            f = this.md5_gg(f, b, a, c, e[p + 14], 9, -1019803690),
            c = this.md5_gg(c, f, b, a, e[p + 3], 14, -187363961),
            a = this.md5_gg(a, c, f, b, e[p + 8], 20, 1163531501),
            b = this.md5_gg(b, a, c, f, e[p + 13], 5, -1444681467),
            f = this.md5_gg(f, b, a, c, e[p + 2], 9, -51403784),
            c = this.md5_gg(c, f, b, a, e[p + 7], 14, 1735328473),
            a = this.md5_gg(a, c, f, b, e[p + 12], 20, -1926607734),
            b = this.md5_hh(b, a, c, f, e[p + 5], 4, -378558),
            f = this.md5_hh(f, b, a, c, e[p + 8], 11, -2022574463),
            c = this.md5_hh(c, f, b, a, e[p + 11], 16, 1839030562),
            a = this.md5_hh(a, c, f, b, e[p + 14], 23, -35309556),
            b = this.md5_hh(b, a, c, f, e[p + 1], 4, -1530992060),
            f = this.md5_hh(f, b, a, c, e[p + 4], 11, 1272893353),
            c = this.md5_hh(c, f, b, a, e[p + 7], 16, -155497632),
            a = this.md5_hh(a, c, f, b, e[p + 10], 23, -1094730640),
            b = this.md5_hh(b, a, c, f, e[p + 13], 4, 681279174),
            f = this.md5_hh(f, b, a, c, e[p + 0], 11, -358537222),
            c = this.md5_hh(c, f, b, a, e[p + 3], 16, -722521979),
            a = this.md5_hh(a, c, f, b, e[p + 6], 23, 76029189),
            b = this.md5_hh(b, a, c, f, e[p + 9], 4, -640364487),
            f = this.md5_hh(f, b, a, c, e[p + 12], 11, -421815835),
            c = this.md5_hh(c, f, b, a, e[p + 15], 16, 530742520),
            a = this.md5_hh(a, c, f, b, e[p + 2], 23, -995338651),
            b = this.md5_ii(b, a, c, f, e[p + 0], 6, -198630844),
            f = this.md5_ii(f, b, a, c, e[p + 7], 10, 1126891415),
            c = this.md5_ii(c, f, b, a, e[p + 14], 15, -1416354905),
            a = this.md5_ii(a, c, f, b, e[p + 5], 21, -57434055),
            b = this.md5_ii(b, a, c, f, e[p + 12], 6, 1700485571),
            f = this.md5_ii(f, b, a, c, e[p + 3], 10, -1894986606),
            c = this.md5_ii(c, f, b, a, e[p + 10], 15, -1051523),
            a = this.md5_ii(a, c, f, b, e[p + 1], 21, -2054922799),
            b = this.md5_ii(b, a, c, f, e[p + 8], 6, 1873313359),
            f = this.md5_ii(f, b, a, c, e[p + 15], 10, -30611744),
            c = this.md5_ii(c, f, b, a, e[p + 6], 15, -1560198380),
            a = this.md5_ii(a, c, f, b, e[p + 13], 21, 1309151649),
            b = this.md5_ii(b, a, c, f, e[p + 4], 6, -145523070),
            f = this.md5_ii(f, b, a, c, e[p + 11], 10, -1120210379),
            c = this.md5_ii(c, f, b, a, e[p + 2], 15, 718787259),
            a = this.md5_ii(a, c, f, b, e[p + 9], 21, -343485551),
            b = this.safe_add(b, v),
            a = this.safe_add(a, u),
            c = this.safe_add(c, n),
            f = this.safe_add(f, k);
        return [b, a, c, f]
    };
    f.md5_cmn = function(e, d, b, a, c, f) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(d, e), this.safe_add(a, f)), c), b)
    };
    f.md5_ff = function(e, d, b, a, c, f, p) {
        return this.md5_cmn(d & b | ~d & a, e, d, c, f, p)
    };
    f.md5_gg = function(e, d, b, a, c, f, p) {
        return this.md5_cmn(d & a | b & ~a, e, d, c, f, p)
    };
    f.md5_hh = function(e, d, b, a, c, f, p) {
        return this.md5_cmn(d ^ b ^ a, e, d, c, f, p)
    };
    f.md5_ii = function(e, d, b, a, c, f, p) {
        return this.md5_cmn(b ^ (d | ~a), e, d, c, f, p)
    };
    f.safe_add = function(e, d) {
        var b = (e & 65535) + (d & 65535);
        return (e >> 16) + (d >> 16) + (b >> 16) << 16 | b & 65535
    };
    f.bit_rol = function(e, d) {
        return e << d | e >>> 32 - d
    };
    return e
}();
md5.prototype.__class__ = "md5";
