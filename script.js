var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

function randomRGBValue() {
	return Math.floor(Math.random() * 256);
}

function updateCssSnippet() {
	css.textContent = body.style.background + ";";
}

function setRandonGradient() {
	var random1 = "";
	var random2 = "";

	for (var i = 0; i < 3; i++){
		random1 += randomRGBValue();
		random2 += randomRGBValue();
		if (i < 2) {
			random1 += ", ";
			random2 += ", ";
		}
	}

	console.log(random1 + " " + random2);
	body.style.background = 
	"linear-gradient(to right, rgb(" 
	+ random1 + "), rgb(" + random2 + "))";

	updateCssSnippet();
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	updateCssSnippet();
}

setGradient();

randomButton.onclick = setRandonGradient;
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
