var phone=document.getElementById('phone')
var dx=document.getElementById('duanxin')
var pw=document.getElementById('pw')
var button=document.getElementById('button')
var yz=document.getElementById('yanzheng')
var close3=document.getElementById('close3')
var close2=document.getElementById('close2')
var close=document.getElementById('close')
var i=59;

phone.onfocus=function(){
    phone.value='';
}
phone.onblur=function(){
    let reg = /^1[3-9][0-9]{9}$/;
    if(phone.value==''){
        phone.value = '请输入手机号';
        phone.style.color = 'red';
        yz.onclick= function () {
            alert('请正确输入手机号')
            window.event ? window.event.cancelBubble = true : window.event.stopPropagation();
        }
        return false;
    } else if (!reg.test(phone.value)) {
        yz.onclick = function () {
            alert('别捣乱  认真输入')
            window.event ? window.event.cancelBubble = true : window.event.stopPropagation();
        }
        return false;
    }else {
        yz.onclick= function () {
            var times = setInterval(function () {
                i--;
                yz.innerHTML =i+'秒后重新获取';
                yz.style.color="#ccc"
                // console.log(num);                                                                                                                                                                                                                                                                                                                                                                                                
                if(i==50){
                    alert("666666")
                }else if(i==0){
                    clearInterval(times);
                }
            }, 1000); }
        
        return true
    }
}
dx.onfocus=function(){
    dx.value='';
}
dx.onblur=function(){
    if(dx.value==''){
        close3.style.display='block'
        return false;
    }
    else if(dx.value!=='666666'){
        close3.style.display='block'
        return false
    }
    else{
        close3.style.display='none'
        return true
    }
    
}
pw.onfocus=function(){
    // pw.value='';
    pw.style.color='red'
    pw.placeholder='包含英文与数字'
    close.style.display='none'
}
pw.onblur=function(){
    var reg=/^\w{6,12}$/;
    var reg1=/[^0-9]/;
    var reg2=/[^a-zA-Z]/;
    if(pw.value==''){
        close2.style.display='block'
        close.style.display='none'
        return false;
    }else if(!reg.test(pw.value)){
        close2.style.display='block'
        close.style.display='none'
        return false
    }else if(!reg1.test(pw.value)){
        close2.style.display='block'
        close.style.display='none'
        return false
    }else if(!reg2.test(pw.value)){
        close2.style.display='block'
        close.style.display='none'
        return false
    }
    else{
        close2.style.display='none'
        close.style.display='block'
        return true
    } 
}
close.ontouchstart=function(){
    // window.event ? window.event.cancelBubble = true : window.event.stopPropagation();
    pw.setAttribute('type','text')
}
close.ontouchend=function(){
    // window.event ? window.event.cancelBubble = true : window.event.stopPropagation();
    pw.setAttribute('type','password')
}

button.ontouchstart=function(){
    var pw_ = pw.onblur();
    // var pws_=pws.onblur();
    var phone_=phone.onblur();
    var dx_=dx.onblur();
    /* console.log(pw_);
    console.log(pws_);
    console.log(phone_);
    console.log(dx_); */
    if(pw_ && phone_ && dx_){
        alert('注册成功')
        window.location.href='./login.html'
    }
}