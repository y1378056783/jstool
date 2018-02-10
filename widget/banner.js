define("widget/banner", [],function(require, exports, module) {
    /*
    全屏轮播
<div id="main" class="cf">
    <div id="index_b_hero">
        <div class="hero-wrap">
            <ul class="heros clearfix">
                <li class="hero">
                    <a href="#" target="_blank"><img src="static/img/b1.jpg"></a>
                </li>
                <li class="hero">
                    <a href="#" target="_blank"><img src="static/img/b1.jpg"></a>
                </li>
                <li class="hero">
                    <a href="#" target="_blank"><img src="static/img/b1.jpg"></a>
                </li>
            </ul>
        </div>
        <div class="hero-index text-center w100">
            <span class="active">1</span><span>2</span><span>3</span>
        </div>
        <div class="helper">
            <a href="javascript:;" class="prev"><div class="mask-left"></div></a>
            <a href="javascript:;" class="next"><div class="mask-right"></div></a>
        </div>
    </div>
</div>
require('widget/banner')($);//banner轮播
    */
  return function ($){
$.extend({
    'foucs': function (con) {
        var $container = $('#index_b_hero');
        var $imgs = $container.find('li.hero');
        var $leftBtn = $container.find('a.prev');
        var $rightBtn = $container.find('a.next');
        var config = {
            interval: con && con.interval || 4000,
            animateTime: con && con.animateTime || 600,
            direction: con && (con.direction === 'right'),
            _imgLen: $imgs.length
        };
        var i = 0;
        var getNextIndex = function (y) { return i + y >= config._imgLen ? i + y - config._imgLen : i + y; };
        var getPrevIndex = function (y) { return i - y < 0 ? config._imgLen + i - y : i - y; };
        var silde = function (d) {
            $imgs.eq((d ? getPrevIndex(2) : getNextIndex(2))).css('left', (d ? '-2400px' : '2400px'))
            $imgs.animate({
                'left': (d ? '+' : '-') + '=1200px'
            }, config.animateTime);
            i = d ? getPrevIndex(1) : getNextIndex(1);
            $(".hero-index span").eq(i).addClass('active').siblings().removeClass('active');
        };
        var s = setInterval(function () {
			silde(config.direction);
		}, config.interval);
        $imgs.eq(i).css('left', 0).end().eq(i + 1).css('left', '1200px').end().eq(i - 1).css('left', '-1200px');
        $container.find('.hero-wrap').add($leftBtn).add($rightBtn).hover(function () {
			clearInterval(s);
		}, function () {
			s = setInterval(function () {
				silde(config.direction);
			}, config.interval);
		});
        $leftBtn.click(function () {
            if ($(':animated').length === 0) {
                silde(true);
            }
        });
        $rightBtn.click(function () {
            if ($(':animated').length === 0) {
                silde(false);
            }
        });
    }
});
    //轮播图调用
    var len = $(".heros li").length;
        $(".heros li").each(function(index, element) {
            len--;
            $(this).css("z-index", len);
        });
        /**/$(".hero").mousemove(function(){
            $(".mask-left, .mask-right").show();
        });
        $("#main").mouseleave(function(){
            $(".mask-left, .mask-right").hide();
        });

        $.foucs({ direction: 'left' });
};
  //module.exports = bx;
})