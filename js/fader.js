$(document).ready(function(){ 
     
  

  $.fn.isInViewport = function() {
  	var elementTop = $(this).offset().top;
  	var elementBottom = elementTop + $(this).outerHeight();

  	var viewportTop = $(window).scrollTop();
  	var viewportBottom = viewportTop + $(window).height();

  	return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  
  
  $(window).on('resize scroll', function() {

    $('#section0').each(function() {
        var fader0 = $("#section0");
        var fader0b = $("#section1");
        var fader0s = $(".starter-pack");


      if ($('#section1').isInViewport()) {
          var movement0 = fader0.css({"z-index": "-20", "transition-property": "z-index", "opacity":"0", "transition-property":"opacity", "transition-duration": "1s", "transition-timing-function": "linear", "transition-delay": "0s"});
          var movement0b = fader0b.css({"z-index":"100", "transition-property":"z-index", "opacity": "1", "transition-property": "opacity", "transition-duration": "1s", "transition-timing-function": "linear", "transition-delay": "1s"});  
          var movement0s = fader0s.css({"opacity":"0", "transition-property":"opacity", "transition-duration":"1s", "transition-delay":"0s"});
           function creditRoll(){
            fader0.animate({movement0});
            fader0b.animate({movement0b});
            fader0s.animate({movement0s});
            //  if($('#section0').css == ({"opacity":"1"})){
            //    $('#section1').css({"opacity":"0"});
            //  }
            // $("#section1").css({"z-index":"100", "transition-property":"z-index"});
            // $("#section2").css({"z-index":"-20", "transition-property":"z-index"});
          }

      creditRoll();
      }


      else if($('#section0').isInViewport()){

        var revelation0b = fader0b.css({"opacity": "0", "transition-property": "opacity", "z-index":"-20", "transition-property": "z-index", "transition-duration": "2", "transition-timing-function": "linear", "transition-delay": "0s"});
        var revelation1 = fader0.css({"z-index": "100", "transition-property": "z-index","opacity": "1", "transition-property": "opacity", "transition-duration": "1s", "transition-timing-function": "linear", "transition-delay": "0s"})
        var movement1s = fader0s.css({"opacity":"1", "transition-property":"opacity", "transition-duration":"1s", "transition-delay":"0s"})
        // $("#section1").css({"opacity":"0"});
        
        function refreshScreen(){
          fader0.animate({revelation1});  
          fader0b.animate({revelation0b});
          fader0s.animate({movement1s});
          //$('#section1').css({"opacity":"0"});
            
        }
 
        refreshScreen();
       }

      //  else if($('#section1').screenY < ('#section0').screenY) && ($('#section1').isInViewport()){
      //   $("#section1").css({"opacity": "0", "transition-property": "opacity", "z-index":"-20", "transition-property": "z-index", "transition-duration": "0", "transition-timing-function": "linear", "transition-delay": "0s"});
      //   $("#section0").css({"z-index":"100", "opacity":"1"});
      // }

      //else {fader0s.animate({movement1s})};
      
      // else{
      //   $("#section1").css({"z-index":"-20", "opacity":"0"});
      //   $("#section2").css({"z-index":"100", "opacity":"1"});
      // };

    });
  });
});

