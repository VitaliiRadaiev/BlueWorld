let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));


window.addEventListener('load', function () {
	
	document.body.classList.add('is-load');

	// ==== ADD PADDING-TOP ================================
	{
		let wrapper = document.querySelector('._padding-top');
		if (wrapper) {
			let header = document.querySelector('.header');
			if(header) {
				const setPedding = () => wrapper.style.paddingTop = header.clientHeight + 'px';
				setPedding();
				let id = setInterval(setPedding, 200);
				setTimeout(() => {
					clearInterval(id);
				}, 1000)
				window.addEventListener('resize', setPedding);
			}
			
		}
	}
	// ==== AND ADD PADDING-TOP ================================


	@@include('forms.js');
	@@include('_function.js');
	@@include('files/dynamic_adapt.js');
	@@include('../common/header/header.js');
	@@include('../common/promo-preview-products/promo-preview-products.js');
	@@include('../common/bubbles/bubbles.js');
	@@include('../common/product-slider/product-slider.js');
	@@include('../common/story-slider/story-slider.js');
	@@include('../common/hero-slider/hero-slider.js');
	@@include('../common/slider/slider.js');
	@@include('../common/product-details-card/product-details-card.js');
	@@include('../common/branche-slider/branche-slider.js');
	@@include('../common/input-file/input-file.js');
	@@include('../common/usps-slider/usps-slider.js');
	@@include('../common/person-slider/person-slider.js');
	@@include('../common/form-select/form-select.js');
	@@include('../common/products/products.js');



	createTabs('.references', '.references__nav-item', '.references__list');

	let references = document.querySelector('.references');
	if(references) {
		let select = references.querySelector('.form-select.filter');
		let allTabs = references.querySelectorAll('.references__list');

		select.addEventListener('change', () => {
			allTabs.forEach(tab => {
				if (tab.id == select.value) {
					tab.classList.add('active')
				} else {
					tab.classList.remove('active');
				}
			})
		})
	}
});

window.addEventListener('DOMContentLoaded', function() {
	if(isMobile.any()) {
		document.body.classList.add('_is-mobile');
	}


	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});

});

@@include('../common/map/map.js');