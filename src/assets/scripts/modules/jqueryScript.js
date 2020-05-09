var $ = require("jquery"); 

$(document).ready(function(){
	'use strict';

	/* btn menu */
	$('.nav_btn_mobile').click(function(){
	   $('.nav_btn_mobile').toggleClass('nav-active');
		$('.nav_mobile').toggleClass('nav-active_mobile');
		$('.check_in').toggleClass('check-active');
	});


		/* slider 3 */
		if ($('.box_quiz_three').length) {
			$('.box_quiz_three').slick({
			  infinite: true,
			  slidesToShow: 5,
			  slidesToScroll: 1,
			  appendArrows: $('.three_slider_navigation'),
			  prevArrow: "<div class=\"left\"><i class=\"fas fa-chevron-left\"></i></div>",
			  nextArrow: "<div class=\"right\"><i class=\"fas fa-chevron-right\"></i></div>"
			});
		}

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

	$('.popup-btn-quiz').on('click', function(event) {
		event.preventDefault();
		$('.popup_quiz').fadeIn(400);
		$('body').addClass('over_hidden');
		$('.slider_box_quiz').slick('refresh');
	});



	$('.next_quiz2').on('click', function(event) {
		event.preventDefault();
		$('.popup_quiz').fadeOut(400);
		$('.popup_quiz2').fadeIn(400);
		$('.popup_quiz3').fadeOut(400);
		$('.popup_quiz4').fadeOut(400);
		$('body').addClass('over_hidden');
	});

	$('.next_quiz3').on('click', function(event) {
		event.preventDefault();
		$('.popup_quiz').fadeOut(400);
		$('.popup_quiz2').fadeOut(400);
		$('.popup_quiz3').fadeIn(400);
		$('.popup_quiz4').fadeOut(400);
		$('body').addClass('over_hidden');
		$('.box_quiz_three').slick('reinit');
	});

	$('.next_quiz4').on('click', function(event) {
		event.preventDefault();
		$('.popup_quiz').fadeOut(400);
		$('.popup_quiz2').fadeOut(400);
		$('.popup_quiz3').fadeOut(400);
		$('.popup_quiz4').fadeIn(400);
		$('body').addClass('over_hidden');
	});


	/*$('.popup-close_quiz').on('click', function(event) {
		event.preventDefault();
		$('.popup_quiz').fadeOut(400);
		$('body').removeClass('over_hidden');
	});*/

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


	/* slider 3 */
	if ($('.slider_box_quiz').length) {
		$('.slider_box_quiz').slick({
		  infinite: true,
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  appendArrows: $('.quiz_slider_navigation'),
		  prevArrow: "<div class=\"left\"><i class=\"fas fa-chevron-left\"></i></div>",
		  nextArrow: "<div class=\"right\"><i class=\"fas fa-chevron-right\"></i></div>"
		});
	}

	 $('.next_quiz2').click(function(){
       var text = $('input[type="radio"][name="happy"]:checked').val();
       $('.right_param_1').text(text);
    });

    $('.next_quiz3').click(function(){
       var text = $('input[type="radio"][name="vid"]:checked').val();
       var height = $('#your_height').val();
       var large = $('#your_large').val();
       var width = $('#your_width').val();
       $('.right_param_2').text(text);
       $('.right_param_3').text(height);
       $('.right_param_4').text(large);
       $('.right_param_5').text(width);
    });

    $('.next_quiz4').click(function(){
       var text = $('input[type="radio"][name="interior"]:checked').val();
       $('.right_param_6').text(text);
    });

});