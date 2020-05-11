var $ = require("jquery"); 

$(document).ready(function(){
	'use strict';

	/* btn menu */
	$('.nav_btn').click(function(){
	   $('.nav_btn').toggleClass('nav-active');
		$('.nav_mobile').toggleClass('nav-active');
	});


	/* slider 3 */
	if ($('.box_quiz_three').length) {
		$('.box_quiz_three').slick({
		  infinite: true,
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  appendArrows: $('.three_slider_navigation'),
		  prevArrow: "<div class=\"left\"><i class=\"fas fa-chevron-left\"></i></div>",
		  nextArrow: "<div class=\"right\"><i class=\"fas fa-chevron-right\"></i></div>",
		  responsive: [
			  	{
			  		breakpoint: 993,
			  		settings: {
			  			slidesToShow: 4,
			  			slidesToScroll: 1
			  		}
			  	},
			  	{
			  		breakpoint: 769,
			  		settings: {
			  			slidesToShow: 3,
			  			slidesToScroll: 1
			  		}
			  	},
			  	{
			  		breakpoint: 577,
			  		settings: {
			  			slidesToShow: 2,
			  			slidesToScroll: 1,
			  			dots: true,
			  			arrows: false
			  		}
			  	},
			  	{
			  		breakpoint: 401,
			  		settings: {
			  			slidesToShow: 1,
			  			slidesToScroll: 1,
			  			dots: true,
			  			arrows: false
			  		}
			  	}
		  ]
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
		  nextArrow: "<div class=\"right\"><i class=\"fas fa-chevron-right\"></i></div>",
		  responsive: [
			  	{
			  		breakpoint: 993,
			  		settings: {
			  			slidesToShow: 2,
			  			slidesToScroll: 1
			  		}
			  	},
			  	{
			  		breakpoint: 577,
			  		settings: {
			  			slidesToShow: 1,
			  			slidesToScroll: 1,
			  			dots: true,
			  			arrows: false
			  		}
			  	}
		  ]
		});
	}

	/* slider two */
	/*if ($('.slider_work').length) {
		$('.slider_work').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: true,
		  appendArrows: $('.work_slider_navigation'),
		  prevArrow: "<div class=\"left\"><i class=\"fas fa-chevron-left\"></i></div>",
		  nextArrow: "<div class=\"right\"><i class=\"fas fa-chevron-right\"></i></div>"
		});
	}*/

	/*if ($('.slider_work').length) {
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

		$('.work_slider_navigation').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		  var tabs_container = $('.project_tab_container');

		  tabs_container.find($('.tab-item')).hide();
		  tabs_container.find($('.tab-' + nextSlide)).show();
		});*/


		if ($('.slider_work').length) {
			$('.slider_work').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				fade: false,
				dots: true,
				appendArrows: $('.work_slider_navigation'),
			   prevArrow: "<div class=\"left\"><i class=\"fas fa-chevron-left\"></i></div>",
			   nextArrow: "<div class=\"right\"><i class=\"fas fa-chevron-right\"></i></div>",
				asNavFor: '.project_slider_nav'
			});
			$('.project_slider_nav').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				asNavFor: '.slider_work',
				dots: false,
				arrows: false,
				//centerMode: false,
				focusOnSelect: true
			});

			$('.project_slider_nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			  var tabs_container = $('.project_tab_container');

			  tabs_container.find($('.tab-item')).hide();
			  tabs_container.find($('.tab-' + nextSlide)).show();
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
		  nextArrow: "<div class=\"right\"><i class=\"fas fa-chevron-right\"></i></div>",
		 responsive: [
			  	{
			  		breakpoint: 993,
			  		settings: {
			  			slidesToShow: 2,
			  			slidesToScroll: 1
			  		}
			  	},
			  	{
			  		breakpoint: 577,
			  		settings: {
			  			slidesToShow: 1,
			  			slidesToScroll: 1,
			  			dots: true,
			  			arrows: false
			  		}
			  	}
		  ]
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
		$('.box_quiz_three').slick('refresh');
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
		  nextArrow: "<div class=\"right\"><i class=\"fas fa-chevron-right\"></i></div>",
		  responsive: [
			  	{
			  		breakpoint: 993,
			  		settings: {
			  			slidesToShow: 4,
			  			slidesToScroll: 1
			  		}
			  	},
			  	{
			  		breakpoint: 769,
			  		settings: {
			  			slidesToShow: 3,
			  			slidesToScroll: 1
			  		}
			  	},
			  	{
			  		breakpoint: 577,
			  		settings: {
			  			slidesToShow: 2,
			  			slidesToScroll: 1,
			  			dots: true,
			  			arrows: false
			  		}
			  	},
			  	{
			  		breakpoint: 401,
			  		settings: {
			  			slidesToShow: 1,
			  			slidesToScroll: 1,
			  			dots: true,
			  			arrows: false
			  		}
			  	}
		  ]
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


//project block slider
	/*if ($('.project_slider').length) {
		$('.project_slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.project_slider_nav'
		});
		$('.project_slider_nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.project_slider',
			dots: false,
			arrows: false,
			//centerMode: false,
			focusOnSelect: true
		});

		$('.project_slider_nav').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		  var tabs_container = $('.project_tab_container');

		  tabs_container.find($('.tab-item')).hide();
		  tabs_container.find($('.tab-' + nextSlide)).show();
		});
	}*/

	/*<section class="centr_box">
		<div class="price_container">
			<div class="left_block">
				<div class="project_slider">
					<div class="slid"><img src="assets/images/project-single/img1.jpg" alt=""></div>
					<div class="slid"><img src="assets/images/project-single/img2.jpg" alt=""></div>
					<div class="slid"><img src="assets/images/project-single/img3.jpg" alt=""></div>
					<div class="slid"><img src="assets/images/project-single/img4.jpg" alt=""></div>
					<div class="slid"><img src="assets/images/project-single/img5.jpg" alt=""></div>
				</div>	
			</div>
			<div class="right_block">
				<div class="project_tab_container">
					<div class="top_box tab-item tab-0">
						<h2 class="title">Проект</h2>
						<h1 class="title_project">Название блока 1</h1>
						<span class="sub_title">Краткое описание сайта, пару строк про сайт и ещё что нибудь.</span>
						<div class="price_box">
							<div class="time_block">
								<span class="text">Время:</span>
								<span class="time">53 мин</span>
							</div>
							<div class="price_block">
								<span class="text">Цена:</span>
								<span class="price">300 руб</span>
							</div>
							<div class="btn_clic">
								<a class="popup-btn" href="#">Заказать сайт</a>
							</div>
						</div>
					</div>
					<div class="top_box tab-item tab-1">
						<h2 class="title">Проект</h2>
						<h1 class="title_project">Название блока 2</h1>
						<span class="sub_title">Краткое описание сайта, пару строк про сайт и ещё что нибудь.</span>
						<div class="price_box">
							<div class="time_block">
								<span class="text">Время:</span>
								<span class="time">52 мин</span>
							</div>
							<div class="price_block">
								<span class="text">Цена:</span>
								<span class="price">350 руб</span>
							</div>
							<div class="btn_clic">
								<a class="popup-btn" href="#">Заказать сайт</a>
							</div>
						</div>
					</div>
					<div class="top_box tab-item tab-2">
						<h2 class="title">Проект</h2>
						<h1 class="title_project">Название блока 3</h1>
						<span class="sub_title">Краткое описание сайта, пару строк про сайт и ещё что нибудь.</span>
						<div class="price_box">
							<div class="time_block">
								<span class="text">Время:</span>
								<span class="time">51 мин</span>
							</div>
							<div class="price_block">
								<span class="text">Цена:</span>
								<span class="price">400 руб</span>
							</div>
							<div class="btn_clic">
								<a class="popup-btn" href="#">Заказать сайт</a>
							</div>
						</div>
					</div>
					<div class="top_box tab-item tab-3">
						<h2 class="title">Проект</h2>
						<h1 class="title_project">Название блока 4</h1>
						<span class="sub_title">Краткое описание сайта, пару строк про сайт и ещё что нибудь.</span>
						<div class="price_box">
							<div class="time_block">
								<span class="text">Время:</span>
								<span class="time">50 мин</span>
							</div>
							<div class="price_block">
								<span class="text">Цена:</span>
								<span class="price">450 руб</span>
							</div>
							<div class="btn_clic">
								<a class="popup-btn" href="#">Заказать сайт</a>
							</div>
						</div>
					</div>
					<div class="top_box tab-item tab-4">
						<h2 class="title">Проект</h2>
						<h1 class="title_project">Название блока 5</h1>
						<span class="sub_title">Краткое описание сайта, пару строк про сайт и ещё что нибудь.</span>
						<div class="price_box">
							<div class="time_block">
								<span class="text">Время:</span>
								<span class="time">49 мин</span>
							</div>
							<div class="price_block">
								<span class="text">Цена:</span>
								<span class="price">500 руб</span>
							</div>
							<div class="btn_clic">
								<a class="popup-btn" href="#">Заказать сайт</a>
							</div>
						</div>
					</div>
				</div>				
				
				<div class="project_slider_nav">
					<div class="slid_nav"><img src="assets/images/project-single/img1.jpg" alt=""></div>
					<div class="slid_nav"><img src="assets/images/project-single/img2.jpg" alt=""></div>
					<div class="slid_nav"><img src="assets/images/project-single/img3.jpg" alt=""></div>
					<div class="slid_nav"><img src="assets/images/project-single/img4.jpg" alt=""></div>
					<div class="slid_nav"><img src="assets/images/project-single/img5.jpg" alt=""></div>
				</div>
			</div>
		</div>		
	</section>*/