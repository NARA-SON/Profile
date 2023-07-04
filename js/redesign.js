$(document).ready(function () { 


    // 버튼을 클릭하면 해당 순번 리디자인 팝업창이 뜬다
  $(".txtRedesign>ul>li").eq(0).click(function (e) {
    e.preventDefault ()
    $(".reWrap").eq(0).addClass("on")
  })
  $(".txtRedesign>ul>li").eq(1).click(function (e) {
    e.preventDefault ()
    $(".reWrap").eq(1).addClass("on")
  })
  $(".txtRedesign>ul>li").eq(2).click(function (e) { 
    e.preventDefault ()
    $(".reWrap").eq(2).addClass("on")
  })
  $(".txtRedesign>ul>li").eq(3).click(function (e) { 
    e.preventDefault ()
    $(".reWrap").eq(3).addClass("on")
  })

  //plan 탭메뉴 기능
  $(".planTab>dt").click(function(){
    $(".planTab>dt").removeClass("on")
    $(this).addClass("on")

    $(".planTab>dd").removeClass("on")
    $(this).next().addClass("on")
  })


  
})