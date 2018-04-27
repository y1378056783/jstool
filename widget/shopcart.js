define(function (require, exports, module) {
	/*购物车功能
	html结构：
	<ul class="shop-list f-oh">
		<li class="f-fx f-pr f-bg-w">
			<p class="f-pr">
				<input type="checkbox" name="select" id="select1" class="f-bg-trp select-radio shop-radio f-pa f-w100">
				<label class="iconfont icon-select f-ico20"></label>
			</p>
			<p class="f-pr"><img src="../src/img/place.jpg" alt=""></p>
			<div class="f-fx1">
				<h3 class="f-ft16">标题标题1</h3>
				<h4 class="f-cg-gray f-mb02">描述描述1</h4>
				<p class="shop-price f-cg-gray f-fl f-cg-orange">¥<i id="price">100</i></p>
				<div class="shop-plus f-fr">
				    <span class='reduce'>-</span>
				    <input type='number' readonly class='shop-product f-tc' value="1" data-def='100' data-max='5'/>
				    <span class='plus'>+</span>
				</div>
			</div>
			<p class="shop-del f-pa f-tc f-cg-white" data-pid="1">删除</p>
		</li>
		<li class="f-fx f-pr f-bg-w">
			<p class="f-pr">
				<input type="checkbox" name="select" id="select1" class="f-bg-trp select-radio shop-radio f-pa f-w100">
				<label class="iconfont icon-select f-ico20"></label>
			</p>
			<p class="f-pr"><img src="../src/img/place.jpg" alt=""></p>
			<div class="f-fx1">
				<h3 class="f-ft16">标题标题2</h3>
				<h4 class="f-cg-gray f-mb02">描述描述2</h4>
				<p class="shop-price f-cg-gray f-fl f-cg-orange">¥<i id="price">100</i></p>
				<div class="shop-plus f-fr">
				    <span class='reduce'>-</span>
				    <input type='number' readonly class='shop-product f-tc' value="1" data-def='100' data-max='5'/>
				    <span class='plus'>+</span>
				</div>
			</div>
			<p class="shop-del f-pa f-tc f-cg-white" data-pid="1">删除</p>
		</li>
	</ul>
	<div class="f-pf f-fx shop-bar f-bg-w f-oh">
		<p class="f-pr">
			<input type="checkbox" name="selectAll" id="selectAll" class="f-bg-trp shop-radio f-pa f-w100">
			<label class="iconfont icon-select f-ico20"></label>
		</p>&nbsp;全选
		<p class="f-cg-orange f-fx1 f-tr">合计：¥<i id="totalAll">0.00</i></p>
		<p class="f-fx1 shopBtn"><a href="javascript:;" class="f-cg-white f-db f-tc f-ft18" id="shopBtn">下单</a></p>
	</div>
	 */
return function(tou){
        var noX = 0,  /* 没选中时点击加减计算数量  */
       		allThis = $("#selectAll"), /*底部全选*/
       		totAll=$("#totalAll"),//底部总价
       		shopBtn=$("#shopBtn"),//下单按钮
       		shopRadio = $('.select-radio'),
       		totalH;
  		function reduceMod(e,totalH,mod,noX){// 减  
  			var $obj=null,
  				tn =null,//当前选中商品  
  				tn1 =null,//商品数量  
  				Total=null;
  			if(mod != 2){//checkbox选择计算
  				$obj=e.parents('li').find('.shop-product');
  				tn=+$obj.data('def');//当前选中商品  
  				tn1=+$obj.val();
  				Total = parseFloat(totalH) - (tn*tn1);	// 总价格减该商品总数价格  
  			}else{
  				$obj=e.siblings('input');
  				tn=+$obj.data('def');//当前选中商品  
  				tn1=+$obj.val();//商品数量  
  				Total = parseFloat(totalH) - parseFloat(tn);	// 总价格减该商品总数价格  
  			}
  	  		totAll.text(Total.toFixed(2));
  		};
  		function plusMod(e,totalH,mod){// 加  
  			var $obj= null,
  				tn = null,//当前选中商品  
  				tn1 = null,//商品数量  
  				Total=null;
  			if(mod != 2){
  				$obj=e.parents('li').find('.shop-product');
  				tn=+$obj.data('def');//当前选中商品  
  				tn1=+$obj.val();
				Total = parseFloat(totalH)+(tn*tn1);
			}else{
				$obj=e.siblings('input');
  				tn=+$obj.data('def');//当前选中商品  
  				tn1=+$obj.val();//商品数量  
				Total = parseFloat(totalH)+(parseFloat(tn)+(noX-1));
			}
  	  		totAll.text(Total.toFixed(2));
  		};
  		
  		function totalMod() {//全部商品价格
  			/* 合计金额  */
			var je = $(".shop-product"); 
			var TotalJe = 0;
			for(var i=0; i<je.length; i++)
			{
				var n=+je.eq(i).data('def');/* 全部商品单价  */
				var n1=+je.eq(i).val();/*全部商品数量  */
				TotalJe += (parseFloat(n)*parseFloat(n1));
				
			}
			return TotalJe.toFixed(2); /* 合计金额  */
  		};
  		allThis.on('change',function(){//全选商品
			var $this=$(this),
				result = null,
				isCheck=$this.is(':checked'),
				$radio=$('.shop-list li').find('.select-radio');
				$radio.prop('checked',isCheck);
			if(isCheck){//全选选中
  				result=totalMod();/*总价格*/
  			}else{
  				result='0.00';
  			}
  			totAll.text(result);
		})
  		$('.select-radio').on('click',function(){//单选商品
  			var $this=$(this),
  				isCheck=$this.is(':checked'),
  				totalH=+totAll.text();
  			$this.prop('checked',isCheck);
  			/*alert($this); */
			if(isCheck){
				plusMod($this,totalH,0);
			}else{
				allThis.prop('checked',false);
				reduceMod($this,totalH);
			}
  		})
  		
  		/* 加减  */
		$('.reduce').on('touchstart',function(){//减
			var $this = $(this),
				totalH=+totAll.text(), /* 合计金额  */
				$input=$this.siblings("input"),
				isCheck=$this.parents('li').find('.select-radio').is(':checked'),
				ise = $input.val();/*数量*/
			if(noX <= 0){
				noX = 0;
			}else{
				noX--;
			};
			if(parseInt(ise) <= 1){
				$input.val(1);
			}else{
				var n =parseInt(ise)-1;
				$input.val(n);
				if(isCheck){
					reduceMod($this,totalH,2,noX);
					noX=0;
				}
			}
		});
		
		$('.plus').on('touchstart',function(){//加
			var $this = $(this),
				totalH=+totAll.text(), /* 合计金额  */
				$input=$this.siblings("input"),
				isCheck=$this.parents('li').find('.select-radio').is(':checked'),
				ise = $input.val(),/* 数量 */
				max=$input.data('max'),
				n =parseInt(ise)+1;
				noX++;
			if(n>=max) n=max;//限制最大值
			$input.val(n);
			if(isCheck){
				plusMod($this,totalH,2,noX);
				noX=0;
			}
		})

		shopBtn.on('touchstart',function(){
			if(!shopRadio.is(':checked')){
				//$(shopRadio[0]).prop('checked',true);
				alert('至少选中一项商品');
			}else{
				alert('跳转')
				//window.location.href="#/shopping/order";

			}/**/
		})
		/* 删除购物车 */
		$('.shop-del').on('touchstart',function(){
			var $self=$(this),
				shopId=$self.data('pid');
			store.remove('shop'+shopId);
			$self.parents('li').remove();
			shopRadio.prop('checked',false);
			allThis.prop('checked',false);
			totAll.text('0.00');
		})
		tou.on('.shop-list li','swipeleft',function(){
			var $self=$(this);
			if($self[0].tagName=='LI'){
				$shopLi.addClass('off-left')
			}else{
				$self.parents('li').addClass('off-left')
			}
			//console.log($(this));
		})
		tou.on('.shop-list li','swiperight',function(){
			var $self=$(this);
			if($self[0].tagName=='LI'){
				$shopLi.removeClass('off-left')
			}else{
				$self.parents('li').removeClass('off-left')
			}
			
		})
	}
})