
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomButton = document.getElementById("randomBtn");

color1.addEventListener("input", changeBackgroundColor)
color2.addEventListener("input", changeBackgroundColor)
randomButton.addEventListener("click", randomNumber);

function changeBackgroundColor() {
	body.style.background = "linear-gradient(to right, "+ color1.value + ", " + color2.value + ")"
	css.textContent = "background: " + body.style.background + ";";
}

// function randomNumber(){
// 	var c = [];
// 	for (var i = 0; i < 6; i++) {
// 		c[i] = Math.floor(Math.random() * 255);
// 	}

// 	body.style.background = "linear-gradient(to right, rgb("+c[0] + ", " + c[1] + ", "+ c[2]+ "), rgb("+c[3] + ", " + c[4] + ", "+ c[5]+ ")"
// 	css.textContent = body.style.background + ";";
// }

function randomNumber(){
	color1.value = '#'+Math.floor(Math.random()*16777215).toString(16);
	color2.value = '#'+Math.floor(Math.random()*16777215).toString(16);
	changeBackgroundColor();
}