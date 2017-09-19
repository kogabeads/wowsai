require(["config"],function(){
	require(["jquery","template","load"],function($,template){

		// ==============商品列表模板==============
		var html = template("list");
		$(".product_list").html(html);
	})
});