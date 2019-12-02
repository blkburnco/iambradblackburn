// HAMBURGER 
// $(document).ready(function(){
//   $(".hamburger").click(function(){
//     $(this).toggleClass("is-active");
//   });


// });

//SMOOTH SCROLLING
// ------------------------------
// https://twitter.com/mattsince87
// ------------------------------

function scrollNav() {
  $('.button').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 0
    }, 1000);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();

function scrollsideNav() {
  $('.parallax-nav-item').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 0
    }, 2000);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollsideNav();

// ------------------------------
//BACKGROUND VIDEO
// ------------------------------
$(document).ready(function() {
//Fade in video
    $(function () {
      var video = document.getElementById("bg-video");
      video.addEventListener('play', function (e) {
        $('#bg-video').delay(300).animate({'opacity': '1'}, 500);
      });
    });

  });


//FULL-SCREEN CARDS
// ------------------------------
// https://codepen.io/rachsmith/pen/PWxoLN
// ------------------------------

// listing vars here so they're in the global scope
var cards, nCards, cover, openContent, openContentText, pageIsOpen = false,
    openContentImage, closeContent, windowWidth, windowHeight, currentCard;


// initiate the process
init();

function init() {
  resize();
  selectElements();
  attachListeners();
}

// select all the elements in the DOM that are going to be used
function selectElements() {
  cards = document.getElementsByClassName('card'),
  nCards = cards.length,
  cover = document.getElementById('cover'),
  openContent = document.getElementById('open-content'),
  openContentText = document.getElementById('open-content-text'),
  openContentImage = document.getElementById('open-content-image')
  closeContent = document.getElementById('close-content');
}

/* Attaching three event listeners here:
  - a click event listener for each card
  - a click event listener to the close button
  - a resize event listener on the window
*/
function attachListeners() {
  for (var i = 0; i < nCards; i++) {
    attachListenerToCard(i);
  }
  closeContent.addEventListener('click', onCloseClick);
  window.addEventListener('resize', resize);
}

function attachListenerToCard(i) {
  cards[i].addEventListener('click', function(e) {
    var card = getCardElement(e.target);
    onCardClick(card, i);
  })
}

/* When a card is clicked */
function onCardClick(card, i) {
  // set the current card
  currentCard = card;
  // add the 'clicked' class to the card, so it animates out
  currentCard.className += ' clicked';
  // animate the card 'cover' after a 500ms delay
  setTimeout(function() {animateCoverUp(currentCard)}, 500);
  // animate out the other cards
  animateOtherCards(currentCard, true);
  // add the open class to the page content
  openContent.className += ' open';
  // window.alert(currentCard.id)
  window.location.href = "#team";
}

