var verTxt = 0,			//	存放验证码正确答案
	emailOn = false,	//	email是否正确填写
	userNameOn = false,	//	用户名是否正确填写
	passwordOn = false,	//	密码是否正确填写
	checkOn = false,	//	确认密码是否正确填写
	verOn = false,		//	验证码是否正确填写
	cookieArr = [];
require(["config"],function(){
	require(["jquery","load","cookie"],function(){

		var verf = true,	//	验证码出现开关
			isVerTrue = false;	//	验证码是否正确

		//	校验函数
		//	若已被使用，返回1；反之。返回0
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

		//	校验注册表单
		//	邮箱
		$("#email").blur(function(){
			var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
				txt = $("#email").val();
			//	判断填写是否合法
			if(!reg.test(txt)){
				$("#email~span").html("这不是一个有效的邮箱信息").css("color","red");
				emailOn = false;
			}else{
				//	判断邮箱是否已经存在
				if(checkInfo("email",txt) === 0){
					$("#email~span").html("ok!").css({"color":"green","font-style":"italic"});
					emailOn = true;
				}else{
					$("#email~span").html("这个电子邮箱已经存在").css("color","red");
					emailOn = false;
				}
			}
		});

		//	昵称
		$("#username").blur(function(){
			var reg = /^.{3,25}$/,
				txt = $("#username").val();
			//	判断填写是否合法
			if(!reg.test(txt)){
				$("#username~span").html("用户名必须在3-25个字符之间").css("color","red");
				userNameOn = false;
			}else{
				//	判断用户名是否已经存在
				if(checkInfo("username",txt) === 0){
					$("#username~span").html("ok!").css({"color":"green","font-style":"italic"});
					userNameOn = true;
				}else{
					$("#username~span").html("这个昵称已经存在").css("color","red");
					userNameOn = false;
				}
			}
		});

		//	输入密码
		$("#upwd").blur(function(){
			var reg = /^.{6,20}$/,
				txt = $("#upwd").val();
			//	判断填写是否合法
			if(!reg.test(txt)){
				$("#upwd~span").html("用户名必须在6-20个字符之间").css("color","red");
				passwordOn = false;
			}else{
				$("#upwd~span").html("ok!").css({"color":"green","font-style":"italic"});
				passwordOn = true;
			}
		});

		//	确认密码
		$("#checkp").blur(function(){
			var _upwd = $("#upwd").val(),
				_chk = $("#checkp").val();
			if(_chk){
				//	判断两次输入密码是否一致
				if(_upwd === _chk){
					$("#checkp~span").html("ok!").css({"color":"green","font-style":"italic"});
					checkOn = true;
				}else{
					$("#checkp~span").html("两次输入密码不一致").css("color","red");
					checkOn = false;
				}
			}else{
				$("#checkp~span").html("你必须再次输入你的密码").css("color","red");
				checkOn = false;
			}
			
		});

		//	生成验证码函数
		function newver(){
			$.ajax({
				type : "get",
				url : "http://route.showapi.com/26-4",
				data : {
					showapi_appid:"46477",
					showapi_sign:"33dcef786007464e9e1b48569f6a63af"
				},
				datatype : "json",
				success : function(data){
					data = data.showapi_res_body;
					$("#verify~a").html("<img id='vercode' src=" + data.img_path + ">");
					verTxt = data.text;
				}
			});
		};


		//	初次点击验证码框生成验证码
		$("#verify").click(function(){
			if(verf){
				newver();
				verf = false;
			}
		});

		//	点击图片更换验证码
		$("#verify~a").click(function(){
			newver();
		});

		//	失去焦点校验验证码是否填写正确
		$("#verify").blur(function(){
			if($("#verify").val() == verTxt){
				$("#verify~span").html("ok!").css({"color":"green","font-style":"italic"});
				verOn = true;
			}else{
				$("#verify~span").html("验证码错误").css("color","red");
				verOn = false;
			}
		})

		//	点击注册按钮校验是否同意用户协议，通过则校验验证码是否填写正确
		$("#sub").click(function(){
			if($("#yes").prop("checked") && emailOn == true  && userNameOn == true && passwordOn == true && checkOn == true && verOn == true){
				cookieArr.push({
					"email" : $("#email").val(),
					"username" : $("#username").val(),
					"upwd" : $("#upwd").val()
				});
				$.cookie("users",cookieArr,{"expires":7,"path":"/"});
				location = "/html/register.html";
			}else{
				alert("请先阅读并同意商城服务协议")
			}
		});

	});
});