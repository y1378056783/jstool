/*
图片懒加载模块//图片必须要设置宽高，否则无效
调用：Echo.init({
    offset: 0,图片距离窗口可视区距离
    throttle: 3000（图片延迟3秒加载）
});
<img class="lazy icon-img" src="static/img/grey.gif预加载地址" data-echo="图片真实地址" alt="图片不在家">
require('widget/lazyload')()//懒加载
*/
define("widget/lazyload", [],function(require, exports, module) {
	var Lazyload = function() {'use strict';var store = [],offset, throttle, poll;var _inView = function(el) { var coords = el.getBoundingClientRect(); return ((coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight) + parseInt(offset)); };var _pollImages = function() { for (var i = store.length; i--;) { var self = store[i]; if (_inView(self)) { self.src = self.getAttribute('data-echo');store.splice(i, 1); } } };var _throttle = function() { clearTimeout(poll);poll = setTimeout(_pollImages, throttle); };var init = function(obj) { var nodes = document.querySelectorAll('[data-echo]'); var opts = obj || {};offset = opts.offset || 0;throttle = opts.throttle || 250; for (var i = 0; i < nodes.length; i++) { store.push(nodes[i]); } _throttle();if (document.addEventListener) { window.addEventListener('scroll', _throttle, false); } else { window.attachEvent('onscroll', _throttle); } };return { init: init, render: _throttle };};
	return function(){
		var lazy = new Lazyload();
		//console.log(typeof lazy);
		lazy.init({
		    offset: 0,
		    throttle: 0
		})
	}
})