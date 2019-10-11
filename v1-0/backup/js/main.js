jQuery(function ($) {
	"use strict";
    $(document).ready(function () {
		//Initialize Fullpage Plugin
        $.fn.fullpage({
            navigation: false,
			resize: false,
			scrollingSpeed: 800,
            slidesNavigation: true,
			css3: true,
            slidesNavPosition: 'bottom',
			keyboardScrolling: true,
			scrollOverflow:true,
			autoScrolling:true,
			paddingTop: '0px',
			paddingBottom: '0px',
			onSlideLeave: function (anchorLink, index, slideIndex, direction) {
				$('#contacts .slimScrollBar').css({'right':'1px','left':''});
			},
        });
		
		//Initialize CountDown Timer & Background Slideshows
		var params = {
			'action'    : 'Initialize'
		};
		$.ajax({
			type: "POST",
			url: "php/mainHandler.php",
			data: params,
			success: function(response){
				if(response){
					var responseObj = jQuery.parseJSON(response);
					if(responseObj.ResponseData)
					{
						if(responseObj.ResponseData.Start_Date)
						{
							var startDate = new Date(responseObj.ResponseData.Start_Date);
							$('#countdown_dashboard').countDown({
								targetDate: {
									'day': startDate.getDate(),
									'month': startDate.getUTCMonth()+1,
									'year': startDate.getFullYear(),
									'hour': 0,
									'min': 0,
									'sec': 0
								},
								omitWeeks: true
							});
						}
						if(responseObj.ResponseData.Backgrounds)
						{
							var bgs = responseObj.ResponseData.Backgrounds;
							var bgsarray = bgs.split(',');
							var obj = [];
							for(var i=0; i< bgsarray.length; i++) {
							   obj.push({"src": bgsarray[i],"fade":1000})
							}
							$.vegas('slideshow', {
								backgrounds: obj
							})('overlay', {
								src: '',
								opacity: '.5'
							});
						}
						
					}
				}
			}
		});
        
		//Initialize Contact Form
		$("#submit_btn").click(function() { 
			var user_name       = $('input[name=name]').val(); 
			var user_email      = $('input[name=email]').val();
			var user_subject      = $('input[name=subject]').val();
			var user_message    = $('textarea[name=message]').val();
			var  post_data = {'userName':user_name, 'userEmail':user_email, 'userSubject':user_subject, 'userMessage':user_message};
			$.post('php/contact.php', post_data, function(response){   
				if(response.type == 'error')
				{
					var output = '<div class="error">'+response.text+'</div>';
				}else{
				  var  output = '<div class="success">'+response.text+'</div>';
					$('#contact_form input').val(''); 
					$('#contact_form textarea').val(''); 
				}
				
				$("#result").hide().html(output).slideDown();
			}, 'json');
		});
		$("#contact_form input, #contact_form textarea").keyup(function() { 
			$("#contact_form input, #contact_form textarea").css('border-color',''); 
			$("#result").slideUp();
		});
		
		//Add Custom Inline CSS 
		if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
		{
		    $('.digit').css({'vertical-align':'top'});   
		}
    });
});