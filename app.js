'use strict';
$(document).ready(function() {
	$(this).scrollTop(0);

	$('.about-tab').on('click', function(event) {
		$('.page').hide();
		$('.about').show();
	});

	$('.portfolio-tab').on('click', function(event) {
		$('.page').hide();
		$('.portfolio').show();
	});

	$('.contact-tab').on('click', function(event) {
		$('.page').hide();
		$('.contact').show();
	});

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
		var target = this.hash;
	    var $target = $(target);
		$('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});

	$('.proj-image').mouseenter(function() {
		$('.image').hide();
		$('.hover-image').show();
		$('.description').show();
	})

	$('.proj-image').mouseleave(function() {
		$('.image').show();
		$('.hover-image').hide();
		$('.description').hide();
	})
});