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

$(".menu1__link1").click(function(){
   $(".page1").addClass('opacy1');
   $(".main").addClass('height1');
   $(".page0").addClass('opacy0');
   $(".header").addClass('opacy0');
   $(".page1_body_center").addClass('tit_back');
   $(".page1_body_left").addClass('tit_back1');
   $(".page1_body_right").addClass('tit_back1');
});

$(".menu1__link2").click(function(){
   $(".page2").addClass('opacy1');
   $(".main").addClass('height1');
   $(".page0").addClass('opacy0');
   $(".header").addClass('opacy0');
   $(".page2_items").addClass('tit_back2');
});

$(".menu1__link3").click(function(){
   $(".page3").addClass('opacy1');
   $(".main").addClass('height1');
   $(".page0").addClass('opacy0');
   $(".header").addClass('opacy0');
   $(".page3_items").addClass('tit_back3');
});

$(".close").click(function(){
   $(".page1").removeClass('opacy1');
   $(".page2").removeClass('opacy1');
   $(".page3").removeClass('opacy1');
   $(".page2_items").removeClass('tit_back2');
   $(".page3_items").removeClass('tit_back3');
   $(".main").removeClass('height1');
   $(".page0").removeClass('opacy0');
   $(".header").removeClass('opacy0');
   $(".page1_body_center").removeClass('tit_back');
   $(".page1_body_left").removeClass('tit_back1');
   $(".page1_body_right").removeClass('tit_back1');
});