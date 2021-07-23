var i=0;
var testimonials=[];
testimonials[0] = ' "I have found your professional manner quite comfortable in the business of selling and servicing fitness equipment. Your attention to detail, as well as responding promptly to my questions is most refreshing to say the least. I look forward to working with your company more and more."';
testimonials[1] = '"As a small business owner I naturally focus on vendors who are dedicated to helping my clients choose the highest quality products for the best value. With Gymsource I can be confident that my clients interests come first. My clients know that they are receiving personal attention from the site design process all the way through to delivery and installation. This is why our clients continually return to us for additional product sales!"';
testimonials[2] = '" I have worked with Gymsource on two projects and cant say enough about their service commitment and quality of work. They always follow through on their word and are great to work with. I highly recommend them for any project home or commercial."';

var names=[];
names[0]="Mr. John";
names[1] = "Mr. Joe";
names[2] = "Mr. Sam"

$(document).ready(function(){
    $("#home").css({
        "border":"5px solid #171717",
        "padding": "0px 5px",
        "background-color":"#DDDDDD",
        "color":"tomato",
    });

    changeTestimonial();
});
function changeTestimonial(){
   
    $("#testimonial").slideDown(500).html(testimonials[i]).delay(2000).slideUp(500);
    $("#username").html("- "+ names[i]);
    if(i < testimonials.length - 1){
      i++; 
    } else { 
        i = 0;
    }
    setTimeout(function(){
        changeTestimonial();
    },3000);
}
