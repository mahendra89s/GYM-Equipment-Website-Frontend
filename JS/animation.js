$(document).ready(function(){
    setInterval(function(){
        console.log("asdf");
        $("#hustle").animate({
            marginLeft:"15px",
        });
        $("#hustle").animate({
            marginLeft:"0px",
        });
    },2000)
    
    $('figure').hover(function(){
        $(this).css({
            "border":"5px solid black",
        });
    },function(){
        $(this).css({
            "border":"none",
        });
    });
});
