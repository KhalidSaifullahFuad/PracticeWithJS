const time = document.querySelector(".hours");
const secHand = document.querySelector(".second");
const minHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

for (let i = 1; i <= 60; i++) {
	if (i % 5 == 0) {
		time.innerHTML += "<div class='hour-number'><div>" + (i / 5) + "</div></div>";
		let hours = document.getElementsByClassName("hour-number");
		hours[hours.length - 1].style.transform = `translateX(-50%) rotateZ(${i*6}deg)`;
		hours[hours.length - 1].firstChild.style.transform = `rotate(${i*-6}deg)`;
	} else {
        time.innerHTML += "<div class='minute-bar'></div>";
		let bars = document.getElementsByClassName("minute-bar");
		bars[bars.length - 1].style.transform = `translateX(-50%) rotateZ(${i*6}deg)`;
    }
}


setInterval(()=>{
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();
	const deg =  360 / 60;

	let secDeg = seconds * deg;
	let minDeg = minutes * deg + seconds / 12;
	let hourDeg = hours * (360 / 12) + (minutes / 12) * deg;

	secHand.style.transform = `translateX(-50%) rotateZ(${secDeg}deg)`;
	minHand.style.transform = `translateX(-50%) rotateZ(${minDeg}deg)`;
	hourHand.style.transform = `translateX(-50%) rotateZ(${hourDeg}deg)`;
}, 1000);


window.onload = startClock();
