$(document).ready(function() {
    $(".type-item").click(function(event) {
        $(this).addClass('active').siblings().removeClass('active')
    });
    $('.next-btn').click(function(event) {
    	/* Act on the event */
    	if($('.type-item').eq(0).hasClass('active')){
    	    window.location.href = 'registerPersonal.html'
    	} else if($('.type-item').eq(1).hasClass('active')){
    	    window.location.href = 'registerEnterprise.html'
    	} else {
    	    window.location.href = 'registerOrganization.html'

    	}
    });
});