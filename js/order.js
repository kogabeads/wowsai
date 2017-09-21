
require(["config"],function(){
	require(["jquery","cookie","load"],function($,cookie){
		
		//	从cookie中读取数据
		$.cookie.json = true;
			var _products = $.cookie("products") || [];
			console.log(_products);
		if(_products[0] == undefined){
			$(".cart_products").html("<span class='null_span'>购物车为空<a href='/html/details.html' class='null_a'>>>添加商品</a></span>");
			$(".subtotal").html("￥" + 0);
		}else{
			var hjhj =_products[0].price* _products[0].num;
			var html = `<div class="buygoods_list_tit clearfix">
						
						<span class="buygoods_list_tit_store">
							店铺：
							<a>${_products[0].shop}</a>
						</span>
						
						<div class="scrollDiv"></div>
						
						<div class="buygoods_list_con  clearfix">
							
							<dl>
								<dt>
									<img width="75" height="75" src="/img/ssmall.jpeg" />
								</dt>
								<dd>
									<p>
										<a>${_products[0].dscp}</a>
									</p>
									<p style="color:#5c5c5c;">${_products[0].kind}</p>
								</dd>
							</dl>
							<span class="buygoods_list_con_wowsaimoney">${_products[0].coin}</span>
							<span class="buygoods_list_con_unitPrice">￥${_products[0].price}.00</span>
							<span class="input_numbox">
								<a class="num_box">
									${_products[0].num}
								</a>
							</span>
							<span class="buygoods_list_con_youhuiinfo_else">
								<select>
									<option checked>不使用优惠</option>
								</select>
								<a></a>
							</span>
							<span class="buygoods_list_con_littlecount subtotal">
								￥${hjhj}.00
							</span>
						</div>
					</div>`;
				console.log(html);
		//	加入页面结构
		var all_p = "￥" + _products[0].price*_products[0].num + ".00";
		$(".subtotal").html(all_p);
		$(".cart_products").eq(0).html(html);
		}

		//	全选
		$(".all_c").click(function(){
			var allNow = $(this).prop("checked");
			$(".all_c").prop("checked",allNow);

			howMuch();
		});

		//	反选
		$(".administration a").eq(0).click(function(){
			if($(".all_c").eq(0).prop("checked")==true){
				$(".all_c").prop("checked",false);
			}else{
				$(".all_c").prop("checked",true);
			}

			howMuch();
		});

		//	计算商品总价函数

		function howMuch(){
			var p = _products[0].price,
				pn = $(".num_box input").eq(0).val();
			if($(".all_c").eq(0).prop("checked") == false){
				$(".subtotal").html("￥" + 0);
			}else{
				$(".subtotal").html("￥" + p*pn + ".00");
			}
		}

		
	});
});