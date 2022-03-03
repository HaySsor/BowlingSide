const destktopNav = document.querySelector(".nav__desktop");
const navlist = document.querySelectorAll(".link");
const burger = document.getElementById("burger");
const navid = document.getElementById("nav");
const phone = document.getElementById("phone");
const icon = document.getElementById("icon");

// Navigarion List
const burgerMenu = () => {
	burger.classList.toggle("hamburger--active");
	navid.classList.toggle("navigation--active");

	navlist.forEach(navi => {
		navi.addEventListener("click", () => {
			burger.classList.remove("hamburger--active");
			navid.classList.remove("navigation--active");
		});
	});
};

document.onclick = function (e) {
	if (
		e.target.id !== "navid" &&
		e.target.id !== "burger" &&
		e.target.id !== "phone" &&
		e.target.id !== "icon"
	) {
		burger.classList.remove("hamburger--active");
		navid.classList.remove("navigation--active");
		phone.classList.remove("show");
	}
};

// shawdo nav desktop
const addShadow = () => {
	if (window.scrollY >= 100) {
		destktopNav.classList.add("show-bgc");
	} else {
		destktopNav.classList.remove("show-bgc");
	}
};

const togglePhonebox = () => {
	phone.classList.toggle("show");
};

window.addEventListener("scroll", addShadow);

burger.addEventListener("click", burgerMenu);
icon.addEventListener("click", togglePhonebox);
