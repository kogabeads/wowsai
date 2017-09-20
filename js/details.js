require(["config"],function(){
	require(["jquery","load","cookie"],function($){
		var info1 = false;

		//	选择商品类型
		$(".info_size a").eq(0).click(function(){
			if(info1 == false){
				$(this).css({"border":"1px solid rgb(119, 181, 0)","background":"url(/img/duigou_new.gif) no-repeat right bottom"});
				info1 = true;
			}else{
				$(this).css({"border":"1px solid #c8c9ce","background":""});
				info1 = false;
			}
		});

		$(".info_size a").not($(".info_size a").eq(0)).click(function(){
			$(".info_size a").not($(".info_size a").eq(0)).css({"border":"1px solid #c8c9ce","background":""});
			$(this).css({"border":"1px solid rgb(119, 181, 0)","background":"url(/img/duigou_new.gif) no-repeat right bottom"});
		});

		//	选择商品数量
		$(".amount").eq(0).blur(function(){

			//	校验输入格式是否正确
			var _amount = $(".amount").eq(0).val(),
				reg = /^[1-9][0-9]*$/,
				isNum = reg.test(_amount),
				_all = parseInt($(".inventory").eq(0).html());
			if(isNum == true){
				if(_amount > _all){
					alert("商品存货不足");
					$(".amount").eq(0).val(1);
				}else if(_amount < 1){
					alert("请输入正确的数字");
					$(".amount").eq(0).val(1);
				}
			}else{
				alert("请输入正确的数字");
				$(".amount").eq(0).val(1);
			}
		});

		$(".minus").eq(0).click(function(){
			//	减商品
			var _amount = $(".amount").eq(0).val();
			if(_amount > 1){
				_amount--;
				$(".amount").eq(0).val(_amount);
			}
		});

		$(".add").eq(0).click(function(){
			//	加商品
			var _amount = $(".amount").eq(0).val(),
				_all = parseInt($(".inventory").eq(0).html());
			if(_amount < _all){
				_amount++;
				$(".amount").eq(0).val(_amount);
			}
		});

		//	最爱排行 热门排行分页切换
		$(".hotlove a").eq(0).click(function(){
			$(".hotlove a").attr("class","");
			$(this).attr("class","rank");
			$(".goodshotlove ul").eq(1).css("display","block");
			$(".goodshotlove ul").eq(0).css("display","none");
		});

		$(".hotlove a").eq(1).click(function(){
			$(".hotlove a").attr("class","");
			$(this).attr("class","rank");
			$(".goodshotlove ul").eq(1).css("display","none");
			$(".goodshotlove ul").eq(0).css("display","block");
		});

		//	商品详情分页切换
		$(".right_nav li").eq(0).click(function(){
			$(".right_nav li").attr("class","");
			$(".right_nav li").eq(0).attr("class","select");
			$(".details_page").css("display","none");
			$(".product_details").eq(0).css("display","block");
		})

		$(".right_nav li").eq(1).click(function(){
			$(".right_nav li").attr("class","");
			$(".right_nav li").eq(1).attr("class","select");
			$(".details_page").css("display","none");
			$(".appraise").eq(0).css("display","block");
		})

		$(".right_nav li").eq(2).click(function(){
			$(".right_nav li").attr("class","");
			$(".right_nav li").eq(2).attr("class","select");
			$(".details_page").css("display","none");
			$(".buy_conslut").eq(0).css("display","block");
		})

		$(".right_nav li").eq(3).click(function(){
			$(".right_nav li").attr("class","");
			$(".right_nav li").eq(3).attr("class","select");
			$(".details_page").css("display","none");
			$(".goods_comment").eq(0).css("display","block");
		})
	});
});