import $ from "jquery";

import roomsData from "../data/rooms.json";
import horrorIcon from "../assets/images/rooms/horror-icon.svg";

export function initCarousel() {
  const $carouselWrapper = $(".rooms__carousel-wrapper");
  const $carousel = $(".rooms__carousel");

  roomsData.forEach(room => {
    const tagIcon = room.tag === "Horror with live actor"
      ? `<img class="room-card__tag-icon" src="${horrorIcon}" alt="tag icon">`
      : "";

    const $card = $(`
      <div class="room-card">
        <div class="room-card__top">
          <img src="${room.image}" alt="${room.title}" />
          <span class="room-card__tag">${tagIcon}${room.tag}</span>
          <h3 class="room-card__title">${room.title}</h3>
        </div>
        <div class="room-card__content">
          <ul class="room-card__info">
            <li><img src="images/clock.svg" alt="duration" /> ${room.duration}</li>
            <li><img src="images/level.svg" alt="difficulty" /> ${room.difficulty}</li>
            <li><img src="images/group.svg" alt="players" /> ${room.players}</li>
          </ul>
          <p class="room-card__desc">${room.description}</p>
          <a href="#" class="room-card__btn">Select game</a>
        </div>
      </div>
    `);

    $carousel.append($card);
  });

  function shouldScrollBeEnabled() {
    const totalCardWidth = Array.from($(".room-card")).reduce((acc, card) => acc + $(card).outerWidth(true), 0);
    return totalCardWidth > $carouselWrapper.width();
  }

  function addScrollButtons() {
    const $leftBtn = $('<button class="carousel-arrow left"><</button>');
    const $rightBtn = $('<button class="carousel-arrow right">></button>');
    $(".rooms__container").append($leftBtn, $rightBtn);

    $leftBtn.on("click", () => $carouselWrapper.animate({ scrollLeft: "-=337" }, 1));
    $rightBtn.on("click", () => $carouselWrapper.animate({ scrollLeft: "+=337" }, 1));
  }

  function setupCarousel() {
    if (shouldScrollBeEnabled()) {
      $carouselWrapper.css("overflow-x", "auto");
      addScrollButtons();
    } else {
      $carouselWrapper.css("overflow-x", "hidden");
      $carousel.css("justify-content", "flex-start");
    }
  }

  setupCarousel();
  $(window).on("resize", () => {
    $(".carousel-arrow").remove();
    setupCarousel();
  });
}
