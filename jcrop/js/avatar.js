 $(document).ready(function() {
     //
     var nativeImgW, //图像原宽度
         nativeImgH, //图像原高度
         viewImgW, //图像缩放后宽度
         viewImgH, //图像缩放后高度
         imgX1, //裁剪左上角x坐标
         imgY1, //裁剪左上角y坐标
         imgX2, //裁剪右下角x坐标
         imgY2; //裁剪右下角y坐标
     // 显示上传头像遮罩层
     $("#avatarUpLoad").click(function(event) {
         $('.avatar-wrap').show();
     });
     var jcrop_api;
     // 隐藏上传头像遮罩层
     $(".avatar-cancle").click(function(event) {
        if(jcrop_api){
            jcrop_api.destroy();
        }
         $("#avatarImgInput").val('');
         $('.avatar-wrap').hide();
         $(".avatar-upload").show();
         $("#avatarImg").attr('src', '').hide();
         $(".avatar-content").css({ 'padding-top': 1, 'padding-left': 0 });
     });
     $('#avatarSubmit').click(function(event) {
         $("#avatarImgInput").val('');
     });
     $('#avatarImgInput').on('change', function(event) {
         loadImg(event);
     });

     function showCoords(c) {
         // console.log(c.x); //得到选中区域左上角横坐标 
         // console.log(c.y); //得到选中区域左上角纵坐标 
         // console.log(c.x2); //得到选中区域右下角横坐标 
         // console.log(c.y2); //得到选中区域右下角纵坐标 
         // console.log(c.w); //得到选中区域的宽度 
         // console.log(c.h); //得到选中区域的高度
         imgX1 = c.x;
         imgY1 = c.y;
         imgX2 = c.x2;
         imgY2 = c.y2;
         viewImgW = jcrop_api.getBounds()[0]
         viewImgH = jcrop_api.getBounds()[1]

     }
     // 读取input图片信息
     function loadImg(event) {
         var file = event.target.files[0];
         var size = file.size; 
         if(size>1024*2*1024){
            alert('图片大小不能超过2M')
            return
         }
         var reader = new FileReader();
         var imgFile;
         reader.onload = function(e) {

             imgFile = e.target.result;
             $("#avatarImg").attr('src', imgFile);
             $("#avatarImg").bind('load', function(event) {
                 avatarImgCss();
             });
             $(".avatar-upload").hide();
             $("#avatarImg").show();
         };
         reader.readAsDataURL(file);
     }
     //设置上传的头像图片裁剪前宽高
     function avatarImgCss() {
         var sizeW = 400;
         var sizeH = 400;
         var imgW = $("#avatarImg").width();
         var imgH = $("#avatarImg").height();
         nativeImgW = imgW;
         nativeImgH = imgH;
         var imgLeft = -imgW / 2;
         var imgTop = -imgH / 2;
         if (imgW > imgH) {
             $(".avatar-img").css({ 'width': '100%', 'height': 'auto' })

         } else {
             $(".avatar-img").css({ 'width': 'auto', 'height': '100%' })
         }
         var imgLeft = (sizeW - $("#avatarImg").width()) / 2;
         var imgTop = (sizeH - $("#avatarImg").height()) / 2;
         if (imgW > imgH) {
             $(".avatar-content").css({ 'padding-top': imgTop })
         } else {
             $(".avatar-content").css({ 'padding-left': imgLeft })
         }
         $(".avatar-upload").hide();
         //这里是坑,必须要在初始化css里 用定时器,才能保证裁剪的图样式正确
         setTimeout(JcropInit, 30)

         function JcropInit() {
             $("#avatarImg").Jcrop({
                 onSelect: showCoords,
                 aspectRatio: 1 / 1,
                 bgColor: 'transparent'
             }, function() {
                 jcrop_api = this;
             });
         }
     }
     $("#avatarSubmit").click(function(event) {
        // 点击按钮提交裁剪图片 
        // 参数说明
         // nativeImgW, //图像原宽度
         // nativeImgH, //图像原高度
         // viewImgW, //图像缩放后宽度
         // viewImgH, //图像缩放后高度
         // imgX1, //裁剪左上角x坐标
         // imgY1, //裁剪左上角y坐标
         // imgX2, //裁剪右下角x坐标
         // imgY2; //裁剪右下角y坐标

     });
 });