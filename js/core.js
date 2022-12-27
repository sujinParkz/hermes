
$(document).ready(function(){
    
    sliderFunc(".mainSlider","vertical",false,1,3,0,0,0,'full');
    sliderFunc(".way3Carousel","horizontal",false,1,5,30,540,'full');
    
    sliderFunc(".sliderDetail","horizontal",false,1,1,0,0,'short');
    slidePanel();
    
    toggleAction(".sizeSet input[type='button']");
    toggleAction(".FAQ div ol li ol li");
    toggleAction("ul#payment > li:nth-child(3) ol li");
    toggleAction("#filterPanel li > span");
    justToggle("#filterPanel li:nth-child(2) div a");
    toggleAction("#filterPanel li:nth-child(3) div a");
    
    countSet("#subscribe input[type='button']");
    detailControl(".underPager ul li a");

    panelControl("header > div label");
    panelControl("header > div input[type ='button']");
    panelControl(".findAStore input[type ='submit']");

    paymentControl();

    historyBacking(".btn_Return");
    historyBacking(".Account > div > a");
    
    motionPanel();
    pwVisible();
    accountDataSwap();
    listFilterControl();
    detailTabletControl();
    justToggle("[class$='SideImageList'] > div > input[type='button']");
});

function justToggle(target){
    $(target).click(function(){
        $(this).toggleClass("active");
    });
}

function sliderFunc(target, mod, autoVal, minS, maxS, margin, slidew, pt){ //?
    $(target).bxSlider({
        mode: mod, //?
        touchEnabled: false, //?
        auto: autoVal, //?
        minSlides: minS, //?
        maxSlides: maxS, //?
        slideMargin: margin, //?
        slideWidth: slidew, //?
        pagerType: pt //?
    });
}
function toggleAction(target){ //?
    $(target).click(function(){ //?
        $(target).removeClass("active"); //?
        $(this).addClass("active"); //?
    });
}
function listFilterControl(){
    var holdonPos = parseInt($("[class$='SideImageList']").css("padding-top"));
    
    $(window).scroll(function(){
        // console.log($(this).scrollTop());
        // console.log(holdonPos);
        
        if (window.matchMedia("(min-width: 768px) and (max-width: 1279px)").matches) {
            if($(this).scrollTop() >= holdonPos){
                $("#filterPanel").addClass("lock");
            }else{
                $("#filterPanel").removeClass("lock");
            }
        }
        if (window.matchMedia("(max-width: 767px)").matches) {
            if($(this).scrollTop() >= holdonPos){
                $("[class$='SideImageList'] > div:first-child").addClass("lock");
            }else{
                $("[class$='SideImageList'] > div:first-child").removeClass("lock");
            }
        }
    });
}
function slidePanel(){
    var toggleStatus = false;
    $(".sliderSidePanel input[type='button']").click(function(){
        $(this).toggleClass("active");
        $(this).parent(".sliderSidePanel").toggleClass("active");
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $(".mainSlider").css("z-index","10");
        }else if(toggleStatus == false){
            $(".mainSlider").css("z-index","0");
        }
    });
}
function historyBacking(target){
    $(target).click(function(){
        window.history.back(); //? browser에 cache되어있는 이전 page로 돌아가기.
    });
}
function countSet(){
    $(".numberInput input[value='minusBtn']").click(function(){
        this.parentNode.querySelector('input[type=number]').stepDown();
        //? button 클릭시 클릭된 대상의 부모 로부터 안의 자식중 input number의 step value를 down 시켜라.
    });
    $(".numberInput input[value='plusBtn']").click(function(){
        this.parentNode.querySelector('input[type=number]').stepUp();
        //? button 클릭시 클릭된 대상의 부모 로부터 안의 자식중 input number의 step value를 up 시켜라.
    });
}
function detailControl(openBtn){
    $(openBtn).click(function(){
        var panelName = $(this).attr('data-panel');
        $(openBtn).removeClass("active");
        $(this).addClass("active");
        $("[class$='DetailPage'] > div:nth-of-type(2) > div:not(.underPager)").removeClass("active");
        $("#" + panelName).addClass("active");
    });
}
function panelControl(openPanel){
    var panelName = null;
    $(openPanel).click(function(){
        panelName = $(this).attr('data-panel');
        $("#" + panelName).addClass("active");
    });
    $(".btn_close").click(function(){
        $("[id$='Panel']").removeClass("active");
    });
}

