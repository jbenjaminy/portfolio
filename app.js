$(function() {
	$('.about-tab').mousedown(function() {
		$('.main').hide();
		$('.about').show();
	});
	$('.portfolio-tab').mousedown(function() {
		$('.main').hide();
		$('.porfolio').show();
	});
	$('.contact-tab').mousedown(function() {
		$('.main').hide();
		$('.contact').show();
	});

	$('.screenshot').mouseenter(function() {
		$('.description').show();
	})
	.mouseleave(function() {
      $('.description').hide();
	});
});