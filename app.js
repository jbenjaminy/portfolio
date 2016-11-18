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
		$('.image', this).hide();
		$('.hover-image', this).show();
		$('.description', this).show();
	})

	$('.proj-image').mouseleave(function() {
		$('.image', this).show();
		$('.hover-image', this).hide();
		$('.description', this).hide();
	})
});