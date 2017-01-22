function show(count){
	var n=count;
	var div = document.getElementsByClassName('btwo_one')[count];
	var img = document.getElementsByClassName('bthree')[0];
	var fiveday=document.getElementsByClassName('fiveday')[0];
	var oneday=document.getElementsByClassName('oneday')[0];
	if(count==0){
		div.style.backgroundColor='blanchedalmond';
		img.style.backgroundImage='url(images/3C4A.tmp.jpg)';
		img.style.height='240px';
		img.style.visibility='visible';
		fiveday.style.visibility='hidden';
		oneday.style.visibility='hidden';
	}
	if(count==1){
		div.style.backgroundColor='blanchedalmond';
		img.style.visibility='hidden';
		fiveday.style.visibility='visible';
		oneday.style.visibility='visible';
	}
	if(count==2){
		div.style.backgroundColor='blanchedalmond';
		img.style.backgroundImage='url(images/85CA.tmp.jpg)';
		img.style.height='350px'
		img.style.visibility='visible';
		fiveday.style.visibility='hidden';
		oneday.style.visibility='hidden';
	}
	if(count==3){
		div.style.backgroundColor='blanchedalmond';
		img.style.backgroundImage='url(images/57AB.tmp.jpg)';
		img.style.height='400px'
		img.style.visibility='visible';
		fiveday.style.visibility='hidden';
		oneday.style.visibility='hidden';
	}
	if(count==4){
		div.style.backgroundColor='blanchedalmond';
		img.style.backgroundImage='url(images/36C5.tmp.jpg)';
		img.style.height='400px'
		img.style.visibility='visible';
		fiveday.style.visibility='hidden';
		oneday.style.visibility='hidden';
	}
	
	for(var i=0;i<5;i++){
		if(i!=count)
		document.getElementsByClassName('btwo_one')[i].style.backgroundColor='cadetblue';
	}
	
}



var body=document.getElementsByClassName('bottom')[0];
body.style.backgroundColor= '#333333';
body.style.overflow='hidden';
var width=document.documentElement.clientWidth;
var heigth= document.documentElement.clientHeight;

function Flake(count){
	var flake = document.createElement('img');
	flake.setAttribute("class","like");
	var left=width*Math.random();
	var top=heigth*Math.random();
	
	if(count==0)
	flake.src='images/mine/sakura.png';
	if(count==1 || count==2)
	flake.src='images/mine/rain.png';
	if(count==4)
	flake.src='images/mine/snow.png';
	if(count==1 || count==2){
		flake.style.width = (10 * Math.random() + 5) + 'px';
	}
	else
		flake.style.width = (20 * Math.random() + 10) + 'px';

	flake.style.position='absolute';
	flake.style.left=left + 'px';
	flake.style.top=top + 'px';
	document.body.appendChild(flake);
	//用来改变一次雪花的下落位置
	function down(){
		if(count==0 || count==4){
			left=left + 1 * Math.random();
		}
		if(count==2 || count==4){
			top=top + 12 * Math.random();
		}
		else
			top=top + 5 * Math.random();
		if(left > width){
			left=-100;
		}
		if(top>heigth){
			top=110;
		}
		flake.style.left=left + 'px';
		flake.style.top=top + 'px';

	}
	var ss= setInterval(down,50);
}

function dele() {
	var image = document.getElementsByClassName("like");
	 for(var i =image.length-1;i>=0;i--){
		 document.body.removeChild(image[i]);
	 }
}

function showTo(count){
	var p1=document.getElementsByClassName('onedayp1')[0];
	var p2=document.getElementsByClassName('onedayp2')[0];
	var p3=document.getElementsByClassName('onedayp3')[0];
	var img=document.getElementsByClassName('onedayimg')[0];

	if(count==0){
		dele();
		p1.innerText='星期四';
		p2.innerText='晴';
		p3.innerText='25℃/16℃';
		img.src='images/days/qing.png';
		body.style.backgroundImage='url(images/1.jpg)';
		 // document.body.removeChild("img");

		for(var j=0;j<100;j++)
			Flake(count);

	}
	if(count==1){
		dele();
		p1.innerText='星期五';
		p2.innerText='小雨';
		p3.innerText='18℃/12℃';
		img.src='images/days/xiaoyu.png';
		body.style.backgroundImage='url(images/3.jpg)';
		 // document.body.removeChild("img");

		for(var j=0;j<100;j++)
			Flake(count);


	}
	if(count==2){
		dele();
		p1.innerText='星期六';
		p2.innerText='大雨';
		p3.innerText='12℃/7℃';
		img.src='images/days/dayu.png';
		body.style.backgroundImage='url(images/2.jpg)';
		// document.body.removeChild("img");


		for(var j=0;j<100;j++)
			Flake(count);


	}
	if(count==3){
		dele();
		p1.innerText='星期天';
		p2.innerText='阴天';
		p3.innerText='8℃/2℃';
		img.src='images/days/yin.png';
		body.style.backgroundImage='url(images/4.png)';
		// document.body.removeChild("img");

	}
	if(count==4){
		dele();
		p1.innerText='星期一';
		p2.innerText='大雪';
		p3.innerText='-2℃/-10℃';
		img.src='images/days/daxue.png';
		body.style.backgroundImage='url(images/5.jpg)';
		// document.body.removeChild("img");


		 for(var j=0;j<100;j++)
		Flake(count);


	}
}
