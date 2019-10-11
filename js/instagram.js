$(document).ready(function() {
    'use strict';
/*-----------------------------------------------------------------------------------*/
    /*	INSTAGRAM
    /*-----------------------------------------------------------------------------------*/
    // var instagramFeed = new Instafeed({
    //     get: 'user',
    //     limit: 9,
    //     userId: 1318245593,
    //     accessToken: '1318245593.bf1a643.a7b1ff1dbfd640dc98be7697256b4fec',
    //     resolution: 'low_resolution',
    //     template: '<div class="item"><figure class="icon-overlay"><a href="{{link}}"><img src="{{image}}" /></a></figure></div>',
    //     after: function() {
	   //      $('#instafeed .item .icon-overlay a').prepend('<span class="icn-more"></span>');
    //         var $portfoliogrid = $('.image-grid .isotope');
    //         $portfoliogrid.isotope({
    //             itemSelector: '.item',
    //             transitionDuration: '0.7s',
    //             masonry: {
    //                 columnWidth: $portfoliogrid.width() / 12
    //             },
    //             layoutMode: 'masonry'
    //         });
    //         $(window).resize(function() {
    //             $portfoliogrid.isotope({
    //                 masonry: {
    //                     columnWidth: $portfoliogrid.width() / 12
    //                 }
    //             });
    //         });
    //         $portfoliogrid.imagesLoaded(function() {
    //             $portfoliogrid.isotope('layout');
    //         });
    //     }
    // });
    // $('#instafeed').each(function() {
    //     instagramFeed.run();
    // });



    // var instagramFeed = new Instafeed({
    //     get: 'user',
    //     limit: 9,
    //     userId: 8036088,
    //     accessToken: '8036088.39dd262.03ed05b020be49c398de7f2de619790b',
    //     resolution: 'low_resolution',
    //     template: '<div class="item"><figure class="icon-overlay"><a href="{{link}}"><img src="{{image}}" /></a></figure></div>',
    //     after: function() {
    //         $('#instafeed .item .icon-overlay a').prepend('<span class="icn-more"></span>');
    //         var $portfoliogrid = $('.image-grid .isotope');
    //         $portfoliogrid.isotope({
    //             itemSelector: '.item',
    //             transitionDuration: '0.7s',
    //             masonry: {
    //                 columnWidth: $portfoliogrid.width() / 12
    //             },
    //             layoutMode: 'masonry'
    //         });
    //         $(window).resize(function() {
    //             $portfoliogrid.isotope({
    //                 masonry: {
    //                     columnWidth: $portfoliogrid.width() / 12
    //                 }
    //             });
    //         });
    //         $portfoliogrid.imagesLoaded(function() {
    //             $portfoliogrid.isotope('layout');
    //         });
    //     }
    // });
    // $('#instafeed').each(function() {
    //     instagramFeed.run();
    // });


    var galleryFeed = new Instafeed({
      get: "user",
      userId: 8036088,
      accessToken: "8036088.39dd262.03ed05b020be49c398de7f2de619790b",
      resolution: "standard_resolution",
      useHttp: "true",
      limit: 9,
      template: '<div><a href="{{image}}" style="margin:0px !important; padding:0px !important;"><div class="img-featured-container"><div class="img-backdrop"></div><div class="description-container"><p class="caption">{{caption}}</p><span class="likes"><i class="icon ion-heart"></i> {{likes}}</span><span class="comments"><i class="icon ion-chatbubble"></i> {{comments}}</span></div><img src="{{image}}" class="img-responsive"></div></a></div>',
      target: "instafeed-gallery-feed",
      after: function() {
        // disable button if no more results to load
        if (!this.hasNext()) {
          btnInstafeedLoad.setAttribute('disabled', 'disabled');
        }
      },
    });
    galleryFeed.run();

    var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
    btnInstafeedLoad.addEventListener("click", function() {
      galleryFeed.next()
    });


    // var instagramFeed2 = new Instafeed({
    //     target: 'instafeed-widget',
    //     get: 'user',
    //     limit: 9,
    //     userId: 1215763826,
    //     accessToken: '1215763826.f1627ea.dad6ca96bd7642519b573d52c3ef467f',
    //     resolution: 'low_resolution',
    //     template: '<div class="item"><figure class="icon-overlay"><a href="{{link}}"><img src="{{image}}" /></a></figure></div>',
    //     after: function() {
	   //      $('#instafeed-widget .item .icon-overlay a').prepend('<span class="icn-more"></span>');
    //         var $portfoliogrid = $('.image-grid .isotope');
    //         $portfoliogrid.isotope({
    //             itemSelector: '.item',
    //             transitionDuration: '0.7s',
    //             masonry: {
    //                 columnWidth: $portfoliogrid.width() / 12
    //             },
    //             layoutMode: 'masonry'
    //         });
    //         $(window).resize(function() {
    //             $portfoliogrid.isotope({
    //                 masonry: {
    //                     columnWidth: $portfoliogrid.width() / 12
    //                 }
    //             });
    //         });
    //         $portfoliogrid.imagesLoaded(function() {
    //             $portfoliogrid.isotope('layout');
    //         });
    //     }
    // });
    // $('#instafeed-widget').each(function() {
    //     instagramFeed2.run();
    // });
});