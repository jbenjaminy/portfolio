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

	// $('.screenshot').mouseenter(function() {
	// 	$('.description').show();
	// })
	// .mouseleave(function() {
 //      $('.description').hide();
	// });
});