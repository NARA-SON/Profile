$(document).ready(function () { 

  $(".cd path").each(function () {
        let pathCd = $(this)
        let idxCd = pathCd.index()
        let secondTermCd = 0.2
        let delayCd = idxCd * secondTermCd

        let pathLengthCd = $(this).get(0).getTotalLength()
        $(this).css("stroke-dasharray", pathLengthCd)
        $(this).css("stroke-dashoffset", pathLengthCd)

        setTimeout(function () {
          pathCd.css("transition", `stroke-dashoffset 1s ease ${delayCd}s,fill 1s ease ${delayCd + 1}s`)
        }, 500)
  })
  
  $(".thank path").each(function(){
        let pathCd = $(this)
        let idxCd = pathCd.index()
        let secondTermCd = 0.2
        let delayCd = idxCd*secondTermCd

        let pathLengthCd = $(this).get(0).getTotalLength()
        $(this).css("stroke-dasharray",pathLengthCd)
        $(this).css("stroke-dashoffset",pathLengthCd)

        setTimeout(function(){
            pathCd.css("transition",`stroke-dashoffset 1s ease ${delayCd}s,fill 1s ease ${delayCd+1}s`)
        },500)
      })

  $(window).scroll(function () {
  // -------------------CreativeDesigner
  // -------------------CreativeDesigner
  // -------------------CreativeDesigner
    let winscroll = $(window).scrollTop()
    let iamTop = $("#iam").offset().top
    let winHeight = $(window).height() * 0.5
    
    if (winscroll + winHeight >= iamTop) {
        $(".cd").addClass("on")
    }

    // iam 하단 텍스트 등장효과
      if (winscroll + winHeight-200 >= iamTop) {
        $(".iamTxt").addClass("on")
  }

    // -------------------Thankyou
    // -------------------Thankyou
    // -------------------Thankyou
    let thankTop = $("footer").offset().top
    
    if (winscroll + winHeight >= thankTop) {
        $(".thank").addClass("on")
    }





  })




  })