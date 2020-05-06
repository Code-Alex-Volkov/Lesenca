var $ = require("jquery"); 

$(document).ready(function(){
	'use strict';

	/* btn menu */
	$('.nav_btn_mobile').click(function(){
	   $('.nav_btn_mobile').toggleClass('nav-active');
		$('.nav_mobile').toggleClass('nav-active_mobile');
		$('.check_in').toggleClass('check-active');
	});


	/* slider choose */
	if ($('.line_content_mobile').length) {
		if($('body').innerWidth() < 480){
			$('.line_content_mobile').slick({
				centerMode: true,
				centerPadding: '15px',
				slidesToShow: 1,
				arrows: false
			});
			$('.line_content').addClass('line_content_mobile');
		}
		else{
			$('.line_content').revomeClass('line_content_mobile');
		}		
	}

});