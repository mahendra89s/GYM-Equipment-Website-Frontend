$(document).ready(function(){
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
