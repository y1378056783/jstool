define("widget/banner", [],function(require, exports, module) {
    /*
    全屏轮播
    html:
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
--------------------------------------------------------------
css:
#index_b_hero,
#index_b_hero img,
#index_b_hero .heros,
#index_b_hero .hero,
#index_b_hero .next,
#index_b_hero .prev {
    width: 1200px;
    height: 420px;
}
#main,
#index_b_hero .hero,
#index_b_hero .mask-right,
#index_b_hero .mask-left{
    overflow: hidden;
}
#index_b_hero .hero-wrap,
#index_b_hero .hero,
#index_b_hero .mask-right,
#index_b_hero .mask-left,
#index_b_hero .next,
#index_b_hero .prev{
    position: absolute;
}
#index_b_hero .mask-right,
#index_b_hero .mask-left{
    display: none;
}
.hero-index span{
    display: inline-block;
}
#main,
#index_b_hero{
    position: relative;
}
#index_b_hero{
margin: 0 auto;
}
#main {
    min-width: 1200px;
    background: #EFF4F5;
}

#index_b_hero .hero-wrap {
    overflow: visible;
}

#index_b_hero .next,
#index_b_hero .prev,
#index_b_hero .mask-right,
#index_b_hero .mask-left {
    z-index: 1000;
}

#index_b_hero .hero,
#index_b_hero .next,
#index_b_hero .prev {
    top: 0;
}

#index_b_hero .next,
#index_b_hero .prev {
    background: rgba(0, 0, 0, 0.7);
}

#index_b_hero .next:hover,
#index_b_hero .prev:hover {
    background: rgba(0, 0, 0, 0.5);
}

#index_b_hero .prev {
    left: -1200px;
}

#index_b_hero .next {
    left: 1200px;
}

#index_b_hero .disabled {
    background-color: #eee;
}

#index_b_hero .hero {
    background: #000;
    left: 2400px;
}

#index_b_hero .mask-right {
    left: -100px;
}

#index_b_hero .mask-left {
    right: -100px;
}

#index_b_hero .active {
    z-index: 2;
    left: 0;
}

#index_b_hero .mask-right,
#index_b_hero .mask-left {
    top: 50%;
    height: 78px;
    width: 78px;
    margin-top: -39px;
    background: url("../img/FocusBtn.png") no-repeat;
}

#index_b_hero .mask-right {
    background-position: -78px 0;
}

#index_b_hero .mask-left {
    background-position: 0 0;
}

#index_b_hero .mask-right:hover {
    background-position: -78px -78px;
}

#index_b_hero .mask-left:hover {
    background-position: 0px -78px;
}
.hero-index{left:0;bottom:0;z-index:10;}
.hero-index span{
    width: 10px;
    height:10px;
    border-radius:5px;
    text-indent:-1000em;
    margin:0 5px;
    transition:width .3s cubic-bezier(0.175,0.885,0.32,1.275);
}
.hero-index span.active{
    width:35px;
}
-------------------------------------------------
js:
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
        if(config._imgLen>1){
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
        }else{
            $imgs.eq(0).css('left', 0);
        }
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