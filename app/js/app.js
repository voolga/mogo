// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
const burger = document.querySelector("#burger");
const popup  = document.querySelector("#popup");
const body = document.body;
const links = Array.from(popup.children);


burger.addEventListener("click", burgerHandler);

function burgerHandler(e) {
e.preventDefault();
popup.classList.toggle("open");
burger.classList.toggle("active");
body.classList.toggle("noscroll");
}


links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  burger.classList.remove("active");
  body.classList.remove("noscroll");
}

// var offsetHeight = document.getElementById('header').offsetHeight;
// alert(offsetHeight);

})

