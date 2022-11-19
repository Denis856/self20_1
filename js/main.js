var menu_img = document.querySelector('.menu_img');
var main = document.querySelector('.main');

function turn() {
   menu_img.classList.toggle('turn');
}

$(".menu_img").click(function(){
   $(".menu1__list").toggleClass('turn2');
});

$(".main").click(function(){
   $(".menu_img").removeClass('turn');
   $(".menu1__list").removeClass('turn2');
});

// =======================================================

$(function(){
   $('a[href^="#"]').click(function(){
   var target = $(this).attr('href');
   $('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
   return false;
   });
   });

// =======================================================


   function consoleBG() {
      if ($(window).scrollTop() == 0) {
         $(".header").removeClass('bg32');
         $(".menu1__link").removeClass('bg32');
      } else {
         $(".header").addClass('bg32');
         $(".menu1__link").addClass('bg32');
      }
   }
   consoleBG();
   $(window).scroll(function() {
      consoleBG();
   });


// =========================================