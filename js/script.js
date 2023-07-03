$(document).ready(function(){

  let count = 0;

    // 팝업 슬라이드
  $(".btnPopup").click(function () { 
    count++;
    if (count > 7) { count = 0 }
    $(".popTrain").css("transform", "translateX(" + (count * -12.5) + "%)")
  })

  // 배너 슬라이드
  $(".btnBanner").click(function () { 
    count++;
    if (count > 3) { count = 0 }
    $(".brTrain").css("transform", "translateX(" + (count * -25) + "%)")
  })

  // POPUP 이미지를 클릭하면 팝업창이 뜬다
  $(".popTrain>li").eq(0).click(function () { 
    $(".popWrap").eq(0).addClass("on")
  })
  $(".popTrain>li").eq(1).click(function () { 
    $(".popWrap").eq(1).addClass("on")
  })
  $(".popTrain>li").eq(2).click(function () { 
    $(".popWrap").eq(2).addClass("on")
  })
  $(".popTrain>li").eq(3).click(function () { 
    $(".popWrap").eq(3).addClass("on")
  })
    $(".popTrain>li").eq(4).click(function () { 
    $(".popWrap").eq(4).addClass("on")
  })
    $(".popTrain>li").eq(5).click(function () { 
    $(".popWrap").eq(5).addClass("on")
    })
  $(".popTrain>li").eq(6).click(function () { 
    $(".popWrap").eq(6).addClass("on")
    })
  $(".popTrain>li").eq(7).click(function () { 
    $(".popWrap").eq(7).addClass("on")
  })


    // POPUP 닫기버튼을 클릭하면 팝업창이 닫힌다.
  $(".popExit").click(function () { 
    $(".popWrap").removeClass("on")
  })

  // POPUP 마우스를 올리면 btnView 버튼이 뜬다.
  $(".popTrain>li").mouseover(function () { 
    $(".btnView").addClass("on")
  })

  // POPUP 마우스를 내리면 btnView 버튼이 없어진다.
  $(".popTrain>li").mouseout(function () { 
    $(".btnView").removeClass("on")
  })
  return false;
  

  

})