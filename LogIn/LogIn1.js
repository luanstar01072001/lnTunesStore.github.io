document.addEventListener("DOMContentLoaded",function(){
    const input = document.querySelectorAll('.auth-form__input');
    function remove_oninput(element){
        var message = element.querySelector('.form-message');
        message.innerText = '';
        element.classList.remove('invalid');
    }
    function add__blur(element,messages){
        var message = element.querySelector('.form-message');
        message.innerText = messages;
        element.classList.add('invalid');
    }
    var isFormValid = true;
    input.forEach((blurs,index) =>{
        blurs.onblur = function(){
            if(index == 0){
                function tests(){
                    return validateEmail(input[0].value)  ? undefined :  `This email is invalid. Make sure it's written like example@email.com`;
                }
                if(tests() == null){
                    return true
                }
                else{
                    var mess = tests();
                    add__blur(input[0].parentElement,mess);
                }
            }
            else if(index == 1){
                function tests(){
                    return input[1].value.length >= 6 ? undefined :  `You need to enter a password.(6 or more characters)`;
                }
                if(tests() == null){
                    return true
                }
                else{
                    var mess = tests();
                    add__blur(input[1].parentElement,mess);
                }
            }
        }
        blurs.oninput = function(){
            if(index == 0){
                remove_oninput(input[0].parentElement);
                isFormValid = true;
            }
            if(index == 1){
                remove_oninput(input[1].parentElement);
                isFormValid = true;
            }
        }
    })
    const print = document.querySelector('.btn__print');
    print.onclick = function(evt){
        for(var i = 0; i < input.length;i++){
            if(i == 0){
                function tests(){
                    return validateEmail(input[0].value)  ? undefined :  `This email is invalid. Make sure it's written like example@email.com`;
                }
                if(tests() == null){
                }
                else{
                    var mess = tests();
                    add__blur(input[0].parentElement,mess);
                    isFormValid = false;
                }
            }
            else if(i == 1){
                function tests(){
                    return input[1].value.length >= 6 ? undefined :  `You need to enter a password.(6 or more characters)`;
                }
                if(tests() == null){
                }
                else{
                    var mess = tests();
                    add__blur(input[1].parentElement,mess);
                    isFormValid = false;
                }
            }
        }
        if(isFormValid == true){
            print.setAttribute('href','../Admin/Admin.html');
        }
    }
    function validateEmail(email) 
    {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    }
},false)