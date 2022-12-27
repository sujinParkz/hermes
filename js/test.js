
// function aside(){
//     var $moveAside = $(".aside");
//     var $btnAside = $(".btnAside");
//     var $btnStatus = false;

//     $btnAside.click(function(){

//         $btnStatus =!$btnStatus;
        
//         if($btnStatus==true){
//           $btnAside.text("닫기");
//           $moveAside.css("left","150px");
//         }else{
//           $btnAside.text("열기");
//           $moveAside.css("left","0px");
//         }        
//     });
// }


var $btnClose = $null;

function btnClose(){
    $btnClose = $('.btn_close');

    
}


function asidePanel(){
    var $moveAside = $(".asidePanel");
    var $btnAside = $("#hamburger");
    var $btnStatus = false;

    $btnAside.click(function(){
        $btnStatus =!$btnStatus;

        if($btnStatus==true){
            $moveAside.css(
               


            )
        }else{
            $moveAside.css("left","0px")

        }
    })
    
}