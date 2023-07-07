$(document).ready(function(){

  // INTRO-------------------
  //web designer & web Publisher
      $(".introSVG .cls-1").each(function(){
        let path = $(this)
        let idx = path.index()
        let secondTerm = 0.1
        let delay = idx*secondTerm

        let pathLength = $(this).get(0).getTotalLength()
        $(this).css("stroke-dasharray",pathLength)
        $(this).css("stroke-dashoffset",pathLength)

        setTimeout(function(){
            path.css("transition",`stroke-dashoffset 1s ease ${delay}s,fill 1s ease ${delay+0.5}s`)
        },50)
      })
  
  
  // Son Nara
  $(".introSVG .cls-2").each(function(){
        let path = $(this)
        let idx = path.index()-22
        console.log(idx)
    
        let secondTerm = 0.4
        let delay = idx*secondTerm+3

        let pathLength = $(this).get(0).getTotalLength()
        $(this).css("stroke-dasharray",pathLength)
        $(this).css("stroke-dashoffset",pathLength)

        setTimeout(function(){
            path.css("transition",`stroke-dashoffset 1s ease ${delay}s,fill 1s ease ${delay+0.5}s`)
        },50)
      })
  
    setTimeout(function(){
        $(".introSVG").addClass("on")
    },1000)
    
  
  
  

})