'use strict';

// Navbar dropdown content

const hamb = document.querySelector('.hamb');

const popup = document.querySelector('#popup');

hamb.addEventListener('click', hambhandler);

function hambhandler(e) {
  e.preventDefault();
  popup.classList.toggle('open');
  headerContainer.classList.toggle('margin__bottom');
}

const navbarDropdown = document.querySelector('.navbar__dropdown');
const navbarDropdownButton = document.querySelector(
  '.navbar__dropdown__button'
);
const navbarDropdownMenu = document.querySelector('.dropdown__menu');
const headerContainer = document.querySelector('.header');

navbarDropdownButton.addEventListener('click', navbarDropdownContent);

function navbarDropdownContent(e) {
  e.preventDefault();
  navbarDropdownMenu.classList.toggle('visible');
  navbarDropdown.classList.toggle('sub-list');
}

// Navigation

const navButtonDropdown = document.querySelector('.dropdown__button');
const navButtonDropdownContent = document.querySelector('.dropdown__content');
const lol = document.querySelector('.header__logo');

const changeNavButtonStyleHovered = function () {
  navButtonDropdown.classList.replace('button', 'button-hovered');
};

const changeNavButtonStyleUnhovered = function () {
  navButtonDropdown.classList.replace('button-hovered', 'button');
};

navButtonDropdownContent.addEventListener(
  'mouseover',
  changeNavButtonStyleHovered
);
navButtonDropdownContent.addEventListener(
  'mouseout',
  changeNavButtonStyleUnhovered
);

window.onresize = function () {
  var windowWidth = document.documentElement.clientWidth;
  if (windowWidth > 990.98) {
    headerContainer.classList.remove('margin__bottom');
  }
  if (windowWidth > 990.98 && popup.classList.contains('open')) {
    popup.classList.remove('open');
  }

  if (windowWidth <= 990.98 && popup.classList.contains('visible')) {
    headerContainer.classList.add('margin__bottom');
  }
};

// Swiper initialization
new Swiper('.image-slider', {
  // Arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //   Navigation scrollbar
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  grabCursor: true,

  //   Scroll by keyboard arrows
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    // pageUpDown: true,
  },
  // Entity
  loop: true,

  //   Autoplay
  autoplay: {
    delay: 1000,
    // stopOnLastSlide: true,
  },

  speed: 800,

  effect: 'fade',
  fadeEffect: {
    crossfade: true,
  },
});

// jQuery(function ($) {
//   function fix_size() {
//     var images = $('.image-slider__image img');
//     images.each(setsize);

//     function setsize() {
//       var img = $(this),
//         img_dom = img.get(0),
//         container = img.parents('.image-slider__image');
//       if (img_dom.complete) {
//         resize();
//       } else img.one('load', resize);

//       function resize() {
//         if (
//           container.width() / container.height() <
//           img_dom.width / img_dom.height
//         ) {
//           img.width('100%');
//           img.height('auto');
//           return;
//         }
//         img.height('100%');
//         img.width('auto');
//       }
//     }
//   }
//   $(window).on('resize', fix_size);
//   fix_size();
// });
