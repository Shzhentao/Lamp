// 登录常量
var LOGIN_USERNAME_ID = ".form > .m-account > * > #username";
var LOGIN_PASSWORD_ID = ".form > .m-account > * > #password";
var LOGIN_CAPTCHA_ID = ".form > .m-account > * > #captcha";
var LOGIN_ACCOUNT_ID = ".form > .m-phone > * > #username";
var LOGIN_DYNAMIC_ID = ".form > .m-phone > * > #dynamicCode";
var LOGIN_DYNAMIC_CAPTCHA_ID = ".form > .m-phone > * > #captcha";
var LOGIN_SUBMIT_ID = "#login_submit";
var LOGIN_SUBMIT_BACKGROUND_COLOR = "";
var QR_LOGIN_ENABLED = 0;

/**
 * 1. 加载的时候，根据情况判断是否显示验证码，如果需要，重新加载验证码
 * 2. 用户名失去焦点的时候，发请求校验需不需要验证码
 * 3. 如果需要验证码，显示验证码输入框，重新加载验证码
 * 4. 如果不需要验证码，清空验证码输入框，隐藏验证码区域
 * 5. 登录失败的时候，判断是否需要验证码，如果需要，重新验证码
 */
$(function() {
    if(service && service != ''){
		//FORM表单
		utils.setUrlParam("pwdFromId","?service",encodeURIComponent(service));
		utils.setUrlParam("phoneFromId","?service",encodeURIComponent(service));
		utils.setUrlParam("loginFromId","?service",encodeURIComponent(service));
		//兼容性登录
		utils.setUrlParam("commonLoginA","&service",encodeURIComponent(service));
		//二维码登录
		utils.setUrlParam("qrCodeA","&service",encodeURIComponent(service));
		//忘记密码帐号激活
		utils.setUrlParam("retrievePassId","?service",encodeURIComponent(service));
		utils.setUrlParam("activationAccountId","?service",encodeURIComponent(service));
		//切换登录方式
		utils.setUrlParam("dynamicLogin_a","&service",encodeURIComponent(service));
		utils.setUrlParam("fidoLogin_a","&service",encodeURIComponent(service));
		utils.setUrlParam("userNameLogin_a","&service",encodeURIComponent(service));
		//联合登录
		utils.setUrlParam("combinedLogin_a_weiBo","&success",encodeURIComponent(service));
		utils.setUrlParam("combinedLogin_a_weiXin","&success",encodeURIComponent(service));
		utils.setUrlParam("combinedLogin_a_qq","&success",encodeURIComponent(service));
		//联合认证插件化
        setUrlForSuccessByClass(service);
	}
	
	//检查是否支持fido
    var openFlag = window.localStorage.getItem("anonbiometricso");
    var fidoUserId = window.localStorage.getItem("anonbiometricsu");
    showTabHeadAndDiv(openFlag,fidoUserId);

    //失去焦点判断是否需要验证码
    $(LOGIN_USERNAME_ID).focusout(function (e) {
        checkNeedCaptcha();
    });
    
  //二维码和pc切换
    $('.device-switch').click(function () {
        var flag = $(this).attr("flag");

        if (flag == "0") {
            $(this).find("img").attr('src', './static/web/images/pc.png');
            $(this).attr("flag", "1");
            $('.login-pc').addClass('hide');
            $('.login-qrcode').removeClass('hide');
        } else {
            $(this).find("img").attr('src', './static/web/images/qcode.png');
            $(this).attr("flag", "0");
            $('.login-pc').removeClass('hide');
            $('.login-qrcode').addClass('hide');
        }

    })

    //隐藏显示密码
    $('.input_eye').click(function () {
        var $lpassword = $('#password');
        if ($(this).hasClass('eyehide')) {
            $(this).removeClass('eyehide').addClass('eyeshow');
            $lpassword.prop('type', 'text');
        } else {
            $(this).removeClass('eyeshow').addClass('eyehide');
            $lpassword.prop('type', 'password');
        }
    })

    //键盘Enter提交
    $("body").on('keyup',function(event) {
        if(event.keyCode == 13){
            $(LOGIN_SUBMIT_ID).click();
        }
    });
    $(LOGIN_SUBMIT_ID).click(function () {
    	utils.cleanRequire($(".loginFromClass"), $("#showErrorTip"));
    	if(checkForm()){
            var cllt = $("#cllt").val();
    	    if(needCaptcha && captchaSwitch == "2" && cllt == "userNameLogin"){
                createSliderCaptcha();
            }else{
                $(".loginFromClass").submit();
            }
    	}
    });

    
    //发送手机动态码
    $('.get-code').click(function () {
        if (utils.requireInput($(LOGIN_ACCOUNT_ID),0,100,$("#showErrorTip"),inputMobileTip,$(LOGIN_ACCOUNT_ID).parent())) {
            return;
        }
        if(captchaSwitch == "2"){
            createSliderCaptcha();
        }else{
            getDynamicCode();
        }
    });

	//处理错误信息过长
    utils.showMsg($("#showErrorTip"), $("#showErrorTip").text());

    // 轮播图
    var remarktext = ['演播中心','南大门', '图书馆'];
    var imgSrc = 'cusHit/customStatic/web/images/bg1.jpg';
    $("#idsbg").attr("src", imgSrc);
    setTimeout(function () {
        $(".auth_login_content .main").animate({
            opacity: 1
        })
    }, 1000)
    var num = 1;
    setInterval(function () {
        num++;
        if (num > 4) {
            num = 1;
        }
        $("#idsbg").attr("src", "cusHit/customStatic/web/images/bg" + num + ".jpg");
    }, 180000)
    
    $("#goleft").click(function () {
        num--;
        if (num < 1) {
            num = 4;
        }
        $("#idsbg").attr("src", "cusHit/customStatic/web/images/bg" + num + ".jpg");
    })
    $("#goleft").mouseover(function () {
        $(this).attr("src", "cusHit/customStatic/web/images/leftnavs.png")
    }).mouseout(function () {
        $(this).attr("src", "cusHit/customStatic/web/images/leftnav.png")
    })
    $("#goright").mouseover(function () {
        $(this).attr("src", "cusHit/customStatic/web/images/rightnavs.png")
    }).mouseout(function () {
        $(this).attr("src", "cusHit/customStatic/web/images/rightnav.png")
    })
    $("#goright").click(function () {
        num++;
        if (num > 4) {
            num = 1;
        }
        $("#idsbg").attr("src", "cusHit/customStatic/web/images/bg" + num + ".jpg");
    })

    // 二维码登录
    showQrLogin();
})


