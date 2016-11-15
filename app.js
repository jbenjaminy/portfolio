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

	$('.image').hover(function() {
		$('.image').hide();
		$('.hover-image').show();
		$('.description').show();
	});
});