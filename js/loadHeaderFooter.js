define(["jquery"],function($){
	$("#header").load("/html/inculde/public_top.html",function(){
		//	判断用户是否登录
		$.cookie.json = true;
		var isLogin = $.cookie("login");
		if(isLogin != 0){
			$(".top_con_left").eq(0).html("<img width='30' style='display:inline-block;float: left;margin-top: 8px;' src='/img/7_small.jpg' /><a style='font-size:14px;'>" + isLogin + "</a>");
		}
	});
	$("#footer").load("/html/inculde/public_footer.html");
});