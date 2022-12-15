(function($, root, undefined){
	$(document).ready(function(){
		const $search = $(".search");
		const $search_input = $search.find('.search__input');
		const $search_button = $search.find('.search__button');
		const $arrows = $('.arrows');
		const $arrowLeft = $arrows.find('.arrow-left');
		const $arrowRight = $arrows.find('.arrow-right');
		
		$(".owl-carousel--main").owlCarousel({
			loop:true,
			autoplay:true,
			autoplaySpeed:5000,
			autoplayTimeout:8000,
			nav:true,
			navContainer: $arrows,
			navText: [$arrowLeft, $arrowRight],
		    items:1,
		    margin:10,
		    // autoHeight:true
		});

		$(".owl-carousel--about").owlCarousel({
			loop:true,
			autoplay:true,
			autoplaySpeed:1500,
		    items:1,
		    margin:10,
		    // autoHeight:true
		});


		$search_button.click(function(){
			$search.toggleClass('active');
		});
	});

})(jQuery, this);