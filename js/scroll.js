$(document).ready(function () { 

  $(window).scroll(function () {

    
  // -------------------CreativeDesigner
  // -------------------CreativeDesigner
  // -------------------CreativeDesigner
    let winscroll = $(window).scrollTop()
    let iamTop = $("#iam").offset().top
    let winHeight = $(window).height() * 0.5
    
    if (winscroll + winHeight >= iamTop) {
      
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
      setTimeout(function () {
        $(".cd").addClass("on")
      }, 1000)
    }

    // iam 하단 텍스트 등장효과
      if (winscroll + winHeight-200 >= iamTop) {
        $(".iamTxt").addClass("on")
  }

    // -------------------Thankyou
    // -------------------Thankyou
    // -------------------Thankyou
    let thankTop = $(".thank").offset().top
    
  if (winscroll + winHeight >= thankTop) {
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
      setTimeout(function(){
        $(".thank").addClass("on")
      }, 1000)
  }





  })




  })