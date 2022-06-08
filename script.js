"use strict";
// Modal part
const modal = document.querySelector(".contact__modal");
const btnCloseModal = document.querySelector(".closing");
const btnOpenModal = document.querySelector(".navigation__button");
const blurBackground = document.querySelector(".blur");
const fixedScreen = document.querySelector("html");
const openModal = function () {
  modal.classList.remove("hidden");
  blurBackground.classList.remove("hidden");
  fixedScreen.classList.add("fixed");
};

const closeModal = function () {
  blurBackground.classList.add("hidden");
  modal.classList.add("hidden");
  fixedScreen.classList.remove("fixed");
};
btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

// Slideshow part
// default slide
let currentSlide = 0;
showSlide(currentSlide);

function showSlide(currentSlide) {
  // Nếu lấy bằng getElementsByClassName thì đưa vào mảng
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  slides[0].style.display = "none";
  // console.log(slides[0]);
  slides[1].style.display = "none";
  if (currentSlide == 0) {
    slides[0].style.display = "block";
    dots[0].className += " active";
    dots[1].className = dots[1].className.replace(" active", "");
    currentSlide = 1;
  } else {
    slides[1].style = "block";
    dots[1].className += " active";
    dots[0].className = dots[0].className.replace(" active", "");
    currentSlide = 0;
  }
}

// dropdown section part
// const list = document.querySelector(".section__list");
// const img = document.getElementById("plus1");
// const imgTest = document.getElementsByClassName("dropdown__img");
// // console.log(imgTest);
// // console.log(img);
// list.classList.add("hidden");

// function dropDown(id) {
//   if (list.classList.contains("hidden")) {
//     list.classList.remove("hidden");
//     img.src =
//       "https://ilearning.developteam.net/static/media/subtractMark.e71930d9.svg";
//   } else {
//     list.classList.add("hidden");
//     img.src =
//       "https://ilearning.developteam.net/static/media/plusMark.acf9b383.svg";
//   }
// }
const listArr = document.getElementsByClassName("section__list");
for (let i = 0; i < listArr.length; i++) listArr[i].classList.add("hidden");
function dropDown(id) {
  const img = document.getElementById(`plus${id}`);

  if (listArr[id].classList.contains("hidden")) {
    listArr[id].classList.remove("hidden");
    img.src =
      "https://ilearning.developteam.net/static/media/subtractMark.e71930d9.svg";
  } else {
    listArr[id].classList.add("hidden");
    img.src =
      "https://ilearning.developteam.net/static/media/plusMark.acf9b383.svg";
  }
}

//cmt slideshow
let cmtSlides = document.getElementsByClassName("multi_ele_slideshow__element");
let cmtDot = document.getElementsByClassName("dot--small");
console.log(cmtDot);
console.log(cmtSlides);
for (let i = 3; i < cmtSlides.length; i++) {
  cmtSlides[i].style.display = "none";
}
cmtDot[0].className += " active";
const activeDot = function (currentSlide) {
  for (let i = 0; i < cmtDot.length; i++)
    cmtDot[i].className = cmtDot[i].className.replace(" active", "");
  cmtDot[currentSlide].className += " active";
};
const activeElement = function (startElement, endElement) {
  for (let i = 0; i < cmtSlides.length; i++) {
    cmtSlides[i].style.display = "none";
  }
  for (let i = startElement; i < endElement; i++) {
    cmtSlides[i].style.display = "flex";
  }
};
function showCmtSlide(currentSlide) {
  const startElement = currentSlide + 3;
  const endElement = startElement + 3;

  activeElement(startElement, endElement);
  activeDot(currentSlide);
}
