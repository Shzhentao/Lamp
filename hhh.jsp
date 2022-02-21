







<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="shortcut icon" href="../image/nlc_logo.jpg"/>
<title>中国国家图书馆</title>
<link href="/sso/css/style.css" rel="stylesheet" type="text/css" />

<style type="text/css">
.loginqiehuan{
	position:absolute;
	top:0px;
	right:0px;
	width:94px;
	height:95px;
	display: block; 
	}
.erwei_img{
	padding-left:30px;
	}
.erwei_img #iframePage{
	width:355px; 
	height:355px; 
}
	
<!--
body {
	background: url(/sso/image/loginbg.jpg) no-repeat center top;
}
-->
</style>
<!--此两个js是密码输入框的，placeholder是h5属性，所以为了低版本支持必须调用以下js。一开始value=""显示placeholder里的字，输入框中输入文字后给value赋值-->
	<script src="/sso/js/jquery-1.11.1.min.js"></script>
    <!-- 解决IE10以下版本placeholder无效 -->
    <script src="/sso/js/jquery.placeholder.min.js"></script>
   
    <script type="text/javascript" src="/sso/js/common/sweetalert.min.js"></script>
    <script type="text/javascript" src="/sso/js/common/promise.min.js"></script>
    <link rel="stylesheet" type="text/css" href="/sso/css/common/sweetalert.css">
    <link rel="stylesheet" type="text/css" href="/sso/css/nlc-notice.css">
    
    <script type="text/javascript">
	    $(function(){
	        //var _url = window.location.href;
	      	var _url = 'http://read.nlc.cn/user/index';
	        var location_url = "https://sso1.nlc.cn/sso/jsp/qrcode/qr_login.jsp?callback=" + _url;
            $("#iframePage").attr("src", location_url);
	    	$(".loginqiehuan").hide();
	    	var appid = '90037';
	    	if(appid == 90037){//新门户扫码登录
	    		$(".loginqiehuan").show();
	    	}
	    	 $('input[placeholder]').placeholder();
	    	var errString = "";
	    	if(errString != ""){
	    		alert(errString);
	    	}
	    });

		//验证码点击刷新
		function changeValidateCode(){
			//alert()
			//var img = $(this).find("img:first");
			var img = $(".yzimg");
			img.attr("src",img.attr("src") + "&date=" + new Date().getTime());
		};
		
		function trim(str) { // 删除左右两端的空格
			return str.replace(/(^\s*)|(\s*$)/g, "");
		}
		
		function swalShow(title, text, status, obj) {
			obj.focus();
			swal({
				title : title,
				text : 	text,
				type : "error"
			});
			
		}
		function thirdLogin(flag){
			var thirdCallBackUrl = $("#paramUrl").val();
			var appId = $("#appId").val();
			window.location.href="/sso/foreign/thirdPartyLoginManager/server/" + flag + "?thirdCallBackUrl=" + thirdCallBackUrl + "&appId=" + appId;
		}

		function changeMobileLogin(){
			$("#loginImation").empty();
			var html=' <p class="inputp">'
				  +'<input name="username1" id="username1" type="text" class="logininput user" autocomplete="off" value="" placeholder="请输入手机号"/>'
				  +'</p>'
				  +'<p class="inputp">'
				  +'<input name="username" id="username" type="hidden" class="logininput user" autocomplete="off" value="" placeholder="请输入手机号"/>'
				  +'</p>'
				  +'<p class="inputp">'
				  +'<input name="password" id="password" type="hidden" class="logininput pass" autocomplete="off" value="" placeholder="请输入密码"/>'
				  +'</p>'
				  +'<p class="inputp">'
				  +'<input name="imgCode" id="imgCode" type="text" class="inputyanzheng yz" value="" placeholder="请输入验证码"/>'
				  /* +'<a href="javascript:void(0);" onclick="mobileLogin()" class="yzhuan">发送验证码</a>' */
				  +'<input type="button" id="sendCode" class="loginbtn" onclick="mobileLogin()" style="height:48px;width: 120px;margin-left: 69px;" value="发送验证码">'
				  +'<div class="cls"></div>'
				  +'</p>'
				  +'<p class="wangji">'
				  +'<a href="/sso/login/findpwd" target="_blank" class="findwpd">忘记密码？</a>'
				  +'<a href="/sso/userRegist/register?userType=gtk&ReturnUrl=" target="_blank" style="float:right;">还没有账号？立即注册 </a>'
				  +'<div class="cls"></div>'
				  +'</p>'
				  +'<input type="button" class="loginbtn" onclick="javascript:login1();" value="登 录"/>';
			$("#loginImation").html(html);
			$("#changeLogin").show();
			$("#changeMobileLogin").hide();
			
		}
		
		function changeLogin(){
			$("#loginImation").empty();
			var html='<p class="inputp">'
				+'<input name="username" id="username" type="text" class="logininput user" autocomplete="off" value="" placeholder="请输入用户名"/>'
				+'</p>'
				+'<p class="inputp">'
				+'<input name="password" id="password" type="password" class="logininput pass" autocomplete="off" value="" placeholder="请输入密码"/>'
				+'</p>'
				+'<p class="inputp">'
				+'<input name="imgCode" id="imgCode" type="text" class="inputyanzheng yz" value="" placeholder="请输入验证码"/>'
				+'<div class="yz_pic"><img class="yzimg" src="/sso/currency/getvalidateImgCode/login?height=30&width=100" onclick="changeValidateCode()"></div>'
				+'<a href="javascript:void(0);" onclick="changeValidateCode()" class="yzhuan">换一个</a>'
				+'<div class="cls"></div>'
				+'</p>'
				+'<p class="wangji">'
				+'<a href="/sso/login/findpwd" target="_blank" class="findwpd">忘记密码？</a>'
				+'<a href="/sso/userRegist/register?userType=gtk&ReturnUrl=" target="_blank" style="float:right;">还没有账号？立即注册 </a>'
				+'<div class="cls"></div>'
				+'</p>'
				+'<input type="button" class="loginbtn" onclick="javascript:login();" value="登 录"/>';
			$("#loginImation").html(html);
			changeValidateCode();
			$("#changeLogin").hide();
			$("#changeMobileLogin").show();
		}
		function login(){
			var username = $("#username").val();
			var password = $("#password").val();
			out.println(username)
            out.println(password)
			if (username == null || trim(username) == "") {
				alert("请输入登录账户");
				$("#username").focus();
				return;
			}
			if (password == null || trim(password) == "") {
				alert("请输入登录的密码");
				$("#pwd").focus();
				return;
			}
			
			var imgCode = $("#imgCode").val();
			if (imgCode != undefined && imgCode.length > 0) {
				var curWwwPath = window.document.location.href;
				var pathName = window.document.location.pathname;
				var localhostPaht = curWwwPath.substring(0, curWwwPath
						.indexOf(window.document.location.pathname))
						+ pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
				$(".loginbtn").attr("disabled", true);
				$.post(localhostPaht + "/currency/validateImgCode/login", 
						{code : imgCode}, 
						function(data) {
							if (data && Boolean(data)) {
								$("#login_form").submit();
							} else {
								$(".loginbtn").attr("disabled", false);
								alert("登录验证码不正确");
								changeValidateCode();
							}
		
					});
			} else {
				$(".loginbtn").attr("disabled", false);
				alert("请输入登录验证码");
			}
		}
		function login1(){
			var username = $("#username1").val();

			 if (username == null || trim(username) == "") {
				 alert("请输入登录账户");
				 $("#username1").focus();
				//swalShow("消息提示", "请输入登录账户", "error", $("#username1"));
				return;
			}
			var imgCode = $("#imgCode").val();
			if (imgCode != undefined && imgCode.length > 0) {
				
								$("#password").val(imgCode);
								var a = $("#username").val();
								$("#username").val(username);
								$("#modelLogin").val("1");
								$("#login_form").submit();
							
			} else {
				alert("请输入登录验证码");
				$("input[name='imgCode']").focus();
				//swalShow("消息提示", "请输入登录验证码", "error", $("input[name='imgCode']"));
			}
		}
		
		
		function changeit(type){
			if(type == 1){
				$("#computer").show();
				$("#erwei").hide();
			}
			if(type == 0){
				$("#computer").hide();
				$("#erwei").show();
			}
		}
		function closePage(){
			document.getElementById("mains").style.display="none"
		}
	</script>
    
    
