// v3.1.0
//Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Harrisburg, PA',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2 class="temperature"> <i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg; <span style="font-weight:900 !important; font-size:.6em !important;"><sup>'+weather.units.temp+'</sup></span></h2>';
      // html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      // html += '<li class="currently">'+weather.currently+'</li>';
      // html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});