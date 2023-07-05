$(document).ready(function(){


  // INTRO-------------------
  $(".introSVG path").each(function(){
    let path = $(this)
    let idx = path.index()
    let secondTerm = 0.4
    let delay = idx*secondTerm

    let pathLength = $(this).get(0).getTotalLength()
    $(this).css("stroke-dasharray",pathLength)
    $(this).css("stroke-dashoffset",pathLength)

    setTimeout(function(){
      path.css("transition",`stroke-dashoffset 1s ease ${delay}s,fill 1s ease ${delay+1}s`)
        },500)
      })
  
    // setTimeout(function(){
    //     $("#cd").addClass("on")
    // }, 2000)
  $(window).scroll(function () { 
    let winscroll = $(window).scrollTop()
    let targetTop = $("#iam").offset().top
    let winHeight = $(window).height()*0.5
    if (winscroll + winHeight >= targetTop) { 
      $("#cd").addClass("on")
      setTimeout(function () {
        $("#ready").addClass("on")
      },2000)
      
    }
  })

  // letter move--------------------------
  $(".iamTxt").addClass("mbtt")
  $(".iamTxt").each(function(){
    let result = Math.round(Math.random()*1000)%4
    if (result==0)
    {$(this).addClass("mbtt")}
    // else if(result==1)
    // { $(this).addClass("mbtt") }
    // else if(result==2)
    // { $(this).addClass("mbtt") }
    // else
    // {$(this).addClass("mbtt")}
  })

// ----------------------------------------------
  $(window).scroll(function () {
  let winst = $(window).scrollTop()
  // 스크롤바 위에서 얼만큼 내려왔는지 계산
  let winHeight = $(window).height() * 0.85
  // 브라우저 화면의 높이를 계산

  $(".mbtt").each(function () {
    if (winst + winHeight > $(this).offset().top) {
      $(this).addClass("on")
    }
    else {
      $(this).removeClass("on")
    }
  })
    
  if (winst + winHeight > $(".txtFooter").offset().top) {
      // THANK
    $("#thank path").each(function(){
      let path = $(this)
      let idx = path.index()
      let secondTerm = 0.4
      let delay = idx*secondTerm

      let pathLength = $(this).get(0).getTotalLength()
      $(this).css("stroke-dasharray",pathLength)
      $(this).css("stroke-dashoffset",pathLength)

      setTimeout(function(){
        path.css("transition",`stroke-dashoffset 1s ease ${delay}s,fill 1s ease ${delay+1}s`)
        },500)
      })
  
    setTimeout(function(){
        $("#thank").addClass("on")
    }, 2000)
  
        // YOU
      $("#you path").each(function(){
        let path = $(this)
        let idx = path.index()
        let secondTerm = 0.4
        let delay = idx*secondTerm

        let pathLength = $(this).get(0).getTotalLength()
        $(this).css("stroke-dasharray",pathLength)
        $(this).css("stroke-dashoffset",pathLength)

        setTimeout(function(){
          path.css("transition",`stroke-dashoffset 1s ease ${delay}s,fill 1s ease ${delay+1}s`)
        },500)
      })
  
    setTimeout(function(){
      $("#you").addClass("on")
    }, 2000)
  
    }

})

})