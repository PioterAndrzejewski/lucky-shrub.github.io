// logo button link

logoButton.addEventListener("click", () => {
	window.location.href = "index.html";
});

//scroller

const scrollerButton = document.querySelector(".scroller");

scrollerButton.addEventListener("click", () => {
	console.log("scorll");
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

const scrollerHandler = () => {
	if (window.scrollY < 100) {
		scrollerButton.classList.add("scroller--hidden");
	} else {
		scrollerButton.classList.remove("scroller--hidden");
	}
};

const sloganButton = document.querySelector(".main__slogan_wrapper");
const contactButton = document.querySelector(".main__slogan-contact");
const mainSection = document.querySelector(".main-section");

const scrollAnimate = () => {
	if (window.scrollY > 500) {
		contactButton.classList.add("main__slogan-contact--animate");
		sloganButton.classList.add("main__slogan_wrapper--animate");
		mainSection.classList.add("main-section--animate");
	}
};

window.addEventListener("scroll", scrollerHandler);
window.addEventListener("scroll", scrollAnimate);

console.log(contactButton);
