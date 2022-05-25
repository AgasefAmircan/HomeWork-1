$('.header--nav a li').click(function(){
     $('html').css("scrollBehavior","smooth");
});

$('.menu-btn').click(function(){
    $('.header--nav').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});