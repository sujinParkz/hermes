$(document).ready(function(){
    scrollControl(".bagMovingBox figcaption",300);
    scrollControl(".jewerlyMovingBox figcaption",300);
});

function scrollControl(target,pa){
    $(window).scroll(function(){ //? window = browser
        var currentScroll = $(this).scrollTop(); //? browser에 scroll의 현재위치(상단선)
        var targetoffset = $(target).offset().top - pa; //? 대상의 현재 top 좌표.
        if(currentScroll >= targetoffset){
            $(target).addClass("active");
        }
        if(currentScroll < targetoffset){
            $(target).removeClass("active");
        }
    });
}