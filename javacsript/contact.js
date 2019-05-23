(function(){
let yourName= document.getElementById('yourName');
let yourEmail= document.getElementById('yourEmail');
let yourMessage= document.getElementById('yourMessage');
let submitContact= document.getElementById('submitContact');
var reg=/^[A-Za-z]+(\s)?[a-zA-Z]{0,}$/;
var regEmail=/^[A-Za-z_-]+@[a-z]{0,}\.[a-zA-Z]{0,10}$/;
let regMessage=/^[A-Za-z]+(\s)?[a-zA-Z@"'?\s.,_-]{0,}$/;
submitContact.onclick=function(){
       if(yourEmail.value===''||yourMessage.value===''||yourName.value===''){
          return alert('all field is requred');
       }else if(reg.test(yourName.value)===false){
       return alert('please check if  your name include only character')
       }else if(regMessage.test(yourMessage.value)===false){
        return alert('please check if  your message include only character')
       }else if(regEmail.test(yourEmail.value)===false){
        return alert('please check if  your email is in the correct format')
       }else{
        alert('Thank you '+ yourName.value +' for contacting Healthy aging');
       }
    
}


}())