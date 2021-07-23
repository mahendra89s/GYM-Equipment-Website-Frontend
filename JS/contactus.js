let email,name1,mobile,message,emailerror,nameerror,mobileerror,messageerror,contform;

$(document).ready(function(){
    email = $("#email");
    mobile = $("#mobile");
    name1 = $("#name");
    message = $("#message");

    emailerror = $("#emailerror");
    nameerror = $("#nameerror");
    mobileerror = $("#mobileerror");
    messageerror = $("#messageerror");

    
    contform = $("#contform");
    name1.blur(function(){
        validate1();
    });
    email.blur(function(){
        validate2();
    });
    mobile.blur(function(){
        validate3();
    });
    message.blur(function(){
        validate4();
    });
    contform.submit(function(){
        return submit();
    });
    
});
function validate1() {
    nameerror.html("");
    name2 = name1.val();
    if(name2 == ""){
        nameerror.html("This field is required");
        return false;
    }
    else if(!isNaN(name2)){
        nameerror.html("Enter characters !!!");
        return false;
    }
    else if(name2.length<3){
        nameerror.html("<b>Name length must be at least 3 characters</b>");
        return false;
    }
    else{
        return true;
    }
}
function validate2(){
    emailerror.html("");
    email1 = email.val();
    if(email1 == ""){
        emailerror.html("This field is required");
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
function validate3(){
    mobileerror.html("");
    let mobile1 = mobile.val();
    if(mobile1 == ""){
        mobileerror.html("This field is required");
        return false;
    }
    else if(isNaN(mobile1)){
        mobileerror.html("Only numbers are allowed");
        return false;
    }
    else if(mobile1.length !=10){
        mobileerror.html("Please enter Valid Mobile Number");
        return false;
    }
    else{
        return true;
    }
}
function validate4(){
    messageerror.html("");
    message1 = message.val();
    if(message1 == ""){
        messageerror.html("This field is required");
        return false;
    }
    else if(message1.length<3 || message1.length>50){
        messageerror.html("Min 3 chars and Max 50 chars long");
        return false;
    }
    else{
        return true;
    }
}

function submit(){
    let v1 = validate1();
    let v2 = validate2();
    let v3 = validate3();
    let v4 = validate4();
    // return(v1 && v2 && v3 && v4);
    if(v1 && v2 && v3 && v4){
        alert("Message Sent!!");
        return true;
    }
    else{
        return false;
    }
}