var	userNameOn = false,	//	用户名是否正确填写
	passwordOn = false;	//	密码是否正确填写

require(["config"],function(){
	require(["jquery","load","cookie"],function(){
		//	是否自动填入信息
		$.cookie.json = true;
		var isRemember = $.cookie("remember") || [],
			_users = $.cookie("users") || [];
		if(isRemember == 1){
			var _len = _users.length - 1,
				_usersN = _users[_len]["username"],
				_usersP = _users[_len]["upwd"];
			$(".inputtxt").eq(0).val(_usersN);
			$(".inputtxt").eq(1).val(_usersP);		
		}

		//	校验函数
		//	若cookie众存在，返回1；反之。返回0
		function checkInfo(type,txt){
			$.cookie.json = true;
			var _users = $.cookie("users") || [],
				_index = indexOf(type,txt,_users);
			cookieArr = _users;
			if(_index === -1){
				return 0
			}
			return 1;
		}

		//	查询待查对象是否已经在cookie中
		function indexOf(type,txt,users){
			for(var i = 0; i < users.length; i++){
				if(users[i][type] == txt){
					return i;
				}										
			}
			return -1;
		}

		//	昵称
		$(".inputtxt").eq(0).blur(function(){
			var reg = /^.{3,25}$/,
				txt = $(".inputtxt").eq(0).val();
				console.log(txt);
			//	判断填写是否合法
			if(!reg.test(txt)){
				$("#un_info").html("用户名必须在3-25个字符之间").css("color","red");
				userNameOn = false;
			}else{
				if((checkInfo("username",txt) === 1)){
					$("#un_info").html("ok!").css({"color":"green","font-style":"italic"});
					userNameOn = true;
				}else{
					$("#un_info").html("注册昵称不存在").css("color","red");
					userNameOn = false;
				}
			}
		});

		//	密码
		$(".inputtxt").eq(1).blur(function(){
			var reg = /^.{6,20}$/,
				txt = $(".inputtxt").eq(1).val();
			//	判断填写是否合法
			if(!reg.test(txt)){
				$("#up_info").html("用户名必须在6-20个字符之间").css("color","red");
				passwordOn = false;
			}
		});

		//	点击提交按钮校验账号密码是否填写正确
		$("#sub").click(function(){
			var _userName = $(".inputtxt").eq(0).val(),
				_upwd = $(".inputtxt").eq(1).val();
			//	判断是否输入密码
			if(_upwd == 0){
				$("#up_info").html("请输入登录密码").css("color","red");
				return;
			}else{
				passwordOn = true;
			}

			//	判断用户名密码是否匹配
			if(passwordOn = true && userNameOn == true){
				if(checkInfo("username",_userName) === 1 && checkInfo("upwd",_upwd) === 1){
					//	判断是否记住用户名密码
					if($("#rememberme").prop("checked")){
						$.cookie("remember","1",{"expires":7,"path":"/"});
					}else{
						$.cookie("remember","0",{"expires":7,"path":"/"});
					}
					//	将登录状态存进cookie
					$.cookie("login",_userName,{"expires":7,"path":"/"});
					//	跳转页面
					location = "/index.html";
				}else{
					$("#un_info").html("账户名或密码不正确").css("color","red");
				}
			}
		});
	});
});