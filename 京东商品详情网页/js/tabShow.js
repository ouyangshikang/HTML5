/**
 * Created by ASUS on 2017/1/12.
 */
$(document).ready(function(){
    $("#mainShow>.tab>li").click(function(){
        $(this).parent().find("li.show").addClass("hide").removeClass("show");
        $(this).addClass("show").removeClass("hide");
        var parentEl = $(this).parents("#mainShow");

        parentEl.find("div>ul.ulShow").addClass("ulHide").removeClass("ulShow");
        var arr = parentEl.find("ul.tab>li");
        parentEl.find("div>ul:eq("+$.inArray(this,arr)+")").addClass("ulShow").removeClass("ulHide");

    })
})
