$(document).ready(function () {

  let count = 0;
    // 팝업 슬라이드
  $(".btnPopup").click(function () { 
    count++;
    if (count > 7) { count = 0 }
    $(".popTrain").css("transform", "translateX(" + (count * -12.5) + "%)")
    $(".pop_pagination>li").removeClass("on")
    $(".pop_pagination>li").eq(count).addClass("on")

  })

  // 번호를 누르면 해당 번호 기차로 이동할 것
  // $(".pop_pagination>li").eq(count).click(function(){
  //   $(".pop_pagination>li").removeClass("on")
  //   $(this).eq(count).addClass("on")
  //   $(".popTrain").css("transform", "translateX(" + (count * -12.5) + "%)")
  // })

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


    // 닫기버튼을 클릭하면 팝업창이 닫힌다.
  $(".Exit").click(function () { 
    $(".popWrap").removeClass("on")
    $(".reWrap").removeClass("on")
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