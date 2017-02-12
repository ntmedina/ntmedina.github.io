$(document).ready(function() {
	$('.menu-ic').on('click', function(){
		$('header').toggleClass('header-nav'); 
		$('.menu').toggleClass('menu-nav');     
		$('.social-link').toggleClass('social-nav');       
	})
}) 