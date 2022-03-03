"use strict";

var destktopNav = document.querySelector(".nav__desktop");
var navlist = document.querySelectorAll(".link");
var burger = document.getElementById("burger");
var navid = document.getElementById("nav");
var phone = document.getElementById("phone");
var icon = document.getElementById("icon"); // Navigarion List

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

window.addEventListener("scroll", addShadow);
burger.addEventListener("click", burgerMenu);
icon.addEventListener("click", togglePhonebox);