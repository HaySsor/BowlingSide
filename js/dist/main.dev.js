"use strict";

var hamburgerBtn = document.querySelector(".hamburger");
var nav = document.querySelector(".navigation");
var destktopNav = document.querySelector(".nav__desktop");
var navlist = document.querySelectorAll(".link");
var floatingPhoneButto = document.querySelector(".fa-phone-square");
var floatingPhoneBox = document.querySelector(".contact__box"); // Navigarion List

var burgerMenu = function burgerMenu() {
  hamburgerBtn.classList.toggle("hamburger--active");
  nav.classList.toggle("navigation--active");
  navlist.forEach(function (navi) {
    navi.addEventListener("click", function () {
      hamburgerBtn.classList.remove("hamburger--active");
      nav.classList.remove("navigation--active");
    });
  });
}; // shawdo nav desktop


var addShadow = function addShadow() {
  if (window.scrollY >= 100) {
    destktopNav.classList.add("show-bgc");
  } else {
    destktopNav.classList.remove("show-bgc");
  }
};

var togglePhonebox = function togglePhonebox() {
  floatingPhoneBox.classList.toggle("show");
};

window.addEventListener("scroll", addShadow);
hamburgerBtn.addEventListener("click", burgerMenu);
floatingPhoneButto.addEventListener("click", togglePhonebox);