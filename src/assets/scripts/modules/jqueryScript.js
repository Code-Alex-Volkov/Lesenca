var $ = require("jquery"); 

$(document).ready(function(){
	'use strict';

	/* btn menu */
	$('.nav_btn_mobile').click(function(){
	   $('.nav_btn_mobile').toggleClass('nav-active');
		$('.nav_mobile').toggleClass('nav-active_mobile');
		$('.check_in').toggleClass('check-active');
	});


	/* slider one */
	if ($('.slider_stairs').length) {
		$('.slider_stairs').slick({
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  appendArrows: $('.stairs_slider_navigation'),
		  prevArrow: "<div class=\"left\"><i class=\"fas fa-chevron-left\"></i></div>",
		  nextArrow: "<div class=\"right\"><i class=\"fas fa-chevron-right\"></i></div>"
		});
	}

	/* slider two */
	if ($('.slider_work').length) {
		$('.slider_work').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true,
		  appendArrows: $('.work_slider_navigation'),
		  prevArrow: "<div class=\"left\"><i class=\"fas fa-chevron-left\"></i></div>",
		  nextArrow: "<div class=\"right\"><i class=\"fas fa-chevron-right\"></i></div>"
		});
	}

	/* slider one */
	if ($('.slider_works').length) {
		$('.slider_works').slick({
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  appendArrows: $('.works_slider_navigation'),
		  prevArrow: "<div class=\"left\"><i class=\"fas fa-chevron-left\"></i></div>",
		  nextArrow: "<div class=\"right\"><i class=\"fas fa-chevron-right\"></i></div>"
		});
	}

	$('.popup-btn').on('click', function(event) {
		event.preventDefault();
		$('.popup').fadeIn(400);
		$('body').addClass('over_hidden');
	});
	$('.popup-close').on('click', function(event) {
		event.preventDefault();
		$('.popup').fadeOut(400);
		$('body').removeClass('over_hidden');
	});


});