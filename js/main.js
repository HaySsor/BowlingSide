const destktopNav = document.querySelector(".nav__desktop");
const navlist = document.querySelectorAll(".link");
const burger = document.getElementById("burger");
const navid = document.getElementById("nav");
const phone = document.getElementById("phone");
const icon = document.getElementById("icon");
const navDesktop = document.querySelectorAll(".nav__desktop-item");

const cardBox = document.querySelectorAll(".arrangements__boxs-box");

const quesIcon = document.querySelectorAll(".fa-question-circle");

const allIcon = document.querySelectorAll(".icon");

const planningBtn = document.querySelector(".icon1");
const planningPhoto = document.querySelector(
	".planning__box-planning-info-photo"
);
const finanseBtn = document.querySelector(".icon3");
const finansePhoto = document.querySelector(
	".planning__box-finances-info-photo"
);
const lanesBtn = document.querySelector(".icon2");
const lanesPhoto = document.querySelector(".planning__box-lanes-info-photo");

const arrangementsBtn = document.querySelector(".icon4");
const arrangementsPhoto = document.querySelector(
	".planning__box-arrangements-info-photo"
);

const equipmentBtn = document.querySelector(".icon5");
const equipmentPhoto = document.querySelector(
	".planning__box-equipment-info-photo"
);

const allPhoto = document.querySelectorAll(".galleryPhoto__box-item");

const galleryBtn = document.querySelector(".galleryPhoto__btn-box-button");

const firstPhoto = document.querySelector(".first");

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

const showCard = () => {
	quesIcon.forEach(item => {
		item.addEventListener("click", e => {
			const title = e.target.previousElementSibling;
			const card = e.target.nextElementSibling;
			console.log(e.target);

			if (e.target.matches(".fa-question-circle")) {
				title.classList.toggle("hidden");
				card.classList.toggle("show-card");
			}
		});
	});
};

const showPlaningPhoto = () => {
	allIcon.forEach(item => {
		item.addEventListener("click", e => {
			if (e.target.matches(".icon")) e.target.classList.toggle("arrow-rotate");
		});
	});
};

showCard();
showPlaningPhoto();

const planningToggle = () => {
	planningPhoto.classList.toggle("show-photo1");
};
const finanseToggle = () => {
	finansePhoto.classList.toggle("show-photo2");
};
const linesToggle = () => {
	lanesPhoto.classList.toggle("show-photo3");
};
const arrangementsToggle = () => {
	arrangementsPhoto.classList.toggle("show-photo4");
};
const equipmentToggle = () => {
	equipmentPhoto.classList.toggle("show-photo5");
};



function galleryShow() {
	allPhoto.forEach(item => {
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
