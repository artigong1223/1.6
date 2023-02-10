import '../scss/style.scss'
import services from './services.js';
import menuBurger from './menuBurger.js';
import modal from './modal.js';
import sectionContent from './sectionContent.js';

import Swiper, {Pagination} from 'swiper';
Swiper.use([Pagination])
new Swiper('.image-slider', {
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  breakpoints: {
      768: {
          simulateTouch: false,
          grabCursor: false,
          touchRatio: 0
      }
  }
  });
