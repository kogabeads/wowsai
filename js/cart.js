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
			var html = `<div class="buygoods_list_tit clearfix">
						<span class="buygoods_list_tit_checkbos">
							<input class="fl all_c" checked="checked" type="checkbox" />
						</span>
						<span class="buygoods_list_tit_store">
							店铺
							<a>${_products[0].shop}</a>
						</span>
						<span class="buygoods_list_tit_address">
							<a>${_products[0].address}</a>
						</span>
						<div class="scrollDiv"></div>
						<span class="buygoods_list_tit_storecount">
							本店总价
							<strong id="store_amount_178161" class="subtotal">￥${_products[0].price*_products[0].num}.00</strong>
						</span>
						<div class="buygoods_list_con  clearfix">
							<span class="buygoods_list_con_checkbox">
								<input type="checkbox" checked class="all_c" />
							</span>
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
							<ul class="input_numbox">
								<li style="cursor:pointer;" class="anniu_jian">
									<img src="/img/cart_reduction.jpg" />
								</li>
								<li class="num_box">
									<input type="text" value=${_products[0].num} />
								</li>
								<li style="cursor:pointer;" class="anniu_jia">
									<img src="/img/cart_plus.jpg" />
								</li>
							</ul>
							<span class="buygoods_list_con_youhuiinfo_else">
								<p></p>
							</span>
							<span class="buygoods_list_con_littlecount subtotal">
								￥${_products[0].price*_products[0].num}.00
							</span>
							<span class="buygoods_list_con_poeration">
								<a style="cursor:pointer;" class="a0">加入最爱</a>
								<a style="cursor:pointer;">删除</a>
							</span>
						</div>
					</div>`;
		//	加入页面结构
		var all_p = "￥" + _products[0].price*_products[0].num + ".00";
		$(".subtotal").html(all_p);
		$(".cart_products").eq(0).html(html);
		howMuch();
		}

		
		
		//	选择商品数量
		$(".num_box input").eq(0).blur(function(){

			//	校验输入格式是否正确
			var _amount = $(this).val(),
				reg = /^[1-9][0-9]*$/,
				isNum = reg.test(_amount),
				_all = 5;
			if(isNum == true){
				if(_amount > _all){
					alert("商品存货不足");
					$(this).val(1);
				}else if(_amount < 1){
					alert("请输入正确的数字");
					$(this).val(1);
				}
			}else{
				alert("请输入正确的数字");
				$(this).val(1);
			}

			howMuch();
		});

		$(".anniu_jian").eq(0).click(function(){
			//	减商品
			var _amount = $(".num_box input").eq(0).val();
			if(_amount > 1){
				_amount--;
				$(".num_box input").eq(0).val(_amount);
			}

			howMuch();
		});

		$(".anniu_jia").eq(0).click(function(){
			//	加商品
			var _amount = $(".num_box input").eq(0).val(),
				_all = 5;
			if(_amount < _all){
				_amount++;
				$(".num_box input").eq(0).val(_amount);
			}else{
				alert("商品数量不足");
			}

			howMuch();
		});

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

		//	删除商品

		$(".administration a").eq(1).click(function(){
			if($(".all_c").eq(0).prop("checked") == true){
				$(".cart_products *").remove();
				$(".cart_products").html("<span class='null_span'>购物车为空<a href='/html/details.html' class='null_a'>>>添加商品</a></span>");
				$(".subtotal").html("￥" + 0);
				$.cookie.json = true;
				$.cookie("products","",{"expires":-1,"path":"/"});
			}
		});

		$(".buygoods_list_con_poeration a").eq(1).click(function(){
			if($(".all_c").eq(0).prop("checked") == true){
				$(".cart_products *").remove();
				$(".cart_products").html("<span class='null_span'>购物车为空<a href='/html/details.html' class='null_a'>>>添加商品</a></span>");
				$(".subtotal").html("￥" + 0);
				$.cookie.json = true;
				$.cookie("products","",{"expires":-1,"path":"/"});
			}
		});
	});
});