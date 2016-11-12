'use strict';
$(document).ready(function() {
	$('.about-tab').on('click', function(event) {
		$('.page').hide();
		$('.about').show();
	});
	$('.content').on('click', '.portfolio-tab', function(event) {
		$('.page').hide();
		$('.portfolio').show();
	});
	$('.contact-tab').on('click', function(event) {
		$('.page').hide();
		$('.contact').show();
	});

	$('.screenshot').mouseenter(function() {
		$('.description').show();
	})
	.mouseleave(function() {
      $('.description').hide();
	});
});