/*
* This effect is created by taking a separate 'cover' div, placing
* it in the same position as the clicked card, and animating it to
* become the background of the opened 'page'.
* It looks like the card itself is animating in to the background,
* but doing it this way is more performant (because the cover div is
* absolutely positioned and has no children), and there's just less
* having to deal with z-index and other elements in the card
*/
function animateCoverUp(card) {
  // get the position of the clicked card
  var cardPosition = card.getBoundingClientRect();
  // get the style of the clicked card
  var cardStyle = getComputedStyle(card);
  setCoverPosition(cardPosition);
  setCoverColor(cardStyle);
  scaleCoverToFillWindow(cardPosition);
  // update the content of the opened page
  // openContentText.innerHTML = '<h4>'+card.children[2].textContent+'</h4>'+paragraphText;
  // openContentImage.src = card.children[1].src;
  openContent.style.position = 'relative';
  openContent.style.top = '-50px !important';
  openContent.style.zIndex = '10000';

  // change paragraph text based on card clicked
  if (currentCard.id == 'jeff') {
    paragraphText='<h2 class"card-title">Jeff Coleman</h2><h3>Founder &amp; Principal</h3><p>Jeff’s primary role at Churchill is to help each member of our family of clients understand the heart and direction of their message. With over 15 years of experience delivering high level and targeted messaging to audiences, he serves at the center of the brand process. Jeff is involved in all facets of message development from web and ad copy to speech writing and narrative development. His approach continually returns to a commitment of telling each story with grace and authenticity.</p>';
    openContentImage.src = '../../img/about/jeff.jpg';
    openContentText.innerHTML = paragraphText;
    }
  else if (currentCard.id == 'amy') {
    paragraphText='<h2 class"card-title">Amy Kulling</h2><h3>Director of Operations</h3><p>Amy is responsible for providing a seamless, professional engagement between the Churchill team and our family of clients. She meticulously oversees the completion and delivery of contract items, protects the accuracy and integrity of billing and supports team presentations and special projects. Amy’s careful attention to each detail of the process frees the design team to fully invest in the creative process.</p>';
    openContentImage.src = '../../img/about/amy.jpg';
    openContentText.innerHTML = paragraphText;
    }
  else if (currentCard.id == 'donna') {
    paragraphText='<h2 class"card-title">Donna Ceperich</h2><h3>Director of Client Relations</strong></h3><p>Donna holds over two decades of experience managing the customer experience and delivering commitments. With a longtime background serving senior-level military and business leaders, Donna is the primary liaison between valued clients and the Churchill creative team for the duration of a project or engagement. Her signature grace and thoughtful, thorough approach to service is a hallmark of every interaction.</p>';
    openContentImage.src = '../../img/about/donna.jpg';
    openContentText.innerHTML = paragraphText;
    }
  else if (currentCard.id == 'brad') {
    paragraphText='<h2 class"card-title">Brad Blackburn</h2><h3>Director of Web Services</h3><p>Brad is an accomplished visual artist providing skilled leadership and creative expertise to the design team. With a career in the creative services industry spanning 20 years, Brad has had the fortune of serving a diverse range of clientele in areas of brand development, web, print, mobile, animation, live action art direction, and production design.</p>';
    openContentImage.src = '../../img/about/brad-large.jpg';
    openContentText.innerHTML = paragraphText;
    }
  else if (currentCard.id == 'scott') {
    paragraphText='<h2 class"card-title">Scott Cole</h2><h3>Creative Director</h3><p>Scott joined the Churchill team in 2012, bringing a gifted eye and design instinct that has produced some of our team’s most elegant, engaging brands and successful campaigns. From identity packages and book covers to magazine layouts and infographics, Scott serves all aspects of the design process for our family of clients. Scott is notoriously unwilling to shortcut and compromise good style and messaging for a substandard product. The result is an extraordinary product.</p>';
    openContentImage.src = '../../img/about/scott.jpg';
    openContentText.innerHTML = paragraphText;
    }
  else if (currentCard.id == 'corey') {
    paragraphText='<h2 class"card-title">Corey Graham</h2><h3>Designer &amp; Video Producer</h3><p>As Churchill’s multi-talented digital design strategist, Corey is responsible for interpreting the brand’s messaging and communications goals through vivid, compelling websites and online campaigns. As a developer, designer and video editor, he brings some 15 years of experience helping causes and organizations find their true brand. Corey maintains an intense commitment to delivering the best product possible for each client, while paying constant attention to the user experience.</p>';
    openContentImage.src = '../../img/about/corey.jpg';
    openContentText.innerHTML = paragraphText;
    }
  else if (currentCard.id == 'drew') {
    paragraphText='<h2 class"card-title">Drew</h2><h3>Specialist</h3><p>Drew was wearing trench coats and wild hair in the 80s and reading underground comics from the 60s for long as he can remember. In virtually every environment he’s always enjoyed doing his own thing. His love for creative things led him to earning a New York state license to cut hair, the future irony of becoming an art school dropout, and eventually going to Bible college to be a “cool” youth pastor. He’d let the license expire, never becoming a youth pastor, but uses his education now making fun art assets for leading national churches like Rick Warren’s Saddleback Church and New Spring. Drew has had the privilege of working on projects for Nintendo, Xbox, Microsoft, Wizards of the Coast, Waste Management, and more. His humorous cartoon style is well suited for kids’ ministries to mega corporations and everything in between. In a sentence, this unusually gifted artist is a part-time yoga instructor and full-time illustrator, allowing him to be an avid tattoo collector. This is Drew.</p>';
    openContentImage.src = '../../img/about/drew.jpg';
    openContentText.innerHTML = paragraphText;
    }
    else{}

  // else{paragraphText='<p>BALLS!</p>';}


  setTimeout(function() {
    // update the scroll position to 0 (so it is at the top of the 'opened' page)
    // window.scroll(0, 0);
    // set page to open
    pageIsOpen = true;
  }, 300);
}

