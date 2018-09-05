$(document).ready(function() {
//退出登录按钮显示S

	$(".user-info").hover(function() {
		$(this).find('.login-out').stop().fadeIn()
	}, function() {
		$(this).find('.login-out').stop().fadeOut()
	});
//退出登录按钮显示E

});