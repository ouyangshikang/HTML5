var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
var back=document.getElementsByClassName('back')[0];
back.style.overflow='hidden';
function Flake(count){
	var flake = document.createElement('img');
	flake.setAttribute("class","like");
	var left = width * Math.random();
	var top = height * Math.random();

	if(count==1)
		flake.src='images/mine/sakura.png';
	if(count==2 || count==3)
		flake.src='images/mine/rain.png';
	if(count==5)
		flake.src='images/mine/snow.png';
	if(count==2 || count==3){
		flake.style.width = (10 * Math.random() + 5) + 'px';
	}
	else
		flake.style.width = (20 * Math.random() + 10) + 'px';

	flake.style.position='absolute';
	flake.style.left=left + 'px';
	flake.style.top=top + 'px';
	document.body.appendChild(flake);
	
	function down(){
		top = top > height? -100 : top + 6 * Math.random();
		left = left > width ? -100 : left + 3 * Math.random();
		flake.style.top = top + 'px';
		flake.style.left = left + 'px';
	}
	setInterval(down, 50);
}

function dele() {
	var image = document.getElementsByClassName("like");
	for(var i =image.length-1;i>=0;i--){
		document.body.removeChild(image[i]);
	}
	for(var j=1;j<=5;j++){
		document.getElementsByClassName('all'+j)[0].style.display="none";
		document.getElementsByClassName('part'+j)[0].classList.remove('color');
	}
}

function start(){
	document.getElementsByClassName('picture2')[0].style.display="none";
	document.getElementsByClassName('picture3')[0].style.display="none";
	document.getElementsByClassName('picture4')[0].style.display="none";
	document.getElementsByClassName('picture5')[0].style.display="none";
}
function page(n){
	var i=1;
	for(i;i<=5;i++)
	{
		if(i!=n)
		{
			document.getElementsByClassName('picture'+i)[0].style.display="none";
			document.getElementsByClassName('catalog'+i)[0].classList.remove('color');
		}
		else{
			document.getElementsByClassName('picture'+i)[0].style.display="";
			document.getElementsByClassName('catalog'+i)[0].classList.add('color');
		}
	}
}
function start1(){
	document.getElementsByClassName('all2')[0].style.display="none";
	document.getElementsByClassName('all3')[0].style.display="none";
	document.getElementsByClassName('all4')[0].style.display="none";
	document.getElementsByClassName('all5')[0].style.display="none";
}
function down(n){
	var j=1;
	for(j;j<=5;j++)
	{
		if(j!=n)
		{
			 document.getElementsByClassName('all'+j)[0].style.display="none";
			 document.getElementsByClassName('part'+j)[0].classList.remove('color');
		}
		else{
			dele();
			document.getElementsByClassName('all'+j)[0].style.display="";
			document.getElementsByClassName('part'+j)[0].classList.add('color');
			back.style.backgroundImage="url("+j+".jpg)";
			for(var j=0;j<100;j++){
				Flake(n);
			}
		}
	}
}