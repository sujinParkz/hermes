$(document).ready(function(){
    scrollControl(".bagMovingBox figcaption",300);
    scrollControl(".jewerlyMovingBox figcaption",300);
});

function scrollControl(target,pa){
    $(window).scroll(function(){ 
        var currentScroll = $(this).scrollTop(); 
        var targetoffset = $(target).offset().top - pa;
        if(currentScroll >= targetoffset){
            $(target).addClass("active");
        }
        if(currentScroll < targetoffset){
            $(target).removeClass("active");
        }
    });
}