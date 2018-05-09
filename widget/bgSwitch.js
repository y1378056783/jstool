(function($){
	/*
	全屏背景图片切换
	css:
	#slideshow {
	  position:relative;
	  z-index:-1;
	}
	#slideshow img.active {
	    z-index:10;
	    opacity:1;
	}
	#slideshow img.last-active {
	    z-index:9;
	}
	#slideshow img {
	  min-height: 100%;
	  min-width: 1024px;
	  width: 100%;
	  height: auto;
	  position: fixed;
	  top: 0;
	  left: 0;
	}
	------------------------------------
	html:
	<div id="slideshow">
	    
    </div>
	------------------------------------
	调用示例：$("#slideshow").bgSwitch();
	 */
	$.fn.bgSwitch=function(options){
	    var defaults = {
	        time : 3000,  //显示时间
	        imgurl:[
		    	"//www.jq22.com/demo/jquery-bg20160120/images/image1.jpg",
		    	"//www.jq22.com/demo/jquery-bg20160120/images/image2.jpg",
		    	"//www.jq22.com/demo/jquery-bg20160120/images/image3.jpg"
	    	],
	        isRan:true,
	        tpl:''
	    },
	    $self=$(this),
	    $next = null,
	    slideImg=$self.find('img');
	    options = $.extend(defaults,options);
		options.imgurl.forEach(function(v,k){
			var cls= (k==0) ? 'active':'';
			options.tpl+="<img src='"+v+"' class='"+cls+"'/>"
		})
		$self.html(options.tpl);
    	var tab = function () {
		    var $active = $self.find('img.active');
		    if ( $active.length == 0 ) $active = $self.find('img:last');
		    if(options.isRan){//图片顺序
		    	$next =  $active.next().length ? $active.next() : $self.find('img:first');
		    }else{/* 图片随机*/
			    var $sibs  = $active.siblings(),
			      rndNum = Math.floor(Math.random() * $sibs.length );
			      $next  = $( $sibs[ rndNum ] );
		    }
			$active.addClass('last-active')
			$next.css({opacity: 0.0})
		  		 .addClass('active')
		  		 .animate({opacity: 1.0}, 1000, function() {
		          $active.removeClass('active last-active');
		      });
		};
		if(slideImg){
		    setInterval(function(){
		    	tab();
		    }, options.time );
		    $('body').css('overflow','hidden');
		};
    }
    
})(jQuery||{})