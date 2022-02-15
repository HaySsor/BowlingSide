const hamburgerBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const destktopNav = document.querySelector(".nav__desktop");
const navlist = document.querySelectorAll(".link");
const floatingPhoneButto = document.querySelector('.fa-phone-square')
const floatingPhoneBox = document.querySelector('.contact__box')



// Navigarion List
const burgerMenu = () => {
	hamburgerBtn.classList.toggle("hamburger--active");
	nav.classList.toggle("navigation--active");

	navlist.forEach(navi => {
		navi.addEventListener("click", () => {
			hamburgerBtn.classList.remove("hamburger--active");
			nav.classList.remove("navigation--active");
		});
	});
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
	floatingPhoneBox.classList.toggle('show')
}



window.addEventListener("scroll", addShadow);

hamburgerBtn.addEventListener("click", burgerMenu);
floatingPhoneButto.addEventListener('click',togglePhonebox)


