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

  // POPUP 이미지를 클릭하면 팝업창이 뜬다
  // 0번째 리스트를 클릭하면 0번째 팝업창이 열린다.
  // 1번째 리스트를 클릭하면 1번째 팝업창이 열린다.
  $(".popTrain>li").click(function () { 
    let idx = $(this).index()
    $(".popWrap").removeClass("on")
    $(".popWrap").eq(idx).addClass("on")
  })

  $(".pop_pagination>li").click(function () { 
    // 0번째 리스트를 클릭하면 0번째 자리로 기차가 이동
    // 1번째 리스트를 클릭하면 1번째 자리로 기차가 이동
    let idx = $(this).index()
    $(".pop_pagination>li").removeClass("on")
    $(this).addClass("on")
    count = idx
    $(".popTrain").css("transform", "translateX(" + (idx * -12.5) + "%)")
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