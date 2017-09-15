require(["config"],function(){
	require(["jquery","load","carousel","template"],function($,template){
		$.getJSON("mock/index_list.josn",function(data){
			var html = template("list_temp", {products: data})
			$(".theday").html(html);
		});
	});
});