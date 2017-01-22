/**
 * Created by ASUS on 2017/1/5.
 */
$(function () {
    $(".logo .logo_text").mousemove(function () {
        $(".logo_p2").html("前端工程师");
    });
    $(".logo .logo_text").mouseout(function () {
        $(".logo_p2").html("个人简历");
    })
});