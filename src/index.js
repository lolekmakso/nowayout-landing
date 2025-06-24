import $ from "jquery";
import "./styles/style.scss";

// Імпорт зображень
import './assets/images/logo.png';
import './assets/images/header/germany.png';
import './assets/images/header/united-kingdom.png';
import './assets/images/icons/location.svg';
import './assets/images/icons/phone.svg';
import './assets/images/icons/arrow.svg';

import './assets/images/icons/facebook.svg';
import './assets/images/icons/instagram.svg';
import './assets/images/icons/pinterest.svg';
import './assets/images/icons/youtube.svg';
import './assets/images/icons/linkedin.svg';
import './assets/images/icons/visa.svg';
import './assets/images/icons/mastercard.svg';
import './assets/images/icons/applepay.svg';
import './assets/images/icons/express.svg';
import './assets/images/icons/paypal.svg';
import './assets/images/icons/arrow-top.svg';
import './assets/images/footer/border.png';
import './assets/images/logo-footer.png';
import './assets/images/rooms/room1.jpg';
import './assets/images/rooms/room2.jpg';
import './assets/images/rooms/room3.jpg';
import './assets/images/rooms/room4.jpg';

import './assets/images/icons/clock.svg';
import './assets/images/icons/level.svg';
import './assets/images/icons/group.svg';
// 🧩 Імпорт логіки
import { initCarousel } from './js/carousel';
import { initBurgerMenu } from './js/burgerMenu';

$(document).ready(function () {
  // Відключення всіх посилань (крім scroll-to-top)
  $('a:not(.scroll-to-top)').on('click', e => e.preventDefault());

  // Ініціалізація логіки
  initCarousel();
  initBurgerMenu();
});