/**
 * 登录页选项卡展示
 * @param openFlag
 * @param fidoUserId
 */
function showTabHeadAndDiv(openFlag,fidoUserId){
	$(".login-pc").show();
	// $(".login-qrcode").hide();
    //fido登录是否支持
    if(openFlag!="true" || !openFlag || !fidoUserId){
    	//排除手动url添加type
        if(type=='fidoLogin'){
            proxyLoc(window.location).href=contextPath;
            return;
        }
        $("#fidoLoginSpan").remove();
    }
    //手机动态码登录是否支持
    if(is_dynamicLogin!="true" || !is_dynamicLogin){
    	//排除手动url添加type
        if(type=='dynamicLogin'){
            proxyLoc(window.location).href=contextPath;
            return;
        }
        //不展示 删除span 及 样式调整
        $("#phoneLoginSpan").remove();
    }
    //二维码扫码登录是否支持嵌入
    if(isQrLogin!="true" || !isQrLogin){
    	//排除手动url添加type
        if(type=='qrLogin'){
            proxyLoc(window.location).href=contextPath;
            return;
        }
    	$("#qrLoginSpan").remove();
    }else{
    	$("#qrCodeA").hide();
    }
    $('.tabHead').show();
    // $('.tabHead span').css("width",100/($(".tabHead").children("span").length)+"%");
    $('.tabHead #pwdLoginSpan').css("width","33%");
    
    if((type=='' || !type) && (cllt=='' || !cllt) && openFlag=="true" && fidoUserId!='' && fidoUserId){
    	//如果fido支持，fido登录页为默认
    	$("#fidoLogin_a").addClass("loginFont_a_light");
    	$("#fidoLoginDiv").show();
        $("#pwdLoginDiv").remove();
        $("#phoneLoginDiv").remove();
    }else if(type=='fidoLogin' || cllt == 'fidoLogin'){
        //fido指纹认证登录
        // $("#fidoLoginSpan").addClass("selected_underline");
        $("#pwdLoginSpan").addClass("selected_underline");
        $("#fidoLoginDiv").show();
        $("#pwdLoginDiv").remove();
        $("#phoneLoginDiv").remove();
    }else if(type=='qrLogin'){
        //二维码登录
        showQrLogin();
    }else if(type=='dynamicLogin' || cllt == 'dynamicLogin'){
    	//动态码登录
    	// $("#phoneLoginSpan").addClass("selected_underline");
        $("#pwdLoginSpan").addClass("selected_underline");
        $("#phoneLoginDiv").show();
        $("#pwdLoginDiv").remove();
        $("#fidoLoginDiv").remove();
        reloadCaptcha(true);
    }else{
    	//用户名密码登录
    	$("#pwdLoginSpan").addClass("selected_underline");
        $("#pwdLoginDiv").show();
        $("#phoneLoginDiv").remove();
        $("#fidoLoginDiv").remove();
        checkNeedCaptcha();
    }
    //input禁止自动填入
    reloadInput();
}

