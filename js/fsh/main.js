// Menu
$(".hamburger").hide();

$("#menu").on("click", function() {
  $(".hamburger").slideToggle();
});
// End Menu

// Wow.js
new WOW().init();
// End Wow.js

//Slick (slider)
$('.single-item').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
});

// End Slider