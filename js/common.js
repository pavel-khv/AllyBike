//прелоадер
$(window).on('load', function() {
	$('#preloader').fadeOut('slow'); //когда загружается страница, то прелоадер исчезает
});

//поиск
$('.search__close').on('click', function() {
	$('.search').removeClass('search-active'); //при нажатии на крестик закрывает инпут поиска
});
$('.button-second').on('click', function() {
	$('.search').addClass('search-active'); //при нажатии на поиск открывается инпут поиска
});

//бургер меню
$('.drop__menu').click(function() {
	$('.header__nav').toggleClass('mobile_active'); //открывает и закрывает меню
});
$(document).on('click', function(event) {
	if ($(event.target).closest(".drop__menu, .header__nav").length) return;
	$('.header__nav').removeClass('mobile_active'); //если кликнули вне блока меню,то закрывает его
});

//выпадающие ссылки
$('.drop_button').click(function() {
	var dataDrop = $(this).attr('data-drop'); //при клике достаем значение data-tab
	$('.' + dataDrop).slideToggle(0); //октрывает или закрывает категорию меню
});

//выпадающие ссылки футер
$('.open_links').click(function() {
	var dataDrop = $(this).attr('data-drop'); //при клике достаем значение data-tab
	$('.' + dataDrop).toggleClass('footer_active'); //октрывает или закрывает категорию меню
});

//главный слайдер
$('.slider').slick({
	dots: true,
	arrows: false,
	infinite: false
});

//слайдер товаров
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
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 2
			}
		}, {
			breakpoint: 479,
			settings: {
				slidesToShow: 1
			}
		}]
	});
};

//слайдер брендов
function brands() {
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
		}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 4,
				variableWidth: true
			}
		}, {
			breakpoint: 479,
			settings: {
				slidesToShow: 3,
				variableWidth: true
			}
		}]
	});
}
brands(); //вызов слайдера брендов
products(); //вызов слайдера товаров

$(window).resize(function() {
	var $windowWidth = $(window).width();
	if ($windowWidth < 1024) { //при ширине окна меньше 1024px обновлять функции слайдеров бренда и товаров
		slickify();
		products();
	}
});