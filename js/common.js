$(document).ready(function () { 
  
  //로고를 누르면 gnb가 나온다.
  $(".logo").click(function(){
    $(".gnb").addClass("on")
  })

    //top버튼을 누르면 맨 위로 이동
  $(".top").click(function () { 
    $("html, body")
      .animate({ scrollTop: 0 }, 1000)
  })

})