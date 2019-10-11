//window
$(window).load(function(){
    $('body').addClass('window_load');
  }); //end window load
  
  //document
  $(document).ready(function(){
  
    $(window).scroll(function() {
  
  
  
      var $window = $(window);
      var viewportTop = $window.scrollTop();
      var viewportBottom = viewportTop + $window.height();
  
      //(blockBottom <= viewportBottom) &&  (blockTop >= viewportTop) 
      $('.block').each(function(){
        var thisTop = $(this).offset().top;
        var thisBot = thisTop + $(this).height();
  
        if ( (thisBot <= viewportBottom) &&  (thisTop >= viewportTop)  ) {
          $(this).addClass('active_block');
        } else {
          $(this).removeClass('active_block');
        }  
  
        if( thisBot <= viewportBottom ) {
          $(this).addClass('pos_abs_bot');
        } else {
          $(this).find('.image-holder').removeClass('pos_fixed');
          $(this).removeClass('pos_abs_bot');
        }
      });
  
      $('.image-holder').each(function(){
        var thisTop = $(this).offset().top;
        var thisBot = thisTop + $(this).height();
  
        if( viewportTop >= thisTop ) {
          $(this).addClass('pos_fixed');
        } else {
          $(this).removeClass('pos_fixed');
        }
  
  
      });
  
  
  
  
  
    });
  
  });