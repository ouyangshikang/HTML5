/**
 * Created by ASUS on 2017/1/15.
 */
(function (win,doc,$) {

    var SongPlus = function () {};
    SongPlus.prototype = {
        initEvent:function () {
            alert("Event");
        }
    };
    SongPlus.init=function () {//静态对象/方法
        var _this = new this;
    };
    win["songplus"] = SongPlus;
})(window,document,jQuery);