/*
*egret核心引擎
*包含以下模块
*res资源库
*tween缓动库
*gui库
*socket通信库
 */
var egret; 
(function(e) {
	e.egret_string_code = {};
	e.egret_string_code[ - 1] = "不存在的stringId:{0}";
	e.egret_string_code[1E3] = "Browser.isMobile接口参数已经变更，请尽快调整用法为 egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE";
	e.egret_string_code[1001] = "该方法目前不应传入 resolutionPolicy 参数，请在 docs/1.0_Final_ReleaseNote中查看如何升级";
	e.egret_string_code[1002] = "egret.Ticker是框架内部使用的单例，不允许在外部实例化，计时器请使用egret.Timer类！";
	e.egret_string_code[1003] = "Ticker#setTimeout方法即将废弃,请使用egret.setTimeout";
	e.egret_string_code[1004] = "ExternalInterface调用了js没有注册的方法: {0}";
	e.egret_string_code[1005] = "设置了已经存在的blendMode: {0}";
	e.egret_string_code[1006] = "child不在当前容器内";
	e.egret_string_code[1007] = "提供的索引超出范围";
	e.egret_string_code[1008] = "child未被addChild到该parent";
	e.egret_string_code[1009] = "设置了已经存在的适配模式:{0}";
	e.egret_string_code[1010] = "addEventListener侦听函数不能为空";
	e.egret_string_code[1011] = 'BitmapText找不到文字所对应的纹理:"{0}"';
	e.egret_string_code[1012] = "egret.BitmapTextSpriteSheet已废弃，请使用egret.BitmapFont代替。";
	e.egret_string_code[1013] = "TextField.setFocus 没有实现";
	e.egret_string_code[1014] = "Ease不能被实例化";
	e.egret_string_code[1015] = "xml not found!";
	e.egret_string_code[1016] = "{0}已经废弃";
	e.egret_string_code[1017] = "JSON文件格式不正确: {0}\ndata: {1}";
	e.egret_string_code[1018] = "egret_html5_localStorage.setItem保存失败,key={0}&value={1}";
	e.egret_string_code[1019] = "网络异常:{0}";
	e.egret_string_code[1020] = "无法初始化着色器";
	e.egret_string_code[1021] = "当前浏览器不支持webgl";
	e.egret_string_code[1022] = "{0} ArgumentError";
	e.egret_string_code[1023] = "此方法在ScrollView内不可用!";
	e.egret_string_code[1024] = "使用了尚未实现的ScaleMode";
	e.egret_string_code[1025] = "遇到文件尾";
	e.egret_string_code[1026] = "EncodingError! The code point {0} could not be encoded.";
	e.egret_string_code[1027] = "DecodingError";
	e.egret_string_code[1028] = "调用了未配置的注入规则:{0}。 请先在项目初始化里配置指定的注入规则，再调用对应单例。";
	e.egret_string_code[1029] = "Function.prototype.bind - what is trying to be bound is not callable";
	e.egret_string_code[1030] = "该API已废弃";
	e.egret_string_code[1031] = "setVolume已废弃，请使用this.volume = value代替";
	e.egret_string_code[1032] = "getVolume已废弃，请使用this.volume代替";
	e.egret_string_code[2E3] = "RES.createGroup()传入了配置中不存在的键值: {0}";
	e.egret_string_code[2001] = 'RES加载了不存在或空的资源组:"{0}"';
	e.egret_string_code[3E3] = "主题配置文件加载失败: {0}";
	e.egret_string_code[3001] = "找不到主题中所配置的皮肤类名: {0}";
	e.egret_string_code[3002] = '索引:"{0}"超出集合元素索引范围';
	e.egret_string_code[3003] = "在此组件中不可用，若此组件为容器类，请使用";
	e.egret_string_code[3004] = "addChild(){0}addElement()代替";
	e.egret_string_code[3005] = "addChildAt(){0}addElementAt()代替";
	e.egret_string_code[3006] = "removeChild(){0}removeElement()代替";
	e.egret_string_code[3007] = "removeChildAt(){0}removeElementAt()代替";
	e.egret_string_code[3008] = "setChildIndex(){0}setElementIndex()代替";
	e.egret_string_code[3009] = "swapChildren(){0}swapElements()代替";
	e.egret_string_code[3010] = "swapChildrenAt(){0}swapElementsAt()代替";
	e.egret_string_code[3011] = '索引:"{0}"超出可视元素索引范围';
	e.egret_string_code[3012] = "此方法在Scroller组件内不可用!";
	e.egret_string_code[3013] = "UIStage是GUI根容器，只能有一个此实例在显示列表中！";
	e.egret_string_code[4E3] = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)";
	e.egret_string_code[4001] = "Abstract class can not be instantiated!";
	e.egret_string_code[4002] = "Unnamed data!";
	e.egret_string_code[4003] = "Nonsupport version!";
	e.egret_string_code[3100] = "当前浏览器不支持WebSocket";
	e.egret_string_code[3101] = "请先连接WebSocket";
	e.egret_string_code[3102] = "请先设置type为二进制类型"
})(egret || (egret = {}));
 (function(e) {
	e.egret_string_code = {};
	e.egret_string_code[ - 1] = "不存在的stringId:{0}";
	e.egret_string_code[1E3] = "Browser.isMobile接口参数已经变更，请尽快调整用法为 egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE";
	e.egret_string_code[1001] = "该方法目前不应传入 resolutionPolicy 参数，请在 docs/1.0_Final_ReleaseNote中查看如何升级";
	e.egret_string_code[1002] = "egret.Ticker\u662f\u6846\u67b6\u5185\u90e8\u4f7f\u7528\u7684\u5355\u4f8b\uff0c\u4e0d\u5141\u8bb8\u5728\u5916\u90e8\u5b9e\u4f8b\u5316\uff0c\u8ba1\u65f6\u5668\u8bf7\u4f7f\u7528egret.Timer\u7c7b\uff01";
	e.egret_string_code[1003] = "Ticker#setTimeout\u65b9\u6cd5\u5373\u5c06\u5e9f\u5f03,\u8bf7\u4f7f\u7528egret.setTimeout";
	e.egret_string_code[1004] = "ExternalInterface\u8c03\u7528\u4e86js\u6ca1\u6709\u6ce8\u518c\u7684\u65b9\u6cd5: {0}";
	e.egret_string_code[1005] = "\u8bbe\u7f6e\u4e86\u5df2\u7ecf\u5b58\u5728\u7684blendMode: {0}";
	e.egret_string_code[1006] = "child\u4e0d\u5728\u5f53\u524d\u5bb9\u5668\u5185";
	e.egret_string_code[1007] = "\u63d0\u4f9b\u7684\u7d22\u5f15\u8d85\u51fa\u8303\u56f4";
	e.egret_string_code[1008] = "child\u672a\u88abaddChild\u5230\u8be5parent";
	e.egret_string_code[1009] = "\u8bbe\u7f6e\u4e86\u5df2\u7ecf\u5b58\u5728\u7684\u9002\u914d\u6a21\u5f0f:{0}";
	e.egret_string_code[1010] = "addEventListener\u4fa6\u542c\u51fd\u6570\u4e0d\u80fd\u4e3a\u7a7a";
	e.egret_string_code[1011] = 'BitmapText\u627e\u4e0d\u5230\u6587\u5b57\u6240\u5bf9\u5e94\u7684\u7eb9\u7406:"{0}"';
	e.egret_string_code[1012] = "egret.BitmapTextSpriteSheet\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528egret.BitmapFont\u4ee3\u66ff\u3002";
	e.egret_string_code[1013] = "TextField.setFocus \u6ca1\u6709\u5b9e\u73b0";
	e.egret_string_code[1014] = "Ease\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316";
	e.egret_string_code[1015] = "xml not found!";
	e.egret_string_code[1016] = "{0}\u5df2\u7ecf\u5e9f\u5f03";
	e.egret_string_code[1017] = "JSON\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e: {0}\ndata: {1}";
	e.egret_string_code[1018] = "egret_html5_localStorage.setItem\u4fdd\u5b58\u5931\u8d25,key={0}&value={1}";
	e.egret_string_code[1019] = "\u7f51\u7edc\u5f02\u5e38:{0}";
	e.egret_string_code[1020] = "\u65e0\u6cd5\u521d\u59cb\u5316\u7740\u8272\u5668";
	e.egret_string_code[1021] = "\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301webgl";
	e.egret_string_code[1022] = "{0} ArgumentError";
	e.egret_string_code[1023] = "\u6b64\u65b9\u6cd5\u5728ScrollView\u5185\u4e0d\u53ef\u7528!";
	e.egret_string_code[1024] = "\u4f7f\u7528\u4e86\u5c1a\u672a\u5b9e\u73b0\u7684ScaleMode";
	e.egret_string_code[1025] = "\u9047\u5230\u6587\u4ef6\u5c3e";
	e.egret_string_code[1026] = "EncodingError! The code point {0} could not be encoded.";
	e.egret_string_code[1027] = "DecodingError";
	e.egret_string_code[1028] = "\u8c03\u7528\u4e86\u672a\u914d\u7f6e\u7684\u6ce8\u5165\u89c4\u5219:{0}\u3002 \u8bf7\u5148\u5728\u9879\u76ee\u521d\u59cb\u5316\u91cc\u914d\u7f6e\u6307\u5b9a\u7684\u6ce8\u5165\u89c4\u5219\uff0c\u518d\u8c03\u7528\u5bf9\u5e94\u5355\u4f8b\u3002";
	e.egret_string_code[1029] = "Function.prototype.bind - what is trying to be bound is not callable";
	e.egret_string_code[1030] = "\u8be5API\u5df2\u5e9f\u5f03";
	e.egret_string_code[1031] = "setVolume\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528this.volume = value\u4ee3\u66ff";
	e.egret_string_code[1032] = "getVolume\u5df2\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528this.volume\u4ee3\u66ff";
	e.egret_string_code[2E3] = "RES.createGroup()\u4f20\u5165\u4e86\u914d\u7f6e\u4e2d\u4e0d\u5b58\u5728\u7684\u952e\u503c: {0}";
	e.egret_string_code[2001] = 'RES\u52a0\u8f7d\u4e86\u4e0d\u5b58\u5728\u6216\u7a7a\u7684\u8d44\u6e90\u7ec4:"{0}"';
	e.egret_string_code[3E3] = "\u4e3b\u9898\u914d\u7f6e\u6587\u4ef6\u52a0\u8f7d\u5931\u8d25: {0}";
	e.egret_string_code[3001] = "\u627e\u4e0d\u5230\u4e3b\u9898\u4e2d\u6240\u914d\u7f6e\u7684\u76ae\u80a4\u7c7b\u540d: {0}";
	e.egret_string_code[3002] = '\u7d22\u5f15:"{0}"\u8d85\u51fa\u96c6\u5408\u5143\u7d20\u7d22\u5f15\u8303\u56f4';
	e.egret_string_code[3003] = "\u5728\u6b64\u7ec4\u4ef6\u4e2d\u4e0d\u53ef\u7528\uff0c\u82e5\u6b64\u7ec4\u4ef6\u4e3a\u5bb9\u5668\u7c7b\uff0c\u8bf7\u4f7f\u7528";
	e.egret_string_code[3004] = "addChild(){0}addElement()\u4ee3\u66ff";
	e.egret_string_code[3005] = "addChildAt(){0}addElementAt()\u4ee3\u66ff";
	e.egret_string_code[3006] = "removeChild(){0}removeElement()\u4ee3\u66ff";
	e.egret_string_code[3007] = "removeChildAt(){0}removeElementAt()\u4ee3\u66ff";
	e.egret_string_code[3008] = "setChildIndex(){0}setElementIndex()\u4ee3\u66ff";
	e.egret_string_code[3009] = "swapChildren(){0}swapElements()\u4ee3\u66ff";
	e.egret_string_code[3010] = "swapChildrenAt(){0}swapElementsAt()\u4ee3\u66ff";
	e.egret_string_code[3011] = '\u7d22\u5f15:"{0}"\u8d85\u51fa\u53ef\u89c6\u5143\u7d20\u7d22\u5f15\u8303\u56f4';
	e.egret_string_code[3012] = "\u6b64\u65b9\u6cd5\u5728Scroller\u7ec4\u4ef6\u5185\u4e0d\u53ef\u7528!";
	e.egret_string_code[3013] = "UIStage\u662fGUI\u6839\u5bb9\u5668\uff0c\u53ea\u80fd\u6709\u4e00\u4e2a\u6b64\u5b9e\u4f8b\u5728\u663e\u793a\u5217\u8868\u4e2d\uff01";
	e.egret_string_code[4E3] = "An Bone cannot be added as a child to itself or one of its children (or children's children, etc.)";
	e.egret_string_code[4001] = "Abstract class can not be instantiated!";
	e.egret_string_code[4002] = "Unnamed data!";
	e.egret_string_code[4003] = "Nonsupport version!";
	e.egret_string_code[3100] = "当前浏览器不支持WebSocket";
	e.egret_string_code[3101] = "请先连接WebSocket";
	e.egret_string_code[3102] = "请先设置type为二进制类型"
})(egret || (egret = {}));
var __extends = this.__extends || function(e, f) {
	function g() {
		this.constructor = e
	}
	for (var d in f) f.hasOwnProperty(d) && (e[d] = f[d]);
	g.prototype = f.prototype;
	e.prototype = new g
}; 
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
(function(e) {
	function f(d) {
		for (var b = [], a = 1; a < arguments.length; a++) b[a - 1] = arguments[a];
		if (a = e.egret_string_code[d]) for (var c = b.length,
		h = 0; h < c; h++) a = a.replace("{" + h + "}", b[h]);
		return a
	}
	var g = function() {
		function d() {}
		d.openLogByType = function(b) {
			null == d.logFuncs && (d.logFuncs = {
				error: console.error,
				debug: console.debug,
				warn: console.warn,
				info: console.info,
				log: console.log
			});
			switch (b) {
				case d.OFF:
					console.error = function() {};
				case d.ERROR:
					console.warn = function() {};
				case d.WARN:
					console.info = function() {},
					console.log = function() {};
				case d.INFO:
					console.debug = function() {}
			}
			switch (b) {
				case d.ALL:
					console.debug = d.logFuncs.debug;
				case d.INFO:
					console.log = d.logFuncs.log,
					console.info = d.logFuncs.info;
				case d.WARN:
					console.warn = d.logFuncs.warn;
				case d.ERROR:
					console.error = d.logFuncs.error
			}
		};
		d.fatal = function(b, a) {
			void 0 === a && (a = null);
			e.Logger.traceToConsole("Fatal", b, a);
			throw Error(e.Logger.getTraceCode("Fatal", b, a));
		};
		d.info = function(b, a) {
			void 0 === a && (a = null);
			e.Logger.traceToConsole("Info", b, a)
		};
		d.warning = function(b, a) {
			void 0 === a && (a = null);
			e.Logger.traceToConsole("Warning", b, a)
		};
		d.fatalWithErrorId = function(b) {
			for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
			a.unshift(b); (a = f.apply(null, a)) ? d.fatal(a) : d.warning(f( - 1, b))
		};
		d.infoWithErrorId = function(b) {
			for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
			a.unshift(b); (a = f.apply(null, a)) ? d.info(a) : d.warning(f( - 1, b))
		};
		d.warningWithErrorId = function(b) {
			for (var a = [], c = 1; c < arguments.length; c++) a[c - 1] = arguments[c];
			a.unshift(b); (a = f.apply(null, a)) ? d.warning(a) : d.warning(f( - 1, b))
		};
		d.traceToConsole = function(b, a, c) {
			console.log(e.Logger.getTraceCode(b, a, c))
		};
		d.getTraceCode = function(b, a, c) {
			return "[" + b + "]" + a + (null == c ? "": ":" + c)
		};
		d.ALL = "all";
		d.DEBUG = "debug";
		d.INFO = "info";
		d.WARN = "warn";
		d.ERROR = "error";
		d.OFF = "off";
		return d
	} ();
	e.Logger = g;
	g.prototype.__class__ = "egret.Logger";
	e.getString = f
})(egret || (egret = {})); 
(function(e) {
	var f = function() {
		function e() {
			this._hashCode = e.hashCount++
		}
		Object.defineProperty(e.prototype, "hashCode", {
			get: function() {
				return this._hashCode
			},
			enumerable: !0,
			configurable: !0
		});
		e.hashCount = 1;
		return e
	} ();
	e.HashObject = f;
	f.prototype.__class__ = "egret.HashObject"
})(egret || (egret = {})); 
(function(e) {
	var f = function(e) {
		function d(a) {
			void 0 === a && (a = 300);
			e.call(this);
			this.objectPool = [];
			this._length = 0;
			1 > a && (a = 1);
			this.autoDisposeTime = a;
			this.frameCount = 0
		}
		__extends(d, e);
		var b = d.prototype;
		b._checkFrame = function() {
			this.frameCount--;
			0 >= this.frameCount && this.dispose()
		};
		Object.defineProperty(b, "length", {
			get: function() {
				return this._length
			},
			enumerable: !0,
			configurable: !0
		});
		b.push = function(a) {
			var c = this.objectPool; - 1 == c.indexOf(a) && (c.push(a), a.__recycle && a.__recycle(), this._length++, 0 == this.frameCount && (this.frameCount = this.autoDisposeTime, d._callBackList.push(this)))
		};
		b.pop = function() {
			if (0 == this._length) return null;
			this._length--;
			return this.objectPool.pop()
		};
		b.dispose = function() {
			0 < this._length && (this.objectPool = [], this._length = 0);
			this.frameCount = 0;
			var a = d._callBackList,
			c = a.indexOf(this); - 1 != c && a.splice(c, 1)
		};
		d._callBackList = [];
		return d
	} (e.HashObject);
	e.Recycler = f;
	f.prototype.__class__ = "egret.Recycler"
})(egret || (egret = {}));
 (function(e) {
	e.__START_TIME;
	e.getTimer = function() {
		return Date.now() - e.__START_TIME
	}
})(egret || (egret = {}));
 (function(e) {
	e.__callLaterFunctionList = [];
	e.__callLaterThisList = [];
	e.__callLaterArgsList = [];
	e.callLater = function(f, g) {
		for (var d = [], b = 2; b < arguments.length; b++) d[b - 2] = arguments[b];
		e.__callLaterFunctionList.push(f);
		e.__callLaterThisList.push(g);
		e.__callLaterArgsList.push(d)
	};
	e.__callAsyncFunctionList = [];
	e.__callAsyncThisList = [];
	e.__callAsyncArgsList = [];
	e.__callAsync = function(f, g) {
		for (var d = [], b = 2; b < arguments.length; b++) d[b - 2] = arguments[b];
		e.__callAsyncFunctionList.push(f);
		e.__callAsyncThisList.push(g);
		e.__callAsyncArgsList.push(d)
	}
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function g() {}
		var d = g.prototype;
		d.call = function(b) {
			this.callback && this.callback.call(this.thisObject, b)
		};
		d.dispose = function() {
			this.thisObject = this.callback = null;
			g.__freeList.push(this)
		};
		g.push = function(b, a) {
			var c;
			c = g.__freeList.length ? g.__freeList.pop() : new e.RenderCommand;
			c.callback = b;
			c.thisObject = a;
			e.MainContext.__DRAW_COMMAND_LIST.push(c)
		};
		g.__freeList = [];
		return g
	} ();
	e.RenderCommand = f;
	f.prototype.__class__ = "egret.RenderCommand"
})(egret || (egret = {}));
 (function(e) {
	var f = function(g) {
		function d(a, c, h) {
			void 0 === c && (c = !1);
			void 0 === h && (h = !1);
			g.call(this);
			this.data = null;
			this._type = "";
			this._cancelable = this._bubbles = !1;
			this._eventPhase = 2;
			this._target = this._currentTarget = null;
			this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1;
			this.isNew = !0;
			this._type = a;
			this._bubbles = c;
			this._cancelable = h
		}
		__extends(d, g);
		var b = d.prototype;
		Object.defineProperty(b, "type", {
			get: function() {
				return this._type
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "bubbles", {
			get: function() {
				return this._bubbles
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "cancelable", {
			get: function() {
				return this._cancelable
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "eventPhase", {
			get: function() {
				return this._eventPhase
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "currentTarget", {
			get: function() {
				return this._currentTarget
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "target", {
			get: function() {
				return this._target
			},
			enumerable: !0,
			configurable: !0
		});
		b.isDefaultPrevented = function() {
			return this._isDefaultPrevented
		};
		b.preventDefault = function() {
			this._cancelable && (this._isDefaultPrevented = !0)
		};
		b.stopPropagation = function() {
			this._bubbles && (this._isPropagationStopped = !0)
		};
		b.stopImmediatePropagation = function() {
			this._bubbles && (this._isPropagationImmediateStopped = !0)
		};
		b._reset = function() {
			this.isNew ? this.isNew = !1 : (this._isPropagationImmediateStopped = this._isPropagationStopped = this._isDefaultPrevented = !1, this._currentTarget = this._target = null, this._eventPhase = 2)
		};
		b.__recycle = function() {
			this.data = this._target = this._currentTarget = null
		};
		d._dispatchByTarget = function(a, c, h, b, d, g) {
			void 0 === d && (d = !1);
			void 0 === g && (g = !1);
			var f = a.eventRecycler;
			f || (f = a.eventRecycler = new e.Recycler);
			var k = f.pop();
			k ? k._type = h: k = new a(h);
			k._bubbles = d;
			k._cancelable = g;
			if (b) for (var m in b) k[m] = b[m],
			null !== k[m] && (b[m] = null);
			a = c.dispatchEvent(k);
			f.push(k);
			return a
		};
		d._getPropertyData = function(a) {
			var c = a._props;
			c || (c = a._props = {});
			return c
		};
		d.dispatchEvent = function(a, c, h, b) {
			void 0 === h && (h = !1);
			var e = d._getPropertyData(d);
			void 0 != b && (e.data = b);
			d._dispatchByTarget(d, a, c, e, h)
		};
		d.ADDED_TO_STAGE = "addedToStage";
		d.REMOVED_FROM_STAGE = "removedFromStage";
		d.ADDED = "added";
		d.REMOVED = "removed";
		d.COMPLETE = "complete";
		d.LOOP_COMPLETE = "loopcomplete";
		d.ENTER_FRAME = "enterFrame";
		d.RENDER = "render";
		d.FINISH_RENDER = "finishRender";
		d.FINISH_UPDATE_TRANSFORM = "finishUpdateTransform";
		d.LEAVE_STAGE = "leaveStage";
		d.RESIZE = "resize";
		d.CHANGE = "change";
		d.ACTIVATE = "activate";
		d.DEACTIVATE = "deactivate";
		d.CLOSE = "close";
		d.CONNECT = "connect";
		return d
	} (e.HashObject);
	e.Event = f;
	f.prototype.__class__ = "egret.Event"
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d(b, a, c) {
			void 0 === a && (a = !1);
			void 0 === c && (c = !1);
			e.call(this, b, a, c);
			this._status = 0
		}
		__extends(d, e);
		Object.defineProperty(d.prototype, "status", {
			get: function() {
				return this._status
			},
			enumerable: !0,
			configurable: !0
		});
		d.dispatchHTTPStatusEvent = function(b, a) {
			null == d.httpStatusEvent && (d.httpStatusEvent = new d(d.HTTP_STATUS));
			d.httpStatusEvent._status = a;
			b.dispatchEvent(d.httpStatusEvent)
		};
		d.HTTP_STATUS = "httpStatus";
		d.httpStatusEvent = null;
		return d
	} (e.Event);
	e.HTTPStatusEvent = f;
	f.prototype.__class__ = "egret.HTTPStatusEvent"
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d(b, a, c) {
			void 0 === a && (a = !1);
			void 0 === c && (c = !1);
			e.call(this, b, a, c)
		}
		__extends(d, e);
		d.SOUND_COMPLETE = "soundComplete";
		return d
	} (e.Event);
	e.SoundEvent = f;
	f.prototype.__class__ = "egret.SoundEvent"
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d(b, a, c) {
			void 0 === a && (a = !1);
			void 0 === c && (c = !1);
			e.call(this, b, a, c)
		}
		__extends(d, e);
		d.FOCUS_IN = "focusIn";
		d.FOCUS_OUT = "focusOut";
		return d
	} (e.Event);
	e.FocusEvent = f;
	f.prototype.__class__ = "egret.FocusEvent"
})(egret || (egret = {}));
 (function(e) {
	var f = function(g) {
		function d(b, a, c) {
			void 0 === a && (a = !1);
			void 0 === c && (c = !1);
			g.call(this, b, a, c)
		}
		__extends(d, g);
		d.dispatchIOErrorEvent = function(b) {
			e.Event._dispatchByTarget(d, b, d.IO_ERROR)
		};
		d.IO_ERROR = "ioError";
		return d
	} (e.Event);
	e.IOErrorEvent = f;
	f.prototype.__class__ = "egret.IOErrorEvent"
})(egret || (egret = {}));
 (function(e) {
	var f = function(g) {
		function d(a, c, h, b, d, e, f, k, m, l) {
			void 0 === c && (c = !0);
			void 0 === h && (h = !0);
			void 0 === b && (b = 0);
			void 0 === d && (d = 0);
			void 0 === e && (e = 0);
			void 0 === f && (f = !1);
			void 0 === k && (k = !1);
			void 0 === l && (l = !1);
			g.call(this, a, c, h);
			this._stageY = this._stageX = 0;
			this.touchPointID = NaN;
			this.touchDown = this.altKey = this.shiftKey = this.ctrlKey = !1;
			this.touchPointID = b;
			this._stageX = d;
			this._stageY = e;
			this.ctrlKey = f;
			this.altKey = k;
			this.touchDown = l
		}
		__extends(d, g);
		var b = d.prototype;
		Object.defineProperty(b, "stageX", {
			get: function() {
				return this._stageX
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "stageY", {
			get: function() {
				return this._stageY
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "localX", {
			get: function() {
				return this._currentTarget.globalToLocal(this._stageX, this._stageY, e.Point.identity).x
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "localY", {
			get: function() {
				return this._currentTarget.globalToLocal(this._stageX, this._stageY, e.Point.identity).y
			},
			enumerable: !0,
			configurable: !0
		});
		d.dispatchTouchEvent = function(a, c, h, b, v, g, f, k, m) {
			void 0 === h && (h = 0);
			void 0 === b && (b = 0);
			void 0 === v && (v = 0);
			void 0 === g && (g = !1);
			void 0 === f && (f = !1);
			void 0 === k && (k = !1);
			void 0 === m && (m = !1);
			var l = e.Event._getPropertyData(d);
			l.touchPointID = h;
			l._stageX = b;
			l._stageY = v;
			l.ctrlKey = g;
			l.altKey = f;
			l.shiftKey = k;
			l.touchDown = m;
			e.Event._dispatchByTarget(d, a, c, l, !0, !0)
		};
		d.TOUCH_TAP = "touchTap";
		d.TOUCH_MOVE = "touchMove";
		d.TOUCH_BEGIN = "touchBegin";
		d.TOUCH_END = "touchEnd";
		d.TOUCH_RELEASE_OUTSIDE = "touchReleaseOutside";
		d.TOUCH_ROLL_OUT = "touchRollOut";
		d.TOUCH_ROLL_OVER = "touchRollOver";
		d.TOUCH_OUT = "touchOut";
		d.TOUCH_OVER = "touchOver";
		return d
	} (e.Event);
	e.TouchEvent = f;
	f.prototype.__class__ = "egret.TouchEvent"
})(egret || (egret = {}));
 (function(e) {
	var f = function(g) {
		function d(b, a, c) {
			void 0 === a && (a = !1);
			void 0 === c && (c = !1);
			g.call(this, b, a, c)
		}
		__extends(d, g);
		d.dispatchTimerEvent = function(b, a) {
			e.Event._dispatchByTarget(d, b, a)
		};
		d.TIMER = "timer";
		d.TIMER_COMPLETE = "timerComplete";
		return d
	} (e.Event);
	e.TimerEvent = f;
	f.prototype.__class__ = "egret.TimerEvent"
})(egret || (egret = {}));
 (function(e) {
	var f = function(g) {
		function d(b, a, c, h) {
			void 0 === a && (a = !1);
			void 0 === c && (c = !1);
			void 0 === h && (h = "");
			g.call(this, b, a, c);
			this.text = h
		}
		__extends(d, g);
		d.dispatchTextEvent = function(b, a, c) {
			var h = e.Event._getPropertyData(d);
			h.text = c;
			e.Event._dispatchByTarget(d, b, a, h)
		};
		d.LINK = "link";
		return d
	} (e.Event);
	e.TextEvent = f;
	f.prototype.__class__ = "egret.TextEvent"
})(egret || (egret = {}));
 (function(e) {
	var f = function(g) {
		function d(b, a, c, h, p) {
			void 0 === a && (a = !1);
			void 0 === c && (c = !1);
			void 0 === h && (h = 0);
			void 0 === p && (p = 0);
			g.call(this, b, a, c);
			this.bytesTotal = this.bytesLoaded = 0;
			this.bytesLoaded = h;
			this.bytesTotal = p
		}
		__extends(d, g);
		d.dispatchProgressEvent = function(b, a, c, h) {
			void 0 === c && (c = 0);
			void 0 === h && (h = 0);
			e.Event._dispatchByTarget(d, b, a, {
				bytesLoaded: c,
				bytesTotal: h
			})
		};
		d.PROGRESS = "progress";
		d.SOCKET_DATA = "socketData";
		return d
	} (e.Event);
	e.ProgressEvent = f;
	f.prototype.__class__ = "egret.ProgressEvent"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function e() {}
		e.CAPTURING_PHASE = 1;
		e.AT_TARGET = 2;
		e.BUBBLING_PHASE = 3;
		return e
	} ();
	e.EventPhase = f;
	f.prototype.__class__ = "egret.EventPhase"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d(a) {
			void 0 === a && (a = null);
			f.call(this);
			this._captureEventsMap = this._eventsMap = this._eventTarget = null;
			this._eventTarget = a ? a: this
		}
		__extends(d, f);
		var b = d.prototype;
		b.addEventListener = function(a, c, h, b, d) {
			void 0 === b && (b = !1);
			void 0 === d && (d = 0);
			"undefined" === typeof b && (b = !1);
			"undefined" === typeof d && (d = 0);
			c || e.Logger.fatalWithErrorId(1010);
			b ? (this._captureEventsMap || (this._captureEventsMap = {}), b = this._captureEventsMap) : (this._eventsMap || (this._eventsMap = {}), b = this._eventsMap);
			var f = b[a];
			f || (f = b[a] = []);
			this._insertEventBin(f, c, h, d)
		};
		b._insertEventBin = function(a, c, h, b, d) {
			void 0 === d && (d = void 0);
			for (var e = -1,
			f = a.length,
			g = 0; g < f; g++) {
				var m = a[g];
				if (m.listener == c && m.thisObject == h && m.display == d) return ! 1; - 1 == e && m.priority < b && (e = g)
			}
			c = {
				listener: c,
				thisObject: h,
				priority: b
			};
			d && (c.display = d); - 1 != e ? a.splice(e, 0, c) : a.push(c);
			return ! 0
		};
		b.removeEventListener = function(a, c, h, b) {
			void 0 === b && (b = !1);
			if (b = b ? this._captureEventsMap: this._eventsMap) {
				var d = b[a];
				d && (this._removeEventBin(d, c, h), 0 == d.length && delete b[a])
			}
		};
		b._removeEventBin = function(a, c, h, b, d) {
			void 0 === b && (b = void 0);
			void 0 === d && (d = 0);
			for (var e = a.length; d < e; d++) {
				var f = a[d];
				if (f.listener == c && f.thisObject == h && f.display == b) return a.splice(d, 1),
				!0
			}
			return ! 1
		};
		b.hasEventListener = function(a) {
			return !! (this._eventsMap && this._eventsMap[a] || this._captureEventsMap && this._captureEventsMap[a])
		};
		b.willTrigger = function(a) {
			return this.hasEventListener(a)
		};
		b.dispatchEvent = function(a) {
			a._reset();
			a._target = this._eventTarget;
			a._currentTarget = this._eventTarget;
			return this._notifyListener(a)
		};
		b._notifyListener = function(a) {
			var c = 1 == a._eventPhase ? this._captureEventsMap: this._eventsMap;
			if (!c) return ! 0;
			c = c[a._type];
			if (!c) return ! 0;
			var h = c.length;
			if (0 == h) return ! 0;
			for (var c = c.concat(), b = 0; b < h; b++) {
				var d = c[b];
				d.listener.call(d.thisObject, a);
				if (a._isPropagationImmediateStopped) break
			}
			return ! a._isDefaultPrevented
		};
		b.dispatchEventWith = function(a, c, h) {
			void 0 === c && (c = !1);
			e.Event.dispatchEvent(this, a, c, h)
		};
		return d
	} (e.HashObject);
	e.EventDispatcher = f;
	f.prototype.__class__ = "egret.EventDispatcher"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this.stage = this.deviceContext = this.netContext = this.touchContext = this.rendererContext = null;
			this.reuseEvent = new e.Event("")
		}
		__extends(d, f);
		var b = d.prototype;
		b.run = function() {
			e.Ticker.getInstance().run();
			e.Ticker.getInstance().register(this.renderLoop, this, Number.NEGATIVE_INFINITY);
			e.Ticker.getInstance().register(this.broadcastEnterFrame, this, Number.POSITIVE_INFINITY);
			this.touchContext.run();
			this._profileInstance = e.Profiler.getInstance()
		};
		b.renderLoop = function(a) {
			if (0 < e.__callLaterFunctionList.length) {
				var c = e.__callLaterFunctionList;
				e.__callLaterFunctionList = [];
				var h = e.__callLaterThisList;
				e.__callLaterThisList = [];
				var b = e.__callLaterArgsList;
				e.__callLaterArgsList = []
			}
			a = this.stage;
			var v = d.cachedEvent;
			v._type = e.Event.RENDER;
			this.dispatchEvent(v);
			e.Stage._invalidateRenderFlag && (this.broadcastRender(), e.Stage._invalidateRenderFlag = !1);
			c && this.doCallLaterList(c, h, b);
			0 < e.__callAsyncFunctionList.length && this.doCallAsyncList();
			c = this.rendererContext;
			c.onRenderStart();
			c.clearScreen();
			d.__DRAW_COMMAND_LIST = [];
			d._renderLoopPhase = "updateTransform";
			a._updateTransform();
			d._renderLoopPhase = "draw";
			v._type = e.Event.FINISH_UPDATE_TRANSFORM;
			this.dispatchEvent(v);
			d.__use_new_draw ? this._draw(c) : a._draw(c);
			v._type = e.Event.FINISH_RENDER;
			this.dispatchEvent(v);
			this._profileInstance._isRunning && this._profileInstance._drawProfiler(c);
			c.onRenderFinish()
		};
		b._draw = function(a) {
			for (var c = d.__DRAW_COMMAND_LIST,
			h = c.length,
			b = 0; b < h; b++) {
				var e = c[b];
				e.call(a);
				e.dispose()
			}
		};
		b.broadcastEnterFrame = function(a) {
			a = this.reuseEvent;
			a._type = e.Event.ENTER_FRAME;
			this.dispatchEvent(a);
			for (var c = e.DisplayObject._enterFrameCallBackList.concat(), h = c.length, b = 0; b < h; b++) {
				var d = c[b];
				a._target = d.display;
				a._currentTarget = d.display;
				d.listener.call(d.thisObject, a)
			}
			c = e.Recycler._callBackList;
			for (b = c.length - 1; 0 <= b; b--) c[b]._checkFrame()
		};
		b.broadcastRender = function() {
			var a = this.reuseEvent;
			a._type = e.Event.RENDER;
			for (var c = e.DisplayObject._renderCallBackList.concat(), h = c.length, b = 0; b < h; b++) {
				var d = c[b],
				f = d.display;
				a._target = f;
				a._currentTarget = f;
				d.listener.call(d.thisObject, a)
			}
		};
		b.doCallLaterList = function(a, c, h) {
			for (var b = a.length,
			d = 0; d < b; d++) {
				var e = a[d];
				null != e && e.apply(c[d], h[d])
			}
		};
		b.doCallAsyncList = function() {
			var a = e.__callAsyncFunctionList.concat(),
			c = e.__callAsyncThisList.concat(),
			h = e.__callAsyncArgsList.concat();
			e.__callAsyncFunctionList.length = 0;
			e.__callAsyncThisList.length = 0;
			for (var b = e.__callAsyncArgsList.length = 0; b < a.length; b++) {
				var d = a[b];
				null != d && d.apply(c[b], h[b])
			}
		};
		d.deviceType = null;
		d.DEVICE_PC = "web";
		d.DEVICE_MOBILE = "native";
		d.RUNTIME_HTML5 = "runtimeHtml5";
		d.RUNTIME_NATIVE = "runtimeNative";
		d.__DRAW_COMMAND_LIST = [];
		d.__use_new_draw = !0;
		d.cachedEvent = new e.Event("");
		return d
	} (e.EventDispatcher);
	e.MainContext = f;
	f.prototype.__class__ = "egret.MainContext"
})(egret || (egret = {}));

var testDeviceType = function() {
	if (!this.navigator) return ! 0;
	var e = navigator.userAgent.toLowerCase();
	return - 1 != e.indexOf("mobile") || -1 != e.indexOf("android")
},
testRuntimeType = function() {
	return this.navigator ? !0 : !1
};
egret.MainContext.instance = new egret.MainContext;
egret.MainContext.deviceType = testDeviceType() ? egret.MainContext.DEVICE_MOBILE: egret.MainContext.DEVICE_PC;
egret.MainContext.runtimeType = testRuntimeType() ? egret.MainContext.RUNTIME_HTML5: egret.MainContext.RUNTIME_NATIVE;
delete testDeviceType;
delete testRuntimeType; (function(e) {
	var f = function() {
		function f() {
			this._preDrawCount = this._updateTransformPerformanceCost = this._renderPerformanceCost = this._logicPerformanceCost = this._lastTime = 0;
			this._calculatePreDrawCount = !0;
			this._txt = null;
			this._tick = 0;
			this._maxDeltaTime = 500;
			this._totalDeltaTime = 0;
			this._isRunning = !1
		}
		var d = f.prototype;
		f.getInstance = function() {
			null == f.instance && (f.instance = new f);
			return f.instance
		};
		d.stop = function() {
			if (this._isRunning) {
				this._isRunning = !1;
				e.Ticker.getInstance().unregister(this.update, this);
				var b = e.MainContext.instance;
				b.removeEventListener(e.Event.ENTER_FRAME, this.onEnterFrame, this);
				b.removeEventListener(e.Event.RENDER, this.onStartRender, this);
				b.removeEventListener(e.Event.FINISH_RENDER, this.onFinishRender, this);
				b.removeEventListener(e.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
			}
		};
		d.run = function() {
			null == this._txt && (this._txt = new e.TextField, this._txt.size = 28, this._txt.multiline = !0, this._txt._DO_Props_._parent = new e.DisplayObjectContainer);
			if (!this._isRunning) {
				this._isRunning = !0;
				e.Ticker.getInstance().register(this.update, this);
				var b = e.MainContext.instance;
				b.addEventListener(e.Event.ENTER_FRAME, this.onEnterFrame, this);
				b.addEventListener(e.Event.RENDER, this.onStartRender, this);
				b.addEventListener(e.Event.FINISH_RENDER, this.onFinishRender, this);
				b.addEventListener(e.Event.FINISH_UPDATE_TRANSFORM, this.onFinishUpdateTransform, this)
			}
		};
		d._drawProfiler = function(b) {
			"_drawWebGL" in b && b._drawWebGL();
			this._calculatePreDrawCount = !1;
			this._txt._updateTransform();
			this._txt._draw(b)
		};
		d._setTxtFontSize = function(b) {
			this._txt.size = b
		};
		d.onEnterFrame = function(b) {
			this._lastTime = e.getTimer()
		};
		d.onStartRender = function(b) {
			b = e.getTimer();
			this._logicPerformanceCost = b - this._lastTime;
			this._lastTime = b
		};
		d.onFinishUpdateTransform = function(b) {
			b = e.getTimer();
			this._updateTransformPerformanceCost = b - this._lastTime;
			this._lastTime = b
		};
		d.onFinishRender = function(b) {
			b = e.getTimer();
			this._renderPerformanceCost = b - this._lastTime;
			this._lastTime = b
		};
		d.update = function(b) {
			this._tick++;
			this._totalDeltaTime += b;
			if (this._totalDeltaTime >= this._maxDeltaTime) {
				b = this._preDrawCount.toString();
				var a = Math.ceil(this._logicPerformanceCost).toString() + "," + Math.ceil(this._updateTransformPerformanceCost).toString() + "," + Math.ceil(this._renderPerformanceCost).toString() + "," + Math.ceil(e.MainContext.instance.rendererContext.renderCost).toString();
				this._txt.text = "draw:" + b + "\ncost:" + a + "\nFPS:" + Math.floor(1E3 * this._tick / this._totalDeltaTime).toString();
				this._tick = this._totalDeltaTime = 0
			}
			this._preDrawCount = 0;
			this._calculatePreDrawCount = !0
		};
		d.onDrawImage = function() {
			this._calculatePreDrawCount && this._preDrawCount++
		};
		return f
	} ();
	e.Profiler = f;
	f.prototype.__class__ = "egret.Profiler"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this._timeScale = 1;
			this._paused = !1;
			this._callIndex = -1;
			this.callBackList = [];
			null != d.instance && e.Logger.fatalWithErrorId(1002)
		}
		__extends(d, f);
		var b = d.prototype;
		b.run = function() {
			e.__START_TIME = (new Date).getTime();
			e.MainContext.instance.deviceContext.executeMainLoop(this.update, this)
		};
		b.update = function(a) {
			if (!this._paused) {
				a *= this._timeScale;
				a *= this._timeScale;
				this._callList = this.callBackList.concat();
				for (this._callIndex = 0; this._callIndex < this._callList.length; this._callIndex++) {
					var c = this._callList[this._callIndex];
					c.listener.call(c.thisObject, a)
				}
				this._callIndex = -1;
				this._callList = null
			}
		};
		b.register = function(a, c, h) {
			void 0 === h && (h = 0);
			this._insertEventBin(this.callBackList, a, c, h)
		};
		b.unregister = function(a, c) {
			this._removeEventBin(this.callBackList, a, c);
			this._callList && -1 < this._callIndex && this._removeEventBin(this._callList, a, c, null, this._callIndex + 1)
		};
		b.setTimeout = function(a, c, h) {
			for (var b = [], d = 3; d < arguments.length; d++) b[d - 3] = arguments[d];
			e.Logger.warningWithErrorId(1003);
			e.setTimeout.apply(null, [a, c, h].concat(b))
		};
		b.setTimeScale = function(a) {
			this._timeScale = a
		};
		b.getTimeScale = function() {
			return this._timeScale
		};
		b.pause = function() {
			this._paused = !0
		};
		b.resume = function() {
			this._paused = !1
		};
		d.getInstance = function() {
			null == d.instance && (d.instance = new d);
			return d.instance
		};
		return d
	} (e.EventDispatcher);
	e.Ticker = f;
	f.prototype.__class__ = "egret.Ticker"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function e() {}
		e.LEFT = "left";
		e.RIGHT = "right";
		e.CENTER = "center";
		e.JUSTIFY = "justify";
		e.CONTENT_JUSTIFY = "contentJustify";
		return e
	} ();
	e.HorizontalAlign = f;
	f.prototype.__class__ = "egret.HorizontalAlign"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function e() {}
		e.TOP = "top";
		e.BOTTOM = "bottom";
		e.MIDDLE = "middle";
		e.JUSTIFY = "justify";
		e.CONTENT_JUSTIFY = "contentJustify";
		return e
	} ();
	e.VerticalAlign = f;
	f.prototype.__class__ = "egret.VerticalAlign"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d(a, c) {
			void 0 === c && (c = 0);
			f.call(this);
			this._currentCount = 0;
			this._running = !1;
			this.lastTime = 0;
			this.delay = a;
			this.repeatCount = c
		}
		__extends(d, f);
		var b = d.prototype;
		Object.defineProperty(b, "currentCount", {
			get: function() {
				return this._currentCount
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "running", {
			get: function() {
				return this._running
			},
			enumerable: !0,
			configurable: !0
		});
		b.reset = function() {
			this.stop();
			this._currentCount = 0
		};
		b.start = function() {
			this._running || (this.lastTime = e.getTimer(), e.Ticker.getInstance().register(this.onEnterFrame, this), this._running = !0)
		};
		b.stop = function() {
			this._running && (e.Ticker.getInstance().unregister(this.onEnterFrame, this), this._running = !1)
		};
		b.onEnterFrame = function(a) {
			a = e.getTimer();
			a - this.lastTime > this.delay && (this.lastTime = a, this._currentCount++, e.TimerEvent.dispatchTimerEvent(this, e.TimerEvent.TIMER), 0 < this.repeatCount && this._currentCount >= this.repeatCount && (this.stop(), e.TimerEvent.dispatchTimerEvent(this, e.TimerEvent.TIMER_COMPLETE)))
		};
		return d
	} (e.EventDispatcher);
	e.Timer = f;
	f.prototype.__class__ = "egret.Timer"
})(egret || (egret = {}));
 (function(e) {
	function f(e) {
		e = e.prototype ? e.prototype: Object.getPrototypeOf(e);
		if (e.hasOwnProperty("__class__")) return e.__class__;
		var d = e.constructor.toString(),
		b = d.indexOf("("),
		d = d.substring(9, b);
		Object.defineProperty(e, "__class__", {
			value: d,
			enumerable: !1,
			writable: !0
		});
		return d
	}
	e.getQualifiedClassName = f;
	e.getQualifiedSuperclassName = function(e) {
		e = e.prototype ? e.prototype: Object.getPrototypeOf(e);
		if (e.hasOwnProperty("__superclass__")) return e.__superclass__;
		var d = Object.getPrototypeOf(e);
		if (null == d) return null;
		d = f(d.constructor);
		if (!d) return null;
		Object.defineProperty(e, "__superclass__", {
			value: d,
			enumerable: !1,
			writable: !0
		});
		return d
	}
})(egret || (egret = {}));
 (function(e) {
	var f = {};
	e.getDefinitionByName = function(e) {
		if (!e) return null;
		var d = f[e];
		if (d) return d;
		for (var b = e.split("."), a = b.length, d = __global, c = 0; c < a; c++) if (d = d[b[c]], !d) return null;
		return f[e] = d
	}
})(egret || (egret = {}));

var __global = __global || this; (function(e) {
	function f(b) {
		for (var a in g) {
			var c = g[a];
			c.delay -= b;
			0 >= c.delay && (c.listener.apply(c.thisObject, c.params), delete g[a])
		}
	}
	var g = {},
	d = 0;
	e.setTimeout = function(b, a, c) {
		for (var h = [], p = 3; p < arguments.length; p++) h[p - 3] = arguments[p];
		h = {
			listener: b,
			thisObject: a,
			delay: c,
			params: h
		};
		0 == d && e.Ticker.getInstance().register(f, null);
		d++;
		g[d] = h;
		return d
	};
	e.clearTimeout = function(b) {
		delete g[b]
	}
})(egret || (egret = {}));
 (function(e) {
	function f(b) {
		for (var a in g) {
			var c = g[a];
			c.delay -= b;
			0 >= c.delay && (c.delay = c.originDelay, c.listener.apply(c.thisObject, c.params))
		}
	}
	var g = {},
	d = 0;
	e.setInterval = function(b, a, c) {
		for (var h = [], p = 3; p < arguments.length; p++) h[p - 3] = arguments[p];
		h = {
			listener: b,
			thisObject: a,
			delay: c,
			originDelay: c,
			params: h
		};
		0 == d && e.Ticker.getInstance().register(f, null);
		d++;
		g[d] = h;
		return d
	};
	e.clearInterval = function(b) {
		delete g[b]
	}
})(egret || (egret = {}));
 (function(e) {
	e.hasDefinition = function(f) {
		return e.getDefinitionByName(f) ? !0 : !1
	}
})(egret || (egret = {}));
 (function(e) {
	e.toColorString = function(e) {
		if (isNaN(e) || 0 > e) e = 0;
		16777215 < e && (e = 16777215);
		for (e = e.toString(16).toUpperCase(); 6 > e.length;) e = "0" + e;
		return "#" + e
	}
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d(a, c, h, b, d, e) {
			void 0 === a && (a = 1);
			void 0 === c && (c = 0);
			void 0 === h && (h = 0);
			void 0 === b && (b = 1);
			void 0 === d && (d = 0);
			void 0 === e && (e = 0);
			f.call(this);
			this.a = a;
			this.b = c;
			this.c = h;
			this.d = b;
			this.tx = d;
			this.ty = e
		}
		__extends(d, f);
		var b = d.prototype;
		b.prepend = function(a, c, h, b, d, e) {
			var f = this.tx;
			if (1 != a || 0 != c || 0 != h || 1 != b) {
				var g = this.a,
				m = this.c;
				this.a = g * a + this.b * h;
				this.b = g * c + this.b * b;
				this.c = m * a + this.d * h;
				this.d = m * c + this.d * b
			}
			this.tx = f * a + this.ty * h + d;
			this.ty = f * c + this.ty * b + e;
			return this
		};
		b.append = function(a, c, h, b, d, e) {
			var f = this.a,
			g = this.b,
			m = this.c,
			l = this.d;
			if (1 != a || 0 != c || 0 != h || 1 != b) this.a = a * f + c * m,
			this.b = a * g + c * l,
			this.c = h * f + b * m,
			this.d = h * g + b * l;
			this.tx = d * f + e * m + this.tx;
			this.ty = d * g + e * l + this.ty;
			return this
		};
		b.prependTransform = function(a, c, h, b, d, f, g, k, m) {
			if (d % 360) {
				var l = e.NumberUtils.cos(d);
				d = e.NumberUtils.sin(d)
			} else l = 1,
			d = 0;
			if (k || m) this.tx -= k,
			this.ty -= m;
			f || g ? (this.prepend(l * h, d * h, -d * b, l * b, 0, 0), this.prepend(e.NumberUtils.cos(g), e.NumberUtils.sin(g), -e.NumberUtils.sin(f), e.NumberUtils.cos(f), a, c)) : this.prepend(l * h, d * h, -d * b, l * b, a, c);
			return this
		};
		b.appendTransform = function(a, c, h, b, d, f, g, k, m) {
			if (d % 360) {
				var l = e.NumberUtils.cos(d);
				d = e.NumberUtils.sin(d)
			} else l = 1,
			d = 0;
			f || g ? (this.append(e.NumberUtils.cos(g), e.NumberUtils.sin(g), -e.NumberUtils.sin(f), e.NumberUtils.cos(f), a, c), this.append(l * h, d * h, -d * b, l * b, 0, 0)) : this.append(l * h, d * h, -d * b, l * b, a, c);
			if (k || m) this.tx -= k * this.a + m * this.c,
			this.ty -= k * this.b + m * this.d;
			return this
		};
		b.rotate = function(a) {
			var c = Math.cos(a);
			a = Math.sin(a);
			var h = this.a,
			b = this.c,
			d = this.tx;
			this.a = h * c - this.b * a;
			this.b = h * a + this.b * c;
			this.c = b * c - this.d * a;
			this.d = b * a + this.d * c;
			this.tx = d * c - this.ty * a;
			this.ty = d * a + this.ty * c;
			return this
		};
		b.skew = function(a, c) {
			this.append(e.NumberUtils.cos(c), e.NumberUtils.sin(c), -e.NumberUtils.sin(a), e.NumberUtils.cos(a), 0, 0);
			return this
		};
		b.scale = function(a, c) {
			this.a *= a;
			this.d *= c;
			this.c *= a;
			this.b *= c;
			this.tx *= a;
			this.ty *= c;
			return this
		};
		b.translate = function(a, c) {
			this.tx += a;
			this.ty += c;
			return this
		};
		b.identity = function() {
			this.a = this.d = 1;
			this.b = this.c = this.tx = this.ty = 0;
			return this
		};
		b.identityMatrix = function(a) {
			this.a = a.a;
			this.b = a.b;
			this.c = a.c;
			this.d = a.d;
			this.tx = a.tx;
			this.ty = a.ty;
			return this
		};
		b.invert = function() {
			var a = this.a,
			c = this.b,
			h = this.c,
			b = this.d,
			d = this.tx,
			e = a * b - c * h;
			this.a = b / e;
			this.b = -c / e;
			this.c = -h / e;
			this.d = a / e;
			this.tx = (h * this.ty - b * d) / e;
			this.ty = -(a * this.ty - c * d) / e;
			return this
		};
		d.transformCoords = function(a, c, h) {
			var b = e.Point.identity;
			b.x = a.a * c + a.c * h + a.tx;
			b.y = a.d * h + a.b * c + a.ty;
			return b
		};
		b.toArray = function(a) {
			this.array || (this.array = new Float32Array(9));
			a ? (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = 0, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = 0, this.array[6] = this.tx, this.array[7] = this.ty) : (this.array[0] = this.a, this.array[1] = this.b, this.array[2] = this.tx, this.array[3] = this.c, this.array[4] = this.d, this.array[5] = this.ty, this.array[6] = 0, this.array[7] = 0);
			this.array[8] = 1;
			return this.array
		};
		b.setTo = function(a, c, h, b, d, e) {
			this.a = a;
			this.b = c;
			this.c = h;
			this.d = b;
			this.tx = d;
			this.ty = e
		};
		b.copyForm = function(a) {
			this.identityMatrix(a)
		};
		d.identity = new d;
		d.DEG_TO_RAD = Math.PI / 180;
		return d
	} (e.HashObject);
	e.Matrix = f;
	f.prototype.__class__ = "egret.Matrix"
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d(a, c) {
			void 0 === a && (a = 0);
			void 0 === c && (c = 0);
			e.call(this);
			this.x = a;
			this.y = c
		}
		__extends(d, e);
		var b = d.prototype;
		b.clone = function() {
			return new d(this.x, this.y)
		};
		b.equals = function(a) {
			return this.x == a.x && this.y == a.y
		};
		d.distance = function(a, c) {
			return Math.sqrt((a.x - c.x) * (a.x - c.x) + (a.y - c.y) * (a.y - c.y))
		};
		b.setTo = function(a, c) {
			this.x = a;
			this.y = c
		};
		b.copyForm = function(a) {
			this.x = a.x;
			this.y = a.y
		};
		d.identity = new d(0, 0);
		return d
	} (e.HashObject);
	e.Point = f;
	f.prototype.__class__ = "egret.Point"
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d(a, c, h, b) {
			void 0 === a && (a = 0);
			void 0 === c && (c = 0);
			void 0 === h && (h = 0);
			void 0 === b && (b = 0);
			e.call(this);
			this.x = a;
			this.y = c;
			this.width = h;
			this.height = b
		}
		__extends(d, e);
		var b = d.prototype;
		Object.defineProperty(b, "left", {
			get: function() {
				return this.x
			},
			set: function(a) {
				this.width += this.x - a;
				this.x = a
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "right", {
			get: function() {
				return this.x + this.width
			},
			set: function(a) {
				this.width = a - this.x
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "top", {
			get: function() {
				return this.y
			},
			set: function(a) {
				this.height += this.y - a;
				this.y = a
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "bottom", {
			get: function() {
				return this.y + this.height
			},
			set: function(a) {
				this.height = a - this.y
			},
			enumerable: !0,
			configurable: !0
		});
		b.initialize = function(a, c, h, b) {
			this.x = a;
			this.y = c;
			this.width = h;
			this.height = b;
			return this
		};
		b.contains = function(a, c) {
			return this.x <= a && this.x + this.width >= a && this.y <= c && this.y + this.height >= c
		};
		b.intersects = function(a) {
			return Math.max(this.x, a.x) <= Math.min(this.right, a.right) && Math.max(this.y, a.y) <= Math.min(this.bottom, a.bottom)
		};
		b.setEmpty = function() {
			this.height = this.width = this.y = this.x = 0
		};
		b.clone = function() {
			return new d(this.x, this.y, this.width, this.height)
		};
		b.containsPoint = function(a) {
			return this.x < a.x && this.x + this.width > a.x && this.y < a.y && this.y + this.height > a.y ? !0 : !1
		};
		b.setTo = function(a, c, h, b) {
			this.initialize(a, c, h, b)
		};
		b.copyForm = function(a) {
			this.x = a.x;
			this.y = a.y;
			this.width = a.width;
			this.height = a.height
		};
		b.inflate = function(a, c) {
			this.x -= a;
			this.width += 2 * a;
			this.y -= c;
			this.height += 2 * c
		};
		b.isEmpty = function() {
			return 0 == this.width || 0 == this.height
		};
		d.identity = new d(0, 0, 0, 0);
		return d
	} (e.HashObject);
	e.Rectangle = f;
	f.prototype.__class__ = "egret.Rectangle"
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d(a, c, h, b, d, f, n, k) {
			void 0 === a && (a = 1);
			void 0 === c && (c = 1);
			void 0 === h && (h = 1);
			void 0 === b && (b = 1);
			void 0 === d && (d = 0);
			void 0 === f && (f = 0);
			void 0 === n && (n = 0);
			void 0 === k && (k = 0);
			e.call(this);
			this._redMultiplier = a;
			this._greenMultiplier = c;
			this._blueMultiplier = h;
			this._alphaMultiplier = b;
			this._redOffset = d;
			this._greenOffset = f;
			this._blueOffset = n;
			this._alphaOffset = k
		}
		__extends(d, e);
		var b = d.prototype;
		Object.defineProperty(b, "alphaMultiplier", {
			get: function() {
				return this._alphaMultiplier
			},
			set: function(a) {
				this._alphaMultiplier = a
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "alphaOffset", {
			get: function() {
				return this._alphaOffset
			},
			set: function(a) {
				this._alphaOffset = a
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "blueMultiplier", {
			get: function() {
				return this._blueMultiplier
			},
			set: function(a) {
				this._blueMultiplier = a
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "blueOffset", {
			get: function() {
				return this._blueOffset
			},
			set: function(a) {
				this._blueOffset = a
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "greenMultiplier", {
			get: function() {
				return this._greenMultiplier
			},
			set: function(a) {
				this._greenMultiplier = a
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "greenOffset", {
			get: function() {
				return this._greenOffset
			},
			set: function(a) {
				this._greenOffset = a
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "redMultiplier", {
			get: function() {
				return this._redMultiplier
			},
			set: function(a) {
				this._redMultiplier = a
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "redOffset", {
			get: function() {
				return this._redOffset
			},
			set: function(a) {
				this._redOffset = a
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "color", {
			get: function() {
				return this._redOffset << 16 + this._greenOffset << 8 + this._blueOffset
			},
			enumerable: !0,
			configurable: !0
		});
		b.identityColorTransform = function(a) {
			this._alphaMultiplier = a._alphaMultiplier;
			this._alphaOffset = a._alphaOffset;
			this._redMultiplier = a._redMultiplier;
			this._redOffset = a._redOffset;
			this._greenMultiplier = a._greenMultiplier;
			this._greenOffset = a._greenOffset;
			this._blueMultiplier = a._blueMultiplier;
			this._blueOffset = a._blueOffset
		};
		return d
	} (e.HashObject);
	e.ColorTransform = f;
	f.prototype.__class__ = "egret.ColorTransform"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d(a) {
			f.call(this);
			this._matrix = new e.Matrix;
			this._matrix2 = new e.Matrix;
			this._colorTransform = new e.ColorTransform;
			this._colorTransform2 = new e.ColorTransform;
			this._display = a
		}
		__extends(d, f);
		var b = d.prototype;
		Object.defineProperty(b, "matrix", {
			get: function() {
				this._matrix2.identityMatrix(this._matrix);
				return this._matrix2
			},
			set: function(a) {
				this._setMatrix(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setMatrix = function(a) {
			this._display.__hack_local_matrix || (this._display.__hack_local_matrix = new e.Matrix);
			this._display.__hack_local_matrix.identityMatrix(a);
			this._matrix.identityMatrix(a)
		};
		Object.defineProperty(b, "colorTransform", {
			get: function() {
				this._colorTransform2.identityColorTransform(this._colorTransform);
				return this._colorTransform2
			},
			set: function(a) {
				this._setColorTransform(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setColorTransform = function(a) {
			this._colorTransform.identityColorTransform(a)
		};
		return d
	} (e.HashObject);
	e.Transform = f;
	f.prototype.__class__ = "egret.Transform"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this._isSupportDOMParser = this._xmlDict = this._parser = null;
			this._xmlDict = {};
			window.DOMParser ? (this._isSupportDOMParser = !0, this._parser = new DOMParser) : this._isSupportDOMParser = !1
		}
		__extends(d, f);
		var b = d.prototype;
		d.getInstance = function() {
			d._instance || (d._instance = new d);
			return d._instance
		};
		b.parserXML = function(a) {
			for (var c = 0;
			"\n" == a.charAt(c) || "\t" == a.charAt(c) || "\r" == a.charAt(c) || " " == a.charAt(c);) c++;
			0 != c && (a = a.substring(c, a.length));
			this._isSupportDOMParser ? c = this._parser.parseFromString(a, "text/xml") : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a));
			null == c && e.Logger.infoWithErrorId(1015);
			return c
		};
		d._instance = null;
		return d
	} (e.HashObject);
	e.SAXParser = f;
	f.prototype.__class__ = "egret.SAXParser"
})(egret || (egret = {}));
 (function(e) {
	var f = function(c) {
		function a() {
			c.call(this);
			this._designHeight = this._designWidth = 0;
			this._scaleY = this._scaleX = 1;
			this._stageHeight = this._stageWidth = this._offSetY = 0
		}
		__extends(a, c);
		var b = a.prototype;
		a.getInstance = function() {
			null == a.instance && (d.initialize(), a.instance = new a);
			return a.instance
		};
		b.setDesignSize = function(c, a, h) {
			this._designWidth = c;
			this._designHeight = a;
			h && (e.Logger.warningWithErrorId(1001), this._setResolutionPolicy(h))
		};
		b._setResolutionPolicy = function(c) {
			this._resolutionPolicy = c;
			c.init(this);
			c._apply(this, this._designWidth, this._designHeight)
		};
		b.getScaleX = function() {
			return this._scaleX
		};
		b.getScaleY = function() {
			return this._scaleY
		};
		b.getOffSetY = function() {
			return this._offSetY
		};
		a.canvas_name = "egretCanvas";
		a.egret_root_div = "gameDiv";
		a.canvas_div_name = "canvasDiv";
		return a
	} (e.HashObject);
	e.StageDelegate = f;
	f.prototype.__class__ = "egret.StageDelegate";
	var g = function() {
		function c(c, a) {
			this._containerStrategy = c;
			this._contentStrategy = a
		}
		var a = c.prototype;
		a.init = function(c) {
			this._containerStrategy.init(c);
			this._contentStrategy.init(c)
		};
		a._apply = function(c, a, h) {
			this._containerStrategy._apply(c, a, h);
			this._contentStrategy._apply(c, a, h)
		};
		return c
	} ();
	e.ResolutionPolicy = g;
	g.prototype.__class__ = "egret.ResolutionPolicy";
	var d = function() {
		function c() {}
		var a = c.prototype;
		c.initialize = function() {
			c.EQUAL_TO_FRAME = new b
		};
		a.init = function(c) {};
		a._apply = function(c, a, h) {};
		a._setupContainer = function() {
			var c = document.body,
			a;
			c && (a = c.style) && (a.paddingTop = a.paddingTop || "0px", a.paddingRight = a.paddingRight || "0px", a.paddingBottom = a.paddingBottom || "0px", a.paddingLeft = a.paddingLeft || "0px", a.borderTop = a.borderTop || "0px", a.borderRight = a.borderRight || "0px", a.borderBottom = a.borderBottom || "0px", a.borderLeft = a.borderLeft || "0px", a.marginTop = a.marginTop || "0px", a.marginRight = a.marginRight || "0px", a.marginBottom = a.marginBottom || "0px", a.marginLeft = a.marginLeft || "0px")
		};
		return c
	} ();
	e.ContainerStrategy = d;
	d.prototype.__class__ = "egret.ContainerStrategy";
	var b = function(c) {
		function a() {
			c.apply(this, arguments)
		}
		__extends(a, c);
		a.prototype._apply = function(c) {
			this._setupContainer()
		};
		return a
	} (d);
	e.EqualToFrame = b;
	b.prototype.__class__ = "egret.EqualToFrame";
	g = function() {
		function c() {}
		var a = c.prototype;
		a.init = function(c) {};
		a._apply = function(c, a, h) {};
		a.setEgretSize = function(c, a, h, b, d, g) {
			void 0 === g && (g = 0);
			e.StageDelegate.getInstance()._stageWidth = Math.round(c);
			e.StageDelegate.getInstance()._stageHeight = Math.round(a);
			c = document.getElementById(f.canvas_div_name);
			a = document.getElementById(f.egret_root_div);
			c || (c = e.Browser.getInstance().$new("div"), c.id = f.canvas_div_name, a.appendChild(c));
			c.style.width = h + "px";
			c.style.height = b + "px";
			a.style.width = h + "px";
			a.style.height = b + "px";
			a.style.top = g + "px"
		};
		a._getClientWidth = function() {
			return document.documentElement.clientWidth
		};
		a._getClientHeight = function() {
			return document.documentElement.clientHeight
		};
		return c
	} ();
	e.ContentStrategy = g;
	g.prototype.__class__ = "egret.ContentStrategy";
	var a = function(c) {
		function a(h) {
			void 0 === h && (h = 0);
			c.call(this);
			this.minWidth = NaN;
			this.minWidth = h
		}
		__extends(a, c);
		a.prototype._apply = function(c, a, h) {
			a = this._getClientWidth();
			var b = this._getClientHeight(),
			d = b / h,
			e = a / d,
			f = 1;
			0 != this.minWidth && (f = Math.min(1, e / this.minWidth));
			this.setEgretSize(e / f, h, a, b * f);
			c._scaleX = d * f;
			c._scaleY = d * f
		};
		return a
	} (g);
	e.FixedHeight = a;
	a.prototype.__class__ = "egret.FixedHeight";
	a = function(c) {
		function a(h) {
			void 0 === h && (h = 0);
			c.call(this);
			this.minHeight = NaN;
			this.minHeight = h
		}
		__extends(a, c);
		a.prototype._apply = function(c, a, h) {
			h = this._getClientWidth();
			var b = this._getClientHeight(),
			d = h / a,
			e = b / d,
			f = 1;
			0 != this.minHeight && (f = Math.min(1, e / this.minHeight));
			this.setEgretSize(a, e / f, h * f, b, h * (1 - f) / 2);
			c._scaleX = d * f;
			c._scaleY = d * f
		};
		return a
	} (g);
	e.FixedWidth = a;
	a.prototype.__class__ = "egret.FixedWidth";
	a = function(c) {
		function a(h, b) {
			c.call(this);
			this.width = h;
			this.height = b
		}
		__extends(a, c);
		a.prototype._apply = function(c, a, h) {
			h = this.width;
			var b = this.height,
			d = h / a;
			this.setEgretSize(a, b / d, h, b);
			c._scaleX = d;
			c._scaleY = d
		};
		return a
	} (g);
	e.FixedSize = a;
	a.prototype.__class__ = "egret.FixedSize";
	a = function(c) {
		function a() {
			c.call(this)
		}
		__extends(a, c);
		a.prototype._apply = function(c, a, h) {
			this.setEgretSize(a, h, a, h, Math.floor((a - a) / 2));
			c._scaleX = 1;
			c._scaleY = 1
		};
		return a
	} (g);
	e.NoScale = a;
	a.prototype.__class__ = "egret.NoScale";
	a = function(c) {
		function a() {
			c.call(this)
		}
		__extends(a, c);
		a.prototype._apply = function(c, a, h) {
			var b = this._getClientWidth(),
			d = this._getClientHeight(),
			e = b,
			f = d,
			g = e / a < f / h ? e / a: f / h,
			e = a * g,
			f = h * g,
			b = Math.floor((b - e) / 2);
			c._offSetY = Math.floor((d - f) / 2);
			this.setEgretSize(a, h / 1, 1 * e, f, b, c._offSetY);
			c._scaleX = 1 * g;
			c._scaleY = 1 * g
		};
		return a
	} (g);
	e.ShowAll = a;
	a.prototype.__class__ = "egret.ShowAll";
	g = function(c) {
		function a() {
			c.call(this)
		}
		__extends(a, c);
		a.prototype._apply = function(c, a, h) {
			var b = this._getClientWidth(),
			d = this._getClientHeight(),
			b = b / a,
			d = d / h;
			this.setEgretSize(a, h, a * b, h * d);
			c._scaleX = b;
			c._scaleY = d
		};
		return a
	} (g);
	e.FullScreen = g;
	g.prototype.__class__ = "egret.FullScreen"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this._originalData = {};
			this._drawAreaList = []
		}
		__extends(d, f);
		var b = d.prototype;
		d.getInstance = function() {
			null == d.instance && (d.instance = new d);
			return d.instance
		};
		b.addDrawArea = function(a) {
			this._drawAreaList.push(a)
		};
		b.clearDrawArea = function() {
			this._drawAreaList = []
		};
		b.drawImage = function(a, c, h, b, f, g, n, k, m, l, q) {
			void 0 === q && (q = void 0);
			n = n || 0;
			k = k || 0;
			var t = c._texture_to_render;
			if (null != t && 0 != g && 0 != f && 0 != m && 0 != l) {
				var s = e.MainContext.instance.rendererContext._texture_scale_factor;
				f /= s;
				g /= s;
				if (0 != this._drawAreaList.length && e.MainContext.instance.rendererContext._cacheCanvasContext) {
					s = e.DisplayObject.getTransformBounds(c._getSize(d.identityRectangle), c._worldTransform);
					c._worldBounds.initialize(s.x, s.y, s.width, s.height);
					s = this._originalData;
					s.sourceX = h;
					s.sourceY = b;
					s.sourceWidth = f;
					s.sourceHeight = g;
					s.destX = n;
					s.destY = k;
					s.destWidth = m;
					s.destHeight = l;
					for (var B = this.getDrawAreaList(), z = 0; z < B.length; z++) if (!this.ignoreRender(c, B[z], s.destX, s.destY)) {
						a.drawImage(t, h, b, f, g, n, k, m, l, q);
						break
					}
				} else a.drawImage(t, h, b, f, g, n, k, m, l, q)
			}
		};
		b.ignoreRender = function(a, c, h, b) {
			var d = a._worldBounds;
			h *= a._worldTransform.a;
			b *= a._worldTransform.d;
			return d.x + d.width + h <= c.x || d.x + h >= c.x + c.width || d.y + d.height + b <= c.y || d.y + b >= c.y + c.height ? !0 : !1
		};
		b.getDrawAreaList = function() {
			var a;
			0 == this._drawAreaList.length ? (this._defaultDrawAreaList || (this._defaultDrawAreaList = [new e.Rectangle(0, 0, e.MainContext.instance.stage.stageWidth, e.MainContext.instance.stage.stageHeight)], e.MainContext.instance.stage.addEventListener(e.Event.RESIZE, this.onResize, this)), a = this._defaultDrawAreaList) : a = this._drawAreaList;
			return a
		};
		b.onResize = function() {
			e.MainContext.instance.stage.removeEventListener(e.Event.RESIZE, this.onResize, this);
			this._defaultDrawAreaList = null
		};
		d.identityRectangle = new e.Rectangle;
		return d
	} (e.HashObject);
	e.RenderFilter = f;
	f.prototype.__class__ = "egret.RenderFilter"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function f() {}
		f.mapClass = function(d, b, a) {
			void 0 === a && (a = "");
			d = this.getKey(d) + "#" + a;
			this.mapClassDic[d] = b
		};
		f.getKey = function(d) {
			return "string" == typeof d ? d: e.getQualifiedClassName(d)
		};
		f.mapValue = function(d, b, a) {
			void 0 === a && (a = "");
			d = this.getKey(d) + "#" + a;
			this.mapValueDic[d] = b
		};
		f.hasMapRule = function(d, b) {
			void 0 === b && (b = "");
			var a = this.getKey(d) + "#" + b;
			return this.mapValueDic[a] || this.mapClassDic[a] ? !0 : !1
		};
		f.getInstance = function(d, b) {
			void 0 === b && (b = "");
			var a = this.getKey(d) + "#" + b;
			if (this.mapValueDic[a]) return this.mapValueDic[a];
			var c = this.mapClassDic[a];
			if (c) return c = new c,
			this.mapValueDic[a] = c,
			delete this.mapClassDic[a],
			c;
			throw Error(e.getString(1028, a));
		};
		f.mapClassDic = {};
		f.mapValueDic = {};
		return f
	} ();
	e.Injector = f;
	f.prototype.__class__ = "egret.Injector"
})(egret || (egret = {}));
 (function(e) {
	e = e.BitmapFilterQuality || (e.BitmapFilterQuality = {});
	e.LOW = 1;
	e.MEDIUM = 2;
	e.HIGH = 3
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d() {
			e.apply(this, arguments);
			this.type = null
		}
		__extends(d, e);
		return d
	} (e.HashObject);
	e.Filter = f;
	f.prototype.__class__ = "egret.Filter"
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d(b, a) {
			e.call(this);
			this.blurX = b;
			this.blurY = a;
			this.type = "blur"
		}
		__extends(d, e);
		return d
	} (e.Filter);
	e.BlurFilter = f;
	f.prototype.__class__ = "egret.BlurFilter"
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d(a) {
			void 0 === a && (a = null);
			e.call(this);
			this._matrix = [];
			this._matrix2 = [];
			this.type = "colorTransform";
			this._setMatrix(a)
		}
		__extends(d, e);
		var b = d.prototype;
		Object.defineProperty(b, "matrix", {
			get: function() {
				for (var a = 0; 20 > a; a++) this._matrix2[a] = this._matrix[a];
				return this._matrix2
			},
			set: function(a) {
				this._setMatrix(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setMatrix = function(a) {
			for (var c = 0; 20 > c; c++) this._matrix[c] = a && a[c] || 0
		};
		return d
	} (e.Filter);
	e.ColorMatrixFilter = f;
	f.prototype.__class__ = "egret.ColorMatrixFilter"
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d(b, a, c, h, d, f, u, n) {
			void 0 === b && (b = 16711680);
			void 0 === a && (a = 1);
			void 0 === c && (c = 6);
			void 0 === h && (h = 6);
			void 0 === d && (d = 2);
			void 0 === f && (f = 1);
			void 0 === u && (u = !1);
			void 0 === n && (n = !1);
			e.call(this);
			this.color = b;
			this.alpha = a;
			this.blurX = c;
			this.blurY = h;
			this.strength = d;
			this.quality = f;
			this.inner = u;
			this.knockout = n;
			this.type = "glow";
			this._blue = b & 255;
			this._green = (b & 65280) >> 8;
			this._red = b >> 16
		}
		__extends(d, e);
		return d
	} (e.Filter);
	e.GlowFilter = f;
	f.prototype.__class__ = "egret.GlowFilter"
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d(b, a, c, h, d, f, u, n, k, m, l) {
			void 0 === b && (b = 4);
			void 0 === a && (a = 45);
			void 0 === c && (c = 0);
			void 0 === h && (h = 1);
			void 0 === d && (d = 4);
			void 0 === f && (f = 4);
			void 0 === u && (u = 1);
			void 0 === n && (n = 1);
			void 0 === k && (k = !1);
			void 0 === m && (m = !1);
			e.call(this, c, h, d, f, u, n, k, m);
			this.distance = b;
			this.angle = a
		}
		__extends(d, e);
		return d
	} (e.GlowFilter);
	e.DropShadowFilter = f;
	f.prototype.__class__ = "egret.DropShadowFilter"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function e() {}
		e.NORMAL = "normal";
		e.ADD = "add";
		e.ERASE = "erase";
		e.ERASE_REVERSE = "eraseReverse";
		return e
	} ();
	e.BlendMode = f;
	f.prototype.__class__ = "egret.BlendMode"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function e() {
			this._name = null;
			this._explicitHeight = this._explicitWidth = NaN;
			this._y = this._x = 0;
			this._scaleY = this._scaleX = 1;
			this._rotation = this._anchorY = this._anchorX = this._anchorOffsetY = this._anchorOffsetX = 0;
			this._alpha = 1;
			this._skewY = this._skewX = 0;
			this._blendMode = null;
			this._touchEnabled = e.defaultTouchEnabled;
			this._visible = !0;
			this._worldAlpha = 1;
			this._scrollRect = null;
			this._cacheAsBitmap = !1;
			this._stage = this._parent = null;
			this._needDraw = !1;
			this._filters = null;
			this._hasHeightSet = this._hasWidthSet = !1;
			this._sizeDirty = this._normalDirty = !0;
			this._isContainer = !1
		}
		e.defaultTouchEnabled = !1;
		return e
	} ();
	e.DisplayObjectProperties = f;
	f.prototype.__class__ = "egret.DisplayObjectProperties"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		return function() {
			this._hitTestPointTexture = null;
			this._rectH = this._rectW = 0;
			this._cacheDirty = !1
		}
	} ();
	e.DisplayObjectPrivateProperties = f;
	f.prototype.__class__ = "egret.DisplayObjectPrivateProperties"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this.renderTexture = this.mask = this._sizeChangeCallTarget = this._sizeChangeCallBack = this.__hack_local_matrix = this._worldBounds = this._texture_to_render = null;
			this._DO_Props_ = new e.DisplayObjectProperties;
			this._DO_Privs_ = new e.DisplayObjectPrivateProperties;
			this._worldTransform = new e.Matrix;
			this._worldBounds = new e.Rectangle(0, 0, 0, 0);
			this._DO_Privs_._cacheBounds = new e.Rectangle(0, 0, 0, 0)
		}
		__extends(d, f);
		var b = d.prototype;
		b._setDirty = function() {
			this._DO_Props_._normalDirty = !0
		};
		b.getDirty = function() {
			return this._DO_Props_._normalDirty || this._DO_Props_._sizeDirty
		};
		b._setParentSizeDirty = function() {
			var a = this._DO_Props_._parent;
			a && (a._DO_Props_._hasWidthSet || a._DO_Props_._hasHeightSet ? a._setCacheDirty() : a._setSizeDirty())
		};
		b._setSizeDirty = function() {
			var a = this._DO_Props_;
			a._sizeDirty || (a._sizeDirty = !0, this._setDirty(), this._setCacheDirty(), this._setParentSizeDirty(), null != this._sizeChangeCallBack && (this._sizeChangeCallTarget == a._parent ? this._sizeChangeCallBack.call(this._sizeChangeCallTarget) : this._sizeChangeCallTarget = this._sizeChangeCallBack = null))
		};
		b._clearDirty = function() {
			this._DO_Props_._normalDirty = !1
		};
		b._clearSizeDirty = function() {
			this._DO_Props_._sizeDirty = !1
		};
		Object.defineProperty(b, "name", {
			get: function() {
				return this._DO_Props_._name
			},
			set: function(a) {
				this._DO_Props_._name = a
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "parent", {
			get: function() {
				return this._DO_Props_._parent
			},
			enumerable: !0,
			configurable: !0
		});
		b._parentChanged = function(a) {
			this._DO_Props_._parent = a
		};
		Object.defineProperty(b, "x", {
			get: function() {
				return this._DO_Props_._x
			},
			set: function(a) {
				this._setX(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setX = function(a) {
			e.NumberUtils.isNumber(a) && this._DO_Props_._x != a && (this._DO_Props_._x = a, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(b, "y", {
			get: function() {
				return this._DO_Props_._y
			},
			set: function(a) {
				this._setY(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setY = function(a) {
			e.NumberUtils.isNumber(a) && this._DO_Props_._y != a && (this._DO_Props_._y = a, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(b, "scaleX", {
			get: function() {
				return this._DO_Props_._scaleX
			},
			set: function(a) {
				e.NumberUtils.isNumber(a) && this._DO_Props_._scaleX != a && (this._DO_Props_._scaleX = a, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "scaleY", {
			get: function() {
				return this._DO_Props_._scaleY
			},
			set: function(a) {
				e.NumberUtils.isNumber(a) && this._DO_Props_._scaleY != a && (this._DO_Props_._scaleY = a, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "anchorOffsetX", {
			get: function() {
				return this._DO_Props_._anchorOffsetX
			},
			set: function(a) {
				e.NumberUtils.isNumber(a) && this._DO_Props_._anchorOffsetX != a && (this._DO_Props_._anchorOffsetX = a, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "anchorOffsetY", {
			get: function() {
				return this._DO_Props_._anchorOffsetY
			},
			set: function(a) {
				e.NumberUtils.isNumber(a) && this._DO_Props_._anchorOffsetY != a && (this._DO_Props_._anchorOffsetY = a, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "anchorX", {
			get: function() {
				return this._DO_Props_._anchorX
			},
			set: function(a) {
				this._setAnchorX(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setAnchorX = function(a) {
			e.NumberUtils.isNumber(a) && this._DO_Props_._anchorX != a && (this._DO_Props_._anchorX = a, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(b, "anchorY", {
			get: function() {
				return this._DO_Props_._anchorY
			},
			set: function(a) {
				this._setAnchorY(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setAnchorY = function(a) {
			e.NumberUtils.isNumber(a) && this._DO_Props_._anchorY != a && (this._DO_Props_._anchorY = a, this._setDirty(), this._setParentSizeDirty())
		};
		Object.defineProperty(b, "visible", {
			get: function() {
				return this._DO_Props_._visible
			},
			set: function(a) {
				this._setVisible(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setVisible = function(a) {
			this._DO_Props_._visible != a && (this._DO_Props_._visible = a, this._setSizeDirty())
		};
		Object.defineProperty(b, "rotation", {
			get: function() {
				return this._DO_Props_._rotation
			},
			set: function(a) {
				e.NumberUtils.isNumber(a) && this._DO_Props_._rotation != a && (this._DO_Props_._rotation = a, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "alpha", {
			get: function() {
				return this._DO_Props_._alpha
			},
			set: function(a) {
				this._setAlpha(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setAlpha = function(a) {
			e.NumberUtils.isNumber(a) && this._DO_Props_._alpha != a && (this._DO_Props_._alpha = a, this._setDirty(), this._setCacheDirty())
		};
		Object.defineProperty(b, "skewX", {
			get: function() {
				return this._DO_Props_._skewX
			},
			set: function(a) {
				e.NumberUtils.isNumber(a) && this._DO_Props_._skewX != a && (this._DO_Props_._skewX = a, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "skewY", {
			get: function() {
				return this._DO_Props_._skewY
			},
			set: function(a) {
				e.NumberUtils.isNumber(a) && this._DO_Props_._skewY != a && (this._DO_Props_._skewY = a, this._setDirty(), this._setParentSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "touchEnabled", {
			get: function() {
				return this._DO_Props_._touchEnabled
			},
			set: function(a) {
				this._setTouchEnabled(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setTouchEnabled = function(a) {
			this._DO_Props_._touchEnabled = a
		};
		Object.defineProperty(b, "blendMode", {
			get: function() {
				return this._DO_Props_._blendMode
			},
			set: function(a) {
				this._DO_Props_._blendMode = a
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "scrollRect", {
			get: function() {
				return this._DO_Props_._scrollRect
			},
			set: function(a) {
				this._setScrollRect(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setScrollRect = function(a) {
			this._DO_Props_._scrollRect = a;
			this._setSizeDirty()
		};
		Object.defineProperty(b, "measuredWidth", {
			get: function() {
				return this._measureBounds().width
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "measuredHeight", {
			get: function() {
				return this._measureBounds().height
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "explicitWidth", {
			get: function() {
				return this._DO_Props_._explicitWidth
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "explicitHeight", {
			get: function() {
				return this._DO_Props_._explicitHeight
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "width", {
			get: function() {
				return this._getWidth()
			},
			set: function(a) {
				this._setWidth(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._getWidth = function() {
			return this._getSize(e.Rectangle.identity).width
		};
		Object.defineProperty(b, "height", {
			get: function() {
				return this._getHeight()
			},
			set: function(a) {
				this._setHeight(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._getHeight = function() {
			return this._getSize(e.Rectangle.identity).height
		};
		b._setWidth = function(a) {
			this._setSizeDirty();
			this._setCacheDirty();
			this._DO_Props_._explicitWidth = a;
			this._DO_Props_._hasWidthSet = e.NumberUtils.isNumber(a)
		};
		b._setHeight = function(a) {
			this._setSizeDirty();
			this._setCacheDirty();
			this._DO_Props_._explicitHeight = a;
			this._DO_Props_._hasHeightSet = e.NumberUtils.isNumber(a)
		};
		Object.defineProperty(b, "worldAlpha", {
			get: function() {
				return this._DO_Props_._worldAlpha
			},
			set: function(a) {
				this._DO_Props_._worldAlpha = a
			},
			enumerable: !0,
			configurable: !0
		});
		b._draw = function(a) {
			if (this._DO_Props_._visible && !this.drawCacheTexture(a)) {
				var c = e.MainContext.__use_new_draw && this._DO_Props_._isContainer;
				this._hasFilters() && !c && this._setGlobalFilters(a);
				a.setAlpha(this.worldAlpha, this.blendMode);
				a.setTransform(this._worldTransform);
				var h = this.mask || this._DO_Props_._scrollRect;
				h && !c && a.pushMask(h);
				this._render(a);
				h && !c && a.popMask();
				this._hasFilters() && !c && this._removeGlobalFilters(a)
			}
			this.destroyCacheBounds()
		};
		b._setGlobalFilters = function(a) {
			var c;
			c = this._DO_Props_._filters ? this._DO_Props_._filters.concat() : [];
			if (this._transform) {
				var h = this._transform._colorTransform,
				b = d.color;
				b[0] = h._redMultiplier;
				b[4] = h._redOffset;
				b[6] = h._greenMultiplier;
				b[9] = h._greenOffset;
				b[12] = h._blueMultiplier;
				b[14] = h._blueOffset;
				b[18] = h._alphaMultiplier;
				b[19] = h._alphaOffset;
				d.colorMatrixFilter._matrix = b;
				c.push(d.colorMatrixFilter)
			}
			a.setGlobalFilters(c)
		};
		b._removeGlobalFilters = function(a) {
			a.setGlobalFilters(null)
		};
		b._hasFilters = function() {
			var a = this._DO_Props_._filters && 0 < this._DO_Props_._filters.length;
			if (this._transform) {
				var c = this._transform._colorTransform;
				if (1 != c._redMultiplier || 0 != c._redOffset || 1 != c._greenMultiplier || 0 != c._greenOffset || 1 != c._blueMultiplier || 0 != c._blueOffset || 1 != c._alphaMultiplier || 0 != c._alphaOffset) a = !0
			}
			return a
		};
		b._pushMask = function(a) {
			a.setTransform(this._worldTransform);
			var c = this.mask || this._DO_Props_._scrollRect;
			c && a.pushMask(c)
		};
		b._popMask = function(a) {
			a.popMask()
		};
		b.drawCacheTexture = function(a) {
			if (!1 == this._DO_Props_._cacheAsBitmap) return ! 1;
			var c = this.getBounds(e.Rectangle.identity);
			if (this._DO_Privs_._cacheDirty || null == this._texture_to_render || 1 <= Math.round(c.width) - this._texture_to_render._textureWidth || 1 <= Math.round(c.height) - this._texture_to_render._textureHeight) c = this._makeBitmapCache(),
			this._DO_Privs_._cacheDirty = !c;
			if (null == this._texture_to_render) return ! 1;
			var h = this._texture_to_render,
			c = h._offsetX,
			b = h._offsetY,
			d = h._textureWidth,
			h = h._textureHeight;
			this._updateTransform();
			a.setAlpha(this.worldAlpha, this.blendMode);
			a.setTransform(this._worldTransform);
			e.RenderFilter.getInstance().drawImage(a, this, 0, 0, d, h, c, b, d, h);
			return ! 0
		};
		Object.defineProperty(b, "needDraw", {
			get: function() {
				return this._DO_Props_._needDraw
			},
			set: function(a) {
				this._DO_Props_._needDraw = a
			},
			enumerable: !0,
			configurable: !0
		});
		b._updateTransform = function() {
			var a = this._DO_Props_;
			a._visible && (this._calculateWorldTransform(), "updateTransform" == e.MainContext._renderLoopPhase && (this.needDraw || this._texture_to_render || a._cacheAsBitmap) && e.RenderCommand.push(this._draw, this))
		};
		b._calculateWorldTransform = function() {
			var a = this._DO_Props_,
			c = this._worldTransform,
			h = a._parent;
			c.identityMatrix(h._worldTransform);
			this._getMatrix(c);
			var b = a._scrollRect;
			b && c.append(1, 0, 0, 1, -b.x, -b.y);
			this.worldAlpha = h.worldAlpha * a._alpha
		};
		b._render = function(a) {};
		b.getBounds = function(a, c) {
			void 0 === c && (c = !0);
			var h = this._DO_Props_,
			b = this._DO_Privs_,
			d = this._measureBounds(),
			f = h._hasWidthSet ? h._explicitWidth: d.width,
			g = h._hasHeightSet ? h._explicitHeight: d.height;
			b._rectW = d.width;
			b._rectH = d.height;
			this._clearSizeDirty();
			var k = d.x,
			d = d.y,
			m = 0,
			l = 0;
			c && (0 != h._anchorX || 0 != h._anchorY ? (m = f * h._anchorX, l = g * h._anchorY) : (m = h._anchorOffsetX, l = h._anchorOffsetY));
			b._cacheBounds.initialize(k - m, d - l, f, g);
			h = b._cacheBounds;
			a || (a = new e.Rectangle);
			return a.initialize(h.x, h.y, h.width, h.height)
		};
		b.destroyCacheBounds = function() {
			var a = this._DO_Privs_;
			a._cacheBounds.x = 0;
			a._cacheBounds.y = 0;
			a._cacheBounds.width = 0;
			a._cacheBounds.height = 0
		};
		b._getConcatenatedMatrix = function() {
			for (var a = d.identityMatrixForGetConcatenated.identity(), c = this; null != c;) {
				var h = c._DO_Props_;
				0 != h._anchorX || 0 != h._anchorY ? (c = c._getSize(e.Rectangle.identity), a.prependTransform(h._x, h._y, h._scaleX, h._scaleY, h._rotation, h._skewX, h._skewY, c.width * h._anchorX, c.height * h._anchorY)) : a.prependTransform(h._x, h._y, h._scaleX, h._scaleY, h._rotation, h._skewX, h._skewY, h._anchorOffsetX, h._anchorOffsetY);
				h._scrollRect && a.prepend(1, 0, 0, 1, -h._scrollRect.x, -h._scrollRect.y);
				c = h._parent
			}
			return a
		};
		b.localToGlobal = function(a, c, h) {
			void 0 === a && (a = 0);
			void 0 === c && (c = 0);
			var b = this._getConcatenatedMatrix();
			b.append(1, 0, 0, 1, a, c);
			h || (h = new e.Point);
			h.x = b.tx;
			h.y = b.ty;
			return h
		};
		b.globalToLocal = function(a, c, h) {
			void 0 === a && (a = 0);
			void 0 === c && (c = 0);
			var b = this._getConcatenatedMatrix();
			b.invert();
			b.append(1, 0, 0, 1, a, c);
			h || (h = new e.Point);
			h.x = b.tx;
			h.y = b.ty;
			return h
		};
		b.hitTest = function(a, c, h) {
			void 0 === h && (h = !1);
			var b = this._DO_Props_;
			if (!b._visible || !h && !b._touchEnabled) return null;
			h = this.getBounds(e.Rectangle.identity, !1);
			a -= h.x;
			c -= h.y;
			return 0 <= a && a < h.width && 0 <= c && c < h.height ? this.mask || b._scrollRect ? b._scrollRect && a > b._scrollRect.x && c > b._scrollRect.y && a < b._scrollRect.x + b._scrollRect.width && c < b._scrollRect.y + b._scrollRect.height || this.mask && this.mask.x <= a && a < this.mask.x + this.mask.width && this.mask.y <= c && c < this.mask.y + this.mask.height ? this: null: this: null
		};
		b.hitTestPoint = function(a, c, h) {
			var b = this._DO_Privs_;
			a = this.globalToLocal(a, c);
			return h ? (b._hitTestPointTexture || (b._hitTestPointTexture = new e.RenderTexture), h = b._hitTestPointTexture, h.drawToTexture(this), 0 != h.getPixel32(a.x - b._hitTestPointTexture._offsetX, a.y - b._hitTestPointTexture._offsetY)[3] ? !0 : !1) : !!this.hitTest(a.x, a.y, !0)
		};
		b._getMatrix = function(a) {
			a || (a = e.Matrix.identity.identity());
			var c = this._DO_Props_,
			h, b;
			b = this._getOffsetPoint();
			h = b.x;
			b = b.y;
			var d = this.__hack_local_matrix;
			d ? (a.append(d.a, d.b, d.c, d.d, d.tx, d.ty), a.append(1, 0, 0, 1, -h, -b)) : a.appendTransform(c._x, c._y, c._scaleX, c._scaleY, c._rotation, c._skewX, c._skewY, h, b);
			return a
		};
		b._getSize = function(a) {
			var c = this._DO_Props_;
			if (c._hasHeightSet && c._hasWidthSet) return this._clearSizeDirty(),
			a.initialize(0, 0, c._explicitWidth, c._explicitHeight);
			this._measureSize(a);
			c._hasWidthSet && (a.width = c._explicitWidth);
			c._hasHeightSet && (a.height = c._explicitHeight);
			return a
		};
		b._measureSize = function(a) {
			var c = this._DO_Privs_;
			this._DO_Props_._sizeDirty ? (a = this._measureBounds(), c._rectW = a.width, c._rectH = a.height, this._clearSizeDirty()) : (a.width = c._rectW, a.height = c._rectH);
			a.x = 0;
			a.y = 0;
			return a
		};
		b._measureBounds = function() {
			return e.Rectangle.identity.initialize(0, 0, 0, 0)
		};
		b._getOffsetPoint = function() {
			var a = this._DO_Props_,
			c = a._anchorOffsetX,
			h = a._anchorOffsetY;
			if (0 != a._anchorX || 0 != a._anchorY) h = this._getSize(e.Rectangle.identity),
			c = a._anchorX * h.width,
			h = a._anchorY * h.height;
			a = e.Point.identity;
			a.x = c;
			a.y = h;
			return a
		};
		b._onAddToStage = function() {
			this._DO_Props_._stage = e.MainContext.instance.stage;
			e.DisplayObjectContainer.__EVENT__ADD_TO_STAGE_LIST.push(this)
		};
		b._onRemoveFromStage = function() {
			e.DisplayObjectContainer.__EVENT__REMOVE_FROM_STAGE_LIST.push(this)
		};
		Object.defineProperty(b, "stage", {
			get: function() {
				return this._DO_Props_._stage
			},
			enumerable: !0,
			configurable: !0
		});
		b.addEventListener = function(a, c, h, b, v) {
			void 0 === b && (b = !1);
			void 0 === v && (v = 0);
			f.prototype.addEventListener.call(this, a, c, h, b, v); ((b = a == e.Event.ENTER_FRAME) || a == e.Event.RENDER) && this._insertEventBin(b ? d._enterFrameCallBackList: d._renderCallBackList, c, h, v, this)
		};
		b.removeEventListener = function(a, c, h, b) {
			void 0 === b && (b = !1);
			f.prototype.removeEventListener.call(this, a, c, h, b); ((b = a == e.Event.ENTER_FRAME) || a == e.Event.RENDER) && this._removeEventBin(b ? d._enterFrameCallBackList: d._renderCallBackList, c, h, this)
		};
		b.dispatchEvent = function(a) {
			if (!a._bubbles) return f.prototype.dispatchEvent.call(this, a);
			for (var c = [], h = this; h;) c.push(h),
			h = h._DO_Props_._parent;
			a._reset();
			this._dispatchPropagationEvent(a, c);
			return ! a._isDefaultPrevented
		};
		b._dispatchPropagationEvent = function(a, c, h) {
			h = c.length;
			for (var b = 1,
			d = h - 1; 0 <= d; d--) {
				var e = c[d];
				a._currentTarget = e;
				a._target = this;
				a._eventPhase = b;
				e._notifyListener(a);
				if (a._isPropagationStopped || a._isPropagationImmediateStopped) return
			}
			e = c[0];
			a._currentTarget = e;
			a._target = this;
			a._eventPhase = 2;
			e._notifyListener(a);
			if (!a._isPropagationStopped && !a._isPropagationImmediateStopped) for (b = 3, d = 1; d < h && (e = c[d], a._currentTarget = e, a._target = this, a._eventPhase = b, e._notifyListener(a), !a._isPropagationStopped && !a._isPropagationImmediateStopped); d++);
		};
		b.willTrigger = function(a) {
			for (var c = this; c;) {
				if (c.hasEventListener(a)) return ! 0;
				c = c._DO_Props_._parent
			}
			return ! 1
		};
		Object.defineProperty(b, "cacheAsBitmap", {
			get: function() {
				return this._DO_Props_._cacheAsBitmap
			},
			set: function(a) { (this._DO_Props_._cacheAsBitmap = a) ? e.callLater(this._makeBitmapCache, this) : this._texture_to_render = null
			},
			enumerable: !0,
			configurable: !0
		});
		b._makeBitmapCache = function() {
			this.renderTexture || (this.renderTexture = new e.RenderTexture);
			var a = this.renderTexture.drawToTexture(this);
			this._texture_to_render = a ? this.renderTexture: null;
			return a
		};
		b._setCacheDirty = function(a) {
			void 0 === a && (a = !0);
			this._DO_Privs_._cacheDirty = a
		};
		d.getTransformBounds = function(a, c) {
			var h = a.x,
			b = a.y,
			d = a.width,
			e = a.height; (h || b) && c.appendTransform(0, 0, 1, 1, 0, 0, 0, -h, -b);
			var f = d * c.a,
			d = d * c.b,
			g = e * c.c,
			e = e * c.d,
			m = c.tx,
			l = c.ty,
			q = m,
			t = m,
			s = l,
			B = l; (h = f + m) < q ? q = h: h > t && (t = h); (h = f + g + m) < q ? q = h: h > t && (t = h); (h = g + m) < q ? q = h: h > t && (t = h); (b = d + l) < s ? s = b: b > B && (B = b); (b = d + e + l) < s ? s = b: b > B && (B = b); (b = e + l) < s ? s = b: b > B && (B = b);
			return a.initialize(q, s, t - q, B - s)
		};
		Object.defineProperty(b, "filters", {
			get: function() {
				return this._DO_Props_._filters
			},
			set: function(a) {
				this._DO_Props_._filters = a
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "transform", {
			get: function() {
				this._transform || (this._transform = new e.Transform(this));
				return this._transform
			},
			enumerable: !0,
			configurable: !0
		});
		d.color = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
		d.colorMatrixFilter = new e.ColorMatrixFilter;
		d.identityMatrixForGetConcatenated = new e.Matrix;
		d._enterFrameCallBackList = [];
		d._renderCallBackList = [];
		return d
	} (e.EventDispatcher);
	e.DisplayObject = f;
	f.prototype.__class__ = "egret.DisplayObject"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this._touchChildren = !0;
			this._children = [];
			this._DO_Props_._isContainer = !0
		}
		__extends(d, f);
		var b = d.prototype;
		Object.defineProperty(b, "touchChildren", {
			get: function() {
				return this._touchChildren
			},
			set: function(a) {
				this._touchChildren = a
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "numChildren", {
			get: function() {
				return this._children.length
			},
			enumerable: !0,
			configurable: !0
		});
		b.setChildIndex = function(a, c) {
			this.doSetChildIndex(a, c)
		};
		b.doSetChildIndex = function(a, c) {
			var h = this._children.indexOf(a);
			0 > h && e.Logger.fatalWithErrorId(1006);
			this._children.splice(h, 1);
			0 > c || this._children.length <= c ? this._children.push(a) : this._children.splice(c, 0, a)
		};
		b.addChild = function(a) {
			var c = this._children.length;
			a.parent == this && c--;
			return this._doAddChild(a, c)
		};
		b.addChildAt = function(a, c) {
			return this._doAddChild(a, c)
		};
		b._doAddChild = function(a, c, h) {
			void 0 === h && (h = !0);
			if (a == this) return a;
			if (0 > c || c > this._children.length) return e.Logger.fatalWithErrorId(1007),
			a;
			var b = a.parent;
			if (b == this) return this.doSetChildIndex(a, c),
			a;
			if (b) {
				var f = b._children.indexOf(a);
				0 <= f && b._doRemoveChild(f)
			}
			this._children.splice(c, 0, a);
			a._parentChanged(this);
			h && a.dispatchEventWith(e.Event.ADDED, !0);
			if (this._DO_Props_._stage) for (a._onAddToStage(), c = d.__EVENT__ADD_TO_STAGE_LIST; 0 < c.length;) b = c.shift(),
			h && b.dispatchEventWith(e.Event.ADDED_TO_STAGE);
			a._setDirty();
			this._setSizeDirty();
			return a
		};
		b.removeChild = function(a) {
			a = this._children.indexOf(a);
			if (0 <= a) return this._doRemoveChild(a);
			e.Logger.fatalWithErrorId(1008);
			return null
		};
		b.removeChildAt = function(a) {
			if (0 <= a && a < this._children.length) return this._doRemoveChild(a);
			e.Logger.fatalWithErrorId(1007);
			return null
		};
		b._doRemoveChild = function(a, c) {
			void 0 === c && (c = !0);
			var h = this._children,
			b = h[a];
			c && b.dispatchEventWith(e.Event.REMOVED, !0);
			if (this._DO_Props_._stage) {
				b._onRemoveFromStage();
				for (var f = d.__EVENT__REMOVE_FROM_STAGE_LIST; 0 < f.length;) {
					var g = f.shift();
					c && g.dispatchEventWith(e.Event.REMOVED_FROM_STAGE);
					g._DO_Props_._stage = null
				}
			}
			b._parentChanged(null);
			h.splice(a, 1);
			this._setSizeDirty();
			return b
		};
		b.getChildAt = function(a) {
			if (0 <= a && a < this._children.length) return this._children[a];
			e.Logger.fatalWithErrorId(1007);
			return null
		};
		b.contains = function(a) {
			for (; a;) {
				if (a == this) return ! 0;
				a = a.parent
			}
			return ! 1
		};
		b.swapChildrenAt = function(a, c) {
			0 <= a && a < this._children.length && 0 <= c && c < this._children.length ? this._swapChildrenAt(a, c) : e.Logger.fatalWithErrorId(1007)
		};
		b.swapChildren = function(a, c) {
			var h = this._children.indexOf(a),
			b = this._children.indexOf(c); - 1 == h || -1 == b ? e.Logger.fatalWithErrorId(1008) : this._swapChildrenAt(h, b)
		};
		b._swapChildrenAt = function(a, c) {
			if (a != c) {
				var h = this._children,
				b = h[a];
				h[a] = h[c];
				h[c] = b
			}
		};
		b.getChildIndex = function(a) {
			return this._children.indexOf(a)
		};
		b.removeChildren = function() {
			for (var a = this._children.length - 1; 0 <= a; a--) this._doRemoveChild(a)
		};
		b._updateTransform = function() {
			if (this._DO_Props_._visible) {
				this._hasFilters() && e.RenderCommand.push(this._setGlobalFilters, this);
				var a = this.mask || this._DO_Props_._scrollRect;
				a && e.RenderCommand.push(this._pushMask, this);
				f.prototype._updateTransform.call(this);
				if (!this._DO_Props_._cacheAsBitmap || !this._texture_to_render) for (var c = 0,
				h = this._children,
				b = h.length; c < b; c++) h[c]._updateTransform();
				a && e.RenderCommand.push(this._popMask, this);
				this._hasFilters() && e.RenderCommand.push(this._removeGlobalFilters, this)
			}
		};
		b._render = function(a) {
			if (!e.MainContext.__use_new_draw) for (var c = 0,
			h = this._children,
			b = h.length; c < b; c++) h[c]._draw(a)
		};
		b._measureBounds = function() {
			for (var a = 0,
			c = 0,
			h = 0,
			b = 0,
			d = this._children,
			f = d.length,
			g = 0; g < f; g++) {
				var k = d[g];
				if (k.visible) {
					var m = k.getBounds(e.Rectangle.identity, !1),
					l = m.x,
					q = m.y,
					t = m.width,
					m = m.height,
					k = k._getMatrix(),
					k = e.DisplayObject.getTransformBounds(e.Rectangle.identity.initialize(l, q, t, m), k),
					l = k.x,
					q = k.y,
					t = k.width + k.x,
					k = k.height + k.y;
					if (l < a || 0 == g) a = l;
					if (t > c || 0 == g) c = t;
					if (q < h || 0 == g) h = q;
					if (k > b || 0 == g) b = k
				}
			}
			return e.Rectangle.identity.initialize(a, h, c - a, b - h)
		};
		b.hitTest = function(a, c, h) {
			void 0 === h && (h = !1);
			var b;
			if (!this._DO_Props_._visible) return null;
			if (this._DO_Props_._scrollRect) {
				if (a < this._DO_Props_._scrollRect.x || c < this._DO_Props_._scrollRect.y || a > this._DO_Props_._scrollRect.x + this._DO_Props_._scrollRect.width || c > this._DO_Props_._scrollRect.y + this._DO_Props_._scrollRect.height) return null
			} else if (this.mask && (this.mask.x > a || a > this.mask.x + this.mask.width || this.mask.y > c || c > this.mask.y + this.mask.height)) return null;
			for (var d = this._children,
			u = this._touchChildren,
			n = d.length - 1; 0 <= n; n--) {
				var k = d[n],
				m = k._getMatrix(),
				l = k.scrollRect;
				l && m.append(1, 0, 0, 1, -l.x, -l.y);
				m.invert();
				m = e.Matrix.transformCoords(m, a, c);
				if (k = k.hitTest(m.x, m.y, !0)) {
					if (!u) return this;
					if (k._DO_Props_._touchEnabled && u) return k;
					b = this
				}
			}
			return b ? b: this._texture_to_render ? f.prototype.hitTest.call(this, a, c, h) : null
		};
		b._onAddToStage = function() {
			f.prototype._onAddToStage.call(this);
			for (var a = this._children.length,
			c = 0; c < a; c++) this._children[c]._onAddToStage()
		};
		b._onRemoveFromStage = function() {
			f.prototype._onRemoveFromStage.call(this);
			for (var a = this._children,
			c = a.length,
			h = 0; h < c; h++) a[h]._onRemoveFromStage()
		};
		b.getChildByName = function(a) {
			for (var c = this._children,
			h = c.length,
			b, d = 0; d < h; d++) if (b = c[d], b.name == a) return b;
			return null
		};
		d.__EVENT__ADD_TO_STAGE_LIST = [];
		d.__EVENT__REMOVE_FROM_STAGE_LIST = [];
		return d
	} (e.DisplayObject);
	e.DisplayObjectContainer = f;
	f.prototype.__class__ = "egret.DisplayObjectContainer"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function e() {}
		e.NO_BORDER = "noBorder";
		e.NO_SCALE = "noScale";
		e.SHOW_ALL = "showAll";
		e.EXACT_FIT = "exactFit";
		return e
	} ();
	e.StageScaleMode = f;
	f.prototype.__class__ = "egret.StageScaleMode"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d(a, c) {
			void 0 === a && (a = 480);
			void 0 === c && (c = 800);
			f.call(this);
			this._changeSizeDispatchFlag = !0;
			this._scaleMode = "";
			this._stageHeight = this._stageWidth = NaN;
			this.touchEnabled = !0;
			this._DO_Props_._stage = this;
			this._stageWidth = a;
			this._stageHeight = c
		}
		__extends(d, f);
		var b = d.prototype;
		b.invalidate = function() {
			d._invalidateRenderFlag = !0
		};
		Object.defineProperty(b, "scaleMode", {
			get: function() {
				return this._scaleMode
			},
			set: function(a) {
				this._scaleMode != a && (this._scaleMode = a, this.setResolutionPolicy())
			},
			enumerable: !0,
			configurable: !0
		});
		b.changeSize = function() {
			this._changeSizeDispatchFlag && (this.setResolutionPolicy(), this.dispatchEventWith(e.Event.RESIZE))
		};
		b.setResolutionPolicy = function() {
			var a = d.SCALE_MODE_ENUM[this._scaleMode];
			if (!a) throw Error(e.getString(1024));
			var c = new e.EqualToFrame,
			a = new e.ResolutionPolicy(c, a);
			e.StageDelegate.getInstance()._setResolutionPolicy(a);
			this._stageWidth = e.StageDelegate.getInstance()._stageWidth;
			this._stageHeight = e.StageDelegate.getInstance()._stageHeight
		};
		Object.defineProperty(b, "stageWidth", {
			get: function() {
				return this._stageWidth
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "stageHeight", {
			get: function() {
				return this._stageHeight
			},
			enumerable: !0,
			configurable: !0
		});
		b.hitTest = function(a, c, h) {
			if (!this._DO_Props_._touchEnabled) return null;
			var b;
			if (!this._touchChildren) return this;
			h = this._children;
			for (var d = h.length - 1; 0 <= d; d--) {
				b = h[d];
				var f = b._getMatrix(),
				g = b.scrollRect;
				g && f.append(1, 0, 0, 1, -g.x, -g.y);
				f.invert();
				f = e.Matrix.transformCoords(f, a, c);
				if ((b = b.hitTest(f.x, f.y, !0)) && b.touchEnabled) return b
			}
			return this
		};
		b.getBounds = function(a) {
			a || (a = new e.Rectangle);
			return a.initialize(0, 0, this._stageWidth, this._stageHeight)
		};
		b._updateTransform = function() {
			for (var a = 0,
			c = this._children.length; a < c; a++) this._children[a]._updateTransform()
		};
		Object.defineProperty(b, "focus", {
			get: function() {
				return null
			},
			enumerable: !0,
			configurable: !0
		});
		d.registerScaleMode = function(a, c, h) {
			d.SCALE_MODE_ENUM[a] && !h ? e.Logger.warningWithErrorId(1009, a) : d.SCALE_MODE_ENUM[a] = c
		};
		d._invalidateRenderFlag = !1;
		d.SCALE_MODE_ENUM = {};
		return d
	} (e.DisplayObjectContainer);
	e.Stage = f;
	f.prototype.__class__ = "egret.Stage"
})(egret || (egret = {}));

egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.NO_SCALE] = new egret.NoScale;
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.SHOW_ALL] = new egret.ShowAll;
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.NO_BORDER] = new egret.FixedWidth;
egret.Stage.SCALE_MODE_ENUM[egret.StageScaleMode.EXACT_FIT] = new egret.FullScreen; (function(e) {
	var f = function() {
		return function() {
			this._horizontalScrollPolicy = this._verticalScrollPolicy = "auto";
			this._scrollTop = this._scrollLeft = 0;
			this._vCanScroll = this._hCanScroll = !1;
			this._lastTouchPosition = new e.Point(0, 0);
			this._touchStartPosition = new e.Point(0, 0);
			this._scrollStarted = !1;
			this._lastTouchTime = 0;
			this._lastTouchEvent = null;
			this._velocitys = [];
			this._isVTweenPlaying = this._isHTweenPlaying = !1;
			this._vScrollTween = this._hScrollTween = null
		}
	} ();
	e.ScrollViewProperties = f;
	f.prototype.__class__ = "egret.ScrollViewProperties"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d(a) {
			void 0 === a && (a = null);
			f.call(this);
			this.scrollBeginThreshold = 10;
			this.scrollSpeed = 1;
			this.touchBeginTimer = this.delayTouchBeginEvent = this._content = null;
			this.touchEnabled = !0;
			this._ScrV_Props_ = new e.ScrollViewProperties;
			a && this.setContent(a)
		}
		__extends(d, f);
		var b = d.prototype;
		b.setContent = function(a) {
			this._content !== a && (this.removeContent(), a && (this._content = a, f.prototype.addChild.call(this, a), this._addEvents()))
		};
		b.removeContent = function() {
			this._content && (this._removeEvents(), f.prototype.removeChildAt.call(this, 0));
			this._content = null
		};
		Object.defineProperty(b, "verticalScrollPolicy", {
			get: function() {
				return this._ScrV_Props_._verticalScrollPolicy
			},
			set: function(a) {
				a != this._ScrV_Props_._verticalScrollPolicy && (this._ScrV_Props_._verticalScrollPolicy = a)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "horizontalScrollPolicy", {
			get: function() {
				return this._ScrV_Props_._horizontalScrollPolicy
			},
			set: function(a) {
				a != this._ScrV_Props_._horizontalScrollPolicy && (this._ScrV_Props_._horizontalScrollPolicy = a)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "scrollLeft", {
			get: function() {
				return this._ScrV_Props_._scrollLeft
			},
			set: function(a) {
				a != this._ScrV_Props_._scrollLeft && (this._ScrV_Props_._scrollLeft = a, this._validatePosition(!1, !0), this._updateContentPosition())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "scrollTop", {
			get: function() {
				return this._ScrV_Props_._scrollTop
			},
			set: function(a) {
				a != this._ScrV_Props_._scrollTop && (this._ScrV_Props_._scrollTop = a, this._validatePosition(!0, !1), this._updateContentPosition())
			},
			enumerable: !0,
			configurable: !0
		});
		b.setScrollPosition = function(a, c, h) {
			void 0 === h && (h = !1);
			if (!h || 0 != a || 0 != c) if (h || this._ScrV_Props_._scrollTop != a || this._ScrV_Props_._scrollLeft != c) {
				if (h) {
					h = this._isOnTheEdge(!0);
					var b = this._isOnTheEdge(!1);
					this._ScrV_Props_._scrollTop += h ? a / 2 : a;
					this._ScrV_Props_._scrollLeft += b ? c / 2 : c
				} else this._ScrV_Props_._scrollTop = a,
				this._ScrV_Props_._scrollLeft = c;
				this._validatePosition(!0, !0);
				this._updateContentPosition()
			}
		};
		b._isOnTheEdge = function(a) {
			void 0 === a && (a = !0);
			var c = this._ScrV_Props_._scrollTop,
			h = this._ScrV_Props_._scrollLeft;
			return a ? 0 > c || c > this.getMaxScrollTop() : 0 > h || h > this.getMaxScrollLeft()
		};
		b._validatePosition = function(a, c) {
			void 0 === a && (a = !1);
			void 0 === c && (c = !1);
			if (a) {
				var h = this.height,
				b = this._getContentHeight();
				this._ScrV_Props_._scrollTop = Math.max(this._ScrV_Props_._scrollTop, (0 - h) / 2);
				this._ScrV_Props_._scrollTop = Math.min(this._ScrV_Props_._scrollTop, b > h ? b - h / 2 : h / 2)
			}
			c && (h = this.width, b = this._getContentWidth(), this._ScrV_Props_._scrollLeft = Math.max(this._ScrV_Props_._scrollLeft, (0 - h) / 2), this._ScrV_Props_._scrollLeft = Math.min(this._ScrV_Props_._scrollLeft, b > h ? b - h / 2 : h / 2))
		};
		b._setWidth = function(a) {
			this._DO_Props_._explicitWidth != a && (f.prototype._setWidth.call(this, a), this._updateContentPosition())
		};
		b._setHeight = function(a) {
			this._DO_Props_._explicitHeight != a && (f.prototype._setHeight.call(this, a), this._updateContentPosition())
		};
		b._updateContentPosition = function() {
			var a = this.getBounds(e.Rectangle.identity);
			this.scrollRect = new e.Rectangle(this._ScrV_Props_._scrollLeft, this._ScrV_Props_._scrollTop, a.width, a.height);
			this.dispatchEvent(new e.Event(e.Event.CHANGE))
		};
		b._checkScrollPolicy = function() {
			var a = this.__checkScrollPolicy(this._ScrV_Props_._horizontalScrollPolicy, this._getContentWidth(), this.width);
			this._ScrV_Props_._hCanScroll = a;
			var c = this.__checkScrollPolicy(this._ScrV_Props_._verticalScrollPolicy, this._getContentHeight(), this.height);
			this._ScrV_Props_._vCanScroll = c;
			return a || c
		};
		b.__checkScrollPolicy = function(a, c, h) {
			return "on" == a ? !0 : "off" == a ? !1 : c > h
		};
		b._addEvents = function() {
			this.addEventListener(e.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
			this.addEventListener(e.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
			this.addEventListener(e.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
		};
		b._removeEvents = function() {
			this.removeEventListener(e.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this);
			this.removeEventListener(e.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0);
			this.removeEventListener(e.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
		};
		b._onTouchBegin = function(a) {//console.log('触摸事件！'); 
			! a._isDefaultPrevented && this._checkScrollPolicy() && (this._ScrV_Props_._touchStartPosition.x = a.stageX, this._ScrV_Props_._touchStartPosition.y = a.stageY, (this._ScrV_Props_._isHTweenPlaying || this._ScrV_Props_._isVTweenPlaying) && this._onScrollFinished(), this.stage.addEventListener(e.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), this.stage.addEventListener(e.TouchEvent.TOUCH_END, this._onTouchEnd, this), this.stage.addEventListener(e.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.addEventListener(e.Event.ENTER_FRAME, this._onEnterFrame, this), this._logTouchEvent(a), a.preventDefault())
		};
		b._onTouchBeginCapture = function(a) {
			var c = this._checkScrollPolicy();
			if (c) {
				for (var h = a.target; h != this;) {
					if ("_checkScrollPolicy" in h && (c = h._checkScrollPolicy())) return;
					h = h.parent
				}
				a.stopPropagation();
				this.delayTouchBeginEvent = this.cloneTouchEvent(a);
				this.touchBeginTimer || (this.touchBeginTimer = new e.Timer(100, 1), this.touchBeginTimer.addEventListener(e.TimerEvent.TIMER_COMPLETE, this._onTouchBeginTimer, this));
				this.touchBeginTimer.start();
				this._onTouchBegin(a)
			}
		};
		b._onTouchEndCapture = function(a) {
			this.delayTouchBeginEvent && this._onTouchBeginTimer()
		};
		b._onTouchBeginTimer = function() {
			this.touchBeginTimer.stop();
			var a = this.delayTouchBeginEvent;
			this.delayTouchBeginEvent = null;
			this.stage && this.dispatchPropagationEvent(a)
		};
		b.dispatchPropagationEvent = function(a) {
			for (var c = [], h = a._target, b = 0; h;) h == this && (b = c.length),
			c.push(h),
			h = h.parent;
			h = c.slice(0, b);
			h = h.reverse();
			c = h.concat(c);
			this._dispatchPropagationEvent(a, c, b)
		};
		b._dispatchPropagationEvent = function(a, c, h) {
			for (var b = c.length,
			d = 0; d < b; d++) {
				var e = c[d];
				a._currentTarget = e;
				a._eventPhase = d < h ? 1 : d == h ? 2 : 3;
				e._notifyListener(a);
				if (a._isPropagationStopped || a._isPropagationImmediateStopped) break
			}
		};
		b._onTouchMove = function(a) {
			if (this._ScrV_Props_._lastTouchPosition.x != a.stageX || this._ScrV_Props_._lastTouchPosition.y != a.stageY) {
				if (!this._ScrV_Props_._scrollStarted) {
					var c = a.stageX - this._ScrV_Props_._touchStartPosition.x,
					h = a.stageY - this._ScrV_Props_._touchStartPosition.y;
					if (Math.sqrt(c * c + h * h) < this.scrollBeginThreshold) {
						this._logTouchEvent(a);
						return
					}
				}
				this._ScrV_Props_._scrollStarted = !0;
				this.delayTouchBeginEvent && (this.delayTouchBeginEvent = null, this.touchBeginTimer.stop());
				this.touchChildren = !1;
				c = this._getPointChange(a);
				this.setScrollPosition(c.y, c.x, !0);
				this._calcVelocitys(a);
				this._logTouchEvent(a)
			}
		};
		b._onTouchEnd = function(a) {
			this.touchChildren = !0;
			this._ScrV_Props_._scrollStarted = !1;
			e.MainContext.instance.stage.removeEventListener(e.TouchEvent.TOUCH_MOVE, this._onTouchMove, this);
			e.MainContext.instance.stage.removeEventListener(e.TouchEvent.TOUCH_END, this._onTouchEnd, this);
			e.MainContext.instance.stage.removeEventListener(e.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this);
			this.removeEventListener(e.Event.ENTER_FRAME, this._onEnterFrame, this);
			this._moveAfterTouchEnd()
		};
		b._onEnterFrame = function(a) {
			a = e.getTimer();
			100 < a - this._ScrV_Props_._lastTouchTime && 300 > a - this._ScrV_Props_._lastTouchTime && this._calcVelocitys(this._ScrV_Props_._lastTouchEvent)
		};
		b._logTouchEvent = function(a) {
			console.log('长按事件！');
			this._ScrV_Props_._lastTouchPosition.x = a.stageX;
			this._ScrV_Props_._lastTouchPosition.y = a.stageY;
			this._ScrV_Props_._lastTouchEvent = this.cloneTouchEvent(a);
			this._ScrV_Props_._lastTouchTime = e.getTimer()
		};
		b._getPointChange = function(a) {
			return {
				x: !1 === this._ScrV_Props_._hCanScroll ? 0 : this._ScrV_Props_._lastTouchPosition.x - a.stageX,
				y: !1 === this._ScrV_Props_._vCanScroll ? 0 : this._ScrV_Props_._lastTouchPosition.y - a.stageY
			}
		};
		b._calcVelocitys = function(a) {
			var c = e.getTimer();
			if (0 == this._ScrV_Props_._lastTouchTime) this._ScrV_Props_._lastTouchTime = c;
			else {
				var h = this._getPointChange(a),
				c = c - this._ScrV_Props_._lastTouchTime;
				h.x /= c;
				h.y /= c;
				this._ScrV_Props_._velocitys.push(h);
				5 < this._ScrV_Props_._velocitys.length && this._ScrV_Props_._velocitys.shift();
				this._ScrV_Props_._lastTouchPosition.x = a.stageX;
				this._ScrV_Props_._lastTouchPosition.y = a.stageY
			}
		};
		b._getContentWidth = function() {
			return this._content.explicitWidth || this._content.width
		};
		b._getContentHeight = function() {
			return this._content.explicitHeight || this._content.height
		};
		b.getMaxScrollLeft = function() {
			var a = this._getContentWidth() - this.width;
			return Math.max(0, a)
		};
		b.getMaxScrollTop = function() {
			var a = this._getContentHeight() - this.height;
			return Math.max(0, a)
		};
		b._moveAfterTouchEnd = function() {
			if (0 != this._ScrV_Props_._velocitys.length) {
				for (var a = 0,
				c = 0,
				h = 0,
				b = 0; b < this._ScrV_Props_._velocitys.length; b++) var e = this._ScrV_Props_._velocitys[b],
				f = d.weight[b],
				a = a + e.x * f,
				c = c + e.y * f,
				h = h + f;
				this._ScrV_Props_._velocitys.length = 0;
				0 >= this.scrollSpeed && (this.scrollSpeed = 1);
				a = a / h * this.scrollSpeed;
				c = c / h * this.scrollSpeed;
				e = Math.abs(a);
				h = Math.abs(c);
				f = this.getMaxScrollLeft();
				b = this.getMaxScrollTop();
				a = 0.02 < e ? this.getAnimationDatas(a, this._ScrV_Props_._scrollLeft, f) : {
					position: this._ScrV_Props_._scrollLeft,
					duration: 1
				};
				c = 0.02 < h ? this.getAnimationDatas(c, this._ScrV_Props_._scrollTop, b) : {
					position: this._ScrV_Props_._scrollTop,
					duration: 1
				};
				this.setScrollLeft(a.position, a.duration);
				this.setScrollTop(c.position, c.duration)
			}
		};
		b._onTweenFinished = function(a) {
			a == this._ScrV_Props_._vScrollTween && (this._ScrV_Props_._isVTweenPlaying = !1);
			a == this._ScrV_Props_._hScrollTween && (this._ScrV_Props_._isHTweenPlaying = !1); ! 1 == this._ScrV_Props_._isHTweenPlaying && !1 == this._ScrV_Props_._isVTweenPlaying && this._onScrollFinished()
		};
		b._onScrollStarted = function() {};
		b._onScrollFinished = function() {
			e.Tween.removeTweens(this);
			this._ScrV_Props_._hScrollTween = null;
			this._ScrV_Props_._vScrollTween = null;
			this._ScrV_Props_._isHTweenPlaying = !1;
			this._ScrV_Props_._isVTweenPlaying = !1;
			this.dispatchEvent(new e.Event(e.Event.COMPLETE))
		};
		b.setScrollTop = function(a, c) {
			void 0 === c && (c = 0);
			var h = Math.min(this.getMaxScrollTop(), Math.max(a, 0));
			if (0 == c) return this.scrollTop = h,
			null;
			var b = e.Tween.get(this).to({
				scrollTop: a
			},
			c, e.Ease.quartOut);
			h != a && b.to({
				scrollTop: h
			},
			300, e.Ease.quintOut);
			this._ScrV_Props_._isVTweenPlaying = !0;
			this._ScrV_Props_._vScrollTween = b;
			b.call(this._onTweenFinished, this, [b]);
			this._ScrV_Props_._isHTweenPlaying || this._onScrollStarted();
			return b
		};
		b.setScrollLeft = function(a, c) {
			void 0 === c && (c = 0);
			var h = Math.min(this.getMaxScrollLeft(), Math.max(a, 0));
			if (0 == c) return this.scrollLeft = h,
			null;
			var b = e.Tween.get(this).to({
				scrollLeft: a
			},
			c, e.Ease.quartOut);
			h != a && b.to({
				scrollLeft: h
			},
			300, e.Ease.quintOut);
			this._ScrV_Props_._isHTweenPlaying = !0;
			this._ScrV_Props_._hScrollTween = b;
			b.call(this._onTweenFinished, this, [b]);
			this._ScrV_Props_._isVTweenPlaying || this._onScrollStarted();
			return b
		};
		b.getAnimationDatas = function(a, c, h) {
			var b = Math.abs(a),
			d = 0,
			e = c + 500 * a;
			if (0 > e || e > h) for (e = c; Infinity != Math.abs(a) && 0.02 < Math.abs(a);) e += a,
			a = 0 > e || e > h ? 0.998 * a * 0.95 : 0.998 * a,
			d++;
			else d = 500 * -Math.log(0.02 / b);
			return {
				position: Math.min(h + 50, Math.max(e, -50)),
				duration: d
			}
		};
		b.cloneTouchEvent = function(a) {
			var c = new e.TouchEvent(a._type, a._bubbles, a.cancelable);
			c.touchPointID = a.touchPointID;
			c._stageX = a._stageX;
			c._stageY = a._stageY;
			c.ctrlKey = a.ctrlKey;
			c.altKey = a.altKey;
			c.shiftKey = a.shiftKey;
			c.touchDown = a.touchDown;
			c._isDefaultPrevented = !1;
			c._target = a._target;
			return c
		};
		b.throwNotSupportedError = function() {
			throw Error(e.getString(1023));
		};
		b.addChild = function(a) {
			this.throwNotSupportedError();
			return null
		};
		b.addChildAt = function(a, c) {
			this.throwNotSupportedError();
			return null
		};
		b.removeChild = function(a) {
			this.throwNotSupportedError();
			return null
		};
		b.removeChildAt = function(a) {
			this.throwNotSupportedError();
			return null
		};
		b.setChildIndex = function(a, c) {
			this.throwNotSupportedError()
		};
		b.swapChildren = function(a, c) {
			this.throwNotSupportedError()
		};
		b.swapChildrenAt = function(a, c) {
			this.throwNotSupportedError()
		};
		b.hitTest = function(a, c, h) {
			void 0 === h && (h = !1);
			var b = f.prototype.hitTest.call(this, a, c, h);
			return b ? b: e.DisplayObject.prototype.hitTest.call(this, a, c, h)
		};
		d.weight = [1, 1.33, 1.66, 2, 2.33];
		return d
	} (e.DisplayObjectContainer);
	e.ScrollView = f;
	f.prototype.__class__ = "egret.ScrollView"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function e() {}
		e.REPEAT = "repeat";
		e.SCALE = "scale";
		return e
	} ();
	e.BitmapFillMode = f;
	f.prototype.__class__ = "egret.BitmapFillMode"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d(a) {
			f.call(this);
			this.scale9Grid = this._texture = null;
			this.fillMode = "scale";
			a && (this._texture = a, this._setSizeDirty());
			this.needDraw = !0
		}
		__extends(d, f);
		var b = d.prototype;
		Object.defineProperty(b, "texture", {
			get: function() {
				return this._texture
			},
			set: function(a) {
				a != this._texture && (this._setSizeDirty(), this._texture = a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._render = function(a) {
			var c = this._texture;
			c ? (this._texture_to_render = c, d._drawBitmap(a, this._DO_Props_._hasWidthSet ? this._DO_Props_._explicitWidth: c._textureWidth, this._DO_Props_._hasHeightSet ? this._DO_Props_._explicitHeight: c._textureHeight, this)) : this._texture_to_render = null
		};
		d._drawBitmap = function(a, c, h, b) {
			var e = b._texture_to_render;
			if (e) {
				var f = e._textureWidth,
				g = e._textureHeight;
				if ("scale" == b.fillMode) {
					var k = b.scale9Grid || e.scale9Grid;
					if (k && f - k.width < c && g - k.height < h) d.drawScale9GridImage(a, b, k, c, h);
					else {
						var k = e._offsetX,
						m = e._offsetY,
						l = e._bitmapWidth || f,
						q = e._bitmapHeight || g;
						c /= f;
						k = Math.round(k * c);
						c = Math.round(l * c);
						h /= g;
						m = Math.round(m * h);
						h = Math.round(q * h);
						d.renderFilter.drawImage(a, b, e._bitmapX, e._bitmapY, l, q, k, m, c, h)
					}
				} else d.drawRepeatImage(a, b, c, h, b.fillMode)
			}
		};
		d.drawRepeatImage = function(a, c, h, b, d) {
			var f = c._texture_to_render;
			if (f) {
				var g = f._textureWidth,
				k = f._textureHeight,
				m = f._bitmapX,
				l = f._bitmapY,
				g = f._bitmapWidth || g,
				k = f._bitmapHeight || k,
				q = f._offsetX,
				f = f._offsetY;
				e.RenderFilter.getInstance().drawImage(a, c, m, l, g, k, q, f, h, b, d)
			}
		};
		d.drawScale9GridImage = function(a, c, h, b, d) {
			var f = e.MainContext.instance.rendererContext._texture_scale_factor,
			g = c._texture_to_render;
			if (g && h) {
				var k = g._textureWidth,
				m = g._textureHeight,
				l = g._bitmapX,
				q = g._bitmapY,
				t = g._bitmapWidth || k,
				s = g._bitmapHeight || m;
				b -= k - t;
				d -= m - s;
				if (!a.drawImageScale9(g, l, q, t, s, g._offsetX, g._offsetY, b, d, h)) {
					k = g._offsetX / f;
					m = g._offsetY / f;
					g = e.RenderFilter.getInstance();
					h = e.Rectangle.identity.initialize(h.x - Math.round(k), h.y - Math.round(k), h.width, h.height);
					k = Math.round(k);
					m = Math.round(m);
					h.y == h.bottom && (h.bottom < s ? h.bottom++:h.y--);
					h.x == h.right && (h.right < t ? h.right++:h.x--);
					var B = l + h.x / f,
					z = l + h.right / f,
					r = t - h.right,
					y = q + h.y / f,
					f = q + h.bottom / f,
					w = s - h.bottom,
					A = k + h.x,
					x = m + h.y,
					s = d - (s - h.bottom),
					t = b - (t - h.right);
					g.drawImage(a, c, l, q, h.x, h.y, k, m, h.x, h.y);
					g.drawImage(a, c, B, q, h.width, h.y, A, m, t - h.x, h.y);
					g.drawImage(a, c, z, q, r, h.y, k + t, m, b - t, h.y);
					g.drawImage(a, c, l, y, h.x, h.height, k, x, h.x, s - h.y);
					g.drawImage(a, c, B, y, h.width, h.height, A, x, t - h.x, s - h.y);
					g.drawImage(a, c, z, y, r, h.height, k + t, x, b - t, s - h.y);
					g.drawImage(a, c, l, f, h.x, w, k, m + s, h.x, d - s);
					g.drawImage(a, c, B, f, h.width, w, A, m + s, t - h.x, d - s);
					g.drawImage(a, c, z, f, r, w, k + t, m + s, b - t, d - s)
				}
			}
		};
		b._measureBounds = function() {
			var a = this._texture;
			return a ? e.Rectangle.identity.initialize(0, 0, a._textureWidth, a._textureHeight) : f.prototype._measureBounds.call(this)
		};
		d.renderFilter = e.RenderFilter.getInstance();
		return d
	} (e.DisplayObject);
	e.Bitmap = f;
	f.prototype.__class__ = "egret.Bitmap"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this._text = "";
			this._textChanged = !1;
			this._font = null;
			this._fontChanged = !1;
			this._textOffsetY = this._textOffsetX = this._textHeight = this._textWidth = this._lineSpacing = this._letterSpacing = 0;
			this.textLinesChange = !0;
			this._lineHeights = [];
			this.needDraw = this.cacheAsBitmap = !0
		}
		__extends(d, f);
		var b = d.prototype;
		Object.defineProperty(b, "text", {
			get: function() {
				return this._text
			},
			set: function(a) {
				this._text != a && (this._textChanged = !0, this._text = a, this._setSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "font", {
			get: function() {
				return this._font
			},
			set: function(a) {
				this._font != a && (this._font = a, this._fontChanged = !0, this._setSizeDirty())
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "letterSpacing", {
			get: function() {
				return this._letterSpacing
			},
			set: function(a) {
				this._setLetterSpacing(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setLetterSpacing = function(a) {
			this._letterSpacing = a;
			this._setSizeDirty()
		};
		Object.defineProperty(b, "lineSpacing", {
			get: function() {
				return this._lineSpacing
			},
			set: function(a) {
				this._setLineSpacing(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setLineSpacing = function(a) {
			this._lineSpacing = a
		};
		b._setSizeDirty = function() {
			f.prototype._setSizeDirty.call(this);
			this.textLinesChange = !0
		};
		b._render = function(a) {
			var c = this._getTextLines(),
			h = c.length;
			if (0 != h) {
				for (var b = this._font,
				f = b._getFirstCharHeight(), f = Math.ceil(f * d.EMPTY_FACTOR), g = 0, n = this._DO_Props_._hasHeightSet ? this._DO_Props_._explicitHeight: Number.POSITIVE_INFINITY, k = this._lineHeights, m = 0; m < h; m++) {
					var l = k[m];
					if (0 < m && g + l > n) break;
					for (var q = c[m], t = q.length, s = 0, B = 0; B < t; B++) {
						var z = q.charAt(B),
						r = b.getTexture(z);
						if (r) {
							var z = r._bitmapWidth || r._textureWidth,
							y = r._bitmapHeight || r._textureHeight;
							this._texture_to_render = r;
							e.RenderFilter.getInstance().drawImage(a, this, r._bitmapX, r._bitmapY, z, y, s + r._offsetX, g + r._offsetY, z, y);
							s += r._textureWidth + this._letterSpacing
						} else " " == z ? s += f: e.Logger.warningWithErrorId(1011, z)
					}
					g += l + this._lineSpacing
				}
				this._texture_to_render = null
			}
		};
		b._measureBounds = function() {
			var a = this._getTextLines();
			return 0 == a.length ? e.Rectangle.identity.initialize(0, 0, 0, 0) : e.Rectangle.identity.initialize(this._textOffsetX, this._textOffsetY, this._textWidth - this._textOffsetX, this._textHeight - this._textOffsetY + (a.length - 1) * this._lineSpacing)
		};
		b._getTextLines = function() {
			if (!this.textLinesChange) return this._textLines;
			var a = [];
			this._textLines = a;
			this.textLinesChange = !1;
			var c = [];
			this._lineHeights = c;
			if (!this._text || !this._font) return a;
			for (var h = 0,
			b = 0,
			f = 0,
			g = 0,
			n = this._DO_Props_._hasWidthSet,
			k = this._DO_Props_._hasWidthSet ? this._DO_Props_._explicitWidth: Number.POSITIVE_INFINITY, m = this._font, l = m._getFirstCharHeight(), q = Math.ceil(l * d.EMPTY_FACTOR), t = this._text.split(/(?:\r\n|\r|\n)/), s = t.length, B = !0, z = 0; z < s; z++) {
				for (var r = t[z], y = r.length, w = 0, A = 0, x = !0, D = 0; D < y; D++) {
					x || (A += this._letterSpacing);
					var C = r.charAt(D),
					F,
					E = 0,
					G = 0,
					H = m.getTexture(C);
					if (H) C = H._textureWidth,
					F = H._textureHeight,
					E = H._offsetX,
					G = H._offsetY;
					else if (" " == C) C = q,
					F = l;
					else {
						e.Logger.warningWithErrorId(1011, C);
						x && (x = !1);
						continue
					}
					x && (x = !1, f = Math.min(E, f));
					B && (g = Math.min(G, g));
					n && 0 < D && A + C > k ? (a.push(r.substring(0, D)), c.push(w), b += w, h = Math.max(A, h), r = r.substring(D), y = r.length, D = 0, A = C, w = F) : (A += C, w = Math.max(F, w))
				}
				B && (B = !1);
				a.push(r);
				c.push(w);
				b += w;
				h = Math.max(A, h)
			}
			this._textWidth = h;
			this._textHeight = b;
			this._textOffsetX = f;
			this._textOffsetY = g;
			return a
		};
		d.EMPTY_FACTOR = 0.33;
		return d
	} (e.DisplayObject);
	e.BitmapText = f;
	f.prototype.__class__ = "egret.BitmapText"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function d() {
			this.fillStyleColor = this.strokeStyleColor = this.commandQueue = this._renderContext = null;
			this._dirty = !1;
			this.lineY = this.lineX = 0;
			this._firstCheck = !0;
			this._lastY = this._lastX = this._maxY = this._maxX = this._minY = this._minX = 0;
			this.commandQueue = []
		}
		var b = d.prototype;
		b.beginFill = function(a, c) {
			void 0 === c && (c = 1);
			this.fillStyleColor = this._parseColor(a, c);
			this._pushCommand(new g(this._setStyle, this, [this.fillStyleColor]))
		};
		b._parseColor = function(a, c) {
			return "rgba(" + (a >> 16) + "," + ((a & 65280) >> 8) + "," + (a & 255) + "," + c + ")"
		};
		b._setStyle = function(a) {
			this._renderContext.fillStyle = a;
			this._renderContext.beginPath()
		};
		b.drawRect = function(a, c, h, b) {
			this._pushCommand(new g(function(c, a, h, b) {
				this._renderContext.beginPath();
				this._renderContext.rect(c, a, h, b);
				this._renderContext.closePath()
			},
			this, [a, c, h, b]));
			this._checkRect(a, c, h, b)
		};
		b.drawCircle = function(a, c, h) {
			this._pushCommand(new g(function(c, a, h) {
				this._renderContext.beginPath();
				this._renderContext.arc(c, a, h, 0, 2 * Math.PI);
				this._renderContext.closePath()
			},
			this, [a, c, h]));
			this._checkRect(a - h, c - h, 2 * h, 2 * h)
		};
		b.drawRoundRect = function(a, c, h, b, d, e) {
			this._pushCommand(new g(function(c, a, h, b, d, e) {
				d /= 2;
				e = e ? e / 2 : d;
				h = c + h;
				b = a + b;
				var p = b - e;
				this._renderContext.beginPath();
				this._renderContext.moveTo(h, p);
				this._renderContext.quadraticCurveTo(h, b, h - d, b);
				this._renderContext.lineTo(c + d, b);
				this._renderContext.quadraticCurveTo(c, b, c, b - e);
				this._renderContext.lineTo(c, a + e);
				this._renderContext.quadraticCurveTo(c, a, c + d, a);
				this._renderContext.lineTo(h - d, a);
				this._renderContext.quadraticCurveTo(h, a, h, a + e);
				this._renderContext.lineTo(h, p);
				this._renderContext.closePath()
			},
			this, [a, c, h, b, d, e]));
			this._checkRect(a, c, h, b)
		};
		b.drawEllipse = function(a, c, h, b) {
			this._pushCommand(new g(function(c, a, h, b) {
				c += h / 2;
				a += b / 2;
				var d = h > b ? h: b;
				h /= d;
				b /= d;
				d /= 2;
				this._renderContext.scale(h, b);
				this._renderContext.beginPath();
				this._renderContext.arc(c / h, a / b, d, 0, 2 * Math.PI);
				this._renderContext.closePath();
				this._renderContext.scale(1 / h, 1 / b)
			},
			this, [a, c, h, b]));
			this._checkRect(a, c, h, b)
		};
		b.lineStyle = function(a, c, h, b, d, e, f, k) {
			void 0 === a && (a = NaN);
			void 0 === c && (c = 0);
			void 0 === h && (h = 1);
			void 0 === b && (b = !1);
			void 0 === d && (d = "normal");
			void 0 === e && (e = null);
			void 0 === f && (f = null);
			void 0 === k && (k = 3);
			this.strokeStyleColor && (this._createEndLineCommand(), this._pushCommand(this._endLineCommand));
			this.strokeStyleColor = this._parseColor(c, h);
			this._pushCommand(new g(function(c, a) {
				this._renderContext.lineWidth = c;
				this._renderContext.strokeStyle = a;
				this._renderContext.beginPath()
			},
			this, [a, this.strokeStyleColor]));
			this.moveTo(this.lineX, this.lineY)
		};
		b.lineTo = function(a, c) {
			this._pushCommand(new g(function(c, a) {
				this._renderContext.lineTo(c, a)
			},
			this, [a, c]));
			this._checkPoint(this.lineX, this.lineY);
			this.lineX = a;
			this.lineY = c;
			this._checkPoint(a, c)
		};
		b.curveTo = function(a, c, h, b) {
			this._pushCommand(new g(function(c, a, h, b) {
				this._renderContext.quadraticCurveTo(c, a, h, b)
			},
			this, [a, c, h, b]));
			this._checkPoint(this.lineX, this.lineY);
			this.lineX = h;
			this.lineY = b;
			this._checkPoint(a, c);
			this._checkPoint(h, b)
		};
		b.cubicCurveTo = function(a, c, h, b, d, e) {
			this._pushCommand(new g(function(c, a, h, b, d, e) {
				this._renderContext.bezierCurveTo(c, a, h, b, d, e)
			},
			this, [a, c, h, b, d, e]));
			this._checkPoint(this.lineX, this.lineY);
			this.lineX = d;
			this.lineY = e;
			this._checkPoint(a, c);
			this._checkPoint(h, b);
			this._checkPoint(d, e)
		};
		b.moveTo = function(a, c) {
			this._pushCommand(new g(function(c, a) {
				this._renderContext.moveTo(c, a)
			},
			this, [a, c]));
			this.lineX = a;
			this.lineY = c
		};
		b.clear = function() {
			this.lineY = this.lineX = this.commandQueue.length = 0;
			this.fillStyleColor = this.strokeStyleColor = null;
			this._maxY = this._maxX = this._minY = this._minX = 0;
			this._dirty = this._firstCheck = !0
		};
		b.endFill = function() {
			null != this.fillStyleColor && (this._fill(), this.fillStyleColor = null)
		};
		b._beginDraw = function(a) {};
		b._endDraw = function(a) {};
		b._draw = function(a) {
			var c = this.commandQueue.length;
			if (0 != c) {
				this._beginDraw(a);
				for (var h = 0; h < c; h++) {
					var b = this.commandQueue[h];
					b.method.apply(b.thisObject, b.args)
				}
				this.fillStyleColor && (this._createEndFillCommand(), b = this._endFillCommand, b.method.apply(b.thisObject, b.args));
				this.strokeStyleColor && (this._createEndLineCommand(), b = this._endLineCommand, b.method.apply(b.thisObject, b.args));
				this._endDraw(a);
				this._dirty = !1
			}
		};
		b._checkRect = function(a, c, h, b) {
			this._firstCheck ? (this._firstCheck = !1, this._minX = a, this._minY = c, this._maxX = a + h, this._maxY = c + b) : (this._minX = Math.min(this._minX, a), this._minY = Math.min(this._minY, c), this._maxX = Math.max(this._maxX, a + h), this._maxY = Math.max(this._maxY, c + b));
			this._dirty = !0
		};
		b._checkPoint = function(a, c) {
			this._firstCheck ? (this._firstCheck = !1, this._minX = a, this._minY = c, this._maxX = a, this._maxY = c) : (this._minX = Math.min(this._minX, a), this._minY = Math.min(this._minY, c), this._maxX = Math.max(this._maxX, a), this._maxY = Math.max(this._maxY, c));
			this._lastX = a;
			this._lastY = c;
			this._dirty = !0
		};
		b._measureBounds = function() {
			return e.Rectangle.identity.initialize(this._minX, this._minY, this._maxX - this._minX, this._maxY - this._minY)
		};
		b._createEndFillCommand = function() {
			this._endFillCommand || (this._endFillCommand = new g(function() {
				this._renderContext.fill();
				this._renderContext.closePath()
			},
			this, null))
		};
		b._fill = function() {
			this.fillStyleColor && (this._createEndFillCommand(), this._pushCommand(this._endFillCommand));
			this.strokeStyleColor && (this._createEndLineCommand(), this._pushCommand(this._endLineCommand))
		};
		b._createEndLineCommand = function() {
			this._endLineCommand || (this._endLineCommand = new g(function() {
				this._renderContext.stroke();
				this._renderContext.closePath()
			},
			this, null))
		};
		b._pushCommand = function(a) {
			this.commandQueue.push(a);
			this._dirty = !0
		};
		return d
	} ();
	e.Graphics = f;
	f.prototype.__class__ = "egret.Graphics";
	var g = function() {
		return function(d, b, a) {
			this.method = d;
			this.thisObject = b;
			this.args = a
		}
	} ();
	g.prototype.__class__ = "egret.Command"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this._graphics = null
		}
		__extends(d, f);
		var b = d.prototype;
		Object.defineProperty(b, "graphics", {
			get: function() {
				this._graphics || (this._graphics = new e.Graphics, this.needDraw = !0);
				return this._graphics
			},
			enumerable: !0,
			configurable: !0
		});
		b._draw = function(a) {
			this._graphics && this._graphics._dirty && this._setCacheDirty();
			f.prototype._draw.call(this, a)
		};
		b._render = function(a) {
			this._graphics && this._graphics._draw(a)
		};
		b._measureBounds = function() {
			var a = this._graphics;
			return a ? a._measureBounds() : f.prototype._measureBounds.call(this)
		};
		return d
	} (e.DisplayObject);
	e.Shape = f;
	f.prototype.__class__ = "egret.Shape"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this._graphics = null
		}
		__extends(d, f);
		var b = d.prototype;
		Object.defineProperty(b, "graphics", {
			get: function() {
				this._graphics || (this._graphics = new e.Graphics, this.needDraw = !0);
				return this._graphics
			},
			enumerable: !0,
			configurable: !0
		});
		b._draw = function(a) {
			this._graphics && this._graphics._dirty && this._setCacheDirty();
			f.prototype._draw.call(this, a)
		};
		b._render = function(a) {
			this._graphics && this._graphics._draw(a);
			f.prototype._render.call(this, a)
		};
		b._measureBounds = function() {
			for (var a = 0,
			c = 0,
			h = 0,
			b = 0,
			d = this._children.length,
			f = 0; f < d; f++) {
				var g = this._children[f];
				if (g.visible) {
					var k = g.getBounds(e.Rectangle.identity, !1),
					m = k.x,
					l = k.y,
					q = k.width,
					k = k.height,
					g = g._getMatrix(),
					g = e.DisplayObject.getTransformBounds(e.Rectangle.identity.initialize(m, l, q, k), g),
					m = g.x,
					l = g.y,
					q = g.width + g.x,
					g = g.height + g.y;
					if (m < a || 0 == f) a = m;
					if (q > c || 0 == f) c = q;
					if (l < h || 0 == f) h = l;
					if (g > b || 0 == f) b = g
				}
			}
			if (this._graphics) {
				d = this._graphics._measureBounds();
				m = d.x;
				l = d.y;
				q = d.width + d.x;
				g = d.height + d.y;
				if (m < a || 0 == f) a = m;
				if (q > c || 0 == f) c = q;
				if (l < h || 0 == f) h = l;
				if (g > b || 0 == f) b = g
			}
			return e.Rectangle.identity.initialize(a, h, c - a, b - h)
		};
		b.hitTest = function(a, c, h) {
			void 0 === h && (h = !1);
			var b = f.prototype.hitTest.call(this, a, c, h);
			return b ? b: this._graphics ? e.DisplayObject.prototype.hitTest.call(this, a, c, h) : null
		};
		return d
	} (e.DisplayObjectContainer);
	e.Sprite = f;
	f.prototype.__class__ = "egret.Sprite"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function f() {}
		f._getStartLine = function(d) {
			var b = f._getTextHeight(d),
			a = 0;
			d._DO_Props_._hasHeightSet && (!(b < d._DO_Props_._explicitHeight) && b > d._DO_Props_._explicitHeight && (a = Math.max(d._TF_Props_._scrollV - 1, 0), a = Math.min(d._TF_Props_._numLines - 1, a)), d._TF_Props_._multiline || (a = Math.max(d._TF_Props_._scrollV - 1, 0), a = Math.min(d._TF_Props_._numLines - 1, a)));
			return a
		};
		f._getHalign = function(d) {
			var b = d._getLinesArr(),
			a = 0;
			d._TF_Props_._textAlign == e.HorizontalAlign.CENTER ? a = 0.5 : d._TF_Props_._textAlign == e.HorizontalAlign.RIGHT && (a = 1);
			d._TF_Props_._type == e.TextFieldType.INPUT && !d._TF_Props_._multiline && 1 < b.length && (a = 0);
			return a
		};
		f._getTextHeight = function(d) {
			return e.TextFieldType.INPUT != d._TF_Props_._type || d._TF_Props_._multiline ? d._TF_Props_._textMaxHeight + (d._TF_Props_._numLines - 1) * d._TF_Props_._lineSpacing: d._TF_Props_._size
		};
		f._getValign = function(d) {
			var b = f._getTextHeight(d);
			return d._TF_Props_._type == e.TextFieldType.INPUT ? d._TF_Props_._multiline ? 0 : 0.5 : d._DO_Props_._hasHeightSet && b < d._DO_Props_._explicitHeight ? (b = 0, d._TF_Props_._verticalAlign == e.VerticalAlign.MIDDLE ? b = 0.5 : d._TF_Props_._verticalAlign == e.VerticalAlign.BOTTOM && (b = 1), b) : 0
		};
		f._getTextElement = function(d, b, a) {
			b = f._getHit(d, b, a);
			d = d._getLinesArr();
			return b && d[b.lineIndex] && d[b.lineIndex].elements[b.textElementIndex] ? d[b.lineIndex].elements[b.textElementIndex] : null
		};
		f._getHit = function(d, b, a) {
			var c = d._getLinesArr();
			if (0 == d._TF_Props_._textMaxWidth) return null;
			var h = 0,
			e = f._getTextHeight(d),
			v = 0;
			d._DO_Props_._hasHeightSet && d._DO_Props_._explicitHeight > e && (v = f._getValign(d) * (d._DO_Props_._explicitHeight - e), 0 != v && (a -= v));
			v = 0;
			for (e = f._getStartLine(d); e < c.length; e++) {
				var u = c[e];
				if (v + u.height >= a) {
					h = e + 1;
					break
				} else v += u.height;
				if (v + d._TF_Props_._lineSpacing > a) return null;
				v += d._TF_Props_._lineSpacing
			}
			if (0 === h) return null;
			d = c[h - 1];
			for (e = a = 0; e < d.elements.length; e++) if (c = d.elements[e], a + c.width < b) a += c.width;
			else return {
				lineIndex: h - 1,
				textElementIndex: e
			};
			return null
		};
		f._getScrollNum = function(d) {
			var b = 1;
			if (d._TF_Props_._multiline) {
				var a = d.height,
				c = d.size;
				d = d.lineSpacing;
				b = Math.floor(a / (c + d));
				a - (c + d) * b > c / 2 && b++
			}
			return b
		};
		return f
	} ();
	e.TextFieldUtils = f;
	f.prototype.__class__ = "egret.TextFieldUtils"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		return function() {
			this._text = this._type = "";
			this._displayAsPassword = !1;
			this._fontFamily = e.TextField.default_fontFamily;
			this._size = 30;
			this._bold = this._italic = !1;
			this._textColorString = "#FFFFFF";
			this._textColor = 16777215;
			this._strokeColorString = "#000000";
			this._stroke = this._strokeColor = 0;
			this._border = !1;
			this._borderColor = 0;
			this._background = !1;
			this._backgroundColor = 16777215;
			this._textAlign = "left";
			this._verticalAlign = "top";
			this._maxChars = this._textMaxHeight = this._textMaxWidth = 0;
			this._scrollV = -1;
			this._numLines = this._lineSpacing = 0;
			this._multiline = !1
		}
	} ();
	e.TextFieldProperties = f;
	f.prototype.__class__ = "egret.TextFieldProperties"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this._inputEnabled = !1;
			this._bgGraphics = this._inputUtils = null;
			this._isFlow = !1;
			this._textArr = [];
			this._isArrayChanged = !1;
			this._linesArr = [];
			this._isTyping = !1;
			this.needDraw = !0;
			this._TF_Props_ = new e.TextFieldProperties
		}
		__extends(d, f);
		var b = d.prototype;
		b.isInput = function() {
			return this._TF_Props_._type == e.TextFieldType.INPUT
		};
		b._setTouchEnabled = function(a) {
			f.prototype._setTouchEnabled.call(this, a);
			this.isInput() && (this._inputEnabled = !0)
		};
		Object.defineProperty(b, "type", {
			get: function() {
				return this._TF_Props_._type
			},
			set: function(a) {
				this._setType(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setType = function(a) {
			var c = this._TF_Props_;
			c._type != a && (c._type = a, c._type == e.TextFieldType.INPUT ? (this._DO_Props_._hasWidthSet || this._setWidth(100), this._DO_Props_._hasHeightSet || this._setHeight(30), null == this._inputUtils && (this._inputUtils = new e.InputController), this._inputUtils.init(this), this._setDirty(), this._DO_Props_._stage && this._inputUtils._addStageText()) : this._inputUtils && (this._inputUtils._removeStageText(), this._inputUtils = null))
		};
		Object.defineProperty(b, "text", {
			get: function() {
				return this._getText()
			},
			set: function(a) {
				this._setText(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._getText = function() {
			return this._TF_Props_._type == e.TextFieldType.INPUT ? this._inputUtils._getText() : this._TF_Props_._text
		};
		b._setSizeDirty = function() {
			f.prototype._setSizeDirty.call(this);
			this._isArrayChanged = !0
		};
		b._setTextDirty = function() {
			this._setSizeDirty()
		};
		b._setBaseText = function(a) {
			null == a && (a = "");
			var c = this._TF_Props_;
			this._isFlow = !1;
			c._text != a && (this._setTextDirty(), c._text = a, a = "", a = c._displayAsPassword ? this.changeToPassText(c._text) : c._text, this.setMiddleStyle([{
				text: a
			}]))
		};
		b._setText = function(a) {
			null == a && (a = "");
			this._setBaseText(a);
			this._inputUtils && this._inputUtils._setText(this._TF_Props_._text)
		};
		Object.defineProperty(b, "displayAsPassword", {
			get: function() {
				return this._TF_Props_._displayAsPassword
			},
			set: function(a) {
				this._setDisplayAsPassword(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setDisplayAsPassword = function(a) {
			var c = this._TF_Props_;
			c._displayAsPassword != a && (c._displayAsPassword = a, this._setTextDirty(), a = "", a = c._displayAsPassword ? this.changeToPassText(c._text) : c._text, this.setMiddleStyle([{
				text: a
			}]))
		};
		Object.defineProperty(b, "fontFamily", {
			get: function() {
				return this._TF_Props_._fontFamily
			},
			set: function(a) {
				this._setFontFamily(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setFontFamily = function(a) {
			this._TF_Props_._fontFamily != a && (this._setTextDirty(), this._TF_Props_._fontFamily = a)
		};
		Object.defineProperty(b, "size", {
			get: function() {
				return this._TF_Props_._size
			},
			set: function(a) {
				this._setSize(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setSize = function(a) {
			this._TF_Props_._size != a && (this._setTextDirty(), this._TF_Props_._size = a)
		};
		Object.defineProperty(b, "italic", {
			get: function() {
				return this._TF_Props_._italic
			},
			set: function(a) {
				this._setItalic(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setItalic = function(a) {
			this._TF_Props_._italic != a && (this._setTextDirty(), this._TF_Props_._italic = a)
		};
		Object.defineProperty(b, "bold", {
			get: function() {
				return this._TF_Props_._bold
			},
			set: function(a) {
				this._setBold(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setBold = function(a) {
			this._TF_Props_._bold != a && (this._setTextDirty(), this._TF_Props_._bold = a)
		};
		Object.defineProperty(b, "textColor", {
			get: function() {
				return this._TF_Props_._textColor
			},
			set: function(a) {
				this._setTextColor(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setTextColor = function(a) {
			this._TF_Props_._textColor != a && (this._setTextDirty(), this._TF_Props_._textColor = a, this._TF_Props_._textColorString = e.toColorString(a))
		};
		Object.defineProperty(b, "strokeColor", {
			get: function() {
				return this._TF_Props_._strokeColor
			},
			set: function(a) {
				this._setStrokeColor(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setStrokeColor = function(a) {
			this._TF_Props_._strokeColor != a && (this._setTextDirty(), this._TF_Props_._strokeColor = a, this._TF_Props_._strokeColorString = e.toColorString(a))
		};
		Object.defineProperty(b, "stroke", {
			get: function() {
				return this._TF_Props_._stroke
			},
			set: function(a) {
				this._setStroke(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setStroke = function(a) {
			this._TF_Props_._stroke != a && (this._setTextDirty(), this._TF_Props_._stroke = a)
		};
		Object.defineProperty(b, "textAlign", {
			get: function() {
				return this._TF_Props_._textAlign
			},
			set: function(a) {
				this._setTextAlign(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setTextAlign = function(a) {
			this._TF_Props_._textAlign != a && (this._setTextDirty(), this._TF_Props_._textAlign = a)
		};
		Object.defineProperty(b, "verticalAlign", {
			get: function() {
				return this._TF_Props_._verticalAlign
			},
			set: function(a) {
				this._setVerticalAlign(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setVerticalAlign = function(a) {
			this._TF_Props_._verticalAlign != a && (this._setTextDirty(), this._TF_Props_._verticalAlign = a)
		};
		Object.defineProperty(b, "maxChars", {
			get: function() {
				return this._TF_Props_._maxChars
			},
			set: function(a) {
				this._setMaxChars(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setMaxChars = function(a) {
			this._TF_Props_._maxChars != a && (this._TF_Props_._maxChars = a)
		};
		Object.defineProperty(b, "scrollV", {
			get: function() {
				return Math.min(Math.max(this._TF_Props_._scrollV, 1), this.maxScrollV)
			},
			set: function(a) {
				this._TF_Props_._scrollV = Math.max(a, 1);
				this._setDirty()
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "maxScrollV", {
			get: function() {
				this._getLinesArr();
				return Math.max(this._TF_Props_._numLines - e.TextFieldUtils._getScrollNum(this) + 1, 1)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "selectionBeginIndex", {
			get: function() {
				return 0
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "selectionEndIndex", {
			get: function() {
				return 0
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "caretIndex", {
			get: function() {
				return 0
			},
			enumerable: !0,
			configurable: !0
		});
		b._setSelection = function(a, c) {};
		Object.defineProperty(b, "lineSpacing", {
			get: function() {
				return this._TF_Props_._lineSpacing
			},
			set: function(a) {
				this._setLineSpacing(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setLineSpacing = function(a) {
			this._TF_Props_._lineSpacing != a && (this._setTextDirty(), this._TF_Props_._lineSpacing = a)
		};
		b._getLineHeight = function() {
			return this._TF_Props_._lineSpacing + this._TF_Props_._size
		};
		Object.defineProperty(b, "numLines", {
			get: function() {
				return this._TF_Props_._numLines
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "multiline", {
			get: function() {
				return this._TF_Props_._multiline
			},
			set: function(a) {
				this._setMultiline(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setMultiline = function(a) {
			this._TF_Props_._multiline = a;
			this._setDirty()
		};
		b._setWidth = function(a) {
			f.prototype._setWidth.call(this, a);
			this.fillBackground()
		};
		b._setHeight = function(a) {
			f.prototype._setHeight.call(this, a);
			this.fillBackground()
		};
		Object.defineProperty(b, "border", {
			get: function() {
				return this._TF_Props_._border
			},
			set: function(a) {
				this._TF_Props_._border = a;
				this.fillBackground()
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "borderColor", {
			get: function() {
				return this._TF_Props_._borderColor
			},
			set: function(a) {
				this._TF_Props_._borderColor = a;
				this.fillBackground()
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "background", {
			get: function() {
				return this._TF_Props_._background
			},
			set: function(a) {
				this._TF_Props_._background = a;
				this.fillBackground()
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "backgroundColor", {
			get: function() {
				return this._TF_Props_._backgroundColor
			},
			set: function(a) {
				this._TF_Props_._backgroundColor = a;
				this.fillBackground()
			},
			enumerable: !0,
			configurable: !0
		});
		b.fillBackground = function() {
			var a = this._bgGraphics,
			c = this._TF_Props_;
			a && a.clear();
			if (c._background || c._border) null == a && (a = this._bgGraphics = new e.Graphics),
			c._background && a.beginFill(c._backgroundColor, 1),
			c._border && a.lineStyle(1, c._borderColor),
			a.drawRect(0, 0, this._getWidth(), this._getHeight()),
			a.endFill()
		};
		b.setFocus = function() {
			e.Logger.warningWithErrorId(1013)
		};
		b._onRemoveFromStage = function() {
			f.prototype._onRemoveFromStage.call(this);
			this._removeEvent();
			this._TF_Props_._type == e.TextFieldType.INPUT && this._inputUtils._removeStageText()
		};
		b._onAddToStage = function() {
			f.prototype._onAddToStage.call(this);
			this._addEvent();
			this._TF_Props_._type == e.TextFieldType.INPUT && this._inputUtils._addStageText()
		};
		b._updateBaseTransform = function() {
			this._getLinesArr();
			0 == this._TF_Props_._textMaxWidth && this._TF_Props_._type != e.TextFieldType.INPUT || f.prototype._updateTransform.call(this)
		};
		b._updateTransform = function() {
			this._TF_Props_._type == e.TextFieldType.INPUT ? this._DO_Props_._normalDirty ? this._inputUtils._updateProperties() : this._inputUtils._updateTransform() : this._updateBaseTransform()
		};
		b._draw = function(a) {
			var c = this._TF_Props_;
			if (c._type == e.TextFieldType.INPUT) {
				if (this._isTyping) return
			} else if (0 == c._textMaxWidth) return;
			f.prototype._draw.call(this, a)
		};
		b._render = function(a) {
			this._bgGraphics && this._bgGraphics._draw(a);
			this.drawText(a);
			this._clearDirty()
		};
		b._measureBounds = function() {
			var a = this._TF_Props_;
			this._getLinesArr();
			return 0 == a._textMaxWidth ? e.Rectangle.identity.initialize(0, 0, 0, 0) : e.Rectangle.identity.initialize(0, 0, a._textMaxWidth, e.TextFieldUtils._getTextHeight(this))
		};
		Object.defineProperty(b, "textFlow", {
			get: function() {
				return this._textArr
			},
			set: function(a) {
				var c = this._TF_Props_;
				this._isFlow = !0;
				var h = "";
				null == a && (a = []);
				for (var b = 0; b < a.length; b++) h += a[b].text;
				c._displayAsPassword ? this._setBaseText(h) : (c._text = h, this.setMiddleStyle(a))
			},
			enumerable: !0,
			configurable: !0
		});
		b.changeToPassText = function(a) {
			if (this._TF_Props_._displayAsPassword) {
				for (var c = "",
				h = 0,
				b = a.length; h < b; h++) switch (a.charAt(h)) {
				case "\n":
					c += "\n";
					break;
				case "\r":
					break;
				default:
					c += "*"
				}
				return c
			}
			return a
		};
		b.setMiddleStyle = function(a) {
			this._isArrayChanged = !0;
			this._textArr = a;
			this._setSizeDirty()
		};
		Object.defineProperty(b, "textWidth", {
			get: function() {
				return this._TF_Props_._textMaxWidth
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "textHeight", {
			get: function() {
				return e.TextFieldUtils._getTextHeight(this)
			},
			enumerable: !0,
			configurable: !0
		});
		b.appendText = function(a) {
			this.appendElement({
				text: a
			})
		};
		b.appendElement = function(a) {
			this._textArr.push(a);
			this.setMiddleStyle(this._textArr)
		};
		b._getLinesArr = function() {
			var a = this._TF_Props_;
			if (!this._isArrayChanged) return this._linesArr;
			this._isArrayChanged = !1;
			var c = this._textArr,
			h = e.MainContext.instance.rendererContext;
			this._linesArr.length = 0;
			a._textMaxHeight = 0;
			a._textMaxWidth = 0;
			if (this._DO_Props_._hasWidthSet && 0 == this._DO_Props_._explicitWidth) return a._numLines = 0,
			[{
				width: 0,
				height: 0,
				charNum: 0,
				elements: [],
				hasNextLine: !1
			}];
			this._isFlow || h.setupFont(this);
			for (var b = this._linesArr,
			d = 0,
			f = 0,
			g = 0,
			k = 0,
			m, l = 0,
			q = c.length; l < q; l++) {
				var t = c[l];
				t.style = t.style || {};
				for (var s = t.text.toString().split(/(?:\r\n|\r|\n)/), B = 0, z = s.length; B < z; B++) {
					null == b[k] && (m = {
						width: 0,
						height: 0,
						elements: [],
						charNum: 0,
						hasNextLine: !1
					},
					b[k] = m, f = g = d = 0);
					var g = a._type == e.TextFieldType.INPUT ? a._size: Math.max(g, t.style.size || a._size),
					r = !0;
					if ("" == s[B]) B == z - 1 && (r = !1);
					else {
						this._isFlow && h.setupFont(this, t.style);
						var y = h.measureText(s[B]);
						if (this._DO_Props_._hasWidthSet) if (d + y <= this._DO_Props_._explicitWidth) m.elements.push({
							width: y,
							text: s[B],
							style: t.style
						}),
						d += y,
						f += s[B].length,
						B == z - 1 && (r = !1);
						else {
							for (var w = r = 0,
							A = s[B], x = A.length; r < x; r++) {
								y = h.measureText(A.charAt(r));
								if (d + y > this._DO_Props_._explicitWidth && 0 != d + r) break;
								w += y;
								d += y;
								f += 1
							}
							0 < r && (m.elements.push({
								width: w,
								text: A.substring(0, r),
								style: t.style
							}), s[B] = A.substring(r));
							B--;
							r = !1
						} else d += y,
						f += s[B].length,
						m.elements.push({
							width: y,
							text: s[B],
							style: t.style
						}),
						B == z - 1 && (r = !1)
					}
					r && (f++, m.hasNextLine = !0);
					B < s.length - 1 && (m.width = d, m.height = g, m.charNum = f, a._textMaxWidth = Math.max(a._textMaxWidth, d), a._textMaxHeight += g, k++)
				}
				l == c.length - 1 && m && (m.width = d, m.height = g, m.charNum = f, a._textMaxWidth = Math.max(a._textMaxWidth, d), a._textMaxHeight += g)
			}
			a._numLines = b.length;
			return b
		};
		b.drawText = function(a) {
			var c = this._TF_Props_,
			h = this._getLinesArr();
			if (0 != c._textMaxWidth) {
				var b = this._DO_Props_._hasWidthSet ? this._DO_Props_._explicitWidth: c._textMaxWidth,
				d = e.TextFieldUtils._getTextHeight(this),
				f = 0,
				g = e.TextFieldUtils._getStartLine(this);
				if (this._DO_Props_._hasHeightSet && this._DO_Props_._explicitHeight > d) var k = e.TextFieldUtils._getValign(this),
				f = f + k * (this._DO_Props_._explicitHeight - d);
				for (var f = Math.round(f), d = e.TextFieldUtils._getHalign(this), k = 0, m = g, l = c._numLines; m < l; m++) {
					var q = h[m],
					t = q.height,
					f = f + t / 2;
					if (m != g) {
						if (c._type == e.TextFieldType.INPUT && !c._multiline) break;
						if (this._DO_Props_._hasHeightSet && f > this._DO_Props_._explicitHeight) break
					}
					for (var k = Math.round((b - q.width) * d), s = 0, B = q.elements.length; s < B; s++) {
						var z = q.elements[s];
						a.drawText(this, z.text, k, f + (t - (z.style.size || c._size)) / 2, z.width, z.style);
						k += z.width
					}
					f += t / 2 + c._lineSpacing
				}
			}
		};
		b._addEvent = function() {
			this.addEventListener(e.TouchEvent.TOUCH_TAP, this.onTapHandler, this)
		};
		b._removeEvent = function() {
			this.removeEventListener(e.TouchEvent.TOUCH_TAP, this.onTapHandler, this)
		};
		b.onTapHandler = function(a) {
			if (this._TF_Props_._type != e.TextFieldType.INPUT && (a = e.TextFieldUtils._getTextElement(this, a.localX, a.localY), null != a && (a = a.style) && a.href && a.href.match(/^event:/))) {
				var c = a.href.match(/^event:/)[0];
				e.TextEvent.dispatchTextEvent(this, e.TextEvent.LINK, a.href.substring(c.length))
			}
		};
		d.default_fontFamily = "Arial";
		return d
	} (e.DisplayObject);
	e.TextField = f;
	f.prototype.__class__ = "egret.TextField"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function e() {
			this.resutlArr = []
		}
		var d = e.prototype;
		d.parser = function(b) {
			this.stackArray = [];
			this.resutlArr = [];
			for (var a = 0,
			c = b.length; a < c;) {
				var h = b.indexOf("<", a);
				0 > h ? (this.addToResultArr(b.substring(a)), a = c) : (this.addToResultArr(b.substring(a, h)), a = b.indexOf(">", h), "/" == b.charAt(h + 1) ? this.stackArray.pop() : this.addToArray(b.substring(h + 1, a)), a += 1)
			}
			return this.resutlArr
		};
		d.addToResultArr = function(b) {
			if ("" != b) {
				var a = [];
				a.push(["&lt;", "<"]);
				a.push(["&gt;", ">"]);
				a.push(["&amp;", "&"]);
				a.push(["&quot;", '"']);
				a.push(["&apos;;", "'"]);
				for (var c = 0; c < a.length; c++) b.replace(new RegExp(a[c][0], "g"), a[c][1]);
				0 < this.stackArray.length ? this.resutlArr.push({
					text: b,
					style: this.stackArray[this.stackArray.length - 1]
				}) : this.resutlArr.push({
					text: b
				})
			}
		};
		d.changeStringToObject = function(b) {
			var a = {};
			b = b.replace(/( )+/g, " ").split(" ");
			for (var c = 0; c < b.length; c++) this.addProperty(a, b[c]);
			return a
		};
		d.addProperty = function(b, a) {
			var c = a.replace(/( )*=( )*/g, "=").split("=");
			c[1] && (c[1] = c[1].replace(/(\"|\')/g, ""));
			switch (c[0].toLowerCase()) {
			case "color":
			case "textcolor":
				c[1] = c[1].replace(/#/, "0x");
				b.textColor = parseInt(c[1]);
				break;
			case "strokecolor":
				c[1] = c[1].replace(/#/, "0x");
				b.strokeColor = parseInt(c[1]);
				break;
			case "stroke":
				b.stroke = parseInt(c[1]);
				break;
			case "b":
				b.bold = "true" == (c[1] || "true");
				break;
			case "i":
				b.italic = "true" == (c[1] || "true");
				break;
			case "size":
				b.size = parseInt(c[1]);
				break;
			case "fontfamily":
				b.fontFamily = c[1];
				break;
			case "href":
				b.href = c[1]
			}
		};
		d.addToArray = function(b) {
			b = this.changeStringToObject(b);
			if (0 != this.stackArray.length) {
				var a = this.stackArray[this.stackArray.length - 1],
				c;
				for (c in a) null == b[c] && (b[c] = a[c])
			}
			this.stackArray.push(b)
		};
		return e
	} ();
	e.HtmlTextParser = f;
	f.prototype.__class__ = "egret.HtmlTextParser"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function e() {}
		e.DYNAMIC = "dynamic";
		e.INPUT = "input";
		return e
	} ();
	e.TextFieldType = f;
	f.prototype.__class__ = "egret.TextFieldType"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d(a) {
			f.call(this);
			this._bitmapY = this._bitmapX = this._sourceHeight = this._sourceWidth = 0;
			this._textureMap = {};
			this.texture = a;
			this._sourceWidth = a._sourceWidth;
			this._sourceHeight = a._sourceHeight;
			this._bitmapX = a._bitmapX - a._offsetX;
			this._bitmapY = a._bitmapY - a._offsetY
		}
		__extends(d, f);
		var b = d.prototype;
		b.getTexture = function(a) {
			return this._textureMap[a]
		};
		b.createTexture = function(a, c, h, b, d, f, g, k, m) {
			void 0 === f && (f = 0);
			void 0 === g && (g = 0);
			"undefined" === typeof k && (k = f + b);
			"undefined" === typeof m && (m = g + d);
			var l = this.texture._clone(),
			q = e.MainContext.instance.rendererContext._texture_scale_factor;
			l._bitmapX = this._bitmapX + c;
			l._bitmapY = this._bitmapY + h;
			l._bitmapWidth = b * q;
			l._bitmapHeight = d * q;
			l._offsetX = f;
			l._offsetY = g;
			l._textureWidth = k * q;
			l._textureHeight = m * q;
			l._sourceWidth = this._sourceWidth;
			l._sourceHeight = this._sourceHeight;
			return this._textureMap[a] = l
		};
		b.dispose = function() {
			this.texture && this.texture.dispose()
		};
		return d
	} (e.HashObject);
	e.SpriteSheet = f;
	f.prototype.__class__ = "egret.SpriteSheet"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this._text = null;
			this._isFocus = !1
		}
		__extends(d, f);
		var b = d.prototype;
		b.init = function(a) {
			this._text = a;
			this.stageText = e.StageText.create();
			this.stageText._setTextField(this._text)
		};
		b._addStageText = function() {
			this._text._inputEnabled || (this._text._DO_Props_._touchEnabled = !0);
			this.stageText._add();
			this.stageText._addListeners();
			this.stageText.addEventListener("updateText", this.updateTextHandler, this);
			this._text.addEventListener(e.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this);
			e.MainContext.instance.stage.addEventListener(e.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this);
			this.stageText.addEventListener("blur", this.blurHandler, this);
			this.stageText.addEventListener("focus", this.focusHandler, this)
		};
		b._removeStageText = function() {
			this._text._inputEnabled || (this._text._DO_Props_._touchEnabled = !1);
			this.stageText._remove();
			this.stageText._removeListeners();
			this.stageText._removeInput();
			this.stageText.removeEventListener("updateText", this.updateTextHandler, this);
			this._text.removeEventListener(e.TouchEvent.TOUCH_BEGIN, this.onMouseDownHandler, this);
			e.MainContext.instance.stage.removeEventListener(e.TouchEvent.TOUCH_BEGIN, this.onStageDownHandler, this);
			this.stageText.removeEventListener("blur", this.blurHandler, this);
			this.stageText.removeEventListener("focus", this.focusHandler, this)
		};
		b._getText = function() {
			return this.stageText._getText()
		};
		b._setText = function(a) {
			this.stageText._setText(a)
		};
		b.focusHandler = function(a) {
			this._isFocus = !0;
			this._text._isTyping = !0;
			this._text.dispatchEvent(new e.FocusEvent(e.FocusEvent.FOCUS_IN))
		};
		b.blurHandler = function(a) {
			this._isFocus = !1;
			this._text._isTyping = !1;
			this._text.dispatchEvent(new e.FocusEvent(e.FocusEvent.FOCUS_OUT))
		};
		b.onMouseDownHandler = function(a) {
			a.stopPropagation();
			this._text._DO_Props_._visible && !this._isFocus && (this._isFocus = !0, this.stageText._show(this._text._TF_Props_._multiline, this._text.size, this._text.width, this._text.height), a = this._text.localToGlobal(), this.stageText._initElement(a.x, a.y, this._text._worldTransform.a, this._text._worldTransform.d))
		};
		b.onStageDownHandler = function(a) {
			this.stageText._hide()
		};
		b.updateTextHandler = function(a) {
			this.resetText();
			this._text.dispatchEvent(new e.Event(e.Event.CHANGE))
		};
		b.resetText = function() {
			this._text._setBaseText(this.stageText._getText())
		};
		b._hideInput = function() {
			this.stageText._removeInput()
		};
		b._updateTransform = function() {
			this._text._updateBaseTransform(); ! this._text._DO_Props_._visible && this.stageText && this._hideInput()
		};
		b._updateProperties = function() {
			if (!this._isFocus) {
				var a = this._text._DO_Props_._stage;
				if (null == a) this.stageText._setVisible(!1);
				else {
					for (var c = this._text,
					h = c._DO_Props_._visible; h;) {
						c = c.parent;
						if (c == a) break;
						h = c._DO_Props_._visible
					}
					this.stageText._setVisible(h)
				}
				this.stageText._setMultiline(this._text._TF_Props_._multiline);
				this.stageText._setTextType(this._text._TF_Props_._displayAsPassword ? "password": "text");
				this.stageText._setText(this._text._TF_Props_._text);
				this.stageText._resetStageText()
			}
			this._updateTransform()
		};
		return d
	} (e.HashObject);
	e.InputController = f;
	f.prototype.__class__ = "egret.InputController"
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d(a, c) {
			e.call(this, a);
			this.firstCharHeight = 0;
			"string" == typeof c ? this.charList = this.parseConfig(c) : c && c.hasOwnProperty("frames") ? this.charList = c.frames: this.charList = {}
		}
		__extends(d, e);
		var b = d.prototype;
		b.getTexture = function(a) {
			var c = this._textureMap[a];
			if (!c) {
				c = this.charList[a];
				if (!c) return null;
				c = this.createTexture(a, c.x, c.y, c.w, c.h, c.offX, c.offY, c.sourceW, c.sourceH);
				this._textureMap[a] = c
			}
			return c
		};
		b._getFirstCharHeight = function() {
			if (0 == this.firstCharHeight) for (var a in this.charList) {
				var c = this.charList[a];
				if (c) {
					var h = c.sourceH;
					void 0 === h && (h = c.h, void 0 === h && (h = 0), c = c.offY, void 0 === c && (c = 0), h += c);
					if (! (0 >= h)) {
						this.firstCharHeight = h;
						break
					}
				}
			}
			return this.firstCharHeight
		};
		b.parseConfig = function(a) {
			a = a.split("\r\n").join("\n");
			a = a.split("\n");
			for (var c = this.getConfigByKey(a[3], "count"), h = {},
			b = 4; b < 4 + c; b++) {
				var d = a[b],
				e = String.fromCharCode(this.getConfigByKey(d, "id")),
				f = {};
				h[e] = f;
				f.x = this.getConfigByKey(d, "x");
				f.y = this.getConfigByKey(d, "y");
				f.w = this.getConfigByKey(d, "width");
				f.h = this.getConfigByKey(d, "height");
				f.offX = this.getConfigByKey(d, "xoffset");
				f.offY = this.getConfigByKey(d, "yoffset")
			}
			return h
		};
		b.getConfigByKey = function(a, c) {
			for (var h = a.split(" "), b = 0, d = h.length; b < d; b++) {
				var e = h[b];
				if (c == e.substring(0, c.length)) return h = e.substring(c.length + 1),
				parseInt(h)
			}
			return 0
		};
		return d
	} (e.SpriteSheet);
	e.BitmapFont = f;
	f.prototype.__class__ = "egret.BitmapFont"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d(a) {
			f.call(this);
			this._isAddedToStage = !1;
			this._frames = this._movieClipData = this._textureToRender = null;
			this._totalFrames = 0;
			this._frameLabels = null;
			this._frameIntervalTime = 0;
			this._eventPool = null;
			this._isPlaying = !1;
			this._isStopped = !0;
			this._passedTime = this._displayedKeyFrameNum = this._nextFrameNum = this._currentFrameNum = this._playTimes = 0;
			this._setMovieClipData(a);
			this.needDraw = !0
		}
		__extends(d, f);
		var b = d.prototype;
		b._init = function() {
			this._reset();
			var a = this._movieClipData;
			a && a._isDataValid() && (this._frames = a.frames, this._totalFrames = a.numFrames, this._frameLabels = a.labels, this._frameIntervalTime = 1E3 / a.frameRate, this._initFrame())
		};
		b._reset = function() {
			this._frames = null;
			this._playTimes = 0;
			this._isPlaying = !1;
			this.setIsStopped(!0);
			this._currentFrameNum = 0;
			this._nextFrameNum = 1;
			this._passedTime = this._displayedKeyFrameNum = 0;
			this._eventPool = []
		};
		b._initFrame = function() {
			this._movieClipData._isTextureValid() && (this._advanceFrame(), this._constructFrame())
		};
		b._render = function(a) {
			var c = this._textureToRender;
			if (this._texture_to_render = c) {
				var h = Math.round(c._offsetX),
				b = Math.round(c._offsetY),
				e = c._bitmapWidth || c._textureWidth,
				f = c._bitmapHeight || c._textureHeight,
				g = Math.round(e),
				k = Math.round(f);
				d.renderFilter.drawImage(a, this, c._bitmapX, c._bitmapY, e, f, h, b, g, k)
			}
		};
		b._measureBounds = function() {
			var a = this._textureToRender;
			return a ? e.Rectangle.identity.initialize(a._offsetX, a._offsetY, a._textureWidth, a._textureHeight) : f.prototype._measureBounds.call(this)
		};
		b._onAddToStage = function() {
			f.prototype._onAddToStage.call(this);
			this._isAddedToStage = !0;
			this._isPlaying && 1 < this._totalFrames && this.setIsStopped(!1)
		};
		b._onRemoveFromStage = function() {
			f.prototype._onRemoveFromStage.call(this);
			this._isAddedToStage = !1;
			this.setIsStopped(!0)
		};
		b._getFrameLabelByName = function(a, c) {
			void 0 === c && (c = !1);
			c && (a = a.toLowerCase());
			var h = this._frameLabels;
			if (h) for (var b = null,
			d = 0; d < h.length; d++) if (b = h[d], c ? b.name.toLowerCase() === a: b.name === a) return b;
			return null
		};
		b._getFrameLabelByFrame = function(a) {
			var c = this._frameLabels;
			if (c) for (var h = null,
			b = 0; b < c.length; b++) if (h = c[b], h.frame === a) return h;
			return null
		};
		b._getFrameLabelForFrame = function(a) {
			var c = null,
			h = null,
			b = this._frameLabels;
			if (b) for (var d = 0; d < b.length; d++) {
				h = b[d];
				if (h.frame > a) break;
				c = h
			}
			return c
		};
		b.play = function(a) {
			void 0 === a && (a = 0);
			this._isPlaying = !0;
			this.setPlayTimes(a);
			1 < this._totalFrames && this._isAddedToStage && this.setIsStopped(!1)
		};
		b.stop = function() {
			this._isPlaying = !1;
			this.setIsStopped(!0)
		};
		b.prevFrame = function() {
			this.gotoAndStop(this._currentFrameNum - 1)
		};
		b.nextFrame = function() {
			this.gotoAndStop(this._currentFrameNum + 1)
		};
		b.gotoAndPlay = function(a, c) {
			void 0 === c && (c = 0);
			if (0 === arguments.length || 2 < arguments.length) throw Error(e.getString(1022, "MovieClip.gotoAndPlay()"));
			this.play(c);
			this._gotoFrame(a)
		};
		b.gotoAndStop = function(a) {
			if (1 != arguments.length) throw Error(e.getString(1022, "MovieClip.gotoAndStop()"));
			this.stop();
			this._gotoFrame(a)
		};
		b._gotoFrame = function(a) {
			var c;
			if ("string" === typeof a) c = this._getFrameLabelByName(a).frame;
			else if (c = parseInt(a + "", 10), c != a) throw Error(e.getString(1022, "Frame Label Not Found"));
			1 > c ? c = 1 : c > this._totalFrames && (c = this._totalFrames);
			c !== this._nextFrameNum && (this._nextFrameNum = c, this._advanceFrame(), this._constructFrame(), this._handlePendingEvent())
		};
		b._advanceTime = function(a) {
			var c = this._frameIntervalTime;
			a = this._passedTime + a;
			this._passedTime = a % c;
			c = a / c;
			if (! (1 > c)) {
				for (; 1 <= c;) {
					c--;
					this._nextFrameNum++;
					if (this._nextFrameNum > this._totalFrames) if ( - 1 == this._playTimes) this._eventPool.push(e.Event.LOOP_COMPLETE),
					this._nextFrameNum = 1;
					else if (this._playTimes--, 0 < this._playTimes) this._eventPool.push(e.Event.LOOP_COMPLETE),
					this._nextFrameNum = 1;
					else {
						this._nextFrameNum = this._totalFrames;
						this._eventPool.push(e.Event.COMPLETE);
						this.stop();
						break
					}
					this._advanceFrame()
				}
				this._constructFrame();
				this._handlePendingEvent();
				this._setDirty()
			}
		};
		b._advanceFrame = function() {
			this._currentFrameNum = this._nextFrameNum
		};
		b._constructFrame = function() {
			var a = this._currentFrameNum;
			this._displayedKeyFrameNum != a && (this._textureToRender = this._movieClipData.getTextureByFrame(a), this._DO_Props_._sizeDirty = !0, this._displayedKeyFrameNum = a)
		};
		b._handlePendingEvent = function() {
			if (0 != this._eventPool.length) {
				this._eventPool.reverse();
				for (var a = this._eventPool,
				c = a.length,
				h = !1,
				b = !1,
				d = 0; d < c; d++) {
					var f = a.pop();
					f == e.Event.LOOP_COMPLETE ? b = !0 : f == e.Event.COMPLETE ? h = !0 : this.dispatchEventWith(f)
				}
				b && this.dispatchEventWith(e.Event.LOOP_COMPLETE);
				h && this.dispatchEventWith(e.Event.COMPLETE)
			}
		};
		Object.defineProperty(b, "totalFrames", {
			get: function() {
				return this._totalFrames
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "currentFrame", {
			get: function() {
				return this._currentFrameNum
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "currentFrameLabel", {
			get: function() {
				var a = this._getFrameLabelByFrame(this._currentFrameNum);
				return a && a.name
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "currentLabel", {
			get: function() {
				var a = this._getFrameLabelForFrame(this._currentFrameNum);
				return a ? a.name: null
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "frameRate", {
			get: function() {
				return this.movieClipData.frameRate
			},
			set: function(a) {
				a != this._movieClipData.frameRate && (this._movieClipData.frameRate = a, this._frameIntervalTime = 1E3 / this._movieClipData.frameRate)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "isPlaying", {
			get: function() {
				return this._isPlaying
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "movieClipData", {
			get: function() {
				return this._movieClipData
			},
			set: function(a) {
				this._setMovieClipData(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setMovieClipData = function(a) {
			this._movieClipData != a && (this._movieClipData = a, this._init())
		};
		b.setPlayTimes = function(a) {
			if (0 > a || 1 <= a) this._playTimes = 0 > a ? -1 : Math.floor(a)
		};
		b.setIsStopped = function(a) {
			this._isStopped != a && ((this._isStopped = a) ? (this._playTimes = 0, e.Ticker.getInstance().unregister(this._advanceTime, this)) : (this._playTimes = 0 == this._playTimes ? 1 : this._playTimes, e.Ticker.getInstance().register(this._advanceTime, this)))
		};
		d.renderFilter = e.RenderFilter.getInstance();
		return d
	} (e.DisplayObject);
	e.MovieClip = f;
	f.prototype.__class__ = "egret.MovieClip"
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d(a, c) {
			e.call(this);
			this._name = a;
			this._frame = c | 0
		}
		__extends(d, e);
		var b = d.prototype;
		Object.defineProperty(b, "name", {
			get: function() {
				return this._name
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "frame", {
			get: function() {
				return this._frame
			},
			enumerable: !0,
			configurable: !0
		});
		b.clone = function() {
			return new d(this._name, this._frame)
		};
		return d
	} (e.EventDispatcher);
	e.FrameLabel = f;
	f.prototype.__class__ = "egret.FrameLabel"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this._mcData = null;
			this.numFrames = 1;
			this.frames = [];
			this.labels = null;
			this.frameRate = 0;
			this.spriteSheet = this.textureData = null
		}
		__extends(d, f);
		var b = d.prototype;
		b._init = function(a, c, h) {
			this.textureData = c;
			this.spriteSheet = h;
			this._setMCData(a)
		};
		b.getKeyFrameData = function(a) {
			a = this.frames[a - 1];
			a.frame && (a = this.frames[a.frame - 1]);
			return a
		};
		b.getTextureByFrame = function(a) {
			a = this.getKeyFrameData(a);
			if (a.res) {
				var c = this.getTextureByResName(a.res);
				c._offsetX = a.x | 0;
				c._offsetY = a.y | 0;
				return c
			}
			return null
		};
		b.getTextureByResName = function(a) {
			var c = this.spriteSheet.getTexture(a);
			c || (c = this.textureData[a], c = this.spriteSheet.createTexture(a, c.x, c.y, c.w, c.h));
			return c
		};
		b._isDataValid = function() {
			return 0 < this.frames.length
		};
		b._isTextureValid = function() {
			return null != this.textureData && null != this.spriteSheet
		};
		b._fillMCData = function(a) {
			this.frameRate = a.frameRate || 24;
			this._fillFramesData(a.frames);
			this._fillFrameLabelsData(a.labels)
		};
		b._fillFramesData = function(a) {
			for (var c = this.frames,
			h = a ? a.length: 0, b, d = 0; d < h; d++) if (b = a[d], c.push(b), b.duration) {
				var e = parseInt(b.duration);
				if (1 < e) {
					b = c.length;
					for (var f = 1; f < e; f++) c.push({
						frame: b
					})
				}
			}
			this.numFrames = c.length
		};
		b._fillFrameLabelsData = function(a) {
			if (a) {
				var c = a.length;
				if (0 < c) {
					this.labels = [];
					for (var h = 0; h < c; h++) {
						var b = a[h];
						this.labels.push(new e.FrameLabel(b.name, b.frame))
					}
				}
			}
		};
		Object.defineProperty(b, "mcData", {
			get: function() {
				return this._mcData
			},
			set: function(a) {
				this._setMCData(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setMCData = function(a) {
			this._mcData != a && (this._mcData = a) && this._fillMCData(a)
		};
		return d
	} (e.HashObject);
	e.MovieClipData = f;
	f.prototype.__class__ = "egret.MovieClipData"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d(a, c) {
			f.call(this);
			this.enableCache = !0;
			this._mcDataCache = {};
			this._mcDataSet = a;
			this.setTexture(c)
		}
		__extends(d, f);
		var b = d.prototype;
		b.clearCache = function() {
			this._mcDataCache = {}
		};
		b.generateMovieClipData = function(a) {
			void 0 === a && (a = "");
			if ("" == a && this._mcDataSet) for (a in this._mcDataSet.mc) break;
			if ("" == a) return null;
			var c = this._findFromCache(a, this._mcDataCache);
			c || (c = new e.MovieClipData, this._fillData(a, c, this._mcDataCache));
			return c
		};
		b._findFromCache = function(a, c) {
			return this.enableCache && c[a] ? c[a] : null
		};
		b._fillData = function(a, c, h) {
			if (this._mcDataSet) {
				var b = this._mcDataSet.mc[a];
				b && (c._init(b, this._mcDataSet.res, this._spriteSheet), this.enableCache && (h[a] = c))
			}
		};
		Object.defineProperty(b, "mcDataSet", {
			get: function() {
				return this._mcDataSet
			},
			set: function(a) {
				this._mcDataSet = a
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "texture", {
			set: function(a) {
				this.setTexture(a)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "spriteSheet", {
			get: function() {
				return this._spriteSheet
			},
			enumerable: !0,
			configurable: !0
		});
		b.setTexture = function(a) {
			this._spriteSheet = a ? new e.SpriteSheet(a) : null
		};
		return d
	} (e.EventDispatcher);
	e.MovieClipDataFactory = f;
	f.prototype.__class__ = "egret.MovieClipDataFactory"
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d() {
			e.call(this);
			this._scaleY = this._scaleX = 1;
			this._size = 30;
			this._color = "#FFFFFF";
			this._fontFamily = "Arial";
			this._italic = this._bold = !1;
			this._textAlign = "left";
			this._verticalAlign = "top";
			this._visible = !1;
			this._height = this._width = 0;
			this._multiline = !1;
			this._maxChars = 0
		}
		__extends(d, e);
		var b = d.prototype;
		b._setTextField = function(a) {
			this._textfield = a
		};
		b._getText = function() {
			return null
		};
		b._setText = function(a) {};
		b._setTextType = function(a) {};
		b._getTextType = function() {
			return null
		};
		b._show = function(a, c, h, b) {};
		b._add = function() {};
		b._remove = function() {};
		b._hide = function() {};
		b._addListeners = function() {};
		b._removeListeners = function() {};
		b._setScale = function(a, c) {
			this._scaleX = a;
			this._scaleY = c
		};
		b.changePosition = function(a, c) {};
		b._setSize = function(a) {
			this._size = a
		};
		b._setTextColor = function(a) {
			this._color = a
		};
		b._setTextFontFamily = function(a) {
			this._fontFamily = a
		};
		b._setBold = function(a) {
			this._bold = a
		};
		b._setItalic = function(a) {
			this._italic = a
		};
		b._setTextAlign = function(a) {
			this._textAlign = a
		};
		b._setVerticalAlign = function(a) {
			this._verticalAlign = a
		};
		b._setVisible = function(a) {
			this._visible = a
		};
		b._setWidth = function(a) {
			this._width = a
		};
		b._setHeight = function(a) {
			this._height = a
		};
		b._setMultiline = function(a) {
			this._multiline = a
		};
		b._setMaxChars = function(a) {
			this._maxChars = a
		};
		b._resetStageText = function() {};
		b._initElement = function(a, c, h, b) {};
		b._removeInput = function() {};
		d.create = function() {
			return null
		};
		return d
	} (e.EventDispatcher);
	e.StageText = f;
	f.prototype.__class__ = "egret.StageText"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function e() {}
		e.GET = "get";
		e.POST = "post";
		return e
	} ();
	e.URLRequestMethod = f;
	f.prototype.__class__ = "egret.URLRequestMethod"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function e() {}
		e.BINARY = "binary";
		e.TEXT = "text";
		e.VARIABLES = "variables";
		e.TEXTURE = "texture";
		e.SOUND = "sound";
		return e
	} ();
	e.URLLoaderDataFormat = f;
	f.prototype.__class__ = "egret.URLLoaderDataFormat"
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d(a) {
			void 0 === a && (a = null);
			e.call(this);
			this.variables = null;
			null !== a && this.decode(a)
		}
		__extends(d, e);
		var b = d.prototype;
		b.decode = function(a) {
			this.variables || (this.variables = {});
			a = a.split("+").join(" ");
			for (var c, h = /[?&]?([^=]+)=([^&]*)/g; c = h.exec(a);) {
				var b = decodeURIComponent(c[1]);
				c = decodeURIComponent(c[2]);
				if (!1 == b in this.variables) this.variables[b] = c;
				else {
					var d = this.variables[b];
					d instanceof Array ? d.push(c) : this.variables[b] = [d, c]
				}
			}
		};
		b.toString = function() {
			if (!this.variables) return "";
			var a = this.variables,
			c = [],
			h;
			for (h in a) c.push(this.encodeValue(h, a[h]));
			return c.join("&")
		};
		b.encodeValue = function(a, c) {
			return c instanceof Array ? this.encodeArray(a, c) : encodeURIComponent(a) + "=" + encodeURIComponent(c)
		};
		b.encodeArray = function(a, c) {
			return a ? 0 == c.length ? encodeURIComponent(a) + "=": c.map(function(c) {
				return encodeURIComponent(a) + "=" + encodeURIComponent(c)
			}).join("&") : ""
		};
		return d
	} (e.HashObject);
	e.URLVariables = f;
	f.prototype.__class__ = "egret.URLVariables"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		return function(e, d) {
			this.value = this.name = "";
			this.name = e;
			this.value = d
		}
	} ();
	e.URLRequestHeader = f;
	f.prototype.__class__ = "egret.URLRequestHeader"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d(b) {
			void 0 === b && (b = null);
			f.call(this);
			this.data = null;
			this.method = e.URLRequestMethod.GET;
			this.url = "";
			this.url = b
		}
		__extends(d, f);
		return d
	} (e.HashObject);
	e.URLRequest = f;
	f.prototype.__class__ = "egret.URLRequest"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d(a) {
			void 0 === a && (a = null);
			f.call(this);
			this.dataFormat = e.URLLoaderDataFormat.TEXT;
			this._request = this.data = null;
			this._status = -1;
			a && this.load(a)
		}
		__extends(d, f);
		var b = d.prototype;
		b.load = function(a) {
			this._request = a;
			this.data = null;
			e.MainContext.instance.netContext.proceed(this)
		};
		b.__recycle = function() {
			this.data = this._request = null
		};
		return d
	} (e.EventDispatcher);
	e.URLLoader = f;
	f.prototype.__class__ = "egret.URLLoader"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this._sourceHeight = this._sourceWidth = this._textureHeight = this._textureWidth = this._offsetY = this._offsetX = this._bitmapHeight = this._bitmapWidth = this._bitmapY = this._bitmapX = 0;
			this._bitmapData = null
		}
		__extends(d, f);
		var b = d.prototype;
		Object.defineProperty(b, "textureWidth", {
			get: function() {
				return this._textureWidth
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "textureHeight", {
			get: function() {
				return this._textureHeight
			},
			enumerable: !0,
			configurable: !0
		});
		b._setBitmapData = function(a) {
			var c = e.MainContext.instance.rendererContext._texture_scale_factor;
			this._bitmapData = a;
			this._sourceWidth = a.width;
			this._sourceHeight = a.height;
			this._textureWidth = this._sourceWidth * c;
			this._textureHeight = this._sourceHeight * c;
			this._bitmapWidth = this._textureWidth;
			this._bitmapHeight = this._textureHeight;
			this._offsetX = this._offsetY = this._bitmapX = this._bitmapY = 0
		};
		b.getPixel32 = function(a, c) {
			return this._bitmapData.getContext("2d").getImageData(a, c, 1, 1).data
		};
		b.dispose = function() {
			var a = this._bitmapData;
			a.dispose && a.dispose()
		};
		b._clone = function() {
			var a = new d;
			a._bitmapData = this._bitmapData;
			return a
		};
		b.draw = function(a, c, h, b, d, e, f, g, m, l) {};
		b._drawForCanvas = function(a, c, h, b, d, e, f, g, m, l) {
			var q = this._bitmapData;
			q && q.avaliable && (void 0 != l ? this._drawRepeatImageForCanvas(a, c, h, b, d, e, f, g, m, l) : a.drawImage(q, c, h, b, d, e, f, g, m))
		};
		b._drawForNative = function(a, c, h, b, d, e, f, g, m, l) {
			var q = this._bitmapData;
			q && q.avaliable && (void 0 !== l ? this._drawRepeatImageForNative(a, c, h, b, d, e, f, g, m, l) : a.drawImage(q, c, h, b, d, e, f, g, m))
		};
		b._drawRepeatImageForNative = function(a, c, h, b, d, f, g, k, m, l) {
			l = e.MainContext.instance.rendererContext._texture_scale_factor;
			b *= l;
			for (d *= l; f < k; f += b) for (var q = g; q < m; q += d) {
				var t = Math.min(b, k - f),
				s = Math.min(d, m - q);
				this._drawForNative(a, c, h, t / l, s / l, f, q, t, s, void 0)
			}
		};
		b._drawRepeatImageForCanvas = function(a, c, h, b, d, f, g, k, m, l) {
			if (void 0 === this.pattern) {
				var q = e.MainContext.instance.rendererContext._texture_scale_factor,
				t = this._bitmapData,
				s = t;
				if (t.width != b || t.height != d || 1 != q) s = document.createElement("canvas"),
				s.width = b * q,
				s.height = d * q,
				s.getContext("2d").drawImage(t, c, h, b, d, 0, 0, b * q, d * q);
				this.pattern = a.createPattern(s, l)
			}
			a.fillStyle = this.pattern;
			a.translate(f, g);
			a.fillRect(0, 0, k, m);
			a.translate( - f, -g)
		};
		b._disposeForCanvas = function() {
			d.deleteWebGLTexture(this);
			var a = this._bitmapData;
			a.onload = null;
			a.onerror = null;
			a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAATSURBVHjaYvj//z8DAAAA//8DAAj8Av7TpXVhAAAAAElFTkSuQmCC";
			a.avaliable = !1;
			console.log("_disposeForCanvas")
		};
		b._disposeForNative = function() {
			var a = this._bitmapData;
			a.dispose();
			a.avaliable = !1;
			console.log("_disposeForNative")
		};
		d.deleteWebGLTexture = function(a) {
			if (a = a._bitmapData) {
				var c = a.webGLTexture;
				if (c) for (var h in c) {
					var b = c[h];
					b.glContext.deleteTexture(b)
				}
				a.webGLTexture = null
			}
		};
		d.createBitmapData = function(a, c) {};
		d._createBitmapDataForCanvasAndWebGl = function(a, c) {
			var h = d._bitmapDataFactory[a];
			h || (h = document.createElement("img"), h.setAttribute("bitmapSrc", a), d._bitmapDataFactory[a] = h);
			if (h.avaliable) c(0, h);
			else {
				h.crossOrigin = d.crossOrigin;
				var b = window.URL || window.webkitURL;
				if (null == d._bitmapCallbackMap[a]) if (d._addToCallbackList(a, c), 0 != a.indexOf("data:") && 0 != a.indexOf("http:") && 0 != a.indexOf("https:") && e.Browser.getInstance().isIOS() && 7 <= parseInt(e.Browser.getInstance().getIOSVersion().charAt(0)) && b) {
					var f = new XMLHttpRequest;
					f.open("get", a, !0);
					f.responseType = "blob";
					f.onload = function() {
						if (200 == this.status) {
							var e = this.response;
							h.onload = function() {
								b.revokeObjectURL(h.src);
								d._onLoad(a, h)
							};
							h.onerror = function() {
								d._onError(a, h)
							};
							h.src = b.createObjectURL(e)
						} else c(1, null)
					};
					f.send()
				} else h.onload = function() {
					d._onLoad(a, h)
				},
				h.onerror = function() {
					d._onError(a, h)
				},
				h.src = a;
				else d._addToCallbackList(a, c)
			}
		};
		d._onLoad = function(a, c) {
			c.avaliable = !0;
			c.onload && (c.onload = null);
			c.onerror && (c.onerror = null);
			var h = d._bitmapCallbackMap[a];
			if (h && h.length) {
				delete d._bitmapCallbackMap[a];
				for (var b = h.length,
				e = 0; e < b; e++)(0, h[e])(0, c)
			}
		};
		d._onError = function(a, c) {
			var h = d._bitmapCallbackMap[a];
			if (h && h.length) {
				delete d._bitmapCallbackMap[a];
				for (var b = h.length,
				e = 0; e < b; e++)(0, h[e])(1, c)
			}
		};
		d._createBitmapDataForNative = function(a, c) {
			console.log("_createBitmapDataForNative:" + a);
			var h = d._bitmapDataFactory[a];
			h ? (h.avaliable || (console.log("reload"), h.reload(), h.avaliable = !0), c(0, h)) : e.NativeNetContext.__use_asyn ? d._bitmapCallbackMap[a] ? d._addToCallbackList(a, c) : (d._addToCallbackList(a, c), h = new e.PromiseObject, h.onSuccessFunc = function(c) {
				d._bitmapDataFactory[a] = c;
				d._onLoad(a, c)
			},
			h.onErrorFunc = function() {
				d._onError(a, null)
			},
			console.log("addTextureAsyn"), egret_native.Texture.addTextureAsyn(a, h)) : (console.log("addTexture"), h = egret_native.Texture.addTexture(a), d._bitmapDataFactory[a] = h, h.avaliable = !0, c(0, h))
		};
		d._addToCallbackList = function(a, c) {
			var h = d._bitmapCallbackMap[a];
			h || (h = []);
			h.push(c);
			d._bitmapCallbackMap[a] = h
		};
		d.crossOrigin = null;
		d._bitmapDataFactory = {};
		d._bitmapCallbackMap = {};
		return d
	}(e.HashObject);
	e.Texture = f;
	f.prototype.__class__ = "egret.Texture"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this)
		}
		__extends(d, f);
		var b = d.prototype;
		b.init = function() {
			this._bitmapData = document.createElement("canvas");
			this._bitmapData.avaliable = !0;
			this.renderContext = e.RendererContext.createRendererContext(this._bitmapData)
		};
		b.drawToTexture = function(a, c, h) {
			var b = c || a.getBounds(e.Rectangle.identity);
			if (0 == b.width || 0 == b.height) return ! 1;
			this._bitmapData || this.init();
			var f = b.x,
			g = b.y,
			n = b.width,
			b = b.height,
			k, m, l = e.MainContext.instance.rendererContext._texture_scale_factor;
			k = n / l;
			m = b / l;
			k = Math.round(k);
			m = Math.round(m);
			this.setSize(k, m);
			this.begin();
			a._worldTransform.identity();
			a._worldTransform.a = 1 / l;
			a._worldTransform.d = 1 / l;
			h && (a._worldTransform.a *= h, a._worldTransform.d *= h);
			h = a._DO_Props_._anchorOffsetX;
			l = a._DO_Props_._anchorOffsetY;
			if (0 != a._DO_Props_._anchorX || 0 != a._DO_Props_._anchorY) h = a._DO_Props_._anchorX * k,
			l = a._DO_Props_._anchorY * m;
			this._offsetX = f + h;
			this._offsetY = g + l;
			a._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
			c && (this._offsetX -= f, this._offsetY -= g);
			a.worldAlpha = 1;
			if (a instanceof e.DisplayObjectContainer) for (c = a._children, f = 0, g = c.length; f < g; f++) c[f]._updateTransform();
			this.renderContext.setTransform(a._worldTransform);
			c = e.RenderFilter.getInstance();
			f = c._drawAreaList.concat();
			c._drawAreaList.length = 0;
			this.renderContext.clearScreen();
			this.renderContext.onRenderStart();
			e.Texture.deleteWebGLTexture(this);
			a._hasFilters() && a._setGlobalFilters(this.renderContext); (g = a.mask || a._DO_Props_._scrollRect) && this.renderContext.pushMask(g);
			h = e.MainContext.__use_new_draw;
			e.MainContext.__use_new_draw = !1;
			a._render(this.renderContext);
			e.MainContext.__use_new_draw = h;
			g && this.renderContext.popMask();
			a._hasFilters() && a._removeGlobalFilters(this.renderContext);
			d.identityRectangle.width = k;
			d.identityRectangle.height = m;
			c.addDrawArea(d.identityRectangle);
			this.renderContext.onRenderFinish();
			c._drawAreaList = f;
			this._sourceWidth = k;
			this._sourceHeight = m;
			this._textureWidth = Math.round(n);
			this._textureHeight = Math.round(b);
			this.end();
			return ! 0
		};
		b.setSize = function(a, c) {
			var h = this._bitmapData;
			h.width = a;
			h.height = c;
			h.style.width = a + "px";
			h.style.height = c + "px";
			this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = a, this.renderContext._cacheCanvas.height = c)
		};
		b.begin = function() {};
		b.end = function() {};
		b.dispose = function() {
			this._bitmapData && (this.renderContext = this._bitmapData = null)
		};
		d.create = function() {
			return d._pool.length ? d._pool.pop() : new d
		};
		d.release = function(a) {
			d._pool.push(a)
		};
		d.identityRectangle = new e.Rectangle;
		d._pool = [];
		return d
	} (e.Texture);
	e.RenderTexture = f;
	f.prototype.__class__ = "egret.RenderTexture"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this.renderCost = 0;
			this._texture_scale_factor = 1;
			this.profiler = e.Profiler.getInstance();
			d.blendModesForGL || d.initBlendMode()
		}
		__extends(d, f);
		var b = d.prototype;
		Object.defineProperty(b, "texture_scale_factor", {
			get: function() {
				return this._texture_scale_factor
			},
			set: function(a) {
				this._setTextureScaleFactor(a)
			},
			enumerable: !0,
			configurable: !0
		});
		b._setTextureScaleFactor = function(a) {
			this._texture_scale_factor = a
		};
		b.clearScreen = function() {};
		b.clearRect = function(a, c, h, b) {};
		b.drawImage = function(a, c, h, b, d, e, f, g, m, l) {
			this.profiler.onDrawImage()
		};
		b.drawImageScale9 = function(a, c, h, b, d, e, f, g, m, l) {
			return ! 1
		};
		b._addOneDraw = function() {
			this.profiler.onDrawImage()
		};
		b.setTransform = function(a) {};
		b.setAlpha = function(a, c) {};
		b.setupFont = function(a, c) {};
		b.measureText = function(a) {
			return 0
		};
		b.drawText = function(a, c, h, b, d, e) {
			this.profiler.onDrawImage()
		};
		b.strokeRect = function(a, c, h, b, d) {};
		b.pushMask = function(a) {};
		b.popMask = function() {};
		b.onRenderStart = function() {};
		b.onRenderFinish = function() {};
		b.setGlobalFilters = function(a) {};
		b.drawCursor = function(a, c, h, b) {};
		d.createRendererContext = function(a) {
			return null
		};
		d.initBlendMode = function() {
			d.blendModesForGL = {};
			d.blendModesForGL[e.BlendMode.NORMAL] = [1, 771];
			d.blendModesForGL[e.BlendMode.ADD] = [770, 1];
			d.blendModesForGL[e.BlendMode.ERASE] = [0, 771];
			d.blendModesForGL[e.BlendMode.ERASE_REVERSE] = [0, 770]
		};
		d.registerBlendModeForGL = function(a, c, h, b) {
			d.blendModesForGL[a] && !b ? e.Logger.warningWithErrorId(1005, a) : d.blendModesForGL[a] = [c, h]
		};
		d.imageSmoothingEnabled = !0;
		d.blendModesForGL = null;
		return d
	} (e.HashObject);
	e.RendererContext = f;
	f.prototype.__class__ = "egret.RendererContext"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function e() {}
		e.MOUSE = "mouse";
		e.TOUCH = "touch";
		e.mode = "touch";
		return e
	} ();
	e.InteractionMode = f;
	f.prototype.__class__ = "egret.InteractionMode"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this._currentTouchTarget = {};
			this.maxTouches = 2;
			this.touchDownTarget = {};
			this.touchingIdentifiers = [];
			this.lastTouchY = this.lastTouchX = -1
		}
		__extends(d, f);
		var b = d.prototype;
		b.run = function() {};
		b.getTouchData = function(a, c, h) {
			var b = this._currentTouchTarget[a];
			null == b && (b = {},
			this._currentTouchTarget[a] = b);
			b.stageX = c;
			b.stageY = h;
			b.identifier = a;
			return b
		};
		b.dispatchEvent = function(a, c) {
			e.TouchEvent.dispatchTouchEvent(c.target, a, c.identifier, c.stageX, c.stageY, !1, !1, !1, !0 == this.touchDownTarget[c.identifier])
		};
		b.onTouchBegan = function(a, c, h) {
			if (this.touchingIdentifiers.length != this.maxTouches) {
				this.lastTouchX = a;
				this.lastTouchY = c;
				var b = e.MainContext.instance.stage.hitTest(a, c);
				b && (a = this.getTouchData(h, a, c), this.touchDownTarget[h] = !0, a.target = b, a.beginTarget = b, this.dispatchEvent(e.TouchEvent.TOUCH_BEGIN, a));
				this.touchingIdentifiers.push(h)
			}
		};
		b.onTouchMove = function(a, c, h) {
			if ( - 1 != this.touchingIdentifiers.indexOf(h) && (a != this.lastTouchX || c != this.lastTouchY)) {
				this.lastTouchX = a;
				this.lastTouchY = c;
				var b = e.MainContext.instance.stage.hitTest(a, c);
				b && (a = this.getTouchData(h, a, c), a.target = b, this.dispatchEvent(e.TouchEvent.TOUCH_MOVE, a))
			}
		};
		b.onTouchEnd = function(a, c, h) {
			var b = this.touchingIdentifiers.indexOf(h); - 1 != b && (this.touchingIdentifiers.splice(b, 1), b = e.MainContext.instance.stage.hitTest(a, c)) && (a = this.getTouchData(h, a, c), delete this.touchDownTarget[h], h = a.beginTarget, a.target = b, this.dispatchEvent(e.TouchEvent.TOUCH_END, a), h == b ? this.dispatchEvent(e.TouchEvent.TOUCH_TAP, a) : a.beginTarget && (a.target = a.beginTarget, this.dispatchEvent(e.TouchEvent.TOUCH_RELEASE_OUTSIDE, a)), delete this._currentTouchTarget[a.identifier])
		};
		return d
	} (e.HashObject);
	e.TouchContext = f;
	f.prototype.__class__ = "egret.TouchContext"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this)
		}
		__extends(d, f);
		var b = d.prototype;
		b.proceed = function(a) {};
		d._getUrl = function(a) {
			var c = a.url; - 1 == c.indexOf("?") && a.method == e.URLRequestMethod.GET && a.data && a.data instanceof e.URLVariables && (c = c + "?" + a.data.toString());
			return c
		};
		b.getChangeList = function() {
			return []
		};
		return d
	} (e.HashObject);
	e.NetContext = f;
	f.prototype.__class__ = "egret.NetContext"
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d() {
			e.call(this);
			this.frameRate = 60
		}
		__extends(d, e);
		d.prototype.executeMainLoop = function(b, a) {};
		return d
	} (e.HashObject);
	e.DeviceContext = f;
	f.prototype.__class__ = "egret.DeviceContext"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function e() {}
		e.call = function(d, b) {};
		e.addCallback = function(d, b) {};
		return e
	} ();
	e.ExternalInterface = f;
	f.prototype.__class__ = "egret.ExternalInterface"
})(egret || (egret = {}));
(function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this.header = this.trans = null;
			this.ua = navigator.userAgent.toLowerCase();
			this.trans = this.getTrans("transform")
		}
		__extends(d, f);
		var b = d.prototype;
		d.getInstance = function() {
			null == d.instance && (d.instance = new d);
			return d.instance
		};
		Object.defineProperty(b, "isMobile", {
			get: function() {
				e.Logger.warningWithErrorId(1E3);
				return e.MainContext.deviceType == e.MainContext.DEVICE_MOBILE
			},
			enumerable: !0,
			configurable: !0
		});
		b.isIOS = function() {
			return 0 > this.ua.indexOf("windows") && (0 <= this.ua.indexOf("iphone") || 0 <= this.ua.indexOf("ipad") || 0 <= this.ua.indexOf("ipod"))
		};
		b.getIOSVersion = function() {
			return this.ua.toLowerCase().match(/cpu [^\d]*\d.*like mac os x/)[0].match(/\d(_\d)*/)[0]
		};
		b.getUserAgent = function() {
			return this.ua
		};
		b.getTrans = function(a, c) {
			void 0 === c && (c = !1);
			var h = "";
			c ? h = this.getHeader(a) : (null == this.header && (this.header = this.getHeader("transform")), h = this.header);
			return "" == h ? a: h + a.charAt(0).toUpperCase() + a.substring(1, a.length)
		};
		b.getHeader = function(a) {
			var c = document.createElement("div").style;
			if (a in c) return "";
			a = a.charAt(0).toUpperCase() + a.substring(1, a.length);
			for (var h = ["webkit", "ms", "Moz", "O"], b = 0; b < h.length; b++) if (h[b] + a in c) return h[b];
			return ""
		};
		b.$new = function(a) {
			return this.$(document.createElement(a))
		};
		b.$ = function(a) {
			var c = document;
			if (a = a instanceof HTMLElement ? a: c.querySelector(a)) a.find = a.find || this.$,
			a.hasClass = a.hasClass ||
			function(c) {
				return this.className.match(new RegExp("(\\s|^)" + c + "(\\s|$)"))
			},
			a.addClass = a.addClass ||
			function(c) {
				this.hasClass(c) || (this.className && (this.className += " "), this.className += c);
				return this
			},
			a.removeClass = a.removeClass ||
			function(c) {
				this.hasClass(c) && (this.className = this.className.replace(c, ""));
				return this
			},
			a.remove = a.remove ||
			function() {},
			a.appendTo = a.appendTo ||
			function(c) {
				c.appendChild(this);
				return this
			},
			a.prependTo = a.prependTo ||
			function(c) {
				c.childNodes[0] ? c.insertBefore(this, c.childNodes[0]) : c.appendChild(this);
				return this
			},
			a.transforms = a.transforms ||
			function() {
				this.style[d.getInstance().trans] = d.getInstance().translate(this.position) + d.getInstance().rotate(this.rotation) + d.getInstance().scale(this.scale) + d.getInstance().skew(this.skew);
				return this
			},
			a.position = a.position || {
				x: 0,
				y: 0
			},
			a.rotation = a.rotation || 0,
			a.scale = a.scale || {
				x: 1,
				y: 1
			},
			a.skew = a.skew || {
				x: 0,
				y: 0
			},
			a.translates = function(c, a) {
				this.position.x = c;
				this.position.y = a - e.MainContext.instance.stage.stageHeight;
				this.transforms();
				return this
			},
			a.rotate = function(c) {
				this.rotation = c;
				this.transforms();
				return this
			},
			a.resize = function(c, a) {
				this.scale.x = c;
				this.scale.y = a;
				this.transforms();
				return this
			},
			a.setSkew = function(c, a) {
				this.skew.x = c;
				this.skew.y = a;
				this.transforms();
				return this
			};
			return a
		};
		b.translate = function(a) {
			return "translate(" + a.x + "px, " + a.y + "px) "
		};
		b.rotate = function(a) {
			return "rotate(" + a + "deg) "
		};
		b.scale = function(a) {
			return "scale(" + a.x + ", " + a.y + ") "
		};
		b.skew = function(a) {
			return "skewX(" + -a.x + "deg) skewY(" + a.y + "deg)"
		};
		return d
	} (e.HashObject);
	e.Browser = f;
	f.prototype.__class__ = "egret.Browser"
})(egret || (egret = {}));
 (function(e) { (function(e) {
		e.getItem = function(e) {
			return null
		};
		e.setItem = function(e, d) {
			return ! 1
		};
		e.removeItem = function(e) {};
		e.clear = function() {}
	})(e.localStorage || (e.localStorage = {}))
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function f() {}
		f.parse = function(d) {
			d = e.SAXParser.getInstance().parserXML(d);
			if (!d || !d.childNodes) return null;
			for (var b = d.childNodes.length,
			a = !1,
			c = 0; c < b; c++) {
				var h = d.childNodes[c];
				if (1 == h.nodeType) {
					a = !0;
					break
				}
			}
			return a ? f.parseNode(h) : null
		};
		f.parseNode = function(d) {
			if (!d || 1 != d.nodeType) return null;
			var b = {};
			b.localName = d.localName;
			b.name = d.nodeName;
			d.namespaceURI && (b.namespace = d.namespaceURI);
			d.prefix && (b.prefix = d.prefix);
			for (var a = d.attributes,
			c = a.length,
			h = 0; h < c; h++) {
				var e = a[h],
				v = e.name;
				0 != v.indexOf("xmlns:") && (b["$" + v] = e.value)
			}
			a = d.childNodes;
			c = a.length;
			for (h = 0; h < c; h++) if (e = f.parseNode(a[h])) b.children || (b.children = []),
			e.parent = b,
			b.children.push(e); ! b.children && (d = d.textContent.trim()) && (b.text = d);
			return b
		};
		f.findChildren = function(d, b, a) {
			a ? a.length = 0 : a = [];
			f.findByPath(d, b, a);
			return a
		};
		f.findByPath = function(d, b, a) {
			var c = b.indexOf("."),
			h; - 1 == c ? (h = b, c = !0) : (h = b.substring(0, c), b = b.substring(c + 1), c = !1);
			if (d = d.children) for (var e = d.length,
			v = 0; v < e; v++) {
				var u = d[v];
				u.localName == h && (c ? a.push(u) : f.findByPath(u, b, a))
			}
		};
		f.getAttributes = function(d, b) {
			b ? b.length = 0 : b = [];
			for (var a in d)"$" == a.charAt(0) && b.push(a.substring(1));
			return b
		};
		return f
	} ();
	e.XML = f;
	f.prototype.__class__ = "egret.XML"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function d() {}
		d.LITTLE_ENDIAN = "littleEndian";
		d.BIG_ENDIAN = "bigEndian";
		return d
	} ();
	e.Endian = f;
	f.prototype.__class__ = "egret.Endian";
	var g = function() {
		function d(a) {
			this.BUFFER_EXT_SIZE = 0;
			this.EOF_code_point = this.EOF_byte = -1;
			this._setArrayBuffer(a || new ArrayBuffer(this.BUFFER_EXT_SIZE));
			this.endian = f.BIG_ENDIAN
		}
		var b = d.prototype;
		b._setArrayBuffer = function(a) {
			this.write_position = a.byteLength;
			this.data = new DataView(a);
			this._position = 0
		};
		b.setArrayBuffer = function(a) {};
		Object.defineProperty(b, "buffer", {
			get: function() {
				return this.data.buffer
			},
			set: function(a) {
				this.data = new DataView(a)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "dataView", {
			get: function() {
				return this.data
			},
			set: function(a) {
				this.data = a;
				this.write_position = a.byteLength
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "bufferOffset", {
			get: function() {
				return this.data.byteOffset
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "position", {
			get: function() {
				return this._position
			},
			set: function(a) {
				this._position < a && !this.validate(a - this._position) || (this._position = a, this.write_position = a > this.write_position ? a: this.write_position)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "length", {
			get: function() {
				return this.write_position
			},
			set: function(a) {
				this.validateBuffer(a, !0)
			},
			enumerable: !0,
			configurable: !0
		});
		Object.defineProperty(b, "bytesAvailable", {
			get: function() {
				return this.data.byteLength - this._position
			},
			enumerable: !0,
			configurable: !0
		});
		b.clear = function() {
			this._setArrayBuffer(new ArrayBuffer(this.BUFFER_EXT_SIZE))
		};
		b.readBoolean = function() {
			return this.validate(d.SIZE_OF_BOOLEAN) ? 0 != this.data.getUint8(this.position++) : null
		};
		b.readByte = function() {
			return this.validate(d.SIZE_OF_INT8) ? this.data.getInt8(this.position++) : null
		};
		b.readBytes = function(a, c, h) {
			void 0 === c && (c = 0);
			void 0 === h && (h = 0);
			if (0 == h) h = this.bytesAvailable;
			else if (!this.validate(h)) return null;
			a ? a.validateBuffer(h) : a = new d(new ArrayBuffer(h));
			for (var b = 0; b < h; b++) a.data.setUint8(b + c, this.data.getUint8(this.position++))
		};
		b.readDouble = function() {
			if (!this.validate(d.SIZE_OF_FLOAT64)) return null;
			var a = this.data.getFloat64(this.position, this.endian == f.LITTLE_ENDIAN);
			this.position += d.SIZE_OF_FLOAT64;
			return a
		};
		b.readFloat = function() {
			if (!this.validate(d.SIZE_OF_FLOAT32)) return null;
			var a = this.data.getFloat32(this.position, this.endian == f.LITTLE_ENDIAN);
			this.position += d.SIZE_OF_FLOAT32;
			return a
		};
		b.readInt = function() {
			if (!this.validate(d.SIZE_OF_INT32)) return null;
			var a = this.data.getInt32(this.position, this.endian == f.LITTLE_ENDIAN);
			this.position += d.SIZE_OF_INT32;
			return a
		};
		b.readShort = function() {
			if (!this.validate(d.SIZE_OF_INT16)) return null;
			var a = this.data.getInt16(this.position, this.endian == f.LITTLE_ENDIAN);
			this.position += d.SIZE_OF_INT16;
			return a
		};
		b.readUnsignedByte = function() {
			return this.validate(d.SIZE_OF_UINT8) ? this.data.getUint8(this.position++) : null
		};
		b.readUnsignedInt = function() {
			if (!this.validate(d.SIZE_OF_UINT32)) return null;
			var a = this.data.getUint32(this.position, this.endian == f.LITTLE_ENDIAN);
			this.position += d.SIZE_OF_UINT32;
			return a
		};
		b.readUnsignedShort = function() {
			if (!this.validate(d.SIZE_OF_UINT16)) return null;
			var a = this.data.getUint16(this.position, this.endian == f.LITTLE_ENDIAN);
			this.position += d.SIZE_OF_UINT16;
			return a
		};
		b.readUTF = function() {
			if (!this.validate(d.SIZE_OF_UINT16)) return null;
			var a = this.data.getUint16(this.position, this.endian == f.LITTLE_ENDIAN);
			this.position += d.SIZE_OF_UINT16;
			return 0 < a ? this.readUTFBytes(a) : ""
		};
		b.readUTFBytes = function(a) {
			if (!this.validate(a)) return null;
			var c = new Uint8Array(this.buffer, this.bufferOffset + this.position, a);
			this.position += a;
			return this.decodeUTF8(c)
		};
		b.writeBoolean = function(a) {
			this.validateBuffer(d.SIZE_OF_BOOLEAN);
			this.data.setUint8(this.position++, a ? 1 : 0)
		};
		b.writeByte = function(a) {
			this.validateBuffer(d.SIZE_OF_INT8);
			this.data.setInt8(this.position++, a)
		};
		b.writeBytes = function(a, c, h) {
			void 0 === c && (c = 0);
			void 0 === h && (h = 0);
			if (! (0 > c || 0 > h) && (h = 0 == h ? a.length - c: Math.min(a.length - c, h), 0 < h)) {
				this.validateBuffer(h);
				a = new DataView(a.buffer);
				for (var b = c; b < h + c; b++) this.data.setUint8(this.position++, a.getUint8(b))
			}
		};
		b.writeDouble = function(a) {
			this.validateBuffer(d.SIZE_OF_FLOAT64);
			this.data.setFloat64(this.position, a, this.endian == f.LITTLE_ENDIAN);
			this.position += d.SIZE_OF_FLOAT64
		};
		b.writeFloat = function(a) {
			this.validateBuffer(d.SIZE_OF_FLOAT32);
			this.data.setFloat32(this.position, a, this.endian == f.LITTLE_ENDIAN);
			this.position += d.SIZE_OF_FLOAT32
		};
		b.writeInt = function(a) {
			this.validateBuffer(d.SIZE_OF_INT32);
			this.data.setInt32(this.position, a, this.endian == f.LITTLE_ENDIAN);
			this.position += d.SIZE_OF_INT32
		};
		b.writeShort = function(a) {
			this.validateBuffer(d.SIZE_OF_INT16);
			this.data.setInt16(this.position, a, this.endian == f.LITTLE_ENDIAN);
			this.position += d.SIZE_OF_INT16
		};
		b.writeUnsignedInt = function(a) {
			this.validateBuffer(d.SIZE_OF_UINT32);
			this.data.setUint32(this.position, a, this.endian == f.LITTLE_ENDIAN);
			this.position += d.SIZE_OF_UINT32
		};
		b.writeUTF = function(a) {
			a = this.encodeUTF8(a);
			var c = a.length;
			this.validateBuffer(d.SIZE_OF_UINT16 + c);
			this.data.setUint16(this.position, c, this.endian === f.LITTLE_ENDIAN);
			this.position += d.SIZE_OF_UINT16;
			this._writeUint8Array(a, !1)
		};
		b.writeUTFBytes = function(a) {
			this._writeUint8Array(this.encodeUTF8(a))
		};
		b.toString = function() {
			return "[ByteArray] length:" + this.length + ", bytesAvailable:" + this.bytesAvailable
		};
		b._writeUint8Array = function(a, c) {
			void 0 === c && (c = !0);
			c && this.validateBuffer(this.position + a.length);
			for (var h = 0; h < a.length; h++) this.data.setUint8(this.position++, a[h])
		};
		b.validate = function(a) {
			if (0 < this.data.byteLength && this._position + a <= this.data.byteLength) return ! 0;
			throw e.getString(1025);
		};
		b.validateBuffer = function(a, c) {
			void 0 === c && (c = !1);
			this.write_position = a > this.write_position ? a: this.write_position;
			a += this._position;
			if (this.data.byteLength < a || c) {
				var h = new Uint8Array(new ArrayBuffer(a + this.BUFFER_EXT_SIZE)),
				b = Math.min(this.data.buffer.byteLength, a + this.BUFFER_EXT_SIZE);
				h.set(new Uint8Array(this.data.buffer, 0, b));
				this.buffer = h.buffer
			}
		};
		b.encodeUTF8 = function(a) {
			var c = 0;
			a = this.stringToCodePoints(a);
			for (var h = []; a.length > c;) {
				var b = a[c++];
				if (this.inRange(b, 55296, 57343)) this.encoderError(b);
				else if (this.inRange(b, 0, 127)) h.push(b);
				else {
					var d, e;
					this.inRange(b, 128, 2047) ? (d = 1, e = 192) : this.inRange(b, 2048, 65535) ? (d = 2, e = 224) : this.inRange(b, 65536, 1114111) && (d = 3, e = 240);
					for (h.push(this.div(b, Math.pow(64, d)) + e); 0 < d;) {
						var f = this.div(b, Math.pow(64, d - 1));
						h.push(128 + f % 64);
						d -= 1
					}
				}
			}
			return new Uint8Array(h)
		};
		b.decodeUTF8 = function(a) {
			for (var c = 0,
			h = "",
			b, d = 0,
			e = 0,
			f = 0,
			g = 0; a.length > c;) {
				b = a[c++];
				if (b === this.EOF_byte) b = 0 !== e ? this.decoderError(!1) : this.EOF_code_point;
				else if (0 === e) this.inRange(b, 0, 127) || (this.inRange(b, 194, 223) ? (e = 1, g = 128, d = b - 192) : this.inRange(b, 224, 239) ? (e = 2, g = 2048, d = b - 224) : this.inRange(b, 240, 244) ? (e = 3, g = 65536, d = b - 240) : this.decoderError(!1), d *= Math.pow(64, e), b = null);
				else if (this.inRange(b, 128, 191)) if (f += 1, d += (b - 128) * Math.pow(64, e - f), f !== e) b = null;
				else {
					var m = d,
					l = g,
					g = f = e = d = 0;
					b = this.inRange(m, l, 1114111) && !this.inRange(m, 55296, 57343) ? m: this.decoderError(!1, b)
				} else g = f = e = d = 0,
				c--,
				b = this.decoderError(!1, b);
				null !== b && b !== this.EOF_code_point && (65535 >= b ? 0 < b && (h += String.fromCharCode(b)) : (b -= 65536, h += String.fromCharCode(55296 + (b >> 10 & 1023)), h += String.fromCharCode(56320 + (b & 1023))))
			}
			return h
		};
		b.encoderError = function(a) {
			throw e.getString(1026, a);
		};
		b.decoderError = function(a, c) {
			if (a) throw e.getString(1027);
			return c || 65533
		};
		b.inRange = function(a, c, h) {
			return c <= a && a <= h
		};
		b.div = function(a, c) {
			return Math.floor(a / c)
		};
		b.stringToCodePoints = function(a) {
			for (var c = [], h = 0, b = a.length; h < a.length;) {
				var d = a.charCodeAt(h);
				if (this.inRange(d, 55296, 57343)) if (this.inRange(d, 56320, 57343)) c.push(65533);
				else if (h === b - 1) c.push(65533);
				else {
					var e = a.charCodeAt(h + 1);
					this.inRange(e, 56320, 57343) ? (d &= 1023, e &= 1023, h += 1, c.push(65536 + (d << 10) + e)) : c.push(65533)
				} else c.push(d);
				h += 1
			}
			return c
		};
		d.SIZE_OF_BOOLEAN = 1;
		d.SIZE_OF_INT8 = 1;
		d.SIZE_OF_INT16 = 2;
		d.SIZE_OF_INT32 = 4;
		d.SIZE_OF_UINT8 = 1;
		d.SIZE_OF_UINT16 = 2;
		d.SIZE_OF_UINT32 = 4;
		d.SIZE_OF_FLOAT32 = 4;
		d.SIZE_OF_FLOAT64 = 8;
		return d
	} ();
	e.ByteArray = g;
	g.prototype.__class__ = "egret.ByteArray"
})(egret || (egret = {}));
 (function(e) {
	e.getOption = function(e) {
		if (window.hasOwnProperty("location")) {
			var g = location.search;
			if ("" == g) return "";
			for (var g = g.slice(1), g = g.split("&"), d = g.length, b = 0; b < d; b++) {
				var a = g[b].split("=");
				if (a[0] == e) return a[1]
			}
		}
		return ""
	}
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d(a, c, h) {
			f.call(this);
			this._target = null;
			this.loop = this.ignoreGlobalPause = this._useTicks = !1;
			this._actions = this._steps = this.pluginData = null;
			this.paused = !1;
			this.duration = 0;
			this._prevPos = -1;
			this.position = null;
			this._stepPosition = this._prevPosition = 0;
			this.passive = !1;
			this.initialize(a, c, h)
		}
		__extends(d, f);
		var b = d.prototype;
		d.get = function(a, c, h, b) {
			void 0 === c && (c = null);
			void 0 === h && (h = null);
			void 0 === b && (b = !1);
			b && d.removeTweens(a);
			return new d(a, c, h)
		};
		d.removeTweens = function(a) {
			if (a.tween_count) {
				for (var c = d._tweens,
				h = c.length - 1; 0 <= h; h--) c[h]._target == a && (c[h].paused = !0, c.splice(h, 1));
				a.tween_count = 0
			}
		};
		d.pauseTweens = function(a) {
			if (a.tween_count) for (var c = e.Tween._tweens,
			h = c.length - 1; 0 <= h; h--) c[h]._target == a && (c[h].paused = !0)
		};
		d.resumeTweens = function(a) {
			if (a.tween_count) for (var c = e.Tween._tweens,
			h = c.length - 1; 0 <= h; h--) c[h]._target == a && (c[h].paused = !1)
		};
		d.tick = function(a, c) {
			void 0 === c && (c = !1);
			for (var h = d._tweens.concat(), b = h.length - 1; 0 <= b; b--) {
				var e = h[b];
				c && !e.ignoreGlobalPause || e.paused || e.tick(e._useTicks ? 1 : a)
			}
		};
		d._register = function(a, c) {
			var h = a._target,
			b = d._tweens;
			if (c) h && (h.tween_count = 0 < h.tween_count ? h.tween_count + 1 : 1),
			b.push(a),
			d._inited || (e.Ticker.getInstance().register(d.tick, null), d._inited = !0);
			else for (h && h.tween_count--, h = b.length; h--;) if (b[h] == a) {
				b.splice(h, 1);
				break
			}
		};
		d.removeAllTweens = function() {
			for (var a = d._tweens,
			c = 0,
			h = a.length; c < h; c++) {
				var b = a[c];
				b.paused = !0;
				b._target.tweenjs_count = 0
			}
			a.length = 0
		};
		b.initialize = function(a, c, h) {
			this._target = a;
			c && (this._useTicks = c.useTicks, this.ignoreGlobalPause = c.ignoreGlobalPause, this.loop = c.loop, c.onChange && this.addEventListener("change", c.onChange, c.onChangeObj), c.override && d.removeTweens(a));
			this.pluginData = h || {};
			this._curQueueProps = {};
			this._initQueueProps = {};
			this._steps = [];
			this._actions = [];
			c && c.paused ? this.paused = !0 : d._register(this, !0);
			c && null != c.position && this.setPosition(c.position, d.NONE)
		};
		b.setPosition = function(a, c) {
			void 0 === c && (c = 1);
			0 > a && (a = 0);
			var h = a,
			b = !1;
			h >= this.duration && (this.loop ? h %= this.duration: (h = this.duration, b = !0));
			if (h == this._prevPos) return b;
			var d = this._prevPos;
			this.position = this._prevPos = h;
			this._prevPosition = a;
			if (this._target) if (b) this._updateTargetProps(null, 1);
			else if (0 < this._steps.length) {
				for (var e = 0,
				f = this._steps.length; e < f && !(this._steps[e].t > h); e++);
				e = this._steps[e - 1];
				this._updateTargetProps(e, (this._stepPosition = h - e.t) / e.d)
			}
			0 != c && 0 < this._actions.length && (this._useTicks ? this._runActions(h, h) : 1 == c && h < d ? (d != this.duration && this._runActions(d, this.duration), this._runActions(0, h, !0)) : this._runActions(d, h));
			b && this.setPaused(!0);
			this.dispatchEventWith("change");
			return b
		};
		b._runActions = function(a, c, b) {
			void 0 === b && (b = !1);
			var d = a,
			e = c,
			f = -1,
			g = this._actions.length,
			k = 1;
			a > c && (d = c, e = a, f = g, g = k = -1);
			for (; (f += k) != g;) {
				c = this._actions[f];
				var m = c.t; (m == e || m > d && m < e || b && m == a) && c.f.apply(c.o, c.p)
			}
		};
		b._updateTargetProps = function(a, c) {
			var b, e, f, g;
			if (a || 1 != c) {
				if (this.passive = !!a.v) return;
				a.e && (c = a.e(c, 0, 1, 1));
				b = a.p0;
				e = a.p1
			} else this.passive = !1,
			b = e = this._curQueueProps;
			for (var n in this._initQueueProps) {
				null == (f = b[n]) && (b[n] = f = this._initQueueProps[n]);
				null == (g = e[n]) && (e[n] = g = f);
				f = f == g || 0 == c || 1 == c || "number" != typeof f ? 1 == c ? g: f: f + (g - f) * c;
				var k = !1;
				if (g = d._plugins[n]) for (var m = 0,
				l = g.length; m < l; m++) {
					var q = g[m].tween(this, n, f, b, e, c, !!a && b == e, !a);
					q == d.IGNORE ? k = !0 : f = q
				}
				k || (this._target[n] = f)
			}
		};
		b.setPaused = function(a) {
			this.paused = a;
			d._register(this, !a);
			return this
		};
		b._cloneProps = function(a) {
			var c = {},
			b;
			for (b in a) c[b] = a[b];
			return c
		};
		b._addStep = function(a) {
			0 < a.d && (this._steps.push(a), a.t = this.duration, this.duration += a.d);
			return this
		};
		b._appendQueueProps = function(a) {
			var c, b, e, f, g, n;
			for (n in a) if (void 0 === this._initQueueProps[n]) {
				b = this._target[n];
				if (c = d._plugins[n]) for (e = 0, f = c.length; e < f; e++) b = c[e].init(this, n, b);
				this._initQueueProps[n] = this._curQueueProps[n] = void 0 === b ? null: b
			}
			for (n in a) {
				b = this._curQueueProps[n];
				if (c = d._plugins[n]) for (g = g || {},
				e = 0, f = c.length; e < f; e++) c[e].step && c[e].step(this, n, b, a[n], g);
				this._curQueueProps[n] = a[n]
			}
			g && this._appendQueueProps(g);
			return this._curQueueProps
		};
		b._addAction = function(a) {
			a.t = this.duration;
			this._actions.push(a);
			return this
		};
		b._set = function(a, c) {
			for (var b in a) c[b] = a[b]
		};
		b.wait = function(a, c) {
			if (null == a || 0 >= a) return this;
			var b = this._cloneProps(this._curQueueProps);
			return this._addStep({
				d: a,
				p0: b,
				p1: b,
				v: c
			})
		};
		b.to = function(a, c, b) {
			void 0 === b && (b = void 0);
			if (isNaN(c) || 0 > c) c = 0;
			return this._addStep({
				d: c || 0,
				p0: this._cloneProps(this._curQueueProps),
				e: b,
				p1: this._cloneProps(this._appendQueueProps(a))
			})
		};
		b.call = function(a, c, b) {
			void 0 === c && (c = void 0);
			void 0 === b && (b = void 0);
			return this._addAction({
				f: a,
				p: b ? b: [],
				o: c ? c: this._target
			})
		};
		b.set = function(a, c) {
			void 0 === c && (c = null);
			return this._addAction({
				f: this._set,
				o: this,
				p: [a, c ? c: this._target]
			})
		};
		b.play = function(a) {
			a || (a = this);
			return this.call(a.setPaused, a, [!1])
		};
		b.pause = function(a) {
			a || (a = this);
			return this.call(a.setPaused, a, [!0])
		};
		b.tick = function(a) {
			this.paused || this.setPosition(this._prevPosition + a)
		};
		d.NONE = 0;
		d.LOOP = 1;
		d.REVERSE = 2;
		d._tweens = [];
		d.IGNORE = {};
		d._plugins = {};
		d._inited = !1;
		return d
	} (e.EventDispatcher);
	e.Tween = f;
	f.prototype.__class__ = "egret.Tween"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function f() {
			e.Logger.fatalWithErrorId(1014)
		}
		f.get = function(d) { - 1 > d && (d = -1);
			1 < d && (d = 1);
			return function(b) {
				return 0 == d ? b: 0 > d ? b * (b * -d + 1 + d) : b * ((2 - b) * d + (1 - d))
			}
		};
		f.getPowIn = function(d) {
			return function(b) {
				return Math.pow(b, d)
			}
		};
		f.getPowOut = function(d) {
			return function(b) {
				return 1 - Math.pow(1 - b, d)
			}
		};
		f.getPowInOut = function(d) {
			return function(b) {
				return 1 > (b *= 2) ? 0.5 * Math.pow(b, d) : 1 - 0.5 * Math.abs(Math.pow(2 - b, d))
			}
		};
		f.sineIn = function(d) {
			return 1 - Math.cos(d * Math.PI / 2)
		};
		f.sineOut = function(d) {
			return Math.sin(d * Math.PI / 2)
		};
		f.sineInOut = function(d) {
			return - 0.5 * (Math.cos(Math.PI * d) - 1)
		};
		f.getBackIn = function(d) {
			return function(b) {
				return b * b * ((d + 1) * b - d)
			}
		};
		f.getBackOut = function(d) {
			return function(b) {
				return--b * b * ((d + 1) * b + d) + 1
			}
		};
		f.getBackInOut = function(d) {
			d *= 1.525;
			return function(b) {
				return 1 > (b *= 2) ? 0.5 * b * b * ((d + 1) * b - d) : 0.5 * ((b -= 2) * b * ((d + 1) * b + d) + 2)
			}
		};
		f.circIn = function(d) {
			return - (Math.sqrt(1 - d * d) - 1)
		};
		f.circOut = function(d) {
			return Math.sqrt(1 - --d * d)
		};
		f.circInOut = function(d) {
			return 1 > (d *= 2) ? -0.5 * (Math.sqrt(1 - d * d) - 1) : 0.5 * (Math.sqrt(1 - (d -= 2) * d) + 1)
		};
		f.bounceIn = function(d) {
			return 1 - f.bounceOut(1 - d)
		};
		f.bounceOut = function(d) {
			return d < 1 / 2.75 ? 7.5625 * d * d: d < 2 / 2.75 ? 7.5625 * (d -= 1.5 / 2.75) * d + 0.75 : d < 2.5 / 2.75 ? 7.5625 * (d -= 2.25 / 2.75) * d + 0.9375 : 7.5625 * (d -= 2.625 / 2.75) * d + 0.984375
		};
		f.bounceInOut = function(d) {
			return 0.5 > d ? 0.5 * f.bounceIn(2 * d) : 0.5 * f.bounceOut(2 * d - 1) + 0.5
		};
		f.getElasticIn = function(d, b) {
			var a = 2 * Math.PI;
			return function(c) {
				if (0 == c || 1 == c) return c;
				var h = b / a * Math.asin(1 / d);
				return - (d * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - h) * a / b))
			}
		};
		f.getElasticOut = function(d, b) {
			var a = 2 * Math.PI;
			return function(c) {
				if (0 == c || 1 == c) return c;
				var h = b / a * Math.asin(1 / d);
				return d * Math.pow(2, -10 * c) * Math.sin((c - h) * a / b) + 1
			}
		};
		f.getElasticInOut = function(d, b) {
			var a = 2 * Math.PI;
			return function(c) {
				var h = b / a * Math.asin(1 / d);
				return 1 > (c *= 2) ? -0.5 * d * Math.pow(2, 10 * (c -= 1)) * Math.sin((c - h) * a / b) : d * Math.pow(2, -10 * (c -= 1)) * Math.sin((c - h) * a / b) * 0.5 + 1
			}
		};
		f.quadIn = f.getPowIn(2);
		f.quadOut = f.getPowOut(2);
		f.quadInOut = f.getPowInOut(2);
		f.cubicIn = f.getPowIn(3);
		f.cubicOut = f.getPowOut(3);
		f.cubicInOut = f.getPowInOut(3);
		f.quartIn = f.getPowIn(4);
		f.quartOut = f.getPowOut(4);
		f.quartInOut = f.getPowInOut(4);
		f.quintIn = f.getPowIn(5);
		f.quintOut = f.getPowOut(5);
		f.quintInOut = f.getPowInOut(5);
		f.backIn = f.getBackIn(1.7);
		f.backOut = f.getBackOut(1.7);
		f.backInOut = f.getBackInOut(1.7);
		f.elasticIn = f.getElasticIn(1, 0.3);
		f.elasticOut = f.getElasticOut(1, 0.3);
		f.elasticInOut = f.getElasticInOut(1, 0.3 * 1.5);
		return f
	} ();
	e.Ease = f;
	f.prototype.__class__ = "egret.Ease"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this.path = "";
			this.audio = null;
			this.type = d.EFFECT;
			this._pauseTime = 0;
			this._listeners = []
		}
		__extends(d, f);
		var b = d.prototype;
		Object.defineProperty(b, "position", {
			get: function() {
				return this.audio ? Math.floor(1E3 * this.audio._getCurrentTime()) : 0
			},
			enumerable: !0,
			configurable: !0
		});
		b.play = function(a, c) {
			void 0 === a && (a = !1);
			void 0 === c && (c = 0);
			var b = this.audio;
			b && (b._setCurrentTime(c / 1E3), b._setLoop(a), b._play(this.type))
		};
		b.stop = function() {
			var a = this.audio;
			a && (this._pauseTime = 0, a._setCurrentTime(0), a._pause())
		};
		b.pause = function() {
			var a = this.audio;
			a && (this._pauseTime = a._getCurrentTime(), a._pause())
		};
		b.resume = function() {
			var a = this.audio;
			a && (a._setCurrentTime(this._pauseTime), this._pauseTime = 0, a._play(this.type))
		};
		b.load = function() {
			var a = this.audio;
			a && a._load()
		};
		b.addEventListener = function(a, c, b) {
			f.prototype.addEventListener.call(this, a, c, b);
			var d = this;
			this.audio && 1 == this._eventsMap[a].length && (c = a == e.SoundEvent.SOUND_COMPLETE ?
			function(c) {
				e.Event._dispatchByTarget(e.SoundEvent, d, e.SoundEvent.SOUND_COMPLETE)
			}: function(c) {
				e.Event._dispatchByTarget(e.Event, d, c.type)
			},
			this._listeners.push({
				type: a,
				func: c
			}), a = d.getVirtualType(a), this.audio._addEventListener(a, c, !1))
		};
		b.removeEventListener = function(a, c, b) {
			f.prototype.removeEventListener.call(this, a, c, b);
			if (this.audio && (!this._eventsMap || !this._eventsMap[a] || 0 == this._eventsMap[a].length)) for (b = 0; b < this._listeners.length; b++) if (c = this._listeners[b], c.type == a) {
				this._listeners.splice(b, 1);
				a = this.getVirtualType(a);
				this.audio._removeEventListener(a, c.func, !1);
				break
			}
		};
		b.getVirtualType = function(a) {
			switch (a) {
			case e.SoundEvent.SOUND_COMPLETE:
				return "ended";
			default:
				return a
			}
		};
		Object.defineProperty(b, "volume", {
			get: function() {
				return this.audio ? this.audio._getVolume() : 0
			},
			set: function(a) {
				var c = this.audio;
				c && c._setVolume(Math.max(0, Math.min(a, 1)))
			},
			enumerable: !0,
			configurable: !0
		});
		b.setVolume = function(a) {
			e.Logger.warningWithErrorId(1031);
			this.volume = a
		};
		b.getVolume = function() {
			e.Logger.warningWithErrorId(1032);
			return this.volume
		};
		b.preload = function(a, c, b) {
			void 0 === c && (c = null);
			void 0 === b && (b = null);
			this.type = a;
			this.audio._preload(a, c, b)
		};
		b._setAudio = function(a) {
			this.audio = a
		};
		b.destroy = function() {
			this.audio._destroy()
		};
		d.MUSIC = "music";
		d.EFFECT = "effect";
		return d
	} (e.EventDispatcher);
	e.Sound = f;
	f.prototype.__class__ = "egret.Sound"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function e() {}
		e.isNumber = function(d) {
			return "number" === typeof d && !isNaN(d)
		};
		e.sin = function(d) {
			var b = Math.floor(d),
			a = b + 1,
			c = e.sinInt(b),
			h = e.sinInt(a);
			return (d - b) * h + (a - d) * c
		};
		e.sinInt = function(d) {
			d %= 360;
			0 > d && (d += 360);
			return 90 > d ? egret_sin_map[d] : 180 > d ? egret_cos_map[d - 90] : 270 > d ? -egret_sin_map[d - 180] : -egret_cos_map[d - 270]
		};
		e.cos = function(d) {
			var b = Math.floor(d),
			a = b + 1,
			c = e.cosInt(b),
			h = e.cosInt(a);
			return (d - b) * h + (a - d) * c
		};
		e.cosInt = function(d) {
			d %= 360;
			0 > d && (d += 360);
			return 90 > d ? egret_cos_map[d] : 180 > d ? -egret_sin_map[d - 90] : 270 > d ? -egret_cos_map[d - 180] : egret_sin_map[d - 270]
		};
		return e
	} ();
	e.NumberUtils = f;
	f.prototype.__class__ = "egret.NumberUtils"
})(egret || (egret = {}));

for (var egret_sin_map = {},
egret_cos_map = {},
NumberUtils_i = 0; 90 >= NumberUtils_i; NumberUtils_i++) egret_sin_map[NumberUtils_i] = Math.sin(NumberUtils_i * egret.Matrix.DEG_TO_RAD),
egret_cos_map[NumberUtils_i] = Math.cos(NumberUtils_i * egret.Matrix.DEG_TO_RAD);
Function.prototype.bind || (Function.prototype.bind = function(e) {
	if ("function" !== typeof this) throw new TypeError(egret.getString(1029));
	var f = Array.prototype.slice.call(arguments, 1),
	g = this,
	d = function() {},
	b = function() {
		return g.apply(this instanceof d && e ? this: e, f.concat(Array.prototype.slice.call(arguments)))
	};
	d.prototype = this.prototype;
	b.prototype = new d;
	return b
}); (function(e) {
	var f = function() {
		function f() {
			this.downloadingSizeThisObject = this.downloadingSizeFunc = this.onErrorThisObject = this.onErrorFunc = this.onSuccessThisObject = this.onSuccessFunc = null
		}
		var d = f.prototype;
		f.create = function() {
			return f.promiseObjectList.length ? f.promiseObjectList.pop() : new e.PromiseObject
		};
		d.onSuccess = function() {
			for (var b = [], a = 0; a < arguments.length; a++) b[a - 0] = arguments[a];
			this.onSuccessFunc && this.onSuccessFunc.apply(this.onSuccessThisObject, b);
			this.destroy()
		};
		d.onError = function() {
			for (var b = [], a = 0; a < arguments.length; a++) b[a - 0] = arguments[a];
			this.onErrorFunc && this.onErrorFunc.apply(this.onErrorThisObject, b);
			this.destroy()
		};
		d.downloadingSize = function() {
			for (var b = [], a = 0; a < arguments.length; a++) b[a - 0] = arguments[a];
			this.downloadingSizeFunc && this.downloadingSizeFunc.apply(this.downloadingSizeThisObject, b)
		};
		d.destroy = function() {
			this.downloadingSizeThisObject = this.downloadingSizeFunc = this.onErrorThisObject = this.onErrorFunc = this.onSuccessThisObject = this.onSuccessFunc = void 0;
			f.promiseObjectList.push(this)
		};
		f.promiseObjectList = [];
		return f
	} ();
	e.PromiseObject = f;
	f.prototype.__class__ = "egret.PromiseObject"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d(a) {
			void 0 === a && (a = 60);
			f.call(this);
			this.frameRate = a;
			this._time = 0;
			this._requestAnimationId = NaN;
			this._isActivate = !0;
			d.countTime = 0;
			0 == 60 % a && (d.countTime = 60 / a - 1, d.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame, d.cancelAnimationFrame = window.cancelAnimationFrame || window.msCancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.oCancelAnimationFrame || window.cancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame);
			d.requestAnimationFrame || (d.requestAnimationFrame = function(c) {
				return window.setTimeout(c, 1E3 / a)
			});
			d.cancelAnimationFrame || (d.cancelAnimationFrame = function(c) {
				return window.clearTimeout(c)
			});
			d.instance = this;
			this.registerListener()
		}
		__extends(d, f);
		var b = d.prototype;
		b.enterFrame = function() {
			var a = d.instance,
			c = d._thisObject,
			b = d._callback,
			f = e.getTimer(),
			g = f - a._time;
			a._requestAnimationId = d.requestAnimationFrame.call(window, d.prototype.enterFrame);
			d.count < d.countTime ? d.count++:(d.count = 0, b.call(c, g), a._time = f)
		};
		b.executeMainLoop = function(a, c) {
			d._callback = a;
			d._thisObject = c;
			this.enterFrame()
		};
		b.reset = function() {
			var a = d.instance;
			a._requestAnimationId && (a._time = e.getTimer(), d.cancelAnimationFrame.call(window, a._requestAnimationId), a.enterFrame())
		};
		b.registerListener = function() {
			var a = this,
			c = function() {
				a._isActivate && (a._isActivate = !1, e.MainContext.instance.stage.dispatchEvent(new e.Event(e.Event.DEACTIVATE)))
			},
			b = function() {
				a._isActivate || (a._isActivate = !0, d.instance.reset(), e.MainContext.instance.stage.dispatchEvent(new e.Event(e.Event.ACTIVATE)))
			},
			f = function() {
				document[g] ? c() : b()
			};
			window.addEventListener("focus", b, !1);
			window.addEventListener("blur", c, !1);
			var g, u;
			"undefined" !== typeof document.hidden ? (g = "hidden", u = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (g = "mozHidden", u = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (g = "msHidden", u = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden ? (g = "webkitHidden", u = "webkitvisibilitychange") : "undefined" !== typeof document.oHidden && (g = "oHidden", u = "ovisibilitychange");
			"onpageshow" in window && "onpagehide" in window && (window.addEventListener("pageshow", b, !1), window.addEventListener("pagehide", c, !1));
			g && u && document.addEventListener(u, f, !1);
			f = navigator.userAgent;
			u = /micromessenger/gi.test(f);
			var n = /mqq/ig.test(f);
			if (/mobile.*qq/gi.test(f) || u) n = !1;
			n && (f = window.browser || {},
			f.execWebFn = f.execWebFn || {},
			f.execWebFn.postX5GamePlayerMessage = function(a) {
				a = a.type;
				"app_enter_background" == a ? c() : "app_enter_foreground" == a && b()
			},
			window.browser = f)
		};
		d.instance = null;
		d.countTime = 0;
		d.requestAnimationFrame = null;
		d.cancelAnimationFrame = null;
		d._thisObject = null;
		d._callback = null;
		d.count = 0;
		return d
	} (e.DeviceContext);
	e.HTML5DeviceContext = f;
	f.prototype.__class__ = "egret.HTML5DeviceContext"
})(egret || (egret = {}));

var egret_html5_localStorage; (function(e) {
	e.getItem = function(e) {
		return window.localStorage.getItem(e)
	};
	e.setItem = function(e, g) {
		try {
			return window.localStorage.setItem(e, g),
			!0
		} catch(d) {
			return egret.Logger.infoWithErrorId(1018, e, g),
			!1
		}
	};
	e.removeItem = function(e) {
		window.localStorage.removeItem(e)
	};
	e.clear = function() {
		window.localStorage.clear()
	};
	e.init = function() {
		for (var f in e) egret.localStorage[f] = e[f]
	}
})(egret_html5_localStorage || (egret_html5_localStorage = {}));
egret_html5_localStorage.init(); (function(e) {
	var f = function(f) {
		function d(a, c) {
			void 0 === c && (c = !0);
			f.call(this);
			this.useCacheCanvas = c;
			e.Texture.prototype.draw = e.Texture.prototype._drawForCanvas;
			e.Texture.prototype.dispose = e.Texture.prototype._disposeForCanvas;
			this.canvas = a || this.createCanvas();
			this.canvasContext = this.canvas.getContext("2d");
			c ? (this._cacheCanvas = document.createElement("canvas"), this._cacheCanvas.width = this.canvas.width, this._cacheCanvas.height = this.canvas.height, this.drawCanvasContext = this._cacheCanvasContext = this._cacheCanvas.getContext("2d")) : this.drawCanvasContext = this.canvasContext;
			var b = this.drawCanvasContext;
			if (void 0 == b.imageSmoothingEnabled) {
				for (var d = ["webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "msImageSmoothingEnabled"], v = 0; v < d.length; v++) {
					var u = d[v];
					if (void 0 != b[u]) break
				}
				Object.defineProperty(b, "imageSmoothingEnabled", {
					get: function() {
						return this[u]
					},
					set: function(c) {
						this[u] = c
					},
					enumerable: !0,
					configurable: !0
				})
			}
			this.onResize();
			var n = this.drawCanvasContext.setTransform,
			k = this;
			this.drawCanvasContext.setTransform = function(c, a, b, h, d, e) {
				k._matrixA = c;
				k._matrixB = a;
				k._matrixC = b;
				k._matrixD = h;
				k._matrixTx = d;
				k._matrixTy = e;
				n.call(k.drawCanvasContext, c, a, b, h, d, e)
			};
			this._matrixA = 1;
			this._matrixC = this._matrixB = 0;
			this._matrixD = 1;
			this._transformTy = this._transformTx = this._matrixTy = this._matrixTx = 0;
			this.initBlendMode()
		}
		__extends(d, f);
		var b = d.prototype;
		b.createCanvas = function() {
			var a = e.Browser.getInstance().$("#egretCanvas");
			if (!a) {
				var c = document.getElementById(e.StageDelegate.canvas_div_name),
				a = e.Browser.getInstance().$new("canvas");
				a.id = "egretCanvas";
				c.appendChild(a)
			}
			e.MainContext.instance.stage.addEventListener(e.Event.RESIZE, this.onResize, this);
			return a
		};
		b.onResize = function() {
			if (this.canvas) {
				var a = document.getElementById(e.StageDelegate.canvas_div_name);
				this.canvas.width = e.MainContext.instance.stage.stageWidth;
				this.canvas.height = e.MainContext.instance.stage.stageHeight;
				this.canvas.style.width = a.style.width;
				this.canvas.style.height = a.style.height;
				this.useCacheCanvas && (this._cacheCanvas.width = this.canvas.width, this._cacheCanvas.height = this.canvas.height);
				this.drawCanvasContext.imageSmoothingEnabled = e.RendererContext.imageSmoothingEnabled
			}
		};
		b.clearScreen = function() {
			for (var a = e.RenderFilter.getInstance().getDrawAreaList(), c = 0, b = a.length; c < b; c++) {
				var d = a[c];
				this.clearRect(d.x, d.y, d.width, d.height)
			}
			a = e.MainContext.instance.stage;
			this.useCacheCanvas && this._cacheCanvasContext.clearRect(0, 0, a.stageWidth, a.stageHeight);
			this.renderCost = 0
		};
		b.clearRect = function(a, c, b, d) {
			this.canvasContext.clearRect(a, c, b, d)
		};
		b.drawImage = function(a, c, b, d, v, u, n, k, m, l) {
			void 0 === l && (l = void 0);
			u += this._transformTx;
			n += this._transformTy;
			var q = e.getTimer();
			a.draw(this.drawCanvasContext, c, b, d, v, u, n, k, m, l);
			f.prototype.drawImage.call(this, a, c, b, d, v, u, n, k, m, l);
			this.renderCost += e.getTimer() - q
		};
		b.setTransform = function(a) {
			1 == a.a && 0 == a.b && 0 == a.c && 1 == a.d && 1 == this._matrixA && 0 == this._matrixB && 0 == this._matrixC && 1 == this._matrixD ? (this._transformTx = a.tx - this._matrixTx, this._transformTy = a.ty - this._matrixTy) : (this._transformTx = this._transformTy = 0, this._matrixA == a.a && this._matrixB == a.b && this._matrixC == a.c && this._matrixD == a.d && this._matrixTx == a.tx && this._matrixTy == a.ty || this.drawCanvasContext.setTransform(a.a, a.b, a.c, a.d, a.tx, a.ty))
		};
		b.setAlpha = function(a, c) {
			this.drawCanvasContext.globalAlpha = a;
			c ? (this.blendValue = this.blendModes[c], this.drawCanvasContext.globalCompositeOperation = this.blendValue) : this.blendValue != e.BlendMode.NORMAL && (this.blendValue = this.blendModes[e.BlendMode.NORMAL], this.drawCanvasContext.globalCompositeOperation = this.blendValue)
		};
		b.initBlendMode = function() {
			this.blendModes = {};
			this.blendModes[e.BlendMode.NORMAL] = "source-over";
			this.blendModes[e.BlendMode.ADD] = "lighter";
			this.blendModes[e.BlendMode.ERASE] = "destination-out";
			this.blendModes[e.BlendMode.ERASE_REVERSE] = "destination-in"
		};
		b.setupFont = function(a, c) {
			void 0 === c && (c = null);
			c = c || {};
			var b = a._TF_Props_,
			d = null == c.size ? b._size: c.size,
			e = null == c.fontFamily ? b._fontFamily: c.fontFamily,
			f = this.drawCanvasContext,
			g = (null == c.italic ? b._italic: c.italic) ? "italic ": "normal ",
			g = g + ((null == c.bold ? b._bold: c.bold) ? "bold ": "normal ");
			f.font = g + (d + "px " + e);
			f.textAlign = "left";
			f.textBaseline = "middle"
		};
		b.measureText = function(a) {
			return this.drawCanvasContext.measureText(a).width
		};
		b.drawText = function(a, c, b, d, v, u) {
			void 0 === u && (u = null);
			this.setupFont(a, u);
			u = u || {};
			var n = a._TF_Props_,
			k;
			k = null != u.textColor ? e.toColorString(u.textColor) : n._textColorString;
			var m;
			m = null != u.strokeColor ? e.toColorString(u.strokeColor) : n._strokeColorString;
			var n = null != u.stroke ? u.stroke: n._stroke,
			l = this.drawCanvasContext;
			l.fillStyle = k;
			l.strokeStyle = m;
			n && (l.lineWidth = 2 * n, l.strokeText(c, b + this._transformTx, d + this._transformTy, v || 65535));
			l.fillText(c, b + this._transformTx, d + this._transformTy, v || 65535);
			f.prototype.drawText.call(this, a, c, b, d, v, u)
		};
		b.strokeRect = function(a, c, b, d, e) {
			this.drawCanvasContext.strokeStyle = e;
			this.drawCanvasContext.strokeRect(a, c, b, d)
		};
		b.pushMask = function(a) {
			this.drawCanvasContext.save();
			this.drawCanvasContext.beginPath();
			this.drawCanvasContext.rect(a.x + this._transformTx, a.y + this._transformTy, a.width, a.height);
			this.drawCanvasContext.clip();
			this.drawCanvasContext.closePath()
		};
		b.popMask = function() {
			this.drawCanvasContext.restore();
			this.drawCanvasContext.setTransform(1, 0, 0, 1, 0, 0)
		};
		b.onRenderStart = function() {
			this.drawCanvasContext.save()
		};
		b.onRenderFinish = function() {
			this.drawCanvasContext.restore();
			this.drawCanvasContext.setTransform(1, 0, 0, 1, 0, 0);
			if (this.useCacheCanvas) for (var a = this._cacheCanvas.width,
			c = this._cacheCanvas.height,
			b = e.RenderFilter.getInstance().getDrawAreaList(), d = 0, f = b.length; d < f; d++) {
				var g = b[d],
				n = g.x,
				k = g.y,
				m = g.width,
				g = g.height;
				n + m > a && (m = a - n);
				k + g > c && (g = c - k);
				0 < m && 0 < g && this.canvasContext.drawImage(this._cacheCanvas, n, k, m, g, n, k, m, g)
			}
		};
		b.drawCursor = function(a, c, b, d) {
			this.drawCanvasContext.strokeStyle = "#40a5ff";
			this.drawCanvasContext.lineWidth = 2;
			this.drawCanvasContext.beginPath();
			this.drawCanvasContext.moveTo(Math.round(a + this._transformTx), Math.round(c + this._transformTy));
			this.drawCanvasContext.lineTo(Math.round(b + this._transformTx), Math.round(d + this._transformTy));
			this.drawCanvasContext.closePath();
			this.drawCanvasContext.stroke()
		};
		return d
	} (e.RendererContext);
	e.HTML5CanvasRenderer = f;
	f.prototype.__class__ = "egret.HTML5CanvasRenderer"
})(egret || (egret = {}));

egret.RendererContext.createRendererContext = function(e) {
	return new egret.HTML5CanvasRenderer(e, !1)
};
egret.Graphics.prototype._beginDraw = function(e) {
	this._renderContext = e.drawCanvasContext;
	var f = e._transformTx;
	e = e._transformTy;
	0 == f && 0 == e || this._renderContext.translate(f, e)
};
egret.Graphics.prototype._endDraw = function(e) {
	this._renderContext = e.drawCanvasContext;
	var f = e._transformTx;
	e = e._transformTy;
	0 == f && 0 == e || this._renderContext.translate( - f, -e)
}; (function(e) {
	var f = function(f) {
		function d(a) {
			f.call(this);
			this.glID = this.gl = this.canvas = null;
			this.size = 2E3;
			this.vertices = null;
			this.vertSize = 5;
			this.indices = null;
			this.projectionY = this.projectionX = NaN;
			this.shaderManager = null;
			this.contextLost = !1;
			this.glContextId = 0;
			this.currentBlendMode = "";
			this.currentBaseTexture = null;
			this.currentBatchSize = 0;
			this.worldTransform = null;
			this.worldAlpha = 1;
			this.maskList = [];
			this.maskDataFreeList = [];
			this.graphicsIndexBuffer = this.graphicsBuffer = this.graphicsIndices = this.graphicsPoints = this.filterType = this.colorTransformMatrix = null;
			this.graphicsStyle = {};
			e.Texture.prototype.dispose = e.Texture.prototype._disposeForCanvas;
			this.canvas = a || this.createCanvas();
			this.canvas.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1);
			this.canvas.addEventListener("webglcontextrestored", this.handleContextRestored.bind(this), !1);
			this.html5Canvas = document.createElement("canvas");
			this.canvasContext = new e.HTML5CanvasRenderer(this.html5Canvas);
			this.onResize();
			this.projectionX = this.canvas.width / 2;
			this.projectionY = -this.canvas.height / 2;
			a = 6 * this.size;
			this.vertices = new Float32Array(4 * this.size * this.vertSize);
			this.indices = new Uint16Array(a);
			for (var c = 0,
			b = 0; c < a; c += 6, b += 4) this.indices[c + 0] = b + 0,
			this.indices[c + 1] = b + 1,
			this.indices[c + 2] = b + 2,
			this.indices[c + 3] = b + 0,
			this.indices[c + 4] = b + 2,
			this.indices[c + 5] = b + 3;
			this.initWebGL();
			this.shaderManager = new e.WebGLShaderManager(this.gl);
			this.worldTransform = new e.Matrix;
			this.initAll()
		}
		__extends(d, f);
		var b = d.prototype;
		b.onRenderFinish = function() {
			this._drawWebGL()
		};
		d.initWebGLCanvas = function() {
			e.RenderTexture.WebGLCanvas || (e.RenderTexture.WebGLCanvas = document.createElement("canvas"), e.RenderTexture.WebGLCanvas.avaliable = !0, e.RenderTexture.WebGLRenderer = new e.WebGLRenderer(e.RenderTexture.WebGLCanvas), e.RenderTexture.WebGLRenderer.setAlpha(1))
		};
		b.initAll = function() {
			d.isInit || (d.isInit = !0, egret_webgl_graphics.init(), e.TextField.prototype._makeBitmapCache = function() {
				this.renderTexture || (this.renderTexture = new e.RenderTexture);
				var a = this.getBounds(e.Rectangle.identity);
				if (0 == a.width || 0 == a.height) return this._texture_to_render = null,
				!1;
				this._bitmapData || (this._bitmapData = document.createElement("canvas"), this._bitmapData.avaliable = !0, this.renderContext = e.RendererContext.createRendererContext(this._bitmapData));
				var c = this._bitmapData,
				b = a.width,
				a = a.height,
				d, f, g = e.MainContext.instance.rendererContext._texture_scale_factor;
				d = b / g;
				f = a / g;
				d = Math.round(d);
				f = Math.round(f);
				c.width = d;
				c.height = f;
				c.style.width = d + "px";
				c.style.height = f + "px";
				this.renderContext._cacheCanvas && (this.renderContext._cacheCanvas.width = d, this.renderContext._cacheCanvas.height = f);
				this._worldTransform.identity();
				this._worldTransform.a = 1 / g;
				this._worldTransform.d = 1 / g;
				this.renderContext.setTransform(this._worldTransform);
				this.worldAlpha = 1;
				c = e.RenderFilter.getInstance();
				g = c._drawAreaList.concat();
				c._drawAreaList.length = 0;
				this.renderContext.clearScreen();
				this.renderContext.onRenderStart();
				e.Texture.deleteWebGLTexture(this.renderTexture);
				this.renderTexture.dispose();
				this._hasFilters() && this._setGlobalFilters(this.renderContext);
				var n = this.mask || this._DO_Props_._scrollRect;
				n && this.renderContext.pushMask(n);
				this._render(this.renderContext);
				n && this.renderContext.popMask();
				this._hasFilters() && this._removeGlobalFilters(this.renderContext);
				e.RenderTexture.identityRectangle.width = d;
				e.RenderTexture.identityRectangle.height = f;
				c.addDrawArea(e.RenderTexture.identityRectangle);
				this.renderContext.onRenderFinish();
				c._drawAreaList = g;
				this.renderTexture._bitmapData = this._bitmapData;
				this.renderTexture._sourceWidth = d;
				this.renderTexture._sourceHeight = f;
				this.renderTexture._textureWidth = b;
				this.renderTexture._textureHeight = a;
				this._texture_to_render = this.renderTexture;
				return ! 0
			},
			e.TextField.prototype._draw = function(a) {
				this._TF_Props_._type == e.TextFieldType.INPUT && this._isTyping || (this.getDirty() && (this._texture_to_render = this.renderTexture, this._DO_Props_._cacheAsBitmap = !0), e.DisplayObject.prototype._draw.call(this, a))
			},
			e.RenderTexture.prototype.init = function() {
				this._bitmapData = document.createElement("canvas");
				this._bitmapData.avaliable = !0;
				this.canvasContext = this._bitmapData.getContext("2d");
				d.initWebGLCanvas();
				this._webglBitmapData = e.RenderTexture.WebGLCanvas;
				this.renderContext = e.RenderTexture.WebGLRenderer
			},
			e.RenderTexture.prototype.setSize = function(a, c) {
				this._webglBitmapData && this.renderContext.setSize(a, c);
				if (this._bitmapData) {
					var b = this._bitmapData;
					b.width = a;
					b.height = c;
					b.style.width = a + "px";
					b.style.height = c + "px"
				}
			},
			e.RenderTexture.prototype.end = function() {},
			e.RenderTexture.prototype.drawToTexture = function(a, c, b) {
				var d = c || a.getBounds(e.Rectangle.identity);
				if (0 == d.width || 0 == d.height) return ! 1;
				"undefined" == typeof b && (b = 1);
				this._bitmapData || this.init();
				var f = d.x,
				g = d.y,
				n = d.width,
				d = d.height,
				d = d / b,
				k = e.MainContext.instance.rendererContext._texture_scale_factor,
				n = Math.round(n / b),
				d = Math.round(d);
				this.setSize(n, d);
				var m = this._bitmapData,
				l = n / k * b,
				q = d / k * b;
				m.width = l;
				m.height = q;
				m.style.width = l + "px";
				m.style.height = q + "px";
				this.begin();
				a._worldTransform.identity();
				m = a._DO_Props_._anchorOffsetX;
				l = a._DO_Props_._anchorOffsetY;
				if (0 != a._DO_Props_._anchorX || 0 != a._DO_Props_._anchorY) m = a._DO_Props_._anchorX * n,
				l = a._DO_Props_._anchorY * d;
				this._offsetX = f + m;
				this._offsetY = g + l;
				a._worldTransform.append(1, 0, 0, 1, -this._offsetX, -this._offsetY);
				c && (this._offsetX -= f, this._offsetY -= g);
				a.worldAlpha = 1;
				c = e.MainContext.__use_new_draw;
				e.MainContext.__use_new_draw = !1;
				if (a instanceof e.DisplayObjectContainer) for (f = a._children, g = 0, m = f.length; g < m; g++) f[g]._updateTransform();
				this.renderContext.setTransform(a._worldTransform);
				f = e.RenderFilter.getInstance();
				g = f._drawAreaList.concat();
				f._drawAreaList.length = 0;
				m = this.renderContext.gl;
				m.viewport(0, 0, n, d);
				m.bindFramebuffer(m.FRAMEBUFFER, null);
				m.clearColor(0, 0, 0, 0);
				m.clear(m.COLOR_BUFFER_BIT);
				this.renderContext.onRenderStart();
				e.Texture.deleteWebGLTexture(this);
				a._hasFilters() && a._setGlobalFilters(this.renderContext); (m = a.mask || a._DO_Props_._scrollRect) && this.renderContext.pushMask(m);
				a._render(this.renderContext);
				this.renderContext._drawWebGL();
				e.MainContext.__use_new_draw = c;
				m && this.renderContext.popMask();
				a._hasFilters() && a._removeGlobalFilters(this.renderContext);
				e.RenderTexture.identityRectangle.width = n;
				e.RenderTexture.identityRectangle.height = d;
				f.addDrawArea(e.RenderTexture.identityRectangle);
				this.renderContext.onRenderFinish();
				f._drawAreaList = g;
				this._sourceWidth = n / k * b;
				this._sourceHeight = d / k * b;
				this._textureWidth = n * b;
				this._textureHeight = d * b;
				this.canvasContext.drawImage(this._webglBitmapData, 0, 0, n, d, 0, 0, this._sourceWidth, this._sourceHeight);
				return ! 0
			})
		};
		b.createCanvas = function() {
			var a = e.Browser.getInstance().$("#egretCanvas");
			if (!a) {
				var c = document.getElementById(e.StageDelegate.canvas_div_name),
				a = e.Browser.getInstance().$new("canvas");
				a.id = "egretCanvas";
				c.appendChild(a)
			}
			e.MainContext.instance.stage.addEventListener(e.Event.RESIZE, this.onResize, this);
			return a
		};
		b.onResize = function() {
			this.setSize(e.MainContext.instance.stage.stageWidth, e.MainContext.instance.stage.stageHeight)
		};
		b.setSize = function(a, c) {
			var b = document.getElementById(e.StageDelegate.canvas_div_name);
			this.canvas && (this.canvas.width = a, this.canvas.height = c, this.canvas.style.width = b.style.width, this.canvas.style.height = b.style.height, this.projectionX = this.canvas.width / 2, this.projectionY = -this.canvas.height / 2);
			this.html5Canvas && (this.html5Canvas.width = a, this.html5Canvas.height = c, this.html5Canvas.style.width = b.style.width, this.html5Canvas.style.height = b.style.height);
			this.width = a;
			this.height = c
		};
		b.handleContextLost = function() {
			this.contextLost = !0
		};
		b.handleContextRestored = function() {
			this.initWebGL();
			this.shaderManager.setContext(this.gl);
			this.contextLost = !1
		};
		b.initWebGL = function() {
			for (var a = {},
			c, b = ["experimental-webgl", "webgl"], f = 0; f < b.length; f++) {
				try {
					c = this.canvas.getContext(b[f], a)
				} catch(g) {}
				if (c) break
			}
			if (!c) throw Error(e.getString(1021));
			d.glID++;
			this.glID = d.glID;
			this.setContext(c)
		};
		b.setContext = function(a) {
			this.gl = a;
			a.id = this.glContextId++;
			this.vertexBuffer = a.createBuffer();
			this.indexBuffer = a.createBuffer();
			a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
			a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW);
			a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
			a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW);
			a.disable(a.DEPTH_TEST);
			a.disable(a.CULL_FACE);
			a.enable(a.BLEND);
			a.colorMask(!0, !0, !0, !0)
		};
		b.start = function() {
			if (!this.contextLost) {
				var a = this.gl;
				a.activeTexture(a.TEXTURE0);
				a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer);
				a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
				var c;
				c = "colorTransform" == this.filterType ? this.shaderManager.colorTransformShader: "blur" == this.filterType ? this.shaderManager.blurShader: this.shaderManager.defaultShader;
				this.shaderManager.activateShader(c);
				c.syncUniforms();
				a.uniform2f(c.projectionVector, this.projectionX, this.projectionY);
				var b = 4 * this.vertSize;
				a.vertexAttribPointer(c.aVertexPosition, 2, a.FLOAT, !1, b, 0);
				a.vertexAttribPointer(c.aTextureCoord, 2, a.FLOAT, !1, b, 8);
				a.vertexAttribPointer(c.colorAttribute, 2, a.FLOAT, !1, b, 16)
			}
		};
		b.clearScreen = function() {
			var a = this.gl;
			a.colorMask(!0, !0, !0, !0);
			for (var c = e.RenderFilter.getInstance().getDrawAreaList(), b = 0, d = c.length; b < d; b++) {
				var f = c[b];
				a.viewport(f.x, f.y, f.width, f.height);
				a.bindFramebuffer(a.FRAMEBUFFER, null);
				a.clearColor(0, 0, 0, 0);
				a.clear(a.COLOR_BUFFER_BIT)
			}
			a.viewport(0, 0, this.width, this.height);
			this.renderCost = 0
		};
		b.setBlendMode = function(a) {
			a || (a = e.BlendMode.NORMAL);
			if (this.currentBlendMode != a) {
				var c = e.RendererContext.blendModesForGL[a];
				c && (this._drawWebGL(), this.gl.blendFunc(c[0], c[1]), this.currentBlendMode = a)
			}
		};
		b.drawRepeatImage = function(a, c, b, d, f, g, n, k, m, l) {
			l = e.MainContext.instance.rendererContext._texture_scale_factor;
			d *= l;
			for (f *= l; g < k; g += d) for (var q = n; q < m; q += f) {
				var t = Math.min(d, k - g),
				s = Math.min(f, m - q);
				this.drawImage(a, c, b, t / l, s / l, g, q, t, s)
			}
		};
		b.drawImage = function(a, c, b, d, e, f, g, k, m, l) {
			void 0 === l && (l = void 0);
			if (!this.contextLost) {
				var q = a._bitmapData;
				if (q && q.avaliable) if (void 0 !== l) this.drawRepeatImage(a, c, b, d, e, f, g, k, m, l);
				else {
					if (this.filters) for (l = 0; 1 > l; l++) if ("glow" == this.filters[0].type) {
						this.useGlow(a, c, b, d, e, f, g, k, m);
						return
					}
					this._drawImage(a, c, b, d, e, f, g, k, m)
				}
			}
		};
		b._drawImage = function(a, c, b, d, e, f, g, k, m) {
			this.createWebGLTexture(a);
			var l = a._bitmapData.webGLTexture[this.glID];
			if (l !== this.currentBaseTexture || this.currentBatchSize >= this.size - 1) this._drawWebGL(),
			this.currentBaseTexture = l;
			var q = this.worldTransform,
			t = q.a,
			s = q.b,
			B = q.c,
			z = q.d,
			r = q.tx,
			y = q.ty;
			0 == f && 0 == g || q.append(1, 0, 0, 1, f, g);
			1 == d / k && 1 == e / m || q.append(k / d, 0, 0, m / e, 0, 0);
			f = q.a;
			g = q.b;
			k = q.c;
			m = q.d;
			var l = q.tx,
			w = q.ty;
			q.a = t;
			q.b = s;
			q.c = B;
			q.d = z;
			q.tx = r;
			q.ty = y;
			t = a._sourceWidth;
			s = a._sourceHeight;
			a = d;
			q = e;
			c /= t;
			b /= s;
			d /= t;
			e /= s;
			t = this.vertices;
			s = 4 * this.currentBatchSize * this.vertSize;
			B = this.worldAlpha;
			t[s++] = l;
			t[s++] = w;
			t[s++] = c;
			t[s++] = b;
			t[s++] = B;
			t[s++] = f * a + l;
			t[s++] = g * a + w;
			t[s++] = d + c;
			t[s++] = b;
			t[s++] = B;
			t[s++] = f * a + k * q + l;
			t[s++] = m * q + g * a + w;
			t[s++] = d + c;
			t[s++] = e + b;
			t[s++] = B;
			t[s++] = k * q + l;
			t[s++] = m * q + w;
			t[s++] = c;
			t[s++] = e + b;
			t[s++] = B;
			this.currentBatchSize++
		};
		b.useGlow = function(a, c, b, f, g, u, n, k, m) {
			var l = this.filters[0],
			q = l.distance || 0,
			t = l.angle || 0,
			s = 0,
			B = 0;
			0 != q && 0 != t && (s = Math.ceil(q * e.NumberUtils.cos(t)), B = Math.ceil(q * e.NumberUtils.sin(t)));
			var q = l.quality,
			t = l.blurX / 10,
			z = l.blurY / 10,
			r = k + 2 * t + 20 + Math.abs(s),
			y = m + 2 * z + 20 + Math.abs(B);
			d.initWebGLCanvas();
			var w = e.RenderTexture.WebGLRenderer,
			A = e.RenderTexture.WebGLCanvas,
			x = e.RenderTexture.create();
			x._bitmapData || x.init();
			x.setSize(r, y);
			x._sourceWidth = r;
			x._sourceHeight = y;
			var D = e.RenderTexture.create();
			D._bitmapData || D.init();
			D.setSize(r, y);
			D._sourceWidth = r;
			D._sourceHeight = y;
			w.clearScreen();
			w.filterType = "colorTransform";
			w.setGlobalColorTransform([0, 0, 0, 0, l._red, 0, 0, 0, 0, l._green, 0, 0, 0, 0, l._blue, 0, 0, 0, 0, 255 * l.alpha]);
			w.setAlpha(1, e.BlendMode.NORMAL);
			w.setTransform(new e.Matrix(1, 0, 0, 1, 0, 0));
			w.drawImage(a, c, b, f, g, t + 10, z + 10, k, m);
			w._drawWebGL();
			w.filterType = null;
			x.canvasContext.clearRect(0, 0, r, y);
			x.canvasContext.drawImage(A, 0, 0, r, y, 0, 0, r, y);
			w.clearScreen();
			w.setAlpha(1, e.BlendMode.NORMAL);
			w.setTransform(new e.Matrix(1, 0, 0, 1, 0, 0));
			w.filterType = "blur";
			w.setBlurData(t, 0);
			e.Texture.deleteWebGLTexture(x);
			w.drawImage(x, t, z, r - 2 * t, y - 2 * z, t, z, r - 2 * t, y - 2 * z);
			w._drawWebGL();
			w.filterType = null;
			D.canvasContext.clearRect(0, 0, r, y);
			D.canvasContext.drawImage(A, 0, 0, r, y, 0, 0, r, y);
			w.clearScreen();
			w.setAlpha(1, e.BlendMode.NORMAL);
			w.setTransform(new e.Matrix(1, 0, 0, 1, 0, 0));
			w.filterType = "blur";
			w.setBlurData(0, z);
			e.Texture.deleteWebGLTexture(D);
			w.drawImage(D, 0, z, r, y - 2 * z, 0, z + 5, r, y - 2 * z);
			w._drawWebGL();
			w.filterType = null;
			x.canvasContext.clearRect(0, 0, r, y);
			x.canvasContext.drawImage(A, 0, 0, r, y, 0, 0, r, y);
			w.clearScreen();
			w.setAlpha(1, e.BlendMode.NORMAL);
			w.setTransform(new e.Matrix(1, 0, 0, 1, 0, 0));
			e.Texture.deleteWebGLTexture(x);
			for (l = 0; l < q; l++) w.drawImage(x, 0, 0, r, y, s, B, r, y);
			w._drawWebGL();
			w.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
			w.currentBlendMode = null;
			w.drawImage(a, c, b, f, g, u + t + 10, n + z + 15, k, m);
			w._drawWebGL();
			D.canvasContext.clearRect(0, 0, r, y);
			D.canvasContext.drawImage(A, 0, 0, r, y, 0, 0, r, y);
			e.Texture.deleteWebGLTexture(D);
			this._drawImage(D, 0, 0, r, y, u - t - 10, n - z - 15, r, y);
			this._drawWebGL();
			e.RenderTexture.release(x);
			e.RenderTexture.release(D)
		};
		b._drawWebGL = function() {
			if (0 != this.currentBatchSize && !this.contextLost) {
				var a = e.getTimer();
				this.start();
				var c = this.gl;
				c.bindTexture(c.TEXTURE_2D, this.currentBaseTexture);
				var b = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
				c.bufferSubData(c.ARRAY_BUFFER, 0, b);
				c.drawElements(c.TRIANGLES, 6 * this.currentBatchSize, c.UNSIGNED_SHORT, 0);
				this.currentBatchSize = 0;
				this.renderCost += e.getTimer() - a;
				e.Profiler.getInstance().onDrawImage()
			}
		};
		b.setTransform = function(a) {
			var c = this.worldTransform;
			c.a = a.a;
			c.b = a.b;
			c.c = a.c;
			c.d = a.d;
			c.tx = a.tx;
			c.ty = a.ty
		};
		b.setAlpha = function(a, c) {
			this.worldAlpha = a;
			this.setBlendMode(c)
		};
		b.createWebGLTexture = function(a) {
			a = a._bitmapData;
			a.webGLTexture || (a.webGLTexture = {});
			if (!a.webGLTexture[this.glID]) {
				var c = this.gl;
				a.webGLTexture[this.glID] = c.createTexture();
				a.webGLTexture[this.glID].glContext = c;
				c.bindTexture(c.TEXTURE_2D, a.webGLTexture[this.glID]);
				c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
				c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, a);
				c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.LINEAR);
				c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.LINEAR);
				c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE);
				c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
				c.bindTexture(c.TEXTURE_2D, null)
			}
		};
		b.pushMask = function(a) {
			this._drawWebGL();
			var c = this.gl;
			0 == this.maskList.length && c.enable(c.SCISSOR_TEST);
			a = this.getScissorRect(a);
			this.maskList.push(a);
			this.scissor(a.x, a.y, a.width, a.height)
		};
		b.getScissorRect = function(a) {
			var c = this.maskList[this.maskList.length - 1],
			b,
			d,
			f;
			c ? c.intersects(c) ? (b = Math.max(a.x + this.worldTransform.tx, c.x), d = Math.max(a.y + this.worldTransform.ty, c.y), f = Math.min(a.x + this.worldTransform.tx + a.width, c.x + c.width) - b, a = Math.min(a.y + this.worldTransform.ty + a.height, c.y + c.height) - d) : a = f = d = b = 0 : (b = a.x + this.worldTransform.tx, d = a.y + this.worldTransform.ty, f = a.width, a = a.height); (c = this.maskDataFreeList.pop()) ? (c.x = b, c.y = d, c.width = f, c.height = a) : c = new e.Rectangle(b, d, f, a);
			return c
		};
		b.popMask = function() {
			this._drawWebGL();
			var a = this.gl,
			c = this.maskList.pop();
			this.maskDataFreeList.push(c);
			c = this.maskList.length;
			0 != c ? (c = this.maskList[c - 1], (0 < c.width || 0 < c.height) && this.scissor(c.x, c.y, c.width, c.height)) : a.disable(a.SCISSOR_TEST)
		};
		b.scissor = function(a, c, b, d) {
			var f = this.gl;
			0 > b && (b = 0);
			0 > d && (d = 0);
			f.scissor(a, -c + e.MainContext.instance.stage.stageHeight - d, b, d)
		};
		b.setGlobalColorTransform = function(a) {
			if (this.colorTransformMatrix != a && (this._drawWebGL(), this.colorTransformMatrix = a)) {
				a = a.concat();
				var c = this.shaderManager.colorTransformShader;
				c.uniforms.colorAdd.value.w = a.splice(19, 1)[0] / 255;
				c.uniforms.colorAdd.value.z = a.splice(14, 1)[0] / 255;
				c.uniforms.colorAdd.value.y = a.splice(9, 1)[0] / 255;
				c.uniforms.colorAdd.value.x = a.splice(4, 1)[0] / 255;
				c.uniforms.matrix.value = a
			}
		};
		b.setBlurData = function(a, c) {
			var b = this.shaderManager.blurShader;
			b.uniforms.blur.value.x = a;
			b.uniforms.blur.value.y = c
		};
		b.setGlobalFilters = function(a) {
			this._drawWebGL();
			this.setFilterProperties(a)
		};
		b.setFilterProperties = function(a) {
			if ((this.filters = a) && a.length) for (var c = 0; 1 > c; c++) {
				var b = a[c];
				this.filterType = b.type;
				switch (b.type) {
				case "blur":
					this.setBlurData(b.blurX, b.blurY);
					break;
				case "colorTransform":
					this.setGlobalColorTransform(b._matrix)
				}
			} else this.filterType = null
		};
		b.setupFont = function(a, c) {
			void 0 === c && (c = null);
			this.canvasContext.setupFont(a, c)
		};
		b.measureText = function(a) {
			return this.canvasContext.measureText(a)
		};
		b.renderGraphics = function(a) {
			this._drawWebGL();
			var c = this.gl,
			b = this.shaderManager.primitiveShader;
			this.graphicsPoints ? (this.graphicsPoints.length = 0, this.graphicsIndices.length = 0) : (this.graphicsPoints = [], this.graphicsIndices = [], this.graphicsBuffer = c.createBuffer(), this.graphicsIndexBuffer = c.createBuffer());
			this.updateGraphics(a);
			this.shaderManager.activateShader(b);
			c.blendFunc(c.ONE, c.ONE_MINUS_SRC_ALPHA);
			c.uniformMatrix3fv(b.translationMatrix, !1, this.worldTransform.toArray(!0));
			c.uniform2f(b.projectionVector, this.projectionX, -this.projectionY);
			c.uniform2f(b.offsetVector, 0, 0);
			c.uniform3fv(b.tintColor, [1, 1, 1]);
			c.uniform1f(b.alpha, this.worldAlpha);
			c.bindBuffer(c.ARRAY_BUFFER, this.graphicsBuffer);
			c.vertexAttribPointer(b.aVertexPosition, 2, c.FLOAT, !1, 24, 0);
			c.vertexAttribPointer(b.colorAttribute, 4, c.FLOAT, !1, 24, 8);
			c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
			c.drawElements(c.TRIANGLE_STRIP, this.graphicsIndices.length, c.UNSIGNED_SHORT, 0);
			this.shaderManager.activateShader(this.shaderManager.defaultShader)
		};
		b.updateGraphics = function(a) {
			var c = this.gl;
			this.buildRectangle(a);
			c.bindBuffer(c.ARRAY_BUFFER, this.graphicsBuffer);
			c.bufferData(c.ARRAY_BUFFER, new Float32Array(this.graphicsPoints), c.STATIC_DRAW);
			c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this.graphicsIndexBuffer);
			c.bufferData(c.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.graphicsIndices), c.STATIC_DRAW)
		};
		b.buildRectangle = function(a) {
			var c = a.x,
			b = a.y,
			d = a.w;
			a = a.h;
			var e = this.graphicsStyle.a,
			f = this.graphicsStyle.r * e,
			g = this.graphicsStyle.g * e,
			k = this.graphicsStyle.b * e,
			m = this.graphicsPoints,
			l = this.graphicsIndices,
			q = m.length / 6;
			m.push(c, b);
			m.push(f, g, k, e);
			m.push(c + d, b);
			m.push(f, g, k, e);
			m.push(c, b + a);
			m.push(f, g, k, e);
			m.push(c + d, b + a);
			m.push(f, g, k, e);
			l.push(q, q, q + 1, q + 2, q + 3, q + 3)
		};
		b.setGraphicsStyle = function(a, c, b, d) {
			this.graphicsStyle.r = a;
			this.graphicsStyle.g = c;
			this.graphicsStyle.b = b;
			this.graphicsStyle.a = d
		};
		d.glID = 0;
		d.isInit = !1;
		return d
	} (e.RendererContext);
	e.WebGLRenderer = f;
	f.prototype.__class__ = "egret.WebGLRenderer"
})(egret || (egret = {}));

var egret_webgl_graphics; (function(e) {
	e.beginFill = function(e, d) {
		void 0 === d && (d = 1);
		this._pushCommand(new f(this._setStyle, this, [(e >> 16) / 255, ((e & 65280) >> 8) / 255, (e & 255) / 255, d]))
	};
	e.drawRect = function(e, d, b, a) {
		this._pushCommand(new f(function(c) {
			this.renderContext.renderGraphics(c)
		},
		this, [{
			x: e,
			y: d,
			w: b,
			h: a
		}]));
		this._checkRect(e, d, b, a)
	};
	e.drawCircle = function(e, d, b) {};
	e.drawRoundRect = function(e, d, b, a, c, h) {};
	e.drawEllipse = function(e, d, b, a) {};
	e.lineStyle = function(e, d, b, a, c, h, f, v) {};
	e.lineTo = function(e, d) {};
	e.curveTo = function(e, d, b, a) {};
	e.cubicCurveTo = function(e, d, b, a, c, h) {};
	e.moveTo = function(e, d) {};
	e.clear = function() {
		this._maxY = this._maxX = this._minY = this._minX = this.commandQueue.length = 0
	};
	e.endFill = function() {};
	e._pushCommand = function(e) {
		this.commandQueue.push(e)
	};
	e._draw = function(e) {
		var d = this.commandQueue.length;
		if (0 != d) for (this.renderContext = e, e = 0; e < d; e++) {
			var b = this.commandQueue[e];
			b.method.apply(b.thisObject, b.args)
		}
	};
	var f = function() {
		return function(e, d, b) {
			this.method = e;
			this.thisObject = d;
			this.args = b
		}
	} ();
	f.prototype.__class__ = "egret_webgl_graphics.Command";
	e._setStyle = function(e, d, b, a) {
		this.renderContext.setGraphicsStyle(e, d, b, a)
	};
	e.init = function() {
		for (var f in e) egret.Graphics.prototype[f] = e[f]
	}
})(egret_webgl_graphics || (egret_webgl_graphics = {})); (function(e) {
	var f = function() {
		function f() {}
		f.compileProgram = function(d, b, a) {
			a = f.compileFragmentShader(d, a);
			b = f.compileVertexShader(d, b);
			var c = d.createProgram();
			d.attachShader(c, b);
			d.attachShader(c, a);
			d.linkProgram(c);
			d.getProgramParameter(c, d.LINK_STATUS) || e.Logger.infoWithErrorId(1020);
			return c
		};
		f.compileFragmentShader = function(d, b) {
			return f._compileShader(d, b, d.FRAGMENT_SHADER)
		};
		f.compileVertexShader = function(d, b) {
			return f._compileShader(d, b, d.VERTEX_SHADER)
		};
		f._compileShader = function(d, b, a) {
			a = d.createShader(a);
			d.shaderSource(a, b);
			d.compileShader(a);
			return d.getShaderParameter(a, d.COMPILE_STATUS) ? a: (e.Logger.info(d.getShaderInfoLog(a)), null)
		};
		f.checkCanUseWebGL = function() {
			if (void 0 == f.canUseWebGL) try {
				var d = document.createElement("canvas");
				f.canUseWebGL = !!window.WebGLRenderingContext && !(!d.getContext("webgl") && !d.getContext("experimental-webgl"))
			} catch(b) {
				f.canUseWebGL = !1
			}
			return f.canUseWebGL
		};
		return f
	} ();
	e.WebGLUtils = f;
	f.prototype.__class__ = "egret.WebGLUtils"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function f(b) {
			this.defaultVertexSrc = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n}";
			this.program = this.gl = null;
			this.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\ngl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;\n}";
			this.uniforms = null;
			this.gl = b;
			this.init()
		}
		var d = f.prototype;
		d.init = function() {
			var b = this.gl,
			a = e.WebGLUtils.compileProgram(b, this.defaultVertexSrc, this.fragmentSrc);
			b.useProgram(a);
			this.uSampler = b.getUniformLocation(a, "uSampler");
			this.projectionVector = b.getUniformLocation(a, "projectionVector");
			this.offsetVector = b.getUniformLocation(a, "offsetVector");
			this.dimensions = b.getUniformLocation(a, "dimensions");
			this.aVertexPosition = b.getAttribLocation(a, "aVertexPosition");
			this.aTextureCoord = b.getAttribLocation(a, "aTextureCoord");
			this.colorAttribute = b.getAttribLocation(a, "aColor"); - 1 === this.colorAttribute && (this.colorAttribute = 2);
			this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
			for (var c in this.uniforms) this.uniforms[c].uniformLocation = b.getUniformLocation(a, c);
			this.initUniforms();
			this.program = a
		};
		d.initUniforms = function() {
			if (this.uniforms) {
				var b = this.gl,
				a, c;
				for (c in this.uniforms) {
					a = this.uniforms[c];
					var h = a.type;
					"mat2" === h || "mat3" === h || "mat4" === h ? (a.glMatrix = !0, a.glValueLength = 1, "mat2" === h ? a.glFunc = b.uniformMatrix2fv: "mat3" === h ? a.glFunc = b.uniformMatrix3fv: "mat4" === h && (a.glFunc = b.uniformMatrix4fv)) : (a.glFunc = b["uniform" + h], a.glValueLength = "2f" === h || "2i" === h ? 2 : "3f" === h || "3i" === h ? 3 : "4f" === h || "4i" === h ? 4 : 1)
				}
			}
		};
		d.syncUniforms = function() {
			if (this.uniforms) {
				var b, a = this.gl,
				c;
				for (c in this.uniforms) b = this.uniforms[c],
				1 === b.glValueLength ? !0 === b.glMatrix ? b.glFunc.call(a, b.uniformLocation, b.transpose, b.value) : b.glFunc.call(a, b.uniformLocation, b.value) : 2 === b.glValueLength ? b.glFunc.call(a, b.uniformLocation, b.value.x, b.value.y) : 3 === b.glValueLength ? b.glFunc.call(a, b.uniformLocation, b.value.x, b.value.y, b.value.z) : 4 === b.glValueLength && b.glFunc.call(a, b.uniformLocation, b.value.x, b.value.y, b.value.z, b.value.w)
			}
		};
		return f
	} ();
	e.EgretShader = f;
	f.prototype.__class__ = "egret.EgretShader"
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d(b) {
			e.call(this, b);
			this.fragmentSrc = "precision mediump float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform float invert;\nuniform mat4 matrix;\nuniform vec4 colorAdd;\nuniform sampler2D uSampler;\nvoid main(void) {\nvec4 texColor = texture2D(uSampler, vTextureCoord);\nvec4 locColor = texColor * matrix;\nif(texColor.a != 0.0){\nlocColor += colorAdd;\n}\ngl_FragColor = vec4(locColor.rgb*locColor.a,locColor.a);\n}";
			this.uniforms = {
				matrix: {
					type: "mat4",
					value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
				},
				colorAdd: {
					type: "4f",
					value: {
						x: 0,
						y: 0,
						z: 0,
						w: 0
					}
				}
			};
			this.init()
		}
		__extends(d, e);
		return d
	} (e.EgretShader);
	e.ColorTransformShader = f;
	f.prototype.__class__ = "egret.ColorTransformShader"
})(egret || (egret = {}));
 (function(e) {
	var f = function(e) {
		function d(b) {
			e.call(this, b);
			this.fragmentSrc = "precision mediump float;uniform vec2 blur;uniform sampler2D uSampler;varying vec2 vTextureCoord;void main(){gl_FragColor = vec4(0.0);gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.028 * blur.x, -0.028 * blur.y))) * 0.0044299121055113265;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.024 * blur.x, -0.024 * blur.y))) * 0.00895781211794;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.020 * blur.x, -0.020 * blur.y))) * 0.0215963866053;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.016 * blur.x, -0.016 * blur.y))) * 0.0443683338718;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.012 * blur.x, -0.012 * blur.y))) * 0.0776744219933;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.008 * blur.x, -0.008 * blur.y))) * 0.115876621105;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2(-0.004 * blur.x, -0.004 * blur.y))) * 0.147308056121;gl_FragColor += texture2D(uSampler, vTextureCoord) * 0.159576912161;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.004 * blur.x,  0.004 * blur.y))) * 0.147308056121;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.008 * blur.x,  0.008 * blur.y))) * 0.115876621105;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.012 * blur.x,  0.012 * blur.y))) * 0.0776744219933;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.016 * blur.x,  0.016 * blur.y))) * 0.0443683338718;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.020 * blur.x,  0.020 * blur.y))) * 0.0215963866053;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.024 * blur.x,  0.024 * blur.y))) * 0.00895781211794;gl_FragColor += texture2D(uSampler, (vTextureCoord + vec2( 0.028 * blur.x,  0.028 * blur.y))) * 0.0044299121055113265;}";
			this.uniforms = {
				blur: {
					type: "2f",
					value: {
						x: 2,
						y: 2
					}
				}
			};
			this.init()
		}
		__extends(d, e);
		return d
	} (e.EgretShader);
	e.BlurShader = f;
	f.prototype.__class__ = "egret.BlurShader"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function f(d) {
			this.alpha = this.translationMatrix = this.attributes = this.colorAttribute = this.aVertexPosition = this.tintColor = this.offsetVector = this.projectionVector = this.program = this.gl = null;
			this.fragmentSrc = "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n   gl_FragColor = vColor;\n}";
			this.vertexSrc = "attribute vec2 aVertexPosition;\nattribute vec4 aColor;\nuniform mat3 translationMatrix;\nuniform vec2 projectionVector;\nuniform vec2 offsetVector;\nuniform float alpha;\nuniform vec3 tint;\nvarying vec4 vColor;\nvoid main(void) {\n   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);\n   v -= offsetVector.xyx;\n   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);\n   vColor = aColor * vec4(tint * alpha, alpha);\n}";
			this.gl = d;
			this.init()
		}
		f.prototype.init = function() {
			var d = this.gl,
			b = e.WebGLUtils.compileProgram(d, this.vertexSrc, this.fragmentSrc);
			d.useProgram(b);
			this.projectionVector = d.getUniformLocation(b, "projectionVector");
			this.offsetVector = d.getUniformLocation(b, "offsetVector");
			this.tintColor = d.getUniformLocation(b, "tint");
			this.aVertexPosition = d.getAttribLocation(b, "aVertexPosition");
			this.colorAttribute = d.getAttribLocation(b, "aColor");
			this.attributes = [this.aVertexPosition, this.colorAttribute];
			this.translationMatrix = d.getUniformLocation(b, "translationMatrix");
			this.alpha = d.getUniformLocation(b, "alpha");
			this.program = b
		};
		return f
	} ();
	e.PrimitiveShader = f;
	f.prototype.__class__ = "egret.PrimitiveShader"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function f(b) {
			this.gl = null;
			this.maxAttibs = 10;
			this.attribState = [];
			this.tempAttribState = [];
			this.blurShader = this.colorTransformShader = this.primitiveShader = this.defaultShader = this.currentShader = null;
			for (var a = 0; a < this.maxAttibs; a++) this.attribState[a] = !1;
			this.setContext(b)
		}
		var d = f.prototype;
		d.setContext = function(b) {
			this.gl = b;
			this.primitiveShader = new e.PrimitiveShader(b);
			this.defaultShader = new e.EgretShader(b);
			this.colorTransformShader = new e.ColorTransformShader(b);
			this.blurShader = new e.BlurShader(b);
			this.activateShader(this.defaultShader)
		};
		d.activateShader = function(b) {
			this.currentShader != b && (this.gl.useProgram(b.program), this.setAttribs(b.attributes), this.currentShader = b)
		};
		d.setAttribs = function(b) {
			var a, c;
			c = this.tempAttribState.length;
			for (a = 0; a < c; a++) this.tempAttribState[a] = !1;
			c = b.length;
			for (a = 0; a < c; a++) this.tempAttribState[b[a]] = !0;
			b = this.gl;
			c = this.attribState.length;
			for (a = 0; a < c; a++) this.attribState[a] !== this.tempAttribState[a] && (this.attribState[a] = this.tempAttribState[a], this.tempAttribState[a] ? b.enableVertexAttribArray(a) : b.disableVertexAttribArray(a))
		};
		return f
	} ();
	e.WebGLShaderManager = f;
	f.prototype.__class__ = "egret.WebGLShaderManager"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			e.Texture.createBitmapData = e.Texture._createBitmapDataForCanvasAndWebGl
		}
		__extends(d, f);
		var b = d.prototype;
		b.initVersion = function(a) {
			this._versionCtr = a
		};
		b.proceed = function(a) {
			function c() {
				if (4 == d.readyState) if (d.status != a._status && (a._status = d.status, e.HTTPStatusEvent.dispatchHTTPStatusEvent(a, d.status)), 400 <= d.status || 0 == d.status) e.IOErrorEvent.dispatchIOErrorEvent(a);
				else {
					switch (a.dataFormat) {
					case e.URLLoaderDataFormat.TEXT:
						a.data = d.responseText;
						break;
					case e.URLLoaderDataFormat.VARIABLES:
						a.data = new e.URLVariables(d.responseText);
						break;
					case e.URLLoaderDataFormat.BINARY:
						a.data = d.response;
						break;
					default:
						a.data = d.responseText
					}
					e.__callAsync(e.Event.dispatchEvent, e.Event, a, e.Event.COMPLETE)
				}
			}
			if (a.dataFormat == e.URLLoaderDataFormat.TEXTURE) this.loadTexture(a);
			else if (a.dataFormat == e.URLLoaderDataFormat.SOUND) e.Html5Capatibility._audioType == e.AudioType.WEB_AUDIO ? this.loadWebAudio(a) : e.Html5Capatibility._audioType == e.AudioType.QQ_AUDIO ? this.loadQQAudio(a) : this.loadSound(a);
			else {
				var b = a._request,
				d = this.getXHR();
				d.onreadystatechange = c;
				var f = this.getVirtualUrl(e.NetContext._getUrl(b));
				d.open(b.method, f, !0);
				this.setResponseType(d, a.dataFormat);
				b.method != e.URLRequestMethod.GET && b.data ? b.data instanceof e.URLVariables ? (d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), d.send(b.data.toString())) : (d.setRequestHeader("Content-Type", "multipart/form-data"), d.send(b.data)) : d.send()
			}
		};
		b.loadSound = function(a) {
			function c(d) {
				e.clearTimeout(f.__timeoutId);
				f.removeEventListener("canplaythrough", c, !1);
				f.removeEventListener("error", b, !1);
				d = new e.Html5Audio;
				d._setAudio(f);
				var p = new e.Sound;
				p._setAudio(d);
				a.data = p;
				e.__callAsync(e.Event.dispatchEvent, e.Event, a, e.Event.COMPLETE)
			}

			function b(d) {
				e.clearTimeout(f.__timeoutId);
				f.removeEventListener("canplaythrough", c, !1);
				f.removeEventListener("error", b, !1);
				e.IOErrorEvent.dispatchIOErrorEvent(a)
			}
			var d = this.getVirtualUrl(a._request.url),
			f = new Audio(d);
			f.__timeoutId = e.setTimeout(c, this, 100);
			f.addEventListener("canplaythrough", c, !1);
			f.addEventListener("error", b, !1);
			f.load()
		};
		b.loadQQAudio = function(a) {
			var c = e.Html5Capatibility._QQRootPath + this.getVirtualUrl(a._request.url);
			console.log("loadQQAudio");
			QZAppExternal.preloadSound(function(b) {
				if (0 == b.code) {
					b = new e.QQAudio;
					b._setPath(c);
					var d = new e.Sound;
					d._setAudio(b);
					a.data = d;
					e.__callAsync(e.Event.dispatchEvent, e.Event, a, e.Event.COMPLETE)
				} else e.IOErrorEvent.dispatchIOErrorEvent(a)
			},
			{
				bid: -1,
				url: c,
				refresh: 1
			})
		};
		b.loadWebAudio = function(a) {
			var c = this.getVirtualUrl(a._request.url),
			b = new XMLHttpRequest;
			b.open("GET", c, !0);
			b.responseType = "arraybuffer";
			console.log("loadWebAudio");
			b.onload = function() {
				var c = new e.WebAudio;
				c._setArrayBuffer(b.response,
				function() {
					var b = new e.Sound;
					b._setAudio(c);
					a.data = b;
					e.__callAsync(e.Event.dispatchEvent, e.Event, a, e.Event.COMPLETE)
				})
			};
			b.send()
		};
		b.getXHR = function() {
			return window.XMLHttpRequest ? new window.XMLHttpRequest: new ActiveXObject("MSXML2.XMLHTTP")
		};
		b.setResponseType = function(a, c) {
			switch (c) {
			case e.URLLoaderDataFormat.TEXT:
			case e.URLLoaderDataFormat.VARIABLES:
				a.responseType = e.URLLoaderDataFormat.TEXT;
				break;
			case e.URLLoaderDataFormat.BINARY:
				a.responseType = "arraybuffer";
				break;
			default:
				a.responseType = c
			}
		};
		b.loadTexture = function(a) {
			var c = this.getVirtualUrl(a._request.url);
			e.Texture.createBitmapData(c,
			function(c, b) {
				if (0 != c) e.IOErrorEvent.dispatchIOErrorEvent(a);
				else {
					var d = new e.Texture;
					d._setBitmapData(b);
					a.data = d;
					e.__callAsync(e.Event.dispatchEvent, e.Event, a, e.Event.COMPLETE)
				}
			})
		};
		b.getVirtualUrl = function(a) {
			return this._versionCtr ? this._versionCtr.getVirtualUrl(a) : a
		};
		return d
	} (e.NetContext);
	e.HTML5NetContext = f;
	f.prototype.__class__ = "egret.HTML5NetContext"
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this._isTouchDown = !1;
			this.rootDiv = null;
			this.rootDiv = document.getElementById(e.StageDelegate.canvas_div_name);
			if (!this.rootDiv) {
				var a = document.getElementById(e.StageDelegate.egret_root_div);
				this.rootDiv = e.Browser.getInstance().$new("div");
				this.rootDiv.id = e.StageDelegate.canvas_div_name;
				a.appendChild(this.rootDiv)
			}
		}
		__extends(d, f);
		var b = d.prototype;
		b.prevent = function(a) {
			a.stopPropagation(); ! 0 == a.isScroll || e.HTMLInput.getInstance().isInputOn() || a.preventDefault()
		};
		b.run = function() {
			var a = this;
			window.navigator.msPointerEnabled ? (this.rootDiv.addEventListener("MSPointerDown",
			function(c) {
				a._onTouchBegin(c);
				a.prevent(c)
			},
			!1), this.rootDiv.addEventListener("MSPointerMove",
			function(c) {
				a._onTouchMove(c);
				a.prevent(c)
			},
			!1), this.rootDiv.addEventListener("MSPointerUp",
			function(c) {
				a._onTouchEnd(c);
				a.prevent(c)
			},
			!1)) : e.MainContext.deviceType == e.MainContext.DEVICE_MOBILE ? this.addTouchListener() : e.MainContext.deviceType == e.MainContext.DEVICE_PC && (this.addTouchListener(), this.addMouseListener());
			window.addEventListener("mousedown",
			function(c) {
				a.inOutOfCanvas(c) ? a.dispatchLeaveStageEvent() : a._isTouchDown = !0
			});
			window.addEventListener("mouseup",
			function(c) {
				a._isTouchDown && (a.inOutOfCanvas(c) ? a.dispatchLeaveStageEvent() : a._onTouchEnd(c));
				a._isTouchDown = !1
			})
		};
		b.addMouseListener = function() {
			var a = this;
			this.rootDiv.addEventListener("mousedown",
			function(c) {
				a._onTouchBegin(c)
			});
			this.rootDiv.addEventListener("mousemove",
			function(c) {
				a._onTouchMove(c)
			});
			this.rootDiv.addEventListener("mouseup",
			function(c) {
				a._onTouchEnd(c)
			})
		};
		b.addTouchListener = function() {
			var a = this;
			this.rootDiv.addEventListener("touchstart",
			function(c) {
				for (var b = c.changedTouches.length,
				d = 0; d < b; d++) a._onTouchBegin(c.changedTouches[d]);
				a.prevent(c)
			},
			!1);
			this.rootDiv.addEventListener("touchmove",
			function(c) {
				for (var b = c.changedTouches.length,
				d = 0; d < b; d++) a._onTouchMove(c.changedTouches[d]);
				a.prevent(c)
			},
			!1);
			this.rootDiv.addEventListener("touchend",
			function(c) {
				for (var b = c.changedTouches.length,
				d = 0; d < b; d++) a._onTouchEnd(c.changedTouches[d]);
				a.prevent(c)
			},
			!1);
			this.rootDiv.addEventListener("touchcancel",
			function(c) {
				for (var b = c.changedTouches.length,
				d = 0; d < b; d++) a._onTouchEnd(c.changedTouches[d]);
				a.prevent(c)
			},
			!1)
		};
		b.inOutOfCanvas = function(a) {
			var c = this.getLocation(this.rootDiv, a);
			a = c.x;
			var c = c.y,
			b = e.MainContext.instance.stage;
			return 0 > a || 0 > c || a > b.stageWidth || c > b.stageHeight ? !0 : !1
		};
		b.dispatchLeaveStageEvent = function() {
			this.touchingIdentifiers.length = 0;
			e.MainContext.instance.stage.dispatchEventWith(e.Event.LEAVE_STAGE)
		};
		b._onTouchBegin = function(a) {
			var c = this.getLocation(this.rootDiv, a),
			b = -1;
			a.hasOwnProperty("identifier") && (b = a.identifier);
			this.onTouchBegan(c.x, c.y, b)
		};
		b._onTouchMove = function(a) {
			var c = this.getLocation(this.rootDiv, a),
			b = -1;
			a.hasOwnProperty("identifier") && (b = a.identifier);
			this.onTouchMove(c.x, c.y, b)
		};
		b._onTouchEnd = function(a) {
			var c = this.getLocation(this.rootDiv, a),
			b = -1;
			a.hasOwnProperty("identifier") && (b = a.identifier);
			this.onTouchEnd(c.x, c.y, b)
		};
		b.getLocation = function(a, c) {
			var b = document.documentElement,
			d = window,
			f, g;
			"function" === typeof a.getBoundingClientRect ? (g = a.getBoundingClientRect(), f = g.left, g = g.top) : g = f = 0;
			f += d.pageXOffset - b.clientLeft;
			g += d.pageYOffset - b.clientTop;
			null != c.pageX ? (b = c.pageX, d = c.pageY) : (f -= document.body.scrollLeft, g -= document.body.scrollTop, b = c.clientX, d = c.clientY);
			var n = e.Point.identity;
			n.x = (b - f) / e.StageDelegate.getInstance().getScaleX();
			n.y = (d - g) / e.StageDelegate.getInstance().getScaleY();
			return n
		};
		return d
	} (e.TouchContext);
	e.HTML5TouchContext = f;
	f.prototype.__class__ = "egret.HTML5TouchContext"
})(egret || (egret = {}));
 (function(e) {
	var f = function(d) {
		function b() {
			d.call(this);
			this._isNeedShow = !1;
			this.inputDiv = this.inputElement = null;
			this._gscaleY = this._gscaleX = 0;
			this._isNeesHide = !1;
			this.textValue = "";
			this._styleInfoes = {};
			g.getInstance()
		}
		__extends(b, d);
		var a = b.prototype;
		a._initElement = function(c, a, b, d) {
			var f = e.StageDelegate.getInstance().getScaleX(),
			g = e.StageDelegate.getInstance().getScaleY();
			this.inputDiv.style.left = c * f + "px";
			this.inputDiv.style.top = a * g + "px";
			this._gscaleX = f * b;
			this._gscaleY = g * d
		};
		a._show = function(c, a, b, d) {
			this._multiline = c;
			g.getInstance().isCurrentStageText(this) ? this.inputElement.onblur = null: (this.inputElement = g.getInstance().getInputElement(this), this.inputDiv = g.getInstance()._inputDIV);
			this._isNeedShow = g.getInstance()._needShow = !0
		};
		a.onBlurHandler = function() {
			g.getInstance().clearInputElement();
			window.scrollTo(0, 0)
		};
		a.executeShow = function() {
			this.inputElement.value = this._getText();
			null == this.inputElement.onblur && (this.inputElement.onblur = this.onBlurHandler);
			this._resetStageText();
			0 < this._textfield._TF_Props_._maxChars ? this.inputElement.setAttribute("maxlength", this._textfield._TF_Props_._maxChars) : this.inputElement.removeAttribute("maxlength");
			this.inputElement.selectionStart = this.inputElement.value.length;
			this.inputElement.selectionEnd = this.inputElement.value.length;
			this.inputElement.focus()
		};
		a._hide = function() {
			this._isNeesHide = !0;
			0 <= e.Browser.getInstance().getUserAgent().indexOf("ios") && g.getInstance().disconnectStageText(this)
		};
		a._getText = function() {
			this.textValue || (this.textValue = "");
			return this.textValue
		};
		a._setText = function(c) {
			this.textValue = c;
			this.resetText()
		};
		a.resetText = function() {
			this.inputElement && (this.inputElement.value = this.textValue)
		};
		a._onInput = function() {
			this.textValue = this.inputElement.value;
			e.Event.dispatchEvent(this, "updateText", !1)
		};
		a._onClickHandler = function(c) {
			this._isNeedShow && (c.stopImmediatePropagation(), this._isNeedShow = !1, this.executeShow(), this.dispatchEvent(new e.Event("focus")))
		};
		a._onDisconnect = function() {
			this.inputElement = null;
			this.dispatchEvent(new e.Event("blur"))
		};
		a.setElementStyle = function(c, a) {
			this.inputElement && this._styleInfoes[c] != a && (this.inputElement.style[c] = a)
		};
		a._removeInput = function() {
			this.inputElement && g.getInstance().disconnectStageText(this)
		};
		a._resetStageText = function() {
			if (this.inputElement) {
				var c = this._textfield,
				a = c._TF_Props_;
				this.setElementStyle("fontFamily", a._fontFamily);
				this.setElementStyle("fontStyle", a._italic ? "italic": "normal");
				this.setElementStyle("fontWeight", a._bold ? "bold": "normal");
				this.setElementStyle("textAlign", a._textAlign);
				this.setElementStyle("fontSize", a._size * this._gscaleY + "px");
				this.setElementStyle("lineHeight", a._size * this._gscaleY + "px");
				this.setElementStyle("color", a._textColorString);
				this.setElementStyle("width", c._getSize(e.Rectangle.identity).width * this._gscaleX + "px");
				this.setElementStyle("height", c._getSize(e.Rectangle.identity).height * this._gscaleY + "px");
				this.setElementStyle("verticalAlign", a._verticalAlign)
			}
		};
		return b
	} (e.StageText);
	e.HTML5StageText = f;
	f.prototype.__class__ = "egret.HTML5StageText";
	var g = function() {
		function d() {
			this._needShow = !1
		}
		var b = d.prototype;
		b.isInputOn = function() {
			return null != this._stageText
		};
		b.isCurrentStageText = function(a) {
			return this._stageText == a
		};
		b.initValue = function(a) {
			a.style.position = "absolute";
			a.style.left = "0px";
			a.style.top = "0px";
			a.style.border = "none";
			a.style.padding = "0"
		};
		b._initStageDelegateDiv = function() {
			var a = this,
			c = e.Browser.getInstance().$("#StageDelegateDiv");
			c || (c = e.Browser.getInstance().$new("div"), c.id = "StageDelegateDiv", document.getElementById(e.StageDelegate.egret_root_div).appendChild(c), a.initValue(c), c.style.width = "0px", c.style.height = "0px", a._inputDIV = e.Browser.getInstance().$new("div"), a.initValue(a._inputDIV), a._inputDIV.style.width = "0px", a._inputDIV.style.height = "0px", a._inputDIV.style.left = "0px", a._inputDIV.style.top = "-100px", a._inputDIV.style[e.Browser.getInstance().getTrans("transformOrigin")] = "0% 0% 0px", c.appendChild(a._inputDIV), document.getElementById(e.StageDelegate.canvas_div_name).addEventListener("click",
			function(c) {
				a._needShow ? (a._needShow = !1, e.MainContext.instance.stage._changeSizeDispatchFlag = !1, a._stageText._onClickHandler(c), d.getInstance().show()) : a._inputElement && (a.clearInputElement(), a._inputElement.blur(), a._inputElement = null)
			}), a.initInputElement(!0), a.initInputElement(!1))
		};
		b.initInputElement = function(a) {
			var c = this;
			a ? (a = document.createElement("textarea"), a.style.resize = "none", c._multiElement = a, a.id = "egretTextarea") : (a = document.createElement("input"), c._simpleElement = a, a.id = "egretInput");
			a.type = "text";
			c._inputDIV.appendChild(a);
			a.setAttribute("tabindex", "-1");
			a.style.width = "1px";
			a.style.height = "12px";
			c.initValue(a);
			a.style.outline = "thin";
			a.style.background = "none";
			a.style.overflow = "hidden";
			a.style.wordBreak = "break-all";
			a.style.opacity = 0;
			a.oninput = function() {
				c._stageText && c._stageText._onInput()
			}
		};
		b.show = function() {
			var a = this._inputElement;
			e.__callAsync(function() {
				a.style.opacity = 1
			},
			this)
		};
		b.disconnectStageText = function(a) {
			if (null == this._stageText || this._stageText == a) this.clearInputElement(),
			this._inputElement && this._inputElement.blur()
		};
		b.clearInputElement = function() {
			this._inputElement && (this._inputElement.value = "", this._inputElement.onblur = null, this._inputElement.style.width = "1px", this._inputElement.style.height = "12px", this._inputElement.style.left = "0px", this._inputElement.style.top = "0px", this._inputElement.style.opacity = 0, (this._simpleElement == this._inputElement ? this._multiElement: this._simpleElement).style.display = "block", this._inputDIV.style.left = "0px", this._inputDIV.style.top = "-100px");
			this._stageText && (this._stageText._onDisconnect(), this._stageText = null);
			e.MainContext.instance.stage._changeSizeDispatchFlag = !0
		};
		b.getInputElement = function(a) {
			this.clearInputElement();
			this._stageText = a;
			this._inputElement = this._stageText._multiline ? this._multiElement: this._simpleElement; (this._simpleElement == this._inputElement ? this._multiElement: this._simpleElement).style.display = "none";
			return this._inputElement
		};
		d.getInstance = function() {
			null == d._instance && (d._instance = new e.HTMLInput);
			return d._instance
		};
		return d
	} ();
	e.HTMLInput = g;
	g.prototype.__class__ = "egret.HTMLInput"
})(egret || (egret = {}));

egret.StageText.create = function() {
	egret.HTMLInput.getInstance()._initStageDelegateDiv();
	return new egret.HTML5StageText
}; (function(e) {
	var f = function() {
		function f() {
			this._loop = !1;
			this.paused = !0;
			this._listeners = [];
			this._onEndedCall = null;
			this._volume = 1;
			this._startTime = 0
		}
		var d = f.prototype;
		d._play = function(b) {
			this.removeListeners();
			e.Html5Capatibility._System_OS != e.SystemOSType.WPHONE && (this._audio = this._audio.cloneNode());
			this.paused = !1;
			this._audio.autoplay = !0;
			this._audio.volume = this._volume;
			var a = this,
			c = function(b) {
				a._audio.removeEventListener("ended", c);
				a._onEndedCall && a._onEndedCall.call(null, b);
				a.clear()
			};
			this._audio.addEventListener("ended", c);
			this.initStart();
			try {
				this._audio.currentTime = this._startTime
			} catch(h) {} finally {
				this._audio.play()
			}
		};
		d.clear = function() {
			try {
				this._audio.pause()
			} catch(b) {} finally {
				this.removeListeners(),
				this._loop && !this.paused && this._play()
			}
		};
		d._pause = function() {
			this.paused = !0;
			this._audio.pause()
		};
		d._load = function() {
			this._audio.load()
		};
		d._setAudio = function(b) {
			this._audio = b
		};
		d.initStart = function() {
			for (var b = 0; b < this._listeners.length; b++) {
				var a = this._listeners[b];
				this._audio.addEventListener(a.type, a.listener, a.useCapture)
			}
		};
		d._addEventListener = function(b, a, c) {
			void 0 === c && (c = !1);
			"ended" == b ? this._onEndedCall = a: (this._listeners.push({
				type: b,
				listener: a,
				useCapture: c
			}), this._audio && this._audio.addEventListener(b, a, c))
		};
		d.removeListeners = function() {
			for (var b = 0; b < this._listeners.length; b++) {
				var a = this._listeners[b];
				this._audio && this._audio.removeEventListener(a.type, a.listener, a.useCapture)
			}
		};
		d._removeEventListener = function(b, a, c) {
			void 0 === c && (c = !1);
			if ("ended" == b) this._onEndedCall = null;
			else for (var h = 0; h < this._listeners.length; h++) {
				var d = this._listeners[h];
				if (d.listener == a && d.useCapture == c && d.type == b) {
					this._listeners.splice(h, 1);
					this._audio && this._audio.removeEventListener(b, a, c);
					break
				}
			}
		};
		d._preload = function(b, a, c) {
			void 0 === a && (a = null);
			void 0 === c && (c = null);
			e.callLater(a, c)
		};
		d._destroy = function() {};
		d._getVolume = function() {
			return this._volume
		};
		d._setVolume = function(b) {
			this._volume = Math.max(0, Math.min(b, 1));
			this._audio.volume = this._volume
		};
		d._setLoop = function(b) {
			this._loop = b
		};
		d._getCurrentTime = function() {
			return this._audio.currentTime
		};
		d._setCurrentTime = function(b) {
			this._startTime = b
		};
		return f
	} ();
	e.Html5Audio = f;
	f.prototype.__class__ = "egret.Html5Audio"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function f() {
			this.context = f.ctx;
			this.bufferSource = null;
			this.paused = !0;
			this._loop = !1;
			this._listeners = [];
			this._onEndedCall = null;
			this._volume = 1;
			this._currentTime = this._startTime = 0;
			this.gain = f.ctx.createGain ? f.ctx.createGain() : f.ctx.createGainNode()
		}
		var d = f.prototype;
		f.decodeAudios = function() {
			if (! (0 >= f.decodeArr.length || f.isDecoding)) {
				f.isDecoding = !0;
				var b = f.decodeArr.shift();
				f.ctx.decodeAudioData(b.buffer,
				function(a) {
					b.self.audioBuffer = a;
					b.callback && b.callback();
					f.isDecoding = !1;
					f.decodeAudios()
				})
			}
		};
		d._play = function(b) {
			var a = this;
			this.bufferSource && (this.bufferSource.onended = null, this.removeListeners(), this.bufferSource = null);
			b = this.context;
			var c = this.gain,
			h = b.createBufferSource();
			this.bufferSource = h;
			this.addListeners();
			h.buffer = this.audioBuffer;
			h.connect(c);
			c.connect(b.destination);
			h.onended = function(c) {
				a.clear();
				a._onEndedCall && a._onEndedCall.call(null, c);
				a._loop && !a.paused && a._play()
			};
			this.paused = !1;
			this._startTime = Date.now();
			this.gain.gain.value = this._volume;
			h.start(0, this._currentTime);
			this._currentTime = 0
		};
		d.clear = function() {
			if (this.bufferSource) {
				this.removeListeners();
				var b = this.bufferSource;
				b.stop ? b.stop(0) : b.noteOff(0);
				this.bufferSource.disconnect();
				this.bufferSource = null
			}
		};
		d.addListeners = function() {
			for (var b = 0; b < this._listeners.length; b++) {
				var a = this._listeners[b];
				this.bufferSource.addEventListener(a.type, a.listener, a.useCapture)
			}
		};
		d.removeListeners = function() {
			for (var b = 0; b < this._listeners.length; b++) {
				var a = this._listeners[b];
				this.bufferSource.removeEventListener(a.type, a.listener, a.useCapture)
			}
		};
		d._pause = function() {
			this.paused = !0;
			this.clear()
		};
		d._addEventListener = function(b, a, c) {
			void 0 === c && (c = !1);
			"ended" == b ? this._onEndedCall = a: (this._listeners.push({
				type: b,
				listener: a,
				useCapture: c
			}), this.bufferSource && this.bufferSource.addEventListener(b, a, c))
		};
		d._removeEventListener = function(b, a, c) {
			void 0 === c && (c = !1);
			if ("ended" == b) this._onEndedCall = null;
			else for (var h = 0; h < this._listeners.length; h++) {
				var d = this._listeners[h];
				if (d.listener == a && d.useCapture == c && d.type == b) {
					this._listeners.splice(h, 1);
					this.bufferSource && this.bufferSource.removeEventListener(b, a, c);
					break
				}
			}
		};
		d._load = function() {
			this._setArrayBuffer(this._arrayBuffer, null)
		};
		d._setArrayBuffer = function(b, a) {
			this._arrayBuffer = b;
			f.decodeArr.push({
				buffer: b,
				callback: a,
				self: this
			});
			f.decodeAudios()
		};
		d._preload = function(b, a, c) {
			void 0 === a && (a = null);
			void 0 === c && (c = null);
			e.callLater(a, c)
		};
		d._getVolume = function() {
			return this._volume
		};
		d._setVolume = function(b) {
			this._volume = b;
			this.gain.gain.value = b
		};
		d._setLoop = function(b) {
			this._loop = b
		};
		d._getCurrentTime = function() {
			return this.bufferSource ? (Date.now() - this._startTime) / 1E3: 0
		};
		d._setCurrentTime = function(b) {
			this._currentTime = b
		};
		d._destroy = function() {};
		f.canUseWebAudio = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
		f.ctx = f.canUseWebAudio ? new(window.AudioContext || window.webkitAudioContext || window.mozAudioContext) : void 0;
		f.decodeArr = [];
		f.isDecoding = !1;
		return f
	} ();
	e.WebAudio = f;
	f.prototype.__class__ = "egret.WebAudio"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function f() {
			this._loop = !1;
			this._currentTime = 0
		}
		var d = f.prototype;
		d._play = function(b) {
			this._type = b;
			b == e.Sound.EFFECT ? QZAppExternal.playLocalSound(function(a) {
				alert(JSON.stringify(a))
			},
			{
				bid: -1,
				url: this._path,
				loop: this._loop ? -1 : 0
			}) : QZAppExternal.playLocalBackSound({
				bid: -1,
				url: this._path,
				loop: this._loop ? -1 : 0
			})
		};
		d._pause = function() {
			this._type == e.Sound.EFFECT ? QZAppExternal.stopSound() : QZAppExternal.stopBackSound()
		};
		d._addEventListener = function(b, a, c) {};
		d._removeEventListener = function(b, a, c) {};
		d._load = function() {};
		d._preload = function(b, a, c) {
			void 0 === a && (a = null);
			void 0 === c && (c = null);
			e.callLater(a, c)
		};
		d._setPath = function(b) {
			this._path = b
		};
		d._getVolume = function() {
			return 1
		};
		d._setVolume = function(b) {};
		d._setLoop = function(b) {
			this._loop = b
		};
		d._getCurrentTime = function() {
			return 0
		};
		d._setCurrentTime = function(b) {
			this._currentTime = b
		};
		d._destroy = function() {};
		return f
	} ();
	e.QQAudio = f;
	f.prototype.__class__ = "egret.QQAudio"
})(egret || (egret = {}));
 (function(e) {
	var f = function() {
		function b() {}
		b.QQ_AUDIO = 1;
		b.WEB_AUDIO = 2;
		b.HTML5_AUDIO = 3;
		return b
	} ();
	e.AudioType = f;
	f.prototype.__class__ = "egret.AudioType";
	var g = function() {
		function b() {}
		b.WPHONE = 1;
		b.IOS = 2;
		b.ADNROID = 3;
		return b
	} ();
	e.SystemOSType = g;
	g.prototype.__class__ = "egret.SystemOSType";
	var d = function(b) {
		function a() {
			b.call(this)
		}
		__extends(a, b);
		a._init = function() {
			var c = navigator.userAgent.toLowerCase();
			a.ua = c;
			a._canUseBlob = !1;
			a._audioType = f.HTML5_AUDIO;
			a._AudioClass = e.Html5Audio;
			if (0 <= c.indexOf("windows phone")) a._System_OS = g.WPHONE;
			else if (0 <= c.indexOf("android")) a._System_OS = g.ADNROID,
			window.hasOwnProperty("QZAppExternal") && 0 <= c.indexOf("qzone") && (a._AudioClass = e.QQAudio, a._audioType = f.QQ_AUDIO, (c = document.getElementsByTagName("base")) && 0 < c.length ? a._QQRootPath = c[0].baseURI: (c = window.location.href.indexOf("?"), -1 == c && (c = window.location.href.length), c = window.location.href.substring(0, c), c = c.substring(0, c.lastIndexOf("/")), a._QQRootPath = c + "/"));
			else if (0 <= c.indexOf("iphone") || 0 <= c.indexOf("ipad") || 0 <= c.indexOf("ipod")) a._System_OS = g.IOS,
			7 <= a.getIOSVersion() && (a._canUseBlob = !0, a._AudioClass = e.WebAudio, a._audioType = f.WEB_AUDIO);
			window.URL || window.webkitURL || (a._canUseBlob = !1);
			window.AudioContext || window.webkitAudioContext || window.mozAudioContext || a._audioType != f.WEB_AUDIO || (a._audioType = f.HTML5_AUDIO, a._AudioClass = e.Html5Audio)
		};
		a.getIOSVersion = function() {
			var c = a.ua.toLowerCase().match(/cpu [^\d]*\d.*like mac os x/)[0];
			return parseInt(c.match(/\d(_\d)*/)[0]) || 0
		};
		a._canUseBlob = !1;
		a._audioType = 0;
		a._QQRootPath = "";
		a._System_OS = 0;
		a.ua = "";
		return a
	} (e.HashObject);
	e.Html5Capatibility = d;
	d.prototype.__class__ = "egret.Html5Capatibility";
	d._init()
})(egret || (egret = {}));
 (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this.localVersionDataPath = "localVersion.manifest";
			this.localVersionData = null;
			this.changeVersionDataPath = "version.manifest";
			this.changeVersionData = null;
			this.baseVersionDataPath = "base.manifest";
			this.baseVersionData = null;
			this.localVersionCodePath = "localCode.manifest";
			this.serverVersionCodePath = "code.manifest";
			this._call = this._load = null
		}
		__extends(d, f);
		var b = d.prototype;
		b.fetchVersion = function() {
			this._load = new e.NativeResourceLoader;
			this._load.addEventListener(e.IOErrorEvent.IO_ERROR, this.loadError, this);
			this._load.addEventListener(e.Event.COMPLETE, this.fileLoadComplete, this);
			this.initLocalVersionData()
		};
		b.initLocalVersionData = function() {
			var a = this.getData("appVersion.manifest", !0);
			if (a) {
				if (1 == a.debug) {
					this.baseVersionData = null;
					if (a = this.getData(this.localVersionDataPath, !1)) for (var c in a) this.deleteFile(c);
					this.deleteFile(this.localVersionDataPath);
					this.deleteFile(this.localVersionCodePath);
					this.loadOver();
					return
				}
				var b = this.getData("appVersion.manifest", !1);
				if (null == b || b.version != a.version) {
					this.localVersionData = this.getData(this.localVersionDataPath, !0);
					null == this.localVersionData && (this.localVersionData = {});
					this.deleteFile(this.localVersionCodePath);
					this.save("appVersion.manifest", JSON.stringify(a));
					if (a = this.getData(this.localVersionCodePath, !1)) for (c in a) a[c] != this.localVersionData[c] && this.deleteFile(c);
					else a = {};
					for (c in this.localVersionData) a[c] != this.localVersionData[c] && this.deleteFile(c);
					this.save(this.localVersionDataPath, JSON.stringify(this.localVersionData));
					this.loadCodeVersion();
					return
				}
			}
			this.localVersionData = this.getLocalData(this.localVersionDataPath);
			null == this.localVersionData && (this.localVersionData = this.getLocalData(this.baseVersionDataPath), null == this.localVersionData && (this.localVersionData = {}), this.save(this.localVersionDataPath, JSON.stringify(this.localVersionData)));
			this.loadCodeVersion()
		};
		b.deleteFile = function(a) {
			egret_native.deleteUpdateFile && egret_native.deleteUpdateFile(a)
		};
		b.loadCodeVersion = function() {
			var a = 1;
			this.newCode = 1;
			var c = this.getLocalData(this.localVersionCodePath);
			null != c && (a = c.code);
			c = this.getLocalData(this.serverVersionCodePath);
			null != c && (this.newCode = c.code);
			this.loadBaseVersion(a != this.newCode)
		};
		b.loadBaseVersion = function(a) {
			this.baseVersionData = this.getLocalData(this.baseVersionDataPath);
			this.changeVersionData = this.getLocalData(this.changeVersionDataPath);
			var c = this;
			null == c.baseVersionData || a ? c.loadFile(c.baseVersionDataPath,
			function() {
				c.baseVersionData = c.getLocalData(c.baseVersionDataPath);
				c.loadBaseOver()
			}) : c.loadBaseOver()
		};
		b.loadBaseOver = function() {
			this.save(this.localVersionCodePath, JSON.stringify({
				code: this.newCode
			}));
			this.loadOver()
		};
		b.loadFile = function(a, c) {
			void 0 === c && (c = null);
			this._call = c;
			this._load.load(a, 1E3)
		};
		b.fileLoadComplete = function(a) {
			this._call && this._call()
		};
		b.loadError = function(a) {
			this._load.removeEventListener(e.IOErrorEvent.IO_ERROR, this.loadError, this);
			this._load.removeEventListener(e.Event.COMPLETE, this.fileLoadComplete, this);
			this.dispatchEvent(a)
		};
		b.loadOver = function() {
			this._load.removeEventListener(e.IOErrorEvent.IO_ERROR, this.loadError, this);
			this._load.removeEventListener(e.Event.COMPLETE, this.fileLoadComplete, this);
			this.dispatchEvent(new e.Event(e.Event.COMPLETE))
		};
		b.save = function(a, c) {
			egret_native.writeFileSync ? egret_native.writeFileSync(a, c) : egret_native.saveRecord && egret_native.saveRecord(a, c)
		};
		b.getData = function(a, c) {
			if (egret_native.readUpdateFileSync && egret_native.readResourceFileSync) {
				var b = c ? egret_native.readResourceFileSync(a) : egret_native.readUpdateFileSync(a);
				return null != b ? JSON.parse(b) : null
			}
			return this.getLocalDataByOld(a)
		};
		b.getLocalData = function(a) {
			if (egret_native.readUpdateFileSync && egret_native.readResourceFileSync) {
				var c = egret_native.readUpdateFileSync(a);
				if (null != c) return JSON.parse(c);
				c = egret_native.readResourceFileSync(a);
				return null != c ? JSON.parse(c) : null
			}
			return this.getLocalDataByOld(a)
		};
		b.getLocalDataByOld = function(a) {
			var c = null;
			egret_native.isRecordExists(a) ? (a = egret_native.loadRecord(a), c = JSON.parse(a)) : egret_native.isFileExists(a) && (a = egret_native.readFileSync(a), c = JSON.parse(a));
			return c
		};
		b.getChangeList = function() {
			if (!this.baseVersionData) return [];
			var a = {},
			c;
			for (c in this.changeVersionData) 1 == this.changeVersionData[c].d ? delete this.baseVersionData[c] : this.baseVersionData[c] = this.changeVersionData[c];
			for (c in this.baseVersionData) null != this.localVersionData[c] && this.compareVersion(this.localVersionData, this.baseVersionData, c) || (a[c] = {
				url: c,
				size: this.baseVersionData[c].s
			});
			var b = [];
			for (c in a) b.push(a[c]);
			return b
		};
		b.compareVersion = function(a, c, b) {
			return null == a[b] || null == c[b] ? !1 : a[b].v == c[b].v
		};
		b.checkIsNewVersion = function(a) {
			return this.baseVersionData ? null != this.changeVersionData[a] ? this.compareVersion(this.changeVersionData, this.localVersionData, a) : null != this.baseVersionData[a] ? this.compareVersion(this.baseVersionData, this.localVersionData, a) : !0 : !0
		};
		b.saveVersion = function(a) {
			if (this.baseVersionData) {
				var c = !1;
				null != this.changeVersionData[a] ? this.compareVersion(this.changeVersionData, this.localVersionData, a) || (c = !0, this.localVersionData[a] = this.changeVersionData[a]) : null == this.baseVersionData[a] || this.compareVersion(this.baseVersionData, this.localVersionData, a) || (c = !0, this.localVersionData[a] = this.baseVersionData[a]);
				c && this.save(this.localVersionDataPath, JSON.stringify(this.localVersionData))
			}
		};
		b.getVirtualUrl = function(a) {
			return a
		};
		return d
	} (e.EventDispatcher);
	e.NativeVersionController = f;
	f.prototype.__class__ = "egret.NativeVersionController"
})(egret || (egret = {}));

var RES; (function(e) {
	var f = function(e) {
		function d(b, a, c) {
			void 0 === a && (a = !1);
			void 0 === c && (c = !1);
			e.call(this, b, a, c);
			this.itemsTotal = this.itemsLoaded = 0;
			this.groupName = "";
			this.resItem = null
		}
		__extends(d, e);
		d.dispatchResourceEvent = function(b, a, c, h, e, f) {
			void 0 === c && (c = "");
			void 0 === h && (h = null);
			void 0 === e && (e = 0);
			void 0 === f && (f = 0);
			var g = egret.Event._getPropertyData(d);
			g.groupName = c;
			g.resItem = h;
			g.itemsLoaded = e;
			g.itemsTotal = f;
			egret.Event._dispatchByTarget(d, b, a, g)
		};
		d.ITEM_LOAD_ERROR = "itemLoadError";
		d.CONFIG_COMPLETE = "configComplete";
		d.CONFIG_LOAD_ERROR = "configLoadError";
		d.GROUP_PROGRESS = "groupProgress";
		d.GROUP_COMPLETE = "groupComplete";
		d.GROUP_LOAD_ERROR = "groupLoadError";
		return d
	} (egret.Event);
	e.ResourceEvent = f;
	f.prototype.__class__ = "RES.ResourceEvent"
})(RES || (RES = {})); (function(e) {
	var f = function() {
		function e(b, a, c) {
			this.groupName = "";
			this.data = null;
			this._loaded = !1;
			this.name = b;
			this.url = a;
			this.type = c
		}
		var d = e.prototype;
		Object.defineProperty(d, "loaded", {
			get: function() {
				return this.data ? this.data.loaded: this._loaded
			},
			set: function(b) {
				this.data && (this.data.loaded = b);
				this._loaded = b
			},
			enumerable: !0,
			configurable: !0
		});
		d.toString = function() {
			return '[ResourceItem name="' + this.name + '" url="' + this.url + '" type="' + this.type + '"]'
		};
		e.TYPE_XML = "xml";
		e.TYPE_IMAGE = "image";
		e.TYPE_BIN = "bin";
		e.TYPE_TEXT = "text";
		e.TYPE_JSON = "json";
		e.TYPE_SHEET = "sheet";
		e.TYPE_FONT = "font";
		e.TYPE_SOUND = "sound";
		return e
	} ();
	e.ResourceItem = f;
	f.prototype.__class__ = "RES.ResourceItem"
})(RES || (RES = {})); (function(e) {
	var f = function() {
		function f() {
			this.keyMap = {};
			this.groupDic = {};
			e.configInstance = this
		}
		var d = f.prototype;
		d.getGroupByName = function(b) {
			var a = [];
			if (!this.groupDic[b]) return a;
			b = this.groupDic[b];
			for (var c = b.length,
			h = 0; h < c; h++) a.push(this.parseResourceItem(b[h]));
			return a
		};
		d.getRawGroupByName = function(b) {
			return this.groupDic[b] ? this.groupDic[b] : []
		};
		d.createGroup = function(b, a, c) {
			void 0 === c && (c = !1);
			if (!c && this.groupDic[b] || !a || 0 == a.length) return ! 1;
			c = this.groupDic;
			for (var h = [], d = a.length, e = 0; e < d; e++) {
				var f = a[e],
				g = c[f];
				if (g) for (var f = g.length,
				k = 0; k < f; k++) {
					var m = g[k]; - 1 == h.indexOf(m) && h.push(m)
				} else(m = this.keyMap[f]) ? -1 == h.indexOf(m) && h.push(m) : egret.Logger.warningWithErrorId(2E3, f)
			}
			if (0 == h.length) return ! 1;
			this.groupDic[b] = h;
			return ! 0
		};
		d.parseConfig = function(b, a) {
			if (b) {
				var c = b.resources;
				if (c) for (var h = c.length,
				d = 0; d < h; d++) {
					var e = c[d],
					f = e.url;
					f && -1 == f.indexOf("://") && (e.url = a + f);
					this.addItemToKeyMap(e)
				}
				if (c = b.groups) for (h = c.length, d = 0; d < h; d++) {
					for (var f = c[d], g = [], k = f.keys.split(","), m = k.length, l = 0; l < m; l++) e = k[l].trim(),
					(e = this.keyMap[e]) && -1 == g.indexOf(e) && g.push(e);
					this.groupDic[f.name] = g
				}
			}
		};
		d.addSubkey = function(b, a) {
			var c = this.keyMap[a];
			c && !this.keyMap[b] && (this.keyMap[b] = c)
		};
		d.addItemToKeyMap = function(b) {
			this.keyMap[b.name] || (this.keyMap[b.name] = b);
			if (b.hasOwnProperty("subkeys")) {
				var a = b.subkeys.split(",");
				b.subkeys = a;
				for (var c = a.length,
				h = 0; h < c; h++) {
					var d = a[h];
					null == this.keyMap[d] && (this.keyMap[d] = b)
				}
			}
		};
		d.getName = function(b) {
			return (b = this.keyMap[b]) ? b.name: ""
		};
		d.getType = function(b) {
			return (b = this.keyMap[b]) ? b.type: ""
		};
		d.getRawResourceItem = function(b) {
			return this.keyMap[b]
		};
		d.getResourceItem = function(b) {
			return (b = this.keyMap[b]) ? this.parseResourceItem(b) : null
		};
		d.parseResourceItem = function(b) {
			var a = new e.ResourceItem(b.name, b.url, b.type);
			a.data = b;
			return a
		};
		return f
	} ();
	e.ResourceConfig = f;
	f.prototype.__class__ = "RES.ResourceConfig"
})(RES || (RES = {})); (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this.thread = 2;
			this.loadingCount = 0;
			this.resInstance = this.callBack = null;
			this.groupTotalDic = {};
			this.numLoadedDic = {};
			this.itemListDic = {};
			this.groupErrorDic = {};
			this.retryTimesDic = {};
			this.maxRetryTimes = 3;
			this.failedList = [];
			this.priorityQueue = {};
			this.lazyLoadList = [];
			this.analyzerDic = {};
			this.queueIndex = 0
		}
		__extends(d, f);
		var b = d.prototype;
		b.isGroupInLoading = function(a) {
			return void 0 !== this.itemListDic[a]
		};
		b.loadGroup = function(a, c, b) {
			void 0 === b && (b = 0);
			if (!this.itemListDic[c] && c) if (a && 0 != a.length) {
				this.priorityQueue[b] ? this.priorityQueue[b].push(c) : this.priorityQueue[b] = [c];
				this.itemListDic[c] = a;
				b = a.length;
				for (var d = 0; d < b; d++) a[d].groupName = c;
				this.groupTotalDic[c] = a.length;
				this.numLoadedDic[c] = 0;
				this.next()
			} else egret.Logger.warningWithErrorId(2001, c),
			a = new e.ResourceEvent(e.ResourceEvent.GROUP_LOAD_ERROR),
			a.groupName = c,
			this.dispatchEvent(a)
		};
		b.loadItem = function(a) {
			this.lazyLoadList.push(a);
			a.groupName = "";
			this.next()
		};
		b.next = function() {
			for (; this.loadingCount < this.thread;) {
				var a = this.getOneResourceItem();
				if (!a) break;
				this.loadingCount++;
				if (a.loaded) this.onItemComplete(a);
				else {
					var c = this.analyzerDic[a.type];
					c || (c = this.analyzerDic[a.type] = egret.Injector.getInstance(e.AnalyzerBase, a.type));
					c.loadFile(a, this.onItemComplete, this)
				}
			}
		};
		b.getOneResourceItem = function() {
			if (0 < this.failedList.length) return this.failedList.shift();
			var a = Number.NEGATIVE_INFINITY,
			c;
			for (c in this.priorityQueue) a = Math.max(a, c);
			a = this.priorityQueue[a];
			if (!a || 0 == a.length) return 0 == this.lazyLoadList.length ? null: this.lazyLoadList.pop();
			c = a.length;
			for (var b, d = 0; d < c; d++) {
				this.queueIndex >= c && (this.queueIndex = 0);
				b = this.itemListDic[a[this.queueIndex]];
				if (0 < b.length) break;
				this.queueIndex++
			}
			return 0 == b.length ? null: b.shift()
		};
		b.onItemComplete = function(a) {
			this.loadingCount--;
			var c = a.groupName;
			if (!a.loaded) {
				var b = this.retryTimesDic[a.name] || 1;
				if (b > this.maxRetryTimes) delete this.retryTimesDic[a.name],
				e.ResourceEvent.dispatchResourceEvent(this.resInstance, e.ResourceEvent.ITEM_LOAD_ERROR, c, a);
				else {
					this.retryTimesDic[a.name] = b + 1;
					this.failedList.push(a);
					this.next();
					return
				}
			}
			if (c) {
				this.numLoadedDic[c]++;
				var b = this.numLoadedDic[c],
				d = this.groupTotalDic[c];
				a.loaded || (this.groupErrorDic[c] = !0);
				e.ResourceEvent.dispatchResourceEvent(this.resInstance, e.ResourceEvent.GROUP_PROGRESS, c, a, b, d);
				b == d && (a = this.groupErrorDic[c], this.removeGroupName(c), delete this.groupTotalDic[c], delete this.numLoadedDic[c], delete this.itemListDic[c], delete this.groupErrorDic[c], a ? e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.GROUP_LOAD_ERROR, c) : e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.GROUP_COMPLETE, c))
			} else this.callBack.call(this.resInstance, a);
			this.next()
		};
		b.removeGroupName = function(a) {
			for (var c in this.priorityQueue) {
				for (var b = this.priorityQueue[c], d = b.length, e = 0, f = !1, d = b.length, g = 0; g < d; g++) {
					if (b[g] == a) {
						b.splice(e, 1);
						f = !0;
						break
					}
					e++
				}
				if (f) {
					0 == b.length && delete this.priorityQueue[c];
					break
				}
			}
		};
		return d
	} (egret.EventDispatcher);
	e.ResourceLoader = f;
	f.prototype.__class__ = "RES.ResourceLoader"
})(RES || (RES = {})); (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this.resourceConfig = null;
			this.resourceConfig = e.configInstance
		}
		__extends(d, f);
		var b = d.prototype;
		b.addSubkey = function(a, c) {
			this.resourceConfig.addSubkey(a, c)
		};
		b.loadFile = function(a, c, b) {};
		b.getRes = function(a) {};
		b.destroyRes = function(a) {
			return ! 1
		};
		d.getStringPrefix = function(a) {
			if (!a) return "";
			var c = a.indexOf(".");
			return - 1 != c ? a.substring(0, c) : ""
		};
		d.getStringTail = function(a) {
			if (!a) return "";
			var c = a.indexOf(".");
			return - 1 != c ? a.substring(c + 1) : ""
		};
		return d
	} (egret.HashObject);
	e.AnalyzerBase = f;
	f.prototype.__class__ = "RES.AnalyzerBase"
})(RES || (RES = {})); (function(e) {
	var f = function(e) {
		function d() {
			e.call(this);
			this.fileDic = {};
			this.resItemDic = [];
			this._dataFormat = egret.URLLoaderDataFormat.BINARY;
			this.recycler = new egret.Recycler
		}
		__extends(d, e);
		var b = d.prototype;
		b.loadFile = function(a, c, b) {
			if (this.fileDic[a.name]) c.call(b, a);
			else {
				var d = this.getLoader();
				this.resItemDic[d.hashCode] = {
					item: a,
					func: c,
					thisObject: b
				};
				d.load(new egret.URLRequest(a.url))
			}
		};
		b.getLoader = function() {
			var a = this.recycler.pop();
			a || (a = new egret.URLLoader, a.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), a.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this));
			a.dataFormat = this._dataFormat;
			return a
		};
		b.onLoadFinish = function(a) {
			var c = a.target,
			b = this.resItemDic[c.hashCode];
			delete this.resItemDic[c.hashCode];
			var d = b.item,
			e = b.func;
			d.loaded = a.type == egret.Event.COMPLETE;
			d.loaded && this.analyzeData(d, c.data);
			this.recycler.push(c);
			e.call(b.thisObject, d)
		};
		b.analyzeData = function(a, c) {
			var b = a.name; ! this.fileDic[b] && c && (this.fileDic[b] = c)
		};
		b.getRes = function(a) {
			return this.fileDic[a]
		};
		b.hasRes = function(a) {
			return null != this.getRes(a)
		};
		b.destroyRes = function(a) {
			return this.fileDic[a] ? (this.onResourceDestroy(this.fileDic[a]), delete this.fileDic[a], !0) : !1
		};
		b.onResourceDestroy = function(a) {};
		return d
	} (e.AnalyzerBase);
	e.BinAnalyzer = f;
	f.prototype.__class__ = "RES.BinAnalyzer"
})(RES || (RES = {})); (function(e) {
	var f = function(e) {
		function d() {
			e.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXTURE
		}
		__extends(d, e);
		var b = d.prototype;
		b.analyzeData = function(a, c) {
			var b = a.name; ! this.fileDic[b] && c && (this.fileDic[b] = c, (b = a.data) && b.scale9grid && (b = b.scale9grid.split(","), c.scale9Grid = new egret.Rectangle(parseInt(b[0]), parseInt(b[1]), parseInt(b[2]), parseInt(b[3]))))
		};
		b.onResourceDestroy = function(a) {
			a.dispose()
		};
		return d
	} (e.BinAnalyzer);
	e.ImageAnalyzer = f;
	f.prototype.__class__ = "RES.ImageAnalyzer"
})(RES || (RES = {})); (function(e) {
	var f = function(e) {
		function d() {
			e.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(d, e);
		d.prototype.analyzeData = function(b, a) {
			var c = b.name;
			if (!this.fileDic[c] && a) try {
				this.fileDic[c] = JSON.parse(a)
			} catch(h) {
				egret.Logger.warningWithErrorId(1017, b.url, a)
			}
		};
		return d
	} (e.BinAnalyzer);
	e.JsonAnalyzer = f;
	f.prototype.__class__ = "RES.JsonAnalyzer"
})(RES || (RES = {})); (function(e) {
	var f = function(e) {
		function d() {
			e.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(d, e);
		return d
	} (e.BinAnalyzer);
	e.TextAnalyzer = f;
	f.prototype.__class__ = "RES.TextAnalyzer"
})(RES || (RES = {})); (function(e) {
	var f = function(f) {
		function d() {
			f.call(this);
			this.sheetMap = {};
			this.textureMap = {};
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(d, f);
		var b = d.prototype;
		b.getRes = function(a) {
			var c = this.fileDic[a];
			c || (c = this.textureMap[a]); ! c && (c = e.AnalyzerBase.getStringPrefix(a), c = this.fileDic[c]) && (a = e.AnalyzerBase.getStringTail(a), c = c.getTexture(a));
			return c
		};
		b.onLoadFinish = function(a) {
			var c = a.target,
			b = this.resItemDic[c.hashCode];
			delete this.resItemDic[c.hashCode];
			var d = b.item,
			e = b.func;
			d.loaded = a.type == egret.Event.COMPLETE;
			if (d.loaded) if ("string" == typeof c.data) {
				if (d.loaded = !1, a = this.analyzeConfig(d, c.data)) {
					c = d.url;
					d.url = a;
					this._dataFormat = egret.URLLoaderDataFormat.TEXTURE;
					this.loadFile(d, e, b.thisObject);
					this._dataFormat = egret.URLLoaderDataFormat.TEXT;
					d.url = c;
					return
				}
			} else this.analyzeBitmap(d, c.data);
			this.recycler.push(c);
			e.call(b.thisObject, d)
		};
		b.analyzeConfig = function(a, c) {
			var b = a.name,
			d, e = "";
			try {
				d = JSON.parse(c)
			} catch(f) {
				egret.Logger.warningWithErrorId(1017, a.url, c)
			}
			d && (this.sheetMap[b] = d, e = this.getRelativePath(a.url, d.file));
			return e
		};
		b.analyzeBitmap = function(a, c) {
			var b = a.name;
			if (!this.fileDic[b] && c) {
				var d = this.sheetMap[b];
				delete this.sheetMap[b];
				d = this.parseSpriteSheet(c, d, a.data && a.data.subkeys ? "": b);
				this.fileDic[b] = d
			}
		};
		b.getRelativePath = function(a, c) {
			a = a.split("\\").join("/");
			var b = a.lastIndexOf("/");
			return a = -1 != b ? a.substring(0, b + 1) + c: c
		};
		b.parseSpriteSheet = function(a, c, b) {
			c = c.frames;
			if (!c) return null;
			var d = new egret.SpriteSheet(a),
			e = this.textureMap,
			f;
			for (f in c) {
				var g = c[f];
				a = d.createTexture(f, g.x, g.y, g.w, g.h, g.offX, g.offY, g.sourceW, g.sourceH);
				g.scale9grid && (g = g.scale9grid.split(","), a.scale9Grid = new egret.Rectangle(parseInt(g[0]), parseInt(g[1]), parseInt(g[2]), parseInt(g[3])));
				null == e[f] && (e[f] = a, b && this.addSubkey(f, b))
			}
			return d
		};
		b.destroyRes = function(a) {
			var c = this.fileDic[a];
			if (c) {
				delete this.fileDic[a];
				for (var b in c._textureMap) this.textureMap[b] && delete this.textureMap[b];
				this.onResourceDestroy(c);
				return ! 0
			}
			return ! 1
		};
		b.onResourceDestroy = function(a) {
			a.dispose()
		};
		return d
	} (e.BinAnalyzer);
	e.SheetAnalyzer = f;
	f.prototype.__class__ = "RES.SheetAnalyzer"
})(RES || (RES = {})); (function(e) {
	var f = function(e) {
		function d() {
			e.call(this)
		}
		__extends(d, e);
		var b = d.prototype;
		b.analyzeConfig = function(a, c) {
			var b = a.name,
			d, e = "";
			try {
				d = JSON.parse(c)
			} catch(f) {}
			d ? e = this.getRelativePath(a.url, d.file) : (d = c, e = this.getTexturePath(a.url, d));
			this.sheetMap[b] = d;
			return e
		};
		b.analyzeBitmap = function(a, c) {
			var b = a.name;
			if (!this.fileDic[b] && c) {
				var d = this.sheetMap[b];
				delete this.sheetMap[b];
				d = new egret.BitmapFont(c, d);
				this.fileDic[b] = d
			}
		};
		b.getTexturePath = function(a, c) {
			var b = "",
			d = c.split("\n")[2],
			e = d.indexOf('file="'); - 1 != e && (d = d.substring(e + 6), e = d.indexOf('"'), b = d.substring(0, e));
			a = a.split("\\").join("/");
			e = a.lastIndexOf("/");
			return a = -1 != e ? a.substring(0, e + 1) + b: b
		};
		b.onResourceDestroy = function(a) {
			a.dispose()
		};
		return d
	} (e.SheetAnalyzer);
	e.FontAnalyzer = f;
	f.prototype.__class__ = "RES.FontAnalyzer"
})(RES || (RES = {})); (function(e) {
	var f = function(e) {
		function d() {
			e.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.SOUND
		}
		__extends(d, e);
		d.prototype.analyzeData = function(b, a) {
			var c = b.name; ! this.fileDic[c] && a && (this.fileDic[c] = a, (c = b.data) && c.soundType ? a.preload(c.soundType) : a.preload(egret.Sound.EFFECT))
		};
		return d
	} (e.BinAnalyzer);
	e.SoundAnalyzer = f;
	f.prototype.__class__ = "RES.SoundAnalyzer"
})(RES || (RES = {})); (function(e) {
	var f = function(e) {
		function d() {
			e.call(this);
			this._dataFormat = egret.URLLoaderDataFormat.TEXT
		}
		__extends(d, e);
		d.prototype.analyzeData = function(b, a) {
			var c = b.name;
			if (!this.fileDic[c] && a) try {
				var h = egret.XML.parse(a);
				this.fileDic[c] = h
			} catch(d) {}
		};
		return d
	} (e.BinAnalyzer);
	e.XMLAnalyzer = f;
	f.prototype.__class__ = "RES.XMLAnalyzer"
})(RES || (RES = {})); (function(e) {
	e.loadConfig = function(d, b, a) {
		void 0 === b && (b = "");
		void 0 === a && (a = "json");
		g.loadConfig(d, b, a)
	};
	e.loadGroup = function(d, b) {
		void 0 === b && (b = 0);
		g.loadGroup(d, b)
	};
	e.isGroupLoaded = function(d) {
		return g.isGroupLoaded(d)
	};
	e.getGroupByName = function(d) {
		return g.getGroupByName(d)
	};
	e.createGroup = function(d, b, a) {
		void 0 === a && (a = !1);
		return g.createGroup(d, b, a)
	};
	e.hasRes = function(d) {
		return g.hasRes(d)
	};
	e.parseConfig = function(d, b) {
		void 0 === b && (b = "");
		g.parseConfig(d, b)
	};
	e.getRes = function(d) {
		return g.getRes(d)
	};
	e.getResAsync = function(d, b, a) {
		g.getResAsync(d, b, a)
	};
	e.getResByUrl = function(d, b, a, c) {
		void 0 === c && (c = "");
		g.getResByUrl(d, b, a, c)
	};
	e.destroyRes = function(d, b) {
		return g.destroyRes(d, b)
	};
	e.setMaxLoadingThread = function(d) {
		g.setMaxLoadingThread(d)
	};
	e.setMaxRetryTimes = function(d) {
		g.setMaxRetryTimes(d)
	};
	e.addEventListener = function(d, b, a, c, h) {
		void 0 === c && (c = !1);
		void 0 === h && (h = 0);
		g.addEventListener(d, b, a, c, h)
	};
	e.removeEventListener = function(d, b, a, c) {
		void 0 === c && (c = !1);
		g.removeEventListener(d, b, a, c)
	};
	var f = function(d) {
		function b() {
			d.call(this);
			this.analyzerDic = {};
			this.configItemList = [];
			this.configComplete = this.callLaterFlag = !1;
			this.loadedGroups = [];
			this.groupNameList = [];
			this.asyncDic = {};
			this.init()
		}
		__extends(b, d);
		var a = b.prototype;
		a.getAnalyzerByType = function(c) {
			var a = this.analyzerDic[c];
			a || (a = this.analyzerDic[c] = egret.Injector.getInstance(e.AnalyzerBase, c));
			return a
		};
		a.init = function() {
			egret.Injector.hasMapRule(e.AnalyzerBase, e.ResourceItem.TYPE_BIN) || egret.Injector.mapClass(e.AnalyzerBase, e.BinAnalyzer, e.ResourceItem.TYPE_BIN);
			egret.Injector.hasMapRule(e.AnalyzerBase, e.ResourceItem.TYPE_IMAGE) || egret.Injector.mapClass(e.AnalyzerBase, e.ImageAnalyzer, e.ResourceItem.TYPE_IMAGE);
			egret.Injector.hasMapRule(e.AnalyzerBase, e.ResourceItem.TYPE_TEXT) || egret.Injector.mapClass(e.AnalyzerBase, e.TextAnalyzer, e.ResourceItem.TYPE_TEXT);
			egret.Injector.hasMapRule(e.AnalyzerBase, e.ResourceItem.TYPE_JSON) || egret.Injector.mapClass(e.AnalyzerBase, e.JsonAnalyzer, e.ResourceItem.TYPE_JSON);
			egret.Injector.hasMapRule(e.AnalyzerBase, e.ResourceItem.TYPE_SHEET) || egret.Injector.mapClass(e.AnalyzerBase, e.SheetAnalyzer, e.ResourceItem.TYPE_SHEET);
			egret.Injector.hasMapRule(e.AnalyzerBase, e.ResourceItem.TYPE_FONT) || egret.Injector.mapClass(e.AnalyzerBase, e.FontAnalyzer, e.ResourceItem.TYPE_FONT);
			egret.Injector.hasMapRule(e.AnalyzerBase, e.ResourceItem.TYPE_SOUND) || egret.Injector.mapClass(e.AnalyzerBase, e.SoundAnalyzer, e.ResourceItem.TYPE_SOUND);
			egret.Injector.hasMapRule(e.AnalyzerBase, e.ResourceItem.TYPE_XML) || egret.Injector.mapClass(e.AnalyzerBase, e.XMLAnalyzer, e.ResourceItem.TYPE_XML);
			this.resConfig = new e.ResourceConfig;
			this.resLoader = new e.ResourceLoader;
			this.resLoader.callBack = this.onResourceItemComp;
			this.resLoader.resInstance = this;
			this.resLoader.addEventListener(e.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this);
			this.resLoader.addEventListener(e.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupError, this)
		};
		a.loadConfig = function(c, a, b) {
			void 0 === b && (b = "json");
			this.configItemList.push({
				url: c,
				resourceRoot: a,
				type: b
			});
			this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
		};
		a.startLoadConfig = function() {
			this.callLaterFlag = !1;
			var c = this.configItemList;
			this.configItemList = [];
			this.loadingConfigList = c;
			for (var a = c.length,
			d = [], f = 0; f < a; f++) {
				var g = c[f],
				g = new e.ResourceItem(g.url, g.url, g.type);
				d.push(g)
			}
			this.resLoader.loadGroup(d, b.GROUP_CONFIG, Number.MAX_VALUE)
		};
		a.isGroupLoaded = function(c) {
			return - 1 != this.loadedGroups.indexOf(c)
		};
		a.getGroupByName = function(c) {
			return this.resConfig.getGroupByName(c)
		};
		a.loadGroup = function(c, a) {
			void 0 === a && (a = 0);
			if ( - 1 != this.loadedGroups.indexOf(c)) e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.GROUP_COMPLETE, c);
			else if (!this.resLoader.isGroupInLoading(c)) if (this.configComplete) {
				var b = this.resConfig.getGroupByName(c);
				this.resLoader.loadGroup(b, c, a)
			} else this.groupNameList.push({
				name: c,
				priority: a
			})
		};
		a.createGroup = function(c, a, b) {
			void 0 === b && (b = !1);
			if (b) {
				var d = this.loadedGroups.indexOf(c); - 1 != d && this.loadedGroups.splice(d, 1)
			}
			return this.resConfig.createGroup(c, a, b)
		};
		a.onGroupComp = function(c) {
			if (c.groupName == b.GROUP_CONFIG) {
				c = this.loadingConfigList.length;
				for (var a = 0; a < c; a++) {
					var d = this.loadingConfigList[a],
					f = this.getAnalyzerByType(d.type),
					g = f.getRes(d.url);
					f.destroyRes(d.url);
					this.resConfig.parseConfig(g, d.resourceRoot)
				}
				this.configComplete = !0;
				this.loadingConfigList = null;
				e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.CONFIG_COMPLETE);
				this.loadDelayGroups()
			} else this.loadedGroups.push(c.groupName),
			this.dispatchEvent(c)
		};
		a.loadDelayGroups = function() {
			var c = this.groupNameList;
			this.groupNameList = [];
			for (var a = c.length,
			b = 0; b < a; b++) {
				var d = c[b];
				this.loadGroup(d.name, d.priority)
			}
		};
		a.onGroupError = function(c) {
			c.groupName == b.GROUP_CONFIG ? (this.loadingConfigList = null, e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.CONFIG_LOAD_ERROR)) : this.dispatchEvent(c)
		};
		a.hasRes = function(c) {
			var a = this.resConfig.getType(c);
			return "" == a && (c = e.AnalyzerBase.getStringPrefix(c), a = this.resConfig.getType(c), "" == a) ? !1 : !0
		};
		a.parseConfig = function(c, a) {
			this.resConfig.parseConfig(c, a);
			this.configComplete || this.loadingConfigList || (this.configComplete = !0, this.loadDelayGroups())
		};
		a.getRes = function(c) {
			var a = this.resConfig.getType(c);
			return "" == a && (a = e.AnalyzerBase.getStringPrefix(c), a = this.resConfig.getType(a), "" == a) ? null: this.getAnalyzerByType(a).getRes(c)
		};
		a.getResAsync = function(c, a, b) {
			var d = this.resConfig.getType(c),
			f = this.resConfig.getName(c);
			if ("" == d && (f = e.AnalyzerBase.getStringPrefix(c), d = this.resConfig.getType(f), "" == d)) {
				a.call(b, null);
				return
			} (d = this.getAnalyzerByType(d).getRes(c)) ? a.call(b, d) : (c = {
				key: c,
				compFunc: a,
				thisObject: b
			},
			this.asyncDic[f] ? this.asyncDic[f].push(c) : (this.asyncDic[f] = [c], f = this.resConfig.getResourceItem(f), this.resLoader.loadItem(f)))
		};
		a.getResByUrl = function(c, a, b, d) {
			void 0 === d && (d = "");
			if (c) {
				d || (d = this.getTypeByUrl(c));
				var f = this.getAnalyzerByType(d).getRes(c);
				f ? a.call(b, f) : (a = {
					key: c,
					compFunc: a,
					thisObject: b
				},
				this.asyncDic[c] ? this.asyncDic[c].push(a) : (this.asyncDic[c] = [a], c = new e.ResourceItem(c, c, d), this.resLoader.loadItem(c)))
			} else a.call(b, null)
		};
		a.getTypeByUrl = function(c) { (c = c.substr(c.lastIndexOf(".") + 1)) && (c = c.toLowerCase());
			switch (c) {
			case e.ResourceItem.TYPE_XML:
			case e.ResourceItem.TYPE_JSON:
			case e.ResourceItem.TYPE_SHEET:
				break;
			case "png":
			case "jpg":
			case "gif":
			case "jpeg":
			case "bmp":
				c = e.ResourceItem.TYPE_IMAGE;
				break;
			case "fnt":
				c = e.ResourceItem.TYPE_FONT;
				break;
			case "txt":
				c = e.ResourceItem.TYPE_TEXT;
				break;
			case "mp3":
			case "ogg":
			case "mpeg":
			case "wav":
			case "m4a":
			case "mp4":
			case "aiff":
			case "wma":
			case "mid":
				c = e.ResourceItem.TYPE_SOUND;
				break;
			default:
				c = e.ResourceItem.TYPE_BIN
			}
			return c
		};
		a.onResourceItemComp = function(c) {
			var a = this.asyncDic[c.name];
			delete this.asyncDic[c.name];
			c = this.getAnalyzerByType(c.type);
			for (var b = a.length,
			d = 0; d < b; d++) {
				var e = a[d],
				f = c.getRes(e.key);
				e.compFunc.call(e.thisObject, f, e.key)
			}
		};
		a.destroyRes = function(c, a) {
			void 0 === a && (a = !0);
			var b = this.resConfig.getRawGroupByName(c);
			if (b && 0 < b.length) {
				var d = this.loadedGroups.indexOf(c); - 1 != d && this.loadedGroups.splice(d, 1);
				for (var e = b.length,
				f = 0; f < e; f++) if (d = b[f], a || !this.isResInLoadedGroup(d.name)) {
					d.loaded = !1;
					var g = this.getAnalyzerByType(d.type);
					g.destroyRes(d.name);
					this.removeLoadedGroupsByItemName(d.name)
				}
				return ! 0
			}
			b = this.resConfig.getType(c);
			if ("" == b) return ! 1;
			d = this.resConfig.getRawResourceItem(c);
			d.loaded = !1;
			g = this.getAnalyzerByType(b);
			b = g.destroyRes(c);
			this.removeLoadedGroupsByItemName(d.name);
			return b
		};
		a.removeLoadedGroupsByItemName = function(c) {
			for (var a = this.loadedGroups,
			b = a.length,
			d = 0; d < b; d++) for (var e = this.resConfig.getRawGroupByName(a[d]), f = e.length, g = 0; g < f; g++) if (e[g].name == c) {
				a.splice(d, 1);
				d--;
				b = a.length;
				break
			}
		};
		a.isResInLoadedGroup = function(c) {
			for (var a = this.loadedGroups,
			b = a.length,
			d = 0; d < b; d++) for (var e = this.resConfig.getRawGroupByName(a[d]), f = e.length, g = 0; g < f; g++) if (e[g].name == c) return ! 0;
			return ! 1
		};
		a.setMaxLoadingThread = function(c) {
			1 > c && (c = 1);
			this.resLoader.thread = c
		};
		a.setMaxRetryTimes = function(c) {
			c = Math.max(c, 0);
			this.resLoader.maxRetryTimes = c
		};
		b.GROUP_CONFIG = "RES__CONFIG";
		return b
	} (egret.EventDispatcher);
	f.prototype.__class__ = "RES.Resource";
	var g = new f
})(RES || (RES = {})); (function(e) { (function(f) {
		var g = function(d) {
			function b(c) {
				void 0 === c && (c = null);
				d.call(this);
				this._source = c ? c: []
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "source", {
				get: function() {
					return this._source
				},
				set: function(c) {
					c || (c = []);
					this._source = c;
					this.dispatchCoEvent(f.CollectionEventKind.RESET)
				},
				enumerable: !0,
				configurable: !0
			});
			a.refresh = function() {
				this.dispatchCoEvent(f.CollectionEventKind.REFRESH)
			};
			a.contains = function(c) {
				return - 1 != this.getItemIndex(c)
			};
			a.checkIndex = function(c) {
				if (0 > c || c >= this._source.length) throw new RangeError(e.getString(3002, c));
			};
			Object.defineProperty(a, "length", {
				get: function() {
					return this._source.length
				},
				enumerable: !0,
				configurable: !0
			});
			a.addItem = function(c) {
				this._source.push(c);
				this.dispatchCoEvent(f.CollectionEventKind.ADD, this._source.length - 1, -1, [c])
			};
			a.addItemAt = function(c, a) {
				if (0 > a || a > this._source.length) throw new RangeError(e.getString(3002, a));
				this._source.splice(a, 0, c);
				this.dispatchCoEvent(f.CollectionEventKind.ADD, a, -1, [c])
			};
			a.getItemAt = function(c) {
				return this._source[c]
			};
			a.getItemIndex = function(c) {
				for (var a = this._source.length,
				b = 0; b < a; b++) if (this._source[b] === c) return b;
				return - 1
			};
			a.itemUpdated = function(c) {
				var a = this.getItemIndex(c); - 1 != a && this.dispatchCoEvent(f.CollectionEventKind.UPDATE, a, -1, [c])
			};
			a.removeAll = function() {
				var c = this._source.concat();
				this._source.length = 0;
				this.dispatchCoEvent(f.CollectionEventKind.REMOVE, 0, -1, c)
			};
			a.removeItemAt = function(c) {
				this.checkIndex(c);
				var a = this._source.splice(c, 1)[0];
				this.dispatchCoEvent(f.CollectionEventKind.REMOVE, c, -1, [a]);
				return a
			};
			a.replaceItemAt = function(c, a) {
				this.checkIndex(a);
				var b = this._source.splice(a, 1, c)[0];
				this.dispatchCoEvent(f.CollectionEventKind.REPLACE, a, -1, [c], [b]);
				return b
			};
			a.replaceAll = function(c) {
				c || (c = []);
				for (var a = c.length,
				b = this._source.length,
				d = a; d < b; d++) this.removeItemAt(a);
				for (d = 0; d < a; d++) d >= b ? this.addItemAt(c[d], d) : this.replaceItemAt(c[d], d);
				this._source = c
			};
			a.moveItemAt = function(c, a) {
				this.checkIndex(c);
				this.checkIndex(a);
				var b = this._source.splice(c, 1)[0];
				this._source.splice(a, 0, b);
				this.dispatchCoEvent(f.CollectionEventKind.MOVE, a, c, [b]);
				return b
			};
			a.dispatchCoEvent = function(c, a, b, d, e) {
				void 0 === c && (c = null);
				void 0 === a && (a = -1);
				void 0 === b && (b = -1);
				void 0 === d && (d = null);
				void 0 === e && (e = null);
				f.CollectionEvent.dispatchCollectionEvent(this, f.CollectionEvent.COLLECTION_CHANGE, c, a, b, d, e)
			};
			return b
		} (e.EventDispatcher);
		f.ArrayCollection = g;
		g.prototype.__class__ = "egret.gui.ArrayCollection"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this.targetLevel = Number.MAX_VALUE;
				this.updateCompleteQueue = new f.DepthQueue;
				this.invalidateClientPropertiesFlag = this.invalidatePropertiesFlag = !1;
				this.invalidatePropertiesQueue = new f.DepthQueue;
				this.invalidateClientSizeFlag = this.invalidateSizeFlag = !1;
				this.invalidateSizeQueue = new f.DepthQueue;
				this.invalidateDisplayListFlag = !1;
				this.invalidateDisplayListQueue = new f.DepthQueue;
				this.listenersAttached = !1
			}
			__extends(b, d);
			var a = b.prototype;
			a.invalidateProperties = function(c) {
				this.invalidatePropertiesFlag || (this.invalidatePropertiesFlag = !0, this.listenersAttached || this.attachListeners());
				this.targetLevel <= c.nestLevel && (this.invalidateClientPropertiesFlag = !0);
				this.invalidatePropertiesQueue.insert(c)
			};
			a.validateProperties = function() {
				for (var c = this.invalidatePropertiesQueue.shift(); c;) c.parent && (c.validateProperties(), c.updateCompletePendingFlag || (this.updateCompleteQueue.insert(c), c.updateCompletePendingFlag = !0)),
				c = this.invalidatePropertiesQueue.shift();
				this.invalidatePropertiesQueue.isEmpty() && (this.invalidatePropertiesFlag = !1)
			};
			a.invalidateSize = function(c) {
				this.invalidateSizeFlag || (this.invalidateSizeFlag = !0, this.listenersAttached || this.attachListeners());
				this.targetLevel <= c.nestLevel && (this.invalidateClientSizeFlag = !0);
				this.invalidateSizeQueue.insert(c)
			};
			a.validateSize = function() {
				for (var c = this.invalidateSizeQueue.pop(); c;) c.parent && (c.validateSize(), c.updateCompletePendingFlag || (this.updateCompleteQueue.insert(c), c.updateCompletePendingFlag = !0)),
				c = this.invalidateSizeQueue.pop();
				this.invalidateSizeQueue.isEmpty() && (this.invalidateSizeFlag = !1)
			};
			a.invalidateDisplayList = function(c) {
				this.invalidateDisplayListFlag || (this.invalidateDisplayListFlag = !0, this.listenersAttached || this.attachListeners());
				this.invalidateDisplayListQueue.insert(c)
			};
			a.validateDisplayList = function() {
				for (var c = this.invalidateDisplayListQueue.shift(); c;) c.parent && (c.validateDisplayList(), c.updateCompletePendingFlag || (this.updateCompleteQueue.insert(c), c.updateCompletePendingFlag = !0)),
				c = this.invalidateDisplayListQueue.shift();
				this.invalidateDisplayListQueue.isEmpty() && (this.invalidateDisplayListFlag = !1)
			};
			a.attachListeners = function() {
				f.UIGlobals.stage.addEventListener(e.Event.ENTER_FRAME, this.doPhasedInstantiationCallBack, this);
				f.UIGlobals.stage.addEventListener(e.Event.RENDER, this.doPhasedInstantiationCallBack, this);
				f.UIGlobals.stage.invalidate();
				this.listenersAttached = !0
			};
			a.doPhasedInstantiationCallBack = function(c) {
				f.UIGlobals.stage.removeEventListener(e.Event.ENTER_FRAME, this.doPhasedInstantiationCallBack, this);
				f.UIGlobals.stage.removeEventListener(e.Event.RENDER, this.doPhasedInstantiationCallBack, this);
				this.doPhasedInstantiation()
			};
			a.doPhasedInstantiation = function() {
				this.invalidatePropertiesFlag && this.validateProperties();
				this.invalidateSizeFlag && this.validateSize();
				this.invalidateDisplayListFlag && this.validateDisplayList();
				if (this.invalidatePropertiesFlag || this.invalidateSizeFlag || this.invalidateDisplayListFlag) this.attachListeners();
				else {
					this.listenersAttached = !1;
					for (var c = this.updateCompleteQueue.pop(); c;) c.initialized || (c.initialized = !0),
					c.hasEventListener(f.UIEvent.UPDATE_COMPLETE) && f.UIEvent.dispatchUIEvent(c, f.UIEvent.UPDATE_COMPLETE),
					c.updateCompletePendingFlag = !1,
					c = this.updateCompleteQueue.pop();
					f.UIEvent.dispatchUIEvent(this, f.UIEvent.UPDATE_COMPLETE)
				}
			};
			a.validateNow = function() {
				for (var c = 0; this.listenersAttached && 100 > c++;) this.doPhasedInstantiationCallBack()
			};
			a.validateClient = function(c, a) {
				void 0 === a && (a = !1);
				var b, d = !1,
				e = this.targetLevel;
				this.targetLevel == Number.MAX_VALUE && (this.targetLevel = c.nestLevel);
				for (; ! d;) {
					d = !0;
					for (b = this.invalidatePropertiesQueue.removeSmallestChild(c); b;) b.parent && (b.validateProperties(), b.updateCompletePendingFlag || (this.updateCompleteQueue.insert(b), b.updateCompletePendingFlag = !0)),
					b = this.invalidatePropertiesQueue.removeSmallestChild(c);
					this.invalidatePropertiesQueue.isEmpty() && (this.invalidatePropertiesFlag = !1);
					this.invalidateClientPropertiesFlag = !1;
					for (b = this.invalidateSizeQueue.removeLargestChild(c); b;) {
						b.parent && (b.validateSize(), b.updateCompletePendingFlag || (this.updateCompleteQueue.insert(b), b.updateCompletePendingFlag = !0));
						if (this.invalidateClientPropertiesFlag && (b = this.invalidatePropertiesQueue.removeSmallestChild(c))) {
							this.invalidatePropertiesQueue.insert(b);
							d = !1;
							break
						}
						b = this.invalidateSizeQueue.removeLargestChild(c)
					}
					this.invalidateSizeQueue.isEmpty() && (this.invalidateSizeFlag = !1);
					this.invalidateClientSizeFlag = this.invalidateClientPropertiesFlag = !1;
					if (!a) {
						for (b = this.invalidateDisplayListQueue.removeSmallestChild(c); b;) {
							b.parent && (b.validateDisplayList(), b.updateCompletePendingFlag || (this.updateCompleteQueue.insert(b), b.updateCompletePendingFlag = !0));
							if (this.invalidateClientPropertiesFlag && (b = this.invalidatePropertiesQueue.removeSmallestChild(c))) {
								this.invalidatePropertiesQueue.insert(b);
								d = !1;
								break
							}
							if (this.invalidateClientSizeFlag && (b = this.invalidateSizeQueue.removeLargestChild(c))) {
								this.invalidateSizeQueue.insert(b);
								d = !1;
								break
							}
							b = this.invalidateDisplayListQueue.removeSmallestChild(c)
						}
						this.invalidateDisplayListQueue.isEmpty() && (this.invalidateDisplayListFlag = !1)
					}
				}
				if (e == Number.MAX_VALUE && (this.targetLevel = Number.MAX_VALUE, !a)) for (b = this.updateCompleteQueue.removeLargestChild(c); b;) b.initialized || (b.initialized = !0),
				b.hasEventListener(f.UIEvent.UPDATE_COMPLETE) && f.UIEvent.dispatchUIEvent(b, f.UIEvent.UPDATE_COMPLETE),
				b.updateCompletePendingFlag = !1,
				b = this.updateCompleteQueue.removeLargestChild(c)
			};
			return b
		} (e.EventDispatcher);
		f.LayoutManager = g;
		g.prototype.__class__ = "egret.gui.LayoutManager"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function() {
			function b() {
				this.depthBins = [];
				this.minDepth = 0;
				this.maxDepth = -1
			}
			var a = b.prototype;
			a.insert = function(c) {
				var a = c.nestLevel,
				b = c.hashCode;
				this.maxDepth < this.minDepth ? this.minDepth = this.maxDepth = a: (a < this.minDepth && (this.minDepth = a), a > this.maxDepth && (this.maxDepth = a));
				var e = this.depthBins[a];
				e ? null == e.items[b] && (e.items[b] = c, e.length++) : (e = new d, this.depthBins[a] = e, e.items[b] = c, e.length++)
			};
			a.pop = function() {
				var c = null;
				if (this.minDepth <= this.maxDepth) {
					for (var a = this.depthBins[this.maxDepth]; ! a || 0 == a.length;) {
						this.maxDepth--;
						if (this.maxDepth < this.minDepth) return null;
						a = this.depthBins[this.maxDepth]
					}
					var b = a.items,
					d;
					for (d in b) {
						c = b[d];
						this.remove(c, this.maxDepth);
						break
					}
					for (; ! a || 0 == a.length;) {
						this.maxDepth--;
						if (this.maxDepth < this.minDepth) break;
						a = this.depthBins[this.maxDepth]
					}
				}
				return c
			};
			a.shift = function() {
				var c = null;
				if (this.minDepth <= this.maxDepth) {
					for (var a = this.depthBins[this.minDepth]; ! a || 0 == a.length;) {
						this.minDepth++;
						if (this.minDepth > this.maxDepth) return null;
						a = this.depthBins[this.minDepth]
					}
					var b = a.items,
					d;
					for (d in b) {
						c = b[d];
						this.remove(c, this.minDepth);
						break
					}
					for (; ! a || 0 == a.length;) {
						this.minDepth++;
						if (this.minDepth > this.maxDepth) break;
						a = this.depthBins[this.minDepth]
					}
				}
				return c
			};
			a.removeLargestChild = function(c) {
				for (var a = this.maxDepth,
				b = c.nestLevel,
				d = c.hashCode; b <= a;) {
					var f = this.depthBins[a];
					if (f && 0 < f.length) {
						if (a == c.nestLevel) {
							if (f.items[d]) return this.remove(c, a),
							c
						} else {
							var f = f.items,
							g;
							for (g in f) {
								var k = f[g];
								if (k instanceof e.DisplayObject && c instanceof e.DisplayObjectContainer && c.contains(k)) return this.remove(k, a),
								k
							}
						}
						a--
					} else if (a == this.maxDepth && this.maxDepth--, a--, a < b) break
				}
				return null
			};
			a.removeSmallestChild = function(c) {
				for (var a = c.nestLevel,
				b = c.hashCode; a <= this.maxDepth;) {
					var d = this.depthBins[a];
					if (d && 0 < d.length) {
						if (a == c.nestLevel) {
							if (d.items[b]) return this.remove(c, a),
							c
						} else {
							var d = d.items,
							f;
							for (f in d) {
								var g = d[f];
								if (g instanceof e.DisplayObject && c instanceof e.DisplayObjectContainer && c.contains(g)) return this.remove(g, a),
								g
							}
						}
						a++
					} else if (a == this.minDepth && this.minDepth++, a++, a > this.maxDepth) break
				}
				return null
			};
			a.remove = function(c, a) {
				void 0 === a && (a = -1);
				var b = c.hashCode,
				d = this.depthBins[0 <= a ? a: c.nestLevel];
				return d && null != d.items[b] ? (delete d.items[b], d.length--, c) : null
			};
			a.removeAll = function() {
				this.minDepth = this.depthBins.length = 0;
				this.maxDepth = -1
			};
			a.isEmpty = function() {
				return this.minDepth > this.maxDepth
			};
			return b
		} ();
		f.DepthQueue = g;
		g.prototype.__class__ = "egret.gui.DepthQueue";
		var d = function() {
			return function() {
				this.length = 0;
				this.items = []
			}
		} ();
		f.DepthBin = d;
		d.prototype.__class__ = "egret.gui.DepthBin"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			function d() {}
			Object.defineProperty(d, "stage", {
				get: function() {
					return d._stage
				},
				enumerable: !0,
				configurable: !0
			});
			d._initlize = function(b) {
				d.initlized || (d._stage = b, d._layoutManager = new e.LayoutManager, d.initlized = !0)
			};
			Object.defineProperty(d, "uiStage", {
				get: function() {
					return d._uiStage
				},
				enumerable: !0,
				configurable: !0
			});
			d.initlized = !1;
			return d
		} ();
		e.UIGlobals = g;
		g.prototype.__class__ = "egret.gui.UIGlobals"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			return function() {
				this._id = null;
				this._isPopUp = !1;
				this._owner = null;
				this._initialized = this._updateCompletePendingFlag = !1;
				this._nestLevel = 0;
				this._enabled = !0;
				this._minWidth = this._height = this._width = 0;
				this._maxWidth = 1E4;
				this._minHeight = 0;
				this._maxHeight = 1E4;
				this._measuredHeight = this._measuredWidth = 0;
				this._percentHeight = this._percentWidth = this._verticalCenter = this._horizontalCenter = this._bottom = this._top = this._right = this._left = NaN;
				this._includeInLayout = !0;
				this._oldY = this._oldX = this._oldHeight = this._oldWidth = NaN;
				this._invalidateSizeFlag = this._invalidatePropertiesFlag = !1;
				this._oldPreferHeight = this._oldPreferWidth = NaN;
				this._hasOwnStyleChain = this._initializeCalled = this._validateNowFlag = this._invalidateDisplayListFlag = !1;
				this._styleProtoChain = null;
				this._layoutHeightExplicitlySet = this._layoutWidthExplicitlySet = this._hasNoStyleChild = !1
			}
		} ();
		e.UIComponentProperties = g;
		g.prototype.__class__ = "egret.gui.UIComponentProperties"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._UIC_Props_ = new e.gui.UIComponentProperties;
				this.touchEnabled = !0;
				this.addEventListener(e.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
				this.addEventListener(e.Event.ADDED_TO_STAGE, this.checkInvalidateFlag, this);
				void 0 === b.prototypeCanSet && (b.prototypeCanSet = void 0 !== {}.__proto__)
			}
			__extends(b, d);
			var a = b.prototype;
			a.onAddedToStage = function(c) {
				this.removeEventListener(e.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
				this._initialize();
				f.UIGlobals._initlize(this.stage);
				0 < this._UIC_Props_._nestLevel && this.checkInvalidateFlag()
			};
			Object.defineProperty(a, "id", {
				get: function() {
					return this._UIC_Props_._id
				},
				set: function(c) {
					this._UIC_Props_._id = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "isPopUp", {
				get: function() {
					return this._UIC_Props_._isPopUp
				},
				set: function(c) {
					this._UIC_Props_._isPopUp = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "owner", {
				get: function() {
					return this._UIC_Props_._owner ? this._UIC_Props_._owner: this.parent
				},
				enumerable: !0,
				configurable: !0
			});
			a.ownerChanged = function(c) {
				this._UIC_Props_._owner = c
			};
			Object.defineProperty(a, "updateCompletePendingFlag", {
				get: function() {
					return this._UIC_Props_._updateCompletePendingFlag
				},
				set: function(c) {
					this._UIC_Props_._updateCompletePendingFlag = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "initialized", {
				get: function() {
					return this._UIC_Props_._initialized
				},
				set: function(c) {
					this._UIC_Props_._initialized != c && (this._UIC_Props_._initialized = c) && (this.childrenCreated(), f.UIEvent.dispatchUIEvent(this, f.UIEvent.CREATION_COMPLETE))
				},
				enumerable: !0,
				configurable: !0
			});
			a._initialize = function() {
				this._UIC_Props_._initializeCalled || (f.UIGlobals.stage && this.removeEventListener(e.Event.ADDED_TO_STAGE, this.onAddedToStage, this), this._UIC_Props_._initializeCalled = !0, f.UIEvent.dispatchUIEvent(this, f.UIEvent.INITIALIZE), this.createChildren(), this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
			};
			a.createChildren = function() {};
			a.childrenCreated = function() {};
			Object.defineProperty(a, "nestLevel", {
				get: function() {
					return this._UIC_Props_._nestLevel
				},
				set: function(c) {
					this._UIC_Props_._nestLevel != c && (this._UIC_Props_._nestLevel = c, 0 == this._UIC_Props_._nestLevel ? this.addEventListener(e.Event.ADDED_TO_STAGE, this.checkInvalidateFlag, this) : this.removeEventListener(e.Event.ADDED_TO_STAGE, this.checkInvalidateFlag, this), this._updateChildrenNestLevel())
				},
				enumerable: !0,
				configurable: !0
			});
			a._updateChildrenNestLevel = function() {
				for (var c = this.numChildren - 1; 0 <= c; c--) {
					var a = this.getChildAt(c);
					a && "nestLevel" in a && (a.nestLevel = this._UIC_Props_._nestLevel + 1)
				}
			};
			a.getStyle = function(c) {
				var a = this._UIC_Props_._styleProtoChain;
				return a ? a[c] : void 0
			};
			a.setStyle = function(c, a) {
				var b = this._UIC_Props_._styleProtoChain;
				this._UIC_Props_._hasOwnStyleChain || (b = this._createOwnStyleProtoChain(b));
				b[c] = a;
				this.styleChanged(c);
				this.notifyStyleChangeInChildren(c)
			};
			a.styleChanged = function(c) {};
			a.notifyStyleChangeInChildren = function(c) {
				if (!this._UIC_Props_._hasNoStyleChild) for (var a = this.numChildren - 1; 0 <= a; a--) {
					var b = this.getChildAt(a);
					b && "styleChanged" in b && (b.styleChanged(c), b.notifyStyleChangeInChildren(c))
				}
			};
			a._createOwnStyleProtoChain = function(c) {
				this._UIC_Props_._hasOwnStyleChain = !0;
				b.prototypeCanSet ? (this._UIC_Props_._styleProtoChain = {},
				this._UIC_Props_._styleProtoChain.__proto__ = c ? c: b.emptyStyleChain) : this._UIC_Props_._styleProtoChain = this.createProtoChain(c);
				c = this._UIC_Props_._styleProtoChain;
				if (!this._UIC_Props_._hasNoStyleChild) for (var a = this.numChildren - 1; 0 <= a; a--) {
					var d = this.getChildAt(a);
					d && "regenerateStyleCache" in d && d.regenerateStyleCache(c)
				}
				return c
			};
			a.createProtoChain = function(c) {
				function a() {}
				a.prototype = c;
				c = new a;
				a.prototype = null;
				return c
			};
			a.clearStyle = function(c) {
				this._UIC_Props_._hasOwnStyleChain && (delete this._UIC_Props_._styleProtoChain[c], this.styleChanged(c), this.notifyStyleChangeInChildren(c))
			};
			a.regenerateStyleCache = function(c) {
				if (!b.prototypeCanSet) this.regenerateStyleCacheForIE(c);
				else if (this._UIC_Props_._hasOwnStyleChain) this._UIC_Props_._styleProtoChain.__proto__ = c ? c: b.emptyStyleChain;
				else if (this._UIC_Props_._styleProtoChain != c) {
					this._UIC_Props_._styleProtoChain = c;
					for (var a = this.numChildren - 1; 0 <= a; a--) {
						var d = this.getChildAt(a);
						d && "regenerateStyleCache" in d && d.regenerateStyleCache(c)
					}
				}
			};
			a.regenerateStyleCacheForIE = function(c) {
				if (this._UIC_Props_._hasOwnStyleChain) {
					var a = this._UIC_Props_._styleProtoChain;
					c = this.createProtoChain(c);
					for (var b in a) a.hasOwnProperty(b) && (c[b] = a[b])
				}
				this._UIC_Props_._styleProtoChain = c;
				if (!this._UIC_Props_._hasNoStyleChild) for (a = this.numChildren - 1; 0 <= a; a--)(b = this.getChildAt(a)) && "regenerateStyleCacheForIE" in b && b.regenerateStyleCacheForIE(c)
			};
			a._addToDisplayList = function(c, a) {
				void 0 === a && (a = !0);
				var b = this.numChildren;
				c.parent == this && b--;
				this._addingChild(c);
				this._doAddChild(c, b, a);
				this._childAdded(c);
				return c
			};
			a._addToDisplayListAt = function(c, a, b) {
				void 0 === b && (b = !0);
				this._addingChild(c);
				this._doAddChild(c, a, b);
				this._childAdded(c);
				return c
			};
			a._removeFromDisplayList = function(c, a) {
				void 0 === a && (a = !0);
				var b = this._children.indexOf(c);
				if (0 <= b) return this._doRemoveChild(b, a),
				this._childRemoved(c),
				c;
				e.Logger.fatalWithErrorId(1008);
				return null
			};
			a._removeFromDisplayListAt = function(c, a) {
				void 0 === a && (a = !0);
				if (0 <= c && c < this._children.length) {
					var b = this._doRemoveChild(c, a);
					this._childRemoved(b);
					return b
				}
				e.Logger.fatalWithErrorId(1007);
				return null
			};
			a.addChild = function(c) {
				this._addingChild(c);
				d.prototype.addChild.call(this, c);
				this._childAdded(c);
				return c
			};
			a.addChildAt = function(c, a) {
				this._addingChild(c);
				d.prototype.addChildAt.call(this, c, a);
				this._childAdded(c);
				return c
			};
			a._addingChild = function(c) {
				if (c && ("nestLevel" in c && (c.nestLevel = this._UIC_Props_._nestLevel + 1), "styleChanged" in c)) {
					var a = this._UIC_Props_._styleProtoChain;
					if (a || c._UIC_Props_ && c._UIC_Props_._styleProtoChain) c.regenerateStyleCache(a),
					c.styleChanged(null),
					c.notifyStyleChangeInChildren(null)
				}
			};
			a._childAdded = function(c) {
				c instanceof b && (c._initialize(), c.checkInvalidateFlag())
			};
			a.removeChild = function(c) {
				d.prototype.removeChild.call(this, c);
				this._childRemoved(c);
				return c
			};
			a.removeChildAt = function(c) {
				c = d.prototype.removeChildAt.call(this, c);
				this._childRemoved(c);
				return c
			};
			a._childRemoved = function(c) {
				c && "nestLevel" in c && (c.nestLevel = 0)
			};
			a.checkInvalidateFlag = function(c) {
				f.UIGlobals._layoutManager && (this._UIC_Props_._invalidatePropertiesFlag && f.UIGlobals._layoutManager.invalidateProperties(this), this._UIC_Props_._invalidateSizeFlag && f.UIGlobals._layoutManager.invalidateSize(this), this._UIC_Props_._invalidateDisplayListFlag && f.UIGlobals._layoutManager.invalidateDisplayList(this), this._UIC_Props_._validateNowFlag && (f.UIGlobals._layoutManager.validateClient(this), this._UIC_Props_._validateNowFlag = !1))
			};
			Object.defineProperty(a, "enabled", {
				get: function() {
					return this._UIC_Props_._enabled
				},
				set: function(c) {
					this._UIC_Props_._enabled = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "width", {
				get: function() {
					return this._UIC_Props_._width
				},
				set: function(c) {
					this._setWidth(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setWidth = function(c) {
				if (this._UIC_Props_._width != c || this._DO_Props_._explicitWidth != c) d.prototype._setWidth.call(this, c),
				isNaN(c) ? this.invalidateSize() : this._UIC_Props_._width = c,
				this.invalidateProperties(),
				this.invalidateDisplayList(),
				this.invalidateParentSizeAndDisplayList()
			};
			Object.defineProperty(a, "height", {
				get: function() {
					return this._UIC_Props_._height
				},
				set: function(c) {
					this._setHeight(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setHeight = function(c) {
				if (this._UIC_Props_._height != c || this._DO_Props_._explicitHeight != c) d.prototype._setHeight.call(this, c),
				isNaN(c) ? this.invalidateSize() : this._UIC_Props_._height = c,
				this.invalidateProperties(),
				this.invalidateDisplayList(),
				this.invalidateParentSizeAndDisplayList()
			};
			Object.defineProperty(a, "scaleX", {
				get: function() {
					return this._DO_Props_._scaleX
				},
				set: function(c) {
					this._setScaleX(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setScaleX = function(c) {
				this._DO_Props_._scaleX != c && (this._DO_Props_._scaleX = c, this.invalidateParentSizeAndDisplayList())
			};
			Object.defineProperty(a, "scaleY", {
				get: function() {
					return this._DO_Props_._scaleY
				},
				set: function(c) {
					this._setScaleY(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setScaleY = function(c) {
				this._DO_Props_._scaleY != c && (this._DO_Props_._scaleY = c, this.invalidateParentSizeAndDisplayList())
			};
			Object.defineProperty(a, "minWidth", {
				get: function() {
					return this._UIC_Props_._minWidth
				},
				set: function(c) {
					this._UIC_Props_._minWidth != c && (this._UIC_Props_._minWidth = c, this.invalidateSize())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "maxWidth", {
				get: function() {
					return this._UIC_Props_._maxWidth
				},
				set: function(c) {
					this._UIC_Props_._maxWidth != c && (this._UIC_Props_._maxWidth = c, this.invalidateSize())
				},
				enumerable: !0,
				configurable: !0
			});
			a._getMaxWidth = function() {
				return this._UIC_Props_._maxWidth
			};
			Object.defineProperty(a, "minHeight", {
				get: function() {
					return this._UIC_Props_._minHeight
				},
				set: function(c) {
					this._UIC_Props_._minHeight != c && (this._UIC_Props_._minHeight = c, this.invalidateSize())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "maxHeight", {
				get: function() {
					return this._UIC_Props_._maxHeight
				},
				set: function(c) {
					this._UIC_Props_._maxHeight != c && (this._UIC_Props_._maxHeight = c, this.invalidateSize())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "measuredWidth", {
				get: function() {
					return this._UIC_Props_._measuredWidth
				},
				set: function(c) {
					this._UIC_Props_._measuredWidth = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "measuredHeight", {
				get: function() {
					return this._UIC_Props_._measuredHeight
				},
				set: function(c) {
					this._UIC_Props_._measuredHeight = c
				},
				enumerable: !0,
				configurable: !0
			});
			a.setActualSize = function(c, a) {
				var b = !1;
				this._UIC_Props_._width != c && (this._UIC_Props_._width = c, b = !0);
				this._UIC_Props_._height != a && (this._UIC_Props_._height = a, b = !0);
				b && (this.invalidateDisplayList(), this.dispatchResizeEvent())
			};
			Object.defineProperty(a, "x", {
				get: function() {
					return this._DO_Props_._x
				},
				set: function(c) {
					this._DO_Props_._x != c && (this._setX(c), this.invalidateProperties(), this._UIC_Props_._includeInLayout && this.parent && this.parent instanceof b && this.parent._childXYChanged())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "y", {
				get: function() {
					return this._DO_Props_._y
				},
				set: function(c) {
					this._DO_Props_._y != c && (this._setY(c), this.invalidateProperties(), this._UIC_Props_._includeInLayout && this.parent && this.parent instanceof b && this.parent._childXYChanged())
				},
				enumerable: !0,
				configurable: !0
			});
			a.invalidateProperties = function() {
				this._UIC_Props_._invalidatePropertiesFlag || (this._UIC_Props_._invalidatePropertiesFlag = !0, this.parent && f.UIGlobals._layoutManager && f.UIGlobals._layoutManager.invalidateProperties(this))
			};
			a.validateProperties = function() {
				this._UIC_Props_._invalidatePropertiesFlag && (this.commitProperties(), this._UIC_Props_._invalidatePropertiesFlag = !1)
			};
			a.invalidateSize = function() {
				this._UIC_Props_._invalidateSizeFlag || (this._UIC_Props_._invalidateSizeFlag = !0, this.parent && f.UIGlobals._layoutManager && f.UIGlobals._layoutManager.invalidateSize(this))
			};
			a.validateSize = function(c) {
				void 0 === c && (c = !1);
				if (c) for (c = 0; c < this.numChildren; c++) {
					var a = this.getChildAt(c);
					"validateSize" in a && a.validateSize(!0)
				}
				this._UIC_Props_._invalidateSizeFlag && (this.measureSizes() && (this.invalidateDisplayList(), this.invalidateParentSizeAndDisplayList()), this._UIC_Props_._invalidateSizeFlag = !1)
			};
			a.measureSizes = function() {
				var c = !1;
				if (!this._UIC_Props_._invalidateSizeFlag) return c;
				this.canSkipMeasurement() || (this.measure(), this.measuredWidth < this.minWidth && (this.measuredWidth = this.minWidth), this.measuredWidth > this.maxWidth && (this.measuredWidth = this.maxWidth), this.measuredHeight < this.minHeight && (this.measuredHeight = this.minHeight), this.measuredHeight > this.maxHeight && (this.measuredHeight = this.maxHeight));
				if (isNaN(this._UIC_Props_._oldPreferWidth)) this._UIC_Props_._oldPreferWidth = this.preferredWidth,
				this._UIC_Props_._oldPreferHeight = this.preferredHeight,
				c = !0;
				else {
					if (this.preferredWidth != this._UIC_Props_._oldPreferWidth || this.preferredHeight != this._UIC_Props_._oldPreferHeight) c = !0;
					this._UIC_Props_._oldPreferWidth = this.preferredWidth;
					this._UIC_Props_._oldPreferHeight = this.preferredHeight
				}
				return c
			};
			a.invalidateDisplayList = function() {
				this._UIC_Props_._invalidateDisplayListFlag || (this._UIC_Props_._invalidateDisplayListFlag = !0, this.parent && f.UIGlobals._layoutManager && f.UIGlobals._layoutManager.invalidateDisplayList(this), this._setSizeDirty())
			};
			a.validateDisplayList = function() {
				if (this._UIC_Props_._invalidateDisplayListFlag) {
					var c = 0,
					a = 0,
					c = this._UIC_Props_._layoutWidthExplicitlySet ? this._UIC_Props_._width: isNaN(this.explicitWidth) ? this.measuredWidth: this._DO_Props_._explicitWidth,
					a = this._UIC_Props_._layoutHeightExplicitlySet ? this._UIC_Props_._height: isNaN(this.explicitHeight) ? this.measuredHeight: this._DO_Props_._explicitHeight;
					isNaN(c) && (c = 0);
					isNaN(a) && (a = 0);
					this.setActualSize(c, a);
					this.updateDisplayList(c, a);
					this._UIC_Props_._invalidateDisplayListFlag = !1
				}
			};
			a.validateNow = function(c) {
				void 0 === c && (c = !1);
				this._UIC_Props_._validateNowFlag || null == f.UIGlobals._layoutManager ? this._UIC_Props_._validateNowFlag = !0 : f.UIGlobals._layoutManager.validateClient(this, c)
			};
			a.invalidateParentSizeAndDisplayList = function() {
				if (this.parent && this._UIC_Props_._includeInLayout && "invalidateSize" in this.parent) {
					var c = this.parent;
					c.invalidateSize();
					c.invalidateDisplayList()
				}
			};
			a.updateDisplayList = function(c, a) {};
			a.canSkipMeasurement = function() {
				return ! isNaN(this._DO_Props_._explicitWidth) && !isNaN(this._DO_Props_._explicitHeight)
			};
			a.commitProperties = function() {
				this._UIC_Props_._oldWidth == this._UIC_Props_._width && this._UIC_Props_._oldHeight == this._UIC_Props_._height || this.dispatchResizeEvent();
				this._UIC_Props_._oldX == this.x && this._UIC_Props_._oldY == this.y || this.dispatchMoveEvent()
			};
			a.measure = function() {
				this._UIC_Props_._measuredHeight = 0;
				this._UIC_Props_._measuredWidth = 0
			};
			a.dispatchMoveEvent = function() {
				this.hasEventListener(f.MoveEvent.MOVE) && f.MoveEvent.dispatchMoveEvent(this, this._UIC_Props_._oldX, this._UIC_Props_._oldY);
				this._UIC_Props_._oldX = this.x;
				this._UIC_Props_._oldY = this.y
			};
			a._childXYChanged = function() {};
			a.dispatchResizeEvent = function() {
				this.hasEventListener(f.ResizeEvent.RESIZE) && f.ResizeEvent.dispatchResizeEvent(this, this._UIC_Props_._oldWidth, this._UIC_Props_._oldHeight);
				this._UIC_Props_._oldWidth = this._UIC_Props_._width;
				this._UIC_Props_._oldHeight = this._UIC_Props_._height
			};
			Object.defineProperty(a, "includeInLayout", {
				get: function() {
					return this._UIC_Props_._includeInLayout
				},
				set: function(c) {
					this._UIC_Props_._includeInLayout != c && (this._UIC_Props_._includeInLayout = !0, this.invalidateParentSizeAndDisplayList(), this._UIC_Props_._includeInLayout = c)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "left", {
				get: function() {
					return this._UIC_Props_._left
				},
				set: function(c) {
					this._UIC_Props_._left != c && (this._UIC_Props_._left = c, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "right", {
				get: function() {
					return this._UIC_Props_._right
				},
				set: function(c) {
					this._UIC_Props_._right != c && (this._UIC_Props_._right = c, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "top", {
				get: function() {
					return this._UIC_Props_._top
				},
				set: function(c) {
					this._UIC_Props_._top != c && (this._UIC_Props_._top = c, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "bottom", {
				get: function() {
					return this._UIC_Props_._bottom
				},
				set: function(c) {
					this._UIC_Props_._bottom != c && (this._UIC_Props_._bottom = c, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "horizontalCenter", {
				get: function() {
					return this._UIC_Props_._horizontalCenter
				},
				set: function(c) {
					this._UIC_Props_._horizontalCenter != c && (this._UIC_Props_._horizontalCenter = c, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "verticalCenter", {
				get: function() {
					return this._UIC_Props_._verticalCenter
				},
				set: function(c) {
					this._UIC_Props_._verticalCenter != c && (this._UIC_Props_._verticalCenter = c, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "percentWidth", {
				get: function() {
					return this._UIC_Props_._percentWidth
				},
				set: function(c) {
					this._UIC_Props_._percentWidth != c && (this._UIC_Props_._percentWidth = c, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "percentHeight", {
				get: function() {
					return this._UIC_Props_._percentHeight
				},
				set: function(c) {
					this._UIC_Props_._percentHeight != c && (this._UIC_Props_._percentHeight = c, this.invalidateParentSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			a.setLayoutBoundsSize = function(c, a) {
				isNaN(c) ? (this._UIC_Props_._layoutWidthExplicitlySet = !1, c = this.preferredWidth) : this._UIC_Props_._layoutWidthExplicitlySet = !0;
				isNaN(a) ? (this._UIC_Props_._layoutHeightExplicitlySet = !1, a = this.preferredHeight) : this._UIC_Props_._layoutHeightExplicitlySet = !0;
				this.setActualSize(c / this._DO_Props_._scaleX, a / this._DO_Props_._scaleY)
			};
			a.setLayoutBoundsPosition = function(c, a) {
				0 > this._DO_Props_._scaleX && (c += this.layoutBoundsWidth);
				0 > this._DO_Props_._scaleY && (a += this.layoutBoundsHeight);
				var b = !1;
				this._DO_Props_._x != c && (this._setX(c), b = !0);
				this._DO_Props_._y != a && (this._setY(a), b = !0);
				b && this.dispatchMoveEvent()
			};
			Object.defineProperty(a, "preferredWidth", {
				get: function() {
					var c = this._DO_Props_._hasWidthSet ? this._DO_Props_._explicitWidth: this._UIC_Props_._measuredWidth,
					a = this._DO_Props_._scaleX;
					0 > a && (a = -a);
					return c * a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "preferredHeight", {
				get: function() {
					var c = this._DO_Props_._hasHeightSet ? this._DO_Props_._explicitHeight: this._UIC_Props_._measuredHeight,
					a = this._DO_Props_._scaleY;
					0 > a && (a = -a);
					return c * a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "preferredX", {
				get: function() {
					return 0 <= this._DO_Props_._scaleX ? this._DO_Props_._x: this._DO_Props_._x - this.preferredWidth
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "preferredY", {
				get: function() {
					return 0 <= this._DO_Props_._scaleY ? this._DO_Props_._y: this._DO_Props_._y - this.preferredHeight
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "layoutBoundsX", {
				get: function() {
					return 0 <= this._DO_Props_._scaleX ? this._DO_Props_._x: this._DO_Props_._x - this.layoutBoundsWidth
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "layoutBoundsY", {
				get: function() {
					return 0 <= this._DO_Props_._scaleY ? this._DO_Props_._y: this._DO_Props_._y - this.layoutBoundsHeight
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "layoutBoundsWidth", {
				get: function() {
					var c = 0,
					c = this._UIC_Props_._layoutWidthExplicitlySet ? this._UIC_Props_._width: this._DO_Props_._hasWidthSet ? this._DO_Props_._explicitWidth: this._UIC_Props_._measuredWidth,
					a = this._DO_Props_._scaleX;
					0 > a && (a = -a);
					return c * a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "layoutBoundsHeight", {
				get: function() {
					var c = 0,
					c = this._UIC_Props_._layoutHeightExplicitlySet ? this._UIC_Props_._height: this._DO_Props_._hasHeightSet ? this._DO_Props_._explicitHeight: this._UIC_Props_._measuredHeight,
					a = this.scaleY;
					0 > a && (a = -a);
					return c * a
				},
				enumerable: !0,
				configurable: !0
			});
			b.prototypeCanSet = void 0;
			b.emptyStyleChain = {};
			return b
		} (e.DisplayObjectContainer);
		f.UIComponent = g;
		g.prototype.__class__ = "egret.gui.UIComponent"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			function d() {}
			d.AUTO = "auto";
			d.OFF = "off";
			d.ON = "on";
			return d
		} ();
		e.ScrollPolicy = g;
		g.prototype.__class__ = "egret.gui.ScrollPolicy"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a) {
				void 0 === a && (a = null);
				d.call(this);
				this.generator = null;
				this.generator = a
			}
			__extends(b, d);
			b.prototype.newInstance = function() {
				return new this.generator
			};
			return b
		} (e.HashObject);
		f.ClassFactory = g;
		g.prototype.__class__ = "egret.gui.ClassFactory"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this)
			}
			__extends(b, d);
			var a = b.prototype;
			a.initialize = function(c) {};
			a.apply = function(c) {};
			a.remove = function(c) {};
			a.initializeFromObject = function(c) {
				for (var a in c) this[a] = c[a];
				return this
			};
			return b
		} (e.HashObject);
		f.OverrideBase = g;
		g.prototype.__class__ = "egret.gui.OverrideBase"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function(d) {
			function b(c, a, e, f) {
				d.call(this);
				this.propertyName = "";
				this.position = b.LAST;
				this.target = this.relativeTo = null;
				this.target = c;
				this.propertyName = a;
				this.position = e;
				this.relativeTo = f
			}
			__extends(b, d);
			var a = b.prototype;
			a.initialize = function(c) {
				if ((c = c[this.target]) && !(c instanceof e.SkinnableComponent) && "_initialize" in c) try {
					c._initialize()
				} catch(a) {}
			};
			a.apply = function(c) {
				var a, d;
				try {
					d = c[this.relativeTo]
				} catch(e) {}
				var f = c[this.target];
				c = this.propertyName ? c[this.propertyName] : c;
				if (f && c) {
					switch (this.position) {
					case b.FIRST:
						a = 0;
						break;
					case b.LAST:
						a = -1;
						break;
					case b.BEFORE:
						a = c.getElementIndex(d);
						break;
					case b.AFTER:
						a = c.getElementIndex(d) + 1
					} - 1 == a && (a = c.numElements);
					c.addElementAt(f, a)
				}
			};
			a.remove = function(c) {
				var a = null == this.propertyName || "" == this.propertyName ? c: c[this.propertyName]; (c = c[this.target]) && a && -1 != a.getElementIndex(c) && a.removeElement(c)
			};
			b.FIRST = "first";
			b.LAST = "last";
			b.BEFORE = "before";
			b.AFTER = "after";
			return b
		} (e.OverrideBase);
		e.AddItems = g;
		g.prototype.__class__ = "egret.gui.AddItems"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function(d) {
			function b(c, a, b) {
				d.call(this);
				this.oldValue = this.value = this.target = this.name = null;
				this.target = c;
				this.name = a;
				this.value = b
			}
			__extends(b, d);
			var a = b.prototype;
			a.apply = function(c) {
				c = null == this.target || "" == this.target ? c: c[this.target];
				null != c && (this.oldValue = c[this.name], this.setPropertyValue(c, this.name, this.value, this.oldValue))
			};
			a.remove = function(c) {
				c = null == this.target || "" == this.target ? c: c[this.target];
				null != c && (this.setPropertyValue(c, this.name, this.oldValue, this.oldValue), this.oldValue = null)
			};
			a.setPropertyValue = function(c, a, b, d) {
				c[a] = void 0 === b || null === b ? b: "number" == typeof d ? parseFloat(b) : "boolean" == typeof d ? this.toBoolean(b) : b
			};
			a.toBoolean = function(c) {
				return "string" == typeof c ? "true" == c.toLowerCase() : !1 != c
			};
			return b
		} (e.OverrideBase);
		e.SetProperty = g;
		g.prototype.__class__ = "egret.gui.SetProperty"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function(d) {
			function b(c, a, b) {
				d.call(this);
				this.target = c;
				this.name = a;
				this.value = b
			}
			__extends(b, d);
			var a = b.prototype;
			a.apply = function(c) {
				c = null == this.target || "" == this.target ? c: c[this.target];
				null != c && (this.oldValue = c.getStyle(this.name), this.setStyleValue(c, this.name, this.value, this.oldValue))
			};
			a.remove = function(c) {
				c = null == this.target || "" == this.target ? c: c[this.target];
				null != c && (this.setStyleValue(c, this.name, this.oldValue, this.oldValue), this.oldValue = null)
			};
			a.setStyleValue = function(c, a, b, d) {
				void 0 === b ? c.clearStyle(a) : null === b ? c.setStyle(a, b) : "number" == typeof d ? c.setStyle(a, parseFloat(b)) : "boolean" == typeof d ? c.setStyle(a, this.toBoolean(b)) : c.setStyle(a, b)
			};
			a.toBoolean = function(c) {
				return "string" == typeof c ? "true" == c.toLowerCase() : !1 != c
			};
			return b
		} (e.OverrideBase);
		e.SetStyle = g;
		g.prototype.__class__ = "egret.gui.SetStyle"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a, c) {
				d.call(this);
				this.initialized = !1;
				this.name = null;
				this.name = a;
				this.overrides = c
			}
			__extends(b, d);
			b.prototype.initialize = function(a) {
				if (!this.initialized) {
					this.initialized = !0;
					for (var c = 0; c < this.overrides.length; c++) this.overrides[c].initialize(a)
				}
			};
			return b
		} (e.HashObject);
		f.State = g;
		g.prototype.__class__ = "egret.gui.State"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			function d() {}
			d.adjustRelativeByXY = function(b, a) {
				void 0 === a && (a = null);
				if (b && (a || (a = b.parent), a)) {
					var c = b.x,
					d = b.y,
					e = b.layoutBoundsHeight,
					f = b.layoutBoundsWidth,
					g = a.width,
					n = a.height;
					isNaN(b.left) || (b.left = c);
					isNaN(b.right) || (b.right = g - c - f);
					isNaN(b.horizontalCenter) || (b.horizontalCenter = c + 0.5 * f - 0.5 * g);
					isNaN(b.top) || (b.top = d);
					isNaN(b.bottom) || (b.bottom = n - d - e);
					isNaN(b.verticalCenter) || (b.verticalCenter = 0.5 * e - 0.5 * n + d)
				}
			};
			return d
		} ();
		e.LayoutUtil = g;
		g.prototype.__class__ = "egret.gui.LayoutUtil"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = {};
		f.getScale9Grid = function(d) {
			if (g[d]) return g[d];
			if (!d) return null;
			var b = d.split(","),
			b = new e.Rectangle(parseInt(b[0]), parseInt(b[1]), parseInt(b[2]), parseInt(b[3]));
			return g[d] = b
		}
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		e.setProperties = function(e, d, b) {
			for (var a = d.length,
			c = 0; c < a; c++) e[d[c]] = b[c];
			return e
		}
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			function d(a) {
				void 0 === a && (a = 0.5);
				this._easeInFraction = 0.5;
				this.easeInFraction = a
			}
			var b = d.prototype;
			Object.defineProperty(b, "easeInFraction", {
				get: function() {
					return this._easeInFraction
				},
				set: function(a) {
					this._easeInFraction = a
				},
				enumerable: !0,
				configurable: !0
			});
			b.ease = function(a) {
				var c = 1 - this._easeInFraction;
				return a <= this._easeInFraction && 0 < this._easeInFraction ? this._easeInFraction * this._easeIn(a / this._easeInFraction) : this._easeInFraction + c * this._easeOut((a - this._easeInFraction) / c)
			};
			b._easeIn = function(a) {
				return a
			};
			b._easeOut = function(a) {
				return a
			};
			return d
		} ();
		e.EaseInOutBase = g;
		g.prototype.__class__ = "egret.gui.EaseInOutBase"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function(d) {
			function b(c) {
				void 0 === c && (c = 0.5);
				d.call(this, c)
			}
			__extends(b, d);
			var a = b.prototype;
			a._easeIn = function(c) {
				return 1 - Math.cos(c * Math.PI / 2)
			};
			a._easeOut = function(c) {
				return Math.sin(c * Math.PI / 2)
			};
			return b
		} (e.EaseInOutBase);
		e.Sine = g;
		g.prototype.__class__ = "egret.gui.Sine"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			function d() {}
			var b = d.prototype;
			d.getInstance = function() {
				d.theInstance || (d.theInstance = new d);
				return d.theInstance
			};
			b.interpolate = function(a, c, b) {
				return 0 == a ? c: 1 == a ? b: c + a * (b - c)
			};
			b.increment = function(a, c) {
				return a + c
			};
			b.decrement = function(a, c) {
				return a - c
			};
			return d
		} ();
		e.NumberInterpolator = g;
		g.prototype.__class__ = "egret.gui.NumberInterpolator"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			function d() {}
			d.LOOP = "loop";
			d.REVERSE = "reverse";
			return d
		} ();
		e.RepeatBehavior = g;
		g.prototype.__class__ = "egret.gui.RepeatBehavior"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			function d(b, a, c) {
				void 0 === b && (b = NaN);
				void 0 === a && (a = null);
				void 0 === c && (c = null);
				this.value = a;
				this.time = b;
				this.valueBy = c
			}
			d.prototype.clone = function() {
				var b = new d(this.time, this.value, this.valueBy);
				b.easer = this.easer;
				b._timeFraction = this._timeFraction;
				return b
			};
			return d
		} ();
		e.Keyframe = g;
		g.prototype.__class__ = "egret.gui.Keyframe"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			function d(a) {
				void 0 === a && (a = null);
				this.interpolator = e.NumberInterpolator.getInstance();
				this.property = a
			}
			var b = d.prototype;
			b.clone = function() {
				var a = new d(this.property);
				a.interpolator = this.interpolator;
				if (null !== this.keyframes) {
					a.keyframes = [];
					for (var c = 0; c < this.keyframes.length; ++c) a.keyframes[c] = this.keyframes[c].clone()
				}
				return a
			};
			b._scaleKeyframes = function(a) {
				for (var c = this.keyframes.length,
				b = 0; b < c; ++b) {
					var d = this.keyframes[b];
					d._timeFraction = d.time / a
				}
			};
			b.getValue = function(a) {
				if (!this.keyframes) return null;
				var c = this.keyframes.length;
				if (2 == c && 1 == this.keyframes[1]._timeFraction) {
					var b = null != this.keyframes[1].easer ? this.keyframes[1].easer.ease(a) : a;
					return this.interpolator.interpolate(b, this.keyframes[0].value, this.keyframes[1].value)
				}
				isNaN(this.keyframes[0]._timeFraction) && this._scaleKeyframes(this.keyframes[this.keyframes.length - 1].time);
				for (var d = 0,
				b = this.keyframes[0].value, e = 1; e < c; ++e) {
					var f = this.keyframes[e];
					if (a >= d && a < f._timeFraction) return a = (a - d) / (f._timeFraction - d),
					a = null != f.easer ? f.easer.ease(a) : a,
					this.interpolator.interpolate(a, b, f.value);
					d = f._timeFraction;
					b = f.value
				}
				return this.keyframes[c - 1].value
			};
			return d
		} ();
		e.MotionPath = g;
		g.prototype.__class__ = "egret.gui.MotionPath"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function(d) {
			function b(c, a, b, g) {
				void 0 === c && (c = null);
				void 0 === a && (a = null);
				void 0 === b && (b = null);
				void 0 === g && (g = null);
				d.call(this);
				this.property = c;
				this.keyframes = [new e.Keyframe(0, a), new e.Keyframe(NaN, b, g)]
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "valueFrom", {
				get: function() {
					return this.keyframes[0].value
				},
				set: function(c) {
					this.keyframes[0].value = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "valueTo", {
				get: function() {
					return this.keyframes[this.keyframes.length - 1].value
				},
				set: function(c) {
					this.keyframes[this.keyframes.length - 1].value = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "valueBy", {
				get: function() {
					return this.keyframes[this.keyframes.length - 1].valueBy
				},
				set: function(c) {
					this.keyframes[this.keyframes.length - 1].valueBy = c
				},
				enumerable: !0,
				configurable: !0
			});
			return b
		} (e.MotionPath);
		e.SimpleMotionPath = g;
		g.prototype.__class__ = "egret.gui.SimpleMotionPath"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function() {
			function d(a, c) {
				this._easer = d.defaultEaser;
				this.repeatFunction = this.stopFunction = this.updateFunction = this.endFunction = this.startFunction = this.thisObject = null;
				this.id = -1;
				this.started = this._invertValues = this._doReverse = this._isPlaying = this._doSeek = !1;
				this.delayedStartTime = this.delayTime = -1;
				this._playheadTime = 0;
				this.duration = 500;
				this._repeatBehavior = f.RepeatBehavior.LOOP;
				this._repeatCount = 1;
				this._startDelay = this._repeatDelay = 0;
				this.interpolator = null;
				this._cycleTime = 0;
				this.updateFunction = a;
				this.thisObject = c
			}
			var b = d.prototype;
			Object.defineProperty(b, "easer", {
				get: function() {
					return this._easer
				},
				set: function(a) {
					a || (a = d.defaultEaser);
					this._easer = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "playheadTime", {
				get: function() {
					return this._playheadTime + this.startDelay
				},
				set: function(a) {
					this._invertValues = !1;
					this.seek(a, !0)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "isPlaying", {
				get: function() {
					return this._isPlaying
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "repeatBehavior", {
				get: function() {
					return this._repeatBehavior
				},
				set: function(a) {
					this._repeatBehavior = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "repeatCount", {
				get: function() {
					return this._repeatCount
				},
				set: function(a) {
					this._repeatCount = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "repeatDelay", {
				get: function() {
					return this._repeatDelay
				},
				set: function(a) {
					this._repeatDelay = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "startDelay", {
				get: function() {
					return this._startDelay
				},
				set: function(a) {
					this._startDelay = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "cycleTime", {
				get: function() {
					return this._cycleTime
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "cycleFraction", {
				get: function() {
					return this._cycleFraction
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "playReversed", {
				get: function() {
					return this._playReversed
				},
				set: function(a) {
					this._isPlaying && this._invertValues != a && (this._invertValues = a, this.seek(this.duration - this._cycleTime, !0));
					this._playReversed = this._doReverse = a
				},
				enumerable: !0,
				configurable: !0
			});
			d.addAnimation = function(a) {
				if (a.motionPaths && 0 < a.motionPaths.length && a.motionPaths[0] && ("width" == a.motionPaths[0].property || "height" == a.motionPaths[0].property)) {
					d.activeAnimations.splice(0, 0, a);
					a.id = 0;
					for (var c = 1; c < d.activeAnimations.length; ++c) d.activeAnimations[c].id = c
				} else a.id = d.activeAnimations.length,
				d.activeAnimations.push(a);
				d.timer || (d.pulse(), d.timer = new e.Timer(d.TIMER_RESOLUTION), d.timer.addEventListener(e.TimerEvent.TIMER, d.timerHandler, d), d.timer.start());
				d.intervalTime = d.currentTime;
				a.cycleStartTime = d.intervalTime
			};
			d.removeAnimationAt = function(a) {
				void 0 === a && (a = 0);
				if (0 <= a && a < d.activeAnimations.length) {
					d.activeAnimations.splice(a, 1);
					for (var c = d.activeAnimations.length; a < c; a++) d.activeAnimations[a].id--
				}
				d.stopTimerIfDone()
			};
			d.removeAnimation = function(a) {
				d.removeAnimationAt(a.id)
			};
			d.timerHandler = function(a) {
				d.intervalTime = d.pulse();
				for (a = 0; a < d.activeAnimations.length;) {
					var c = !0,
					b = d.activeAnimations[a];
					b && (c = !b.doInterval());
					c && ++a
				}
				for (; 0 < d.delayedStartAnims.length;) if (a = d.delayedStartAnims[0], a.delayedStartTime < d.currentTime) a.playReversed ? a.end() : a.start();
				else break
			};
			b.doInterval = function() {
				var a = !1,
				c = !1;
				if (this._isPlaying || this._doSeek) {
					var b = d.intervalTime - this.cycleStartTime;
					this._playheadTime = d.intervalTime - this.startTime;
					if (b >= this.duration) {
						var p = 2;
						0 < this.duration + this.repeatDelay && (p += Math.floor((this._playheadTime - this.duration) / (this.duration + this.repeatDelay)));
						if (0 == this.repeatCount || p <= this.repeatCount) if (0 == this.repeatDelay) this._cycleTime = b % this.duration,
						this.cycleStartTime = d.intervalTime - this._cycleTime,
						b = this._cycleTime,
						this.repeatBehavior == f.RepeatBehavior.REVERSE && (this._invertValues = 1 < this.repeatCount ? !(p % 2) : !this._invertValues),
						c = !0;
						else return this._doSeek ? (this._cycleTime = b % (this.duration + this.repeatDelay), this._cycleTime > this.duration && (this._cycleTime = this.duration), this.calculateValue(this._cycleTime), this.sendUpdateEvent()) : (this._cycleTime = this.duration, this.calculateValue(this._cycleTime), this.sendUpdateEvent(), d.removeAnimation(this), a = new e.Timer(this.repeatDelay, 1), a.addEventListener(e.TimerEvent.TIMER, this.repeat, this), a.start()),
						!1;
						else b > this.duration && (this._playheadTime = b = this.duration)
					}
					this._cycleTime = b;
					this.calculateValue(b);
					b >= this.duration && !this._doSeek ? this.playReversed && 0 != this.startDelay ? (this.stopAnimation(), this.addToDelayedAnimations(this.startDelay)) : (this.end(), a = !0) : (c && this.sendAnimationEvent("repeatFunction"), this.sendUpdateEvent())
				}
				return a
			};
			b.sendUpdateEvent = function() {
				this.sendAnimationEvent("updateFunction")
			};
			b.sendAnimationEvent = function(a) {
				null != this[a] && this[a].call(this.thisObject, this)
			};
			b.calculateValue = function(a) {
				var c = 0;
				this.currentValue = {};
				if (0 == this.duration) for (c = 0; c < this.motionPaths.length; ++c) this.currentValue[this.motionPaths[c].property] = this._invertValues ? this.motionPaths[c].keyframes[0].value: this.motionPaths[c].keyframes[this.motionPaths[c].keyframes.length - 1].value;
				else if (this._invertValues && (a = this.duration - a), this._cycleFraction = this.easer.ease(a / this.duration), this.motionPaths) for (c = 0; c < this.motionPaths.length; ++c) this.currentValue[this.motionPaths[c].property] = this.motionPaths[c].getValue(this._cycleFraction)
			};
			b.removeFromDelayedAnimations = function() {
				if (0 <= this.delayedStartTime) {
					for (var a = 0; a < d.delayedStartAnims.length; ++a) if (d.delayedStartAnims[a] == this) {
						d.delayedStartAnims.splice(a, 1);
						break
					}
					this.delayedStartTime = -1
				}
			};
			b.end = function() {
				0 < this.startDelay && 0 < d.delayedStartAnims.length && this.removeFromDelayedAnimations();
				this.started || this.sendAnimationEvent("startFunction");
				1 < this.repeatCount && "reverse" == this.repeatBehavior && 0 == this.repeatCount % 2 && (this._invertValues = !0);
				this._doReverse && 0 < this.startDelay || (this.calculateValue(this.duration), this.sendUpdateEvent());
				this.sendAnimationEvent("endFunction");
				this.isPlaying ? this.stopAnimation() : d.stopTimerIfDone()
			};
			d.stopTimerIfDone = function() {
				d.timer && 0 == d.activeAnimations.length && 0 == d.delayedStartAnims.length && (d.intervalTime = NaN, d.timer.reset(), d.timer = null)
			};
			b.addToDelayedAnimations = function(a) {
				d.timer || (d.pulse(), d.timer = new e.Timer(d.TIMER_RESOLUTION), d.timer.addEventListener(e.TimerEvent.TIMER, d.timerHandler, d), d.timer.start());
				a = d.currentTime + a;
				for (var c = -1,
				b = 0; b < d.delayedStartAnims.length; ++b) if (a < d.delayedStartAnims[b].delayedStartTime) {
					c = b;
					break
				}
				0 <= c ? d.delayedStartAnims.splice(c, 0, this) : d.delayedStartAnims.push(this);
				this.delayedStartTime = a
			};
			b.play = function() {
				this.stopAnimation();
				for (var a = 0,
				c = 0,
				a = 0; a < this.motionPaths.length; ++a) {
					var b = this.motionPaths[a].keyframes;
					isNaN(b[0].time) ? b[0].time = 0 : 0 < b[0].time && (c = b[0].time, b.splice(0, 0, new f.Keyframe(0, null)), b.splice(1, 0, new f.Keyframe(c - 1, null)), this.playReversed && (b[0].value = b[2].value, b[1].value = b[2].value));
					for (c = 1; c < b.length; ++c) isNaN(b[c].time) && (b[c].time = this.duration)
				}
				for (a = 0; a < this.motionPaths.length; ++a) this.motionPaths[a]._scaleKeyframes(this.duration);
				this._doReverse && (this._invertValues = !0);
				0 < this.startDelay && !this.playReversed ? this.addToDelayedAnimations(this.startDelay) : this.start()
			};
			b.seek = function(a, c) {
				void 0 === c && (c = !1);
				this.startTime = this.cycleStartTime = d.intervalTime - a;
				this._doSeek = !0;
				if (!this._isPlaying || this.playReversed) {
					var b = this._isPlaying;
					d.intervalTime = d.currentTime;
					if (c && 0 < this.startDelay && 0 <= this.delayedStartTime) {
						this.removeFromDelayedAnimations();
						b = a - this.startDelay;
						this.playReversed && (b -= this.duration);
						0 > b ? this.addToDelayedAnimations(this.startDelay - a) : (a -= this.startDelay, this.isPlaying || this.start(), this.startTime = this.cycleStartTime = d.intervalTime - a, this.doInterval(), this._doSeek = !1);
						return
					}
					b || (this.sendAnimationEvent("startFunction"), this.setupInterpolation());
					this.startTime = this.cycleStartTime = d.intervalTime - a
				}
				this.doInterval();
				this._doSeek = !1
			};
			b.setupInterpolation = function() {
				if (this.interpolator && this.motionPaths) for (var a = 0; a < this.motionPaths.length; ++a) this.motionPaths[a].interpolator = this.interpolator
			};
			b.reverse = function() {
				this._isPlaying ? (this._doReverse = !1, this.seek(this.duration - this._cycleTime), this._invertValues = !this._invertValues) : this._doReverse = !this._doReverse
			};
			b.pause = function() {
				0 <= this.delayedStartTime && (this.delayTime = this.delayedStartTime - d.currentTime, this.removeFromDelayedAnimations());
				this._isPlaying = !1
			};
			b.stopAnimation = function() {
				this.removeFromDelayedAnimations();
				0 <= this.id && (d.removeAnimationAt(this.id), this.id = -1, this._isPlaying = this._invertValues = !1)
			};
			b.stop = function() {
				this.stopAnimation();
				this.sendAnimationEvent("stopFunction")
			};
			b.resume = function() {
				this._isPlaying = !0;
				0 <= this.delayTime ? this.addToDelayedAnimations(this.delayTime) : (this.cycleStartTime = d.intervalTime - this._cycleTime, this.startTime = d.intervalTime - this._playheadTime, this._doReverse && (this.reverse(), this._doReverse = !1))
			};
			b.repeat = function(a) {
				this.repeatBehavior == f.RepeatBehavior.REVERSE && (this._invertValues = !this._invertValues);
				this.calculateValue(0);
				this.sendAnimationEvent("repeatFunction");
				this.sendUpdateEvent();
				d.addAnimation(this)
			};
			b.start = function(a) {
				a = 0;
				if (!this.playReversed && 0 <= this.delayedStartTime) {
					var c = d.currentTime - this.delayedStartTime;
					0 < c && (a = Math.min(c, this.duration));
					this.removeFromDelayedAnimations()
				}
				this.sendAnimationEvent("startFunction");
				this.setupInterpolation();
				this.calculateValue(0);
				this.sendUpdateEvent();
				d.addAnimation(this);
				this.startTime = this.cycleStartTime;
				this._isPlaying = !0;
				0 < a && this.seek(a);
				this.started = !0
			};
			d.pulse = function() {
				if (0 > d.startTime) return d.startTime = e.getTimer(),
				d._currentTime = 0,
				d._currentTime;
				d._currentTime = e.getTimer() - d.startTime;
				return d._currentTime
			};
			Object.defineProperty(d, "currentTime", {
				get: function() {
					return 0 > d._currentTime ? d.pulse() : d._currentTime
				},
				enumerable: !0,
				configurable: !0
			});
			d.TIMER_RESOLUTION = 1E3 / 60;
			d.defaultEaser = new f.Sine(0.5);
			d.intervalTime = NaN;
			d.activeAnimations = [];
			d.timer = null;
			d.delayedStartAnims = [];
			d.startTime = -1;
			d._currentTime = -1;
			return d
		} ();
		f.Animation = g;
		g.prototype.__class__ = "egret.gui.Animation"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(c) {
				d.call(this);
				this.delayElapsedTime = this.delayStartTime = 0;
				this.durationExplicitlySet = !1;
				this._playCount = 0;
				this._stopRepeat = !1;
				this._duration = 500;
				this._startDelay = this._repeatDelay = this._repeatCount = 0;
				this.target = c
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "_actualDuration", {
				get: function() {
					var c = NaN;
					0 < this.repeatCount && (c = this.duration * this.repeatCount + this.repeatDelay * (this.repeatCount - 1) + this.startDelay);
					return c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "duration", {
				get: function() {
					return ! this.durationExplicitlySet && this.parentCompositeEffectInstance ? this.parentCompositeEffectInstance.duration: this._duration
				},
				set: function(c) {
					this.durationExplicitlySet = !0;
					this._duration = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "effect", {
				get: function() {
					return this._effect
				},
				set: function(c) {
					this._effect = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "playheadTime", {
				get: function() {
					return Math.max(this._playCount - 1, 0) * (this.duration + this.repeatDelay) + (this.playReversed ? 0 : this.startDelay)
				},
				set: function(c) {
					this._setPlayheadTime(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setPlayheadTime = function(c) {
				this._delayTimer && this._delayTimer.running && (this._delayTimer.reset(), c < this.startDelay ? (this._delayTimer = new e.Timer(this.startDelay - c, 1), this.delayStartTime = e.getTimer(), this._delayTimer.addEventListener(e.TimerEvent.TIMER, this.delayTimerHandler, this), this._delayTimer.start()) : (this._playCount = 0, this.play()))
			};
			Object.defineProperty(a, "playReversed", {
				get: function() {
					return this._playReversed
				},
				set: function(c) {
					this._setPlayReversed(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setPlayReversed = function(c) {
				this._playReversed = c
			};
			Object.defineProperty(a, "repeatCount", {
				get: function() {
					return this._repeatCount
				},
				set: function(c) {
					this._repeatCount = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "repeatDelay", {
				get: function() {
					return this._repeatDelay
				},
				set: function(c) {
					this._repeatDelay = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "startDelay", {
				get: function() {
					return this._startDelay
				},
				set: function(c) {
					this._startDelay = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "target", {
				get: function() {
					return this._target
				},
				set: function(c) {
					this._target = c
				},
				enumerable: !0,
				configurable: !0
			});
			a.startEffect = function() {
				0 < this.startDelay && !this.playReversed ? (this._delayTimer = new e.Timer(this.startDelay, 1), this.delayStartTime = e.getTimer(), this._delayTimer.addEventListener(e.TimerEvent.TIMER, this.delayTimerHandler, this), this._delayTimer.start()) : this.play()
			};
			a.play = function() {
				this._playCount++;
				this.dispatchEvent(new f.EffectEvent(f.EffectEvent.EFFECT_START, !1, !1, this));
				this.target && "dispatchEvent" in this.target && this.target.dispatchEvent(new f.EffectEvent(f.EffectEvent.EFFECT_START, !1, !1, this))
			};
			a.pause = function() {
				this._delayTimer && this._delayTimer.running && !isNaN(this.delayStartTime) && (this._delayTimer.stop(), this.delayElapsedTime = e.getTimer() - this.delayStartTime)
			};
			a.stop = function() {
				this._delayTimer && this._delayTimer.reset();
				this._stopRepeat = !0;
				this.dispatchEvent(new f.EffectEvent(f.EffectEvent.EFFECT_STOP, !1, !1, this));
				this.target && "dispatchEvent" in this.target && this.target.dispatchEvent(new f.EffectEvent(f.EffectEvent.EFFECT_STOP, !1, !1, this));
				this.finishEffect()
			};
			a.resume = function() { ! this._delayTimer || this._delayTimer.running || isNaN(this.delayElapsedTime) || (this._delayTimer.delay = this.playReversed ? this.delayElapsedTime: this._delayTimer.delay - this.delayElapsedTime, this.delayStartTime = e.getTimer(), this._delayTimer.start())
			};
			a.reverse = function() {
				0 < this.repeatCount && (this._playCount = this.repeatCount - this._playCount + 1)
			};
			a.end = function() {
				this._delayTimer && this._delayTimer.reset();
				this._stopRepeat = !0;
				this.finishEffect()
			};
			a.finishEffect = function() {
				this._playCount = 0;
				this.dispatchEvent(new f.EffectEvent(f.EffectEvent.EFFECT_END, !1, !1, this));
				this.target && "dispatchEvent" in this.target && this.target.dispatchEvent(new f.EffectEvent(f.EffectEvent.EFFECT_END, !1, !1, this))
			};
			a.finishRepeat = function() { ! this._stopRepeat && 0 != this._playCount && (this._playCount < this.repeatCount || 0 == this.repeatCount) ? 0 < this.repeatDelay ? (this._delayTimer = new e.Timer(this.repeatDelay, 1), this.delayStartTime = e.getTimer(), this._delayTimer.addEventListener(e.TimerEvent.TIMER, this.delayTimerHandler, this), this._delayTimer.start()) : this.play() : this.finishEffect()
			};
			a._playWithNoDuration = function() {
				this.duration = 0;
				this.repeatCount = 1;
				this.startDelay = this.repeatDelay = 0;
				this.startEffect()
			};
			a.delayTimerHandler = function(c) {
				this._delayTimer.reset();
				this.delayElapsedTime = this.delayStartTime = NaN;
				this.play()
			};
			return b
		} (e.EventDispatcher);
		f.EffectInstance = g;
		g.prototype.__class__ = "egret.gui.EffectInstance"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function(d) {
			function b(c) {
				d.call(this, c);
				this._activeEffectQueue = [];
				this._playheadTime = 0;
				this._childSets = []
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "_actualDuration", {
				get: function() {
					var c = NaN;
					0 < this.repeatCount && (c = this._durationWithoutRepeat * this.repeatCount + this.repeatDelay * (this.repeatCount - 1) + this.startDelay);
					return c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "playheadTime", {
				get: function() {
					return this._playheadTime
				},
				enumerable: !0,
				configurable: !0
			});
			a._setPlayheadTime = function(c) {
				this._timerAnimation ? this._timerAnimation.playheadTime = c: this._playheadTime = c;
				d.prototype._setPlayheadTime.call(this, c)
			};
			Object.defineProperty(a, "_durationWithoutRepeat", {
				get: function() {
					return 0
				},
				enumerable: !0,
				configurable: !0
			});
			a.play = function() {
				this._timerAnimation = new e.Animation(this.animationUpdate, this);
				this._timerAnimation.duration = this._durationWithoutRepeat;
				this._timerAnimation.motionPaths = [new e.SimpleMotionPath("timer", 0, 0)];
				this._timerAnimation.endFunction = this.animationEnd;
				this._timerAnimation.play();
				d.prototype.play.call(this)
			};
			a.pause = function() {
				d.prototype.pause.call(this);
				this._timerAnimation && this._timerAnimation.pause()
			};
			a.stop = function() {
				d.prototype.stop.call(this);
				this._timerAnimation && this._timerAnimation.stop()
			};
			a.end = function() {
				d.prototype.end.call(this);
				this._timerAnimation && this._timerAnimation.end()
			};
			a.resume = function() {
				d.prototype.resume.call(this);
				this._timerAnimation && this._timerAnimation.resume()
			};
			a.reverse = function() {
				d.prototype.reverse.call(this);
				this._setPlayReversed(!this.playReversed);
				this._timerAnimation && this._timerAnimation.reverse()
			};
			a.finishEffect = function() {
				this._activeEffectQueue = null;
				d.prototype.finishEffect.call(this)
			};
			a.addChildSet = function(c) {
				if (c) {
					var a = c.length;
					if (0 < a) {
						this._childSets ? this._childSets.push(c) : this._childSets = [c];
						for (var b = 0; b < a; b++) c[b].addEventListener(e.EffectEvent.EFFECT_END, this._effectEndHandler, this),
						c[b].parentCompositeEffectInstance = this
					}
				}
			};
			a._playWithNoDuration = function() {
				d.prototype._playWithNoDuration.call(this);
				this.end()
			};
			a.animationUpdate = function(c) {
				this._playheadTime = this._timerAnimation ? this._timerAnimation.playheadTime: this._playheadTime
			};
			a.animationEnd = function(c) {
				this._playheadTime = this._timerAnimation ? this._timerAnimation.playheadTime: this._playheadTime
			};
			a._onEffectEnd = function(c) {};
			a._effectEndHandler = function(c) {
				this._onEffectEnd(c.effectInstance)
			};
			return b
		} (e.EffectInstance);
		e.CompositeEffectInstance = g;
		g.prototype.__class__ = "egret.gui.CompositeEffectInstance"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(c) {
				void 0 === c && (c = null);
				d.call(this);
				this._instances = [];
				this._isPaused = !1;
				this._duration = 500;
				this.durationExplicitlySet = !1;
				this._perElementOffset = 0;
				this.repeatCount = 1;
				this.startDelay = this.repeatDelay = 0;
				this._targets = [];
				this._playheadTime = 0;
				this.target = c
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "duration", {
				get: function() {
					return ! this.durationExplicitlySet && this._parentCompositeEffect ? this._parentCompositeEffect.duration: this._duration
				},
				set: function(c) {
					this.durationExplicitlySet = !0;
					this._duration = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "isPlaying", {
				get: function() {
					return this._instances && 0 < this._instances.length
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "isPaused", {
				get: function() {
					return this.isPlaying ? this._isPaused: !1
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "perElementOffset", {
				get: function() {
					return this._perElementOffset
				},
				set: function(c) {
					this._perElementOffset = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "target", {
				get: function() {
					return 0 < this._targets.length ? this._targets[0] : null
				},
				set: function(c) {
					this._targets.splice(0);
					c && (this._targets[0] = c)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "targets", {
				get: function() {
					return this._targets
				},
				set: function(c) {
					for (var a = c.length - 1; 0 <= a; a--) null == c[a] && c.splice(a, 1);
					this._targets = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "playheadTime", {
				get: function() {
					for (var c = 0; c < this._instances.length; c++) if (this._instances[c]) return this._instances[c].playheadTime;
					return this._playheadTime
				},
				set: function(c) {
					var a = !1;
					0 == this._instances.length && (this.play(), a = !0);
					for (var b = 0; b < this._instances.length; b++) this._instances[b] && (this._instances[b].playheadTime = c);
					a && this.pause();
					this._playheadTime = c
				},
				enumerable: !0,
				configurable: !0
			});
			a.createInstances = function(c) {
				void 0 === c && (c = null);
				c || (c = this.targets);
				for (var a = [], b = 0, d = c.length, e = 0; e < d; e++) {
					var f = this.createInstance(c[e]);
					f && (f.startDelay += b, b += this.perElementOffset, a.push(f))
				}
				return a
			};
			a.createInstance = function(c) {
				void 0 === c && (c = null);
				c || (c = this.target);
				c = new this.instanceClass(c);
				this._initInstance(c);
				c.addEventListener(f.EffectEvent.EFFECT_START, this._effectStartHandler, this);
				c.addEventListener(f.EffectEvent.EFFECT_STOP, this._effectStopHandler, this);
				c.addEventListener(f.EffectEvent.EFFECT_END, this._effectEndHandler, this);
				this._instances.push(c);
				return c
			};
			a._initInstance = function(c) {
				c.duration = this.duration;
				c.durationExplicitlySet = this.durationExplicitlySet;
				c.effect = this;
				c.repeatCount = this.repeatCount;
				c.repeatDelay = this.repeatDelay;
				c.startDelay = this.startDelay
			};
			a.deleteInstance = function(c) {
				c.removeEventListener(f.EffectEvent.EFFECT_START, this._effectStartHandler, this);
				c.removeEventListener(f.EffectEvent.EFFECT_STOP, this._effectStopHandler, this);
				c.removeEventListener(f.EffectEvent.EFFECT_END, this._effectEndHandler, this);
				for (var a = this._instances.length,
				b = 0; b < a; b++) this._instances[b] === c && this._instances.splice(b, 1)
			};
			a.play = function(c, a) {
				void 0 === c && (c = null);
				void 0 === a && (a = !1);
				this._isPaused = this.effectStopped = !1;
				this.playReversed = a;
				for (var b = this.createInstances(c), d = b.length, e = 0; e < d; e++) {
					var f = b[e];
					f.playReversed = a;
					f.startEffect()
				}
				return b
			};
			a.pause = function() {
				if (this.isPlaying && !this._isPaused) {
					this._isPaused = !0;
					for (var c = this._instances.length,
					a = 0; a < c; a++) this._instances[a].pause()
				}
			};
			a.stop = function() {
				for (var c = this._instances.length - 1; 0 <= c; c--) {
					var a = this._instances[c];
					a && a.stop()
				}
			};
			a.resume = function() {
				if (this.isPlaying && this._isPaused) {
					this._isPaused = !1;
					for (var c = this._instances.length,
					a = 0; a < c; a++) this._instances[a].resume()
				}
			};
			a.reverse = function() {
				if (this.isPlaying) for (var c = this._instances.length,
				a = 0; a < c; a++) this._instances[a].reverse()
			};
			a.end = function(c) {
				void 0 === c && (c = null);
				if (c) c.end();
				else for (c = this._instances.length - 1; 0 <= c; c--) {
					var a = this._instances[c];
					a && a.end()
				}
			};
			a._effectStartHandler = function(c) {
				this.dispatchEvent(c)
			};
			a._effectStopHandler = function(c) {
				this.dispatchEvent(c);
				this.effectStopped = !0
			};
			a._effectEndHandler = function(c) {
				this.deleteInstance(c.effectInstance);
				this.dispatchEvent(c)
			};
			return b
		} (e.EventDispatcher);
		f.Effect = g;
		g.prototype.__class__ = "egret.gui.Effect"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function(d) {
			function b(c) {
				void 0 === c && (c = null);
				d.call(this, c);
				this._children = [];
				this.instanceClass = e.CompositeEffectInstance
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "children", {
				get: function() {
					return this._children
				},
				set: function(c) {
					var a = 0;
					if (this._children) for (a = 0; a < this._children.length; ++a) this._children[a] && (this._children[a]._parentCompositeEffect = null);
					if (this._children = c) for (a = 0; a < this._children.length; ++a) this._children[a] && (this._children[a]._parentCompositeEffect = this)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "compositeDuration", {
				get: function() {
					return this.duration
				},
				enumerable: !0,
				configurable: !0
			});
			a.createInstance = function(c) {
				void 0 === c && (c = null);
				this.childTargets || (this.childTargets = [c]);
				c = d.prototype.createInstance.call(this, c);
				this.childTargets = null;
				return c
			};
			a.createInstances = function(c) {
				void 0 === c && (c = null);
				c || (c = this.targets);
				this.childTargets = c;
				c = this.createInstance();
				this.childTargets = null;
				return c ? [c] : []
			};
			a._initInstance = function(c) {
				d.prototype._initInstance.call(this, c);
				var a = this.childTargets;
				a instanceof Array || (a = [a]);
				if (this.children) for (var b = this.children.length,
				e = 0; e < b; e++) {
					var f = this.children[e];
					0 == f.targets.length ? c.addChildSet(this.children[e].createInstances(a)) : c.addChildSet(this.children[e].createInstances(f.targets))
				}
			};
			a.addChild = function(c) {
				this.children.push(c);
				c._parentCompositeEffect = this
			};
			return b
		} (e.Effect);
		e.CompositeEffect = g;
		g.prototype.__class__ = "egret.gui.CompositeEffect"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			function d() {}
			d.END = "end";
			d.STOP = "stop";
			return d
		} ();
		e.InterruptionBehavior = g;
		g.prototype.__class__ = "egret.gui.InterruptionBehavior"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			return function() {
				this.toState = this.fromState = "*";
				this.autoReverse = !1;
				this.interruptionBehavior = e.InterruptionBehavior.END
			}
		} ();
		e.Transition = g;
		g.prototype.__class__ = "egret.gui.Transition"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(c, a) {
				void 0 === a && (a = !0);
				d.call(this);
				this.scale9Grid = null;
				this.fillMode = "scale";
				this.sourceChanged = !1;
				this._content = this._source = null;
				this.contentReused = this.createChildrenCalled = this._contentIsTexture = !1;
				this.autoScale = !0;
				this.touchChildren = !1;
				c && (this.source = c);
				this.autoScale = a
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "source", {
				get: function() {
					return this._source
				},
				set: function(c) {
					this._source != c && (this._source = c, this.createChildrenCalled ? this.parseSource() : this.sourceChanged = !0, this._setSizeDirty())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "content", {
				get: function() {
					return this._content
				},
				enumerable: !0,
				configurable: !0
			});
			a.createChildren = function() {
				d.prototype.createChildren.call(this);
				this.sourceChanged && this.parseSource();
				this.createChildrenCalled = !0
			};
			a.parseSource = function() {
				this.sourceChanged = !1;
				var c = b.assetAdapter;
				c || (c = this.getAdapter());
				if (this._source) {
					var a = this.contentReused ? null: this._content;
					this.contentReused = !0;
					c.getAsset(this._source, this.contentChanged, this, a)
				} else this.contentChanged(null, null)
			};
			a.getAdapter = function() {
				var c;
				try {
					c = e.Injector.getInstance("egret.gui.IAssetAdapter")
				} catch(a) {
					c = new f.DefaultAssetAdapter
				}
				return b.assetAdapter = c
			};
			a.contentChanged = function(c, a) {
				if (a === this._source) {
					var b = this._content;
					this._content = c;
					this._content instanceof e.Texture ? (this._texture_to_render = c, this._contentIsTexture = !0) : (this._texture_to_render = null, this._contentIsTexture = !1);
					b !== c && (b instanceof e.DisplayObject && b.parent == this && (b._sizeChangeCallBack = null, b._sizeChangeCallTarget = null, this._removeFromDisplayList(b)), c instanceof e.DisplayObject && (c._sizeChangeCallBack = this.invalidateSize, c._sizeChangeCallTarget = this, this._addToDisplayListAt(c, 0)));
					this.invalidateSize();
					this.invalidateDisplayList();
					this.contentReused = !1;
					this.hasEventListener(f.UIEvent.CONTENT_CHANGED) && f.UIEvent.dispatchUIEvent(this, f.UIEvent.CONTENT_CHANGED)
				}
			};
			a.measure = function() {
				d.prototype.measure.call(this);
				var c = this._content;
				if (c instanceof e.DisplayObject) if ("preferredWidth" in c) this.measuredWidth = c.preferredWidth,
				this.measuredHeight = c.preferredHeight;
				else {
					var a = c.explicitWidth,
					b = c.explicitHeight;
					c.width = NaN;
					c.height = NaN;
					this.measuredWidth = c.measuredWidth * c.scaleX;
					this.measuredHeight = c.measuredHeight * c.scaleY;
					c.width = a;
					c.height = b
				} else this._contentIsTexture && (this.measuredWidth = c._textureWidth, this.measuredHeight = c._textureHeight)
			};
			a.updateDisplayList = function(c, a) {
				d.prototype.updateDisplayList.call(this, c, a);
				var b = this._content;
				this.autoScale && b instanceof e.DisplayObject && ("setLayoutBoundsSize" in b ? b.setLayoutBoundsSize(c, a) : (b.width = c / b.scaleX, b.height = a / b.scaleY));
				this._setSizeDirty()
			};
			a._render = function(c) {
				if (this._contentIsTexture) {
					var a = this._content,
					b, f;
					this.autoScale ? (b = this._UIC_Props_._width, f = this._UIC_Props_._height) : (b = a._textureWidth, f = a._textureHeight);
					this._texture_to_render = a;
					e.Bitmap._drawBitmap(c, b, f, this)
				}
				d.prototype._render.call(this, c)
			};
			a._measureBounds = function() {
				if (this._contentIsTexture) {
					var c = this._content,
					a = this.width,
					b = this.height;
					return e.Rectangle.identity.initialize(Math.floor(c._offsetX * a / c._textureWidth), Math.floor(c._offsetY * b / c._textureHeight), a, b)
				}
				return d.prototype._measureBounds.call(this)
			};
			a.addChild = function(c) {
				throw Error(e.getString(3004, e.getString(3003)));
			};
			a.addChildAt = function(c, a) {
				throw Error(e.getString(3005, e.getString(3003)));
			};
			a.removeChild = function(c) {
				throw Error(e.getString(3006, e.getString(3003)));
			};
			a.removeChildAt = function(c) {
				throw Error(e.getString(3007, e.getString(3003)));
			};
			a.setChildIndex = function(c, a) {
				throw Error(e.getString(3008, e.getString(3003)));
			};
			a.swapChildren = function(c, a) {
				throw Error(e.getString(3009, e.getString(3003)));
			};
			a.swapChildrenAt = function(c, a) {
				throw Error(e.getString(3010, e.getString(3003)));
			};
			b.assetAdapter = null;
			return b
		} (f.UIComponent);
		f.UIAsset = g;
		g.prototype.__class__ = "egret.gui.UIAsset"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this.hostComponentKey = null;
				this._skinNameExplicitlySet = !1;
				this._skinName = null;
				this._createChildrenCalled = !1;
				this._skin = null;
				this.stateIsDirty = this.skinLayoutEnabled = !1;
				this.explicitMouseEnabled = this.explicitMouseChildren = this._autoMouseEnabled = !0
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "skinName", {
				get: function() {
					return this._skinName
				},
				set: function(c) {
					this._skinName != c && (this._skinName = c, this._skinNameExplicitlySet = !0, this._createChildrenCalled && this.parseSkinName())
				},
				enumerable: !0,
				configurable: !0
			});
			a.createChildren = function() {
				d.prototype.createChildren.call(this);
				this.parseSkinName();
				this._createChildrenCalled = !0
			};
			a.parseSkinName = function() {
				var c = b.skinAdapter;
				c || (c = this.getSkinAdapter());
				var a = this.hostComponentKey || e.getQualifiedClassName(this),
				c = c.getSkin(this._skinName, a);
				c || (a = b._defaultTheme) && (c = a.getDefaultSkin(this));
				this._setSkin(c)
			};
			a.getSkinAdapter = function() {
				var c;
				try {
					c = e.Injector.getInstance("egret.gui.ISkinAdapter")
				} catch(a) {
					c = new f.DefaultSkinAdapter
				}
				return b.skinAdapter = c
			};
			Object.defineProperty(a, "skin", {
				get: function() {
					return this._skin
				},
				enumerable: !0,
				configurable: !0
			});
			a._setSkin = function(c) {
				var a = this._skin;
				this.detachSkin(a);
				a instanceof e.DisplayObject && this._removeFromDisplayList(a);
				this._skin = c;
				c instanceof e.DisplayObject && this._addToDisplayListAt(this._skin, 0);
				this.attachSkin(c);
				this.invalidateSkinState();
				this.invalidateSize();
				this.invalidateDisplayList();
				this.hasEventListener(f.UIEvent.SKIN_CHANGED) && f.UIEvent.dispatchUIEvent(this, f.UIEvent.SKIN_CHANGED)
			};
			a.attachSkin = function(c) {
				this.skinLayoutEnabled = !c || c instanceof e.DisplayObject ? !1 : !0;
				c && "hostComponent" in c && (c.hostComponent = this, this.findSkinParts())
			};
			a.findSkinParts = function() {
				var c = this._skin;
				if (c && "skinParts" in c) for (var a = c.skinParts,
				b = a.length,
				d = 0; d < b; d++) {
					var e = a[d];
					if (e in c) try {
						this[e] = c[e],
						this.partAdded(e, c[e])
					} catch(f) {}
				}
			};
			a.detachSkin = function(c) {
				if (c) {
					if ("skinParts" in c) for (var a = c.skinParts,
					b = a.length,
					d = 0; d < b; d++) {
						var e = a[d];
						e in this && (null != this[e] && this.partRemoved(e, this[e]), this[e] = null)
					}
					c.hostComponent = null
				}
			};
			a.partAdded = function(c, a) {
				f.SkinPartEvent.dispatchSkinPartEvent(this, f.SkinPartEvent.PART_ADDED, c, a)
			};
			a.partRemoved = function(c, a) {
				f.SkinPartEvent.dispatchSkinPartEvent(this, f.SkinPartEvent.PART_REMOVED, c, a)
			};
			a.invalidateSkinState = function() {
				this.stateIsDirty || (this.stateIsDirty = !0, this.invalidateProperties())
			};
			a.validateSkinState = function() {
				var c = this.getCurrentSkinState(),
				a = this._skin;
				a && "currentState" in a && (a.currentState = c);
				this.hasEventListener("stateChanged") && this.dispatchEventWith("stateChanged")
			};
			Object.defineProperty(a, "autoTouchEnabled", {
				get: function() {
					return this._autoMouseEnabled
				},
				set: function(c) {
					this._autoMouseEnabled != c && ((this._autoMouseEnabled = c) ? (this._touchChildren = this.enabled ? this.explicitMouseChildren: !1, this._DO_Props_._touchEnabled = this.enabled ? this.explicitMouseEnabled: !1) : (this._touchChildren = this.explicitMouseChildren, this._DO_Props_._touchEnabled = this.explicitMouseEnabled))
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "touchChildren", {
				get: function() {
					return this._touchChildren
				},
				set: function(c) {
					this.enabled && (this._touchChildren = c);
					this.explicitMouseChildren = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "touchEnabled", {
				get: function() {
					return this._DO_Props_._touchEnabled
				},
				set: function(c) {
					this.enabled && (this._DO_Props_._touchEnabled = c);
					this.explicitMouseEnabled = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "enabled", {
				get: function() {
					return this._UIC_Props_._enabled
				},
				set: function(c) {
					this._setEnabled(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setEnabled = function(c) {
				this._UIC_Props_._enabled != c && (this._UIC_Props_._enabled = c, this._autoMouseEnabled && (this._touchChildren = c ? this.explicitMouseChildren: !1, this._DO_Props_._touchEnabled = c ? this.explicitMouseEnabled: !1), this.invalidateSkinState())
			};
			a.getCurrentSkinState = function() {
				return this.enabled ? "normal": "disabled"
			};
			a.commitProperties = function() {
				d.prototype.commitProperties.call(this);
				this.stateIsDirty && (this.stateIsDirty = !1, this.validateSkinState())
			};
			a._childXYChanged = function() {
				this.skinLayoutEnabled && (this.invalidateSize(), this.invalidateDisplayList())
			};
			a.measure = function() {
				d.prototype.measure.call(this);
				var c = this._skin;
				c && (this.skinLayoutEnabled ? (c.measure(), this.measuredWidth = c.preferredWidth, this.measuredHeight = c.preferredHeight) : "preferredWidth" in c ? (this.measuredWidth = c.preferredWidth, this.measuredHeight = c.preferredHeight) : (this.measuredWidth = c.width, this.measuredHeight = c.height))
			};
			a.updateDisplayList = function(c, a) {
				d.prototype.updateDisplayList.call(this, c, a);
				var b = this._skin;
				b && (this.skinLayoutEnabled ? b.updateDisplayList(c, a) : "setLayoutBoundsSize" in b ? b.setLayoutBoundsSize(c, a) : b instanceof e.DisplayObject && (b.scaleX = 0 == b.width ? 1 : c / b.width, b.scaleY = 0 == b.height ? 1 : a / b.height))
			};
			a.addChild = function(c) {
				throw Error(e.getString(3004, e.getString(3003)));
			};
			a.addChildAt = function(c, a) {
				throw Error(e.getString(3005, e.getString(3003)));
			};
			a.removeChild = function(c) {
				throw Error(e.getString(3006, e.getString(3003)));
			};
			a.removeChildAt = function(c) {
				throw Error(e.getString(3007, e.getString(3003)));
			};
			a.setChildIndex = function(c, a) {
				throw Error(e.getString(3008, e.getString(3003)));
			};
			a.swapChildren = function(c, a) {
				throw Error(e.getString(3009, e.getString(3003)));
			};
			a.swapChildrenAt = function(c, a) {
				throw Error(e.getString(3010, e.getString(3003)));
			};
			b.skinAdapter = null;
			b._defaultTheme = null;
			return b
		} (f.UIComponent);
		f.SkinnableComponent = g;
		g.prototype.__class__ = "egret.gui.SkinnableComponent"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function() {
			function d() {}
			d.prototype.getSkin = function(b, a) {
				if (!b) return null;
				if (b.prototype) return new b;
				if ("string" == typeof b) {
					var c = e.getDefinitionByName(b);
					return c ? new c: null
				}
				return b
			};
			return d
		} ();
		f.DefaultSkinAdapter = g;
		g.prototype.__class__ = "egret.gui.DefaultSkinAdapter"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function() {
			function d() {}
			d.prototype.getAsset = function(b, a, c, d) {
				var f = b;
				b.prototype && (f = new b);
				if (f instanceof e.DisplayObject || f instanceof e.Texture) a.call(c, f, b);
				else if ("string" == typeof b) {
					var g = new e.URLLoader;
					g.dataFormat = e.URLLoaderDataFormat.TEXTURE;
					g.addEventListener(e.Event.COMPLETE,
					function(d) {
						f = g.data;
						a.call(c, f, b)
					},
					this);
					g.load(new e.URLRequest(b))
				} else a.call(c, f, b)
			};
			return d
		} ();
		f.DefaultAssetAdapter = g;
		g.prototype.__class__ = "egret.gui.DefaultAssetAdapter"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function() {
			function d(a) {
				this.skinMap = {};
				this.delyList = [];
				this.loadConfig(a)
			}
			var b = d.prototype;
			d.load = function(a) {
				this.initialized || (this.initialized = !0, f.SkinnableComponent._defaultTheme = new d(a))
			};
			b.loadConfig = function(a) {
				var c = new e.URLLoader;
				console.log(c);
				c.addEventListener(e.Event.COMPLETE, this.onLoadComplete, this);
				c.addEventListener(e.IOErrorEvent.IO_ERROR, this.onLoadError, this);
				c.dataFormat = e.URLLoaderDataFormat.TEXT;
				c.load(new e.URLRequest(a))
			};
			b.onLoadComplete = function(a) {
				a = a.target;
				try {
					this.skinMap = JSON.parse(a.data).skins
				} catch(c) {
					e.Logger.warningWithErrorId(1017, a._request.url, a.data)
				}
				this.handleDelyList()
			};
			b.onLoadError = function(a) {
				e.Logger.warningWithErrorId(3E3, a.target._request.url);
				this.handleDelyList()
			};
			b.handleDelyList = function() {
				if (this.skinMap) {
					var a = this.delyList;
					this.delyList = [];
					for (var c = a.length,
					b = 0; b < c; b++) {
						var d = a[b];
						if (!d._skin) {
							var e = this.getDefaultSkin(d);
							d._setSkin(e)
						}
					}
				} else this.skinMap = {},
				this.delyList = []
			};
			b.getDefaultSkin = function(a) {
				var c = this.skinMap;
				if (!c) return - 1 == this.delyList.indexOf(a) && this.delyList.push(a),
				null;
				var b, d = a.hostComponentKey;
				if (d) b = c[d];
				else for (; a;) {
					d = e.getQualifiedClassName(a);
					if (b = c[d]) break;
					a = e.getDefinitionByName(e.getQualifiedSuperclassName(a))
				}
				if (!b) return null;
				c = e.getDefinitionByName(b);
				return c ? new c: (e.Logger.warningWithErrorId(3001, b), null)
			};
			d.initialized = !1;
			return d
		} ();
		f.Theme = g;
		g.prototype.__class__ = "egret.gui.Theme"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._target = null
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "target", {
				get: function() {
					return this._target
				},
				set: function(c) {
					this._target = c
				},
				enumerable: !0,
				configurable: !0
			});
			a.measure = function() {
				if (null != this.target) {
					for (var c = 0,
					a = 0,
					b = this._target,
					d = b.numElements,
					e = 0; e < d; e++) {
						var f = b.getElementAt(e);
						if (f && f.includeInLayout) {
							var g = f.horizontalCenter,
							m = f.verticalCenter,
							l = f.left,
							q = f.right,
							t = f.top,
							s = f.bottom;
							isNaN(l) || isNaN(q) ? isNaN(g) ? isNaN(l) && isNaN(q) ? g = f.preferredX: (g = isNaN(l) ? 0 : l, g += isNaN(q) ? 0 : q) : g = 2 * Math.abs(g) : g = l + q;
							isNaN(t) || isNaN(s) ? isNaN(m) ? isNaN(t) && isNaN(s) ? m = f.preferredY: (m = isNaN(t) ? 0 : t, m += isNaN(s) ? 0 : s) : m = 2 * Math.abs(m) : m = t + s;
							s = f.preferredHeight;
							c = Math.ceil(Math.max(c, g + f.preferredWidth));
							a = Math.ceil(Math.max(a, m + s))
						}
					}
					this.target.measuredWidth = c;
					this.target.measuredHeight = a
				}
			};
			a.updateDisplayList = function(c, a) {
				if (null != this.target) for (var b = this.target.numElements,
				d = 0; d < b; d++) {
					var e = this.target.getElementAt(d);
					if (null != e && e.includeInLayout) {
						var f = e.horizontalCenter,
						g = e.verticalCenter,
						m = e.left,
						l = e.right,
						q = e.top,
						t = e.bottom,
						s = e.percentWidth,
						B = e.percentHeight,
						z = NaN,
						r = NaN;
						isNaN(m) || isNaN(l) ? isNaN(s) || (z = Math.round(c * Math.min(0.01 * s, 1))) : z = c - l - m;
						isNaN(q) || isNaN(t) ? isNaN(B) || (r = Math.round(a * Math.min(0.01 * B, 1))) : r = a - t - q;
						e.setLayoutBoundsSize(z, r);
						s = e.layoutBoundsWidth;
						B = e.layoutBoundsHeight;
						r = z = NaN;
						z = isNaN(f) ? isNaN(m) ? isNaN(l) ? e.layoutBoundsX: c - s - l: m: Math.round((c - s) / 2 + f);
						r = isNaN(g) ? isNaN(q) ? isNaN(t) ? e.layoutBoundsY: a - B - t: q: Math.round((a - B) / 2 + g);
						e.setLayoutBoundsPosition(z, r)
					}
				}
			};
			return b
		} (e.HashObject);
		f.SkinBasicLayout = g;
		g.prototype.__class__ = "egret.gui.SkinBasicLayout"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._downEventFired = !1;
				this.labelDisplay = this.autoRepeatTimer = null;
				this._autoRepeat = !1;
				this._repeatInterval = this._repeatDelay = 35;
				this._keepDown = this._hovered = !1;
				this._label = "";
				this.touchChildren = this._stickyHighlighting = this._mouseCaptured = !1;
				this.addHandlers()
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "autoRepeat", {
				get: function() {
					return this._autoRepeat
				},
				set: function(c) {
					c != this._autoRepeat && (this._autoRepeat = c, this.checkAutoRepeatTimerConditions(this.isDown()))
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "repeatDelay", {
				get: function() {
					return this._repeatDelay
				},
				set: function(c) {
					this._repeatDelay = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "repeatInterval", {
				get: function() {
					return this._repeatInterval
				},
				set: function(c) {
					this._repeatInterval = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "hovered", {
				get: function() {
					return this._hovered
				},
				set: function(c) {
					c != this._hovered && (this._hovered = c, this.invalidateSkinState(), this.checkButtonDownConditions())
				},
				enumerable: !0,
				configurable: !0
			});
			a._setKeepDown = function(c) {
				this._keepDown != c && (this._keepDown = c, this.invalidateSkinState())
			};
			Object.defineProperty(a, "label", {
				get: function() {
					return this._getLabel()
				},
				set: function(c) {
					this._setLabel(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._getLabel = function() {
				return this.labelDisplay ? this.labelDisplay.text: this._label
			};
			a._setLabel = function(c) {
				this._label = c;
				this.labelDisplay && (this.labelDisplay.text = c)
			};
			Object.defineProperty(a, "mouseCaptured", {
				get: function() {
					return this._mouseCaptured
				},
				set: function(c) {
					c != this._mouseCaptured && (this._mouseCaptured = c, this.invalidateSkinState(), c || this.removeStageMouseHandlers(), this.checkButtonDownConditions())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "stickyHighlighting", {
				get: function() {
					return this._stickyHighlighting
				},
				set: function(c) {
					c != this._stickyHighlighting && (this._stickyHighlighting = c, this.invalidateSkinState(), this.checkButtonDownConditions())
				},
				enumerable: !0,
				configurable: !0
			});
			a.checkButtonDownConditions = function() {
				var c = this.isDown();
				this._downEventFired != c && (c && f.UIEvent.dispatchUIEvent(this, f.UIEvent.BUTTON_DOWN), this._downEventFired = c, this.checkAutoRepeatTimerConditions(c))
			};
			a.addHandlers = function() {
				this.addEventListener(e.TouchEvent.TOUCH_ROLL_OVER, this.mouseEventHandler, this);
				this.addEventListener(e.TouchEvent.TOUCH_ROLL_OUT, this.mouseEventHandler, this);
				this.addEventListener(e.TouchEvent.TOUCH_BEGIN, this.mouseEventHandler, this);
				this.addEventListener(e.TouchEvent.TOUCH_END, this.mouseEventHandler, this);
				this.addEventListener(e.TouchEvent.TOUCH_TAP, this.mouseEventHandler, this)
			};
			a.addStageMouseHandlers = function() {
				f.UIGlobals.stage.addEventListener(e.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this);
				f.UIGlobals.stage.addEventListener(e.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this)
			};
			a.removeStageMouseHandlers = function() {
				f.UIGlobals.stage.removeEventListener(e.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this);
				f.UIGlobals.stage.removeEventListener(e.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this)
			};
			a.isDown = function() {
				return this.enabled ? this.mouseCaptured && (this.hovered || this.stickyHighlighting) ? !0 : !1 : !1
			};
			a.checkAutoRepeatTimerConditions = function(c) {
				c = this.autoRepeat && c;
				c != (null != this.autoRepeatTimer) && (c ? this.startTimer() : this.stopTimer())
			};
			a.startTimer = function() {
				this.autoRepeatTimer = new e.Timer(1);
				this.autoRepeatTimer.delay = this._repeatDelay;
				this.autoRepeatTimer.addEventListener(e.TimerEvent.TIMER, this.autoRepeat_timerDelayHandler, this);
				this.autoRepeatTimer.start()
			};
			a.stopTimer = function() {
				this.autoRepeatTimer.stop();
				this.autoRepeatTimer = null
			};
			a.mouseEventHandler = function(c) {
				switch (c.type) {
					case e.TouchEvent.TOUCH_ROLL_OVER:
						if (c.touchDown && !this.mouseCaptured) break;
						this.hovered = !0;
						break;
					case e.TouchEvent.TOUCH_ROLL_OUT:
						this.hovered = !1;
						break;
					case e.TouchEvent.TOUCH_BEGIN:
						this.addStageMouseHandlers();
						e.InteractionMode.mode == e.InteractionMode.TOUCH && (this.hovered = !0);
						this.mouseCaptured = !0;
						break;
					case e.TouchEvent.TOUCH_END:
						c.target == this && (this.hovered = !0, this.mouseCaptured && (this.buttonReleased(), this.mouseCaptured = !1));
						break;
					case e.TouchEvent.TOUCH_TAP:
						this.enabled ? this.clickHandler(c) : c.stopImmediatePropagation()
					}
			};
			a.buttonReleased = function() {};
			a.clickHandler = function(c) {/*console.log('按钮点击')*/};
			a.stage_mouseUpHandler = function(c) {
				c.target != this && (this.mouseCaptured = !1)
			};
			a.autoRepeat_timerDelayHandler = function(c) {
				this.autoRepeatTimer.reset();
				this.autoRepeatTimer.removeEventListener(e.TimerEvent.TIMER, this.autoRepeat_timerDelayHandler, this);
				this.autoRepeatTimer.delay = this._repeatInterval;
				this.autoRepeatTimer.addEventListener(e.TimerEvent.TIMER, this.autoRepeat_timerHandler, this);
				this.autoRepeatTimer.start()
			};
			a.autoRepeat_timerHandler = function(c) {
				f.UIEvent.dispatchUIEvent(this, f.UIEvent.BUTTON_DOWN)
			};
			a.getCurrentSkinState = function() {
				return this.enabled ? this.isDown() || this._keepDown ? "down": e.InteractionMode.mode == e.InteractionMode.MOUSE && (this.hovered || this.mouseCaptured) ? "over": "up": d.prototype.getCurrentSkinState.call(this)
			};
			a.partAdded = function(c, a) {
				d.prototype.partAdded.call(this, c, a);
				a == this.labelDisplay && (this.labelDisplay.text = this._label)
			};
			return b
		} (f.SkinnableComponent);
		f.ButtonBase = g;
		g.prototype.__class__ = "egret.gui.ButtonBase"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._selected = !1;
				this._autoSelected = !0
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "selected", {
				get: function() {
					return this._selected
				},
				set: function(c) {
					this._setSelected(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setSelected = function(c) {
				c != this._selected && (this._selected = c, f.UIEvent.dispatchUIEvent(this, f.UIEvent.VALUE_COMMIT), this.invalidateSkinState())
			};
			a.getCurrentSkinState = function() {
				var c = d.prototype.getCurrentSkinState.call(this);
				if (this.selected) {
					var a = c + "AndSelected",
					b = this.skin;
					return b && b.hasState(a) ? a: "disabled" == c ? "disabled": "down"
				}
				return c
			};
			a.buttonReleased = function() {
				d.prototype.buttonReleased.call(this);
				this._autoSelected && this.enabled && (this.selected = !this.selected, this.dispatchEventWith(e.Event.CHANGE))
			};
			return b
		} (f.ButtonBase);
		f.ToggleButtonBase = g;
		g.prototype.__class__ = "egret.gui.ToggleButtonBase"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._textField = null;
				this.fontFamilyChanged = this.allStyleChanged = !1;
				this._fontFamily = "SimSun";
				this._sizeChanged = !1;
				this._size = 30;
				this._focusEnabled = !0;
				this.textAlignChanged = this._italic = this.italicChanged = this._bold = this.boldChanged = !1;
				this._textAlign = e.HorizontalAlign.LEFT;
				this.verticalAlignChanged = !1;
				this._verticalAlign = e.VerticalAlign.TOP;
				this.lineSpacingChanged = !1;
				this._lineSpacing = 0;
				this.textColorChanged = !1;
				this._textColor = 16777215;
				this._textChanged = !1;
				this._text = "";
				this._textFlow = null;
				this._textFlowChanged = !1;
				this._UIC_Props_._hasNoStyleChild = !0
			}
			__extends(b, d);
			var a = b.prototype;
			a.styleChanged = function(c) {
				if (!this.allStyleChanged) {
					if (c) switch (c) {
					case "textColor":
						this.textColorChanged = !0;
						break;
					case "fontFamily":
						this.fontFamilyChanged = !0;
						break;
					case "size":
						this._sizeChanged = !0;
						break;
					case "bold":
						this.boldChanged = !0;
						break;
					case "italic":
						this.italicChanged = !0;
						break;
					case "textAlign":
						this.textAlignChanged = !0;
						break;
					case "verticalAlign":
						this.verticalAlignChanged = !0
					} else this.allStyleChanged = !0;
					this.invalidateProperties();
					this.invalidateSize();
					this.invalidateDisplayList()
				}
			};
			Object.defineProperty(a, "fontFamily", {
				get: function() {
					var c = this._UIC_Props_._styleProtoChain;
					return c && void 0 !== c.fontFamily ? c.fontFamily: this._fontFamily
				},
				set: function(c) {
					this.setStyle("fontFamily", c)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "size", {
				get: function() {
					var c = this._UIC_Props_._styleProtoChain;
					return c && void 0 !== c.size ? c.size: this._size
				},
				set: function(c) {
					void 0 === c && (c = 0);
					this.setStyle("size", c)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "focusEnabled", {
				get: function() {
					return this._focusEnabled
				},
				set: function(c) {
					this._focusEnabled = c
				},
				enumerable: !0,
				configurable: !0
			});
			a.setFocus = function() { ! 1 != this._focusEnabled && this._textField && this._textField.setFocus()
			};
			Object.defineProperty(a, "bold", {
				get: function() {
					var c = this._UIC_Props_._styleProtoChain;
					return c && void 0 !== c.bold ? c.bold: this._bold
				},
				set: function(c) {
					this.setStyle("bold", c)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "italic", {
				get: function() {
					var c = this._UIC_Props_._styleProtoChain;
					return c && void 0 !== c.italic ? c.italic: this._italic
				},
				set: function(c) {
					this.setStyle("italic", c)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "textAlign", {
				get: function() {
					var c = this._UIC_Props_._styleProtoChain;
					return c && void 0 !== c.textAlign ? c.textAlign: this._textAlign
				},
				set: function(c) {
					this.setStyle("textAlign", c)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "verticalAlign", {
				get: function() {
					var c = this._UIC_Props_._styleProtoChain;
					return c && void 0 !== c.verticalAlign ? c.verticalAlign: this._verticalAlign
				},
				set: function(c) {
					this.setStyle("verticalAlign", c)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "lineSpacing", {
				get: function() {
					return this._getLineSpacing()
				},
				set: function(c) {
					this._setLineSpacing(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._getLineSpacing = function() {
				return this._lineSpacing
			};
			a._setLineSpacing = function(c) {
				this._lineSpacing != c && (this._lineSpacing = c, this.lineSpacingChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
			};
			Object.defineProperty(a, "textColor", {
				get: function() {
					var c = this._UIC_Props_._styleProtoChain;
					return c && void 0 !== c.textColor ? c.textColor: this._textColor
				},
				set: function(c) {
					this.setStyle("textColor", c)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "text", {
				get: function() {
					return this._text
				},
				set: function(c) {
					c != this._text && (this._text = c || "", this._textChanged = !0, this._textFlowChanged = !1, this._textFlow = [], this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "textFlow", {
				get: function() {
					return this._textFlow
				},
				set: function(c) {
					this._textFlow = c || [];
					this._textFlowChanged = !0;
					this._textChanged = !1;
					this._text = "";
					this.invalidateProperties();
					this.invalidateSize();
					this.invalidateDisplayList()
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "textHeight", {
				get: function() {
					return null == this._textField ? 0 : this._textField.textHeight
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "textWidth", {
				get: function() {
					return null == this._textField ? 0 : this._textField.textWidth
				},
				enumerable: !0,
				configurable: !0
			});
			a.createChildren = function() {
				d.prototype.createChildren.call(this);
				this._textField || this.checkTextField()
			};
			a.commitProperties = function() {
				d.prototype.commitProperties.call(this);
				this._textField || this.checkTextField();
				this.allStyleChanged && (this.allStyleChanged = !1, this.verticalAlignChanged = this.textAlignChanged = this.italicChanged = this.boldChanged = this._sizeChanged = this.fontFamilyChanged = this.textColorChanged = !0);
				this.fontFamilyChanged && (this._textField.fontFamily = this.fontFamily, this.fontFamilyChanged = !1);
				this._sizeChanged && (this._textField.size = this.size, this._sizeChanged = !1);
				this.boldChanged && (this._textField.bold = this.bold, this.boldChanged = !1);
				this.italic && (this._textField.italic = this.italic, this.italicChanged = !1);
				this.textAlignChanged && (this._textField.textAlign = this.textAlign, this.textAlignChanged = !1);
				this.verticalAlignChanged && (this._textField.verticalAlign = this.verticalAlign, this.verticalAlignChanged = !1);
				this.lineSpacingChanged && (this._textField.lineSpacing = this._lineSpacing, this.lineSpacingChanged = !1);
				this.textColorChanged && (this._textField.textColor = this.textColor, this.textColorChanged = !1);
				this._textChanged && (this._textField.text = this._text);
				this._textFlowChanged && (this._textField.textFlow = this._textFlow);
				if (this._textChanged || this._textFlowChanged) this._text = this._textField.text,
				this._textFlow = this._textField.textFlow,
				this._textFlowChanged = this._textChanged = !1
			};
			a.checkTextField = function() {
				this._textField || (this._createTextField(), this._textChanged && (this._textField.text = this._text), this._textFlowChanged && (this._textField.textFlow = this._textFlow), this.invalidateProperties())
			};
			a._createTextField = function() {
				this._textField = new e.TextField;
				this._textField.fontFamily = this.fontFamily;
				this._textField.size = this.size;
				this._textField.textAlign = this.textAlign;
				this._textField.verticalAlign = this.verticalAlign;
				this._textField.lineSpacing = this._lineSpacing;
				this._textField.textColor = this.textColor;
				this._textField.multiline = !0;
				this._addToDisplayList(this._textField)
			};
			a._textFieldChanged = function() {
				this._text = this._textField.text;
				this._textFlow = this._textField.textFlow
			};
			a.measure = function() {
				d.prototype.measure.call(this);
				this.measuredWidth = b.DEFAULT_MEASURED_WIDTH;
				this.measuredHeight = b.DEFAULT_MEASURED_HEIGHT
			};
			a.$updateDisplayList = function(c, a) {
				d.prototype.updateDisplayList.call(this, c, a)
			};
			a.updateDisplayList = function(c, a) {
				d.prototype.updateDisplayList.call(this, c, a);
				this._textField.width = c;
				this._textField.height = a
			};
			a.dispatchPropertyChangeEvent = function(c, a, b) {
				this.hasEventListener("propertyChange") && f.PropertyChangeEvent.dispatchPropertyChangeEvent(this, f.PropertyChangeEventKind.UPDATE, c, a, b, this)
			};
			b.DEFAULT_MEASURED_WIDTH = 160;
			b.DEFAULT_MEASURED_HEIGHT = 22;
			return b
		} (f.UIComponent);
		f.TextBase = g;
		g.prototype.__class__ = "egret.gui.TextBase"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._contentHeight = this._contentWidth = 0;
				this._layout = null;
				this._clipAndEnableScrolling = !1;
				this._verticalScrollPosition = this._horizontalScrollPosition = 0;
				this.touchEnabled = this._layoutInvalidateSizeFlag = this._layoutInvalidateDisplayListFlag = !1
			}
			__extends(b, d);
			var a = b.prototype;
			a.createChildren = function() {
				d.prototype.createChildren.call(this);
				this._layout || (this.layout = new f.BasicLayout)
			};
			Object.defineProperty(a, "contentWidth", {
				get: function() {
					return this._contentWidth
				},
				enumerable: !0,
				configurable: !0
			});
			a.setContentWidth = function(c) {
				if (c != this._contentWidth) {
					var a = this._contentWidth;
					this._contentWidth = c;
					this.hasEventListener("propertyChange") && f.PropertyChangeEvent.dispatchPropertyChangeEvent(this, f.PropertyChangeEventKind.UPDATE, "contentWidth", a, c, this)
				}
			};
			Object.defineProperty(a, "contentHeight", {
				get: function() {
					return this._contentHeight
				},
				enumerable: !0,
				configurable: !0
			});
			a.setContentHeight = function(c) {
				if (c != this._contentHeight) {
					var a = this._contentHeight;
					this._contentHeight = c;
					this.hasEventListener("propertyChange") && f.PropertyChangeEvent.dispatchPropertyChangeEvent(this, f.PropertyChangeEventKind.UPDATE, "contentHeight", a, c, this)
				}
			};
			a.setContentSize = function(c, a) {
				if (c != this._contentWidth || a != this._contentHeight) this.setContentWidth(c),
				this.setContentHeight(a)
			};
			Object.defineProperty(a, "layout", {
				get: function() {
					return this._layout
				},
				set: function(c) {
					this._setLayout(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setLayout = function(c) {
				if (this._layout != c) {
					this._layout && (this._layout.target = null);
					if (this._layout = c) this._layout.target = this;
					this.invalidateSize();
					this.invalidateDisplayList();
					this.dispatchEventWith("layoutChanged")
				}
			};
			Object.defineProperty(a, "clipAndEnableScrolling", {
				get: function() {
					return this._clipAndEnableScrolling
				},
				set: function(c) {
					c != this._clipAndEnableScrolling && (this.scrollRect = (this._clipAndEnableScrolling = c) ? new e.Rectangle(this._horizontalScrollPosition, this._verticalScrollPosition, this.width, this.height) : null)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "horizontalScrollPosition", {
				get: function() {
					return this._horizontalScrollPosition
				},
				set: function(c) {
					if (c != this._horizontalScrollPosition) {
						var a = this._horizontalScrollPosition;
						this._horizontalScrollPosition = c;
						this.scrollPositionChanged();
						f.PropertyChangeEvent.dispatchPropertyChangeEvent(this, f.PropertyChangeEventKind.UPDATE, "horizontalScrollPosition", a, c, this)
					}
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "verticalScrollPosition", {
				get: function() {
					return this._verticalScrollPosition
				},
				set: function(c) {
					if (c != this._verticalScrollPosition) {
						var a = this._verticalScrollPosition;
						this._verticalScrollPosition = c;
						this.scrollPositionChanged();
						f.PropertyChangeEvent.dispatchPropertyChangeEvent(this, f.PropertyChangeEventKind.UPDATE, "verticalScrollPosition", a, c, this)
					}
				},
				enumerable: !0,
				configurable: !0
			});
			a.scrollPositionChanged = function() {
				this._clipAndEnableScrolling && (this.updateScrollRect(this.width, this.height), this._invalidateDisplayListExceptLayout(), this._layout && this._layout.scrollPositionChanged())
			};
			a.updateScrollRect = function(c, a) {
				var b = this._DO_Props_._scrollRect;
				this._clipAndEnableScrolling ? b ? (b.x = this._horizontalScrollPosition, b.y = this._verticalScrollPosition, b.width = c, b.height = a) : this._DO_Props_._scrollRect = new e.Rectangle(this._horizontalScrollPosition, this._verticalScrollPosition, c, a) : b && (this._DO_Props_._scrollRect = null)
			};
			a.measure = function() {
				this._layout && this._layoutInvalidateSizeFlag && (d.prototype.measure.call(this), this._layout.measure())
			};
			a._invalidateDisplayListExceptLayout = function() {
				d.prototype.invalidateDisplayList.call(this)
			};
			a.invalidateDisplayList = function() {
				d.prototype.invalidateDisplayList.call(this);
				this._layoutInvalidateDisplayListFlag = !0
			};
			a._childXYChanged = function() {
				this.invalidateSize();
				this.invalidateDisplayList()
			};
			a._invalidateSizeExceptLayout = function() {
				d.prototype.invalidateSize.call(this)
			};
			a.invalidateSize = function() {
				d.prototype.invalidateSize.call(this);
				this._layoutInvalidateSizeFlag = !0
			};
			a.updateDisplayList = function(c, a) {
				d.prototype.updateDisplayList.call(this, c, a);
				this._layoutInvalidateDisplayListFlag && this._layout && (this._layoutInvalidateDisplayListFlag = !1, this._layout.updateDisplayList(c, a), this.updateScrollRect(c, a))
			};
			Object.defineProperty(a, "numElements", {
				get: function() {
					return - 1
				},
				enumerable: !0,
				configurable: !0
			});
			a.getElementAt = function(c) {
				return null
			};
			a.getElementIndex = function(c) {
				return - 1
			};
			a.getElementIndicesInView = function() {
				var c = [],
				a;
				if (this.scrollRect) for (a = 0; a < this.numChildren; a++) {
					var b = this.getChildAt(a);
					if (b) {
						var d = new e.Rectangle;
						d.x = b.layoutBoundsX;
						d.y = b.layoutBoundsY;
						d.width = b.layoutBoundsWidth;
						d.height = b.layoutBoundsHeight;
						this.scrollRect.intersects(d) && c.push(a)
					}
				} else for (a = 0; a < this.numChildren; a++) c.push(a);
				return c
			};
			a.setVirtualElementIndicesInView = function(c, a) {};
			a.getVirtualElementAt = function(c) {
				return this.getElementAt(c)
			};
			return b
		} (f.UIComponent);
		f.GroupBase = g;
		g.prototype.__class__ = "egret.gui.GroupBase"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function(d) {
			function b() {
				d.call(this);
				this.dataChangedFlag = !1;
				this._data = null;
				this._selected = !1;
				this._itemIndex = -1;
				this.touchChildren = !0
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "data", {
				get: function() {
					return this._data
				},
				set: function(c) {
					this._data = c;
					this.initialized || this.parent ? (this.dataChangedFlag = !1, this.dataChanged()) : (this.dataChangedFlag = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			});
			a.dataChanged = function() {};
			Object.defineProperty(a, "selected", {
				get: function() {
					return this._selected
				},
				set: function(c) {
					this._selected != c && (this._selected = c, this.invalidateSkinState())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "itemIndex", {
				get: function() {
					return this._itemIndex
				},
				set: function(c) {
					this._itemIndex = c
				},
				enumerable: !0,
				configurable: !0
			});
			a.commitProperties = function() {
				d.prototype.commitProperties.call(this);
				this.dataChangedFlag && (this.dataChangedFlag = !1, this.dataChanged())
			};
			a.getCurrentSkinState = function() {
				return this._selected ? "down": d.prototype.getCurrentSkinState.call(this)
			};
			return b
		} (e.ButtonBase);
		e.ItemRenderer = g;
		g.prototype.__class__ = "egret.gui.ItemRenderer"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._maximum = 100;
				this.maxChanged = !1;
				this._minimum = 0;
				this.minChanged = !1;
				this._stepSize = 1;
				this.stepSizeChanged = !1;
				this._changedValue = this._value = 0;
				this.valueChanged = !1;
				this._snapInterval = 1;
				this._explicitSnapInterval = this.snapIntervalChanged = !1
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "maximum", {
				get: function() {
					return this._maximum
				},
				set: function(c) {
					this._setMaximun(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setMaximun = function(c) {
				c != this._maximum && (this._maximum = c, this.maxChanged = !0, this.invalidateProperties())
			};
			Object.defineProperty(a, "minimum", {
				get: function() {
					return this._minimum
				},
				set: function(c) {
					this._setMinimun(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setMinimun = function(c) {
				c != this._minimum && (this._minimum = c, this.minChanged = !0, this.invalidateProperties())
			};
			Object.defineProperty(a, "stepSize", {
				get: function() {
					return this._stepSize
				},
				set: function(c) {
					c != this._stepSize && (this._stepSize = c, this.stepSizeChanged = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "value", {
				get: function() {
					return this._getValue()
				},
				set: function(c) {
					this._setValue(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setValue = function(c) {
				c != this.value && (this._changedValue = c, this.valueChanged = !0, this.invalidateProperties())
			};
			a._getValue = function() {
				return this.valueChanged ? this._changedValue: this._value
			};
			Object.defineProperty(a, "snapInterval", {
				get: function() {
					return this._snapInterval
				},
				set: function(c) {
					this._explicitSnapInterval = !0;
					c != this._snapInterval && (isNaN(c) ? (this._snapInterval = 1, this._explicitSnapInterval = !1) : this._snapInterval = c, this.stepSizeChanged = this.snapIntervalChanged = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			});
			a.commitProperties = function() {
				d.prototype.commitProperties.call(this);
				this.minimum > this.maximum && (this.maxChanged ? this._maximum = this._minimum: this._minimum = this._maximum);
				if (this.valueChanged || this.maxChanged || this.minChanged || this.snapIntervalChanged) {
					var c = this.valueChanged ? this._changedValue: this._value;
					this.snapIntervalChanged = this.minChanged = this.maxChanged = this.valueChanged = !1;
					this.setValue(this.nearestValidValue(c, this.snapInterval))
				}
				this.stepSizeChanged && (this._explicitSnapInterval ? this._stepSize = this.nearestValidSize(this._stepSize) : (this._snapInterval = this._stepSize, this.setValue(this.nearestValidValue(this._value, this.snapInterval))), this.stepSizeChanged = !1)
			};
			a.nearestValidSize = function(c) {
				var a = this.snapInterval;
				if (0 == a) return c;
				c = Math.round(c / a) * a;
				return Math.abs(c) < a ? a: c
			};
			a.nearestValidValue = function(c, a) {
				if (0 == a) return Math.max(this.minimum, Math.min(this.maximum, c));
				var b = this.maximum - this.minimum,
				d = 1;
				c -= this.minimum;
				a != Math.round(a) && (d = (1 + a).toString().split("."), d = Math.pow(10, d[1].length), b *= d, c = Math.round(c * d), a = Math.round(a * d));
				var e = Math.max(0, Math.floor(c / a) * a),
				b = Math.min(b, Math.floor((c + a) / a) * a);
				return (c - e >= (b - e) / 2 ? b: e) / d + this.minimum
			};
			a.setValue = function(c) {
				this._value != c && (isNaN(c) && (c = 0), !isNaN(this.maximum) && !isNaN(this.minimum) && this.maximum > this.minimum ? this._value = Math.min(this.maximum, Math.max(this.minimum, c)) : this._value = c, this.valueChanged = !1, e.UIEvent.dispatchUIEvent(this, e.UIEvent.VALUE_COMMIT))
			};
			a.changeValueByStep = function(c) {
				void 0 === c && (c = !0);
				0 != this.stepSize && this.setValue(this.nearestValidValue(c ? this.value + this.stepSize: this.value - this.stepSize, this.snapInterval))
			};
			return b
		} (e.SkinnableComponent);
		e.Range = g;
		g.prototype.__class__ = "egret.gui.Range"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._slideDuration = 300;
				this.track = this.thumb = null;
				this._clickOffsetY = this._clickOffsetX = NaN;
				this.needUpdateValue = !1;
				this._moveStageY = this._moveStageX = NaN;
				this.mouseDownTarget = null;
				this.addEventListener(e.Event.ADDED_TO_STAGE, this.addedToStageHandler, this);
				this.addEventListener(e.TouchEvent.TOUCH_BEGIN, this.mouseDownHandler, this)
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "slideDuration", {
				get: function() {
					return this._slideDuration
				},
				set: function(c) {
					this._slideDuration = c
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "maximum", {
				get: function() {
					return this._maximum
				},
				set: function(c) {
					c != this._maximum && (this._setMaximun(c), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "minimum", {
				get: function() {
					return this._minimum
				},
				set: function(c) {
					c != this._minimum && (this._setMinimun(c), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "value", {
				get: function() {
					return this._getValue()
				},
				set: function(c) {
					c != this._getValue() && (this._setValue(c), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			a.setValue = function(c) {
				d.prototype.setValue.call(this, c);
				this.invalidateDisplayList()
			};
			a.pointToValue = function(c, a) {
				return this.minimum
			};
			a.changeValueByStep = function(c) {
				void 0 === c && (c = !0);
				var a = this.value;
				d.prototype.changeValueByStep.call(this, c);
				this.value != a && this.dispatchEventWith(e.Event.CHANGE)
			};
			a.partAdded = function(c, a) {
				d.prototype.partAdded.call(this, c, a);
				a == this.thumb ? (this.thumb.addEventListener(e.TouchEvent.TOUCH_BEGIN, this.thumb_mouseDownHandler, this), this.thumb.addEventListener(f.ResizeEvent.RESIZE, this.thumb_resizeHandler, this), this.thumb.addEventListener(f.UIEvent.UPDATE_COMPLETE, this.thumb_updateCompleteHandler, this), this.thumb.stickyHighlighting = !0) : a == this.track && (this.track.addEventListener(e.TouchEvent.TOUCH_BEGIN, this.track_mouseDownHandler, this), this.track.addEventListener(f.ResizeEvent.RESIZE, this.track_resizeHandler, this))
			};
			a.partRemoved = function(c, a) {
				d.prototype.partRemoved.call(this, c, a);
				a == this.thumb ? (this.thumb.removeEventListener(e.TouchEvent.TOUCH_BEGIN, this.thumb_mouseDownHandler, this), this.thumb.removeEventListener(f.ResizeEvent.RESIZE, this.thumb_resizeHandler, this), this.thumb.removeEventListener(f.UIEvent.UPDATE_COMPLETE, this.thumb_updateCompleteHandler, this)) : a == this.track && (this.track.removeEventListener(e.TouchEvent.TOUCH_BEGIN, this.track_mouseDownHandler, this), this.track.removeEventListener(f.ResizeEvent.RESIZE, this.track_resizeHandler, this))
			};
			a.updateDisplayList = function(c, a) {
				d.prototype.updateDisplayList.call(this, c, a);
				this.updateSkinDisplayList()
			};
			a.updateSkinDisplayList = function() {};
			a.addedToStageHandler = function(c) {
				this.updateSkinDisplayList()
			};
			a.track_resizeHandler = function(c) {
				this.updateSkinDisplayList()
			};
			a.thumb_resizeHandler = function(c) {
				this.updateSkinDisplayList()
			};
			a.thumb_updateCompleteHandler = function(c) {
				this.updateSkinDisplayList();
				this.thumb.removeEventListener(f.UIEvent.UPDATE_COMPLETE, this.thumb_updateCompleteHandler, this)
			};
			a.thumb_mouseDownHandler = function(c) {
				f.UIGlobals.stage.addEventListener(e.TouchEvent.TOUCH_MOVE, this.stage_mouseMoveHandler, this);
				f.UIGlobals.stage.addEventListener(e.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this);
				f.UIGlobals.stage.addEventListener(e.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this);
				this.addEventListener(e.Event.ENTER_FRAME, this.onEnterFrame, this);
				c = this.thumb.globalToLocal(c.stageX, c.stageY, e.Point.identity);
				this._clickOffsetX = c.x;
				this._clickOffsetY = c.y;
				f.TrackBaseEvent.dispatchTrackBaseEvent(this, f.TrackBaseEvent.THUMB_PRESS);
				f.UIEvent.dispatchUIEvent(this, f.UIEvent.CHANGE_START)
			};
			a.onEnterFrame = function(c) {
				this.needUpdateValue && this.track && (this.updateWhenMouseMove(), this.needUpdateValue = !1)
			};
			a.updateWhenMouseMove = function() {
				if (this.track) {
					var c = this.track.globalToLocal(this._moveStageX, this._moveStageY, e.Point.identity),
					c = this.pointToValue(c.x - this._clickOffsetX, c.y - this._clickOffsetY),
					c = this.nearestValidValue(c, this.snapInterval);
					c != this.value && (this.setValue(c), this.validateDisplayList(), f.TrackBaseEvent.dispatchTrackBaseEvent(this, f.TrackBaseEvent.THUMB_DRAG), this.dispatchEventWith(e.Event.CHANGE))
				}
			};
			a.stage_mouseMoveHandler = function(c) {
				this._moveStageX = c.stageX;
				this._moveStageY = c.stageY;
				this.needUpdateValue || (this.needUpdateValue = !0)
			};
			a.stage_mouseUpHandler = function(c) {
				f.UIGlobals.stage.removeEventListener(e.TouchEvent.TOUCH_MOVE, this.stage_mouseMoveHandler, this);
				f.UIGlobals.stage.removeEventListener(e.TouchEvent.TOUCH_END, this.stage_mouseUpHandler, this);
				f.UIGlobals.stage.removeEventListener(e.Event.LEAVE_STAGE, this.stage_mouseUpHandler, this);
				this.removeEventListener(e.Event.ENTER_FRAME, this.updateWhenMouseMove, this);
				this.needUpdateValue && (this.updateWhenMouseMove(), this.needUpdateValue = !1);
				f.TrackBaseEvent.dispatchTrackBaseEvent(this, f.TrackBaseEvent.THUMB_RELEASE);
				f.UIEvent.dispatchUIEvent(this, f.UIEvent.CHANGE_END)
			};
			a.track_mouseDownHandler = function(c) {};
			a.mouseDownHandler = function(c) {
				f.UIGlobals.stage.addEventListener(e.TouchEvent.TOUCH_END, this.stage_mouseUpSomewhereHandler, this);
				f.UIGlobals.stage.addEventListener(e.Event.LEAVE_STAGE, this.stage_mouseUpSomewhereHandler, this);
				this.mouseDownTarget = c.target
			};
			a.stage_mouseUpSomewhereHandler = function(c) {
				f.UIGlobals.stage.removeEventListener(e.TouchEvent.TOUCH_END, this.stage_mouseUpSomewhereHandler, this);
				f.UIGlobals.stage.removeEventListener(e.Event.LEAVE_STAGE, this.stage_mouseUpSomewhereHandler, this);
				if (this.mouseDownTarget != c.target && c instanceof e.TouchEvent && this.contains(c.target)) {
					var a = c.target.localToGlobal(c.localX, c.localY);
					e.TouchEvent.dispatchTouchEvent(this, e.TouchEvent.TOUCH_TAP, c.touchPointID, a.x, a.y, c.ctrlKey, c.altKey, c.shiftKey, c.touchDown)
				}
				this.mouseDownTarget = null
			};
			return b
		} (f.Range);
		f.TrackBase = g;
		g.prototype.__class__ = "egret.gui.TrackBase"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this.trackHighlight = null;
				this._showTrackHighlight = !0;
				this.animator = null;
				this._pendingValue = 0;
				this.slideToValue = NaN;
				this._liveDragging = !0;
				this.maximum = 10
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "showTrackHighlight", {
				get: function() {
					return this._showTrackHighlight
				},
				set: function(c) {
					this._showTrackHighlight != c && (this._showTrackHighlight = c, this.trackHighlight && (this.trackHighlight.visible = c), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "pendingValue", {
				get: function() {
					return this._pendingValue
				},
				set: function(c) {
					c != this._pendingValue && (this._pendingValue = c, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			a.setValue = function(c) {
				this._pendingValue = c;
				d.prototype.setValue.call(this, c)
			};
			a._animationUpdateHandler = function(c) {
				this.pendingValue = c.currentValue.value
			};
			a.animationEndHandler = function(c) {
				this.setValue(this.slideToValue);
				this.dispatchEventWith(e.Event.CHANGE);
				f.UIEvent.dispatchUIEvent(this, f.UIEvent.CHANGE_END)
			};
			a.stopAnimation = function() {
				this.animator.stop();
				this.setValue(this.nearestValidValue(this.pendingValue, this.snapInterval));
				this.dispatchEventWith(e.Event.CHANGE);
				f.UIEvent.dispatchUIEvent(this, f.UIEvent.CHANGE_END)
			};
			a.thumb_mouseDownHandler = function(c) {
				this.animator && this.animator.isPlaying && this.stopAnimation();
				d.prototype.thumb_mouseDownHandler.call(this, c)
			};
			Object.defineProperty(a, "liveDragging", {
				get: function() {
					return this._liveDragging
				},
				set: function(c) {
					this._liveDragging = c
				},
				enumerable: !0,
				configurable: !0
			});
			a.updateWhenMouseMove = function() {
				if (this.track) {
					var c = this.track.globalToLocal(this._moveStageX, this._moveStageY, e.Point.identity),
					c = this.pointToValue(c.x - this._clickOffsetX, c.y - this._clickOffsetY),
					c = this.nearestValidValue(c, this.snapInterval);
					c != this.pendingValue && (f.TrackBaseEvent.dispatchTrackBaseEvent(this, f.TrackBaseEvent.THUMB_DRAG), !0 == this.liveDragging ? (this.setValue(c), this.dispatchEventWith(e.Event.CHANGE)) : this.pendingValue = c)
				}
			};
			a.stage_mouseUpHandler = function(c) {
				d.prototype.stage_mouseUpHandler.call(this, c); ! 1 == this.liveDragging && this.value != this.pendingValue && (this.setValue(this.pendingValue), this.dispatchEventWith(e.Event.CHANGE))
			};
			a.track_mouseDownHandler = function(c) {
				this.enabled && (c = this.track.globalToLocal(c.stageX - (this.thumb ? this.thumb.width: 0) / 2, c.stageY - (this.thumb ? this.thumb.height: 0) / 2, e.Point.identity), c = this.pointToValue(c.x, c.y), c = this.nearestValidValue(c, this.snapInterval), c != this.pendingValue && (0 != this.slideDuration ? (this.animator || (this.animator = new f.Animation(this._animationUpdateHandler, this), this.animator.endFunction = this.animationEndHandler), this.animator.isPlaying && this.stopAnimation(), this.slideToValue = c, this.animator.duration = this.slideDuration * (Math.abs(this.pendingValue - this.slideToValue) / (this.maximum - this.minimum)), this.animator.motionPaths = [new f.SimpleMotionPath("value", this.pendingValue, this.slideToValue)], f.UIEvent.dispatchUIEvent(this, f.UIEvent.CHANGE_START), this.animator.play()) : (this.setValue(c), this.dispatchEventWith(e.Event.CHANGE))))
			};
			a.partAdded = function(c, a) {
				d.prototype.partAdded.call(this, c, a);
				a == this.trackHighlight && (this.trackHighlight.touchEnabled = !1, this.trackHighlight instanceof e.DisplayObjectContainer && (this.trackHighlight.touchChildren = !1), this.trackHighlight.visible = this._showTrackHighlight)
			};
			return b
		} (f.TrackBase);
		f.SliderBase = g;
		g.prototype.__class__ = "egret.gui.SliderBase"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._maxDisplayedLines = 0;
				this.lastUnscaledWidth = NaN;
				this.strokeColorChanged = !1;
				this._stroke = this._strokeColor = 0;
				this.strokeChanged = !1;
				this._padding = 0;
				this._paddingBottom = this._paddingTop = this._paddingRight = this._paddingLeft = NaN;
				this.addEventListener(e.UIEvent.UPDATE_COMPLETE, this.updateCompleteHandler, this)
			}
			__extends(b, d);
			var a = b.prototype;
			a.updateCompleteHandler = function(c) {
				this.lastUnscaledWidth = NaN
			};
			Object.defineProperty(a, "maxDisplayedLines", {
				get: function() {
					return this._maxDisplayedLines
				},
				set: function(c) {
					this._maxDisplayedLines != c && (this._maxDisplayedLines = c, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "strokeColor", {
				get: function() {
					return this._strokeColor
				},
				set: function(c) {
					this._setStrokeColor(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setStrokeColor = function(c) {
				this._strokeColor != c && (this._strokeColor = c, this.strokeColorChanged = !0, this.invalidateProperties())
			};
			Object.defineProperty(a, "stroke", {
				get: function() {
					return this._stroke
				},
				set: function(c) {
					this._stroke != c && (this._stroke = c, this.strokeChanged = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "padding", {
				get: function() {
					return this._padding
				},
				set: function(c) {
					this._padding != c && (this._padding = c, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "paddingLeft", {
				get: function() {
					return this._paddingLeft
				},
				set: function(c) {
					this._paddingLeft != c && (this._paddingLeft = c, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "paddingRight", {
				get: function() {
					return this._paddingRight
				},
				set: function(c) {
					this._paddingRight != c && (this._paddingRight = c, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "paddingTop", {
				get: function() {
					return this._paddingTop
				},
				set: function(c) {
					this._paddingTop != c && (this._paddingTop = c, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "paddingBottom", {
				get: function() {
					return this._paddingBottom
				},
				set: function(c) {
					this._paddingBottom != c && (this._paddingBottom = c, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			a.commitProperties = function() {
				d.prototype.commitProperties.call(this);
				this.strokeColorChanged && (this._textField.strokeColor = this._strokeColor, this.strokeColorChanged = !1);
				this.strokeChanged && (this._textField.stroke = this._stroke, this.strokeChanged = !1)
			};
			a.measure = function() {
				this._UIC_Props_._invalidatePropertiesFlag && this.validateProperties();
				if (this.isSpecialCase()) if (isNaN(this.lastUnscaledWidth)) this._UIC_Props_._oldPreferWidth = NaN,
				this._UIC_Props_._oldPreferHeight = NaN;
				else {
					this.measureUsingWidth(this.lastUnscaledWidth);
					return
				}
				var c;
				isNaN(this.explicitWidth) ? 1E4 != this.maxWidth && (c = this.maxWidth) : c = this.explicitWidth;
				this.measureUsingWidth(c)
			};
			a.isSpecialCase = function() {
				return 1 != this._maxDisplayedLines && (!isNaN(this.percentWidth) || !isNaN(this.left) && !isNaN(this.right)) && isNaN(this.explicitHeight) && isNaN(this.percentHeight)
			};
			a.measureUsingWidth = function(c) {
				this._textChanged && (this._textField.text = this._text);
				this._textFlowChanged && (this._textField.textFlow = this._textFlow);
				var a = isNaN(this._padding) ? 0 : this._padding,
				b = isNaN(this._paddingLeft) ? a: this._paddingLeft,
				d = isNaN(this._paddingRight) ? a: this._paddingRight,
				e = isNaN(this._paddingTop) ? a: this._paddingTop,
				a = isNaN(this._paddingBottom) ? a: this._paddingBottom;
				this._textField.width = NaN;
				this._textField.height = NaN;
				isNaN(c) || (this._textField.width = c - b - d);
				this.measuredWidth = Math.ceil(this._textField.measuredWidth);
				this.measuredHeight = Math.ceil(this._textField.measuredHeight);
				0 < this._maxDisplayedLines && this._textField.numLines > this._maxDisplayedLines && (c = this._textField.lineSpacing, this.measuredHeight = (this._textField.size + c) * this._maxDisplayedLines - c);
				this.measuredWidth += b + d;
				this.measuredHeight += e + a
			};
			a.updateDisplayList = function(c, a) {
				this.$updateDisplayList(c, a);
				var b = isNaN(this._padding) ? 0 : this._padding,
				d = isNaN(this._paddingLeft) ? b: this._paddingLeft,
				e = isNaN(this._paddingRight) ? b: this._paddingRight,
				f = isNaN(this._paddingTop) ? b: this._paddingTop,
				b = isNaN(this._paddingBottom) ? b: this._paddingBottom;
				this._textField.x = d;
				this._textField.y = f;
				if (this.isSpecialCase()) {
					var g = isNaN(this.lastUnscaledWidth) || this.lastUnscaledWidth != c;
					this.lastUnscaledWidth = c;
					if (g) {
						this._UIC_Props_._oldPreferWidth = NaN;
						this._UIC_Props_._oldPreferHeight = NaN;
						this.invalidateSize();
						return
					}
				}
				this._UIC_Props_._invalidateSizeFlag && this.validateSize();
				this._textField.visible || (this._textField.visible = !0);
				this._textField.width = c - d - e;
				d = a - f - b;
				this._textField.height = d;
				0 < this._maxDisplayedLines && this._textField.numLines > this._maxDisplayedLines && (e = this._textField.lineSpacing, this._textField.height = Math.min(d, (this._textField.size + e) * this._maxDisplayedLines - e))
			};
			return b
		} (e.TextBase);
		e.Label = g;
		g.prototype.__class__ = "egret.gui.Label"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._bitmapText = null;
				this._textChanged = !1;
				this._text = "";
				this._isLetterSpacingChanged = this.fontChanged = !1;
				this._letterSpacing = 0;
				this._isLineSpacingChanged = !1;
				this._lineSpacing = 0;
				this.createChildrenCalled = !1;
				this.lastUnscaledWidth = NaN;
				this._padding = 0;
				this._paddingBottom = this._paddingTop = this._paddingRight = this._paddingLeft = NaN;
				this.addEventListener(f.UIEvent.UPDATE_COMPLETE, this.updateCompleteHandler, this)
			}
			__extends(b, d);
			var a = b.prototype;
			a.updateCompleteHandler = function(c) {
				this.lastUnscaledWidth = NaN
			};
			Object.defineProperty(a, "text", {
				get: function() {
					return this._text
				},
				set: function(c) {
					this._text != c && (this._text = c, this._textChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "font", {
				get: function() {
					return this._font
				},
				set: function(c) {
					this._font != c && (this._font = c, this.createChildrenCalled ? this.parseFont() : this.fontChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "letterSpacing", {
				get: function() {
					return this._letterSpacing
				},
				set: function(c) {
					this._setLetterSpacing(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setLetterSpacing = function(c) {
				this._letterSpacing = c;
				this._isLetterSpacingChanged = !0;
				this.invalidateProperties();
				this.invalidateSize();
				this.invalidateDisplayList()
			};
			Object.defineProperty(a, "lineSpacing", {
				get: function() {
					return this._lineSpacing
				},
				set: function(c) {
					this._setLineSpacing(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setLineSpacing = function(c) {
				this._lineSpacing = c;
				this._isLineSpacingChanged = !0;
				this.invalidateProperties();
				this.invalidateSize();
				this.invalidateDisplayList()
			};
			a.createChildren = function() {
				d.prototype.createChildren.call(this);
				this._bitmapText || this.checkBitmapText();
				this.fontChanged && this.parseFont();
				this.createChildrenCalled = !0
			};
			a.parseFont = function() {
				this.fontChanged = !1;
				var c = b.assetAdapter;
				c || (c = this.getAdapter());
				if (this._font) c.getAsset(this._font, this.onFontChanged, this, null);
				else this.onFontChanged(null, null)
			};
			a.getAdapter = function() {
				var c;
				try {
					c = e.Injector.getInstance("egret.gui.IAssetAdapter")
				} catch(a) {
					c = new f.DefaultAssetAdapter
				}
				return b.assetAdapter = c
			};
			a.onFontChanged = function(c, a) {
				a === this._font && (this._bitmapText.font = c, this.invalidateSize(), this.invalidateDisplayList())
			};
			Object.defineProperty(a, "padding", {
				get: function() {
					return this._padding
				},
				set: function(c) {
					this._padding != c && (this._padding = c, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "paddingLeft", {
				get: function() {
					return this._paddingLeft
				},
				set: function(c) {
					this._paddingLeft != c && (this._paddingLeft = c, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "paddingRight", {
				get: function() {
					return this._paddingRight
				},
				set: function(c) {
					this._paddingRight != c && (this._paddingRight = c, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "paddingTop", {
				get: function() {
					return this._paddingTop
				},
				set: function(c) {
					this._paddingTop != c && (this._paddingTop = c, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "paddingBottom", {
				get: function() {
					return this._paddingBottom
				},
				set: function(c) {
					this._paddingBottom != c && (this._paddingBottom = c, this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			a.measure = function() {
				this._UIC_Props_._invalidatePropertiesFlag && this.validateProperties();
				if (this.isSpecialCase()) if (isNaN(this.lastUnscaledWidth)) this._UIC_Props_._oldPreferWidth = NaN,
				this._UIC_Props_._oldPreferHeight = NaN;
				else {
					this.measureUsingWidth(this.lastUnscaledWidth);
					return
				}
				var c;
				isNaN(this.explicitWidth) ? 1E4 != this.maxWidth && (c = this.maxWidth) : c = this.explicitWidth;
				this.measureUsingWidth(c)
			};
			a.isSpecialCase = function() {
				return (!isNaN(this.percentWidth) || !isNaN(this.left) && !isNaN(this.right)) && isNaN(this.explicitHeight) && isNaN(this.percentHeight)
			};
			a.measureUsingWidth = function(c) {
				this._textChanged && (this._bitmapText.text = this._text);
				this._isLetterSpacingChanged && (this._bitmapText.letterSpacing = this._letterSpacing);
				this._isLineSpacingChanged && (this._bitmapText.lineSpacing = this._lineSpacing);
				var a = isNaN(this._padding) ? 0 : this._padding,
				b = isNaN(this._paddingLeft) ? a: this._paddingLeft,
				d = isNaN(this._paddingRight) ? a: this._paddingRight,
				e = isNaN(this._paddingTop) ? a: this._paddingTop,
				a = isNaN(this._paddingBottom) ? a: this._paddingBottom;
				this._bitmapText.width = NaN;
				this._bitmapText.height = NaN;
				isNaN(c) || (this._bitmapText.width = c - b - d);
				this.measuredWidth = Math.ceil(this._bitmapText.measuredWidth);
				this.measuredHeight = Math.ceil(this._bitmapText.measuredHeight);
				this.measuredWidth += b + d;
				this.measuredHeight += e + a
			};
			a.updateDisplayList = function(c, a) {
				d.prototype.updateDisplayList.call(this, c, a);
				if (this._bitmapText) {
					var b = isNaN(this._padding) ? 0 : this._padding,
					e = isNaN(this._paddingLeft) ? b: this._paddingLeft,
					f = isNaN(this._paddingRight) ? b: this._paddingRight,
					g = isNaN(this._paddingTop) ? b: this._paddingTop,
					b = isNaN(this._paddingBottom) ? b: this._paddingBottom;
					this._bitmapText.x = e;
					this._bitmapText.y = g;
					if (this.isSpecialCase()) {
						var k = isNaN(this.lastUnscaledWidth) || this.lastUnscaledWidth != c;
						this.lastUnscaledWidth = c;
						if (k) {
							this._UIC_Props_._oldPreferWidth = NaN;
							this._UIC_Props_._oldPreferHeight = NaN;
							this.invalidateSize();
							return
						}
					}
					this._UIC_Props_._invalidateSizeFlag && this.validateSize();
					this._bitmapText.visible || (this._bitmapText.visible = !0);
					this._bitmapText.width = c - e - f;
					this._bitmapText.height = a - g - b
				}
			};
			a.checkBitmapText = function() {
				this._bitmapText || (this._bitmapText = new e.BitmapText, this._bitmapText.text = this._text, this._bitmapText.letterSpacing = this._letterSpacing, this._bitmapText.lineSpacing = this._lineSpacing, this._isLineSpacingChanged = this._isLetterSpacingChanged = this._textChanged = !1, this._addToDisplayList(this._bitmapText))
			};
			a.commitProperties = function() {
				d.prototype.commitProperties.call(this);
				this._bitmapText || this.checkBitmapText();
				this._textChanged && (this._bitmapText.text = this._text, this._textChanged = !1);
				this._isLetterSpacingChanged && (this._bitmapText.letterSpacing = this._letterSpacing, this._isLetterSpacingChanged = !1);
				this._isLineSpacingChanged && (this._bitmapText.lineSpacing = this._lineSpacing, this._isLineSpacingChanged = !1)
			};
			return b
		} (f.UIComponent);
		f.BitmapLabel = g;
		g.prototype.__class__ = "egret.gui.BitmapLabel"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._graphics = null;
				this._fillColor = 16777215;
				this._fillAlpha = 1;
				this._strokeColor = 4473924;
				this._strokeAlpha = 0;
				this._strokeWeight = 1;
				this.touchChildren = !1
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "graphics", {
				get: function() {
					this._graphics || (this._graphics = new e.Graphics, this.needDraw = !0);
					return this._graphics
				},
				enumerable: !0,
				configurable: !0
			});
			a._render = function(c) {
				this._graphics && this._graphics._draw(c);
				d.prototype._render.call(this, c)
			};
			Object.defineProperty(a, "fillColor", {
				get: function() {
					return this._fillColor
				},
				set: function(c) {
					this._fillColor != c && (this._fillColor = c, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "fillAlpha", {
				get: function() {
					return this._fillAlpha
				},
				set: function(c) {
					this._fillAlpha != c && (this._fillAlpha = c, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "strokeColor", {
				get: function() {
					return this._strokeColor
				},
				set: function(c) {
					this._strokeColor != c && (this._strokeColor = c, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "strokeAlpha", {
				get: function() {
					return this._strokeAlpha
				},
				set: function(c) {
					this._strokeAlpha != c && (this._strokeAlpha = c, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "strokeWeight", {
				get: function() {
					return this._strokeWeight
				},
				set: function(c) {
					this._strokeWeight != c && (this._strokeWeight = c, this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			a._measureBounds = function() {
				var c = d.prototype._measureBounds.call(this),
				a = this.width,
				b = this.height;
				0 < c.x && (c.x = 0);
				0 < c.y && (c.y = 0);
				0 + a > c.right && (c.right = 0 + a);
				0 + b > c.bottom && (c.bottom = 0 + b);
				return c
			};
			a.updateDisplayList = function(c, a) {
				d.prototype.updateDisplayList.call(this, c, c);
				var b = this.graphics;
				b.clear();
				b.beginFill(this._fillColor, this._fillAlpha);
				0 < this._strokeAlpha && b.lineStyle(this._strokeWeight, this._strokeColor, this._strokeAlpha, !0, "normal", "square", "miter");
				b.drawRect(0, 0, c, a);
				b.endFill()
			};
			a.hitTest = function(c, a, b) {
				void 0 === b && (b = !1);
				var f = d.prototype.hitTest.call(this, c, a, b);
				return f ? f: this._graphics ? e.DisplayObject.prototype.hitTest.call(this, c, a, b) : null
			};
			return b
		} (f.UIComponent);
		f.Rect = g;
		g.prototype.__class__ = "egret.gui.Rect"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._icon = this.iconDisplay = null
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "icon", {
				get: function() {
					return this._getIcon()
				},
				set: function(c) {
					this._setIcon(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._getIcon = function() {
				return this.iconDisplay ? this.iconDisplay.source: this._icon
			};
			a._setIcon = function(c) {
				this._icon = c;
				this.iconDisplay && (this.iconDisplay.source = c)
			};
			a.partAdded = function(c, a) {
				d.prototype.partAdded.call(this, c, a);
				a == this.iconDisplay && (this.iconDisplay.source = this._icon)
			};
			return b
		} (e.ButtonBase);
		e.Button = g;
		g.prototype.__class__ = "egret.gui.Button"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function(d) {
			function b() {
				d.call(this)
			}
			__extends(b, d);
			return b
		} (e.ToggleButtonBase);
		e.ToggleSwitch = g;
		g.prototype.__class__ = "egret.gui.ToggleSwitch"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._icon = this.iconDisplay = null
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "icon", {
				get: function() {
					return this._getIcon()
				},
				set: function(c) {
					this._setIcon(c)
				},
				enumerable: !0,
				configurable: !0
			});
			a._getIcon = function() {
				return this.iconDisplay ? this.iconDisplay.source: this._icon
			};
			a._setIcon = function(c) {
				this._icon = c;
				this.iconDisplay && (this.iconDisplay.source = c)
			};
			a.partAdded = function(c, a) {
				d.prototype.partAdded.call(this, c, a);
				a == this.iconDisplay && (this.iconDisplay.source = this._icon)
			};
			return b
		} (e.ToggleButtonBase);
		e.ToggleButton = g;
		g.prototype.__class__ = "egret.gui.ToggleButton"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this.elementsContentChanged = this.createChildrenCalled = !1;
				this._elementsContent = []
			}
			__extends(b, d);
			var a = b.prototype;
			a.createChildren = function() {
				d.prototype.createChildren.call(this);
				this.createChildrenCalled = !0;
				this.elementsContentChanged && (this.elementsContentChanged = !1, this.setElementsContent(this._elementsContent))
			};
			a._getElementsContent = function() {
				return this._elementsContent
			};
			Object.defineProperty(a, "elementsContent", {
				set: function(c) {
					null == c && (c = []);
					if (c != this._elementsContent) if (this.createChildrenCalled) this.setElementsContent(c);
					else {
						this.elementsContentChanged = !0;
						for (var a = this._elementsContent.length - 1; 0 <= a; a--) this._elementRemoved(this._elementsContent[a], a);
						this._elementsContent = c
					}
				},
				enumerable: !0,
				configurable: !0
			});
			a.setElementsContent = function(c) {
				var a;
				for (a = this._elementsContent.length - 1; 0 <= a; a--) this._elementRemoved(this._elementsContent[a], a);
				this._elementsContent = c.concat();
				c = this._elementsContent.length;
				for (a = 0; a < c; a++) {
					var b = this._elementsContent[a];
					b.parent && "removeElement" in b.parent ? b.parent.removeElement(b) : b.owner && "removeElement" in b.owner && b.owner.removeElement(b);
					this._elementAdded(b, a)
				}
			};
			Object.defineProperty(a, "numElements", {
				get: function() {
					return this._elementsContent.length
				},
				enumerable: !0,
				configurable: !0
			});
			a.getElementAt = function(c) {
				this.checkForRangeError(c);
				return this._elementsContent[c]
			};
			a.checkForRangeError = function(c, a) {
				void 0 === a && (a = !1);
				var b = this._elementsContent.length - 1;
				a && b++;
				if (0 > c || c > b) throw new RangeError(e.getString(3011, c));
			};
			a.addElement = function(c) {
				var a = this.numElements;
				c.parent == this && (a = this.numElements - 1);
				return this.addElementAt(c, a)
			};
			a.addElementAt = function(c, a) {
				if (c == this) return c;
				this.checkForRangeError(a, !0);
				var b = c.owner;
				if (b == this || c.parent == this) return this.setElementIndex(c, a),
				c;
				b && "removeElement" in b && c.owner.removeElement(c);
				this._elementsContent.splice(a, 0, c);
				this.elementsContentChanged || this._elementAdded(c, a);
				return c
			};
			a.removeElement = function(a) {
				return this.removeElementAt(this.getElementIndex(a))
			};
			a.removeElementAt = function(a) {
				this.checkForRangeError(a);
				var b = this._elementsContent[a];
				this.elementsContentChanged || this._elementRemoved(b, a);
				this._elementsContent.splice(a, 1);
				return b
			};
			a.removeAllElements = function() {
				for (var a = this.numElements - 1; 0 <= a; a--) this.removeElementAt(a)
			};
			a.getElementIndex = function(a) {
				return this._elementsContent.indexOf(a)
			};
			a.setElementIndex = function(a, b) {
				this.checkForRangeError(b);
				var d = this.getElementIndex(a); - 1 != d && d != b && (this.elementsContentChanged || this._elementRemoved(a, d, !1), this._elementsContent.splice(d, 1), this._elementsContent.splice(b, 0, a), this.elementsContentChanged || this._elementAdded(a, b, !1))
			};
			a.swapElements = function(a, b) {
				this.swapElementsAt(this.getElementIndex(a), this.getElementIndex(b))
			};
			a.swapElementsAt = function(a, b) {
				this.checkForRangeError(a);
				this.checkForRangeError(b);
				if (a > b) {
					var d = b;
					b = a;
					a = d
				} else if (a == b) return;
				var d = this._elementsContent,
				e = d[a],
				f = d[b];
				this.elementsContentChanged || (this._elementRemoved(e, a, !1), this._elementRemoved(f, b, !1));
				d[a] = f;
				d[b] = e;
				this.elementsContentChanged || (this._elementAdded(f, a, !1), this._elementAdded(e, b, !1))
			};
			a._elementAdded = function(a, b, d) {
				void 0 === d && (d = !0);
				a instanceof e.DisplayObject && this._addToDisplayListAt(a, b, d);
				d && this.hasEventListener(f.ElementExistenceEvent.ELEMENT_ADD) && f.ElementExistenceEvent.dispatchElementExistenceEvent(this, f.ElementExistenceEvent.ELEMENT_ADD, a, b);
				this.invalidateSize();
				this.invalidateDisplayList()
			};
			a._elementRemoved = function(a, b, d) {
				void 0 === d && (d = !0);
				d && this.hasEventListener(f.ElementExistenceEvent.ELEMENT_REMOVE) && f.ElementExistenceEvent.dispatchElementExistenceEvent(this, f.ElementExistenceEvent.ELEMENT_REMOVE, a, b);
				a instanceof e.DisplayObject && a.parent == this && this._removeFromDisplayList(a, d);
				this.invalidateSize();
				this.invalidateDisplayList()
			};
			a.addChild = function(a) {
				throw Error(e.getString(3004, e.getString(3003)));
			};
			a.addChildAt = function(a, b) {
				throw Error(e.getString(3005, e.getString(3003)));
			};
			a.removeChild = function(a) {
				throw Error(e.getString(3006, e.getString(3003)));
			};
			a.removeChildAt = function(a) {
				throw Error(e.getString(3007, e.getString(3003)));
			};
			a.setChildIndex = function(a, b) {
				throw Error(e.getString(3008, e.getString(3003)));
			};
			a.swapChildren = function(a, b) {
				throw Error(e.getString(3009, e.getString(3003)));
			};
			a.swapChildrenAt = function(a, b) {
				throw Error(e.getString(3010, e.getString(3003)));
			};
			return b
		} (f.GroupBase);
		f.Group = g;
		g.prototype.__class__ = "egret.gui.Group"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this.maxWidth = 1E4;
				this.minWidth = 0;
				this.maxHeight = 1E4;
				this.minHeight = 0;
				this._hasWidthSet = !1;
				this._width = NaN;
				this._hasHeightSet = !1;
				this._height = NaN;
				this.measuredHeight = this.measuredWidth = 0;
				this._initialized = !1;
				this._hostComponent = null;
				this._elementsContent = [];
				this.skinLayout = null;
				this._states = [];
				this.playStateTransition = !0;
				this.currentStateChanged = !1;
				this.requestedCurrentState = this._currentState = null;
				this.initialized = !1;
				this.skinLayout = new f.SkinBasicLayout;
				this.skinLayout.target = this
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "width", {
				get: function() {
					return this._width
				},
				set: function(a) {
					this._width != a && (this._width = a, this._hasWidthSet = e.NumberUtils.isNumber(a))
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "height", {
				get: function() {
					return this._height
				},
				set: function(a) {
					this._height != a && (this._height = a, this._hasHeightSet = e.NumberUtils.isNumber(a))
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "preferredWidth", {
				get: function() {
					return this._hasWidthSet ? this._width: this.measuredWidth
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "preferredHeight", {
				get: function() {
					return this._hasHeightSet ? this._height: this.measuredHeight
				},
				enumerable: !0,
				configurable: !0
			});
			a.createChildren = function() {};
			Object.defineProperty(a, "hostComponent", {
				get: function() {
					return this._hostComponent
				},
				set: function(a) {
					this._setHostComponent(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setHostComponent = function(a) {
				if (this._hostComponent != a) {
					var b;
					if (this._hostComponent) for (b = this._elementsContent.length - 1; 0 <= b; b--) this._elementRemoved(this._elementsContent[b], b);
					this._hostComponent = a;
					this._initialized || (this._initialized = !0, this.createChildren());
					if (this._hostComponent) {
						a = this._elementsContent.length;
						for (b = 0; b < a; b++) this._elementAdded(this._elementsContent[b], b);
						this.initializeStates();
						this.currentStateChanged && this.commitCurrentState()
					}
				}
			};
			a._getElementsContent = function() {
				return this._elementsContent
			};
			Object.defineProperty(a, "elementsContent", {
				set: function(a) {
					null == a && (a = []);
					if (a != this._elementsContent) if (this._hostComponent) {
						var b;
						for (b = this._elementsContent.length - 1; 0 <= b; b--) this._elementRemoved(this._elementsContent[b], b);
						this._elementsContent = a.concat();
						a = this._elementsContent.length;
						for (b = 0; b < a; b++) {
							var d = this._elementsContent[b];
							d.parent && "removeElement" in d.parent ? d.parent.removeElement(d) : d.owner && "removeElement" in d.owner && d.owner.removeElement(d);
							this._elementAdded(d, b)
						}
					} else this._elementsContent = a.concat()
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "numElements", {
				get: function() {
					return this._elementsContent.length
				},
				enumerable: !0,
				configurable: !0
			});
			a.getElementAt = function(a) {
				this.checkForRangeError(a);
				return this._elementsContent[a]
			};
			a.checkForRangeError = function(a, b) {
				void 0 === b && (b = !1);
				var d = this._elementsContent.length - 1;
				b && d++;
				if (0 > a || a > d) throw new RangeError(e.getString(3011, a));
			};
			a.addElement = function(a) {
				var b = this.numElements;
				a.owner == this && (b = this.numElements - 1);
				return this.addElementAt(a, b)
			};
			a.addElementAt = function(a, b) {
				this.checkForRangeError(b, !0);
				var d = a.owner;
				if (d == this) return this.setElementIndex(a, b),
				a;
				d && "removeElement" in d && d.removeElement(a);
				this._elementsContent.splice(b, 0, a);
				this._hostComponent ? this._elementAdded(a, b) : a.ownerChanged(this);
				return a
			};
			a.removeElement = function(a) {
				return this.removeElementAt(this.getElementIndex(a))
			};
			a.removeElementAt = function(a) {
				this.checkForRangeError(a);
				var b = this._elementsContent[a];
				this._hostComponent ? this._elementRemoved(b, a) : b.ownerChanged(null);
				this._elementsContent.splice(a, 1);
				return b
			};
			a.getElementIndex = function(a) {
				return this._elementsContent.indexOf(a)
			};
			a.setElementIndex = function(a, b) {
				this.checkForRangeError(b);
				var d = this.getElementIndex(a); - 1 != d && d != b && (this._hostComponent && this._elementRemoved(a, d, !1), this._elementsContent.splice(d, 1), this._elementsContent.splice(b, 0, a), this._hostComponent && this._elementAdded(a, b, !1))
			};
			a._elementAdded = function(a, b, d) {
				void 0 === d && (d = !0);
				a.ownerChanged(this);
				a instanceof e.DisplayObject && this._hostComponent._addToDisplayListAt(a, b, d);
				d && this.hasEventListener(f.ElementExistenceEvent.ELEMENT_ADD) && f.ElementExistenceEvent.dispatchElementExistenceEvent(this, f.ElementExistenceEvent.ELEMENT_ADD, a, b);
				this._hostComponent.invalidateSize();
				this._hostComponent.invalidateDisplayList()
			};
			a._elementRemoved = function(a, b, d) {
				void 0 === d && (d = !0);
				d && this.hasEventListener(f.ElementExistenceEvent.ELEMENT_REMOVE) && f.ElementExistenceEvent.dispatchElementExistenceEvent(this, f.ElementExistenceEvent.ELEMENT_REMOVE, a, b);
				a instanceof e.DisplayObject && a.parent == this._hostComponent && this._hostComponent._removeFromDisplayList(a, d);
				a.ownerChanged(null);
				this._hostComponent.invalidateSize();
				this._hostComponent.invalidateDisplayList()
			};
			a.measure = function() {
				this.skinLayout.measure();
				this.measuredWidth < this.minWidth && (this.measuredWidth = this.minWidth);
				this.measuredWidth > this.maxWidth && (this.measuredWidth = this.maxWidth);
				this.measuredHeight < this.minHeight && (this.measuredHeight = this.minHeight);
				this.measuredHeight > this.maxHeight && (this.measuredHeight = this.maxHeight)
			};
			a.updateDisplayList = function(a, b) {
				this.skinLayout.updateDisplayList(a, b)
			};
			Object.defineProperty(a, "states", {
				get: function() {
					return this._states
				},
				set: function(a) {
					this._setStates(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setStates = function(a) {
				a || (a = []);
				if ("string" == typeof a[0]) for (var b = a.length,
				d = 0; d < b; d++) {
					var e = new f.State(a[d], []);
					a[d] = e
				}
				this._states = a;
				this.currentStateChanged = !0;
				this.requestedCurrentState = this._currentState;
				this.hasState(this.requestedCurrentState) || (this.requestedCurrentState = this.getDefaultState())
			};
			Object.defineProperty(a, "transitions", {
				get: function() {
					return this._transitions
				},
				set: function(a) {
					this._transitions = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "currentState", {
				get: function() {
					return this.currentStateChanged ? this.requestedCurrentState: this._currentState ? this._currentState: this.getDefaultState()
				},
				set: function(a) {
					a || (a = this.getDefaultState());
					a != this.currentState && a && this.currentState && (this.requestedCurrentState = a, this.currentStateChanged = !0, this._hostComponent && this.commitCurrentState())
				},
				enumerable: !0,
				configurable: !0
			});
			a.hasState = function(a) {
				return null != this.getState(a)
			};
			a.getDefaultState = function() {
				return 0 < this._states.length ? this._states[0].name: null
			};
			a.commitCurrentState = function() {
				if (this.currentStateChanged) {
					this.currentStateChanged = !1;
					this.getState(this.requestedCurrentState) || (this.requestedCurrentState = this.getDefaultState());
					var a;
					this.playStateTransition && (a = this.getTransition(this._currentState, this.requestedCurrentState));
					var b, d;
					this._currentTransition && (this._currentTransition.effect.removeEventListener(f.EffectEvent.EFFECT_END, this.transition_effectEndHandler, this), a && this._currentTransition.interruptionBehavior == f.InterruptionBehavior.STOP ? (d = this._currentTransition.effect, d.stop()) : (this._currentTransition.autoReverse && this.transitionFromState == this.requestedCurrentState && this.transitionToState == this._currentState && (b = 0 == this._currentTransition.effect.duration ? 0 : this._currentTransition.effect.playheadTime / this.getTotalDuration(this._currentTransition.effect)), this._currentTransition.effect.end()), this._currentTransition = null);
					d = this._currentState ? this._currentState: "";
					this.hasEventListener(f.StateChangeEvent.CURRENT_STATE_CHANGING) && f.StateChangeEvent.dispatchStateChangeEvent(this, f.StateChangeEvent.CURRENT_STATE_CHANGING, d, this.requestedCurrentState ? this.requestedCurrentState: "");
					this.removeState(this._currentState); (this._currentState = this.requestedCurrentState) && this.applyState(this._currentState);
					this.hasEventListener(f.StateChangeEvent.CURRENT_STATE_CHANGE) && f.StateChangeEvent.dispatchStateChangeEvent(this, f.StateChangeEvent.CURRENT_STATE_CHANGE, d, this._currentState ? this._currentState: "");
					if (a) {
						var e = a && a.autoReverse && (a.toState == d || a.fromState == this._currentState);
						f.UIGlobals._layoutManager.validateNow();
						this._currentTransition = a;
						this.transitionFromState = d;
						this.transitionToState = this._currentState;
						a.effect.addEventListener(f.EffectEvent.EFFECT_END, this.transition_effectEndHandler, this);
						a.effect.play(null, e);
						isNaN(b) || 0 == a.effect.duration || (a.effect.playheadTime = (1 - b) * this.getTotalDuration(a.effect))
					} else this.hasEventListener(f.StateChangeEvent.STATE_CHANGE_COMPLETE) && f.StateChangeEvent.dispatchStateChangeEvent(this, f.StateChangeEvent.STATE_CHANGE_COMPLETE, d, this._currentState)
				}
			};
			a.transition_effectEndHandler = function(a) {
				this._currentTransition = null;
				this.hasEventListener(f.StateChangeEvent.STATE_CHANGE_COMPLETE) && f.StateChangeEvent.dispatchStateChangeEvent(this, f.StateChangeEvent.STATE_CHANGE_COMPLETE, this.transitionFromState, this.transitionToState)
			};
			a.getState = function(a) {
				if (!a) return null;
				for (var b = this._states,
				d = b.length,
				e = 0; e < d; e++) {
					var f = b[e];
					if (f.name == a) return f
				}
				return null
			};
			a.removeState = function(a) {
				if (a = this.getState(a)) {
					a = a.overrides;
					for (var b = a.length - 1; 0 <= b; b--) a[b].remove(this)
				}
			};
			a.applyState = function(a) {
				if (a = this.getState(a)) {
					a = a.overrides;
					for (var b = a.length,
					d = 0; d < b; d++) a[d].apply(this)
				}
			};
			a.initializeStates = function() {
				if (!this.initialized) {
					this.initialized = !0;
					for (var a = this._states,
					b = a.length,
					d = 0; d < b; d++) a[d].initialize(this)
				}
			};
			a.getTransition = function(a, b) {
				var d = null,
				e = 0;
				if (!this.transitions) return null;
				a || (a = "");
				b || (b = "");
				for (var f = 0; f < this.transitions.length; f++) {
					var g = this.transitions[f];
					if ("*" == g.fromState && "*" == g.toState && 1 > e) d = g,
					e = 1;
					else if (g.toState == a && "*" == g.fromState && g.autoReverse && 2 > e) d = g,
					e = 2;
					else if ("*" == g.toState && g.fromState == b && g.autoReverse && 3 > e) d = g,
					e = 3;
					else if (g.toState == a && g.fromState == b && g.autoReverse && 4 > e) d = g,
					e = 4;
					else if (g.fromState == a && "*" == g.toState && 5 > e) d = g,
					e = 5;
					else if ("*" == g.fromState && g.toState == b && 6 > e) d = g,
					e = 6;
					else if (g.fromState == a && g.toState == b && 7 > e) {
						d = g;
						break
					}
				}
				d && !d.effect && (d = null);
				return d
			};
			a.getTotalDuration = function(a) {
				var b = 0,
				b = a instanceof f.CompositeEffect ? a.compositeDuration: a.duration,
				d = "repeatCount" in a ? a.repeatCount: 0;
				return b = b * d + ("repeatDelay" in a ? a.repeatDelay: 0) * (d - 1) + ("startDelay" in a ? a.startDelay: 0)
			};
			return b
		} (e.EventDispatcher);
		f.Skin = g;
		g.prototype.__class__ = "egret.gui.Skin"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a, b, f) {
				void 0 === a && (a = null);
				void 0 === b && (b = null);
				void 0 === f && (f = null);
				d.call(this);
				this.labelDisplay = new e.gui.Label;
				this.iconDisplay = new e.gui.UIAsset;
				var g = {};
				g.up = a;
				g.down = b;
				g.disabled = f;
				this.stateMap = g;
				this._setStates(["up", "down", "disabled"])
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "skinParts", {
				get: function() {
					return b._skinParts
				},
				enumerable: !0,
				configurable: !0
			});
			a.createChildren = function() {
				d.prototype.createChildren.call(this);
				var a = new f.UIAsset;
				a.left = a.top = a.bottom = a.right = 0;
				this.addElement(a);
				this.backgroundAsset = a;
				this.iconDisplay.includeInLayout = !1;
				this.addElement(this.iconDisplay);
				this.labelDisplay.includeInLayout = !1;
				this.labelDisplay.paddingLeft = 5;
				this.labelDisplay.paddingRight = 5;
				this.addElement(this.labelDisplay)
			};
			a.commitCurrentState = function() {
				d.prototype.commitCurrentState.call(this);
				var a = this.currentState;
				this.stateMap[a] && (this.backgroundAsset.source = this.stateMap[a])
			};
			a.measure = function() {
				d.prototype.measure.call(this);
				var a = this.iconDisplay.preferredWidth + this.labelDisplay.preferredWidth + 20,
				b = Math.max(this.iconDisplay.preferredHeight, this.labelDisplay.preferredHeight) + 20;
				a > this.measuredWidth && (a < this.minWidth && (a = this.minWidth), a > this.maxWidth && (a = this.maxWidth), this.measuredWidth = a);
				b > this.measuredHeight && (b < this.minHeight && (b = this.minHeight), b > this.maxHeight && (b = this.maxHeight), this.measuredHeight = b)
			};
			a.updateDisplayList = function(a, b) {
				d.prototype.updateDisplayList.call(this, a, b);
				var e = this.iconDisplay.layoutBoundsWidth,
				f = this.labelDisplay.layoutBoundsHeight,
				g = 0.5 * (a - e - this.labelDisplay.layoutBoundsWidth);
				this.iconDisplay.setLayoutBoundsPosition(g, 0.5 * (b - this.iconDisplay.layoutBoundsHeight));
				this.labelDisplay.setLayoutBoundsPosition(g + e, 0.5 * (b - f))
			};
			b._skinParts = ["labelDisplay", "iconDisplay"];
			return b
		} (f.Skin);
		f.ButtonSkin = g;
		g.prototype.__class__ = "egret.gui.ButtonSkin"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._rendererOwner = null;
				this.useVirtualLayoutChanged = !1;
				this.rendererToClassMap = [];
				this.freeRenderers = [];
				this.createNewRendererFlag = !1;
				this.cleanTimer = null;
				this.dataProviderChanged = !1;
				this._dataProvider = null;
				this.recyclerDic = [];
				this.itemRendererChanged = !1;
				this._itemRenderer = null;
				this.itemRendererSkinNameChange = !1;
				this._itemRendererFunction = this._itemRendererSkinName = null;
				this.typicalItemChanged = this.virtualLayoutUnderway = !1;
				this.typicalLayoutRect = null;
				this.indexToRenderer = [];
				this.renderersBeingUpdated = this.cleanFreeRenderer = !1
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "layout", {
				get: function() {
					return this._layout
				},
				set: function(a) {
					a != this.layout && (this.layout && (this.layout.typicalLayoutRect = null, this.layout.removeEventListener("useVirtualLayoutChanged", this.layout_useVirtualLayoutChangedHandler, this)), this.layout && a && this.layout.useVirtualLayout != a.useVirtualLayout && this.changeUseVirtualLayout(), this._setLayout(a), a && (a.typicalLayoutRect = this.typicalLayoutRect, a.addEventListener("useVirtualLayoutChanged", this.layout_useVirtualLayoutChangedHandler, this)))
				},
				enumerable: !0,
				configurable: !0
			});
			a.layout_useVirtualLayoutChangedHandler = function(a) {
				this.changeUseVirtualLayout()
			};
			a.setVirtualElementIndicesInView = function(a, b) {
				if (this.layout && this.layout.useVirtualLayout) {
					this.virtualRendererIndices = [];
					for (var d = a; d <= b; d++) this.virtualRendererIndices.push(d);
					for (var e in this.indexToRenderer) e = parseInt(e),
					-1 == this.virtualRendererIndices.indexOf(e) && this.freeRendererByIndex(e)
				}
			};
			a.getVirtualElementAt = function(a) {
				if (0 > a || a >= this.dataProvider.length) return null;
				var b = this.indexToRenderer[a];
				if (!b) {
					var b = this.dataProvider.getItemAt(a),
					d = this.createVirtualRenderer(a);
					this.indexToRenderer[a] = d;
					this.updateRenderer(d, a, b);
					this.createNewRendererFlag && ("validateNow" in d && d.validateNow(), this.createNewRendererFlag = !1, f.RendererExistenceEvent.dispatchRendererExistenceEvent(this, f.RendererExistenceEvent.RENDERER_ADD, d, a, b));
					b = d
				}
				return b
			};
			a.freeRendererByIndex = function(a) {
				if (this.indexToRenderer[a]) {
					var b = this.indexToRenderer[a];
					delete this.indexToRenderer[a];
					b && b instanceof e.DisplayObject && this.doFreeRenderer(b)
				}
			};
			a.doFreeRenderer = function(a) {
				var b = this.rendererToClassMap[a.hashCode].hashCode;
				this.freeRenderers[b] || (this.freeRenderers[b] = []);
				this.freeRenderers[b].push(a);
				a.visible = !1
			};
			a.invalidateSize = function() {
				this.createNewRendererFlag || d.prototype.invalidateSize.call(this)
			};
			a.createVirtualRenderer = function(a) {
				a = this.dataProvider.getItemAt(a);
				a = this.itemToRendererClass(a);
				var b = a.hashCode,
				d = this.freeRenderers;
				if (d[b] && 0 < d[b].length) return a = d[b].pop(),
				a.visible = !0,
				a;
				this.createNewRendererFlag = !0;
				return this.createOneRenderer(a)
			};
			a.createOneRenderer = function(a) {
				var b, d = a.hashCode,
				f = this.recyclerDic[d];
				f && (b = f.pop(), 0 == f.length && delete this.recyclerDic[d]);
				b || (b = a.newInstance(), this.rendererToClassMap[b.hashCode] = a);
				if (! (b && b instanceof e.DisplayObject)) return null;
				this._itemRendererSkinName && this.setItemRenderSkinName(b);
				this._addToDisplayList(b);
				b.setLayoutBoundsSize(NaN, NaN);
				return b
			};
			a.setItemRenderSkinName = function(a) {
				a && (a ? a._skinNameExplicitlySet || (a.skinName = this._itemRendererSkinName) : a && !a.skinName && (a.skinName = this._itemRendererSkinName))
			};
			a.finishVirtualLayout = function() {
				if (this.virtualLayoutUnderway) {
					var a = this.virtualLayoutUnderway = !1,
					b;
					for (b in this.freeRenderers) if (0 < this.freeRenderers[b].length) {
						a = !0;
						break
					}
					a && (this.cleanTimer || (this.cleanTimer = new e.Timer(3E3, 1), this.cleanTimer.addEventListener(e.TimerEvent.TIMER, this.cleanAllFreeRenderer, this)), this.cleanTimer.reset(), this.cleanTimer.start())
				}
			};
			a.cleanAllFreeRenderer = function(a) {
				var b = this.freeRenderers,
				d;
				for (d in b) for (var e = b[d], f = e.length, g = 0; g < f; g++) a = e[g],
				a.visible = !0,
				this.recycle(a);
				this.freeRenderers = [];
				this.cleanFreeRenderer = !1
			};
			a.getElementIndicesInView = function() {
				return this.layout && this.layout.useVirtualLayout ? this.virtualRendererIndices ? this.virtualRendererIndices: [] : d.prototype.getElementIndicesInView.call(this)
			};
			a.changeUseVirtualLayout = function() {
				this.cleanFreeRenderer = this.useVirtualLayoutChanged = !0;
				this.removeDataProviderListener();
				this.invalidateProperties()
			};
			Object.defineProperty(a, "dataProvider", {
				get: function() {
					return this._dataProvider
				},
				set: function(a) {
					this._dataProvider != a && (this.removeDataProviderListener(), this._dataProvider = a, this.cleanFreeRenderer = this.dataProviderChanged = !0, this.invalidateProperties(), this.invalidateSize(), this.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			a.removeDataProviderListener = function() {
				this._dataProvider && this._dataProvider.removeEventListener(f.CollectionEvent.COLLECTION_CHANGE, this.onCollectionChange, this)
			};
			a.onCollectionChange = function(a) {
				switch (a.kind) {
				case f.CollectionEventKind.ADD:
					this.itemAddedHandler(a.items, a.location);
					break;
				case f.CollectionEventKind.MOVE:
					this.itemMovedHandler(a.items[0], a.location, a.oldLocation);
					break;
				case f.CollectionEventKind.REMOVE:
					this.itemRemovedHandler(a.items, a.location);
					break;
				case f.CollectionEventKind.UPDATE:
					this.itemUpdatedHandler(a.items[0], a.location);
					break;
				case f.CollectionEventKind.REPLACE:
					this.itemRemoved(a.oldItems[0], a.location);
					this.itemAdded(a.items[0], a.location);
					break;
				case f.CollectionEventKind.RESET:
				case f.CollectionEventKind.REFRESH:
					if (this.layout && this.layout.useVirtualLayout) for (var b in this.indexToRenderer) b = parseInt(b),
					this.freeRendererByIndex(b);
					this.dataProviderChanged = !0;
					this.invalidateProperties()
				}
				this.invalidateSize();
				this.invalidateDisplayList()
			};
			a.itemAddedHandler = function(a, b) {
				for (var d = a.length,
				e = 0; e < d; e++) this.itemAdded(a[e], b + e);
				this.resetRenderersIndices()
			};
			a.itemMovedHandler = function(a, b, d) {
				this.itemRemoved(a, d);
				this.itemAdded(a, b);
				this.resetRenderersIndices()
			};
			a.itemRemovedHandler = function(a, b) {
				for (var d = a.length - 1; 0 <= d; d--) this.itemRemoved(a[d], b + d);
				this.resetRenderersIndices()
			};
			a.itemAdded = function(a, b) {
				this.layout && this.layout.elementAdded(b);
				if (this.layout && this.layout.useVirtualLayout) {
					var d = this.virtualRendererIndices;
					if (d) {
						for (var e = d.length,
						g = 0; g < e; g++) {
							var n = d[g];
							n >= b && (d[g] = n + 1)
						}
						this.indexToRenderer.splice(b, 0, null)
					}
				} else d = this.itemToRendererClass(a),
				d = this.createOneRenderer(d),
				this.indexToRenderer.splice(b, 0, d),
				d && (this.updateRenderer(d, b, a), f.RendererExistenceEvent.dispatchRendererExistenceEvent(this, f.RendererExistenceEvent.RENDERER_ADD, d, b, a))
			};
			a.itemRemoved = function(a, b) {
				this.layout && this.layout.elementRemoved(b);
				var d = this.virtualRendererIndices;
				if (d && 0 < d.length) {
					for (var g = -1,
					u = d.length,
					n = 0; n < u; n++) {
						var k = d[n];
						k == b ? g = n: k > b && (d[n] = k - 1)
					} - 1 != g && d.splice(g, 1)
				}
				d = this.indexToRenderer[b];
				this.indexToRenderer.length > b && this.indexToRenderer.splice(b, 1);
				f.RendererExistenceEvent.dispatchRendererExistenceEvent(this, f.RendererExistenceEvent.RENDERER_REMOVE, d, b, a);
				d && d instanceof e.DisplayObject && this.recycle(d)
			};
			a.recycle = function(a) {
				this._removeFromDisplayList(a);
				"ownerChanged" in a && a.ownerChanged(null);
				var b = this.rendererToClassMap[a.hashCode].hashCode;
				this.recyclerDic[b] || (this.recyclerDic[b] = new e.Recycler);
				this.recyclerDic[b].push(a)
			};
			a.resetRenderersIndices = function() {
				if (0 != this.indexToRenderer.length) if (this.layout && this.layout.useVirtualLayout) for (var a = this.virtualRendererIndices,
				b = a.length,
				d = 0; d < b; d++) {
					var e = a[d];
					this.resetRendererItemIndex(e)
				} else for (a = this.indexToRenderer.length, e = 0; e < a; e++) this.resetRendererItemIndex(e)
			};
			a.itemUpdatedHandler = function(a, b) {
				if (!this.renderersBeingUpdated) {
					var d = this.indexToRenderer[b];
					d && this.updateRenderer(d, b, a)
				}
			};
			a.resetRendererItemIndex = function(a) {
				var b = this.indexToRenderer[a];
				b && (b.itemIndex = a)
			};
			Object.defineProperty(a, "itemRenderer", {
				get: function() {
					return this._itemRenderer
				},
				set: function(a) {
					this._itemRenderer !== a && (this._itemRenderer = a, this.cleanFreeRenderer = this.typicalItemChanged = this.itemRendererChanged = !0, this.removeDataProviderListener(), this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "itemRendererSkinName", {
				get: function() {
					return this._itemRendererSkinName
				},
				set: function(a) {
					this._itemRendererSkinName != a && (this._itemRendererSkinName = a) && this.initialized && (this.itemRendererSkinNameChange = !0, this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "itemRendererFunction", {
				get: function() {
					return this._itemRendererFunction
				},
				set: function(a) {
					this._itemRendererFunction != a && (this._itemRendererFunction = a, this.typicalItemChanged = this.itemRendererChanged = !0, this.removeDataProviderListener(), this.invalidateProperties())
				},
				enumerable: !0,
				configurable: !0
			});
			a.itemToRendererClass = function(a) {
				null != this._itemRendererFunction ? (a = this._itemRendererFunction(a), a || (a = this._itemRenderer)) : a = this._itemRenderer;
				return a ? a: b.defaultRendererFactory
			};
			a.createChildren = function() {
				if (!this.layout) {
					var a = new f.VerticalLayout;
					a.gap = 0;
					a.horizontalAlign = e.HorizontalAlign.CONTENT_JUSTIFY;
					this.layout = a
				}
				d.prototype.createChildren.call(this)
			};
			a.commitProperties = function() {
				if (this.itemRendererChanged || this.dataProviderChanged || this.useVirtualLayoutChanged) this.removeAllRenderers(),
				this.layout && this.layout.clearVirtualLayoutCache(),
				this.setTypicalLayoutRect(null),
				this.itemRendererChanged = this.useVirtualLayoutChanged = !1,
				this._dataProvider && this._dataProvider.addEventListener(f.CollectionEvent.COLLECTION_CHANGE, this.onCollectionChange, this),
				this.layout && this.layout.useVirtualLayout ? (this.invalidateSize(), this.invalidateDisplayList()) : this.createRenderers(),
				this.dataProviderChanged && (this.dataProviderChanged = !1, this.verticalScrollPosition = this.horizontalScrollPosition = 0);
				d.prototype.commitProperties.call(this);
				this.typicalItemChanged && (this.typicalItemChanged = !1, this._dataProvider && 0 < this._dataProvider.length && (this.typicalItem = this._dataProvider.getItemAt(0), this.measureRendererSize()));
				if (this.itemRendererSkinNameChange) {
					this.itemRendererSkinNameChange = !1;
					for (var a = this.indexToRenderer.length,
					b = 0; b < a; b++) this.setItemRenderSkinName(this.indexToRenderer[b]);
					var e = this.freeRenderers,
					g;
					for (g in e) {
						var u = e[g];
						if (u) for (a = u.length, b = 0; b < a; b++) this.setItemRenderSkinName(u[b])
					}
				}
			};
			a.measure = function() {
				this.layout && this.layout.useVirtualLayout && this.ensureTypicalLayoutElement();
				d.prototype.measure.call(this)
			};
			a.updateDisplayList = function(a, b) {
				this._layoutInvalidateDisplayListFlag && this.layout && this.layout.useVirtualLayout && (this.virtualLayoutUnderway = !0, this.ensureTypicalLayoutElement());
				d.prototype.updateDisplayList.call(this, a, b);
				this.virtualLayoutUnderway && this.finishVirtualLayout()
			};
			a.ensureTypicalLayoutElement = function() { ! this.layout.typicalLayoutRect && this._dataProvider && 0 < this._dataProvider.length && (this.typicalItem = this._dataProvider.getItemAt(0), this.measureRendererSize())
			};
			a.measureRendererSize = function() {
				if (this.typicalItem) {
					var a = this.itemToRendererClass(this.typicalItem);
					if (a = this.createOneRenderer(a)) {
						this.createNewRendererFlag = !0;
						this.updateRenderer(a, 0, this.typicalItem);
						"validateNow" in a && a.validateNow();
						var b = new e.Rectangle(0, 0, a.preferredWidth, a.preferredHeight);
						this.recycle(a);
						this.setTypicalLayoutRect(b);
						this.createNewRendererFlag = !1
					} else this.setTypicalLayoutRect(null)
				} else this.setTypicalLayoutRect(null)
			};
			a.setTypicalLayoutRect = function(a) {
				this.typicalLayoutRect = a;
				this.layout && (this.layout.typicalLayoutRect = a)
			};
			a.removeAllRenderers = function() {
				for (var a = this.indexToRenderer.length,
				b, d = 0; d < a; d++) if (b = this.indexToRenderer[d]) this.recycle(b),
				f.RendererExistenceEvent.dispatchRendererExistenceEvent(this, f.RendererExistenceEvent.RENDERER_REMOVE, b, b.itemIndex, b.data);
				this.indexToRenderer = [];
				this.virtualRendererIndices = null;
				this.cleanFreeRenderer && this.cleanAllFreeRenderer()
			};
			a.createRenderers = function() {
				if (this._dataProvider) for (var a = 0,
				b = this._dataProvider.length,
				d = 0; d < b; d++) {
					var e = this._dataProvider.getItemAt(d),
					g = this.itemToRendererClass(e);
					if (g = this.createOneRenderer(g)) this.indexToRenderer[a] = g,
					this.updateRenderer(g, a, e),
					f.RendererExistenceEvent.dispatchRendererExistenceEvent(this, f.RendererExistenceEvent.RENDERER_ADD, g, a, e),
					a++
				}
			};
			a.updateRenderer = function(a, b, d) {
				this.renderersBeingUpdated = !0;
				this._rendererOwner ? a = this._rendererOwner.updateRenderer(a, b, d) : ("ownerChanged" in a && a.ownerChanged(this), a.itemIndex = b, a.label = this.itemToLabel(d), a.data = d);
				this.renderersBeingUpdated = !1;
				return a
			};
			a.itemToLabel = function(a) {
				return a ? a.toString() : " "
			};
			a.getElementAt = function(a) {
				return this.indexToRenderer[a]
			};
			a.getElementIndex = function(a) {
				return a ? this.indexToRenderer.indexOf(a) : -1
			};
			Object.defineProperty(a, "numElements", {
				get: function() {
					return this._dataProvider ? this._dataProvider.length: 0
				},
				enumerable: !0,
				configurable: !0
			});
			a.addChild = function(a) {
				throw Error(e.getString(3004, e.getString(3003)));
			};
			a.addChildAt = function(a, b) {
				throw Error(e.getString(3005, e.getString(3003)));
			};
			a.removeChild = function(a) {
				throw Error(e.getString(3006, e.getString(3003)));
			};
			a.removeChildAt = function(a) {
				throw Error(e.getString(3007, e.getString(3003)));
			};
			a.setChildIndex = function(a, b) {
				throw Error(e.getString(3008, e.getString(3003)));
			};
			a.swapChildren = function(a, b) {
				throw Error(e.getString(3009, e.getString(3003)));
			};
			a.swapChildrenAt = function(a, b) {
				throw Error(e.getString(3010, e.getString(3003)));
			};
			b.defaultRendererFactory = new f.ClassFactory(f.ItemRenderer);
			return b
		} (f.GroupBase);
		f.DataGroup = g;
		g.prototype.__class__ = "egret.gui.DataGroup"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._placeHolderGroup = this.contentGroup = null;
				this.contentGroupProperties = {}
			}
			__extends(b, d);
			var a = b.prototype;
			a._getCurrentContentGroup = function() {
				return null == this.contentGroup ? (null == this._placeHolderGroup && (this._placeHolderGroup = new e.Group, this._placeHolderGroup.visible = !1, this._addToDisplayList(this._placeHolderGroup)), this._placeHolderGroup.addEventListener(e.ElementExistenceEvent.ELEMENT_ADD, this._contentGroup_elementAddedHandler, this), this._placeHolderGroup.addEventListener(e.ElementExistenceEvent.ELEMENT_REMOVE, this._contentGroup_elementRemovedHandler, this), this._placeHolderGroup) : this.contentGroup
			};
			Object.defineProperty(a, "elementsContent", {
				set: function(a) {
					this._getCurrentContentGroup().elementsContent = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "numElements", {
				get: function() {
					return this._getCurrentContentGroup().numElements
				},
				enumerable: !0,
				configurable: !0
			});
			a.getElementAt = function(a) {
				return this._getCurrentContentGroup().getElementAt(a)
			};
			a.addElement = function(a) {
				return this._getCurrentContentGroup().addElement(a)
			};
			a.addElementAt = function(a, b) {
				return this._getCurrentContentGroup().addElementAt(a, b)
			};
			a.removeElement = function(a) {
				return this._getCurrentContentGroup().removeElement(a)
			};
			a.removeElementAt = function(a) {
				return this._getCurrentContentGroup().removeElementAt(a)
			};
			a.removeAllElements = function() {
				this._getCurrentContentGroup().removeAllElements()
			};
			a.getElementIndex = function(a) {
				return this._getCurrentContentGroup().getElementIndex(a)
			};
			a.setElementIndex = function(a, b) {
				this._getCurrentContentGroup().setElementIndex(a, b)
			};
			a.swapElements = function(a, b) {
				this._getCurrentContentGroup().swapElements(a, b)
			};
			a.swapElementsAt = function(a, b) {
				this._getCurrentContentGroup().swapElementsAt(a, b)
			};
			Object.defineProperty(a, "layout", {
				get: function() {
					return null != this.contentGroup ? this.contentGroup.layout: this.contentGroupProperties.layout
				},
				set: function(a) {
					null != this.contentGroup ? this.contentGroup.layout = a: this.contentGroupProperties.layout = a
				},
				enumerable: !0,
				configurable: !0
			});
			a.partAdded = function(a, b) {
				d.prototype.partAdded.call(this, a, b);
				if (b == this.contentGroup) {
					void 0 !== this.contentGroupProperties.layout && (this.contentGroup.layout = this.contentGroupProperties.layout, this.contentGroupProperties = {});
					if (this._placeHolderGroup) {
						this._placeHolderGroup.removeEventListener(e.ElementExistenceEvent.ELEMENT_ADD, this._contentGroup_elementAddedHandler, this);
						this._placeHolderGroup.removeEventListener(e.ElementExistenceEvent.ELEMENT_REMOVE, this._contentGroup_elementRemovedHandler, this);
						for (var g = this._placeHolderGroup._getElementsContent().concat(), v = this._placeHolderGroup.numElements; 0 < v; v--) {
							var u = this._placeHolderGroup.removeElementAt(0);
							u.ownerChanged(null)
						}
						this._removeFromDisplayList(this._placeHolderGroup);
						this.contentGroup.elementsContent = g;
						for (v = g.length - 1; 0 <= v; v--) u = g[v],
						u.ownerChanged(this);
						this._placeHolderGroup = null
					}
					this.contentGroup.addEventListener(e.ElementExistenceEvent.ELEMENT_ADD, this._contentGroup_elementAddedHandler, this);
					this.contentGroup.addEventListener(e.ElementExistenceEvent.ELEMENT_REMOVE, this._contentGroup_elementRemovedHandler, this)
				}
			};
			a.partRemoved = function(a, b) {
				d.prototype.partRemoved.call(this, a, b);
				if (b == this.contentGroup && (this.contentGroup.removeEventListener(e.ElementExistenceEvent.ELEMENT_ADD, this._contentGroup_elementAddedHandler, this), this.contentGroup.removeEventListener(e.ElementExistenceEvent.ELEMENT_REMOVE, this._contentGroup_elementRemovedHandler, this), this.contentGroupProperties.layout = this.contentGroup.layout, this.contentGroup.layout = null, 0 < this.contentGroup.numElements)) {
					for (this._placeHolderGroup = new e.Group; 0 < this.contentGroup.numElements;) this._placeHolderGroup.addElement(this.contentGroup.getElementAt(0));
					this._placeHolderGroup.addEventListener(e.ElementExistenceEvent.ELEMENT_ADD, this._contentGroup_elementAddedHandler, this);
					this._placeHolderGroup.addEventListener(e.ElementExistenceEvent.ELEMENT_REMOVE, this._contentGroup_elementRemovedHandler, this)
				}
			};
			a._contentGroup_elementAddedHandler = function(a) {
				a.element.ownerChanged(this);
				this.dispatchEvent(a)
			};
			a._contentGroup_elementRemovedHandler = function(a) {
				a.element.ownerChanged(null);
				this.dispatchEvent(a)
			};
			return b
		} (e.SkinnableComponent);
		e.SkinnableContainer = g;
		g.prototype.__class__ = "egret.gui.SkinnableContainer"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function(d) {
			function b() {
				d.call(this);
				this.dataGroup = null;
				this._dataGroupProperties = {}
			}
			__extends(b, d);
			var a = b.prototype;
			a.updateRenderer = function(a, b, d) {
				"ownerChanged" in a && a.ownerChanged(this);
				a.itemIndex = b;
				a.label = this.itemToLabel(d);
				a.data = d;
				return a
			};
			a.itemToLabel = function(a) {
				return null !== a ? a.toString() : " "
			};
			Object.defineProperty(a, "dataProvider", {
				get: function() {
					return this._getDataProvider()
				},
				set: function(a) {
					this._setDataProvider(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a._getDataProvider = function() {
				return null != this.dataGroup ? this.dataGroup.dataProvider: this._dataGroupProperties.dataProvider
			};
			a._setDataProvider = function(a) {
				null == this.dataGroup ? this._dataGroupProperties.dataProvider = a: (this.dataGroup.dataProvider = a, this._dataGroupProperties.dataProvider = !0)
			};
			Object.defineProperty(a, "itemRenderer", {
				get: function() {
					return this.dataGroup ? this.dataGroup.itemRenderer: this._dataGroupProperties.itemRenderer
				},
				set: function(a) {
					null == this.dataGroup ? this._dataGroupProperties.itemRenderer = a: (this.dataGroup.itemRenderer = a, this._dataGroupProperties.itemRenderer = !0)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "itemRendererSkinName", {
				get: function() {
					return this.dataGroup ? this.dataGroup.itemRendererSkinName: this._dataGroupProperties.itemRendererSkinName
				},
				set: function(a) {
					null == this.dataGroup ? this._dataGroupProperties.itemRendererSkinName = a: (this.dataGroup.itemRendererSkinName = a, this._dataGroupProperties.itemRendererSkinName = !0)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "itemRendererFunction", {
				get: function() {
					return this.dataGroup ? this.dataGroup.itemRendererFunction: this._dataGroupProperties.itemRendererFunction
				},
				set: function(a) {
					null == this.dataGroup ? this._dataGroupProperties.itemRendererFunction = a: (this.dataGroup.itemRendererFunction = a, this._dataGroupProperties.itemRendererFunction = !0)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "layout", {
				get: function() {
					return this.dataGroup ? this.dataGroup.layout: this._dataGroupProperties.layout
				},
				set: function(a) {
					this._setLayout(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setLayout = function(a) {
				null == this.dataGroup ? this._dataGroupProperties.layout = a: (this.dataGroup.layout = a, this._dataGroupProperties.layout = !0)
			};
			a.partAdded = function(a, b) {
				d.prototype.partAdded.call(this, a, b);
				if (b == this.dataGroup) {
					var g = {};
					void 0 !== this._dataGroupProperties.layout && (this.dataGroup.layout = this._dataGroupProperties.layout, g.layout = !0);
					void 0 !== this._dataGroupProperties.dataProvider && (this.dataGroup.dataProvider = this._dataGroupProperties.dataProvider, g.dataProvider = !0);
					void 0 !== this._dataGroupProperties.itemRenderer && (this.dataGroup.itemRenderer = this._dataGroupProperties.itemRenderer, g.itemRenderer = !0);
					void 0 !== this._dataGroupProperties.itemRendererSkinName && (this.dataGroup.itemRendererSkinName = this._dataGroupProperties.itemRendererSkinName, g.itemRendererSkinName = !0);
					void 0 !== this._dataGroupProperties.itemRendererFunction && (this.dataGroup.itemRendererFunction = this._dataGroupProperties.itemRendererFunction, g.itemRendererFunction = !0);
					this.dataGroup._rendererOwner = this;
					this._dataGroupProperties = g;
					this.hasEventListener(e.RendererExistenceEvent.RENDERER_ADD) && this.dataGroup.addEventListener(e.RendererExistenceEvent.RENDERER_ADD, this.dispatchEvent, this);
					this.hasEventListener(e.RendererExistenceEvent.RENDERER_REMOVE) && this.dataGroup.addEventListener(e.RendererExistenceEvent.RENDERER_REMOVE, this.dispatchEvent, this)
				}
			};
			a.partRemoved = function(a, b) {
				d.prototype.partRemoved.call(this, a, b);
				if (b == this.dataGroup) {
					this.dataGroup.removeEventListener(e.RendererExistenceEvent.RENDERER_ADD, this.dispatchEvent, this);
					this.dataGroup.removeEventListener(e.RendererExistenceEvent.RENDERER_REMOVE, this.dispatchEvent, this);
					var g = {};
					this._dataGroupProperties.layout && (g.layout = this.dataGroup.layout);
					this._dataGroupProperties.dataProvider && (g.dataProvider = this.dataGroup.dataProvider);
					this._dataGroupProperties.itemRenderer && (g.itemRenderer = this.dataGroup.itemRenderer);
					this._dataGroupProperties.itemRendererSkinName && (g.itemRendererSkinName = this.dataGroup.itemRendererSkinName);
					this._dataGroupProperties.itemRendererFunction && (g.itemRendererFunction = this.dataGroup.itemRendererFunction);
					this._dataGroupProperties = g;
					this.dataGroup._rendererOwner = null;
					this.dataGroup.dataProvider = null;
					this.dataGroup.layout = null
				}
			};
			a.addEventListener = function(a, b, g, v, u) {
				void 0 === v && (v = !1);
				void 0 === u && (u = 0);
				d.prototype.addEventListener.call(this, a, b, g, v, u);
				a == e.RendererExistenceEvent.RENDERER_ADD && this.dataGroup && this.dataGroup.addEventListener(e.RendererExistenceEvent.RENDERER_ADD, this.dispatchEvent, this);
				a == e.RendererExistenceEvent.RENDERER_REMOVE && this.dataGroup && this.dataGroup.addEventListener(e.RendererExistenceEvent.RENDERER_REMOVE, this.dispatchEvent, this)
			};
			a.removeEventListener = function(a, b, g, v) {
				void 0 === v && (v = !1);
				d.prototype.removeEventListener.call(this, a, b, g, v);
				a == e.RendererExistenceEvent.RENDERER_ADD && this.dataGroup && (this.hasEventListener(e.RendererExistenceEvent.RENDERER_ADD) || this.dataGroup.removeEventListener(e.RendererExistenceEvent.RENDERER_ADD, this.dispatchEvent, this));
				a == e.RendererExistenceEvent.RENDERER_REMOVE && this.dataGroup && (this.hasEventListener(e.RendererExistenceEvent.RENDERER_REMOVE) || this.dataGroup.removeEventListener(e.RendererExistenceEvent.RENDERER_REMOVE, this.dispatchEvent, this))
			};
			return b
		} (e.SkinnableComponent);
		e.SkinnableDataContainer = g;
		g.prototype.__class__ = "egret.gui.SkinnableDataContainer"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this.dataProviderChanged = this._doingWholesaleChanges = !1;
				this._labelField = "label";
				this.labelFieldOrFunctionChanged = !1;
				this._labelFunction = null;
				this.requireSelectionChanged = this._requireSelection = !1;
				this._proposedSelectedIndex = b.NO_PROPOSED_SELECTION;
				this._selectedIndex = b.NO_SELECTION;
				this._dispatchChangeAfterSelection = this._allowCustomSelectedItem = !1;
				this._pendingSelectedItem = void 0;
				this._selectedItem = null;
				this.selectedIndexAdjusted = this._useVirtualLayout = !1
			}
			__extends(b, d);
			var a = b.prototype;
			a._setDataProvider = function(a) {
				this.dataProvider && this.dataProvider.removeEventListener(f.CollectionEvent.COLLECTION_CHANGE, this.dataProvider_collectionChangeHandler, this);
				this._doingWholesaleChanges = this.dataProviderChanged = !0;
				a && a.addEventListener(f.CollectionEvent.COLLECTION_CHANGE, this.dataProvider_collectionChangeHandler, this);
				d.prototype._setDataProvider.call(this, a);
				this.invalidateProperties()
			};
			Object.defineProperty(a, "layout", {
				get: function() {
					return this.dataGroup ? this.dataGroup.layout: this._dataGroupProperties.layout
				},
				set: function(a) {
					a && this.useVirtualLayout && (a.useVirtualLayout = !0);
					this._setLayout(a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "labelField", {
				get: function() {
					return this._labelField
				},
				set: function(a) {
					this._setLabelField(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setLabelField = function(a) {
				a != this._labelField && (this._labelField = a, this.labelFieldOrFunctionChanged = !0, this.invalidateProperties())
			};
			Object.defineProperty(a, "labelFunction", {
				get: function() {
					return this._labelFunction
				},
				set: function(a) {
					this._setLabelFunction(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setLabelFunction = function(a) {
				a != this._labelFunction && (this._labelFunction = a, this.labelFieldOrFunctionChanged = !0, this.invalidateProperties())
			};
			Object.defineProperty(a, "requireSelection", {
				get: function() {
					return this._requireSelection
				},
				set: function(a) {
					this._setRequireSelection(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setRequireSelection = function(a) {
				a != this._requireSelection && (this._requireSelection = a) && (this.requireSelectionChanged = !0, this.invalidateProperties())
			};
			Object.defineProperty(a, "selectedIndex", {
				get: function() {
					return this._getSelectedIndex()
				},
				set: function(a) {
					this._setSelectedIndex(a, !1)
				},
				enumerable: !0,
				configurable: !0
			});
			a._getSelectedIndex = function() {
				return this._proposedSelectedIndex != b.NO_PROPOSED_SELECTION ? this._proposedSelectedIndex: this._selectedIndex
			};
			a._setSelectedIndex = function(a, b) {
				void 0 === b && (b = !1);
				a != this.selectedIndex && (b && (this._dispatchChangeAfterSelection = this._dispatchChangeAfterSelection || b), this._proposedSelectedIndex = a, this.invalidateProperties())
			};
			Object.defineProperty(a, "selectedItem", {
				get: function() {
					return void 0 !== this._pendingSelectedItem ? this._pendingSelectedItem: this._allowCustomSelectedItem && this.selectedIndex == b.CUSTOM_SELECTED_ITEM ? this._selectedItem: this.selectedIndex == b.NO_SELECTION || null == this.dataProvider ? void 0 : this.dataProvider.length > this.selectedIndex ? this.dataProvider.getItemAt(this.selectedIndex) : void 0
				},
				set: function(a) {
					this._setSelectedItem(a, !1)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setSelectedItem = function(a, b) {
				void 0 === b && (b = !1);
				this.selectedItem !== a && (b && (this._dispatchChangeAfterSelection = this._dispatchChangeAfterSelection || b), this._pendingSelectedItem = a, this.invalidateProperties())
			};
			Object.defineProperty(a, "useVirtualLayout", {
				get: function() {
					return this._getUseVirtualLayout()
				},
				set: function(a) {
					this._setUseVirtualLayout(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a._getUseVirtualLayout = function() {
				return this.layout ? this.layout.useVirtualLayout: this._useVirtualLayout
			};
			a._setUseVirtualLayout = function(a) {
				a != this.useVirtualLayout && (this._useVirtualLayout = a, this.layout && (this.layout.useVirtualLayout = a))
			};
			a.commitProperties = function() {
				d.prototype.commitProperties.call(this);
				this.dataProviderChanged && (this._doingWholesaleChanges = this.dataProviderChanged = !1, 0 <= this.selectedIndex && this.dataProvider && this.selectedIndex < this.dataProvider.length ? this.itemSelected(this.selectedIndex, !0) : this.requireSelection ? this._proposedSelectedIndex = 0 : this._setSelectedIndex( - 1, !1));
				this.requireSelectionChanged && (this.requireSelectionChanged = !1, this.requireSelection && this.selectedIndex == b.NO_SELECTION && this.dataProvider && 0 < this.dataProvider.length && (this._proposedSelectedIndex = 0));
				void 0 !== this._pendingSelectedItem && (this._proposedSelectedIndex = this.dataProvider ? this.dataProvider.getItemIndex(this._pendingSelectedItem) : b.NO_SELECTION, this._allowCustomSelectedItem && -1 == this._proposedSelectedIndex && (this._proposedSelectedIndex = b.CUSTOM_SELECTED_ITEM, this._selectedItem = this._pendingSelectedItem), this._pendingSelectedItem = void 0);
				var a = !1;
				this._proposedSelectedIndex != b.NO_PROPOSED_SELECTION && (a = this.commitSelection());
				this.selectedIndexAdjusted && (this.selectedIndexAdjusted = !1, a || f.UIEvent.dispatchUIEvent(this, f.UIEvent.VALUE_COMMIT));
				if (this.labelFieldOrFunctionChanged) {
					if (null != this.dataGroup) if (this.layout && this.layout.useVirtualLayout) for (var e = this.dataGroup.getElementIndicesInView(), g = e.length, v = 0; v < g; v++) a = e[v],
					this.updateRendererLabelProperty(a);
					else for (e = this.dataGroup.numElements, a = 0; a < e; a++) this.updateRendererLabelProperty(a);
					this.labelFieldOrFunctionChanged = !1
				}
			};
			a.updateRendererLabelProperty = function(a) {
				if (a = this.dataGroup.getElementAt(a)) a.label = this.itemToLabel(a.data)
			};
			a.partAdded = function(a, b) {
				d.prototype.partAdded.call(this, a, b);
				b == this.dataGroup && (this._useVirtualLayout && this.dataGroup.layout && (this.dataGroup.layout.useVirtualLayout = !0), this.dataGroup.addEventListener(f.RendererExistenceEvent.RENDERER_ADD, this.dataGroup_rendererAddHandler, this), this.dataGroup.addEventListener(f.RendererExistenceEvent.RENDERER_REMOVE, this.dataGroup_rendererRemoveHandler, this))
			};
			a.partRemoved = function(a, b) {
				d.prototype.partRemoved.call(this, a, b);
				b == this.dataGroup && (this.dataGroup.removeEventListener(f.RendererExistenceEvent.RENDERER_ADD, this.dataGroup_rendererAddHandler, this), this.dataGroup.removeEventListener(f.RendererExistenceEvent.RENDERER_REMOVE, this.dataGroup_rendererRemoveHandler, this))
			};
			a.updateRenderer = function(a, b, e) {
				this.itemSelected(b, this._isItemIndexSelected(b));
				return d.prototype.updateRenderer.call(this, a, b, e)
			};
			a.itemToLabel = function(a) {
				if (null != this._labelFunction) return this._labelFunction(a);
				if ("string" == typeof a) return a;
				if (a instanceof e.XML) try {
					0 != a[this.labelField].length() && (a = a[this.labelField])
				} catch(b) {} else if (a instanceof Object) try {
					null != a[this.labelField] && (a = a[this.labelField])
				} catch(d) {}
				if ("string" == typeof a) return a;
				try {
					if (null !== a) return a.toString()
				} catch(f) {}
				return " "
			};
			a.itemSelected = function(a, b) {
				if (this.dataGroup) {
					var d = this.dataGroup.getElementAt(a);
					null != d && (d.selected = b)
				}
			};
			a._isItemIndexSelected = function(a) {
				return a == this.selectedIndex
			};
			a.commitSelection = function(a) {
				void 0 === a && (a = !0);
				var d = this.dataProvider ? this.dataProvider.length - 1 : -1,
				e = this._selectedIndex;
				if (!this._allowCustomSelectedItem || this._proposedSelectedIndex != b.CUSTOM_SELECTED_ITEM) if (this._proposedSelectedIndex < b.NO_SELECTION && (this._proposedSelectedIndex = b.NO_SELECTION), this._proposedSelectedIndex > d && (this._proposedSelectedIndex = d), this.requireSelection && this._proposedSelectedIndex == b.NO_SELECTION && this.dataProvider && 0 < this.dataProvider.length) return this._proposedSelectedIndex = b.NO_PROPOSED_SELECTION,
				this._dispatchChangeAfterSelection = !1;
				d = this._proposedSelectedIndex;
				if (this._dispatchChangeAfterSelection && !f.IndexChangeEvent.dispatchIndexChangeEvent(this, f.IndexChangeEvent.CHANGING, this._selectedIndex, this._proposedSelectedIndex, !0)) return this.itemSelected(this._proposedSelectedIndex, !1),
				this._proposedSelectedIndex = b.NO_PROPOSED_SELECTION,
				this._dispatchChangeAfterSelection = !1;
				this._selectedIndex = d;
				this._proposedSelectedIndex = b.NO_PROPOSED_SELECTION;
				e != b.NO_SELECTION && this.itemSelected(e, !1);
				this._selectedIndex != b.NO_SELECTION && this.itemSelected(this._selectedIndex, !0);
				a && (this._dispatchChangeAfterSelection && (f.IndexChangeEvent.dispatchIndexChangeEvent(this, f.IndexChangeEvent.CHANGE, e, this._selectedIndex), this._dispatchChangeAfterSelection = !1), f.UIEvent.dispatchUIEvent(this, f.UIEvent.VALUE_COMMIT));
				return ! 0
			};
			a.adjustSelection = function(a, d) {
				this._proposedSelectedIndex != b.NO_PROPOSED_SELECTION ? this._proposedSelectedIndex = a: this._selectedIndex = a;
				this.selectedIndexAdjusted = !0;
				this.invalidateProperties()
			};
			a.itemAdded = function(a) {
				this._doingWholesaleChanges || (this.selectedIndex == b.NO_SELECTION ? this.requireSelection && this.adjustSelection(a, !0) : a <= this.selectedIndex && this.adjustSelection(this.selectedIndex + 1, !0))
			};
			a.itemRemoved = function(a) {
				this.selectedIndex == b.NO_SELECTION || this._doingWholesaleChanges || (a == this.selectedIndex ? this.requireSelection && this.dataProvider && 0 < this.dataProvider.length ? 0 == a ? (this._proposedSelectedIndex = 0, this.invalidateProperties()) : this._setSelectedIndex(0, !1) : this.adjustSelection( - 1, !1) : a < this.selectedIndex && this.adjustSelection(this.selectedIndex - 1, !1))
			};
			a.dataGroup_rendererAddHandler = function(a) {
				a = a.renderer;
				null != a && (a.addEventListener(e.TouchEvent.TOUCH_ROLL_OVER, this.item_mouseEventHandler, this), a.addEventListener(e.TouchEvent.TOUCH_ROLL_OUT, this.item_mouseEventHandler, this))
			};
			a.dataGroup_rendererRemoveHandler = function(a) {
				a = a.renderer;
				null != a && (a.removeEventListener(e.TouchEvent.TOUCH_ROLL_OVER, this.item_mouseEventHandler, this), a.removeEventListener(e.TouchEvent.TOUCH_ROLL_OUT, this.item_mouseEventHandler, this))
			};
			a.item_mouseEventHandler = function(a) {
				var d = a.type,
				d = b.TYPE_MAP[d];
				this.hasEventListener(d) && this._dispatchListEvent(a, d, a.currentTarget)
			};
			a._dispatchListEvent = function(a, b, d) {
				var e = -1,
				e = d ? d.itemIndex: this.dataGroup.getElementIndex(a.currentTarget),
				g = this.dataProvider.getItemAt(e);
				f.ListEvent.dispatchListEvent(this, b, a, e, g, d)
			};
			a.dataProvider_collectionChangeHandler = function(a) {
				var d = a.items;
				if (a.kind == f.CollectionEventKind.ADD) for (var d = d.length,
				e = 0; e < d; e++) this.itemAdded(a.location + e);
				else if (a.kind == f.CollectionEventKind.REMOVE) for (d = d.length, e = d - 1; 0 <= e; e--) this.itemRemoved(a.location + e);
				else a.kind == f.CollectionEventKind.MOVE ? (this.itemRemoved(a.oldLocation), this.itemAdded(a.location)) : a.kind == f.CollectionEventKind.RESET ? 0 == this.dataProvider.length ? this._setSelectedIndex(b.NO_SELECTION, !1) : (this.dataProviderChanged = !0, this.invalidateProperties()) : a.kind == f.CollectionEventKind.REFRESH && this.dataProviderRefreshed()
			};
			a.dataProviderRefreshed = function() {
				this._setSelectedIndex(b.NO_SELECTION, !1)
			};
			b.NO_SELECTION = -1;
			b.NO_PROPOSED_SELECTION = -2;
			b.CUSTOM_SELECTED_ITEM = -3;
			b.TYPE_MAP = {
				rollOver: "itemRollOver",
				rollOut: "itemRollOut"
			};
			return b
		} (f.SkinnableDataContainer);
		f.ListBase = g;
		g.prototype.__class__ = "egret.gui.ListBase"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function(d) {
			function b() {
				d.call(this);
				this.titleDisplay = null;
				this._title = "";
				this.touchEnabled = this.titleChanged = !1
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "title", {
				get: function() {
					return this._title
				},
				set: function(a) {
					this._title = a;
					this.titleDisplay && (this.titleDisplay.text = this.title)
				},
				enumerable: !0,
				configurable: !0
			});
			a.partAdded = function(a, b) {
				d.prototype.partAdded.call(this, a, b);
				b == this.titleDisplay && (this.titleDisplay.text = this.title)
			};
			return b
		} (e.SkinnableContainer);
		e.Panel = g;
		g.prototype.__class__ = "egret.gui.Panel"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this.moveArea = this.closeButton = null;
				this._autoBackToStage = this._showCloseButton = !0;
				this._offsetPointY = this._offsetPointX = NaN;
				this.addEventListener(e.TouchEvent.TOUCH_BEGIN, this.onWindowMouseDown, this, !0, 100)
			}
			__extends(b, d);
			var a = b.prototype;
			a.onWindowMouseDown = function(a) {
				this.enabled && this.isPopUp && a.target != this.closeButton && f.PopUpManager.bringToFront(this)
			};
			Object.defineProperty(a, "showCloseButton", {
				get: function() {
					return this._showCloseButton
				},
				set: function(a) {
					this._showCloseButton != a && (this._showCloseButton = a, this.closeButton && (this.closeButton.visible = this._showCloseButton))
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "autoBackToStage", {
				get: function() {
					return this._autoBackToStage
				},
				set: function(a) {
					this._autoBackToStage = a
				},
				enumerable: !0,
				configurable: !0
			});
			a.partAdded = function(a, b) {
				d.prototype.partAdded.call(this, a, b);
				b == this.moveArea ? this.moveArea.addEventListener(e.TouchEvent.TOUCH_BEGIN, this.moveArea_mouseDownHandler, this) : b == this.closeButton && (this.closeButton.addEventListener(e.TouchEvent.TOUCH_TAP, this.closeButton_clickHandler, this), this.closeButton.visible = this._showCloseButton)
			};
			a.partRemoved = function(a, b) {
				d.prototype.partRemoved.call(this, a, b);
				b == this.moveArea ? this.moveArea.removeEventListener(e.TouchEvent.TOUCH_BEGIN, this.moveArea_mouseDownHandler, this) : b == this.closeButton && this.closeButton.removeEventListener(e.TouchEvent.TOUCH_TAP, this.closeButton_clickHandler, this)
			};
			a.closeButton_clickHandler = function(a) {
				f.CloseEvent.dispatchCloseEvent(this, f.CloseEvent.CLOSE)
			};
			a.moveArea_mouseDownHandler = function(a) {
				this.enabled && this.isPopUp && (a = this.globalToLocal(a.stageX, a.stageY, e.Point.identity), this._offsetPointX = a.x, this._offsetPointY = a.y, this._UIC_Props_._includeInLayout = !1, f.UIGlobals.stage.addEventListener(e.TouchEvent.TOUCH_MOVE, this.moveArea_mouseMoveHandler, this), f.UIGlobals.stage.addEventListener(e.TouchEvent.TOUCH_END, this.moveArea_mouseUpHandler, this), f.UIGlobals.stage.addEventListener(e.Event.LEAVE_STAGE, this.moveArea_mouseUpHandler, this))
			};
			a.moveArea_mouseMoveHandler = function(a) {
				a = this.globalToLocal(a.stageX, a.stageY, e.Point.identity);
				this.x += a.x - this._offsetPointX;
				this.y += a.y - this._offsetPointY
			};
			a.moveArea_mouseUpHandler = function(a) {
				f.UIGlobals.stage.removeEventListener(e.TouchEvent.TOUCH_MOVE, this.moveArea_mouseMoveHandler, this);
				f.UIGlobals.stage.removeEventListener(e.TouchEvent.TOUCH_END, this.moveArea_mouseUpHandler, this);
				f.UIGlobals.stage.removeEventListener(e.Event.LEAVE_STAGE, this.moveArea_mouseUpHandler, this);
				this._autoBackToStage && this.adjustPosForStage();
				f.LayoutUtil.adjustRelativeByXY(this);
				this.includeInLayout = !0
			};
			a.adjustPosForStage = function() {
				if (this.moveArea && this.stage) {
					var a = this.moveArea.localToGlobal(0, 0),
					b = a.x,
					d = a.y;
					35 > a.x + this.moveArea.width && (b = 35 - this.moveArea.width);
					a.x > this.stage.stageWidth - 20 && (b = this.stage.stageWidth - 20);
					20 > a.y + this.moveArea.height && (d = 20 - this.moveArea.height);
					a.y > this.stage.stageHeight - 20 && (d = this.stage.stageHeight - 20);
					this.x += b - a.x;
					this.y += d - a.y
				}
			};
			return b
		} (f.Panel);
		f.TitleWindow = g;
		g.prototype.__class__ = "egret.gui.TitleWindow"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this)
			}
			__extends(b, d);
			var a = b.prototype;
			a.pointToValue = function(a, b) {
				if (!this.thumb || !this.track) return 0;
				var d = this.maximum - this.minimum,
				e = this.track.layoutBoundsWidth - this.thumb.layoutBoundsWidth;
				return this.minimum + (0 != e ? a / e * d: 0)
			};
			a.updateSkinDisplayList = function() {
				if (this.thumb && this.track) {
					var a = this.track.layoutBoundsWidth - this.thumb.layoutBoundsWidth,
					b = this.maximum - this.minimum,
					a = 0 < b ? (this.pendingValue - this.minimum) / b * a: 0,
					d = this.track.localToGlobal(a, 0),
					b = d.x,
					d = d.y,
					f = this.thumb.parent.globalToLocal(b, d, e.Point.identity).x;
					this.thumb.setLayoutBoundsPosition(Math.round(f), this.thumb.layoutBoundsY);
					this.showTrackHighlight && this.trackHighlight && this.trackHighlight.parent && (b = this.trackHighlight.parent.globalToLocal(b, d, e.Point.identity).x - a, this.trackHighlight.x = Math.round(b), this.trackHighlight.width = Math.round(a))
				}
			};
			return b
		} (f.SliderBase);
		f.HSlider = g;
		g.prototype.__class__ = "egret.gui.HSlider"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.apply(this, arguments);
				this._thumbLengthRatio = 1
			}
			__extends(b, d);
			var a = b.prototype;
			a._setViewportMetric = function(a, b) {
				var d = Math.max(0, b - a);
				this._setMaximun(d);
				this._setMinimun(0);
				this._thumbLengthRatio = b > a ? a / b: 1
			};
			Object.defineProperty(a, "trackAlpha", {
				get: function() {
					return 1
				},
				set: function(a) {
					e.Logger.warningWithErrorId(1016, "HScrollBar.trackAlpha")
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "thumbAlpha", {
				get: function() {
					return 1
				},
				set: function(a) {
					e.Logger.warningWithErrorId(1016, "HScrollBar.thumbAlpha")
				},
				enumerable: !0,
				configurable: !0
			});
			a.setPosition = function(a) {
				this._setValue(a)
			};
			a.getPosition = function() {
				return this._getValue()
			};
			a._setValue = function(a) {
				a = Math.max(0, a);
				d.prototype._setValue.call(this, a)
			};
			a.setValue = function(a) {
				d.prototype.setValue.call(this, a)
			};
			a._animationUpdateHandler = function(a) {
				this.value = this.pendingValue = a.currentValue.value;
				this.dispatchEventWith(e.Event.CHANGE)
			};
			a.updateSkinDisplayList = function() {
				if (this.thumb && this.track) {
					var a = this.track.layoutBoundsWidth * this._thumbLengthRatio,
					b = this.thumb.layoutBoundsWidth,
					d = this.track.layoutBoundsWidth - this.thumb.layoutBoundsWidth,
					f = this.maximum - this.minimum,
					d = this.track.localToGlobal(0 < f ? (this.pendingValue - this.minimum) / f * d: 0, 0),
					d = this.thumb.parent.globalToLocal(d.x, d.y, e.Point.identity).x;
					this.thumb.setLayoutBoundsPosition(Math.round(d), this.thumb.layoutBoundsY);
					a != b && this.thumb.setLayoutBoundsSize(a, this.thumb.layoutBoundsHeight)
				}
			};
			return b
		} (f.HSlider);
		f.HScrollBar = g;
		g.prototype.__class__ = "egret.gui.HScrollBar"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this)
			}
			__extends(b, d);
			var a = b.prototype;
			a.pointToValue = function(a, b) {
				if (!this.thumb || !this.track) return 0;
				var d = this.maximum - this.minimum,
				e = this.track.layoutBoundsHeight - this.thumb.layoutBoundsHeight;
				return this.minimum + (0 != e ? (e - b) / e * d: 0)
			};
			a.updateSkinDisplayList = function() {
				if (this.thumb && this.track) {
					var a = this.thumb.layoutBoundsHeight,
					b = this.track.layoutBoundsHeight - a,
					d = this.maximum - this.minimum,
					f = this.track.localToGlobal(0, 0 < d ? b - (this.pendingValue - this.minimum) / d * b: 0),
					d = f.x,
					f = f.y,
					g = this.thumb.parent.globalToLocal(d, f, e.Point.identity).y;
					this.thumb.setLayoutBoundsPosition(this.thumb.layoutBoundsX, Math.round(g));
					this.showTrackHighlight && this.trackHighlight && this.trackHighlight._DO_Props_._parent && (d = this.trackHighlight._DO_Props_._parent.globalToLocal(d, f, e.Point.identity).y, this.trackHighlight.y = Math.round(d + a), this.trackHighlight.height = Math.round(b - d))
				}
			};
			return b
		} (f.SliderBase);
		f.VSlider = g;
		g.prototype.__class__ = "egret.gui.VSlider"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._thumbLengthRatio = 1
			}
			__extends(b, d);
			var a = b.prototype;
			a._setViewportMetric = function(a, b) {
				var d = Math.max(0, b - a);
				this._thumbLengthRatio = b <= a ? 1 : a / b;
				this._setMaximun(d);
				this._setMinimun(0)
			};
			Object.defineProperty(a, "trackAlpha", {
				get: function() {
					return 1
				},
				set: function(a) {
					e.Logger.warningWithErrorId(1016, "VScrollBar.trackAlpha")
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "thumbAlpha", {
				get: function() {
					return 1
				},
				set: function(a) {
					e.Logger.warningWithErrorId(1016, "VScrollBar.thumbAlpha")
				},
				enumerable: !0,
				configurable: !0
			});
			a.setPosition = function(a) {
				this._setValue(a)
			};
			a.getPosition = function() {
				return this._getValue()
			};
			a._setValue = function(a) {
				a = Math.max(0, a);
				d.prototype._setValue.call(this, a)
			};
			a.setValue = function(a) {
				d.prototype.setValue.call(this, a)
			};
			a._animationUpdateHandler = function(a) {
				this.value = this.pendingValue = a.currentValue.value;
				this.dispatchEventWith(e.Event.CHANGE)
			};
			a.pointToValue = function(a, b) {
				if (!this.thumb || !this.track) return 0;
				var d = this.maximum - this.minimum,
				e = this.track.layoutBoundsHeight - this.thumb.layoutBoundsHeight;
				return this.minimum + (0 != e ? b / e * d: 0)
			};
			a.updateSkinDisplayList = function() {
				if (this.thumb && this.track) {
					var a = this.track.layoutBoundsHeight * this._thumbLengthRatio,
					b = this.thumb.layoutBoundsHeight,
					d = this.track.layoutBoundsHeight - a,
					f = this.maximum - this.minimum,
					d = this.track.localToGlobal(0, 0 < f ? (this.pendingValue - this.minimum) / f * d: 0),
					d = this.thumb.parent.globalToLocal(d.x, d.y, e.Point.identity).y;
					this.thumb.setLayoutBoundsPosition(this.thumb.layoutBoundsX, Math.round(d));
					a != b && this.thumb.setLayoutBoundsSize(this.thumb.layoutBoundsWidth, a)
				}
			};
			return b
		} (f.VSlider);
		f.VScrollBar = g;
		g.prototype.__class__ = "egret.gui.VScrollBar"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				var a = this;
				d.call(this);
				this._allowMultipleSelection = !1;
				this._selectedIndices = [];
				this.isValidIndex = function(b, d, e) {
					return a.dataProvider && 0 <= b && b < a.dataProvider.length
				};
				this._captureItemRenderer = !0;
				this._mouseDownItemRenderer = null;
				this.useVirtualLayout = !0
			}
			__extends(b, d);
			var a = b.prototype;
			a.createChildren = function() {
				this.itemRenderer || (this.itemRenderer = f.DataGroup.defaultRendererFactory);
				d.prototype.createChildren.call(this)
			};
			Object.defineProperty(a, "useVirtualLayout", {
				get: function() {
					return this._getUseVirtualLayout()
				},
				set: function(a) {
					this._setUseVirtualLayout(a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "allowMultipleSelection", {
				get: function() {
					return this._allowMultipleSelection
				},
				set: function(a) {
					this._allowMultipleSelection = a
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "selectedIndices", {
				get: function() {
					return this._proposedSelectedIndices ? this._proposedSelectedIndices: this._selectedIndices
				},
				set: function(a) {
					this._setSelectedIndices(a, !1)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "selectedIndex", {
				get: function() {
					return this._proposedSelectedIndices ? 0 < this._proposedSelectedIndices.length ? this._proposedSelectedIndices[0] : -1 : this._getSelectedIndex()
				},
				set: function(a) {
					this._setSelectedIndex(a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "selectedItems", {
				get: function() {
					var a = [],
					b = this.selectedIndices;
					if (b) for (var d = b.length,
					e = 0; e < d; e++) a[e] = this.dataProvider.getItemAt(b[e]);
					return a
				},
				set: function(a) {
					var b = [];
					if (a) for (var d = a.length,
					e = 0; e < d; e++) {
						var f = this.dataProvider.getItemIndex(a[e]); - 1 != f && b.splice(0, 0, f);
						if ( - 1 == f) {
							b = [];
							break
						}
					}
					this._setSelectedIndices(b, !1)
				},
				enumerable: !0,
				configurable: !0
			});
			a._setSelectedIndices = function(a, b) {
				void 0 === b && (b = !1);
				b && (this._dispatchChangeAfterSelection = this._dispatchChangeAfterSelection || b);
				this._proposedSelectedIndices = a ? a: [];
				this.invalidateProperties()
			};
			a.commitProperties = function() {
				d.prototype.commitProperties.call(this);
				this._proposedSelectedIndices && this.commitSelection()
			};
			a.commitSelection = function(a) {
				void 0 === a && (a = !0);
				var b = this._selectedIndex;
				if (this._proposedSelectedIndices) {
					this._proposedSelectedIndices = this._proposedSelectedIndices.filter(this.isValidIndex);
					if (!this.allowMultipleSelection && 0 < this._proposedSelectedIndices.length) {
						var e = [];
						e.push(this._proposedSelectedIndices[0]);
						this._proposedSelectedIndices = e
					}
					this._proposedSelectedIndex = 0 < this._proposedSelectedIndices.length ? this._proposedSelectedIndices[0] : -1
				}
				e = d.prototype.commitSelection.call(this, !1);
				if (!e) return this._proposedSelectedIndices = null,
				!1;
				this.selectedIndex > f.ListBase.NO_SELECTION && (this._proposedSelectedIndices ? -1 == this._proposedSelectedIndices.indexOf(this.selectedIndex) && this._proposedSelectedIndices.push(this.selectedIndex) : this._proposedSelectedIndices = [this.selectedIndex]);
				this._proposedSelectedIndices && ( - 1 != this._proposedSelectedIndices.indexOf(b) && this.itemSelected(b, !0), this.commitMultipleSelection());
				a && e && (this._dispatchChangeAfterSelection && (f.IndexChangeEvent.dispatchIndexChangeEvent(this, f.IndexChangeEvent.CHANGE, b, this._selectedIndex), this._dispatchChangeAfterSelection = !1), f.UIEvent.dispatchUIEvent(this, f.UIEvent.VALUE_COMMIT));
				return e
			};
			a.commitMultipleSelection = function() {
				var a = [],
				b = [],
				d,
				e;
				if (0 < this._selectedIndices.length && 0 < this._proposedSelectedIndices.length) {
					e = this._proposedSelectedIndices.length;
					for (d = 0; d < e; d++) - 1 == this._selectedIndices.indexOf(this._proposedSelectedIndices[d]) && b.push(this._proposedSelectedIndices[d]);
					e = this._selectedIndices.length;
					for (d = 0; d < e; d++) - 1 == this._proposedSelectedIndices.indexOf(this._selectedIndices[d]) && a.push(this._selectedIndices[d])
				} else 0 < this._selectedIndices.length ? a = this._selectedIndices: 0 < this._proposedSelectedIndices.length && (b = this._proposedSelectedIndices);
				this._selectedIndices = this._proposedSelectedIndices;
				if (0 < a.length) for (e = a.length, d = 0; d < e; d++) this.itemSelected(a[d], !1);
				if (0 < b.length) for (e = b.length, d = 0; d < e; d++) this.itemSelected(b[d], !0);
				this._proposedSelectedIndices = null
			};
			a._isItemIndexSelected = function(a) {
				return this._allowMultipleSelection ? -1 != this._selectedIndices.indexOf(a) : d.prototype._isItemIndexSelected.call(this, a)
			};
			a.dataGroup_rendererAddHandler = function(a) {
				d.prototype.dataGroup_rendererAddHandler.call(this, a);
				a = a.renderer;
				null != a && (a.addEventListener(e.TouchEvent.TOUCH_BEGIN, this._item_touchBeginHandler, this), a.addEventListener(e.TouchEvent.TOUCH_END, this._item_touchEndHandler, this))
			};
			a.dataProviderRefreshed = function() {
				this._allowMultipleSelection || d.prototype.dataProviderRefreshed.call(this)
			};
			a.dataGroup_rendererRemoveHandler = function(a) {
				d.prototype.dataGroup_rendererRemoveHandler.call(this, a);
				a = a.renderer;
				null != a && (a.removeEventListener(e.TouchEvent.TOUCH_BEGIN, this._item_touchBeginHandler, this), a.removeEventListener(e.TouchEvent.TOUCH_END, this._item_touchEndHandler, this))
			};
			a._item_touchBeginHandler = function(a) {
				a._isDefaultPrevented || (this._mouseDownItemRenderer = a.currentTarget, f.UIGlobals.stage.addEventListener(e.TouchEvent.TOUCH_END, this.stage_touchEndHandler, this), f.UIGlobals.stage.addEventListener(e.Event.LEAVE_STAGE, this.stage_touchEndHandler, this))
			};
			a.calculateSelectedIndices = function(a) {
				var b = [];
				if (0 < this._selectedIndices.length) if (1 == this._selectedIndices.length && this._selectedIndices[0] == a) {
					if (!this.requireSelection) return b;
					b.splice(0, 0, this._selectedIndices[0])
				} else {
					for (var d = !1,
					e = 0; e < this._selectedIndices.length; e++) this._selectedIndices[e] == a ? d = !0 : this._selectedIndices[e] != a && b.splice(0, 0, this._selectedIndices[e]);
					d || b.splice(0, 0, a)
				} else b.splice(0, 0, a);
				return b
			};
			a._item_touchEndHandler = function(a) {
				var b = a.currentTarget;
				if (b == this._mouseDownItemRenderer) {
					var d;
					d = b ? b.itemIndex: this.dataGroup.getElementIndex(a.currentTarget);
					this._allowMultipleSelection ? this._setSelectedIndices(this.calculateSelectedIndices(d), !0) : this._setSelectedIndex(d, !0);
					this._captureItemRenderer && this._dispatchListEvent(a, f.ListEvent.ITEM_CLICK, b)
				}
			};
			a.stage_touchEndHandler = function(a) {
				f.UIGlobals.stage.removeEventListener(e.TouchEvent.TOUCH_END, this.stage_touchEndHandler, this);
				f.UIGlobals.stage.removeEventListener(e.Event.LEAVE_STAGE, this.stage_touchEndHandler, this);
				this._mouseDownItemRenderer = null
			};
			return b
		} (f.ListBase);
		f.List = g;
		g.prototype.__class__ = "egret.gui.List"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			return function() {
				this._viewport = null;
				this._autoHideScrollBars = !0;
				this._autoHideTimer = NaN;
				this._autoHideDelay = 300;
				this._autoHideShowAnimat = null;
				this._animatTargetIsShow = !1
			}
		} ();
		e.ScrollerProperties = g;
		g.prototype.__class__ = "egret.gui.ScrollerProperties"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(a) {
			function c() {
				a.call(this);
				this.verticalScrollBar = this.horizontalScrollBar = null;
				e.ScrollView.call(this);
				this._Scr_Props_ = new e.gui.ScrollerProperties
			}
			__extends(c, a);
			var b = c.prototype;
			b.setContent = function(a) {
				this._content = a;
				this._removeEvents();
				this._addEvents();
				this._ScrV_Props_._scrollLeft = a.horizontalScrollPosition;
				this._ScrV_Props_._scrollTop = a.verticalScrollPosition
			};
			b._updateContentPosition = function() {
				var a = this._content;
				a.horizontalScrollPosition = this._ScrV_Props_._scrollLeft;
				a.verticalScrollPosition = this._ScrV_Props_._scrollTop;
				a.setLayoutBoundsSize(this._UIC_Props_._width, this._UIC_Props_._height);
				this.dispatchEvent(new e.Event(e.Event.CHANGE))
			};
			b.getMaxScrollLeft = function() {
				var a = this._content;
				return Math.max(a.contentWidth - a.width, a.initialized ? 0 : a.horizontalScrollPosition || 0)
			};
			b.getMaxScrollTop = function() {
				var a = this._content;
				return Math.max(a.contentHeight - a.height, a.initialized ? 0 : a.verticalScrollPosition || 0)
			};
			b._getContentWidth = function() {
				return this._content.contentWidth
			};
			b._getContentHeight = function() {
				return this._content.contentHeight
			};
			b._onScrollStarted = function() {
				e.ScrollView.prototype._onScrollStarted.call(this);
				f.UIEvent.dispatchUIEvent(this, f.UIEvent.CHANGE_START)
			};
			b._onScrollFinished = function() {
				e.ScrollView.prototype._onScrollFinished.call(this);
				f.UIEvent.dispatchUIEvent(this, f.UIEvent.CHANGE_END)
			};
			b.measure = function() {
				this._Scr_Props_._viewport && (this.measuredWidth = this._Scr_Props_._viewport.preferredWidth, this.measuredHeight = this._Scr_Props_._viewport.preferredHeight)
			};
			b.updateDisplayList = function(a, c) {
				this.viewport && this.viewport.setLayoutBoundsSize(a, c);
				this._checkScrollPolicy();
				if ("off" != this._ScrV_Props_._horizontalScrollPolicy) {
					var b = this.viewport.horizontalScrollPosition,
					d = this.getMaxScrollLeft(),
					b = Math.min(b, d);
					this.setViewportHScrollPosition(b);
					if (b = this.horizontalScrollBar) b._setViewportMetric(a, this._Scr_Props_._viewport.contentWidth),
					b._setWidth(a - (b.left || 0) - (b.right || 0)),
					b.x = b.left || 0,
					b.y = c - this.horizontalScrollBar.layoutBoundsHeight,
					b.visible = this._ScrV_Props_._horizontalScrollPolicy == f.ScrollPolicy.ON || this._ScrV_Props_._hCanScroll,
					this._Scr_Props_._autoHideScrollBars && (b.alpha = 0)
				}
				"off" != this._ScrV_Props_._verticalScrollPolicy && (b = this.viewport.verticalScrollPosition, d = this.getMaxScrollTop(), b = Math.min(b, d), this.setViewportVScrollPosition(b), b = this.verticalScrollBar) && (b._setViewportMetric(c, this._Scr_Props_._viewport.contentHeight), b._setHeight(c - (b.top || 0) - (b.bottom || 0)), b.y = b.top || 0, b.x = a - this.verticalScrollBar.layoutBoundsWidth, b.visible = this._ScrV_Props_._verticalScrollPolicy == f.ScrollPolicy.ON || this._ScrV_Props_._vCanScroll, this._Scr_Props_._autoHideScrollBars && (b.alpha = 0))
			};
			Object.defineProperty(b, "verticalScrollPolicy", {
				get: function() {
					return this._ScrV_Props_._verticalScrollPolicy
				},
				set: function(a) {
					a != this._ScrV_Props_._verticalScrollPolicy && (this._ScrV_Props_._verticalScrollPolicy = a, this._checkVbar(), this.verticalScrollPolicy = a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "horizontalScrollPolicy", {
				get: function() {
					return this._ScrV_Props_._horizontalScrollPolicy
				},
				set: function(a) {
					a != this._ScrV_Props_._horizontalScrollPolicy && (this._ScrV_Props_._horizontalScrollPolicy = a, this._checkHbar(), this.horizontalScrollPolicy = a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "viewport", {
				get: function() {
					return this._Scr_Props_._viewport
				},
				set: function(a) {
					a != this._Scr_Props_._viewport && (this.uninstallViewport(), this._Scr_Props_._viewport = a, this.installViewport(), this.dispatchEventWith("viewportChanged"))
				},
				enumerable: !0,
				configurable: !0
			});
			b.installViewport = function() {
				var a = this.viewport;
				this.addEventListener(e.Event.CHANGE, this._scrollerChangedHandler, this);
				this._createChildrenCalled && a && (a.clipAndEnableScrolling = !0, this.setContent(a), this._addToDisplayListAt(a, 0), a.addEventListener(e.gui.PropertyChangeEvent.PROPERTY_CHANGE, this._viewportChangedHandler, this))
			};
			b.uninstallViewport = function() {
				this.viewport && (this.viewport.clipAndEnableScrolling = !1, this.viewport.removeEventListener(e.gui.PropertyChangeEvent.PROPERTY_CHANGE, this._viewportChangedHandler, this), this._removeFromDisplayList(this.viewport))
			};
			b._viewportChangedHandler = function(a) {
				"horizontalScrollPosition" == a.property && this.setViewportHScrollPosition(this.viewport.horizontalScrollPosition);
				"verticalScrollPosition" == a.property && this.setViewportVScrollPosition(this.viewport.verticalScrollPosition);
				if ("contentWidth" == a.property || "contentHeight" == a.property) this.invalidateDisplayList(),
				this.invalidateSize()
			};
			b._scrollerChangedHandler = function(a) {
				this.setViewportHScrollPosition(this.scrollLeft);
				this.setViewportVScrollPosition(this.scrollTop)
			};
			b.setViewportVScrollPosition = function(a) {
				this.scrollTop != a && (this.scrollTop = a);
				this.verticalScrollBar && this.verticalScrollBar.value != a && (this.verticalScrollBar.setPosition(a), this.hideOrShow(!0), this.setAutoHideTimer())
			};
			b.setViewportHScrollPosition = function(a) {
				this.scrollLeft != a && (this.scrollLeft = a);
				this.horizontalScrollBar && this.horizontalScrollBar.value != a && (this.horizontalScrollBar._setValue(a), this.hideOrShow(!0), this.setAutoHideTimer())
			};
			b.throwHorizontally = function(a, c) {
				void 0 === c && (c = 500);
				this.setScrollLeft(a, c)
			};
			b.throwVertically = function(a, c) {
				void 0 === c && (c = 500);
				this.setScrollTop(a, c)
			};
			Object.defineProperty(b, "autoHideScrollBars", {
				get: function() {
					return this._Scr_Props_._autoHideScrollBars
				},
				set: function(a) {
					this._Scr_Props_._autoHideScrollBars != a && ((this._Scr_Props_._autoHideScrollBars = a) ? this.setAutoHideTimer() : this.hideOrShow(!0))
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(b, "autoHideDelay", {
				get: function() {
					return this._Scr_Props_._autoHideDelay
				},
				set: function(a) {
					this._Scr_Props_._autoHideDelay != a && (this._Scr_Props_._autoHideDelay = a)
				},
				enumerable: !0,
				configurable: !0
			});
			b.setAutoHideTimer = function() {
				this._Scr_Props_._autoHideScrollBars && this.initialized && (this.horizontalScrollBar || this.verticalScrollBar) && (NaN != this._Scr_Props_._autoHideTimer && e.clearTimeout(this._Scr_Props_._autoHideTimer), this._Scr_Props_._autoHideTimer = e.setTimeout(this.hideOrShow.bind(this, !1), this, this._Scr_Props_._autoHideDelay))
			};
			b.hideOrShow = function(a) {
				var c = this;
				if (this.initialized && (this.horizontalScrollBar || this.verticalScrollBar)) {
					if (null == this._Scr_Props_._autoHideShowAnimat) this._Scr_Props_._autoHideShowAnimat = new f.Animation(function(a) {
						a = a.currentValue.alpha;
						c.horizontalScrollBar && (c.horizontalScrollBar.alpha = a);
						c.verticalScrollBar && (c.verticalScrollBar.alpha = a)
					},
					this);
					else {
						if (this._Scr_Props_._animatTargetIsShow == a) return;
						this._Scr_Props_._autoHideShowAnimat.isPlaying && this._Scr_Props_._autoHideShowAnimat.stop()
					}
					this._Scr_Props_._animatTargetIsShow = a;
					var b = this._Scr_Props_._autoHideShowAnimat;
					b.motionPaths = [new f.SimpleMotionPath("alpha", a ? 0 : 1, a ? 1 : 0)];
					b.duration = a ? 100 : 300;
					b.play()
				}
			};
			Object.defineProperty(b, "numElements", {
				get: function() {
					return this.viewport ? 1 : 0
				},
				enumerable: !0,
				configurable: !0
			});
			b.throwRangeError = function(a) {
				throw new RangeError(e.getString(3011, a));
			};
			b.getElementAt = function(a) {
				if (this.viewport && 0 == a) return this.viewport;
				this.throwRangeError(a);
				return null
			};
			b.getElementIndex = function(a) {
				return null != a && a == this.viewport ? 0 : -1
			};
			b.containsElement = function(a) {
				return null != a && a == this.viewport ? !0 : !1
			};
			b.throwNotSupportedError = function() {
				throw Error(e.getString(3012));
			};
			b.addElement = function(a) {
				this.throwNotSupportedError();
				return null
			};
			b.addElementAt = function(a, c) {
				this.throwNotSupportedError();
				return null
			};
			b.removeElement = function(a) {
				this.throwNotSupportedError();
				return null
			};
			b.removeElementAt = function(a) {
				this.throwNotSupportedError();
				return null
			};
			b.removeAllElements = function() {
				this.throwNotSupportedError()
			};
			b.setElementIndex = function(a, c) {
				this.throwNotSupportedError()
			};
			b.swapElements = function(a, c) {
				this.throwNotSupportedError()
			};
			b.swapElementsAt = function(a, c) {
				this.throwNotSupportedError()
			};
			b.addChild = function(a) {
				this.throwNotSupportedError();
				return null
			};
			b.addChildAt = function(a, c) {
				this.throwNotSupportedError();
				return null
			};
			b.removeChild = function(a) {
				this.throwNotSupportedError();
				return null
			};
			b.removeChildAt = function(a) {
				this.throwNotSupportedError();
				return null
			};
			b.setChildIndex = function(a, c) {
				this.throwNotSupportedError()
			};
			b.swapChildren = function(a, c) {
				this.throwNotSupportedError()
			};
			b.swapChildrenAt = function(a, c) {
				this.throwNotSupportedError()
			};
			b._checkHbar = function() {
				if ("off" == this._ScrV_Props_._horizontalScrollPolicy) this._uninstallHorizontalScrollBar();
				else if (this.horizontalScrollBar) {
					var a = this.horizontalScrollBar;
					a.addEventListener(e.Event.CHANGE, this.hBarChanged, this, !1);
					a._setViewportMetric(this._Scr_Props_._viewport.width, this._Scr_Props_._viewport.contentWidth);
					a.owner && "removeElement" in a.owner && a.owner.removeElement(a);
					this._addToDisplayList(this.horizontalScrollBar)
				}
			};
			b._checkVbar = function() {
				if ("off" == this._ScrV_Props_._verticalScrollPolicy) this._uninstallVerticalScrollBar();
				else if (this.verticalScrollBar && this.verticalScrollBar.owner != this) {
					var a = this.verticalScrollBar;
					a.addEventListener(e.Event.CHANGE, this.vBarChanged, this, !1);
					a._setViewportMetric(this._Scr_Props_._viewport.height, this._Scr_Props_._viewport.contentHeight);
					a.owner && "removeElement" in a.owner && a.owner.removeElement(a);
					this._addToDisplayList(this.verticalScrollBar)
				}
			};
			b.createChildren = function() {
				a.prototype.createChildren.call(this);
				this.installViewport()
			};
			b.partAdded = function(c, b) {
				a.prototype.partAdded.call(this, c, b);
				b == this.horizontalScrollBar && this._checkHbar();
				b == this.verticalScrollBar && this._checkVbar()
			};
			b.partRemoved = function(c, b) {
				a.prototype.partRemoved.call(this, c, b);
				this.horizontalScrollBar == b && (this.horizontalScrollBar.parent == this && this._uninstallHorizontalScrollBar(), this.horizontalScrollBar = null);
				this.verticalScrollBar == b && (this.verticalScrollBar.parent == this && this._uninstallVerticalScrollBar(), this.verticalScrollBar = null)
			};
			b._uninstallHorizontalScrollBar = function() {
				null != this.horizontalScrollBar && (this._removeFromDisplayList(this.horizontalScrollBar), this.horizontalScrollBar.removeEventListener(e.Event.CHANGE, this.hBarChanged, this, !1))
			};
			b._uninstallVerticalScrollBar = function() {
				null != this.verticalScrollBar && (this._removeFromDisplayList(this.verticalScrollBar), this.verticalScrollBar.removeEventListener(e.Event.CHANGE, this.vBarChanged, this, !1))
			};
			b.hBarChanged = function(a) {
				this.setViewportHScrollPosition(this.horizontalScrollBar._getValue())
			};
			b.vBarChanged = function(a) {
				this.setViewportVScrollPosition(this.verticalScrollBar.getPosition())
			};
			b.hitTest = function(c, b, d) {
				void 0 === d && (d = !1);
				var e = a.prototype.hitTest.call(this, c, b, d);
				return e ? e: this._DO_Props_._visible && (d || this._DO_Props_._touchEnabled) ? 0 <= c && c < this.width && 0 <= b && b < this.height ? this: null: null
			};
			return c
		} (f.SkinnableComponent);
		f.Scroller = g;
		g.prototype.__class__ = "egret.gui.Scroller";
		for (var d in e.ScrollView.prototype) if (e.ScrollView.prototype.hasOwnProperty(d) && !g.prototype.hasOwnProperty(d) && !f.SkinnableComponent.prototype.hasOwnProperty(d) && !f.UIComponent.prototype.hasOwnProperty(d)) {
			var b = Object.getOwnPropertyDescriptor(e.ScrollView.prototype, d);
			b && (b.get || b.set) ? Object.defineProperty(g.prototype, d, b) : g.prototype[d] = e.ScrollView.prototype[d]
		}
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a, c, b) {
				void 0 === c && (c = !1);
				void 0 === b && (b = !1);
				d.call(this, a, c, b)
			}
			__extends(b, d);
			b.dispatchUIEvent = function(a, c) {
				e.Event._dispatchByTarget(b, a, c)
			};
			b.INITIALIZE = "initialize";
			b.CREATION_COMPLETE = "creationComplete";
			b.UPDATE_COMPLETE = "updateComplete";
			b.BUTTON_DOWN = "buttonDown";
			b.CHANGE_END = "changeEnd";
			b.CHANGE_START = "changeStart";
			b.CHANGING = "changing";
			b.VALUE_COMMIT = "valueCommit";
			b.SKIN_CHANGED = "skinChanged";
			b.CONTENT_CHANGED = "contentChanged";
			b.OPEN = "open";
			b.CLOSE = "close";
			b.PLAY_COMPLETE = "playComplete";
			return b
		} (e.Event);
		f.UIEvent = g;
		g.prototype.__class__ = "egret.gui.UIEvent"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a, c, b, e, f, g, n, k) {
				void 0 === c && (c = !1);
				void 0 === b && (b = !1);
				void 0 === e && (e = null);
				void 0 === f && (f = null);
				void 0 === g && (g = null);
				void 0 === n && (n = null);
				void 0 === k && (k = null);
				d.call(this, a, c, b);
				this.source = this.property = this.oldValue = this.newValue = this.kind = null;
				this.kind = e;
				this.property = f;
				this.oldValue = g;
				this.newValue = n;
				this.source = k
			}
			__extends(b, d);
			b.dispatchPropertyChangeEvent = function(a, c, d, f, g, u) {
				void 0 === c && (c = null);
				void 0 === d && (d = null);
				void 0 === f && (f = null);
				void 0 === g && (g = null);
				void 0 === u && (u = null);
				var n = e.Event._getPropertyData(b);
				n.kind = c;
				n.property = d;
				n.oldValue = f;
				n.newValue = g;
				n.source = u;
				e.Event._dispatchByTarget(b, a, b.PROPERTY_CHANGE, n)
			};
			b.PROPERTY_CHANGE = "propertyChange";
			return b
		} (e.Event);
		f.PropertyChangeEvent = g;
		g.prototype.__class__ = "egret.gui.PropertyChangeEvent"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			function d() {}
			d.UPDATE = "update";
			d.DELETE = "delete";
			return d
		} ();
		e.PropertyChangeEventKind = g;
		g.prototype.__class__ = "egret.gui.PropertyChangeEventKind"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a, c, b, e, f) {
				void 0 === c && (c = NaN);
				void 0 === b && (b = NaN);
				void 0 === e && (e = !1);
				void 0 === f && (f = !1);
				d.call(this, a, e, f);
				this.oldY = this.oldX = NaN;
				this.oldX = c;
				this.oldY = b
			}
			__extends(b, d);
			b.dispatchMoveEvent = function(a, c, d) {
				void 0 === c && (c = NaN);
				void 0 === d && (d = NaN);
				var f = e.Event._getPropertyData(b);
				f.oldX = c;
				f.oldY = d;
				e.Event._dispatchByTarget(b, a, b.MOVE, f)
			};
			b.MOVE = "move";
			return b
		} (e.Event);
		f.MoveEvent = g;
		g.prototype.__class__ = "egret.gui.MoveEvent"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a, c, b, e, f) {
				void 0 === c && (c = NaN);
				void 0 === b && (b = NaN);
				void 0 === e && (e = !1);
				void 0 === f && (f = !1);
				d.call(this, a, e, f);
				this.oldWidth = this.oldHeight = NaN;
				this.oldWidth = c;
				this.oldHeight = b
			}
			__extends(b, d);
			b.dispatchResizeEvent = function(a, c, d) {
				void 0 === c && (c = NaN);
				void 0 === d && (d = NaN);
				var f = e.Event._getPropertyData(b);
				f.oldWidth = c;
				f.oldHeight = d;
				e.Event._dispatchByTarget(b, a, b.RESIZE, f)
			};
			b.RESIZE = "resize";
			return b
		} (e.Event);
		f.ResizeEvent = g;
		g.prototype.__class__ = "egret.gui.ResizeEvent"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a, c, b, e, f) {
				void 0 === c && (c = !1);
				void 0 === b && (b = !1);
				void 0 === e && (e = null);
				void 0 === f && (f = null);
				d.call(this, a, c, b);
				this.partName = this.instance = null;
				this.partName = e;
				this.instance = f
			}
			__extends(b, d);
			b.dispatchSkinPartEvent = function(a, c, d, f) {
				void 0 === d && (d = null);
				void 0 === f && (f = null);
				var g = e.Event._getPropertyData(b);
				g.partName = d;
				g.instance = f;
				e.Event._dispatchByTarget(b, a, c, g)
			};
			b.PART_ADDED = "partAdded";
			b.PART_REMOVED = "partRemoved";
			return b
		} (e.Event);
		f.SkinPartEvent = g;
		g.prototype.__class__ = "egret.gui.SkinPartEvent"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a, c, b, e) {
				void 0 === c && (c = !1);
				void 0 === b && (b = !1);
				void 0 === e && (e = -1);
				d.call(this, a, c, b);
				this.detail = null;
				this.detail = e
			}
			__extends(b, d);
			b.dispatchCloseEvent = function(a, c, d) {
				void 0 === d && (d = -1);
				var f = e.Event._getPropertyData(b);
				f.detail = d;
				e.Event._dispatchByTarget(b, a, c, f)
			};
			b.CLOSE = "close";
			return b
		} (e.Event);
		f.CloseEvent = g;
		g.prototype.__class__ = "egret.gui.CloseEvent"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a, c, b, e, f, g, n, k) {
				void 0 === c && (c = !1);
				void 0 === b && (b = !1);
				void 0 === e && (e = null);
				void 0 === f && (f = -1);
				void 0 === g && (g = -1);
				void 0 === n && (n = null);
				void 0 === k && (k = null);
				d.call(this, a, c, b);
				this.oldItems = this.items = this.kind = null;
				this.kind = e;
				this.location = f;
				this.oldLocation = g;
				this.items = n ? n: [];
				this.oldItems = k ? k: []
			}
			__extends(b, d);
			b.dispatchCollectionEvent = function(a, c, d, f, g, u, n) {
				void 0 === d && (d = null);
				void 0 === f && (f = -1);
				void 0 === g && (g = -1);
				void 0 === u && (u = null);
				void 0 === n && (n = null);
				var k = e.Event._getPropertyData(b);
				k.kind = d;
				k.location = f;
				k.oldLocation = g;
				k.items = u;
				k.oldItems = n;
				e.Event._dispatchByTarget(b, a, c, k)
			};
			b.COLLECTION_CHANGE = "collectionChange";
			return b
		} (e.Event);
		f.CollectionEvent = g;
		g.prototype.__class__ = "egret.gui.CollectionEvent"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			function d() {}
			d.ADD = "add";
			d.MOVE = "move";
			d.REFRESH = "refresh";
			d.REMOVE = "remove";
			d.REPLACE = "replace";
			d.RESET = "reset";
			d.UPDATE = "update";
			d.OPEN = "open";
			d.CLOSE = "close";
			return d
		} ();
		e.CollectionEventKind = g;
		g.prototype.__class__ = "egret.gui.CollectionEventKind"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a, c, b, e, f) {
				void 0 === c && (c = !1);
				void 0 === b && (b = !1);
				void 0 === e && (e = null);
				void 0 === f && (f = -1);
				d.call(this, a, c, b);
				this.index = NaN;
				this.element = null;
				this.element = e;
				this.index = f
			}
			__extends(b, d);
			b.dispatchElementExistenceEvent = function(a, c, d, f) {
				void 0 === d && (d = null);
				void 0 === f && (f = -1);
				var g = e.Event._getPropertyData(b);
				g.element = d;
				g.index = f;
				e.Event._dispatchByTarget(b, a, c, g)
			};
			b.ELEMENT_ADD = "elementAdd";
			b.ELEMENT_REMOVE = "elementRemove";
			return b
		} (e.Event);
		f.ElementExistenceEvent = g;
		g.prototype.__class__ = "egret.gui.ElementExistenceEvent"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a, c, b, e, f) {
				void 0 === c && (c = !1);
				void 0 === b && (b = !1);
				void 0 === e && (e = -1);
				void 0 === f && (f = -1);
				d.call(this, a, c, b);
				this.oldIndex = this.newIndex = NaN;
				this.oldIndex = e;
				this.newIndex = f
			}
			__extends(b, d);
			b.dispatchIndexChangeEvent = function(a, c, d, f, g) {
				void 0 === d && (d = -1);
				void 0 === f && (f = -1);
				void 0 === g && (g = !1);
				var u = e.Event._getPropertyData(b);
				u.oldIndex = d;
				u.newIndex = f;
				return e.Event._dispatchByTarget(b, a, c, u, !1, g)
			};
			b.CHANGE = "change";
			b.CHANGING = "changing";
			return b
		} (e.Event);
		f.IndexChangeEvent = g;
		g.prototype.__class__ = "egret.gui.IndexChangeEvent"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a, c, b, e, f, g, n, k, m, l, q, t, s) {
				void 0 === c && (c = !0);
				void 0 === b && (b = !0);
				void 0 === e && (e = 0);
				void 0 === f && (f = 0);
				void 0 === g && (g = 0);
				void 0 === n && (n = !1);
				void 0 === k && (k = !1);
				void 0 === m && (m = !1);
				void 0 === l && (l = !1);
				void 0 === q && (q = -1);
				void 0 === t && (t = null);
				void 0 === s && (s = null);
				d.call(this, a, c, b, e, f, g, n, k, m, l);
				this.itemRenderer = this.item = null;
				this.itemIndex = NaN;
				this.itemIndex = q;
				this.item = t;
				this.itemRenderer = s
			}
			__extends(b, d);
			b.dispatchListEvent = function(a, c, d, f, g, u) {
				void 0 === d && (d = null);
				void 0 === f && (f = -1);
				void 0 === g && (g = null);
				void 0 === u && (u = null);
				var n = e.Event._getPropertyData(b);
				n.touchPointID = d.touchPointID;
				n._stageX = d.stageX;
				n._stageY = d.stageY;
				n.ctrlKey = d.ctrlKey;
				n.altKey = d.altKey;
				n.shiftKey = d.shiftKey;
				n.touchDown = d.touchDown;
				n.itemIndex = f;
				n.item = g;
				n.itemRenderer = u;
				e.Event._dispatchByTarget(b, a, c, n)
			};
			b.ITEM_ROLL_OUT = "itemRollOut";
			b.ITEM_ROLL_OVER = "itemRollOver";
			b.ITEM_CLICK = "itemClick";
			return b
		} (e.TouchEvent);
		f.ListEvent = g;
		g.prototype.__class__ = "egret.gui.ListEvent"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a, c, b, e, f) {
				void 0 === c && (c = !1);
				void 0 === b && (b = !1);
				void 0 === e && (e = null);
				void 0 === f && (f = !1);
				d.call(this, a, c, b);
				this.popUp = null;
				this.modal = !1;
				this.popUp = e;
				this.modal = f
			}
			__extends(b, d);
			b.dispatchPopUpEvent = function(a, c, d, f) {
				void 0 === d && (d = null);
				void 0 === f && (f = !1);
				var g = e.Event._getPropertyData(b);
				g.popUp = d;
				g.modal = f;
				e.Event._dispatchByTarget(b, a, c, g)
			};
			b.ADD_POPUP = "addPopUp";
			b.REMOVE_POPUP = "removePopUp";
			b.BRING_TO_FRONT = "bringToFront";
			return b
		} (e.Event);
		f.PopUpEvent = g;
		g.prototype.__class__ = "egret.gui.PopUpEvent"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a, c, b, e, f, g) {
				void 0 === c && (c = !1);
				void 0 === b && (b = !1);
				void 0 === e && (e = null);
				void 0 === f && (f = -1);
				void 0 === g && (g = null);
				d.call(this, a, c, b);
				this.data = null;
				this.index = NaN;
				this.renderer = null;
				this.renderer = e;
				this.index = f;
				this.data = g
			}
			__extends(b, d);
			b.dispatchRendererExistenceEvent = function(a, c, d, f, g) {
				void 0 === d && (d = null);
				void 0 === f && (f = -1);
				void 0 === g && (g = null);
				var u = e.Event._getPropertyData(b);
				u.renderer = d;
				u.index = f;
				u.data = g;
				e.Event._dispatchByTarget(b, a, c, u)
			};
			b.RENDERER_ADD = "rendererAdd";
			b.RENDERER_REMOVE = "rendererRemove";
			return b
		} (e.Event);
		f.RendererExistenceEvent = g;
		g.prototype.__class__ = "egret.gui.RendererExistenceEvent"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a, c, b, e, f) {
				void 0 === c && (c = !1);
				void 0 === b && (b = !1);
				void 0 === e && (e = null);
				void 0 === f && (f = null);
				d.call(this, a, c, b);
				this.oldState = this.newState = null;
				this.oldState = e;
				this.newState = f
			}
			__extends(b, d);
			b.dispatchStateChangeEvent = function(a, c, d, f) {
				void 0 === d && (d = null);
				void 0 === f && (f = null);
				var g = e.Event._getPropertyData(b);
				g.oldState = d;
				g.newState = f;
				e.Event._dispatchByTarget(b, a, c, g)
			};
			b.CURRENT_STATE_CHANGE = "currentStateChange";
			b.CURRENT_STATE_CHANGING = "currentStateChanging";
			b.STATE_CHANGE_COMPLETE = "stateChangeComplete";
			return b
		} (e.Event);
		f.StateChangeEvent = g;
		g.prototype.__class__ = "egret.gui.StateChangeEvent"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a, c, b) {
				void 0 === c && (c = !1);
				void 0 === b && (b = !1);
				d.call(this, a, c, b)
			}
			__extends(b, d);
			b.dispatchTrackBaseEvent = function(a, c) {
				e.Event._dispatchByTarget(b, a, c)
			};
			b.THUMB_DRAG = "thumbDrag";
			b.THUMB_PRESS = "thumbPress";
			b.THUMB_RELEASE = "thumbRelease";
			return b
		} (e.Event);
		f.TrackBaseEvent = g;
		g.prototype.__class__ = "egret.gui.TrackBaseEvent"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b(a, c, b, e) {
				void 0 === c && (c = !1);
				void 0 === b && (b = !1);
				void 0 === e && (e = null);
				d.call(this, a, c, b);
				this.effectInstance = e
			}
			__extends(b, d);
			b.EFFECT_END = "effectEnd";
			b.EFFECT_STOP = "effectStop";
			b.EFFECT_START = "effectStart";
			b.EFFECT_REPEAT = "effectRepeat";
			b.EFFECT_UPDATE = "effectUpdate";
			return b
		} (e.Event);
		f.EffectEvent = g;
		g.prototype.__class__ = "egret.gui.EffectEvent"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._target = null;
				this._useVirtualLayout = !1;
				this._typicalLayoutRect = null
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "target", {
				get: function() {
					return this._target
				},
				set: function(a) {
					this._target != a && (this._target = a, this.clearVirtualLayoutCache())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "useVirtualLayout", {
				get: function() {
					return this._useVirtualLayout
				},
				set: function(a) {
					this._useVirtualLayout != a && (this._useVirtualLayout = a, this.dispatchEventWith("useVirtualLayoutChanged"), this._useVirtualLayout && !a && this.clearVirtualLayoutCache(), this.target && this.target.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "typicalLayoutRect", {
				get: function() {
					return this._typicalLayoutRect
				},
				set: function(a) {
					this._typicalLayoutRect != a && (this._typicalLayoutRect = a, this.target && this.target.invalidateSize())
				},
				enumerable: !0,
				configurable: !0
			});
			a.scrollPositionChanged = function() {};
			a.clearVirtualLayoutCache = function() {};
			a.elementAdded = function(a) {};
			a.elementRemoved = function(a) {};
			a.measure = function() {};
			a.updateDisplayList = function(a, b) {};
			return b
		} (e.EventDispatcher);
		f.LayoutBase = g;
		g.prototype.__class__ = "egret.gui.LayoutBase"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._mouseWheelSpeed = 20
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "useVirtualLayout", {
				set: function(a) {},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "mouseWheelSpeed", {
				get: function() {
					return this._mouseWheelSpeed
				},
				set: function(a) {
					0 == a && (a = 1);
					this._mouseWheelSpeed = a
				},
				enumerable: !0,
				configurable: !0
			});
			a.getElementBoundsLeftOfScrollRect = function(a) {
				var b = new e.Rectangle;
				b.x = a.x - this._mouseWheelSpeed;
				b.right = a.x;
				return b
			};
			a.getElementBoundsRightOfScrollRect = function(a) {
				var b = new e.Rectangle;
				b.x = a.right;
				b.right = a.right + this._mouseWheelSpeed;
				return b
			};
			a.getElementBoundsAboveScrollRect = function(a) {
				var b = new e.Rectangle;
				b.y = a.y - this._mouseWheelSpeed;
				b.bottom = a.y;
				return b
			};
			a.getElementBoundsBelowScrollRect = function(a) {
				var b = new e.Rectangle;
				b.y = a.bottom;
				b.bottom = a.bottom + this._mouseWheelSpeed;
				return b
			};
			a.measure = function() {
				d.prototype.measure.call(this);
				if (null != this.target) {
					for (var a = 0,
					b = 0,
					e = this.target.numElements,
					f = 0; f < e; f++) {
						var g = this.target.getElementAt(f);
						if (g && g.includeInLayout) {
							var n = g.horizontalCenter,
							k = g.verticalCenter,
							m = g.left,
							l = g.right,
							q = g.top,
							t = g.bottom;
							isNaN(m) || isNaN(l) ? isNaN(n) ? isNaN(m) && isNaN(l) ? n = g.preferredX: (n = isNaN(m) ? 0 : m, n += isNaN(l) ? 0 : l) : n = 2 * Math.abs(n) : n = m + l;
							isNaN(q) || isNaN(t) ? isNaN(k) ? isNaN(q) && isNaN(t) ? k = g.preferredY: (k = isNaN(q) ? 0 : q, k += isNaN(t) ? 0 : t) : k = 2 * Math.abs(k) : k = q + t;
							t = g.preferredHeight;
							a = Math.ceil(Math.max(a, n + g.preferredWidth));
							b = Math.ceil(Math.max(b, k + t))
						}
					}
					this.target.measuredWidth = a;
					this.target.measuredHeight = b
				}
			};
			a.updateDisplayList = function(a, b) {
				d.prototype.updateDisplayList.call(this, a, b);
				if (null != this.target) {
					for (var e = this.target.numElements,
					f = 0,
					g = 0,
					n = 0; n < e; n++) {
						var k = this.target.getElementAt(n);
						if (null != k && k.includeInLayout) {
							var m = k.horizontalCenter,
							l = k.verticalCenter,
							q = k.left,
							t = k.right,
							s = k.top,
							B = k.bottom,
							z = k.percentWidth,
							r = k.percentHeight,
							y = NaN,
							w = NaN;
							isNaN(q) || isNaN(t) ? isNaN(z) || (y = Math.round(a * Math.min(0.01 * z, 1))) : y = a - t - q;
							isNaN(s) || isNaN(B) ? isNaN(r) || (w = Math.round(b * Math.min(0.01 * r, 1))) : w = b - B - s;
							k.setLayoutBoundsSize(y, w);
							z = k.layoutBoundsWidth;
							r = k.layoutBoundsHeight;
							w = y = NaN;
							y = isNaN(m) ? isNaN(q) ? isNaN(t) ? k.layoutBoundsX: a - z - t: q: Math.round((a - z) / 2 + m);
							w = isNaN(l) ? isNaN(s) ? isNaN(B) ? k.layoutBoundsY: b - r - B: s: Math.round((b - r) / 2 + l);
							k.setLayoutBoundsPosition(y, w);
							f = Math.max(f, y + z);
							g = Math.max(g, w + r)
						}
					}
					this.target.setContentSize(f, g)
				}
			};
			return b
		} (f.LayoutBase);
		f.BasicLayout = g;
		g.prototype.__class__ = "egret.gui.BasicLayout"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			function d() {}
			d.LEFT = "left";
			d.JUSTIFY_USING_GAP = "justifyUsingGap";
			d.JUSTIFY_USING_WIDTH = "justifyUsingWidth";
			return d
		} ();
		e.ColumnAlign = g;
		g.prototype.__class__ = "egret.gui.ColumnAlign"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			function d() {}
			d.TOP = "top";
			d.JUSTIFY_USING_GAP = "justifyUsingGap";
			d.JUSTIFY_USING_HEIGHT = "justifyUsingHeight";
			return d
		} ();
		e.RowAlign = g;
		g.prototype.__class__ = "egret.gui.RowAlign"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			function d() {}
			d.ROWS = "rows";
			d.COLUMNS = "columns";
			return d
		} ();
		e.TileOrientation = g;
		g.prototype.__class__ = "egret.gui.TileOrientation"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(b) {
			function a() {
				b.call(this);
				this._horizontalAlign = e.HorizontalAlign.LEFT;
				this._verticalAlign = e.VerticalAlign.TOP;
				this._gap = 6;
				this._padding = 0;
				this._paddingBottom = this._paddingTop = this._paddingRight = this._paddingLeft = NaN;
				this.elementSizeTable = [];
				this.endIndex = this.startIndex = -1;
				this.indexInViewCalculated = !1;
				this.maxElementWidth = 0
			}
			__extends(a, b);
			var c = a.prototype;
			Object.defineProperty(c, "horizontalAlign", {
				get: function() {
					return this._horizontalAlign
				},
				set: function(a) {
					this._horizontalAlign != a && (this._horizontalAlign = a, this.target && this.target.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c, "verticalAlign", {
				get: function() {
					return this._verticalAlign
				},
				set: function(a) {
					this._verticalAlign != a && (this._verticalAlign = a, this.target && this.target.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c, "gap", {
				get: function() {
					return this._gap
				},
				set: function(a) {
					this._gap != a && (this._gap = a, this.invalidateTargetSizeAndDisplayList(), this.hasEventListener("gapChanged") && this.dispatchEventWith("gapChanged"))
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c, "padding", {
				get: function() {
					return this._padding
				},
				set: function(a) {
					this._padding != a && (this._padding = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c, "paddingLeft", {
				get: function() {
					return this._paddingLeft
				},
				set: function(a) {
					this._paddingLeft != a && (this._paddingLeft = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c, "paddingRight", {
				get: function() {
					return this._paddingRight
				},
				set: function(a) {
					this._paddingRight != a && (this._paddingRight = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c, "paddingTop", {
				get: function() {
					return this._paddingTop
				},
				set: function(a) {
					this._paddingTop != a && (this._paddingTop = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c, "paddingBottom", {
				get: function() {
					return this._paddingBottom
				},
				set: function(a) {
					this._paddingBottom != a && (this._paddingBottom = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			c.invalidateTargetSizeAndDisplayList = function() {
				this.target && (this.target.invalidateSize(), this.target.invalidateDisplayList())
			};
			c.measure = function() {
				b.prototype.measure.call(this);
				this.target && (this.useVirtualLayout ? this.measureVirtual() : this.measureReal())
			};
			c.measureVirtual = function() {
				for (var a = this.typicalLayoutRect ? this.typicalLayoutRect.height: 22, b = Math.max(this.maxElementWidth, this.typicalLayoutRect ? this.typicalLayoutRect.width: 71), c = this.getElementTotalSize(), d = this.target.getElementIndicesInView(), e = d.length, f = 0; f < e; f++) {
					var g = d[f],
					l = this.target.getElementAt(g);
					if (null != l && l.includeInLayout) var q = l.preferredWidth,
					c = c + l.preferredHeight,
					c = c - (isNaN(this.elementSizeTable[g]) ? a: this.elementSizeTable[g]),
					b = Math.max(b, q)
				}
				f = isNaN(this._padding) ? 0 : this._padding;
				a = isNaN(this._paddingLeft) ? f: this._paddingLeft;
				d = isNaN(this._paddingRight) ? f: this._paddingRight;
				e = isNaN(this._paddingTop) ? f: this._paddingTop;
				f = isNaN(this._paddingBottom) ? f: this._paddingBottom;
				e += f;
				this.target.measuredWidth = Math.ceil(b + (a + d));
				this.target.measuredHeight = Math.ceil(c + e)
			};
			c.measureReal = function() {
				for (var a = this.target.numElements,
				b = a,
				c = 0,
				d = 0,
				e = 0; e < a; e++) {
					var f = this.target.getElementAt(e);
					if (f && f.includeInLayout) var g = f.preferredWidth,
					d = d + f.preferredHeight,
					c = Math.max(c, g);
					else b--
				}
				a = isNaN(this._gap) ? 0 : this._gap;
				d += (b - 1) * a;
				f = isNaN(this._padding) ? 0 : this._padding;
				b = isNaN(this._paddingLeft) ? f: this._paddingLeft;
				a = isNaN(this._paddingRight) ? f: this._paddingRight;
				e = isNaN(this._paddingTop) ? f: this._paddingTop;
				f = isNaN(this._paddingBottom) ? f: this._paddingBottom;
				e += f;
				this.target.measuredWidth = Math.ceil(c + (b + a));
				this.target.measuredHeight = Math.ceil(d + e)
			};
			c.updateDisplayList = function(a, c) {
				b.prototype.updateDisplayList.call(this, a, c);
				if (this.target) if (0 == this.target.numElements) {
					var d = isNaN(this._padding) ? 0 : this._padding,
					e = isNaN(this._paddingLeft) ? d: this._paddingLeft,
					f = isNaN(this._paddingRight) ? d: this._paddingRight,
					g = isNaN(this._paddingTop) ? d: this._paddingTop,
					d = isNaN(this._paddingBottom) ? d: this._paddingBottom;
					this.target.setContentSize(Math.ceil(e + f), Math.ceil(g + d))
				} else this.useVirtualLayout ? this.updateDisplayListVirtual(a, c) : this.updateDisplayListReal(a, c)
			};
			c.getStartPosition = function(a) {
				var b = isNaN(this._padding) ? 0 : this._padding,
				c = isNaN(this._paddingTop) ? b: this._paddingTop,
				b = isNaN(this._gap) ? 0 : this._gap;
				if (!this.useVirtualLayout) {
					var d;
					this.target && (d = this.target.getElementAt(a));
					return d ? d.y: c
				}
				d = this.typicalLayoutRect ? this.typicalLayoutRect.height: 22;
				for (var e = 0; e < a; e++) {
					var f = this.elementSizeTable[e];
					isNaN(f) && (f = d);
					c += f + b
				}
				return c
			};
			c.getElementSize = function(a) {
				return this.useVirtualLayout ? (a = this.elementSizeTable[a], isNaN(a) && (a = this.typicalLayoutRect ? this.typicalLayoutRect.height: 22), a) : this.target ? this.target.getElementAt(a).height: 0
			};
			c.getElementTotalSize = function() {
				for (var a = isNaN(this._gap) ? 0 : this._gap, b = this.typicalLayoutRect ? this.typicalLayoutRect.height: 22, c = 0, d = this.target.numElements, e = 0; e < d; e++) {
					var f = this.elementSizeTable[e];
					isNaN(f) && (f = b);
					c += f + a
				}
				return c - a
			};
			c.elementAdded = function(a) {
				b.prototype.elementAdded.call(this, a);
				this.elementSizeTable.splice(a, 0, this.typicalLayoutRect ? this.typicalLayoutRect.height: 22)
			};
			c.elementRemoved = function(a) {
				b.prototype.elementRemoved.call(this, a);
				this.elementSizeTable.splice(a, 1)
			};
			c.clearVirtualLayoutCache = function() {
				b.prototype.clearVirtualLayoutCache.call(this);
				this.elementSizeTable = [];
				this.maxElementWidth = 0
			};
			c.findIndexAt = function(a, b, c) {
				var d = Math.floor(0.5 * (b + c)),
				e = this.getStartPosition(d),
				f = this.getElementSize(d),
				g = isNaN(this._gap) ? 0 : this._gap;
				return a >= e && a < e + f + g ? d: b == c ? -1 : a < e ? this.findIndexAt(a, b, Math.max(b, d - 1)) : this.findIndexAt(a, Math.min(d + 1, c), c)
			};
			c.scrollPositionChanged = function() {
				b.prototype.scrollPositionChanged.call(this);
				this.useVirtualLayout && this.getIndexInView() && (this.indexInViewCalculated = !0, this.target.invalidateDisplayList())
			};
			c.getIndexInView = function() {
				if (!this.target || 0 == this.target.numElements || isNaN(this.target.width) || 0 == this.target.width || isNaN(this.target.height) || 0 == this.target.height) return this.startIndex = this.endIndex = -1,
				!1;
				var a = isNaN(this._padding) ? 0 : this._padding,
				b = isNaN(this._paddingTop) ? a: this._paddingTop,
				c = isNaN(this._paddingBottom) ? a: this._paddingBottom,
				a = this.target.numElements,
				d = this.getStartPosition(a - 1) + this.elementSizeTable[a - 1] + c,
				e = this.target.verticalScrollPosition;
				if (e > d - c) return this.endIndex = this.startIndex = -1,
				!1;
				c = this.target.verticalScrollPosition + this.target.height;
				if (c < b) return this.endIndex = this.startIndex = -1,
				!1;
				b = this.startIndex;
				d = this.endIndex;
				this.startIndex = this.findIndexAt(e, 0, a - 1); - 1 == this.startIndex && (this.startIndex = 0);
				this.endIndex = this.findIndexAt(c, 0, a - 1); - 1 == this.endIndex && (this.endIndex = a - 1);
				return b != this.startIndex || d != this.endIndex
			};
			c.updateDisplayListVirtual = function(a, b) {
				this.indexInViewCalculated ? this.indexInViewCalculated = !1 : this.getIndexInView();
				var c = isNaN(this._padding) ? 0 : this._padding,
				d = isNaN(this._paddingLeft) ? c: this._paddingLeft,
				f = isNaN(this._paddingRight) ? c: this._paddingRight,
				g = isNaN(this._paddingBottom) ? c: this._paddingBottom,
				m = isNaN(this._gap) ? 0 : this._gap,
				l = this.target.numElements;
				if ( - 1 == this.startIndex || -1 == this.endIndex) d = this.getStartPosition(l) - m + g,
				this.target.setContentSize(this.target.contentWidth, Math.ceil(d));
				else {
					this.target.setVirtualElementIndicesInView(this.startIndex, this.endIndex);
					var q = this._horizontalAlign == e.HorizontalAlign.JUSTIFY || this._horizontalAlign == e.HorizontalAlign.CONTENT_JUSTIFY,
					t = this._horizontalAlign == e.HorizontalAlign.CONTENT_JUSTIFY,
					s = 0;
					q || (this._horizontalAlign == e.HorizontalAlign.CENTER ? s = 0.5 : this._horizontalAlign == e.HorizontalAlign.RIGHT && (s = 1));
					var B = Math.max(0, a - d - f),
					z = Math.ceil(B),
					r,
					y = this.typicalLayoutRect ? this.typicalLayoutRect.height: 22,
					c = Math.max(this.typicalLayoutRect ? this.typicalLayoutRect.width: 71, this.maxElementWidth);
					if (t) {
						for (var w = this.startIndex; w <= this.endIndex; w++)(r = this.target.getVirtualElementAt(w)) && r.includeInLayout && (this.maxElementWidth = Math.max(this.maxElementWidth, r.preferredWidth));
						z = Math.ceil(Math.max(B, this.maxElementWidth))
					}
					for (var A = 0,
					x = 0,
					w = 0,
					D = !1,
					C = this.startIndex; C <= this.endIndex; C++) if (A = 0, r = this.target.getVirtualElementAt(C)) r.includeInLayout ? (q ? (A = d, r.setLayoutBoundsSize(z, NaN)) : (A = (B - r.layoutBoundsWidth) * s, A = 0 < A ? A: 0, A = d + A), t || (this.maxElementWidth = Math.max(this.maxElementWidth, r.preferredWidth)), w = Math.max(w, r.layoutBoundsWidth), D || (x = isNaN(this.elementSizeTable[C]) ? y: this.elementSizeTable[C], x != r.layoutBoundsHeight && (D = !0)), 0 == C && 0 < this.elementSizeTable.length && this.elementSizeTable[C] != r.layoutBoundsHeight && (this.typicalLayoutRect = null), this.elementSizeTable[C] = r.layoutBoundsHeight, x = this.getStartPosition(C), r.setLayoutBoundsPosition(Math.round(A), Math.round(x))) : this.elementSizeTable[C] = 0;
					w += d + f;
					d = this.getStartPosition(l) - m + g;
					this.target.setContentSize(Math.ceil(w), Math.ceil(d)); (D || c < this.maxElementWidth) && this.target.invalidateSize()
				}
			};
			c.updateDisplayListReal = function(b, c) {
				var f = isNaN(this._padding) ? 0 : this._padding,
				g = isNaN(this._paddingLeft) ? f: this._paddingLeft,
				n = isNaN(this._paddingRight) ? f: this._paddingRight,
				k = isNaN(this._paddingTop) ? f: this._paddingTop,
				f = isNaN(this._paddingBottom) ? f: this._paddingBottom,
				m = isNaN(this._gap) ? 0 : this._gap,
				l = Math.max(0, b - g - n),
				q = Math.max(0, c - k - f),
				t = this._verticalAlign == e.VerticalAlign.JUSTIFY,
				s = this._horizontalAlign == e.HorizontalAlign.JUSTIFY || this._horizontalAlign == e.HorizontalAlign.CONTENT_JUSTIFY,
				B = 0;
				s || (this._horizontalAlign == e.HorizontalAlign.CENTER ? B = 0.5 : this._horizontalAlign == e.HorizontalAlign.RIGHT && (B = 1));
				var z = this.target.numElements,
				r = z,
				y = g,
				w = k,
				A, x, D = 0,
				y = 0,
				C = [],
				F,
				E = q;
				for (A = 0; A < z; A++)(x = this.target.getElementAt(A)) && x.includeInLayout ? (this.maxElementWidth = Math.max(this.maxElementWidth, x.preferredWidth), t ? D += x.preferredHeight: isNaN(x.percentHeight) ? E -= x.preferredHeight: (y += x.percentHeight, F = new d, F.layoutElement = x, F.percent = x.percentHeight, F.min = x.minHeight, F.max = x.maxHeight, C.push(F))) : r--;
				var E = E - (r - 1) * m,
				E = 0 < E ? E: 0,
				G = q - D - m * (r - 1),
				H,
				L = r,
				J = [];
				if (t) {
					if (0 > G) {
						H = E / r;
						for (A = 0; A < z; A++)(x = this.target.getElementAt(A)) && x.includeInLayout && (x = x.preferredHeight, x <= H && (E -= x, L--));
						E = 0 < E ? E: 0
					}
				} else if (0 < y) {
					a.flexChildrenProportionally(q, E, y, C);
					q = 0;
					x = C.length;
					for (A = 0; A < x; A++) F = C[A],
					y = Math.round(F.size + q),
					q += F.size - y,
					J[F.layoutElement.hashCode] = y,
					E -= y;
					E = 0 < E ? E: 0
				}
				this._verticalAlign == e.VerticalAlign.MIDDLE ? w = k + 0.5 * E: this._verticalAlign == e.VerticalAlign.BOTTOM && (w = k + E);
				C = g;
				x = r = 0;
				F = Math.ceil(l);
				this._horizontalAlign == e.HorizontalAlign.CONTENT_JUSTIFY && (F = Math.ceil(Math.max(l, this.maxElementWidth)));
				q = 0;
				r = NaN;
				for (A = 0; A < z; A++) y = 0,
				(x = this.target.getElementAt(A)) && x.includeInLayout && (r = NaN, t ? (y = NaN, 0 < G ? y = E * x.preferredHeight / D: 0 > G && x.preferredHeight > H && (y = E / L), isNaN(y) || (r = Math.round(y + q), q += y - r)) : r = J[x.hashCode], s ? (y = g, x.setLayoutBoundsSize(F, r)) : (y = NaN, isNaN(x.percentWidth) || (y = Math.min(100, x.percentWidth), y = Math.round(l * y * 0.01)), x.setLayoutBoundsSize(y, r), y = (l - x.layoutBoundsWidth) * B, y = 0 < y ? y: 0, y = g + y), x.setLayoutBoundsPosition(Math.round(y), Math.round(w)), r = Math.ceil(x.layoutBoundsWidth), x = Math.ceil(x.layoutBoundsHeight), C = Math.max(C, y + r), k = Math.max(k, w + x), w += x + m);
				this.target.setContentSize(Math.ceil(C + n), Math.ceil(k + f))
			};
			a.flexChildrenProportionally = function(a, b, c, d) {
				var e = d.length,
				f;
				do {
					f = !0;
					var g = b - a * c / 100;
					0 < g ? b -= g: g = 0;
					for (var l = b / c,
					q = 0; q < e; q++) {
						var t = d[q],
						s = t.percent * l;
						if (s < t.min) {
							f = t.min;
							t.size = f;
							d[q] = d[--e];
							d[e] = t;
							c -= t.percent;
							g >= f || (b -= f - g);
							f = !1;
							break
						} else if (s > t.max) {
							f = t.max;
							t.size = f;
							d[q] = d[--e];
							d[e] = t;
							c -= t.percent;
							g >= f || (b -= f - g);
							f = !1;
							break
						} else t.size = s
					}
				} while (! f )
			};
			return a
		} (f.LayoutBase);
		f.VerticalLayout = g;
		g.prototype.__class__ = "egret.gui.VerticalLayout";
		var d = function() {
			return function() {
				this.layoutElement = null;
				this.size = 0;
				this.max = this.min = this.percent = NaN
			}
		} ();
		d.prototype.__class__ = "egret.gui.ChildInfo"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(b) {
			function a() {
				b.call(this);
				this._horizontalAlign = e.HorizontalAlign.LEFT;
				this._verticalAlign = e.VerticalAlign.TOP;
				this._gap = 6;
				this._padding = 0;
				this._paddingBottom = this._paddingTop = this._paddingRight = this._paddingLeft = NaN;
				this.elementSizeTable = [];
				this.endIndex = this.startIndex = -1;
				this.indexInViewCalculated = !1;
				this.maxElementHeight = 0
			}
			__extends(a, b);
			var c = a.prototype;
			Object.defineProperty(c, "horizontalAlign", {
				get: function() {
					return this._horizontalAlign
				},
				set: function(a) {
					this._horizontalAlign != a && (this._horizontalAlign = a, this.target && this.target.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c, "verticalAlign", {
				get: function() {
					return this._verticalAlign
				},
				set: function(a) {
					this._verticalAlign != a && (this._verticalAlign = a, this.target && this.target.invalidateDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c, "gap", {
				get: function() {
					return this._gap
				},
				set: function(a) {
					this._gap != a && (this._gap = a, this.invalidateTargetSizeAndDisplayList(), this.hasEventListener("gapChanged") && this.dispatchEventWith("gapChanged"))
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c, "padding", {
				get: function() {
					return this._padding
				},
				set: function(a) {
					this._padding != a && (this._padding = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c, "paddingLeft", {
				get: function() {
					return this._paddingLeft
				},
				set: function(a) {
					this._paddingLeft != a && (this._paddingLeft = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c, "paddingRight", {
				get: function() {
					return this._paddingRight
				},
				set: function(a) {
					this._paddingRight != a && (this._paddingRight = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c, "paddingTop", {
				get: function() {
					return this._paddingTop
				},
				set: function(a) {
					this._paddingTop != a && (this._paddingTop = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c, "paddingBottom", {
				get: function() {
					return this._paddingBottom
				},
				set: function(a) {
					this._paddingBottom != a && (this._paddingBottom = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			c.invalidateTargetSizeAndDisplayList = function() {
				this.target && (this.target.invalidateSize(), this.target.invalidateDisplayList())
			};
			c.measure = function() {
				b.prototype.measure.call(this);
				this.target && (this.useVirtualLayout ? this.measureVirtual() : this.measureReal())
			};
			c.measureVirtual = function() {
				for (var a = this.typicalLayoutRect ? this.typicalLayoutRect.height: 22, b = this.typicalLayoutRect ? this.typicalLayoutRect.width: 71, c = this.getElementTotalSize(), a = Math.max(this.maxElementHeight, a), d = this.target.getElementIndicesInView(), e = d.length, f = 0; f < e; f++) {
					var g = d[f],
					l = this.target.getElementAt(g);
					if (null != l && l.includeInLayout) var q = l.preferredHeight,
					c = c + l.preferredWidth,
					c = c - (isNaN(this.elementSizeTable[g]) ? b: this.elementSizeTable[g]),
					a = Math.max(a, q)
				}
				f = isNaN(this._padding) ? 0 : this._padding;
				b = isNaN(this._paddingLeft) ? f: this._paddingLeft;
				d = isNaN(this._paddingRight) ? f: this._paddingRight;
				e = isNaN(this._paddingTop) ? f: this._paddingTop;
				f = isNaN(this._paddingBottom) ? f: this._paddingBottom;
				e += f;
				this.target.measuredWidth = Math.ceil(c + (b + d));
				this.target.measuredHeight = Math.ceil(a + e)
			};
			c.measureReal = function() {
				for (var a = this.target.numElements,
				b = a,
				c = 0,
				d = 0,
				e = 0; e < a; e++) {
					var f = this.target.getElementAt(e);
					if (f && f.includeInLayout) var g = f.preferredHeight,
					c = c + f.preferredWidth,
					d = Math.max(d, g);
					else b--
				}
				a = isNaN(this._gap) ? 0 : this._gap;
				c += (b - 1) * a;
				f = isNaN(this._padding) ? 0 : this._padding;
				b = isNaN(this._paddingLeft) ? f: this._paddingLeft;
				a = isNaN(this._paddingRight) ? f: this._paddingRight;
				e = isNaN(this._paddingTop) ? f: this._paddingTop;
				f = isNaN(this._paddingBottom) ? f: this._paddingBottom;
				e += f;
				this.target.measuredWidth = Math.ceil(c + (b + a));
				this.target.measuredHeight = Math.ceil(d + e)
			};
			c.updateDisplayList = function(a, c) {
				b.prototype.updateDisplayList.call(this, a, c);
				if (this.target) if (0 == this.target.numElements) {
					var d = isNaN(this._padding) ? 0 : this._padding,
					e = isNaN(this._paddingLeft) ? d: this._paddingLeft,
					f = isNaN(this._paddingRight) ? d: this._paddingRight,
					g = isNaN(this._paddingTop) ? d: this._paddingTop,
					d = isNaN(this._paddingBottom) ? d: this._paddingBottom;
					this.target.setContentSize(Math.ceil(e + f), Math.ceil(g + d))
				} else this.useVirtualLayout ? this.updateDisplayListVirtual(a, c) : this.updateDisplayListReal(a, c)
			};
			c.getStartPosition = function(a) {
				var b = isNaN(this._padding) ? 0 : this._padding,
				c = isNaN(this._paddingLeft) ? b: this._paddingLeft,
				b = isNaN(this._gap) ? 0 : this._gap;
				if (!this.useVirtualLayout) {
					var d;
					this.target && (d = this.target.getElementAt(a));
					return d ? d.x: c
				}
				d = this.typicalLayoutRect ? this.typicalLayoutRect.width: 71;
				for (var e = 0; e < a; e++) {
					var f = this.elementSizeTable[e];
					isNaN(f) && (f = d);
					c += f + b
				}
				return c
			};
			c.getElementSize = function(a) {
				return this.useVirtualLayout ? (a = this.elementSizeTable[a], isNaN(a) && (a = this.typicalLayoutRect ? this.typicalLayoutRect.width: 71), a) : this.target ? this.target.getElementAt(a).width: 0
			};
			c.getElementTotalSize = function() {
				for (var a = this.typicalLayoutRect ? this.typicalLayoutRect.width: 71, b = isNaN(this._gap) ? 0 : this._gap, c = 0, d = this.target.numElements, e = 0; e < d; e++) {
					var f = this.elementSizeTable[e];
					isNaN(f) && (f = a);
					c += f + b
				}
				return c - b
			};
			c.elementAdded = function(a) {
				this.useVirtualLayout && (b.prototype.elementAdded.call(this, a), this.elementSizeTable.splice(a, 0, this.typicalLayoutRect ? this.typicalLayoutRect.width: 71))
			};
			c.elementRemoved = function(a) {
				this.useVirtualLayout && (b.prototype.elementRemoved.call(this, a), this.elementSizeTable.splice(a, 1))
			};
			c.clearVirtualLayoutCache = function() {
				this.useVirtualLayout && (b.prototype.clearVirtualLayoutCache.call(this), this.elementSizeTable = [], this.maxElementHeight = 0)
			};
			c.findIndexAt = function(a, b, c) {
				var d = Math.floor(0.5 * (b + c)),
				e = this.getStartPosition(d),
				f = this.getElementSize(d),
				g = isNaN(this._gap) ? 0 : this._gap;
				return a >= e && a < e + f + g ? d: b == c ? -1 : a < e ? this.findIndexAt(a, b, Math.max(b, d - 1)) : this.findIndexAt(a, Math.min(d + 1, c), c)
			};
			c.scrollPositionChanged = function() {
				b.prototype.scrollPositionChanged.call(this);
				this.useVirtualLayout && this.getIndexInView() && (this.indexInViewCalculated = !0, this.target.invalidateDisplayList())
			};
			c.getIndexInView = function() {
				if (!this.target || 0 == this.target.numElements || isNaN(this.target.width) || 0 == this.target.width || isNaN(this.target.height) || 0 == this.target.height) return this.startIndex = this.endIndex = -1,
				!1;
				var a = isNaN(this._padding) ? 0 : this._padding,
				b = isNaN(this._paddingLeft) ? a: this._paddingLeft,
				c = isNaN(this._paddingRight) ? a: this._paddingRight;
				isNaN(this._paddingTop);
				isNaN(this._paddingBottom);
				var a = this.target.numElements,
				d = this.getStartPosition(a - 1) + this.elementSizeTable[a - 1] + c,
				e = this.target.horizontalScrollPosition;
				if (e > d - c) return this.endIndex = this.startIndex = -1,
				!1;
				c = this.target.horizontalScrollPosition + this.target.width;
				if (c < b) return this.endIndex = this.startIndex = -1,
				!1;
				b = this.startIndex;
				d = this.endIndex;
				this.startIndex = this.findIndexAt(e, 0, a - 1); - 1 == this.startIndex && (this.startIndex = 0);
				this.endIndex = this.findIndexAt(c, 0, a - 1); - 1 == this.endIndex && (this.endIndex = a - 1);
				return b != this.startIndex || d != this.endIndex
			};
			c.updateDisplayListVirtual = function(a, b) {
				this.indexInViewCalculated ? this.indexInViewCalculated = !1 : this.getIndexInView();
				var c = isNaN(this._padding) ? 0 : this._padding,
				d = isNaN(this._paddingRight) ? c: this._paddingRight,
				f = isNaN(this._paddingTop) ? c: this._paddingTop,
				g = isNaN(this._paddingBottom) ? c: this._paddingBottom,
				m = isNaN(this._gap) ? 0 : this._gap,
				l = this.target.numElements;
				if ( - 1 == this.startIndex || -1 == this.endIndex) d = this.getStartPosition(l) - m + d,
				this.target.setContentSize(Math.ceil(d), this.target.contentHeight);
				else {
					this.target.setVirtualElementIndicesInView(this.startIndex, this.endIndex);
					var q = this._verticalAlign == e.VerticalAlign.JUSTIFY || this._verticalAlign == e.VerticalAlign.CONTENT_JUSTIFY,
					t = this._verticalAlign == e.VerticalAlign.CONTENT_JUSTIFY,
					s = 0;
					q || (this._verticalAlign == e.VerticalAlign.MIDDLE ? s = 0.5 : this._verticalAlign == e.VerticalAlign.BOTTOM && (s = 1));
					var B = Math.max(0, b - f - g),
					z = Math.ceil(B),
					r,
					y = this.typicalLayoutRect ? this.typicalLayoutRect.width: 71,
					c = Math.max(this.typicalLayoutRect ? this.typicalLayoutRect.height: 22, this.maxElementHeight);
					if (t) {
						for (var w = this.startIndex; w <= this.endIndex; w++)(r = this.target.getVirtualElementAt(w)) && r.includeInLayout && (this.maxElementHeight = Math.max(this.maxElementHeight, r.preferredHeight));
						z = Math.ceil(Math.max(B, this.maxElementHeight))
					}
					for (var A = 0,
					x = 0,
					w = 0,
					D = !1,
					C = this.startIndex; C <= this.endIndex; C++) if (x = 0, r = this.target.getVirtualElementAt(C)) r.includeInLayout ? (q ? (x = f, r.setLayoutBoundsSize(NaN, z)) : (x = (B - r.layoutBoundsHeight) * s, x = 0 < x ? x: 0, x = f + x), t || (this.maxElementHeight = Math.max(this.maxElementHeight, r.preferredHeight)), w = Math.max(w, r.layoutBoundsHeight), D || (A = isNaN(this.elementSizeTable[C]) ? y: this.elementSizeTable[C], A != r.layoutBoundsWidth && (D = !0)), 0 == C && 0 < this.elementSizeTable.length && this.elementSizeTable[C] != r.layoutBoundsWidth && (this.typicalLayoutRect = null), this.elementSizeTable[C] = r.layoutBoundsWidth, A = this.getStartPosition(C), r.setLayoutBoundsPosition(Math.round(A), Math.round(x))) : this.elementSizeTable[C] = 0;
					w += f + g;
					d = this.getStartPosition(l) - m + d;
					this.target.setContentSize(Math.ceil(d), Math.ceil(w)); (D || c < this.maxElementHeight) && this.target.invalidateSize()
				}
			};
			c.updateDisplayListReal = function(b, c) {
				var f = isNaN(this._padding) ? 0 : this._padding,
				g = isNaN(this._paddingLeft) ? f: this._paddingLeft,
				n = isNaN(this._paddingRight) ? f: this._paddingRight,
				k = isNaN(this._paddingTop) ? f: this._paddingTop,
				f = isNaN(this._paddingBottom) ? f: this._paddingBottom,
				m = isNaN(this._gap) ? 0 : this._gap,
				l = Math.max(0, b - g - n),
				q = Math.max(0, c - k - f),
				t = this._horizontalAlign == e.HorizontalAlign.JUSTIFY,
				s = this._verticalAlign == e.VerticalAlign.JUSTIFY || this._verticalAlign == e.VerticalAlign.CONTENT_JUSTIFY,
				B = 0;
				s || (this._verticalAlign == e.VerticalAlign.MIDDLE ? B = 0.5 : this._verticalAlign == e.VerticalAlign.BOTTOM && (B = 1));
				var z = this.target.numElements,
				r = z,
				y = g,
				w = k,
				A, x, D = 0,
				w = 0,
				C = [],
				F,
				E = l;
				for (A = 0; A < z; A++)(x = this.target.getElementAt(A)) && x.includeInLayout ? (this.maxElementHeight = Math.max(this.maxElementHeight, x.preferredHeight), t ? D += x.preferredWidth: isNaN(x.percentWidth) ? E -= x.preferredWidth: (w += x.percentWidth, F = new d, F.layoutElement = x, F.percent = x.percentWidth, F.min = x.minWidth, F.max = x.maxWidth, C.push(F))) : r--;
				var E = E - m * (r - 1),
				E = 0 < E ? E: 0,
				G = l - D - m * (r - 1),
				H,
				L = r,
				J = [];
				if (t) {
					if (0 > G) {
						H = E / r;
						for (A = 0; A < z; A++)(x = this.target.getElementAt(A)) && x.includeInLayout && (x = x.preferredWidth, x <= H && (E -= x, L--));
						E = 0 < E ? E: 0
					}
				} else if (0 < w) {
					a.flexChildrenProportionally(l, E, w, C);
					l = 0;
					x = C.length;
					for (A = 0; A < x; A++) F = C[A],
					w = Math.round(F.size + l),
					l += F.size - w,
					J[F.layoutElement.hashCode] = w,
					E -= w;
					E = 0 < E ? E: 0
				}
				this._horizontalAlign == e.HorizontalAlign.CENTER ? y = g + 0.5 * E: this._horizontalAlign == e.HorizontalAlign.RIGHT && (y = g + E);
				C = k;
				x = r = 0;
				F = Math.ceil(q);
				this._verticalAlign == e.VerticalAlign.CONTENT_JUSTIFY && (F = Math.ceil(Math.max(q, this.maxElementHeight)));
				for (A = l = 0; A < z; A++) w = 0,
				(x = this.target.getElementAt(A)) && x.includeInLayout && (r = NaN, t ? (w = NaN, 0 < G ? w = E * x.preferredWidth / D: 0 > G && x.preferredWidth > H && (w = E / L), isNaN(w) || (r = Math.round(w + l), l += w - r)) : r = J[x.hashCode], s ? (w = k, x.setLayoutBoundsSize(r, F)) : (w = NaN, isNaN(x.percentHeight) || (w = Math.min(100, x.percentHeight), w = Math.round(q * w * 0.01)), x.setLayoutBoundsSize(r, w), w = (q - x.layoutBoundsHeight) * B, w = 0 < w ? w: 0, w = k + w), x.setLayoutBoundsPosition(Math.round(y), Math.round(w)), r = Math.ceil(x.layoutBoundsWidth), x = Math.ceil(x.layoutBoundsHeight), g = Math.max(g, y + r), C = Math.max(C, w + x), y += r + m);
				this.target.setContentSize(Math.ceil(g + n), Math.ceil(C + f))
			};
			a.flexChildrenProportionally = function(a, b, c, d) {
				var e = d.length,
				f;
				do {
					f = !0;
					var g = b - a * c / 100;
					0 < g ? b -= g: g = 0;
					for (var l = b / c,
					q = 0; q < e; q++) {
						var t = d[q],
						s = t.percent * l;
						if (s < t.min) {
							f = t.min;
							t.size = f;
							d[q] = d[--e];
							d[e] = t;
							c -= t.percent;
							g >= f || (b -= f - g);
							f = !1;
							break
						} else if (s > t.max) {
							f = t.max;
							t.size = f;
							d[q] = d[--e];
							d[e] = t;
							c -= t.percent;
							g >= f || (b -= f - g);
							f = !1;
							break
						} else t.size = s
					}
				} while (! f )
			};
			return a
		} (f.LayoutBase);
		f.HorizontalLayout = g;
		g.prototype.__class__ = "egret.gui.HorizontalLayout";
		var d = function() {
			return function() {
				this.layoutElement = null;
				this.size = 0;
				this.max = this.min = this.percent = NaN
			}
		} ();
		d.prototype.__class__ = "egret.gui.ChildInfo"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { 
 	(function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this.explicitHorizontalGap = NaN;
				this._horizontalGap = 6;
				this.explicitVerticalGap = NaN;
				this._verticalGap = 6;
				this._columnCount = -1;
				this._requestedColumnCount = 0;
				this._rowCount = -1;
				this._requestedRowCount = 0;
				this._rowHeight = this.explicitRowHeight = this._columnWidth = this.explicitColumnWidth = NaN;
				this._padding = 0;
				this._paddingBottom = this._paddingTop = this._paddingRight = this._paddingLeft = NaN;
				this._horizontalAlign = e.HorizontalAlign.JUSTIFY;
				this._verticalAlign = e.VerticalAlign.JUSTIFY;
				this._columnAlign = f.ColumnAlign.LEFT;
				this._rowAlign = f.RowAlign.TOP;
				this._orientation = f.TileOrientation.ROWS;
				this.maxElementHeight = this.maxElementWidth = 0;
				this.endIndex = this.startIndex = -1;
				this.indexInViewCalculated = !1
			}
			__extends(b, d);
			var a = b.prototype;
			Object.defineProperty(a, "horizontalGap", {
				get: function() {
					return this._horizontalGap
				},
				set: function(a) {
					a != this._horizontalGap && (this._horizontalGap = this.explicitHorizontalGap = a, this.invalidateTargetSizeAndDisplayList(), this.hasEventListener("gapChanged") && this.dispatchEventWith("gapChanged"))
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "verticalGap", {
				get: function() {
					return this._verticalGap
				},
				set: function(a) {
					a != this._verticalGap && (this._verticalGap = this.explicitVerticalGap = a, this.invalidateTargetSizeAndDisplayList(), this.hasEventListener("gapChanged") && this.dispatchEventWith("gapChanged"))
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "columnCount", {
				get: function() {
					return this._columnCount
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "requestedColumnCount", {
				get: function() {
					return this._requestedColumnCount
				},
				set: function(a) {
					this._requestedColumnCount != a && (this._columnCount = this._requestedColumnCount = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "rowCount", {
				get: function() {
					return this._rowCount
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "requestedRowCount", {
				get: function() {
					return this._requestedRowCount
				},
				set: function(a) {
					this._requestedRowCount != a && (this._rowCount = this._requestedRowCount = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "columnWidth", {
				get: function() {
					return this._columnWidth
				},
				set: function(a) {
					a != this._columnWidth && (this._columnWidth = this.explicitColumnWidth = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "rowHeight", {
				get: function() {
					return this._rowHeight
				},
				set: function(a) {
					a != this._rowHeight && (this._rowHeight = this.explicitRowHeight = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "padding", {
				get: function() {
					return this._padding
				},
				set: function(a) {
					this._padding != a && (this._padding = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "paddingLeft", {
				get: function() {
					return this._paddingLeft
				},
				set: function(a) {
					this._paddingLeft != a && (this._paddingLeft = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "paddingRight", {
				get: function() {
					return this._paddingRight
				},
				set: function(a) {
					this._paddingRight != a && (this._paddingRight = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "paddingTop", {
				get: function() {
					return this._paddingTop
				},
				set: function(a) {
					this._paddingTop != a && (this._paddingTop = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "paddingBottom", {
				get: function() {
					return this._paddingBottom
				},
				set: function(a) {
					this._paddingBottom != a && (this._paddingBottom = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "horizontalAlign", {
				get: function() {
					return this._horizontalAlign
				},
				set: function(a) {
					this._horizontalAlign != a && (this._horizontalAlign = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "verticalAlign", {
				get: function() {
					return this._verticalAlign
				},
				set: function(a) {
					this._verticalAlign != a && (this._verticalAlign = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "columnAlign", {
				get: function() {
					return this._columnAlign
				},
				set: function(a) {
					this._columnAlign != a && (this._columnAlign = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "rowAlign", {
				get: function() {
					return this._rowAlign
				},
				set: function(a) {
					this._rowAlign != a && (this._rowAlign = a, this.invalidateTargetSizeAndDisplayList())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "orientation", {
				get: function() {
					return this._orientation
				},
				set: function(a) {
					this._orientation != a && (this._orientation = a, this.invalidateTargetSizeAndDisplayList(), this.hasEventListener("orientationChanged") && this.dispatchEventWith("orientationChanged"))
				},
				enumerable: !0,
				configurable: !0
			});
			a.invalidateTargetSizeAndDisplayList = function() {
				this.target && (this.target.invalidateSize(), this.target.invalidateDisplayList())
			};
			a.measure = function() {
				if (this.target) {
					var a = this._columnCount,
					b = this._rowCount,
					d = this._columnWidth,
					e = this._rowHeight,
					f = 0,
					g = 0;
					this.calculateRowAndColumn(this.target.explicitWidth, this.target.explicitHeight);
					var k = 0 < this._requestedColumnCount ? this._requestedColumnCount: this._columnCount,
					m = 0 < this._requestedRowCount ? this._requestedRowCount: this._rowCount,
					l = isNaN(this._horizontalGap) ? 0 : this._horizontalGap,
					q = isNaN(this._verticalGap) ? 0 : this._verticalGap;
					0 < k && (f = k * (this._columnWidth + l) - l);
					0 < m && (g = m * (this._rowHeight + q) - q);
					q = isNaN(this._padding) ? 0 : this._padding;
					k = isNaN(this._paddingLeft) ? q: this._paddingLeft;
					m = isNaN(this._paddingRight) ? q: this._paddingRight;
					l = isNaN(this._paddingTop) ? q: this._paddingTop;
					q = isNaN(this._paddingBottom) ? q: this._paddingBottom;
					l += q;
					this.target.measuredWidth = Math.ceil(f + (k + m));
					this.target.measuredHeight = Math.ceil(g + l);
					this._columnCount = a;
					this._rowCount = b;
					this._columnWidth = d;
					this._rowHeight = e
				}
			};
			a.calculateRowAndColumn = function(a, b) {
				var d = isNaN(this._horizontalGap) ? 0 : this._horizontalGap,
				e = isNaN(this._verticalGap) ? 0 : this._verticalGap;
				this._rowCount = this._columnCount = -1;
				for (var g = this.target.numElements,
				n = g,
				k = 0; k < n; k++) {
					var m = this.target.getElementAt(k);
					m && !m.includeInLayout && g--
				}
				if (0 == g) this._rowCount = this._columnCount = 0;
				else { (isNaN(this.explicitColumnWidth) || isNaN(this.explicitRowHeight)) && this.updateMaxElementSize();
					isNaN(this.explicitColumnWidth) ? this._columnWidth = this.maxElementWidth: this._columnWidth = this.explicitColumnWidth;
					isNaN(this.explicitRowHeight) ? this._rowHeight = this.maxElementHeight: this._rowHeight = this.explicitRowHeight;
					n = this._columnWidth + d;
					0 >= n && (n = 1);
					k = this._rowHeight + e;
					0 >= k && (k = 1);
					var m = this.orientation == f.TileOrientation.COLUMNS,
					l = !isNaN(a),
					q = !isNaN(b),
					t = isNaN(this._padding) ? 0 : this._padding,
					s = isNaN(this._paddingLeft) ? t: this._paddingLeft,
					B = isNaN(this._paddingRight) ? t: this._paddingRight,
					z = isNaN(this._paddingTop) ? t: this._paddingTop,
					t = isNaN(this._paddingBottom) ? t: this._paddingBottom;
					0 < this._requestedColumnCount || 0 < this._requestedRowCount ? (0 < this._requestedRowCount && (this._rowCount = Math.min(this._requestedRowCount, g)), 0 < this._requestedColumnCount && (this._columnCount = Math.min(this._requestedColumnCount, g))) : l || q ? !l || q && m ? (d = Math.max(0, b - z - t), this._rowCount = Math.floor((d + e) / k), this._rowCount = Math.max(1, Math.min(this._rowCount, g))) : (e = Math.max(0, a - s - B), this._columnCount = Math.floor((e + d) / n), this._columnCount = Math.max(1, Math.min(this._columnCount, g))) : (d = Math.sqrt(g * n * k), m ? this._rowCount = Math.max(1, Math.round(d / k)) : this._columnCount = Math.max(1, Math.round(d / n))); - 1 == this._rowCount && (this._rowCount = Math.max(1, Math.ceil(g / this._columnCount))); - 1 == this._columnCount && (this._columnCount = Math.max(1, Math.ceil(g / this._rowCount)));
					0 < this._requestedColumnCount && 0 < this._requestedRowCount && (this.orientation == f.TileOrientation.ROWS ? this._rowCount = Math.max(1, Math.ceil(g / this._requestedColumnCount)) : this._columnCount = Math.max(1, Math.ceil(g / this._requestedRowCount)))
				}
			};
			a.updateMaxElementSize = function() {
				this.target && (this.useVirtualLayout ? this.updateMaxElementSizeVirtual() : this.updateMaxElementSizeReal())
			};
			a.updateMaxElementSizeVirtual = function() {
				var a = this.typicalLayoutRect ? this.typicalLayoutRect.height: 22;
				this.maxElementWidth = Math.max(this.maxElementWidth, this.typicalLayoutRect ? this.typicalLayoutRect.width: 22);
				this.maxElementHeight = Math.max(this.maxElementHeight, a);
				if ( - 1 != this.startIndex && -1 != this.endIndex) for (a = this.startIndex; a <= this.endIndex; a++) {
					var b = this.target.getVirtualElementAt(a);
					b && b.includeInLayout && (this.maxElementWidth = Math.max(this.maxElementWidth, b.preferredWidth), this.maxElementHeight = Math.max(this.maxElementHeight, b.preferredHeight))
				}
			};
			a.updateMaxElementSizeReal = function() {
				for (var a = this.target.numElements,
				b = 0; b < a; b++) {
					var d = this.target.getElementAt(b);
					d && d.includeInLayout && (this.maxElementWidth = Math.max(this.maxElementWidth, d.preferredWidth), this.maxElementHeight = Math.max(this.maxElementHeight, d.preferredHeight))
				}
			};
			a.clearVirtualLayoutCache = function() {
				d.prototype.clearVirtualLayoutCache.call(this);
				this.maxElementHeight = this.maxElementWidth = 0
			};
			a.scrollPositionChanged = function() {
				d.prototype.scrollPositionChanged.call(this);
				this.useVirtualLayout && this.getIndexInView() && (this.indexInViewCalculated = !0, this.target.invalidateDisplayList())
			};
			a.getIndexInView = function() {
				if (!this.target || 0 == this.target.numElements) return this.startIndex = this.endIndex = -1,
				!1;
				var a = this.target.numElements;
				if (!this.useVirtualLayout) return this.startIndex = 0,
				this.endIndex = a - 1,
				!1;
				if (isNaN(this.target.width) || 0 == this.target.width || isNaN(this.target.height) || 0 == this.target.height) return this.startIndex = this.endIndex = -1,
				!1;
				var b = this.startIndex,
				d = this.endIndex,
				e = isNaN(this._padding) ? 0 : this._padding,
				g = isNaN(this._paddingLeft) ? e: this._paddingLeft,
				e = isNaN(this._paddingTop) ? e: this._paddingTop,
				n = isNaN(this._horizontalGap) ? 0 : this._horizontalGap,
				k = isNaN(this._verticalGap) ? 0 : this._verticalGap;
				if (this.orientation == f.TileOrientation.COLUMNS) {
					n = this._columnWidth + n;
					if (0 >= n) return this.startIndex = 0,
					this.endIndex = a - 1,
					!1;
					k = this.target.horizontalScrollPosition + this.target.width;
					e = Math.floor((this.target.horizontalScrollPosition - g) / n);
					0 > e && (e = 0);
					g = Math.ceil((k - g) / n);
					0 > g && (g = 0);
					this.startIndex = Math.min(a - 1, Math.max(0, e * this._rowCount));
					this.endIndex = Math.min(a - 1, Math.max(0, g * this._rowCount - 1))
				} else {
					n = this._rowHeight + k;
					if (0 >= n) return this.startIndex = 0,
					this.endIndex = a - 1,
					!1;
					k = this.target.verticalScrollPosition + this.target.height;
					g = Math.floor((this.target.verticalScrollPosition - e) / n);
					0 > g && (g = 0);
					e = Math.ceil((k - e) / n);
					0 > e && (e = 0);
					this.startIndex = Math.min(a - 1, Math.max(0, g * this._columnCount));
					this.endIndex = Math.min(a - 1, Math.max(0, e * this._columnCount - 1))
				}
				return this.startIndex != b || this.endIndex != d
			};
			a.updateDisplayList = function(a, b) {
				d.prototype.updateDisplayList.call(this, a, b);
				if (this.target) {
					var e = isNaN(this._padding) ? 0 : this._padding,
					g = isNaN(this._paddingLeft) ? e: this._paddingLeft,
					u = isNaN(this._paddingRight) ? e: this._paddingRight,
					n = isNaN(this._paddingTop) ? e: this._paddingTop,
					k = isNaN(this._paddingBottom) ? e: this._paddingBottom;
					if (this.indexInViewCalculated) this.indexInViewCalculated = !1;
					else {
						this.calculateRowAndColumn(a, b);
						if (0 == this._rowCount || 0 == this._columnCount) {
							this.target.setContentSize(g + u, n + k);
							return
						}
						this.adjustForJustify(a, b);
						this.getIndexInView()
					}
					this.useVirtualLayout && (this.calculateRowAndColumn(a, b), this.adjustForJustify(a, b));
					if ( - 1 == this.startIndex || -1 == this.endIndex) this.target.setContentSize(0, 0);
					else {
						this.target.setVirtualElementIndicesInView(this.startIndex, this.endIndex);
						for (var m, l, q, t = this.orientation == f.TileOrientation.COLUMNS,
						s = this.startIndex,
						e = isNaN(this._horizontalGap) ? 0 : this._horizontalGap, B = isNaN(this._verticalGap) ? 0 : this._verticalGap, z = this.startIndex; z <= this.endIndex; z++) m = this.useVirtualLayout ? this.target.getVirtualElementAt(z) : this.target.getElementAt(z),
						null != m && m.includeInLayout && (t ? (l = Math.ceil((s + 1) / this._rowCount) - 1, q = Math.ceil((s + 1) % this._rowCount) - 1, -1 == q && (q = this._rowCount - 1)) : (l = Math.ceil((s + 1) % this._columnCount) - 1, -1 == l && (l = this._columnCount - 1), q = Math.ceil((s + 1) / this._columnCount) - 1), l = l * (this._columnWidth + e) + g, q = q * (this._rowHeight + B) + n, this.sizeAndPositionElement(m, l, q, this._columnWidth, this.rowHeight), s++);
						n += k;
						B = (this._rowHeight + B) * this._rowCount - B;
						this.target.setContentSize(Math.ceil((this._columnWidth + e) * this._columnCount - e + (g + u)), Math.ceil(B + n))
					}
				}
			};
			a.sizeAndPositionElement = function(a, b, d, f, g) {
				var n = NaN,
				k = NaN;
				this.horizontalAlign == e.HorizontalAlign.JUSTIFY ? n = f: isNaN(a.percentWidth) || (n = f * a.percentWidth * 0.01);
				this.verticalAlign == e.VerticalAlign.JUSTIFY ? k = g: isNaN(a.percentHeight) || (k = g * a.percentHeight * 0.01);
				a.setLayoutBoundsSize(Math.round(n), Math.round(k));
				n = b;
				switch (this.horizontalAlign) {
				case e.HorizontalAlign.RIGHT:
					n += f - a.layoutBoundsWidth;
					break;
				case e.HorizontalAlign.CENTER:
					n = b + (f - a.layoutBoundsWidth) / 2
				}
				b = d;
				switch (this.verticalAlign) {
				case e.VerticalAlign.BOTTOM:
					b += g - a.layoutBoundsHeight;
					break;
				case e.VerticalAlign.MIDDLE:
					b += (g - a.layoutBoundsHeight) / 2
				}
				a.setLayoutBoundsPosition(Math.round(n), Math.round(b))
			};
			a.adjustForJustify = function(a, b) {
				var d = isNaN(this._padding) ? 0 : this._padding,
				e = isNaN(this._paddingLeft) ? d: this._paddingLeft,
				g = isNaN(this._paddingRight) ? d: this._paddingRight,
				n = isNaN(this._paddingTop) ? d: this._paddingTop,
				d = isNaN(this._paddingBottom) ? d: this._paddingBottom,
				e = Math.max(0, a - e - g),
				n = Math.max(0, b - n - d);
				isNaN(this.explicitVerticalGap) || (this._verticalGap = this.explicitVerticalGap);
				isNaN(this.explicitHorizontalGap) || (this._horizontalGap = this.explicitHorizontalGap);
				this._verticalGap = isNaN(this._verticalGap) ? 0 : this._verticalGap;
				this._horizontalGap = isNaN(this._horizontalGap) ? 0 : this._horizontalGap;
				n -= this._rowHeight * this._rowCount;
				e -= this._columnWidth * this._columnCount;
				0 < n && (this.rowAlign == f.RowAlign.JUSTIFY_USING_GAP ? (g = Math.max(1, this._rowCount - 1), this._verticalGap = n / g) : this.rowAlign == f.RowAlign.JUSTIFY_USING_HEIGHT && 0 < this._rowCount && (this._rowHeight += (n - (this._rowCount - 1) * this._verticalGap) / this._rowCount));
				0 < e && (this.columnAlign == f.ColumnAlign.JUSTIFY_USING_GAP ? (g = Math.max(1, this._columnCount - 1), this._horizontalGap = e / g) : this.columnAlign == f.ColumnAlign.JUSTIFY_USING_WIDTH && 0 < this._columnCount && (this._columnWidth += (e - (this._columnCount - 1) * this._horizontalGap) / this._columnCount))
			};
			return b
		} (f.LayoutBase);
		f.TileLayout = g;
		g.prototype.__class__ = "egret.gui.TileLayout"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(e) {
		var g = function() {
			function d(a, b, d) {
				this.upperBoundReference = this.lowerBoundReference = this.owner = null;
				this.raw_getElementAt = "raw_getElementAt";
				this.raw_addElementAt = "raw_addElementAt";
				this.raw_getElementIndex = "raw_getElementIndex";
				this.raw_removeElement = "raw_removeElement";
				this.raw_removeElementAt = "raw_removeElementAt";
				this.raw_setElementIndex = "raw_setElementIndex";
				this.owner = a;
				this.lowerBoundReference = b;
				this.upperBoundReference = d
			}
			var b = d.prototype;
			Object.defineProperty(b, "numElements", {
				get: function() {
					return this.owner[this.upperBoundReference] - this.owner[this.lowerBoundReference]
				},
				enumerable: !0,
				configurable: !0
			});
			b.getElementAt = function(a) {
				return this.owner[this.raw_getElementAt](this.owner[this.lowerBoundReference] + a)
			};
			b.addElement = function(a) {
				var b = this.owner[this.upperBoundReference];
				a.parent === this.owner && b--;
				this.owner[this.upperBoundReference]++;
				this.owner[this.raw_addElementAt](a, b);
				a.ownerChanged(this);
				return a
			};
			b.addElementAt = function(a, b) {
				this.owner[this.upperBoundReference]++;
				this.owner[this.raw_addElementAt](a, this.owner[this.lowerBoundReference] + b);
				a.ownerChanged(this);
				return a
			};
			b.removeElement = function(a) {
				var b = this.owner[this.raw_getElementIndex](a);
				this.owner[this.lowerBoundReference] <= b && b < this.owner[this.upperBoundReference] && (this.owner[this.raw_removeElement](a), this.owner[this.upperBoundReference]--);
				a.ownerChanged(null);
				return a
			};
			b.removeElementAt = function(a) {
				a += this.owner[this.lowerBoundReference];
				var b;
				this.owner[this.lowerBoundReference] <= a && a < this.owner[this.upperBoundReference] && (b = this.owner[this.raw_removeElementAt](a), this.owner[this.upperBoundReference]--);
				b.ownerChanged(null);
				return b
			};
			b.getElementIndex = function(a) {
				a = this.owner[this.raw_getElementIndex](a);
				return a -= this.owner[this.lowerBoundReference]
			};
			b.setElementIndex = function(a, b) {
				this.owner[this.raw_setElementIndex](a, this.owner[this.lowerBoundReference] + b)
			};
			return d
		} ();
		e.UILayer = g;
		g.prototype.__class__ = "egret.gui.UILayer"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(d) {
			function b() {
				d.call(this);
				this._autoResize = !0;
				this._cursorContainer = this._toolTipContainer = this._popUpContainer = null;
				this._cursorIndex = this._toolTipIndex = this._topMostIndex = this._noTopMostIndex = 0;
				this.touchEnabled = !1;
				this.addEventListener(e.Event.ADDED_TO_STAGE, this.onAddToStage, this);
				this.addEventListener(e.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
			}
			__extends(b, d);
			var a = b.prototype;
			a.onAddToStage = function(a) {
				if (f.UIGlobals._uiStage) throw Error(e.getString(3013));
				f.UIGlobals._uiStage = this;
				this._autoResize && (this.stage.addEventListener(e.Event.RESIZE, this.onResize, this), this.onResize())
			};
			a.onRemoveFromStage = function(a) {
				f.UIGlobals._uiStage = null;
				this._autoResize && this.stage.removeEventListener(e.Event.RESIZE, this.onResize, this)
			};
			a.onResize = function(a) {
				this._setWidth(this.stage.stageWidth);
				this._setHeight(this.stage.stageHeight)
			};
			Object.defineProperty(a, "autoResize", {
				get: function() {
					return this._autoResize
				},
				set: function(a) {
					this._autoResize != a && (this._autoResize = a, this.stage && (this._autoResize ? (this.stage.addEventListener(e.Event.RESIZE, this.onResize, this), this.onResize()) : this.stage.removeEventListener(e.Event.RESIZE, this.onResize, this)))
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "x", {
				get: function() {
					return this._DO_Props_._x
				},
				set: function(a) {
					this._autoResize || (this._DO_Props_._x = a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "y", {
				get: function() {
					return this._DO_Props_._y
				},
				set: function(a) {
					this._autoResize || (this._DO_Props_._y = a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "width", {
				get: function() {
					return this._UIC_Props_._width
				},
				set: function(a) {
					this._autoResize || this._setWidth(a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "height", {
				get: function() {
					return this._UIC_Props_._height
				},
				set: function(a) {
					this._autoResize || this._setHeight(a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "scaleX", {
				get: function() {
					return this._DO_Props_._scaleX
				},
				set: function(a) {
					this._autoResize || this._setScaleX(a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "scaleY", {
				get: function() {
					return this._DO_Props_._scaleY
				},
				set: function(a) {
					this._autoResize || this._setScaleY(a)
				},
				enumerable: !0,
				configurable: !0
			});
			a.setActualSize = function(a, b) {
				this._autoResize || d.prototype.setActualSize.call(this, a, b)
			};
			a.setLayoutBoundsPosition = function(a, b) {
				this._autoResize || d.prototype.setLayoutBoundsPosition.call(this, a, b)
			};
			a.setLayoutBoundsSize = function(a, b) {
				this._autoResize || d.prototype.setLayoutBoundsSize.call(this, a, b)
			};
			Object.defineProperty(a, "layout", {
				get: function() {
					return this._layout
				},
				set: function(a) {
					a instanceof f.BasicLayout && this._setLayout(a)
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "popUpContainer", {
				get: function() {
					this._popUpContainer || (this._popUpContainer = new f.UILayer(this, "noTopMostIndex", "topMostIndex"));
					return this._popUpContainer
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "toolTipContainer", {
				get: function() {
					this._toolTipContainer || (this._toolTipContainer = new f.UILayer(this, "topMostIndex", "toolTipIndex"));
					return this._toolTipContainer
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "cursorContainer", {
				get: function() {
					this._cursorContainer || (this._cursorContainer = new f.UILayer(this, "toolTipIndex", "cursorIndex"));
					return this._cursorContainer
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "noTopMostIndex", {
				get: function() {
					return this._noTopMostIndex
				},
				set: function(a) {
					var b = a - this._noTopMostIndex;
					this._noTopMostIndex = a;
					this.topMostIndex += b
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "topMostIndex", {
				get: function() {
					return this._topMostIndex
				},
				set: function(a) {
					var b = a - this._topMostIndex;
					this._topMostIndex = a;
					this.toolTipIndex += b
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "toolTipIndex", {
				get: function() {
					return this._toolTipIndex
				},
				set: function(a) {
					var b = a - this._toolTipIndex;
					this._toolTipIndex = a;
					this.cursorIndex += b
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(a, "cursorIndex", {
				get: function() {
					return this._cursorIndex
				},
				set: function(a) {
					this._cursorIndex = a
				},
				enumerable: !0,
				configurable: !0
			});
			a.addElement = function(a) {
				var b = this._noTopMostIndex;
				a.parent == this && b--;
				return this.addElementAt(a, b)
			};
			a.addElementAt = function(a, b) {
				if (a.parent == this) {
					var e = this.getElementIndex(a);
					e < this._noTopMostIndex ? this.noTopMostIndex--:e >= this._noTopMostIndex && e < this._topMostIndex ? this.topMostIndex--:e >= this._topMostIndex && e < this._toolTipIndex ? this.toolTipIndex--:this.cursorIndex--
				}
				b <= this._noTopMostIndex ? this.noTopMostIndex++:b > this._noTopMostIndex && b <= this._topMostIndex ? this.topMostIndex++:b > this._topMostIndex && b <= this._toolTipIndex ? this.toolTipIndex++:this.cursorIndex++;
				return d.prototype.addElementAt.call(this, a, b)
			};
			a.removeElement = function(a) {
				return this.removeElementAt(d.prototype.getElementIndex.call(this, a))
			};
			a.removeElementAt = function(a) {
				var b = d.prototype.removeElementAt.call(this, a);
				a < this._noTopMostIndex ? this.noTopMostIndex--:a >= this._noTopMostIndex && a < this._topMostIndex ? this.topMostIndex--:a >= this._topMostIndex && a < this._toolTipIndex ? this.toolTipIndex--:this.cursorIndex--;
				return b
			};
			a.removeAllElements = function() {
				for (; 0 < this._noTopMostIndex;) d.prototype.removeElementAt.call(this, 0),
				this.noTopMostIndex--
			};
			a._elementRemoved = function(a, b, f) {
				void 0 === f && (f = !0);
				f && e.Event.dispatchEvent(a, "removeFromUIStage");
				d.prototype._elementRemoved.call(this, a, b, f)
			};
			a.raw_getElementAt = function(a) {
				return d.prototype.getElementAt.call(this, a)
			};
			a.raw_addElement = function(a) {
				var b = this.numElements;
				a.parent == this && b--;
				return this.raw_addElementAt(a, b)
			};
			a.raw_addElementAt = function(a, b) {
				if (a.parent == this) {
					var e = this.getElementIndex(a);
					e < this._noTopMostIndex ? this.noTopMostIndex--:e >= this._noTopMostIndex && e < this._topMostIndex ? this.topMostIndex--:e >= this._topMostIndex && e < this._toolTipIndex ? this.toolTipIndex--:this.cursorIndex--
				}
				return d.prototype.addElementAt.call(this, a, b)
			};
			a.raw_removeElement = function(a) {
				return d.prototype.removeElementAt.call(this, d.prototype.getElementIndex.call(this, a))
			};
			a.raw_removeElementAt = function(a) {
				return d.prototype.removeElementAt.call(this, a)
			};
			a.raw_removeAllElements = function() {
				for (; 0 < this.numElements;) d.prototype.removeElementAt.call(this, 0)
			};
			a.raw_getElementIndex = function(a) {
				return d.prototype.getElementIndex.call(this, a)
			};
			a.raw_setElementIndex = function(a, b) {
				d.prototype.setElementIndex.call(this, a, b)
			};
			a.raw_swapElements = function(a, b) {
				d.prototype.swapElementsAt.call(this, d.prototype.getElementIndex.call(this, a), d.prototype.getElementIndex.call(this, b))
			};
			a.raw_swapElementsAt = function(a, b) {
				d.prototype.swapElementsAt.call(this, a, b)
			};
			return b
		} (f.Group);
		f.UIStage = g;
		g.prototype.__class__ = "egret.gui.UIStage"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { (function(f) {
		var g = function(b) {
			function a() {
				b.call(this);
				this._popUpList = [];
				this.popUpDataList = [];
				this._modalColor = 0;
				this._modalAlpha = 0.5;
				this.invalidateModalFlag = !1;
				this.modalMask = null
			}
			__extends(a, b);
			var c = a.prototype;
			Object.defineProperty(c, "popUpList", {
				get: function() {
					return this._popUpList.concat()
				},
				enumerable: !0,
				configurable: !0
			});
			c.findPopUpData = function(a) {
				for (var b = this.popUpDataList,
				c = b.length,
				d = 0; d < c; d++) {
					var e = b[d];
					if (e.popUp == a) return e
				}
				return null
			};
			c.addPopUp = function(b, c, e) {
				void 0 === c && (c = !1);
				void 0 === e && (e = !0);
				var g = f.UIGlobals.uiStage,
				n = this.findPopUpData(b);
				n ? (n.modal = c, b.removeEventListener(a.REMOVE_FROM_UISTAGE, this.onRemoved, this)) : (n = new d(b, c), this.popUpDataList.push(n), this._popUpList.push(b));
				g.popUpContainer.addElement(b);
				e && this.centerPopUp(b);
				"isPopUp" in b && (b.isPopUp = !0);
				c && this.invalidateModal();
				b.addEventListener(a.REMOVE_FROM_UISTAGE, this.onRemoved, this)
			};
			c.onRemoved = function(b) {
				for (var c = 0,
				d = this.popUpDataList,
				e = d.length,
				f = 0; f < e; f++) {
					var g = d[f];
					if (g.popUp == b.target) {
						"isPopUp" in g.popUp && (g.popUp.isPopUp = !1);
						g.popUp.removeEventListener(a.REMOVE_FROM_UISTAGE, this.onRemoved, this);
						this.popUpDataList.splice(c, 1);
						this._popUpList.splice(c, 1);
						this.invalidateModal();
						break
					}
					c++
				}
			};
			Object.defineProperty(c, "modalColor", {
				get: function() {
					return this._modalColor
				},
				set: function(a) {
					this._modalColor != a && (this._modalColor = a, this.invalidateModal())
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(c, "modalAlpha", {
				get: function() {
					return this._modalAlpha
				},
				set: function(a) {
					this._modalAlpha != a && (this._modalAlpha = a, this.invalidateModal())
				},
				enumerable: !0,
				configurable: !0
			});
			c.invalidateModal = function() {
				this.invalidateModalFlag || (this.invalidateModalFlag = !0, f.UIGlobals.stage.addEventListener(e.Event.ENTER_FRAME, this.validateModal, this), f.UIGlobals.stage.addEventListener(e.Event.RENDER, this.validateModal, this), f.UIGlobals.stage.invalidate())
			};
			c.validateModal = function(a) {
				this.invalidateModalFlag = !1;
				f.UIGlobals.stage.removeEventListener(e.Event.ENTER_FRAME, this.validateModal, this);
				f.UIGlobals.stage.removeEventListener(e.Event.RENDER, this.validateModal, this);
				this.updateModal(f.UIGlobals.uiStage)
			};
			c.updateModal = function(a) {
				for (var b = a.popUpContainer,
				c = !1,
				d = b.numElements - 1; 0 <= d; d--) {
					var e = b.getElementAt(d);
					if ((e = this.findPopUpData(e)) && e.modal) {
						c = !0;
						break
					}
				}
				c ? (this.modalMask || (this.modalMask = new f.Rect, this.modalMask.touchEnabled = !0, this.modalMask.top = this.modalMask.left = this.modalMask.right = this.modalMask.bottom = 0), this.modalMask.fillColor = this._modalColor, this.modalMask.alpha = this._modalAlpha, this.modalMask.parent == a ? (b.getElementIndex(this.modalMask) < d && d--, b.setElementIndex(this.modalMask, d)) : b.addElementAt(this.modalMask, d)) : this.modalMask && this.modalMask.parent == a && b.removeElement(this.modalMask)
			};
			c.removePopUp = function(a) {
				a && a.parent && this.findPopUpData(a) && ("removeElement" in a.parent ? a.parent.removeElement(a) : a.parent instanceof f.UIComponent ? a.parent._removeFromDisplayList(a) : a instanceof e.DisplayObject && a.parent.removeChild(a))
			};
			c.centerPopUp = function(a) {
				a.top = a.bottom = a.left = a.right = NaN;
				a.verticalCenter = a.horizontalCenter = 0;
				var b = a.parent;
				b && ("validateNow" in a && a.validateNow(), a.x = 0.5 * (b.width - a.layoutBoundsWidth), a.y = 0.5 * (b.height - a.layoutBoundsHeight))
			};
			c.bringToFront = function(a) {
				if (this.findPopUpData(a) && a.parent && "popUpContainer" in a.parent) {
					var b = a.parent;
					b.popUpContainer.setElementIndex(a, b.popUpContainer.numElements - 1);
					this.invalidateModal()
				}
			};
			a.REMOVE_FROM_UISTAGE = "removeFromUIStage";
			return a
		} (e.EventDispatcher);
		f.PopUpManagerImpl = g;
		g.prototype.__class__ = "egret.gui.PopUpManagerImpl";
		var d = function() {
			return function(b, a) {
				this.popUp = null;
				this.modal = !1;
				this.popUp = b;
				this.modal = a
			}
		} ();
		d.prototype.__class__ = "egret.gui.PopUpData"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
 (function(e) { 
 	(function(f) {
		var g = function() {
			function d() {}
			d.getImpl = function() {
				if (!d._impl) try {
					d._impl = e.Injector.getInstance("egret.gui.IPopUpManager")
				} catch(b) {
					d._impl = new f.PopUpManagerImpl
				}
				return d._impl
			};
			Object.defineProperty(d, "modalColor", {
				get: function() {
					return d.getImpl().modalColor
				},
				set: function(b) {
					d.getImpl().modalColor = b
				},
				enumerable: !0,
				configurable: !0
			});
			Object.defineProperty(d, "modalAlpha", {
				get: function() {
					return d.getImpl().modalAlpha
				},
				set: function(b) {
					d.getImpl().modalAlpha = b
				},
				enumerable: !0,
				configurable: !0
			});
			d.addPopUp = function(b, a, c) {
				void 0 === a && (a = !1);
				void 0 === c && (c = !0);
				d.getImpl().addPopUp(b, a, c);
				f.PopUpEvent.dispatchPopUpEvent(d.getImpl(), f.PopUpEvent.ADD_POPUP, b, a)
			};
			d.removePopUp = function(b) {
				d.getImpl().removePopUp(b);
				f.PopUpEvent.dispatchPopUpEvent(d.getImpl(), f.PopUpEvent.REMOVE_POPUP, b)
			};
			d.centerPopUp = function(b) {
				d.getImpl().centerPopUp(b)
			};
			d.bringToFront = function(b) {
				d.getImpl().bringToFront(b);
				f.PopUpEvent.dispatchPopUpEvent(d.getImpl(), f.PopUpEvent.BRING_TO_FRONT, b)
			};
			Object.defineProperty(d, "popUpList", {
				get: function() {
					return d.getImpl().popUpList
				},
				enumerable: !0,
				configurable: !0
			});
			d.addEventListener = function(b, a, c, e, f) {
				void 0 === e && (e = !1);
				void 0 === f && (f = 0);
				d.getImpl().addEventListener(b, a, c, e, f)
			};
			d.removeEventListener = function(b, a, c, e) {
				void 0 === e && (e = !1);
				d.getImpl().removeEventListener(b, a, c, e)
			};
			return d
		} ();
		f.PopUpManager = g;
		g.prototype.__class__ = "egret.gui.PopUpManager"
	})(e.gui || (e.gui = {}))
})(egret || (egret = {}));
(function (egret) {
    /**
     * egret.WebSocket 类启用代码以建立传输控制协议 (TCP) 套接字连接，用于发送和接收字符串或二进制数据。
     * 要使用 egret.WebSocket 类的方法，请先使用构造函数 new egret.WebSocket 创建一个 egret.WebSocket 对象。
     * 套接字以异步方式传输和接收数据。
     * @event egret.Event.CONNECT 连接服务器成功。
     * @event egret.ProgressEvent.SOCKET_DATA 接收服务器数据。
     * @event egret.Event.CLOSE 在服务器关闭连接时调度。
     * @event egret.IOErrorEvent.IO_ERROR 在出现输入/输出错误并导致发送或加载操作失败时调度。。
     * @see http://edn.egret.com/cn/docs/page/602 WebSocket
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample extension/socket/WebSocket.ts
     * @language zh_CN
     */
    var WebSocket = (function (_super) {
        __extends(WebSocket, _super);
        /**
         * 创建一个 egret.WebSocket 对象
         * 参数为预留参数，现版本暂不处理，连接地址和端口号在 connect 函数中传入
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        function WebSocket(host, port) {
            if (host === void 0) { host = ""; }
            if (port === void 0) { port = 0; }
            var _this = _super.call(this) || this;
            /**
             * @private
             */
            _this._writeMessage = "";
            /**
             * @private
             */
            _this._readMessage = "";
            /**
             * @private
             */
            _this._connected = false;
            /**
             * @private
             */
            _this._connecting = false;
            /**
             * @private
             */
            _this._isReadySend = false;
            /**
             * @private
             */
            _this._bytesWrite = false;
            /**
             * @private
             */
            _this._type = WebSocket.TYPE_STRING;
            _this._connected = false;
            _this._writeMessage = "";
            _this._readMessage = "";
            _this.socket = new egret.ISocket();
            _this.socket.addCallBacks(_this.onConnect, _this.onClose, _this.onSocketData, _this.onError, _this);
            return _this;
        }
        /**
         * 将套接字连接到指定的主机和端口
         * @param host 要连接到的主机的名称或 IP 地址
         * @param port 要连接到的端口号
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.prototype.connect = function (host, port) {
            if (!this._connecting && !this._connected) {
                this._connecting = true;
                this.socket.connect(host, port);
            }
        };
        /**
         * 根据提供的url连接
         * @param url 全地址。如ws://echo.websocket.org:80
         */
        WebSocket.prototype.connectByUrl = function (url) {
            if (!this._connecting && !this._connected) {
                this._connecting = true;
                this.socket.connectByUrl(url);
            }
        };
        /**
         * 关闭套接字
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.prototype.close = function () {
            if (this._connected) {
                this.socket.close();
            }
        };
        /**
         * @private
         *
         */
        WebSocket.prototype.onConnect = function () {
            this._connected = true;
            this._connecting = false;
            this.dispatchEventWith(egret.Event.CONNECT);
        };
        /**
         * @private
         *
         */
        WebSocket.prototype.onClose = function () {
            this._connected = false;
            this.dispatchEventWith(egret.Event.CLOSE);
        };
        /**
         * @private
         *
         */
        WebSocket.prototype.onError = function () {
            if (this._connecting) {
                this._connecting = false;
            }
            this.dispatchEventWith(egret.IOErrorEvent.IO_ERROR);
        };
        /**
         * @private
         *
         * @param message
         */
        WebSocket.prototype.onSocketData = function (message) {
            if (typeof message == "string") {
                this._readMessage += message;
            }
            else {
                this._readByte._writeUint8Array(new Uint8Array(message));
            }
            egret.ProgressEvent.dispatchProgressEvent(this, egret.ProgressEvent.SOCKET_DATA);
        };
        /**
         * 对套接字输出缓冲区中积累的所有数据进行刷新
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.prototype.flush = function () {
            if (!this._connected) {
                egret.$warn(3101);
                return;
            }
            if (this._writeMessage) {
                this.socket.send(this._writeMessage);
                this._writeMessage = "";
            }
            if (this._bytesWrite) {
                this.socket.send(this._writeByte.buffer);
                this._bytesWrite = false;
                this._writeByte.clear();
            }
            this._isReadySend = false;
        };
        /**
         * 将字符串数据写入套接字
         * @param message 要写入套接字的字符串
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.prototype.writeUTF = function (message) {
            if (!this._connected) {
                egret.$warn(3101);
                return;
            }
            if (this._type == WebSocket.TYPE_BINARY) {
                this._bytesWrite = true;
                this._writeByte.writeUTF(message);
            }
            else {
                this._writeMessage += message;
            }
            this.flush();
            // return;
            // if (this._isReadySend) {
            //     return;
            // }
            // this._isReadySend = true;
            // egret.callLater(this.flush, this);
        };
        /**
         * 从套接字读取一个 UTF-8 字符串
         * @returns {string}
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.prototype.readUTF = function () {
            var message;
            if (this._type == WebSocket.TYPE_BINARY) {
                this._readByte.position = 0;
                message = this._readByte.readUTF();
                this._readByte.clear();
            }
            else {
                message = this._readMessage;
                this._readMessage = "";
            }
            return message;
        };
        /**
         * 从指定的字节数组写入一系列字节。写入操作从 offset 指定的位置开始。
         * 如果省略了 length 参数，则默认长度 0 将导致该方法从 offset 开始写入整个缓冲区。
         * 如果还省略了 offset 参数，则写入整个缓冲区。
         * @param bytes 要从中读取数据的 ByteArray 对象
         * @param offset ByteArray 对象中从零开始的偏移量，应由此开始执行数据写入
         * @param length 要写入的字节数。默认值 0 导致从 offset 参数指定的值开始写入整个缓冲区
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.prototype.writeBytes = function (bytes, offset, length) {
            if (offset === void 0) { offset = 0; }
            if (length === void 0) { length = 0; }
            if (!this._connected) {
                egret.$warn(3101);
                return;
            }
            if (!this._writeByte) {
                egret.$warn(3102);
                return;
            }
            this._bytesWrite = true;
            this._writeByte.writeBytes(bytes, offset, length);
            this.flush();
        };
        /**
         * 从套接字读取 length 参数指定的数据字节数。从 offset 所表示的位置开始，将这些字节读入指定的字节数组
         * @param bytes 要将数据读入的 ByteArray 对象
         * @param offset 数据读取的偏移量应从该字节数组中开始
         * @param length 要读取的字节数。默认值 0 导致读取所有可用的数据
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.prototype.readBytes = function (bytes, offset, length) {
            if (offset === void 0) { offset = 0; }
            if (length === void 0) { length = 0; }
            if (!this._readByte) {
                egret.$warn(3102);
                return;
            }
            this._readByte.position = 0;
            this._readByte.readBytes(bytes, offset, length);
            this._readByte.clear();
        };
        Object.defineProperty(WebSocket.prototype, "connected", {
            /**
             * 表示此 Socket 对象目前是否已连接
             * @version Egret 2.4
             * @platform Web,Native
             * @language zh_CN
             */
            get: function () {
                return this._connected;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WebSocket.prototype, "type", {
            /**
             * 发送和接收数据的格式，默认是字符串格式
             * @version Egret 2.4
             * @platform Web,Native
             * @language zh_CN
             */
            get: function () {
                return this._type;
            },
            set: function (value) {
                this._type = value;
                if (value == WebSocket.TYPE_BINARY && !this._writeByte) {
                    this._readByte = new egret.ByteArray();
                    this._writeByte = new egret.ByteArray();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 以字符串格式发送和接收数据
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.TYPE_STRING = "webSocketTypeString";
        /**
         * 以二进制格式发送和接收数据
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        WebSocket.TYPE_BINARY = "webSocketTypeBinary";
        return WebSocket;
    }(egret.EventDispatcher));
    egret.WebSocket = WebSocket;
    __reflect(WebSocket.prototype, "egret.WebSocket");
})(egret || (egret = {}));
(function (egret) {
    var web;
    (function (web) {
        /**
         * @private
         */
        var HTML5WebSocket = (function () {
            function HTML5WebSocket() {
                this.host = "";
                this.port = 0;
                if (!window["WebSocket"]) {
                    egret.$error(3100);
                }
            }
            HTML5WebSocket.prototype.addCallBacks = function (onConnect, onClose, onSocketData, onError, thisObject) {
                this.onConnect = onConnect;
                this.onClose = onClose;
                this.onSocketData = onSocketData;
                this.onError = onError;
                this.thisObject = thisObject;
            };
            HTML5WebSocket.prototype.connect = function (host, port) {
                this.host = host;
                this.port = port;
                var socketServerUrl = "ws://" + this.host + ":" + this.port;
                this.socket = new window["WebSocket"](socketServerUrl);
                this.socket.binaryType = "arraybuffer";
                this._bindEvent();
            };
            HTML5WebSocket.prototype.connectByUrl = function (url) {
                this.socket = new window["WebSocket"](url);
                this.socket.binaryType = "arraybuffer";
                this._bindEvent();
            };
            HTML5WebSocket.prototype._bindEvent = function () {
                var that = this;
                var socket = this.socket;
                socket.onopen = function () {
                    if (that.onConnect) {
                        that.onConnect.call(that.thisObject);
                    }
                };
                socket.onclose = function (e) {
                    if (that.onClose) {
                        that.onClose.call(that.thisObject);
                    }
                };
                socket.onerror = function (e) {
                    if (that.onError) {
                        that.onError.call(that.thisObject);
                    }
                };
                socket.onmessage = function (e) {
                    if (that.onSocketData) {
                        that.onSocketData.call(that.thisObject, e.data);
                    }
                };
            };
            HTML5WebSocket.prototype.send = function (message) {
                this.socket.send(message);
            };
            HTML5WebSocket.prototype.close = function () {
                this.socket.close();
            };
            HTML5WebSocket.prototype.disconnect = function () {
                if (this.socket.disconnect) {
                    this.socket.disconnect();
                }
            };
            return HTML5WebSocket;
        }());
        web.HTML5WebSocket = HTML5WebSocket;
        __reflect(HTML5WebSocket.prototype, "egret.web.HTML5WebSocket", ["egret.ISocket"]);
        egret.ISocket = HTML5WebSocket;
        /*if (egret.Capabilities.runtimeType == egret.RuntimeType.WEB) {
        }*/
    })(web = egret.web || (egret.web = {}));
})(egret || (egret = {}));