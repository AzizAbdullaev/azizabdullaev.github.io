// Menu
$(".navbar").hide();

$("#menu").on("click", function() {
  $(".navbar").slideToggle();
});
// End Menu

//Scroll
$(document).ready(function() {
  $("#navigation, #nav-mobile").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
// End Scroll

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
  responsive: [
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slideToScroll: 1
      }
    }
  ]
});

// End Slider