function animateCoverBack(card) {
  var cardPosition = card.getBoundingClientRect();
  // the original card may be in a different position, because of scrolling, so the cover position needs to be reset before scaling back down
  setCoverPosition(cardPosition);
  scaleCoverToFillWindow(cardPosition);
  // animate scale back to the card size and position
  cover.style.transform = 'scaleX('+1+') scaleY('+1+') translate3d('+(0)+'px, '+(0)+'px, 0px)';
  openContent.style.position = 'absolute';
  openContent.style.top = '0px';
  openContent.style.zIndex = '10000';
  setTimeout(function() {
    // set content back to empty
    openContentText.innerHTML = '';
    openContentImage.src = '';
    // style the cover to 0x0 so it is hidden
    cover.style.width = '0px';
    cover.style.height = '0px';
    // $('#team').scrollView();
    // window.scrollToView('#team');
    document.getElementById('team').scrollIntoView();
    pageIsOpen = false;
    // remove the clicked class so the card animates back in
    currentCard.className = currentCard.className.replace(' clicked', '');
  }, 301);
}

function setCoverPosition(cardPosition) {
  // style the cover so it is in exactly the same position as the card
  cover.style.left = cardPosition.left + 'px';
  cover.style.top = cardPosition.top + 'px';
  cover.style.width = cardPosition.width + 'px';
  cover.style.height = cardPosition.height + 'px';
}

function setCoverColor(cardStyle) {
  // style the cover to be the same color as the card
  cover.style.backgroundColor = /*cardStyle.backgroundColor*/ 'rgba(09,20,35,.95)';
}

function scaleCoverToFillWindow(cardPosition) {
  // calculate the scale and position for the card to fill the page,
  var scaleX = windowWidth / cardPosition.width;
  var scaleY = windowHeight / cardPosition.height;
  var offsetX = (windowWidth / 2 - cardPosition.width / 2 - cardPosition.left) / scaleX;
  var offsetY = (windowHeight / 2 - cardPosition.height / 2 - cardPosition.top) / scaleY;
  // set the transform on the cover - it will animate because of the transition set on it in the CSS
  cover.style.transform = 'scaleX('+scaleX+') scaleY('+scaleY+') translate3d('+(offsetX)+'px, '+(offsetY)+'px, 0px) ';
  cover.style.transitionDuration = '.5s';

}

/* When the close is clicked */
function onCloseClick() {
  // remove the open class so the page content animates out
  openContent.className = openContent.className.replace(' open', '');
  // animate the cover back to the original position card and size
  animateCoverBack(currentCard);
  // animate in other cards
  animateOtherCards(currentCard, false);
  cover.style.transitionDuration = '.5s';
  cover.style.backgroundColor = /*cardStyle.backgroundColor*/ 'rgba(09,20,35,.9)';
}

function animateOtherCards(card, out) {
  var delay = 100;
  for (var i = 0; i < nCards; i++) {
    // animate cards on a stagger, 1 each 100ms
    if (cards[i] === card) continue;
    if (out) animateOutCard(cards[i], delay);
    else animateInCard(cards[i], delay);
    delay += 100;
  }
}