//二维码登录
function showQrLogin(){
	QR_LOGIN_ENABLED = 1;
	// $(".tabHead").find("span").removeClass("selected_underline");
	// $("#qrLoginSpan").addClass("selected_underline");
	// $(".login-pc").hide();
	// $(".login-qrcode").show();
	//调用qrcode.js方法获取二维码
	getQrCode();
	// window.history.replaceState(null, null, "?type=qrLogin")
}

// 禁用掉登录按钮
function disableLoginBtn() {
    LOGIN_SUBMIT_BACKGROUND_COLOR = $(LOGIN_SUBMIT_ID).css("background-color");
    // $(LOGIN_SUBMIT_ID).removeAttr("style");
    $(LOGIN_SUBMIT_ID).attr("disabled", true);
}

// 恢复登录按钮
function recoverLoginBtn() {
    $(LOGIN_SUBMIT_ID).css("background-color", LOGIN_SUBMIT_BACKGROUND_COLOR);
    $(LOGIN_SUBMIT_ID).attr("disabled", false);
}

// 登录前校验
function checkForm() {
	var cllt = $("#cllt").val();
    window.alert($("#username").val())
    window.alert($("#password").val())
	if(cllt=='userNameLogin'){
		if(utils.requireInput($(LOGIN_USERNAME_ID),0,100,$("#showErrorTip"),inputUserNameTip,$(LOGIN_USERNAME_ID).parent())
			|| utils.requireInput($(LOGIN_PASSWORD_ID),0,32,$("#showErrorTip"),inputPasswordTip,$(LOGIN_PASSWORD_ID).parent())){
			return;
		}
	    if (needCaptcha && captchaSwitch == "1" && utils.requireInput($(LOGIN_CAPTCHA_ID),0,10,$("#showErrorTip"),inputCodeTip,$(LOGIN_CAPTCHA_ID).parent())) {
	    	return;
	    }
	    $("#saltPassword").val(encryptPassword($(LOGIN_PASSWORD_ID).val(),$("#pwdEncryptSalt").val()));
	    $(LOGIN_PASSWORD_ID).attr("disabled","disabled");
	}else if(cllt=='dynamicLogin'){
		if(utils.requireInput($(LOGIN_ACCOUNT_ID),0,100,$("#showErrorTip"),inputMobileTip,$(LOGIN_ACCOUNT_ID).parent())
			|| utils.requireInput($(LOGIN_DYNAMIC_ID),0,100,$("#showErrorTip"),inputDynamicTip,$(LOGIN_DYNAMIC_ID).parent())){
			return;
		}
	}
    return true;
}

