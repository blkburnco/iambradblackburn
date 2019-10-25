$(document).ready(function(){ 
     
  $.fn.isInViewport = function() {
  	var elementTop = $(this).offset().top;
  	var elementBottom = elementTop + $(this).outerHeight();

  	var viewportTop = $(window).scrollTop();
  	var viewportBottom = viewportTop + $(window).height();

  	return elementBottom > viewportTop && elementTop < viewportBottom;
	};

  $(window).on('resize scroll', function() {
    $('#section4').each(function() {
			
        var scroller = $("#credits");
        // var movement = scroller.css({"margin-top": "-2500px", "transition-property": "margin-top", "transition-duration": "60s", "transition-timing-function": "linear", "transition-delay": "1s"});

        //var micDrop = $("#section4");
        //var initOpen = micDrop.css({"height": "100vh", "transition-property": "height", "transition-duration": "3s", "transition-timing-function": "easeIn"});
        //var opening = micDrop.css({"height": "50vh", "transition-property": "height", "transition-duration": "3s", "transition-timing-function": "easeIn", "transition-delay": ".5s"});
        
        
        // var goodnight = $("#section4");
        // var closing = goodnight.css({"height": "0vh", "transition-property": "height", "transition-duration": "3s", "transition-timing-function": "easeIn", "transition-delay": "4s"});
        
      
      if ($('#section4').isInViewport()) {
      
          /* function initShop(){
            micdDrop.animate({initOpen});
          }  */

          var movement = scroller.css({"margin-top": "-3000px", "transition-property": "margin-top", "transition-duration": "60s", "transition-timing-function": "linear", "transition-delay": "1s"});
          var goodnight = $('#creds');
          var closing = goodnight.css({"padding":"0", "transition-property":"padding", "height": "0vh", "transition-property": "height", "transition-duration": "3s", "transition-timing-function": "easeIn", "transition-delay": "36s"});

          function openShop(){
            micDrop.animate({opening});
                     }
           
            function startScroll(){
            scroller.animate({movement});
                     }

          function closeShop(){
            goodnight.animate({closing});
          }

           function creditRoll(){
            //micdDrop.animate({initOpen}), {complete: openShop()}, {complete: startScroll()}, {complete: closeShop()};
            //micDrop.animate({opening}, {complete: startScroll()}, {complete: closeShop()});
            scroller.animate({movement}), {complete: closeShop()};
          }

          /*function creditRoll(){
            micdDrop.animate({initOpen}), {complete: openShop()}, {complete: startScroll()}, {complete: closeShop()};
          }*/
      
      
        creditRoll();
      } else {scroller.stop({movement})}
    });
  });
});