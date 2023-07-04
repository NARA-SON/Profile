$(document).ready(function () { 

    let i = 0;
   // 배너 슬라이드
  $(".btnBanner").click(function () { 
    i++;
    if (i > 3) { i = 0 }
    $(".brTrain").css("transform", "translateX(" + (i * -25) + "%)")
    $(".banner_pagination>li").removeClass("on")
    $(".banner_pagination>li").eq(i).addClass("on")

  })


})