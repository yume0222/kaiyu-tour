// Header
const nav = document.querySelector(".header__nav");
const hamburger = document.querySelector(".header__hamburger");
const links = document.querySelectorAll(".header__nav-link");
hamburger.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  hamburger.classList.toggle("is-open");
  hamburger.setAttribute("aria-expanded", isOpen);
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    hamburger.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// Introduction
const introductionItems = document.querySelectorAll(".introduction__item");
introductionItems.forEach((item) => {
  const introductionBtn = item.querySelector(".introduction__more");
  const introductionText = item.querySelector(".introduction__text");
  introductionBtn.addEventListener("click", () => {
    introductionBtn.classList.add("is-hidden");
    introductionText.classList.add("is-open");
  });
});

// Activity
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
  },
});

// Map
const spots = document.querySelectorAll(".spot");
spots.forEach((spot) => {
  const spotBtn = spot.querySelector(".spot__button");
  const spotImg = spot.querySelector(".spot__image");
  spotBtn.addEventListener("mouseenter", () => {
    spotImg.classList.add("is-show");
  });
  spotBtn.addEventListener("mouseleave", () => {
    spotImg.classList.remove("is-show");
  });
});

// 追従ボタン
const fixedBtn = document.querySelector(".fixed-btn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    fixedBtn.classList.add("is-active");
  } else {
    fixedBtn.classList.remove("is-active");
  }
});
