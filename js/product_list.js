require(["config"],function(){
	require(["jquery","template","load"],function($,template){
		var html = template("list");
		$(".product_list").html(html);
	})
});