$(document).ready(function(){ 
     
  $.fn.isInViewport = function() {
  	var elementTop = $(this).offset().top;
  	var elementBottom = elementTop + $(this).outerHeight();

  	var viewportTop = $(window).scrollTop();
  	var viewportBottom = viewportTop + $(window).height();

  	return elementBottom > viewportTop && elementTop < viewportBottom;
	};

  $(window).on('resize scroll', function() {
    $('#timeline').each(function() {
			
      var y1998 = $("#1998");
        
      function yearGrow(){
      if ($('#1998').isInViewport()) {

          var movement = y1998.css({"height": "2500px", "transition-property": "height", "transition-duration": ".5s", "transition-timing-function": "linear", "transition-delay": ".5s"});

          animate({movement});
      }

       else if ($('#1999').isInViewport()) {

          var movement = y1999.css({"height": "2500px", "transition-property": "height", "transition-duration": ".5s", "transition-timing-function": "linear", "transition-delay": ".5s"});

          animate({movement});
      }
      
        yearGrow();
      } else {scroller.stop({movement})}
    });
  });
});