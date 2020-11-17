// ==================================banner-slider---start
$('.banner-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<ul class="left"><li class="one"><i class="fa fa-chevron-left prev" aria-hidden="true"></i></li></ul>',
    nextArrow: '<ul class="right"><li class="two"><i class="fa fa-chevron-left next" aria-hidden="true"></i></li></ul>',
  });
// ==================================banner-slider--end

// ==================================counter--up--start

$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// ==================================counter--up--end

// ==================================start

$('.blog_plugin').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  fade: false,
  autoplay: false,
  autoplaySpeed: 300,
  centerMode: true,
  centerPadding: 0,
  prevArrow: '<ul class="left"><li class="on"><i class="fa fa-chevron-left prev" aria-hidden="true"></i></li></ul>',
  nextArrow: '<ul class="right"><li class="to"><i class="fa fa-chevron-right next" aria-hidden="true"></i></li></ul>',

});


// $('.team').slick({
//     dots: false,
//     arrows: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: 0,
//     prevArrow: '<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
//     nextArrow: '<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
//   });
// ==================================end


// ==================================testimonial--part---start
$('.top-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.bottom-slider',
});
// ==================================testimonial--top--part---end 

// ==================================testimonial-bottom-part---start
$('.bottom-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  asNavFor: '.top-slider',
  prevArrow: '<ul class="left"><li class="one"><i class="fa fa-chevron-left prev" aria-hidden="true"></i></li></ul>',
  nextArrow: '<ul class="right"><li class="two"><i class="fa fa-chevron-left next" aria-hidden="true"></i></li></ul>',
});
// ==================================testimonial--part---end 

// ==================================images-slider--part---start
$('.image-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  prevArrow: '<ul class="left"><li class="one"><i class="fa fa-chevron-left prev" aria-hidden="true"></i></li></ul>',
  nextArrow: '<ul class="right"><li class="two"><i class="fa fa-chevron-left next" aria-hidden="true"></i></li></ul>',
});
// ==================================images-slider--part---end 


// ==================================menu-bar-part---start
$(".bar").click(function(){
  $(".list").slideToggle()
})


// ==================================menu-bar-part---end 