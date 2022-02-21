var confirmId;
$(function() {
	 vpn_get_obj(null, document, 0).cookie = "cas_hash=" + encodeURIComponent( vpn_get_obj(window, "location").hash) ;
	try{
		if( vpn_get_obj(window, "localStorage")){
			//重新登录的时候清除掉localStorage
			 vpn_get_obj(window, "localStorage").clear();
		}
		if(window.sessionStorage){
			//重新登录的时候清除掉sessionStorage
			window.sessionStorage.clear();
		}
	}catch(e){}
	//判断service地址，如果是门户平台则直接改为https协议
	replaceHash(GetQueryString("service"));

	
	var passwordhtml =  vpn_get_obj(null, document, 0).getElementById("password_template").innerHTML;
	var qrcodehtml =  vpn_get_obj(null, document, 0).getElementById("qrcode_template").innerHTML;
	var mobilehtml =  vpn_get_obj(null, document, 0).getElementById("mobile_template").innerHTML;

	var mobileErrorText;

	if($.cookie("is_mobile") == "true"){
		$("#login_content").html(mobilehtml);
		$("#password_login").removeClass("active");
		$("#qrcode_login").removeClass("active");
		$("#mobile_login").addClass("active");

	}else {
		$("#login_content").html(passwordhtml);
	}

	
	var setting = {
		imageWidth : 1680,
		imageHeight : 1050
	};
	var init = function() {
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		$(".login_conatiner").css("height",windowHeight);
		$(".login_conatiner").css("width",windowWidth);
		
		$("#container_bg").css("height",windowHeight);
		$("#container_bg").css("width",windowWidth);
		
		$("#login_right_box").css("height",windowHeight);

		var imgW = setting.imageWidth;
		var imgH = setting.imageHeight;
		var ratio = imgH / imgW; // 图片的高宽比

		imgW = windowWidth; // 图片的宽度等于窗口宽度
		imgH = Math.round(windowWidth * ratio); // 图片高度等于图片宽度 乘以 高宽比

		if (imgH < windowHeight) { // 但如果图片高度小于窗口高度的话
			imgH = windowHeight; // 让图片高度等于窗口高度
			imgW = Math.round(imgH / ratio); // 图片宽度等于图片高度 除以 高宽比
		}

		$(".login_img_01").width(imgW).height(imgH); // 设置图片高度和宽度
	};

	//密码找回的中英文切换
	if($("#change_language").attr("value") == "中文"){
		$("#pwd_url").attr("href",$("#pwd_url").attr("href")+"?locale=en");
	}else{
		$("#pwd_url").attr("href",$("#pwd_url").attr("href")+"?locale=zh_CN");
	}
	$("#change_language").unbind("click").click(function(){
		var re=eval( vpn_rewrite_js('/(locale=)([^&]*)/gi'));
		var url =  vpn_get_obj(window, "location").href;
		if($("#change_language").attr("value") == "中文"){
			if(url.indexOf("locale") >= 0 ) {
				url=url.replace(re,'locale=zh_CN');
				 vpn_get_obj(null, location, 0).href=url;
			}else{
				if(url.indexOf("?") >= 0){
					 vpn_get_obj(null, location, 0).href=url+"&locale=zh_CN";
				}else{
					 vpn_get_obj(null, location, 0).href=url+"?locale=zh_CN";
				}
			}
		}else if($("#change_language").attr("value") == "English") {
			if(url.indexOf("locale") >= 0 ) {
				url=url.replace(re,'locale=en');
				 vpn_get_obj(null, location, 0).href=url;
			}else{
				if(url.indexOf("?") >= 0){
					 vpn_get_obj(null, location, 0).href=url+"&locale=en";
				}else{
					 vpn_get_obj(null, location, 0).href=url+"?locale=en";
				}
			}
		}
	});


	init();
	
	$(window).resize(function() {
		init();
	});
	
	
	//点击记住用户名
	$("#rememberName").change(function(){
		if($(this).is(":checked")){
			var $u = $("#un").val() ;
			if($.trim($u)==''){
				$("#errormsg").text("账号不能为空。").show();
//				$("#help-link").hide();
//				$(this).removeAttr("checked");
				$(this).prop("checked", false);
			}else{
				//不等于空，写cookie
				setCookie('dlut_cas_un' , $u , 365);
				 vpn_get_obj(null, document, 0).getElementById('pd').focus()
			}
		}else{
			//反选之后清空cookie
			clearCookie('dlut_cas_un');
		}
	});
	
	//点击访客注册
	// $("#fkregister").unbind("click").bind("click",function(){
	// 	$("#fk_pop").css('display','block');
	// 	$("#fk_agree").unbind().click(function(){
	// 		$.post("fk",{"method":"agree"},function(data){
	// 			if(data.result == "true"){
	// 				window.location.href = "fk";
	// 			}
	// 		});
	// 		$("#fk_pop").css('display','none');
	// 	});
	// 	$("[name='fk_cancel']").unbind().click(function(){
	// 		$("#fk_pop").css('display','none');
	// 	});
	// });
	
	//点击账号登录
	$("#password_login").unbind("click").bind("click",function(){

		var	search = vpn_get_obj(null, location, 0).search;
		//跳转url
		var service = getParameter(search, "service", "");
		 vpn_get_obj(window, "location").href = decodeURIComponent(service);
	});
	
	//点击扫码登录
	$("#qrcode_login").unbind("click").bind("click",function(){
		$("#password_login").removeClass("active");
		$("#qrcode_login").addClass("active");
		$("#mobile_login").removeClass("active");
		$("#login_content").html(qrcodehtml);

		// 新的扫码模块
		/*var lqrcode = new loginQRCode("qrcode",143,143);
		lqrcode.generateLoginQRCode(function(result){
			window.location.href = result.redirect_url;
		});
		$(this).unbind();*/


		//原锐捷扫码: 获取token及扫码地址
		$.ajax({
	        type : "get",      
	        url : "qrcodesso", 
	        dataType : "text",
	        cache: false ,
	        data :
	        {
	        	"type" : "getToken"
	        },
	        success : function(result)
	        {
	        	var token = result.substring(0,result.indexOf(","));
	        	var content = result.substring(result.indexOf(",")+1);
	        	//生成二维码
	        	setQrcode(content);
	        	var num = 0;
	        	//扫码登录
	    		qrcodeLogin(content, token, num);
	        },
	        error : function(xhr, status, errMsg)
	        {
	             alert("获取token失败");
	        }
	    });
	});

	//点击手机登录
	$("#mobile_login").unbind("click").bind("click",function(){
		$("#password_login").removeClass("active");
		$("#qrcode_login").removeClass("active");
		$("#mobile_login").addClass("active");
		$("#login_content").html(mobilehtml);

		initErrormsg();

		//重新获取验证码
		$("#a_changeCode_mobile").unbind("click").bind("click",function(){
			$("#codeImage_mobile").attr("src", "code?"+Math.random()) ;
		});
	});

	//登录按钮触发
	$("#index_login_btn").unbind("click").bind("click",function(){
		login();
	});
	
	 $("#open_360").unbind("click").bind("click",function(){
			$("#open_360_img").show();
		});
	 $("#open_360").unbind("click").bind("click",function(event){
		    event.stopPropagation();
		});
	 $( vpn_get_obj(null, document, 0)).unbind("click").bind("click",function(){
		    $("#open_360_img").hide();
		});
	
	//用户名文本域keyup事件
	$("#un").keyup(function(e){
		if(e.which == 13) {
			login();
	    }
	}).keydown(function(e){
		$("#errormsg").hide();
		var winW =$("body").width();
		if(winW < 1024){
		$("#help-link").show();
		}
	}).focus();
	
	//密码文本域keyup事件
	$("#pd").keyup(function(e){
		if(e.which == 13) {
			login();
	    }
	}).keydown(function(e){
		$("#errormsg").hide();
		var winW =$("body").width();
		if(winW < 1024){
		$("#help-link").show();
		}
	});
	
	//如果有错误信息，则显示
	if($("#errormsghide").text()){
		$("#errormsg").text($("#errormsghide").text()).show();
		$("#help-link").hide();
		mobileErrorText = $("#errormsghide").text();
	}
	
	//重新获取验证码
	$("#a_changeCode").unbind("click").bind("click",function(){
    	$("#codeImage").attr("src", "code?"+Math.random()) ;
    });
    
	//获取cookie值
	var cookie = getCookie('dlut_cas_un');
	if(cookie){
		$("#un").val(cookie);
		$("#rememberName").attr("checked","checked");
	}
	
	var ifchecked = function(){
		if($("#rememberName").is(":checked")){
		    vpn_get_obj(null, document, 0).getElementById('pd').focus()
	    }
	};
	ifchecked();
	if($.cookie("is_mobile") == "true"){
		$("#password_login").removeClass("active");
		$("#qrcode_login").removeClass("active");
		$("#mobile_login").addClass("active");
		$("#login_content").html(mobilehtml);

		initErrormsg();

		//重新获取验证码
		$("#a_changeCode_mobile").unbind("click").bind("click",function(){
			$("#codeImage_mobile").attr("src", "code?"+Math.random()) ;
		});
		if(mobileErrorText != null) {
			$("#errormsg").text(mobileErrorText).show();
			$("#help-link").hide();
		}
		$.cookie("is_mobile", null);
	}
});


