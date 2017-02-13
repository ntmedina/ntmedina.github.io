$(document).ready(function() {
	$('.menu-ic').on('click', function(){
		$('header').toggleClass('header-nav'); 
		$('.menu').toggleClass('menu-nav');   
		$('.close-ic').toggleClass('close-ic-nav');  
		$('.menu-ic').toggleClass('menu-ic-nav');    
	})
	$('.close-ic').on('click', function(){
		$('header-nav').addClass('header')
		$('header').removeClass('header-nav');

		$('.menu-ic-nav').addClass('menu-ic');
		$('.menu-ic').removeClass('menu-ic-nav');

		$('.menu-nav').addClass('menu');
		$('.menu').removeClass('menu-nav');

		$('header-nav').addClass('.header');
		$('header').removeClass('header-nav');

		$('.close-ic-nav').addClass('close-ic')
		$('.close-ic').removeClass('close-ic-nav');   
	})

}) 