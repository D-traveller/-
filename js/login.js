/* login.html */
var button=document.getElementById('button')
var phone=document.getElementById('phone')
var pw=document.getElementById('pw')
var close=document.getElementById('close')
// console.log(close);
var close2=document.getElementById('close2')
var close3=document.getElementById('close3')
button.addEventListener('click',function(){
    phone.value='';
    pw.value='';
    alert('请正确填写内容')
})
/* login.html  正则判断 */
phone.onfocus=function(){
    phone.value='';
    return false
}
phone.onblur=function(){
    let reg = /^1[3-9][0-9]{9}$/;
    if(phone.value==''){
        phone.value='请输入手机号';
        phone.style.color='red'
        return false;
    }else if(!reg.test(phone.value)){
        close.style.display='block';
        // phone.value='';
        return false;
    }else{
        close.style.display='none';
        // phone.value='';
        return true
    }
}
pw.onfocus=function(){
    // pw.value=''
    // return false
    close3.style.display='none'
}
pw.onblur=function(){
    var reg=/^\w{6,12}$/;
    var reg1=/[^0-9]/;
    var reg2=/[^a-zA-Z]/;
    if(pw.value==''){
        close3.style.display='block'
        return false;
    }else if(!reg.test(pw.value)){
        close3.style.display='block'
        return false
    }else if(!reg1.test(pw.value)){
        close3.style.display='block'
        return false
    }else if(!reg2.test(pw.value)){
        close3.style.display='block'
        return false
    }
    else{
        close3.style.display='none'
        return true
    } 
}
close2.ontouchstart=function(){
    pw.setAttribute('type','text')
}
close2.ontouchend=function(){
    pw.setAttribute('type','password')
}

button.ontouchstart=function(){
    var pw_ = pw.onblur();
    // var pws_=pws.onblur();
    var phone_=phone.onblur();
    // var dx_=dx.onblur();
    /* console.log(pw_);
    console.log(pws_);
    console.log(phone_);
    console.log(dx_); */
    if(pw_ && phone_){
        alert('登录成功')
        window.location.href='./me-index.html'
    }
}