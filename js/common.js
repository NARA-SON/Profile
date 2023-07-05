$(document).ready(function () { 
  
  //로고를 클릭하면 메뉴가 움직이기
  $("#logo").click(function () {
    if ($(".gnb").hasClass("on")==false){
      $(".gnb").addClass("on")
    }
    else {
      $(".gnb").removeClass("on")
    }

  })

  //top버튼을 누르면 맨 위로 이동
  $(".top").click(function () { 
    $("html, body")
      .animate({ scrollTop: 0 }, 1000)
  })

})