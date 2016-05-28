// $('.frg-team-logo a:odd').css('background', '#fff');
// $(".owl-carousel").owlCarousel({
// 	items: 1,
// 	loop: true,
// 	dots: true,
// 	autoplay: true,
// 	smartSpeed: 2000,
// 	animateOut: 'fadeOut'
// });		
// $(".caption h4").dotdotdot({
// 	ellipsis	: '... ',
// 	wrap		: 'word',
// 	fallbackToLetter: true,

// });
// $(".frg-summary").dotdotdot({
// 	ellipsis	: '... ',
// 	wrap		: 'word',
// 	fallbackToLetter: true,
// 	height		: 40
// });

$(document).ready(function(){
	$('.frg-team-logo a:odd').css('background', '#fff');
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		autoplay: true,
		smartSpeed: 2000,
		animateOut: 'fadeOut'
	});		
	$(".frg-summary").dotdotdot({
		ellipsis			: '... ',
		wrap				: 'word',
		fallbackToLetter	: true,
		height				: 20
	});
});