//校验是否需要验证码
function checkNeedCaptcha() {
    var username = $(LOGIN_USERNAME_ID).val().trim();
    if (username == ""){
        return;
    }
    $.ajax(contextPath + "/checkNeedCaptcha.htl", {
        data: {username: username},
        cache: false,
        dataType: "json",
        success: function (data) {
            if (data.isNeed) {
            	needCaptcha = true;
            } else {
            	needCaptcha = false;
            }
            reloadCaptcha(needCaptcha);
        }
    });
}

//重新载入验证码
function reloadCaptcha(isNeed) {
    if (isNeed && captchaSwitch == "1") {
        $("#captchaDiv").show();
        $("#captchaImg").attr("src", contextPath+"/getCaptcha.htl?" + new Date().getTime());
    }else {
    	// 如果不需要验证码，那么清空
        $("#captcha").val("");
        $("#captchaDiv").hide();
    }
}

//发送动态码
function getDynamicCode(){
    if (utils.requireInput($(LOGIN_ACCOUNT_ID),0,100,$("#showErrorTip"),inputMobileTip,$(LOGIN_ACCOUNT_ID).parent())) {
    	return;
    }
    if (captchaSwitch == "1" && utils.requireInput($(LOGIN_DYNAMIC_CAPTCHA_ID),0,100,$("#showErrorTip"),inputCodeTip,$(LOGIN_DYNAMIC_CAPTCHA_ID).parent())) {
    	return;
    }
    
    var mobile = $(LOGIN_ACCOUNT_ID).val();
    var dynamicCaptcha = $(LOGIN_DYNAMIC_CAPTCHA_ID).val();
    $.ajax(contextPath + "/dynamicCode/getDynamicCode.htl", {
        data: {mobile: mobile, captcha: dynamicCaptcha},
        cache: false,
        dataType: "json",
        type: "POST",
        success: function (data) {
            var code = data.code;
            //var mobile = data.mobile;
            if (code == "error") {
            	$(LOGIN_DYNAMIC_CAPTCHA_ID).val('');
            	utils.showMsg($("#showErrorTip"),data.message);
            	reloadCaptcha(true);
            }else if(code == 'captchaError'){
            	$(LOGIN_DYNAMIC_CAPTCHA_ID).val('');
            	utils.showMsg($("#showErrorTip"),data.message);
            	reloadCaptcha(true);
            }else if(code == 'timeExpire'){
            	$(LOGIN_DYNAMIC_CAPTCHA_ID).val('');
            	if (!utils.isEmptyStr(data.time)) {
                    getTimes(data.time);
                }
            	utils.showMsg($("#showErrorTip"),data.message);
            }else if(code == 'success'){
                $("#showErrorTip").empty();
            	utils.showMsg($("#showWarnTip"),data.message, 0);
            	getTimes(120);
            }
        }
    });
}

function setUrlForSuccessByClass(service) {
    var loginPlugins=$(".item .combinedLoginPlugin");
    if(loginPlugins){
        loginPlugins.each(function () {
            $(this).attr("href",$(this).attr("href")+"&success="+encodeURIComponent(service));
        });
    }
    var idsUnions=$(".idsUnion_loginFont_a");
    if(idsUnions){
        idsUnions.each(function () {
            $(this).attr("href",$(this).attr("href")+"&success="+encodeURIComponent(service));
        });
	}
}

//动态码倒计时
function getTimes(time) {
    var getCode = $('.getCodeText');
    if (time == 0) {
    	reloadCaptcha(true);
        time = 120;
        getCode.text("获取验证码");
        getCode.removeClass("disabled");
        $(".get-code").css({"border":"1px solid #0c4af9","pointer-events":"auto"});
        return;
    } else {
        time--;
        getCode.text(time + 's');
        getCode.addClass("disabled");
        $(".get-code").css({"border":"1px solid #9E9E9E","pointer-events":"none"});
    }
    setTimeout(function () {
        getTimes(time);
    }, 1000);
}
//加载滑块验证码
function createSliderCaptcha(){
    $.ajax({
        url: contextPath+"/common/toSliderCaptcha.htl",
        type: 'get',
        data: {},
        success: function (data) {
            $("#captchaDiv").hide();
            $("#sliderCaptchaDiv").html(data);
        }
    })
}