function initErrormsg(){
	testTTT();
	$("#phone").keyup(function(e){
		if(e.which == 11){
			loginBtn();
		}
	}).keydown(function(e){
		$("#errormsg").hide();
	}).focus();


	$("#phoneCode").keyup(function(e){
		if(e.which == 10){
			loginBtn();
		}
	}).keydown(function(e){
		$("#errormsg").hide();
	});

	$("#index_login_btn_phone").click(function(){
		loginBtn();
	});
}
function testTTT(){
	$('body').on('click', '#getPhone', function () {
		var phone = $("#phone").val().trim();
		var code = $("#code").val().trim();
		if(phone === ""){
			$("#phone").focus();
			$("#errormsg").text("手机号不能为空").show();
			return ;
		}
		if(code === ""){
			$("#code").focus();
			$("#errormsg").text("图形验证码不能为空").show();
			return ;
		}
		var mreg = /^0?1\d{10}$/;

		if(!mreg.test(phone)){
			$("#phone").focus();
			$("#phone").parent().addClass("login_error_border");
			$("#errormsg").text("手机号格式有误").show();
			return ;
		}
		LockButton("#getPhone", 120);
		$("#getPhoneCode").attr("src", "mobilecode?phone=" + phone + "&code=" + code + "&method=isPhone&" + Math.random());
	})
	if($.cookie("djsendtime") != undefined && !isNaN($.cookie("djsendtime"))){
		var djsendtime = $.cookie("djsendtime");
		var now = new Date().getTime();
		var lockseconds = parseInt((djsendtime - now) / 1000);
		if(lockseconds <= 0){
			$.cookie("djsendtime", null);
		}else{
			LockButton('#getPhone', lockseconds);
		}
	}
}

