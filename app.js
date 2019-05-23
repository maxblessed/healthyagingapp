(function(){
var count=0;
var num=25;
var f=0;
var compare=document.getElementsByClassName('img').length-1;
var ball=document.getElementsByClassName('ball');
var imgcont=document.getElementById('imgcont')
ball[0].style.backgroundColor='#fff';

function slideShow(){
	for (var i =0; i<ball.length; i++) {
		ball[i].style.backgroundColor=''
	}


	 if(count<compare){
			 count++
			
	}else if(count===compare&&count!==0){
							compare=--count
							if(compare===0){
								compare=3;
								count=0;
							}
		 } 
		 
		f =count*num
		ball[count].style.backgroundColor='#fff';
		ball[count].style.transition='backgroundColor 1s'
imgcont.style.transform=`translateX(${-f}%)`;
imgcont.style.transition='transform 1s';

 setTimeout(()=>{
		 
		window.requestAnimationFrame(slideShow);
 },8000)    

}

setTimeout(()=>{
		 
	window.requestAnimationFrame(slideShow);
},8000) 

// sliding in review logic
var testimony1=document.getElementById('TESTIMONY');
var review=window.innerHeight+testimony1.scrollTop+testimony1.scrollHeight;
var testimony=document.getElementsByClassName('test');

for(let i=0;i<testimony.length; i++){
  testimony[i].style.transform='translateX(-500%)';
}  
window.onscroll=function(){
if(document.body.scrollTop > review || document.documentElement.scrollTop >review){
	for(let i=0;i<testimony.length; i++){
	  testimony[i].style.transition=`transform 0.5s linear `;
	  
	 testimony[i].style.transform='translateX(0%)';
	}
  }

}

























}())