var button = document.getElementById('button')
var phone = document.getElementById('phone')
var pw = document.getElementById('pw')
var get = document.getElementById('get')
// console.log(get);
// var bignum=parseInt(Math.random()*999999)
// var num=parseInt(Math.random()*60)
var i = 59;

phone.onfocus = function () {
    phone.value = '';
    // return false
}
phone.onblur = function () {
    let reg = /^1[3-9][0-9]{9}$/;
    if (phone.value == '') {
        phone.value = '请输入手机号';
        phone.style.color = 'red'
        get.ontouchstart = function () {
            
            alert('请正确输入手机号')
            // window.event ? window.event.cancelBubble = true : window.event.stopPropagation();
        }
        return false;
    } else if (!reg.test(phone.value)) {
        get.ontouchstart = function () {
            alert('别捣乱  认真输入')
            // window.event ? window.event.cancelBubble = true : window.event.stopPropagation();
        }
        return false;
    } else {
        let times;
        get.ontouchstart= function () {
            
            clearInterval(times);
                times = setInterval(function () {
                i--;
                get.innerHTML =i+'秒后重新获取';
                get.style.color="#ccc"
                // console.log(num);                                                                                                                                                                                                                                                                                                                                                                                                
                if(i==50){
                    alert("666666")
                }else if(i==0){
                    clearInterval(times);
                }
            }, 1000); 
        }
        
        return true
    }
}

pw.onfocus=function(){
    // pw.value=''
    // return false
    close3.style.display='none'
}
pw.onblur=function(){
    if(pw.value==''){
        close3.style.display='block'
        return false;
    }
    else if(pw.value!=='666666'){
        close3.style.display='block'
        return false
    }
    else{
        close3.style.display='none'
        return true
    }
    
}

button.ontouchstart=function(){
    var pw_ = pw.onblur();
    var phone_=phone.onblur();
    if(pw_ && phone_){
        alert('登录成功')
        window.location.href='./me-index.html'
    }
}