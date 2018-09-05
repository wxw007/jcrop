document.write("<script language=javascript src='/js/jquery-3.1.1.min.js'></script>");
document.write("<script language=javascript src='/js/layer/layer.js'></script>");

//提示信息
function tipMsg(msg){
		layer.alert(msg, {
			title: ''
			,closeBtn: 0
			,shadeClose: true
			,anim: 4 //动画类型
		}); 		
}

/*本函数用来判断是不是ie*/
function isIe(){
    var strs=navigator.userAgent;
    var num=strs.indexOf("MSIE");/*先判断是不是ie*/
    if(num!=-1){
        num=parseFloat(strs.substr(30,5));
        if(num<10){
            var div=$("<div>该浏览器版本太低，会影响页面使用效果，请使用高版本浏览器</div>");
            div.css({
                "position":"fixed",
                "top":"0",
                "left":"0",
                "right":"0",
                "margin":"0 auto",
                "width":"500px",
                "height":"50px",
                "lineHeight":"50px",
                "textAlign":"center",
                "backgroundColor":"rgba(255,255,255,.8)",
                "border-bottom-left-radius":"10px",
                "border-bottom-right-radius":"10px"
            });
            div.appendTo($("body"));
            console.log("该浏览器版本太低，会影响页面使用效果，请使用高版本浏览器");
        }
    }
}
isIe();