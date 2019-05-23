(function(){
  var top=document.getElementById('top');
  top.style.opacity='0';

 document.onscroll=function(){
    
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop >300){
      top.style.opacity='1';
     
    }else{
      top.style.opacity='0';
    }
   


  }


  //scrolling animation
  top.onclick=function(){
  var  out=window.scrollY;
  setTimeout(max=() => {
   
        if(out>0){
          out=out-20;
          window.scrollTo(out,out);
        }else{
          return false;
        }
      
      
    requestAnimationFrame(max)
  }, 4);
    
  
  }
//subscribe logic

var subscribe1=document.getElementById('subscribe1');
var subscribe2=document.getElementById('subscribe2');
var reg =/^[a-z0-9]+@(gmail|yahoo|outlook).com$/g

subscribe2.onclick=function(){
  if(subscribe1.value===''){
    alert('Email is required');
  }else if(reg.test(subscribe1.value)){
   alert('Thanks for subscribing to Healthy Aging');
  }else{
    alert('Email is not valid');
  }
}


//search logic

var search=document.getElementById('search');
var searchcontrol=document.getElementById('searchcontrol');
var s=document.getElementById('s');
var pitem='';

searchcontrol.addEventListener('click',function(){
  s.innerHTML='';
  var arr=[{name:'home',link:'index.html'},{name:'about',link:'about.html'},{name:'blog',link:'blog.html'},{name:'service',link:'service.html'},{name:'gallery',link:'testimony.html'},{name:'contact',link:'contact.html'}];
  pitem='not found';  
  for(var i=0;i<arr.length; i++){
    if(search.value===arr[i].name){
      pitem ='<a href='+arr[i].link+'>'+arr[i].name+'</a>'; 
    }
  }
 
  
  s.style.display='block';
  s.style.fontSize='120%';
  s.innerHTML=pitem;
  
})




var bar=document.getElementById('bar');
var ul=document.getElementById('ul');
var check=false;
bar.onclick=function(){
 
  if(!check){
    this.innerHTML='<i class="fas fa-times"></i>';
    this.style.color='red';
    check=true;
    ul.style.height='400px';
    this.setAttribute('title','Close Menu')
  }else{
    this.innerHTML='<i class="fas fa-bars"></i>';
    check=false;
    this.style.color='#fff';
    ul.style.height='0px';
    this.setAttribute('title','Open Menu')
  }

}

var body=document.getElementsByTagName('body');

body[0].onresize=function(){
  
if(window.innerWidth>1050){
 ul.style.display='grid';
 ul.style.height='30px';
 
 
}else if(window.innerWidth<1050){
  ul.style.display='block'
  ul.style.height='0px';
  bar.setAttribute('title','Open Menu')
  bar.style.color='#fff';
  bar.innerHTML='<i class="fas fa-bars"></i>';
  check=false;
}else{
  ul.style.display='block'
  ul.style.height='0px';
  bar.setAttribute('title','Open Menu')
  bar.style.color='#fff';
  bar.innerHTML='<i class="fas fa-bars"></i>';
  check=false;
}
}

}())