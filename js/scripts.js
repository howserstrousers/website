window.onload = function() {
$(document).ready(function() {

	$('.skillsb').click(function(){
	            $('.skills').toggle();
	        });

	$('.work_container').slick({
		arrows:false,
	});

	$('.left').click(function(){
	  $('.work_container').slick('slickPrev');
	})

	$('.right').click(function(){
	  $('.work_container').slick('slickNext');
	})

});
}

