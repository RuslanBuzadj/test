$(function(){
  $('.header__burger').click(function(){
      $('.header__burger, .header__nav').toggleClass('active'); 
      $('body').toggleClass('lock');       
  });
 $('.header__nav').click(function(e){
    if(e.target.classList.contains('nav')){
    $('.header__burger, .header__nav').removeClass('active');
    $('body').removeClass('lock');}
 })

  $(".go-to").on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 400);
    $('.input-focus').focus();
		e.preventDefault();
		return false;
	});  

  $(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			$(".header").addClass("active");
		} else {
			$(".header").removeClass("active");
		}
	});

  $(".scroll-bottom").on("click", function(e){
  e.preventDefault();    
		$('html, body').stop().animate({
			scrollTop: document.documentElement.scrollHeight
		}, 777);   
		
		return false;
	});

  if ($(window).width() > '768'){
    $('.nav__item').hover(        
      function () {
          $('ul', this).stop().slideDown(300);
      }, 
      function () {
          $('ul', this).stop().slideUp(300);            
      }       
    );
  }
  if ($(window).width() <= '768'){ 
    $('.nav__item').click(        
      function () {
          $('ul', this).slideToggle(300);
      }
    );
  }
});

