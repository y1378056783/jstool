define(function (require, exports, module) {
	/*
	扩展store添加时间过期功能
	示例：
	var user = {
        'name' : 'store.js',
        'url' : 'https://github.com/marcuswestin/store.js'
    };
    store.setExp('user', user, 24*60*1);//1天
    store.setExp('test', '哈哈哈abc123', 60);//1小时
    store.forEachExp(function(key, value) {
        console.log('forEachExp: %o', key, value);
    });
	 */
   "use strict"
	require('//cdn.bootcss.com/store.js/1.3.20/store.min.js');
    /**
     * 判断是否支持localStorage本地存储
     */
    if (!store.enabled) {
        console.error('localStorage is not supported by your browser.')
        return;
    }

    /**
     * 规定日期格式
     * 比如：yyyy年MM月dd日 HH:mm:ss S、yyyy-MM-dd HH:mm:ss S......
     */
    function _checkFormat(fmt) {
        if (!/^y+[\u5e74-]?M+[\u6708-]?(d+)[\u65e5]? H+[\u65f6:]?m+[\u5206:]?s+[\u79d2]?(( S)?)$/.test(fmt)) {
            throw new Error('"' + fmt + '" is not supported by the format.');
            return false;
        }
        return true;
    }

    /**
     * 时间格式化：时间毫秒数、Date对象 ---> 时间字符串 默认格式化格式：yyyy-MM-dd HH:mm:ss
     */
    function _date2str(str, fmt) {
        if (fmt === undefined) {
            fmt = 'yyyy-MM-dd HH:mm:ss';
        }
        _checkFormat(fmt);
        var date;
        if (typeof str === 'number') {
            date = new Date(str);
        } else if (_isValidDate(str)) {
            date = str;
        }
        var o = {
            'M+' : date.getMonth() + 1, // 月
            'd+' : date.getDate(), // 日
            'H+' : date.getHours(), // 小时（24小时制）
            'm+' : date.getMinutes(), // 分
            's+' : date.getSeconds(), // 秒
            'S' : date.getMilliseconds() // 毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '')
                    .substr(4 - RegExp.$1.length));
        }
        for ( var k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
                        : (('00' + o[k]).substr(('' + o[k]).length)));
            }
        }
        return fmt;
    }

    /**
     * 时间格式化：将时间字符串 ---> Date对象 默认格式化格式：yyyy-MM-dd HH:mm:ss，使用中文不能格式化
     */
    function _str2date(str, fmt) {
        if (fmt === undefined) {
            fmt = 'yyyy-MM-dd HH:mm:ss';
        }
        _checkFormat(fmt);
        var o = [ 
            'y+', // 年
            'M+', // 月
            'd+', // 日
            'H+', // 小时（24小时制）
            'm+', // 分
            's+', // 秒
            'S' // 毫秒
        ];
        var date = new Date();
        for (var k = 0; k < o.length; k++) {
            var s = o[k];
            if (new RegExp('(' + s + ')').test(fmt)) {
                var r = RegExp.$1;
                var rl = RegExp.$1.length;
                var si = fmt.indexOf(RegExp.$1);
                var ei = si + rl;
                var n = 0;
                if (r.indexOf('S') > -1) {
                    n = parseInt(str.substr(si));
                    date.setMilliseconds(n); // 设置 Date 对象中的毫秒 (0 ~ 999)。
                } else {
                    n = parseInt(str.substring(si, ei));
                    if (r.indexOf('y') > -1) {
                        date.setFullYear(n); // 设置 Date 对象中的年份（四位数字）。
                    } else if (r.indexOf('M') > -1) {
                        date.setMonth(n - 1); // 设置 Date 对象中月份 (0 ~ 11)。
                    } else if (r.indexOf('d') > -1) {
                        date.setDate(n); // 设置 Date 对象中月的某一天 (1 ~ 31)。
                    } else if (r.indexOf('H') > -1) {
                        date.setHours(n); // 设置 Date 对象中的小时 (0 ~ 23)。
                    } else if (r.indexOf('m') > -1) {
                        date.setMinutes(n); // 设置 Date 对象中的分钟 (0 ~ 59)。
                    } else if (r.indexOf('s') > -1) {
                        date.setSeconds(n); // 设置 Date 对象中的秒钟 (0 ~ 59)。
                    }
                }
            }
        }
        return date;
    }

    /**
     * 转换：毫秒 ---> 天时分秒毫秒
     */
    function _ms2s(ms) {
        var s = parseInt(ms / 1000);// 秒
        var m = 0;// 分
        var h = 0;// 小时
        var d = 0;// 天
        if (s >= 60) {
            m = parseInt(s / 60);
            s = parseInt(s % 60);
            if (m >= 60) {
                h = parseInt(m / 60);
                m = parseInt(m % 60);
                if (h >= 24) {
                    d = parseInt(h / 24);
                    h = parseInt(h % 24);
                }
            }
        }
        var str = '';
        if (s > 0)
            str = '' + parseInt(s) + '\u79d2' + str;
        if (m > 0)
            str = '' + parseInt(m) + '\u5206' + str;
        if (h > 0)
            str = '' + parseInt(h) + '\u5c0f\u65f6' + str;
        if (d > 0)
            str = '' + parseInt(d) + '\u5929' + str;
        return str;
    }

    /**
     * 设置有效时间，返回对象
     */
    function VConstructor(val, exp) {
        var item = {};
        // 创建时间、有效时间
        var createTime = (new Date()).getTime(), effectiveTime;
        if (typeof exp === 'number') {
            effectiveTime = new Date(createTime + exp * 60000);
        } else if (typeof exp === 'string') {
            effectiveTime = _str2date(exp);
        }
        if (effectiveTime && !_isValidDate(effectiveTime)) {
            throw new Error('effectiveTime cannot be converted to a valid Date instance');
        }
        effectiveTime = effectiveTime.getTime();
        item['c'] = _date2str(createTime);
        item['e'] = _date2str(effectiveTime);
        item['t'] = _ms2s(effectiveTime - createTime);
        item['v'] = val;
        return item;
    }

    /**
     * 判断是否是Date对象
     */
    function _isValidDate(date) {
        return Object.prototype.toString.call(date) === '[object Date]'
                && !isNaN(date.getTime());
    }

    /**
     * 判断是否设置了有效时间
     */
    function _hasEffective(item) {
        if (item) {
            if (typeof item === 'object' && 'c' in item && 'e' in item
                    && 'v' in item) {
                return true;
            }
        }
        return false;
    }

    /**
     * 判断是否是有效
     */
    function _isEffective(item) {
        var ntime = (new Date()).getTime();
        return ntime < _str2date(item.e);
    }

    /**
     * 判断key是否是字符串，如果不是，则转换成字符串
     */
    function _keyAsString(key) {
        if (typeof key !== 'string') {
            console.warn(key + ' used as a key, but it is not a string.');
            key = String(key);
        }
        return key;
    }

    /**
     * exp 失效时间：默认为0（单位：分钟）
     */
    store.setExp = function(key, val, exp) {
        key = _keyAsString(key);
        if (exp === undefined) {
            exp = 0;
        }
        store.set(key, new VConstructor(val, exp));
    };
    store.getExp = function(key) {
        key = _keyAsString(key);
        var item = null;
        try {
            item = store.get(key);
        } catch (e) {
            return null;
        }
        if (_hasEffective(item)) {
            if (_isEffective(item)) {
                return item.v;
            } else {
                store.remove(key);
                return null;
            }
        } else {
            return item;
        }
    };
    store.getAllExp = function() {
        var ret = {};
        store.forEachExp(function(key, val) {
            ret[key] = val;
        })
        return ret;
    };
    store.forEachExp = function(callback) {
        var storage = store.getAll();
        for ( var key in storage) {
            callback(key, store.getExp(key));
        }
    };
    module.exports = store;
});