var LockButton = function(btnObjId, lockseconds){
	var errorInfo = true;
	var djsendtime = $.cookie("djsendtime");
	if(djsendtime == undefined || djsendtime == 'undefined' || djsendtime == null || djsendtime == 'null'){
		var now = new Date().getTime();
		var end = lockseconds * 1000 + now;
		$.cookie("djsendtime", end);
	}
	$("#getPhone").attr("disabled", "disabled");
	 vpn_get_obj(null, document, 0).getElementById('getPhone').style.color = "#808080";
	 vpn_get_obj(null, document, 0).getElementById('getPhone').innerHTML = '(' + lockseconds + ')后重新获取';
	var timer = setInterval(function(){
		lockseconds--;
		 vpn_get_obj(null, document, 0).getElementById('getPhone').innerHTML = '(' + lockseconds + ')后重新获取' ;
		if (lockseconds <= 0) {
			clearCookie("djsendtime");
			$("#getPhone").removeAttr("disabled");
			 vpn_get_obj(null, document, 0).getElementById('getPhone').style.color="#008838";
			 vpn_get_obj(null, document, 0).getElementById('getPhone').innerHTML = "重新获取";
			clearInterval(timer);
		}
		if(errorInfo){
			var isResetImg = false;
			var error_mobile_info = $.cookie("mobile_error_info");
			if(error_mobile_info != null && error_mobile_info != undefined && error_mobile_info != 'undefined' && error_mobile_info != 'null' && "user_not_exist" == error_mobile_info){
				//该学工号未绑定手机号，请使用账号与微信扫码登录，进入“我的信息”---“安全设置“绑定手机号
				$("#errormsg").html("该手机号未被绑定,请用账号登录后在”我的信息——安全设置“中绑定手机号!");
				$("#errormsg").show();
				isResetImg = true;
				errorInfo = false;
				$.cookie("mobile_error_info", null);
				lockseconds = 0;
				clearCookie("djsendtime");
			}else if(error_mobile_info != null && error_mobile_info != undefined && error_mobile_info != 'undefined' && error_mobile_info != 'null' && "error1" == error_mobile_info){
				//您的验证码获取太频繁，请于10分钟之后重试
				$("#errormsg").html("您的验证码获取太频繁，请于10分钟之后重试");
				$("#errormsg").show();
				isResetImg = true;
				errorInfo = false;
				$.cookie("mobile_error_info", null);
			}else if(error_mobile_info != null && error_mobile_info != undefined && error_mobile_info != 'undefined' && error_mobile_info != 'null' && "error2" == error_mobile_info){
				//一天只能发送100次验证码
				$("#errormsg").html("一天只能发送100次验证码");
				$("#errormsg").show();
				isResetImg = true;
				errorInfo = false;
				$.cookie("mobile_error_info", null);
			}else if(error_mobile_info != null && error_mobile_info != undefined && error_mobile_info != 'undefined' && error_mobile_info != 'null' && "success" == error_mobile_info){
				//验证码已发送，请注意查收
				$("#errormsg").html("验证码已发送，请注意查收");
				$("#errormsg").show();
				errorInfo=false;
				$.cookie("mobile_error_info", null);
			}else if(error_mobile_info != null && error_mobile_info != undefined && error_mobile_info != 'undefined' && error_mobile_info != 'null' && "img_code_error" == error_mobile_info){
				//图形验证码错误，请重新输入
				$("#errormsg").html("图形验证码错误，请重新输入");
				$("#errormsg").show();
				errorInfo = false;
				lockseconds = 0;
				$.cookie("mobile_error_info", null);
				// 重置图形验证码
				//$("#codeImage_mobile").trigger("click");
			}else if(error_mobile_info != null && error_mobile_info != undefined && error_mobile_info != 'undefined' && error_mobile_info != 'null' && "mobile_reg_error" == error_mobile_info){
				//手机号格式错误，请重新输入
				$("#errormsg").html("手机号格式错误，请重新输入。");
				$("#errormsg").show();
				isResetImg = true;
				errorInfo = false;
				lockseconds = 0;
				$.cookie("mobile_error_info", null);
			}
			if (isResetImg) {
				//只要有错误就重置图片验证码
				$("#codeImage_mobile").trigger("click");
			}
		}
	}, 1000);
};