// animations on individual cards (by adding/removing card names)
function animateOutCard(card, delay) {
  setTimeout(function() {
    card.className += ' out';
   }, delay);
}

function animateInCard(card, delay) {
  setTimeout(function() {
    card.className = card.className.replace(' out', '');
  }, delay);
}

// this function searches up the DOM tree until it reaches the card element that has been clicked
function getCardElement(el) {
  if (el.className.indexOf('card ') > -1) return el;
  else return getCardElement(el.parentElement);
}

// resize function - records the window width and height
function resize() {
  if (pageIsOpen) {
    // update position of cover
    var cardPosition = currentCard.getBoundingClientRect();
    setCoverPosition(cardPosition);
    scaleCoverToFillWindow(cardPosition);
  }
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
}

var paragraphText = '<p>Somebody once told me the world is gonna roll me. I ain\'t the sharpest tool in the shed. She was looking kind of dumb with her finger and her thumb in the shape of an "L" on her forehead. Well the years start coming and they don\'t stop coming. Fed to the rules and I hit the ground running. Didn\'t make sense not to live for fun. Your brain gets smart but your head gets dumb. So much to do, so much to see. So what\'s wrong with taking the back streets? You\'ll never know if you don\'t go. You\'ll never shine if you don\'t glow.</p><p>Hey now, you\'re an all-star, get your game on, go play. Hey now, you\'re a rock star, get the show on, get paid. And all that glitters is gold. Only shooting stars break the mold.</p><p>It\'s a cool place and they say it gets colder. You\'re bundled up now, wait till you get older. But the meteor men beg to differ. Judging by the hole in the satellite picture. The ice we skate is getting pretty thin. The water\'s getting warm so you might as well swim. My world\'s on fire, how about yours? That\'s the way I like it and I never get bored.</p>';

//DROPCAP WRAPPING
// ------------------------------
// uses dropcap as a polyfill: 
// https://github.com/adobe-webplatform/dropcap.js
// ------------------------------
function switchsize(state) {
if (state.matches) {
window.Dropcap.layout(dropcap, 2);
} else {
window.Dropcap.layout(dropcap, 3); }
}

var dropcap = document.getElementById("dropcap");
window.Dropcap.layout(dropcap, 3);

var narrow = window.matchMedia("screen and (max-width: 600px)");
narrow.addListener(switchsize);
switchsize(narrow);

/*/////////////////////////////////////////////////////////////////////
HAMBURGER MENU
/////////////////////////////////////////////////////////////////////*/

// function scrollNav() {
//   $('.button').click(function(){  
//     //Toggle Class
//     $(".active").removeClass("active");      
//     $(this).closest('li').addClass("active");
//     var theClass = $(this).attr("class");
//     $('.'+theClass).parent('li').addClass('active');
//     //Animate
//     $('html, body').stop().animate({
//         scrollTop: $( $(this).attr('href') ).offset().top - 0
//     }, 1000);
//     return false;
//   });
//   $('.scrollTop a').scrollTop();
// }
// scrollNav();

//function navTrigger(){
  // $('.trigger').on('click', function() {
  //   $(this).toggleClass('on');
  //   $('.nav-menu').fadeToggle(200);
  // });
//};
//navTrigger();

// function navTrigger(){
//   $('.trigger').click(function() {
//     $('.nav-span').animate({'rotate': '45deg'}, 500);
//     $('.nav-menu').fadeToggle(200);
//   });
// };

// document.getElementById(".trigger").onclick = function navTrigger(){
//   $('.nav-span').animate({'rotate': '45deg'}, 500);
//   $('.nav-menu').fadeToggle(200);
// }

// navTrigger();

// function hamburger(('.trigger').onclick){
//   ('.trigger').toggleClass('on');
//   ('.menu').fadeToggle(200);
// }

// hamburger();


/*/////////////////////////////////////////////////////////////////////
BEFORE AND AFTER
/////////////////////////////////////////////////////////////////////*/
