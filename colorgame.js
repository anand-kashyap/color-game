var colors = generateColors(6);
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var decision = document.querySelector("#dec");
var colorDisplay = document.getElementById("colorDisplay");
var head = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var deasy = document.getElementById("easy");
var dhard = document.getElementById("hard");
var flag = false;
colorDisplay.innerHTML = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function () {
		var sel = this.style.backgroundColor;
		if (sel === pickedColor) {
			decision.innerHTML = "Correct answer";
			head.style.backgroundColor = sel;
			resetButton.innerHTML = "Play Again?";
			changeColor(sel);
		}
		else {
			decision.innerHTML = "Try again!";
			this.style.backgroundColor = "#232323";
		}
	});
}
function changeColor(color) {

	for (var c = 0; c < squares.length; c++) {
		squares[c].style.backgroundColor = color;
	}
};
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};
function generateColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
};
function randomColor() {
	//0-255 red
	var r = Math.floor(Math.random() * 256);
	//0-255 green
	var g = Math.floor(Math.random() * 256);

	//0-255 blue
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
};

resetButton.addEventListener("click", function () {
	if (flag === false) {
		difficulty(6);
	}
	else {
		difficulty(3);
	}
});

deasy.addEventListener("click", function () {
	this.classList.add("active");
	dhard.classList.remove("active");
	for (var i = 3; i < squares.length; i++) {
		squares[i].classList.add("dis");
	}
	flag = true;
	squares.length -= 3;
	difficulty(3);
});

dhard.addEventListener("click", function () {
	this.classList.add("active");
	deasy.classList.remove("active");
	for (var i = 3; i < squares.length; i++) {
		squares[i].classList.remove("dis");
	}
	flag = false;
	squares.length += 3;
	difficulty(6);
});

function difficulty(num) {
	if (resetButton.innerHTML === "Play Again?") {
		resetButton.innerHTML = "New Colors";
	}
	decision.innerHTML = "";
	head.style.backgroundColor = "#232323";
	colors = generateColors(num);
	pickedColor = pickColor();
	colorDisplay.innerHTML = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
};