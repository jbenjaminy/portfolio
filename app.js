'use strict';
$(document).ready(function() {
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