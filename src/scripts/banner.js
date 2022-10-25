function n3xt(text, element) {
	let sample = document.querySelector(element);
	if (sample.dataset.animating === "true") return;
	let sampleH = 50; // will keep it fixed, otherwise sample.offsetHeight
	let sampleT = sample.textContent; // old text
	let sampleNT = text; // new text
	sample.dataset.animating = "true";
	sample.style.height = sampleH + "px";

	// original text element
	let samO = document.createElement("div");
	samO.style.transformOrigin = "0 " + sampleH / 2 + "px -" + sampleH / 2 + "px";
	samO.classList.add("t3xt");
	samO.textContent = sampleT;

	// new text element
	let samN = samO.cloneNode();
	samN.textContent = sampleNT;
	sample.textContent = "";
	sample.appendChild(samO);
	sample.appendChild(samN);

	samO.classList.add("t3xt-out");
	samN.classList.add("t3xt-in");

	samN.addEventListener("animationend", function (event) {
		sample.removeChild(samO);
		sample.removeChild(samN);
		sample.textContent = sampleNT;
		sample.dataset.animating = "false";
	});
}

let phraseIndex = 1;
let wordIndex = 0;
let t3xts = [
	["We run", "Plant", "Nursery"],
	["We create", "Gardens", "For you"],
	["We Transform ", "any space", "into oasis"],
	["We are the", "Lucky Shrub"],
];

// start it off
let bannerFunction = setTimeout(changetext, 1000);

function changetext() {
	if (wordIndex > 2) {
		wordIndex = 0;
		phraseIndex++;
	}
	if (phraseIndex >= t3xts.length) {
		phraseIndex = 0;
	}
	let term = t3xts[phraseIndex][wordIndex];
	n3xt(term, ".t3xt-" + ++wordIndex);

	if (wordIndex == 3) {
		bannerFunction = setTimeout(changetext, 3500);
	} else {
		bannerFunction = setTimeout(changetext, 150);
	}
}

const logoButton = document.querySelector(".main-logo");
const textBig = document.querySelector(".slogan__text--big");
const mediumText = document.querySelector(".slogan__text--medium");
const mediumerText = document.querySelector(".slogan__text--mediumer");
const smallText = document.querySelector(".slogan__text--small");
const sloganImage = document.querySelector(".slogan__image");

document.body.style.overflow = "hidden";
const bannerElement = document.querySelector(".banner");
bannerElement.addEventListener("click", () => {
	clearTimeout(bannerFunction);
	bannerElement.classList.add("banner--hidden");
	textBig.classList.add("slogan__text--big--animate");
	mediumText.classList.add("slogan__text--medium--animate");
	mediumerText.classList.add("slogan__text--mediumer--animate");
	smallText.classList.add("slogan__text--small--animate");
	sloganImage.classList.add("slogan__image--animate");
	setTimeout(() => {
		bannerElement.remove();
	}, 1200);
	document.body.style.overflow = "visible";
});
