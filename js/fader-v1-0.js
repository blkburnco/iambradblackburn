$(document).ready(function(){ 
     
  $.fn.isInViewport = function() {
  	var elementTop = $(this).offset().top;
  	var elementBottom = elementTop + $(this).outerHeight();

  	var viewportTop = $(window).scrollTop();
  	var viewportBottom = viewportTop + $(window).height();

  	return elementBottom > viewportTop && elementTop < viewportBottom;
	};

  $(window).on('resize scroll', function() {
    $('#section1').each(function() {
        var fader0a = $("#section0");
        var fader0 = $("#section1");
        var fader0b = $("#section2");
        var fader1 = $("#about-me-bg");
        var fader2 = $("#about-me-txt");
        var header = $("#header");
        //var strips = $("#striper");
       
      if ($('#section1' || '#section2').isInViewport()) {
          var movement = fader1.css({"opacity": ".5", "transition-property": "opacity", "transition-duration": "3s", "transition-timing-function": "linear", "transition-delay": "2s"}); 
          var movement0 = fader0.css({"opacity": "1", "transition-property": "opacity", "transition-duration": "2s", "transition-timing-function": "linear", "transition-delay": "2s"});
          var movement0a = fader0a.css({"opacity": "0", "transition-property": "opacity", "transition-duration": "2s", "transition-timing-function": "linear", "transition-delay": "0s"}); 
          // var movement0b = fader0b.css({"opacity": "1", "transition-property": "opacity", "transition-duration": "2s", "transition-timing-function": "linear", "transition-delay": "2s"});  
          var movement2 = fader2.css({"opacity": "1", "transition-property": "opacity", "transition-duration": "3s", "transition-timing-function": "linear", "transition-delay": "4s"});
          
           function creditRoll(){
            fader0.animate({movement0});
            fader0a.animate({movement0a});
            //fader0b.animate({movement0b});
            fader1.animate({movement});
            fader2.animate({movement2});
          }

    //   if ($('#section0').isInViewport()){

    //     var revelation = fader0a.css({"opacity": "1", "transition-property": "opacity", "transition-duration": "2s", "transition-timing-function": "linear", "transition-delay": "0s"});

    //     function refreshScreen(){
    //         fader0a.animate({revelation});
    //     }
    //   }
      // if ($('#section0').isInViewport()){
      //   var striped = striper.css({"height"; "100vh", "transition-property": "height", "transition-duration": "2s", "transition-timing-function": "linear", "transition-delay"; "2s"});

      //   function stripMember(){
      //     striper.animate({striped});
      //   }
        
      //   stripMember();
      // }

      //   if ($('#section0').isNotInViewport()){

      //     var header-reveal = header.css({"opacity": "1", "transition-property": "opacity", "transition-duration": "3s"}); 

      //     function creditRoll(){
      //       header.animate({header-reveal});
      //     }
      //   }
      
      // creditRoll();
      // }


      if ($('#section2').isInViewport()){

            var movement0b = fader0b.css({"opacity": "1", "transition-property": "opacity", "transition-duration": "2s", "transition-timing-function": "linear", "transition-delay": "2s"});  
    
            function creditRoll(){
              fader0b.animate({movement0b});
            }
          }
        
        creditRoll();
      }

      else if($('#section0a' || '#section1').isInViewport()){

        var revelation = fader0a.css({"opacity": "1", "transition-property": "opacity", "transition-duration": "2s", "transition-timing-function": "linear", "transition-delay": "0s"});
        var revelation0b = fader0b.css({"opacity": "0", "transition-property": "opacity", "transition-duration": "2s", "transition-timing-function": "linear", "transition-delay": "0s"});
        var revelation1 = fader0.css({"opacity": "0", "transition-property": "opacity", "transition-duration": "2s", "transition-timing-function": "linear", "transition-delay": "0s"})
        //var striped = strips.css({"height"; "100vh", "transition-property": "height", "transition-duration": "2s", "transition-timing-function": "linear", "transition-delay"; "2s"});

        function refreshScreen(){
          fader0.animate({revelation1});  
          fader0a.animate({revelation});
          fader0b.animate({revelation0b});
            
        }
        // function stripMember(){
        //   strips.animate({striped});
        // }

        //stripMember();  
        refreshScreen();
          
         
      }

      else {fader1.stop({movement})};



    });
  });

});