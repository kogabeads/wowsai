require(["config"],function(){
	require(["jquery","template","load","cookie"],function($,template){

		// ==============商品列表模板==============
		var html = template("list");
		$(".product_list").html(html);

		//	点击按钮显示隐藏页面
		var isPriceOn = false,
			isTallyOn = false,
			isTextureOn = false;

		//	价格按钮
		$("#screen li").eq(0).click(function(){
			if(isPriceOn === false){
				$(".hideP").eq(0).css("display","block");
				isPriceOn = true;
			}else{
				$(".hideP").eq(0).css("display","none");
				isPriceOn = false;
			}
		});

		//	标签按钮
		$("#screen li").eq(1).click(function(){
			if(isTallyOn === false){
				$(".hideP").eq(1).css("display","block");
				isTallyOn = true;
			}else{
				$(".hideP").eq(1).css("display","none");
				isTallyOn = false;
			}
		});

		//	材质按钮
		$("#screen li").eq(2).click(function(){
			if(isTextureOn === false){
				$(".hideP").eq(2).css("display","block");
				isTextureOn = true;
			}else{
				$(".hideP").eq(2).css("display","none");
				isTextureOn = false;
			}
		});

		//	最新最热切换效果
		$(".conditionNav_con_right a").eq(0).click(function(){
			$(this).attr("class","nowpage");
			$(".conditionNav_con_right a").eq(1).attr("class","");
		});

		$(".conditionNav_con_right a").eq(1).click(function(){
			$(this).attr("class","nowpage");
			$(".conditionNav_con_right a").eq(0).attr("class","");
		});

		//	分页切换效果
		$(".page a").eq(0).hover(function(){
			$(".page span").eq(0).css("background-position","0 -36px");
		},function(){
			console.log(1);
			$(".page span").eq(0).css("background-position","0 0");
		});

		$(".page a").eq(8).hover(function(){
			$(".page span").eq(1).css("background-position","-25px 0");
		},function(){
			console.log(1);
			$(".page span").eq(1).css("background-position","-25px -36px");
		});

		$(".page a").not($(".prev").eq(0)).not($(".next").eq(0)).click(function(){
			$(".page a").not($(".prev").eq(0)).not($(".next").eq(0)).attr("class","");
			$(this).attr("class","now");
			if($(".page a").index($(this))==1){
				$(".page span").eq(0).css("background-position","0 0");
				$(".page span").eq(1).css("background-position","-25px -18px");
			}else if($(".page a").index($(this))==7){
				$(".page span").eq(0).css("background-position","0 -18px");
				$(".page span").eq(1).css("background-position","-25px -36px");
			}else{
				$(".page span").eq(0).css("background-position","0 -18px");
				$(".page span").eq(1).css("background-position","-25px -18px");
			}
		});

	});
});