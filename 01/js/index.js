

$(function(){
	$('.tabs ul li').click(function(){
		$(this).addClass('active1').siblings().removeClass('active1');
		$('.tabs-content>div:eq('+$(this).index()+')').show().siblings().hide();	
	})
	
	$('.five-days div').click(function(){
		$(this).addClass('active2').siblings().removeClass('active2');
		$('.five-content>div:eq('+$(this).index()+')').show().siblings().hide();
		if($(this).hasClass('fist')){
			var src='img/sakura.png';
			var bg='linear-gradient(rgb(101,150,237),rgb(159,220,231))';
			dele();
			d(src,bg,6,3,0);
		}
		if($(this).hasClass('second')){
			var src='img/rain.png';
			var bg='linear-gradient(rgb(205,205,205),rgb(139,139,139))';
			dele();
			d(src,bg,3,0,0);
		}
		if($(this).hasClass('three')){
			var src='img/rain.png';
			var bg='linear-gradient(rgb(186,186,186),rgb(96,96,96))';
			time=0;
			dele();
			d(src,bg,6,0,0);
		}
		if($(this).hasClass('fourth')){
			src='';
			var bg='linear-gradient(rgb(223,223,223),rgb(181,181,181))';
			time=0;
			dele();
			d(src,bg,3,0,0);
		}
		if($(this).hasClass('fifth')){
			var src='img/snow.png';
			var bg='linear-gradient(rgb(154,154,154),rgb(91,91,91))';
			time=0;
			dele();
			d(src,bg,4,0,0);
		}

	})
})

function dele() {
	var image = document.getElementsByClassName("like");
	var content=document.getElementsByClassName('content')[0];
	for(var i =image.length-1;i>=0;i--){
		content.removeChild(image[i]);
	}
}


function d(src,bg,topd,rightd,time){
	
	var width = document.documentElement.clientWidth;
	var height = document.documentElement.clientHeight;
	var content=document.getElementsByClassName('content')[0];
	var myObj=new Array();
	
	content.style.background=bg;
	
	
		function Flake(){
			var flake = document.createElement('img');
			flake.setAttribute("class","like");
			var right = width * Math.random();
			var top = height * Math.random();
			
			flake.src = src;
			flake.style.transform = 'scale(' + (Math.random() * 0.2 + 0.2) + ')';
			flake.style.position = 'absolute';
			flake.style.right = right + 'px';
			flake.style.top = top + 'px';
			

				content.appendChild(flake);

			function down(){
				top = top > height? -100 : top + topd * Math.random();
				right = right > width ? -100 : right + rightd * Math.random();
				flake.style.top = top + 'px';
				flake.style.right = right + 'px';
			}
			
			setInterval(down, 50);
		}
		
		
		check(time);
		
		function check(time){
			for(var k=0;k<2;k++){
				if(time==0){
					for(var i = 0;i < 50;i++){
						myObj[i]=new Flake();
					}
					time++;
				}
				else{
					for(var i = 0;i < 50;i++){
						delete myObj[i];
					}
				}
			}
			
			

		}


		
}



