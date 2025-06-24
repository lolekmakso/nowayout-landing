import $ from "jquery";

export function initBurgerMenu() {
  $('.burger-menu').on('click', function () {
    const $this = $(this);
    const $menu = $('.mobile-menu');
    const isOpening = !$this.hasClass('active');

    $this.toggleClass('active');
    $menu.toggleClass('active');
    $('body').toggleClass('no-scroll', isOpening);

    if ($('.mobile-nav').children().length === 0) {
      $('.header-nav__link').each(function () {
        $('.mobile-nav').append($(this).clone());
      });

      const locationCity = $('.location__city').text();
      const phone = $('.phone a').text();

      $('.mobile-nav').append(`<div class="mobile-location">${locationCity}</div>`);
      $('.mobile-nav').append(`<div class="mobile-phone">${phone}</div>`);
    }
  });

  $(document).on('click', function (e) {
    if (
      !$(e.target).closest('.burger-menu').length &&
      !$(e.target).closest('.mobile-menu').length
    ) {
      $('.mobile-menu').removeClass('active');
      $('.burger-menu').removeClass('active');
      $('body').removeClass('no-scroll');
    }
  });

  $(window).on('resize', function () {
    if ($(window).width() > 1250) {
      $('.mobile-menu').removeClass('active');
      $('.burger-menu').removeClass('active');
      $('.mobile-nav').empty();
      $('body').removeClass('no-scroll');
    }
  });
}
