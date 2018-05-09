/*3d轮播banner效果
css:
.main_banner{width:100%; height:375px;margin-bottom:10px;}
.main_banner_wrap{width:1180px; height:375px; background:#112233; 
		margin:0 auto; overflow:hidden;position: relative;  box-shadow: 0px 1px 2px #c5c5c5;
}
.banner_btn{ 	
		width:255px; height:240px; position:absolute; 
		display:block; z-index:9; top:20px;
}
.btn_next{right:20px;}
.banner_btn span{width:50px; height:100px; display:block; position:absolute;
		left:110px; top:70px; opacity:0; transition:0.5s;
		background:url(../images/bannerBtn.png) no-repeat 0 0;}
.btn_next span{background-position:-50px 0;}
.main_banner_box:hover .banner_btn_arrow{opacity:0.6;}
.banner_btn span i{width:50px; height:100px; display:block;
		background:url(../images/bannerBtn.png) no-repeat 0 0;}
.btn_next span i{background-position:-50px 0;}
.banner_btn:hover i{
		-webkit-animation:arrow 0.5s infinite alternate ease-in-out;
		-moz-animation:arrow 0.5s infinite alternate ease-in-out;
}
@-webkit-keyframes arrow{
	from{-webkit-transform:scale(1); opacity:1;}
	to{-webkit-transform:scale(1.5); opacity:0.2;}
}
@-moz-keyframes arrow{
	from{-moz-transform:scale(1); opacity:1;}
	to{-moz-transform:scale(1.5); opacity:0.2;}
}

.main_banner_box{
	width:1200px; height:280px; margin:40px auto 0; position:relative; z-index:0;
	-webkit-box-reflect:below 0 -webkit-linear-gradient(top,rgba(255,255,255,0) 0%,rgba(255,255,255,.2) 100%);
}

.main_banner_box p#rflt{width:1200px; height:280px; position:absolute; left:0; top:280px;
		background:-moz-element(#m_box) no-repeat; -moz-transform:scaleY(-1); opacity:0.2;
}
.main_banner li{
		position:absolute; background:#000; overflow:hidden;
		box-shadow:0 4px 8px rgba(0, 0, 0, 0.15);		
}

.main_banner li#imgCard0{
		width:670px; height:280px; z-index:5;
		left:255px; top:0px; opacity:1; background:#333d46;
}
.main_banner li#imgCard1{
		width:580px; height:240px; z-index:1; 
		left:600px; top:20px; opacity:1; background:#333d46;
}
.main_banner li#imgCard2{
		width:450px; height:180px; z-index:1;
		left:0px; top:60px; opacity:0; background:#333d46;
}
.main_banner li#imgCard3{
		width:450px; height:180px; z-index:1;
		left:0px; top:60px; opacity:0; background:#333d46;
}
.main_banner li#imgCard4{
		width:580px; height:240px; z-index:2; 
		left:0px; top:20px; opacity:1; background:#333d46;
}
.main_banner li img{width:100%; height:100%;}
.main_banner li span{
	width:100%; height:100%; position:absolute; top:0; left:0; 
	z-index:1; background:#000; opacity:0; filter:alpha(opacity=0);
	color:#fff; font-size:30px; line-height:120px; text-align:center;
}
.main_banner li p{width:100%; height:50px; position:absolute;
	left:0; bottom:-50px; background:rgba(0,0,0,0.7); color:#fff;
	text-indent:38px; line-height:50px; font-size:25px;
}


.btn_list{text-align:center; position:relative; left:0; top:6px; z-index:10;}
.btn_list span{
		width:15px; height:15px; display:inline-block; margin:15px 5px;
		background:#787d82; border-radius:50%; cursor:pointer;
}
.btn_list span.curr{background:#FFAE00;}
---------------------------------------------------
html:
<div class="main_banner">
    <div class="main_banner_bg"></div>
    <div class="main_banner_wrap">
        <!-- <canvas id="myCanvas" width="150" height="150"></canvas> -->
        <div class="main_banner_box" id="m_box">
            <a href="javascript:void(0)" class="banner_btn js_pre">
                <span class="banner_btn_arrow"><i></i></span>
            </a>
            <a href="javascript:void(0)" class="banner_btn btn_next js_next">
                <span class="banner_btn_arrow"><i></i></span>
            </a>
            <ul>
                <li id="imgCard0">
                    <a href=""><span></span></a>      
                    <img src="images/1.jpg" alt="">
                    <p>NO.1</p>
                </li> 
                <li id="imgCard1">
                    <a href=""><span></span></a>      
                    <img src="images/2.jpg" alt="">
                    <p>NO.2</p>
                </li> 
                <li id="imgCard2">
                    <a href=""><span></span></a>        
                    <img src="images/3.jpg" alt="">
                    <p>NO.3</p>
                </li> 
                <li id="imgCard3">
                    <a href=""><span></span></a>      
                    <img src="images/4.jpg" alt="">
                    <p>NO.4</p>
                </li> 
                <li id="imgCard4">
                    <a href=""><span></span></a>      
                    <img src="images/5.jpg" alt="">
                    <p>NO.5</p>
                </li> 
            </ul>
            <!--火狐倒影图层-->
            <p id="rflt"></p>
            <!--火狐倒影图层-->
        </div>
        <!--序列号按钮-->
        <div class="btn_list">
            <span class="curr"></span><span class=""></span><span class=""></span><span class=""></span><span class=""></span>        
        </div>
    </div>
</div>
*/
$(function(){
	var len=$(".main_banner li").length;
	var index_2=0;
	var timer=800;
	var intervaltimer=0;
	var isMoving=false;
	
	function slide(slideMode){//轮播方法		
		if (isMoving==false){
			isMoving=true;
			var prev; var next; var hidden;
			var curr=$("#imgCard"+index_2);//当前正中显示
			
			if(index_2==0){								//当前正中显示的是第0张时 prev为最后一张
				prev=$("#imgCard"+(len-1));					
			}else{												//否则  序列号-1
				prev=$("#imgCard"+(index_2-1)); 		
			}
			if(index_2==(len-1)){					//当前正中显示的是最后一张时 next为第0张
				next=$("#imgCard0");
			}else{											//否则  序列号+1
				next=$("#imgCard"+(index_2+1));
			}
	
			if(slideMode){			//slideMode为1(true)，执行slide(1)，上一张
				if(index_2-2>=0){									//index_2						2		3		4
					hidden=$("#imgCard"+(index_2-2));//									0		1		2
				}else{													//index_2		0		1
					hidden=$("#imgCard"+(len+index_2-2));//			3		4
				}
				prev.css("z-index","5");			//点击prev按钮  让prev位置上的这张图片 层级最高 显示
				next.css("z-index","1");
				curr.css("z-index","2");			
				hidden.css("z-index","1");
				//当index_2自减，各图片往右运动效果
				hidden.css({width:"450px",height:"180px",top:"60px","left":"0px","opacity":0});
				hidden.stop(true,true).animate({width:"580px",height:"240px",top:"20px",left:"0px",opacity:1},timer);
				curr.stop(true,true).animate({width:"580px",height:"240px",top:"20px",left:"600px",opacity:1},timer);
				next.stop(true,true).animate({width:"450px",height:"180px",top:"60px","left":"730px","opacity":0},timer,function(){next.find("span").css("opacity",0); isMoving = false;});
				//prev  -->  curr     prev中的图片li轮换到curr的位置      其他一次轮换
				prev.find("span").css("opacity",0);
				$(".main_banner_box li").find("p").css({"bottom":"-50px"});//所有标题隐藏
				prev.stop(true,true).animate({width:"670px",height:"280px",left:"255px",top:0,opacity:1},timer,function(){
					$(this).find("p").animate({"bottom":"0px"});	//当前这张图片的标题运动出来
				});
				index_2--;
			}else{			//执行next 操作
				if(index_2+2>=len){								//index_2								3		4	
					hidden=$("#imgCard"+(index_2+2-len));//										0		1
				}else{													//index_2		0		1		2
					hidden=$("#imgCard"+(index_2+2));//						2		3		4
				}
				prev.css("z-index","1");
				next.css("z-index","5");			//点击next按钮  让next位置上的这张图片 层级最高 显示
				curr.css("z-index","2");
				hidden.css("z-index","1");
				//当index_2自增，各图片往左运动效果
				hidden.css({width:"450px",height:"180px",top:"60px","left":"730px","opacity":0});
				hidden.stop(true,true).animate({width:"580px",height:"240px",top:"20px",left:"600px",opacity:1},timer);							
				curr.stop(true,true).animate({width:"580px",height:"240px",top:"20px",left:"0px",opacity:1},timer);
				//next  -->  curr     next中的图片li轮换到curr的位置      其他一次轮换
				next.find("span").css("opacity",0);
				$(".main_banner_box li").find("p").css({"bottom":"-50px"});//所有标题隐藏
				next.stop(true,true).animate({width:"670px",height:"280px",left:"255px",top:0,opacity:1},timer,function(){
					$(this).find("p").animate({"bottom":"0px"});	//当前这张图片的标题运动出来
				});
				prev.stop(true,true).animate({width:"450px",height:"180px",left:"0px",top:"60px",opacity:0},timer,function(){
					isMoving = false;
				}); 
				index_2++;	
			}//if else
	
			hidden.find("span").css("opacity",0.5);
			curr.find("span").css("opacity",0.5);
	
			if(index_2==len) index_2=0;
			if(index_2<0) index_2=len+index_2;			//限制index_2的范围
			$(".btn_list span").removeClass('curr').eq(index_2).addClass('curr');//给序列号按钮添加、移除样式
		}
	}//slide()


	if(len>3){
		//序列号按钮 跳序切换 方法
		$(".btn_list span").click(function(event){
			
			if (isMoving ) return;
			var oIndex=$(this).index();
	
			if(oIndex==index_2) return;//点击按钮的序列号与当前图片的序列号一致，return
			clearInterval(intervaltimer)
			intervaltimer=null;
	
			var flag=false;
			//当前显示图片的序列号  和  被点击按钮的序列号  间隔超过1且不是首尾两个的时候
			if(Math.abs(index_2-oIndex)>1&&Math.abs(len-Math.abs(index_2-oIndex))!=1){
				//统一样式
				$(".main_banner_box li").css({width:"300px",height:"120px",left:"600px",top:"60px",opacity:0});
				//如果当前的序列号   比    被点击按钮序列号     大     而且     不相邻、不是首尾  
				if(index_2>oIndex&&len-Math.abs(index_2-oIndex)!=1){
					flag=true;
					index_2=oIndex+1;		//oIndex+1    通过slide()  运动回上一张    oIndex
				}else{//比   小     而且     不相邻、不是首尾
					index_2=oIndex-1;		//oIndex-1     通过slide()  运动到下一张    oIndex
					if(index_2<0) index_2=len-1;
				}
			}else{//当前 比 被点击  大	且   相邻									//从0    跳到     4		要执行上一张方法
				if((index_2>oIndex&&len-(index_2-oIndex)!=1)||(index_2<oIndex&&len+(index_2-oIndex)==1)){
					flag=true;			//执行上一张
				}
			}
			slide(flag);
			intervaltimer=setInterval(slide,3000);//自动轮播
			
		});
	
		$(".main_banner_box li").on("mousemove",function(){
			if($(this).css("width")=="670px"){//鼠标移入为当前正中显示的图片li，则清除定时器
				clearInterval(intervaltimer);
				intervaltimer=null;
			}
		}).on("mouseout",function(){//鼠标移除重新滚动
				clearInterval(intervaltimer);
				intervaltimer=null;
				intervaltimer=setInterval(slide,3000);
		});
		
		$(".js_pre").click(function(event){//上一张
			if (isMoving ) return;
			clearInterval(intervaltimer);
			intervaltimer=null;
			slide(1);
			intervaltimer=setInterval(slide,3000);
		});
	
		$(".js_next").click(function(event){//下一张
			if (isMoving ) return;
			clearInterval(intervaltimer);
			intervaltimer=null;
			slide();
			intervaltimer=setInterval(slide,3000);        
		});
		
		intervaltimer=setInterval(slide,3000);
		
	}else{
		
		$(".js_pre").hide();
		$(".js_next").hide();
		
	}//if else
})