function motionPanel(){
    var currentPanel = null;
    $(".Account div fieldset span input[type='button']").click(function(){
        currentPanel = "." + $(this).attr('data-motionpanel');
        // console.log(currentPanel);
        $(".Account div fieldset").removeClass("active");
        $(currentPanel).addClass("active");
    });
}
function accountDataSwap(){
    $("#deactivePW").click(function(){
        $(this).addClass("deactive");
        $(this).siblings("legend").text("FORGOT PASSWORD ?");
        $(this).siblings("ul").children("li.pwField").addClass("deactive");
        $(this).siblings("ul").children("li:first-child").children("p").addClass("deactive");
        $(this).siblings("input[type='submit']").val("SUBMIT");
    });
    $("#returnData").click(function(){
        $("#deactivePW").removeClass("deactive");
        $(this).siblings("legend").text("ACCOUNT");
        $(this).siblings("ul").children("li.pwField").removeClass("deactive");
        $(this).siblings("ul").children("li:first-child").children("p").removeClass("deactive");
        $(this).val("SIGN IN");
    });
}
function pwVisible(){
    var toggleStatus = false;
    $(".pwField input[value='SHOW']").click(function(){
        if(toggleStatus == false){
            $(this).siblings("input").attr("type","text");
        }else{
            $(this).siblings("input").attr("type","password");
        }
        toggleStatus = !toggleStatus;
    });
}
function paymentControl(){
    var currentPanelName = null;    
    var panels = $(".orderCheckout div form:first-of-type fieldset ul");
    var titleSlot = $(".orderCheckout >div > h2");
    var subTitleSlot = $(".orderCheckout div form:first-of-type fieldset:first-of-type legend");
    var btnBack = $(".orderCheckout .checkoutUnderArea a");
    var titleTxt = "";
    
    $(".toggleButton").click(function(){

        if($(this).val() == "PAYMENT"){
            currentPanelName = "#" + $(this).attr("data-panel");
            $(panels).removeClass("active");
            $(currentPanelName).addClass("active");
            $(this).val("ORDER AND PAY");
    
            titleSlot.text("PAYMENT");
            subTitleSlot.text("CREDIT CARD INFORMATION");
            $(btnBack).first().removeClass("active");
            $(btnBack).last().addClass("active");
            $(".stepBox li").removeClass("active");
            $(".stepBox li:last-child").addClass("active");
            
        }else if($(this).val() == "ORDER AND PAY"){
            $("#orderComplete").addClass("active");
            $(".btn_close").click(function(){
                $("#orderComplete").removeClass("active");
            });
        }
    });

    $(btnBack).click(function(){
        currentPanelName = "#" + $(this).attr("data-panel");
        $(panels).removeClass("active");
        $(currentPanelName).addClass("active");
        $(this).removeClass("active");
        $(btnBack).first().addClass("active");
        titleSlot.text("CHECKOUT");
        subTitleSlot.text("BILLING INFORMATION");
        $(".toggleButton").val("PAYMENT");
        $(".stepBox li").removeClass("active");
        $(".stepBox li:nth-child(2)").addClass("active");
    });

}

function detailTabletControl(){
    if (window.matchMedia("(max-width: 1279px)").matches) {
        // var footerOffSet = $("footer").offset().top;
        var sliderHeight = $(".bx-wrapper").height();
        $(window).scroll(function(){
            // console.log($("footer").offset().top);
            if($(this).scrollTop()>=sliderHeight){
                $(".underPager > a[href='shoppingCart.html']").addClass("active");
            }else{
                $(".underPager > a[href='shoppingCart.html']").removeClass("active");
            }
        });
    }
}