// 弹窗提示用户选择登陆账号（手机登录对应多账号的情况）
function chooseMobileAccount(data) {
	layui.use('table', function(){
		var table = layui.table;
		//第一个实例
		table.render({
			id: 'accountInfo'
			,elem: '#accountInfo'
			,data: data
			,width: 300
			,cols: [
				[ //表头
				{field: 'ID_NUMBER', title: 'ID', align:'center', width:148}
				,{field: 'USER_NAME', title: '用户名', align:'center', width:148}
				]
			]
			,done: function (res, curr, count) {// 表格渲染完成之后的回调
				$(".layui-table th").css("font-weight", "bold");// 设定表格标题字体加粗

				LayUIDataTable.SetJqueryObj($);// 第一步：设置jQuery对象

				var currentRowDataList = LayUIDataTable.ParseDataTable(function (index, currentData, rowData) {
					var idnumber = rowData.ID_NUMBER
					layer.confirm('确认登录账号[' + idnumber + ']？', {
						title:"登录确认",
						time: 0 //不自动关闭
						,btn: ['确认', '取消']
						,yes: function(index){
							layer.close(index);
							confirmId = idnumber;
							// 关闭选择账号的open弹出框
							layer.close(index_open);
							// 执行登录流程
							loginBtnTrue();
						}
					});
				});
			}
		});
	});

	var index_open = layer.open({
		title: '请选择你要登录的账号',
		type: 1,
		content: $("#chooseAccountDiv")
	});
}

