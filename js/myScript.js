// When nav toggle button is pressed, nav list drops down

const navToggleButton = document.getElementsByClassName("nav-toggler")[0];
const navList = document.getElementsByClassName("nav-list")[0];

navToggleButton.addEventListener("click", () => {
	navList.classList.toggle("display-nav-list");
})





// Changes the active state of nav links when clicked

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(navLink => {
	navLink.addEventListener("click", function() {
		navLinks.forEach(aNavLink => aNavLink.classList.remove("active"));
		this.classList.add("active");
	});
});