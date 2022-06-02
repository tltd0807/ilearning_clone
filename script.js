"use strict";
// Modal part
const modal = document.querySelector(".contact__modal");
const btnCloseModal = document.querySelector(".closing");
const btnOpenModal = document.querySelector(".navigation__button");
const blurBackground = document.querySelector(".blur");

const openModal = function () {
  modal.classList.remove("hidden");
  blurBackground.classList.remove("hidden");
};

const closeModal = function () {
  blurBackground.classList.add("hidden");
  modal.classList.add("hidden");
};
btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

// Slideshow part
// default slide
let currentSlide = 0;
showSlide(currentSlide);

function showSlide(currentSlide) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  slides[0].style.display = "none";
  console.log(slides[0]);
  slides[1].style.display = "none";
  if (currentSlide == 0) {
    slides[0].style.display = "block";
    dots[0].className += " active";
    dots[1].className = dots[1].className.replace(" active", "");
  } else {
    slides[1].style = "block";
    dots[1].className += " active";
    dots[0].className = dots[0].className.replace(" active", "");
  }
}
