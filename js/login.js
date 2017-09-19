require(["config"],function(){
	require(["jquery","load","cookie"],function(){

		$.cookie("users",'[{"email":"752825684@qq.com","username":"第三方"}]')
		//	校验函数
		//	若已被使用，返回1；反之。返回0
		function checkInfo(type,txt){
			$.cookie.json = true;
			var _users = $.cookie("users"),
				_index = indexOf(type,txt,_users);
			if(_index === -1){
				return 0
			}
			return 1;
		}

		//	查找待查对象是否已经在cookie中
		function indexOf(type,txt,users){
			for(var i = 0; i < 2; i++){
				if(users[0][type] == txt){
					return i;
				}										
			}
			return -1;
		}

		//	校验注册表单
		//	邮箱
		$("#email").blur(function(){
			var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
				txt = $("#email").val();
			if(!reg.test(txt)){
				$("#email~span").html("这不是一个有效的邮箱信息").css("color","red");
			}else{
				if(checkInfo("email",txt) === 0){
					$("#email~span").html("ok!").css({"color":"green","font-style":"italic"});
				}else{
					$("#email~span").html("这个电子邮箱已经存在").css("color","red");
				}
			}
		});

		//	昵称
		$("#username").blur(function(){
			var reg = /^.{3,25}$/,
				txt = $("#username").val();
			if(!reg.test(txt)){
				$("#username~span").html("用户名必须在3-25个字符之间").css("color","red");
			}else{
				if(checkInfo("username",txt) === 0){
					$("#username~span").html("ok!").css({"color":"green","font-style":"italic"});
				}else{
					$("#username~span").html("这个昵称已经存在").css("color","red");
				}
			}
		});

		//	输入密码
		$("#upwd").blur(function(){
			var reg = /^.{6,20}$/,
				txt = $("#upwd").val();
			if(!reg.test(txt)){
				$("#upwd~span").html("用户名必须在6-20个字符之间").css("color","red");
			}else{
				$("#upwd~span").html("ok!").css({"color":"green","font-style":"italic"});
			}
		});

		//	确认密码
		$("#checkp").blur(function(){
			var _upwd = $("#upwd").val(),
				_chk = $("#checkp").val();
			if(_chk){
				if(_upwd === _chk){
					$("#checkp~span").html("ok!").css({"color":"green","font-style":"italic"});
				}else{
					$("#checkp~span").html("两次输入密码不一致").css("color","red");
				}
			}else{
				$("#checkp~span").html("你必须再次输入你的密码").css("color","red");
			}
			
		});
	});
});