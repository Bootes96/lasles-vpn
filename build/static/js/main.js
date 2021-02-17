"use strict";

$(document).ready(function () {
  svg4everybody({});

  var bannerSlider = function bannerSlider() {
    $('.js-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '.slider__nav--prev',
      nextArrow: '.slider__nav--next',
      dots: true,
      customPaging: function customPaging(slider, i) {
        return "<a class=\"slider__dot\"></a>";
      },
      appendDots: '.slider__dots',
      responsive: [{
        breakpoint: 875,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }]
    });
  };

  var sandwichToggle = function sandwichToggle() {
    // Выбираем элементы, которые нам нужны. В примере мы ищем элементы с классом "sandwich"
    var sandwichElements = document.querySelectorAll('.sandwich'); // Проходим циклом по всем элементам и на каждый элемент вешаем слушателя, который по клику будет переключать класс

    sandwichElements.forEach(function (item) {
      item.addEventListener('click', showSandwichTarget);
    });

    function showSandwichTarget() {
      var targetId = this.getAttribute('data-target-id'),
          targetClassToggle = this.getAttribute('data-target-class-toggle');
      this.classList.toggle('is-active');

      if (targetId && targetClassToggle) {
        document.getElementById(targetId).classList.toggle(targetClassToggle);
      }

      var mobileNav = document.querySelector('.mobile-nav__body');

      if (mobileNav.classList.contains('mobile-nav__body--active')) {
        mobileNav.classList.remove('mobile-nav__body--active');
      } else {
        mobileNav.classList.add('mobile-nav__body--active');
      }
    }
  };

  sandwichToggle();
  bannerSlider();
}); // Полифилы
// forEach IE 11

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
} // closest IE 11


(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }

      return null;
    };
  }
})(); // matches IE 11


(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})(); //Array.form IE 11


if (!Array.from) {
  Array.from = function (object) {
    'use strict';

    return [].slice.call(object);
  };
}