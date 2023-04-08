// the hamburger menu
let hamburger = document.querySelector(".hamburger");
let list = document.querySelector(".hide_list");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("animate_hamburger");
  list.classList.toggle("list_show");
});
// change nav background on scroll
let header = document.querySelector("header ");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});
// the swiper part

var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 2,
    },
  },
});
AOS.init();
// the arrow up
let arrow = document.querySelector(".arrow");
window.addEventListener("scroll", () => {
  arrow.classList.toggle("show_arrow", window.scrollY >= 600);
  arrow.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
// the cookie system
let cookie = document.querySelector(".cookie");
let btns = document.querySelectorAll(".btns button");
const cookiedrop = () => {
  // ? if document contains sharif-tarek then return and don't complete the code under this condition
  if (document.cookie.includes("sharif-tarek")) return;
  cookie.classList.add("sCookie");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      cookie.classList.remove("sCookie");
      if (btn.id == "accept") {
        document.cookie =
          "cookiecontent=sharif-tarek; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};
window.addEventListener("load", cookiedrop);
// the part of the hamburger menu links
let links = document.querySelectorAll(".hide_list li a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    list.classList.remove("list_show");
    hamburger.classList.remove("animate_hamburger");
  });
});
// the part of the spinner
let loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  loader.classList.add("loader_hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});
