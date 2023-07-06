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

    // 각각의 메뉴리스트를 클릭했을 때 해당되는 영역으로 부드럽게 스크롤 이동될 수 있도록
  $(".gnb>li>a").click(function (e) { 
    e.preventDefault()
    let target = $(this).attr("href")
    // 클릭한 a태그의 href속성에 저장된 속성값이 리턴되어 target변수에 저장된다.
    // (문자데이터형태로 "#s1" "#s2" ...)
    let target_top = $(target).offset().top
    $("html, body")
      .animate({ scrollTop: target_top }, 500)
  })

  $(".gnb ul>li>a").click(function (e) { 
    e.preventDefault()
    let target2depth = $(this).attr("href")
    // 클릭한 a태그의 href속성에 저장된 속성값이 리턴되어 target변수에 저장된다.
    // (문자데이터형태로 "#s1" "#s2" ...)
    let target2depth_top = $(target2depth).offset().top
    $("html, body")
      .animate({ scrollTop: target2depth_top }, 500)
  })




})