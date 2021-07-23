let email,password,name1,mobile,cpassword,emailerror, passerror,nameerror,mobileerror,cpasserror,regform,btn1,icon;

$(document).ready(function(){
    email = $("#email");
    password = $("#pass");
    mobile = $("#mobile");
    name1 = $("#name");
    cpassword = $("#cpass");

    emailerror = $("#emailerror");
    passerror = $("#passerror");
    nameerror = $("#nameerror");
    mobileerror = $("#mobileerror");
    cpasserror = $("#cpasserror");

    btn1 = $("#btn");
    icon = $("#icon");
    regform = $("#regform");
    name1.blur(function(){
        validate1();
    });
    email.blur(function(){
        validate2();
    });
    mobile.blur(function(){
        validate3();
    });
    password.blur(function(){
        validate4();
    });
    cpassword.blur(function(){
        validate5();
    });
    regform.submit(function(){
        return submit();
    });
    
});
function validate1() {
    nameerror.html("");
    name2 = name1.val();
    if(name2 == ""){
        nameerror.html("This field is required !!!");
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
        emailerror.html("This field is required !!!");
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
    passerror.html("");

    let regexp= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

    let pass1 = password.val();
    if(pass1 == ""){
        passerror.html("This field is required");
        return false;
    }
    else if(regexp.test(pass1)!=true){
        passerror.html("Password should be alphanumeric");
        return false;
    }
    else if(pass1.length<5 || pass1.length>8){
        passerror.html("Min 5 chars and Max 8 chars long");
        return false;
    }
    else{
        return true;
    }
}
function validate5(){
    cpasserror.html("");
   
    let pass1 = password.val();
    let confirmpass1 = cpassword.val();
    if(confirmpass1 == ""){
        cpasserror.html("This field is required<br>");
        return false;
    }
    else if(pass1 != confirmpass1){
        cpasserror.html("Password not match!!<br>");
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
        cpassword.attr('type','text');
    }
   else if(icon.prop("src").includes("images/icon/view.png")){
        icon.attr("src","images/icon/hidden.png");
        password.attr('type','password');
        cpassword.attr('type','password');
    }
}
function submit(){
    let v1 = validate1();
    let v2 = validate2();
    let v3 = validate3();
    let v4 = validate4();
    let v5 = validate5();
    return(v1 && v2 && v3 && v4 && v5);
}