function loginBtn(){
	var $phone = $("#phone");
	var $phoneCode = $("#phoneCode");
	var $imgCode = $("#code");

	var phone = $phone.val().trim();
	var imgCode = $imgCode.val().trim();
	var phoneCode = $phoneCode.val().trim();
	if(phone === ""){
		$phone.focus();
		$phone.parent().addClass("login_error_border");
		// 手机号不能为空
		$("#errormsg").html("手机号不能为空");
		$("#errormsg").show();
		$("#help-link").hide();
		return ;
	}
	if(imgCode === ""){
		$imgCode.focus();
		$imgCode.parent().addClass("login_error_border");
		// 手机号不能为空
		$("#errormsg").html("图形验证码不能为空");
		$("#errormsg").show();
		$("#help-link").hide();
		return ;
	}
	if(phoneCode === ""){
		$phoneCode.focus();
		$phoneCode.parent().addClass("login_error_border");
		//验证码不能为空
		$("#errormsg").html("短信验证码不能为空");
		$("#errormsg").show();
		$("#help-link").hide();
		return ;
	}
	var mreg = /^0?1\d{10}$/;

	if(!mreg.test(phone)){
		$phone.focus();
		$phone.parent().addClass("login_error_border");
		//手机号格式不正确
		$("#errormsg").html("手机号格式不正确");
		$("#errormsg").show();
		return ;
	}

	// 这里开始判断用户的验证码
	$.ajax({
		type: "get",
		async: false,
		url: "mobilecode?phone=" + phone + "&phoneCode=" + phoneCode + "&code=" + imgCode + "&method=isPhone2&" + Math.random(),
		success:function(result) {
			if (result.success) {
				// 校验成功，选择账号登录
				var userinfo = result.userinfo;
				if (userinfo.length === 1) {
					// 手机号对应唯一的账号，直接登陆
					confirmId = userinfo[0].ID_NUMBER;
					loginBtnTrue();
				} else if (userinfo.length > 1) {
					// 手机号对应多个账号，进入选择流程
					chooseMobileAccount(userinfo);
				} else {
					$("#errormsg").html("登陆异常，请稍后再试。");
					$("#errormsg").show();
				}
			} else {
				// 验证码错误，提示信息
				var errcode = result.errcode;
				if(errcode!=null && errcode!=='' && errcode==='img_code_error') {
					$.cookie("mobile_error_info", null);
					$("#errormsg").html("图形验证码错误，请重新输入");
					$("#errormsg").show();
					$.cookie("mobile_error_info", null);
				} else if(errcode!=null && errcode!=='' && errcode==='phone_code_error') {
					$.cookie("mobile_error_info", null);
					$("#errormsg").html("手机短信验证码错误，请重新输入");
					$("#errormsg").show();
				} else if(errcode!=null && errcode!=='' && errcode==='phone_code_expire') {
					$.cookie("mobile_error_info", null);
					$("#errormsg").html("验证码过期，请重新获取");
					$("#errormsg").show();
				}
			}
		}
	});
}

// 手机登录的表单提交
function loginBtnTrue() {
	var $phone = $("#phone");
	var $phoneCode = $("#phoneCode");

	var phoneCode = $phoneCode.val().trim();

	// 然后提交登陆表单
	$phone.attr("disabled","disabled");
	$phoneCode.attr("disabled","disabled");

	var lt = $("#lt").val();

	$("#ul").val(confirmId.length);
	$("#pl").val(phoneCode.length);
	$("#rsa").val(strEnc(confirmId+phoneCode+lt , '1' , '2' , '3'));
	$("#sl").val(1);
	$.cookie("is_mobile", "true");
	$("#loginForm")[0].submit();
}

