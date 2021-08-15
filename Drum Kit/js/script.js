const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("click", onClick));

window.addEventListener("keydown", keyPress);
window.addEventListener("keyup", keyRelease);

function keyPress(e) {
	var key = document.querySelector(`div[data-key='${e.keyCode}']`);
	var audio = document.querySelector(`audio[data-key='${e.keyCode}']`);

	if (!audio) return;
	audio.currentTime = 0;
	audio.play();

	// document.documentElement.style.setProperty(
	// 	"--box-shadow",
	// 	random_bg_color()
	// 	"#" + Math.floor(Math.random() * 16777215).toString(16)
	// );
    document.querySelector('body').style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
	key.classList.add("playing");
	console.log(key.innerHTML);
}

function keyRelease(e) {
	var key = document.querySelector(`div[data-key='${e.keyCode}']`);
	key.classList.remove("playing");
}

function onClick(e) {
	var datakey = e.target.getAttribute("data-key");
	var audio = document.querySelector(`audio[data-key='` + datakey + `']`);

	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
}

function random_bg_color() {
	var x = Math.floor(Math.random() * 256);
	var y = 100 + Math.floor(Math.random() * 256);
	var z = 50 + Math.floor(Math.random() * 256);
	var bgColor = "rgb(" + x + "," + y + "," + z + ")";
	console.log(bgColor);
	return bgColor;
}
