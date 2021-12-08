var phone=document.getElementById('phone')
var yz=document.getElementById('yanzheng')
var dx=document.getElementById('duanxin')
var pw=document.getElementById('pw')
var pws=document.getElementById('pws')
var button=document.getElementById('button')
var close=document.getElementById('close')
// console.log(close);
var close2=document.getElementById('close2')
var close2_3=document.getElementById('close2-3')
var close3=document.getElementById('close3')
var close3_3=document.getElementById('close3-3')
var i=60;

/* 手机号 获取验证码*/
phone.onfocus=function(){
    phone.value='';
    return false
}
phone.onblur = function () {
    let reg = /^1[3-9][0-9]{9}$/;
    if (phone.value == '') {
        phone.value = '请输入手机号';
        phone.style.color = 'red'
        yz.onclick = function () {
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
    } else {
        let times;
        yz.onclick= function () {
            clearInterval(times);
                times = setInterval(function () {
                i--;
                yz.innerHTML =i+'秒后重发';
                yz.style.color="#ccc"
                // console.log(num);                                                                                                                                                                                                                                                                                                                                                                                                
                if(i==55){
                    alert("666666")
                }else if(i==0){
                    clearInterval(times);
                }
            }, 1000); 
        }
        return true
    }
}
/* 输入验证码验证 */
dx.onfocus=function(){
    dx.value=''
    // return false
    // close.style.display='none'
}
dx.onblur=function(){
    if(dx.value==''){
        close.style.display='block'
        return false;
    }
    else if(dx.value!=='666666'){
        close.style.display='block'
        return false
    }
    else{
        close.style.display='none'
        return true
    }
}
/* 输入新密码 */
pw.onfocus=function(){
    pw.placeholder='包含英文与数字'
    // pw.style.color='red'
}
pw.onblur=function(){
    var reg=/^\w{6,12}$/;
    var reg1=/[^0-9]/;
    var reg2=/[^a-zA-Z]/;
    if(pw.value==''){
        close2.style.display='block'
        return false;
    }else if(!reg.test(pw.value)){
        close2.style.display='block'
        return false
    }else if(!reg1.test(pw.value)){
        close2.style.display='block'
        return false
    }else if(!reg2.test(pw.value)){
        close2.style.display='block'
        return false
    }
    else{
        close2_3.style.display='block'
        return true
    } 
}
close2_3.ontouchstart=function(){
    // window.event ? window.event.cancelBubble = true : window.event.stopPropagation();
    pw.setAttribute('type','text')
}
close2_3.ontouchend=function(){
    // window.event ? window.event.cancelBubble = true : window.event.stopPropagation();
    pw.setAttribute('type','password')
}
/* 确认密码 */
pws.onfocus=function(){
    pws.placeholder='包含英文与数字'
    // pw.style.color='red'
}
pws.onblur=function(){
    if(pw.value===pws.value){
        close3.style.display='none'
        close3_3.style.display='block'
        return true
    }else{
        close3.style.display='block'
        close3_3.style.display='none'
        return false
    }    
}
close3_3.ontouchstart=function(){
    // window.event ? window.event.cancelBubble = true : window.event.stopPropagation();
    pws.setAttribute('type','text')
}
close3_3.ontouchend=function(){
    // window.event ? window.event.cancelBubble = true : window.event.stopPropagation();
    pws.setAttribute('type','password')
}

/* 提交验证 */
button.ontouchstart=function(){
    var pw_ = pw.onblur();
    var pws_=pws.onblur();
    var phone_=phone.onblur();
    var dx_=dx.onblur();
    /* console.log(pw_);
    console.log(pws_);
    console.log(phone_);
    console.log(dx_); */
    if(pw_ && pws_ && phone_ && dx_){
        alert('重置成功')
        window.location.href='./login.html'
    }
}