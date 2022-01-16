const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("click", onClick));

window.addEventListener("keydown", keyPress);
window.addEventListener("keyup", keyRelease);

function keyPress(e) {
	const key = document.querySelector(`div[data-key='${e.keyCode}']`);
	const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);

	if (!audio) return;
	audio.currentTime = 0;
	audio.play();

	const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	key.style.color = randomColor;
	
	document.documentElement.style.setProperty("--key-txt-color", randomColor);
	key.classList.add("playing");
	console.log(key.innerHTML);
}

function keyRelease(e) {
	const key = document.querySelector(`div[data-key='${e.keyCode}']`);
	key.classList.remove("playing");
}

function onClick(e) {
	const datakey = e.target.getAttribute("data-key");
	const audio = document.querySelector(`audio[data-key='${datakey}']`);

	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
}

function random_bg_color() {
	const x = Math.floor(Math.random() * 256);
	const y = 100 + Math.floor(Math.random() * 256);
	const z = 50 + Math.floor(Math.random() * 256);
	const bgColor = `rgb(${x},${y},${z})`;
	console.log(bgColor);
	return bgColor;
}
