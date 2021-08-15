var counter = document.getElementById("counter");

function startCount() {
	counter.innerText = Number(counter.innerText) + 1;
	if (counter.innerText == 1000) clearInterval(interval);
}

var interval = setInterval(startCount, 25);
