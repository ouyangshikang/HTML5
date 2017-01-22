/**
 * Created by ASUS on 2017/1/12.
 */
window.onload=function () {
            var chooseCount =document.getElementById("chooseCount");
            chooseCount.onclick = function (e) {
            var e = e || window.event;
            var el = e.srcElement;
            var cls = el.className;
            var input = this.getElementsByTagName('input')[0];
            var value = parseInt(input.value);
            var reduce = this.getElementsByTagName("span")[1];
            switch (cls) {
                case 'add':
                    input.value = value + 1;
                    reduce.innerHTML="-";
                    break;
                case 'reduce':
                    if (value > 1) {
                        input.value = value - 1;
                    }
                    if(input.value<=1){//如果数目只有一个，把-号去掉
                        reduce.innerHTML="";
                    }
                    break;
            }
        }
}