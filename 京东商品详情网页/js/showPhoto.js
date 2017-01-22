/**
 * Created by ASUS on 2017/1/9.
 */
$(document).ready(function(){
    $("#mask").add("#big").hide();
     $("#showPhoto").hover(function(){
         $("#mask").add("#big").show();
        $("#showPhoto").mousemove(function(e){
             var x1=e.pageX;
             var x2=$("#showPhoto").offset().left;
             var x=x1-x2-87;
            if(x<0){
                 x=0;
            }
            if(x>175){
                 x=175;
            }
             var y1=e.pageY;
             var y2=$("#showPhoto").offset().top;
            var y=y1-y2-87;
            if(y<0){
                 y=0;
             }
            if(y>175){
                y=175;
            }
             $("#mask").css({"left":x+"px","top":y+"px"});
             $("#big").css({"background-position":-2.299*x+"px "+(-2.299*y)+"px"});
         })

     },function(){
         $("#mask").add("#big").hide();
     });


     $("#showPhotoList .photoList li img").hover(function () {
        var url = $("#showPhotoList .photoList li img").index(this)+1;
        $("#showPhoto").css("background","url(img/00"+url+".jpg) no-repeat");
         $("#big").css("background","url(img/0"+url+".jpg) no-repeat");
         $("#showPhotoList .photoList").find(".flag").removeClass();
         $(this).addClass("flag");
     },function () {
             // $(this).css("border","none");
    })


    $("#size li").click(function () {
         $("#size").find(".tag").removeClass().css({"border":"1px solid rgb(204, 204, 204)","padding":"4px 6px"});
        $(this).addClass("tag");
        $(this).css({"border":"2px solid #e4393c","padding":"3px 5px"});
    })
    $("#chooseType li").click(function () {
         $("#chooseType").find(".tag").removeClass().css({"border":"1px solid rgb(204, 204, 204)","padding":"4px 6px"});
        $(this).addClass("tag");
        $(this).css({"border":"2px solid #e4393c","padding":"3px 5px"});
    })

});