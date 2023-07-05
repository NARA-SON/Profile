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

  $(".banner_pagination>li").click(function () { 
    // 0번째 리스트를 클릭하면 0번째 자리로 기차가 이동
    // 1번째 리스트를 클릭하면 1번째 자리로 기차가 이동
    let idxbr = $(this).index()
    $(".banner_pagination>li").removeClass("on")
    $(this).addClass("on")
    i = idxbr
    $(".brTrain").css("transform", "translateX(" + (idxbr * -25) + "%)")
  })


})