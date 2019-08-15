$(function () {
	$("#normal_select").dropkick({
		mobile: true
	});
});


$(document).ready(function () {
	$(".slide-one").owlCarousel({
		loop: true, //Зацикливаем слайдер
		margin: 10, //Отступ от картино если выводите больше 1
		nav: false, //Отключил навигацию
		autoplay: false, //Автозапуск слайдера
		smartSpeed: 500, //Время движения слайда
		autoplayTimeout: 2000, //Время смены слайда
		responsive: { //Адаптация в зависимости от разрешения экрана
			0: {
				items: 1
			},
			450: {
				items: 2
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});

	$(".slide-two").owlCarousel({
		loop: true, //Зацикливаем слайдер
		margin: 10, //Отступ от картино если выводите больше 1
		nav: false, //Отключил навигацию
		autoplay: false, //Автозапуск слайдера
		smartSpeed: 500, //Время движения слайда
		autoplayTimeout: 4000, //Время смены слайда
		responsive: { //Адаптация в зависимости от разрешения экрана
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	$(".slide-three").owlCarousel({
		loop: true, //Зацикливаем слайдер
		margin: 10, //Отступ от картино если выводите больше 1
		nav: false, //Отключил навигацию
		autoplay: false, //Автозапуск слайдера
		smartSpeed: 500, //Время движения слайда
		autoplayTimeout: 4000, //Время смены слайда
		responsive: { //Адаптация в зависимости от разрешения экрана
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
});