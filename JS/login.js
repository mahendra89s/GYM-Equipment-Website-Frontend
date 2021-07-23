let email,password,emailerror, passerror,loginform,btn1,icon;

$(document).ready(function(){
    email = $("#email");
    password = $("#pass");

    emailerror = $("#emailerror");
    passerror = $("#passerror");

    btn1 = $("#btn");
    icon = $("#icon");
    loginform = $("#loginform");
    email.blur(function(){
        validate1();
    });
    password.blur(function(){
        validate2();
    });
    // btn1.on("click",function(){
    //     console.log("qqqq");
    //     showPass();
    // });
    loginform.submit(function(){
        return submit();
    });
    
});
function validate1(){
    emailerror.html("");
    email1 = email.val();
    if(email1 == ""){
        emailerror.html("Required Field !!!");
        return false;
    }
    else if(!email1.includes("@")){
        emailerror.html("Enter valid email !!!");
        return false;
    }
    else{
        return true;
    }
}
function validate2(){
    passerror.html("");
    password1 = password.val();
   
    if(password1 == ""){
        passerror.html("Required Field !!!");
        return false;
    }
    else if(password1.length < 3 || password1.length > 10){
        passerror.html("Min 3 characters and max 10 characters required !!!");
        return false;
    }
    else{
        return true;
    }
}
function showPass(){
    console.log(icon.prop("src"));
    if(icon.prop("src").includes("images/icon/hidden.png")){
        icon.attr("src","images/icon/view.png");
        password.attr('type','text');
    }
   else if(icon.prop("src").includes("images/icon/view.png")){
        icon.attr("src","images/icon/hidden.png");
        password.attr('type','password');
    }
}
function submit(){
    let v1 = validate1();
    let v2 = validate2();
   
    return(v1 && v2);
}