</head>

<body onkeypress="if (event.keyCode == 13)login();">
<div class="HB2019_NewZ_bottomfloat_adv" id="mains">
	<div class="a_close" onclick="closePage()">x</div>
	<div class="main">
		<div class="aa">关于澄清网络相关不实信息的声明</div>
		<div class="txt">
			<p>针对近日社会公众关注的“新东方精品课程可免费通过国家数字图书馆访问”等信息，国家图书馆特声明如下：</p>
			<br />
			<p>我馆从未收到任何机构和个人捐赠的“新东方精品课程”资源。目前我馆网站上提供服务的“新东方多媒体学习库”资源，是我馆2008年购买的商业数据库，此后我馆每年根据经费情况陆续购买新的课程资源，并免费向公众提供服务。根据我馆与该数据库运营商北京新东方迅程网络科技股份有限公司的协议，该数据库只通过我馆提供局域网和远程访问服务，不能提供移动（APP）服务。在该数据库使用过程中，数据库运营商根据双方协商曾提供“新概念英语青少版”等资源的短时试用，试用期满后运营商即关闭试用模块服务。我馆已购买的课程资源一直提供访问服务。</p>
			<br />
			<p>我馆对网络不实信息给广大读者造成的困扰深表遗憾。由于网络不实信息导致我馆网站和国家数字图书馆APP瞬间访问量剧增，给读者正常访问带来不便，敬请谅解。</p>
			<br />
			<p>感谢广大社会公众对国家图书馆的关心与支持，我馆将继续做好各项服务，努力满足广大读者需求。</p>
			<br />
			<p>特此声明。</p>
			<p class="right">国家图书馆</p>
			<p class="right">2022年1月26日</p>
		</div>
	</div>