function login(){
	
	var $u = $("#un") , $p=$("#pd");
	window.alert($("#un").val())
    window.alert($("#pd").val())
	var u = $u.val().trim();
	if(u==""){
		$u.focus();
		$("#errormsg").text("账号不能为空。");
		$("#help-link").hide();
		return ;
	}
	
	var p = $p.val().trim();
	if(p==""){
		$p.focus();
		$("#errormsg").text("密码不能为空。");
		$("#help-link").hide();
		return ;
	}
	
	$u.attr("disabled","disabled");
	$p.attr("disabled","disabled");
	
	var lt = $("#lt").val();
	
	$("#ul").val(u.length);
	$("#pl").val(p.length);
	$("#sl").val(0);
	$("#rsa").val(strEnc(u+p+lt , '1' , '2' , '3'));
	
	$("#loginForm")[0].submit();
}
function setQrcode(content){
	$("#qrcode").qrcode({width: 143,height: 143,text: content});
}
function qrcodeLogin(content, token, num){
	var	search = vpn_get_obj(null, location, 0).search;
	//跳转url
	var service = getParameter(search, "service", "");
	$.ajax({
        type : "get",      
        url : "qrcodesso", 
        dataType : "text",
        cache: false ,
        data :
        {
        	 "type"    : "qrcodeLogin",
             "service" : service,
             "token"   : token,
             "content" : content
        },
        success : function(result)
        {
        	num ++;
        	if(result == "out" && num < 2){
        		qrcodeLogin(content, token, num);
        	}else{
        		 vpn_get_obj(window, "location").href = decodeURIComponent(service);
        	}
//        	window.location.href = decodeURIComponent(service);
//        	if(result == "ok"){
//        		window.location.href = decodeURIComponent(service);
//        	}else if(result == "out"){
////        		alert("扫码超时");
//        		window.location.href = decodeURIComponent(service);
//        	}else if(result == "error"){
//        		alert("二维码失效");
//        	}
        },
        error : function(xhr, status, errMsg)
        {
//             alert("扫码失败刷新后重试");
        }
    });
}

function getParameter(hash,name,nvl) {
	if(!nvl){
		nvl = "";
	}
	var svalue = hash.match(new RegExp("[\?\&]?" + name + "=([^\&\#]*)(\&?)", "i"));
	if(svalue == null){
		return nvl;
	}else{
		svalue = svalue ? svalue[1] : svalue;
		svalue = svalue.replace(/<script>/gi,"").replace(/<\/script>/gi,"").replace(/<html>/gi,"").replace(/<\/html>/gi,"").replace(/alert/gi,"").replace(/<span>/gi,"").replace(/<\/span>/gi,"").replace(/<div>/gi,"").replace(/<\/div>/gi,"");
		return svalue;
	}
}

//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
     vpn_get_obj(null, document, 0).cookie = cname + "=" + cvalue + "; " + expires;
}

//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca =  vpn_get_obj(null, document, 0).cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

//清除cookie  
function clearCookie(name) {  
    setCookie(name, "", -1);  
} 
//判断如果是大理工门户地址则改成https协议并重定向请求
function replaceHash (paramValue){
	if(paramValue!=null&&paramValue.indexOf("portal.dlut.edu.cn")!=-1&&paramValue.indexOf("https")==-1){
		paramValue = paramValue.replace("http","https");
		 vpn_get_obj(window, "location").href = paramValue;
	}
}
//获取地址栏参数值 	
function GetQueryString(service) {
	var b = new RegExp("(^|&)" + service + "=([^&]*)(&|$)");
	var r =  vpn_get_obj(window, "location").search.substr(1).match(b);
	if (r != null) return unescape(r[2]);
	return null
};
//生成UUID
function generateUUID() {
	var d = new Date().getTime();
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = (d + Math.random()*16)%16 | 0;
		d = Math.floor(d/16);
		return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	});
	return uuid;
};