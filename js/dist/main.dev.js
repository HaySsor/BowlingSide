"use strict";

var destktopNav = document.querySelector(".nav__desktop");
var navlist = document.querySelectorAll(".link");
var burger = document.getElementById("burger");
var navid = document.getElementById("nav");
var phone = document.getElementById("phone");
var icon = document.getElementById("icon");
var navDesktop = document.querySelectorAll(".nav__desktop-item");
var cardBox = document.querySelectorAll(".arrangements__boxs-box");
var quesIcon = document.querySelectorAll(".fa-question-circle");
var allIcon = document.querySelectorAll(".icon");
var planningBtn = document.querySelector(".icon1");
var planningPhoto = document.querySelector(".planning__box-planning-info-photo");
var finanseBtn = document.querySelector(".icon3");
var finansePhoto = document.querySelector(".planning__box-finances-info-photo");
var lanesBtn = document.querySelector(".icon2");
var lanesPhoto = document.querySelector(".planning__box-lanes-info-photo");
var arrangementsBtn = document.querySelector(".icon4");
var arrangementsPhoto = document.querySelector(".planning__box-arrangements-info-photo");
var equipmentBtn = document.querySelector(".icon5");
var equipmentPhoto = document.querySelector(".planning__box-equipment-info-photo");
var allPhoto = document.querySelectorAll(".galleryPhoto__box-item");
var galleryBtn = document.querySelector(".galleryPhoto__btn-box-button");
var firstPhoto = document.querySelector(".first"); // Navigarion List

var burgerMenu = function burgerMenu() {
  burger.classList.toggle("hamburger--active");
  navid.classList.toggle("navigation--active");
  navlist.forEach(function (navi) {
    navi.addEventListener("click", function () {
      burger.classList.remove("hamburger--active");
      navid.classList.remove("navigation--active");
    });
  });
};

document.onclick = function (e) {
  if (e.target.id !== "navid" && e.target.id !== "burger" && e.target.id !== "phone" && e.target.id !== "icon") {
    burger.classList.remove("hamburger--active");
    navid.classList.remove("navigation--active");
    phone.classList.remove("show");
  }
}; // shawdo nav desktop


var addShadow = function addShadow() {
  if (window.scrollY >= 100) {
    destktopNav.classList.add("show-bgc");
  } else {
    destktopNav.classList.remove("show-bgc");
  }
};

var togglePhonebox = function togglePhonebox() {
  phone.classList.toggle("show");
};

var showCard = function showCard() {
  quesIcon.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var title = e.target.previousElementSibling;
      var card = e.target.nextElementSibling;
      console.log(e.target);

      if (e.target.matches(".fa-question-circle")) {
        title.classList.toggle("hidden");
        card.classList.toggle("show-card");
      }
    });
  });
};

var showPlaningPhoto = function showPlaningPhoto() {
  allIcon.forEach(function (item) {
    item.addEventListener("click", function (e) {
      if (e.target.matches(".icon")) e.target.classList.toggle("arrow-rotate");
    });
  });
};

showCard();
showPlaningPhoto();

var planningToggle = function planningToggle() {
  planningPhoto.classList.toggle("show-photo1");
};

var finanseToggle = function finanseToggle() {
  finansePhoto.classList.toggle("show-photo2");
};

var linesToggle = function linesToggle() {
  lanesPhoto.classList.toggle("show-photo3");
};

var arrangementsToggle = function arrangementsToggle() {
  arrangementsPhoto.classList.toggle("show-photo4");
};

var equipmentToggle = function equipmentToggle() {
  equipmentPhoto.classList.toggle("show-photo5");
};

function galleryShow() {
  allPhoto.forEach(function (item) {
    item.classList.toggle("show-photo1");
  });

  if (firstPhoto.classList.contains("show-photo1")) {
    console.log(firstPhoto);
    galleryBtn.textContent = "Showaj";
  } else {
    galleryBtn.textContent = "Pokaż";
  }
}

window.addEventListener("scroll", addShadow);
burger.addEventListener("click", burgerMenu);
icon.addEventListener("click", togglePhonebox);
planningBtn.addEventListener("click", planningToggle);
lanesBtn.addEventListener("click", linesToggle);
arrangementsBtn.addEventListener("click", arrangementsToggle);
finanseBtn.addEventListener("click", finanseToggle);
equipmentBtn.addEventListener("click", equipmentToggle);
galleryBtn.addEventListener("click", galleryShow);