</div>
	<div class="loginbox">
	   <div class="loginqiehuan"><img src="/sso/image/erwei1.png" onclick="changeit(1)"/></div>
	   <div class="loginlogo"><img src="/sso/image/loginlogo.png" /></div>
	   <div id="erwei" style="display:none">
	       <div class="erwei_img">
			<iframe id="iframePage" src="" frameborder="0" scrolling="no" target="_parent"></iframe>
	       
	       </div>		
	   </div>
	  <div id="computer" >
	  <div class="loginqiehuan"><img src="/sso/image/erwei.png" onclick="changeit(0)" class="code"></div>
	   <form action="/sso/login/reader_user_comein" id="login_form" method="post" >
	   		<div align="right">
	   			<a href="javascript:void(0);" id="changeMobileLogin" onclick="changeMobileLogin()" class="yzhuan">手机快速登录</a>
	   			<a href="javascript:void(0);" id="changeLogin" onclick="changeLogin()" class="yzhuan" style="display:none;">常规登录</a>
	   		</div>
		   <p class="inputp">
			  <input name="username" id="username" type="text" class="logininput user" value="" placeholder="请输入用户名"/>
		   </p>
		   <p class="inputp">
		      <input name="password" id="password" type="password" class="logininput pass" value="" placeholder="请输入密码"/>
		   </p>
		   <p class="inputp">
		      <input name="imgCode" id="imgCode" type="text" class="inputyanzheng yz" value="" placeholder="请输入验证码"/>
			  <div class="yz_pic"><img class="yzimg" src="/sso/currency/getvalidateImgCode/login?height=30&width=100" onclick="changeValidateCode()"></div>
			  <a href="javascript:void(0);" onclick="changeValidateCode()" class="yzhuan">换一个</a>
		   <div class="cls"></div>
		   </p>
		   
		   <p class="wangji">
		      <a href="/sso/login/findpwd?returnUrl=http://read.nlc.cn" target="_blank" class="findwpd">忘记密码？</a>
			  <a href="/sso/userRegist/toRegisteUser" target="_blank" style="float:right;">还没有账号？立即注册 </a>
		   <div class="cls"></div>
		   </p>
		   <input type="button" class="loginbtn" onclick="javascript:login();" value="登 录"/>
		   <br>
		   <br>
		   <div style="font-size:14px;text-align:center;">
		            建议使用IE内核浏览器，Google、火狐等浏览器登录异常，请参照<a href="https://sso1.nlc.cn/sso/fonts/nlc-help.html" target="_blank">在线帮助</a>。
		   </div>
		   <div class="third" style="margin-left:75px;">
		      <span>第三方登录</span>
			  <a href="javascript:void(0)" onclick = "thirdLogin('8')"><img src="/sso/image/qq.png" /></a>
			  <a href="javascript:void(0)" onclick = "thirdLogin('9')"><img src="/sso/image/weixin.png" /></a>
			  <a href="javascript:void(0)" onclick = "thirdLogin('10')"><img src="/sso/image/weibo.png" /></a>
		   </div>
		   <input name="loginmode" type="hidden" value="">
		   <input name="action" type="hidden" value=>
		   <input type="hidden" id="loginType" name="logintype" value="0">
		   <input type="hidden" id="paramUrl" name="paramUrl" value="http://read.nlc.cn/user/index" />  
		   <input type="hidden" id="redirectUrl" name="redirectUrl" value="https://sso1.nlc.cn/sso/jsp/mylib-login.jsp" />  
		   <input type="hidden" id="appId" name="appId" value="90037" />   
		   <input type="hidden" id="redflag" name="redflag" value="" />   
	   </form>
	   </div>
	</div>
</body>
</html>
