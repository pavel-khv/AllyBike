$(window).on('load', function() {
	$('#preloader').fadeOut('slow');
});
//searching
$('.search__close').on('click', function() {
	$('.search').removeClass('search-active');
});
$('.button-second').on('click', function() {
	$('.search').addClass('search-active');
});

//burger menu
$('.drop__menu').click(function() {
	$('.header__nav').toggleClass('mobile_active');
});
$(document).on('click', function(event) {
	if ($(event.target).closest(".drop__menu, .header__nav").length) return;
	$('.header__nav').removeClass('mobile_active');
});

//droplink
var dropButton = $('.drop_button');
dropButton.click(function() {
	var dataDrop = $(this).attr('data-drop'); //при клике достаем значение data-tab
	// $('.mobile__dropLinks').css('display', 'none');
	$('.' + dataDrop).slideToggle(0);
});

//footer drop links
var dropButtonFooter = $('.open_links');
dropButtonFooter.click(function() {
	var dataDrop = $(this).attr('data-drop'); //при клике достаем значение data-tab
	// $('.mobile__dropLinks').css('display', 'none');
	$('.' + dataDrop).toggleClass('footer_active');
});

$('.slider').slick({
	dots: true,
	arrows: false,
	infinite: false
});

function products() {
	$('.products').slick({
		slidesToShow: 4,
		infinite: false,
		variableWidth: true,
		responsive: [{
			breakpoint: 1023,
			settings: {
				slidesToShow: 3
			}
		}]
	});
};

function slickify() {
	$('.brands').slick({
		responsive: [{
			breakpoint: 5000,
			settings: "unslick"
		}, {
			breakpoint: 1023,
			settings: {
				slidesToShow: 5,
				variableWidth: true
			}
		}]
	});
}
slickify();
products();
$(window).resize(function() {
	var $windowWidth = $(window).width();
	if ($windowWidth < 1024) {
		slickify();
		products();
	}
});