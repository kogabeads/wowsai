require(["config"],function(){
	require(["jquery","template","load","carousel","cookie"],function($,template){
		
		//	商品信息动态加载
		$.getJSON("/mock/index_list.json", function(data){

			// 主页---当日精选 商品列表
			var html = template("list_temp01", {products: data});
			$(".theday").html(html);

			// 主页 --- 定制推荐 商品列表
			html = template("list_temp02", {products: data});
			$(".customization").html(html);

			// 主页 --- 设计推荐 商品列表
			html = template("list_temp03", {products: data});
			$(".devise").html(html);

			// 主页 --- 总有激励 商品列表
			html = template("list_temp04", {products: data});
			$(".stimulate").html(html);
		});

		//	隐藏区块
		$("#erweima").hover(function(){
			$("#ewm_pic").css("display","block");
		},function(){
			$("#ewm_pic").css("display","none");
		});

		$("#toTop").hover(function(){
			$("#toTopHover").animate({opacity: '1'}, "slow");
		},function(){
			$("#toTopHover").animate({opacity: '0'}, "slow");
		});

		$("#toTop").click(function(){
			document.body.scrollTop = 0;
		});

		setTimeout('$(".theday .container_list").eq(3).css("margin-right","0")',250);
		setTimeout('$(".customization .container_list").eq(2).css("margin-right","0").end().eq(6).css("margin-right","0")',250);
		setTimeout('$(".devise .container_list").eq(2).css("margin-right","0").end().eq(6).css("margin-right","0")',250);
		setTimeout('$(".container_list_big  .pod").addClass("pod_big")',250);
		setTimeout('$(".stimulate .container_list").eq(2).css("margin-right","0")',250);
	});
});