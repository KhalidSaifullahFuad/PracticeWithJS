const hour = document.getElementById("hour"); 	// * selected hour using dom;
const min = document.getElementById("min"); 	// * selected min using dom;
const sec = document.getElementById("sec"); 	// * selected sec using dom;
const milis = document.getElementById("milis"); // * selected sec using dom;

let isTimerOn = false; 							// * for detecting if the timer is on/off
let allowed = true;								// * for detecting the space key repeating

var countdown; 									// * for assigning the setInterval and clearinterval

window.addEventListener("keydown", function (e) {
	if (e.repeat != undefined) allowed = !e.repeat;
	if (!allowed) return;
	allowed = false;

	if (e.code == "Space") {
		if (!isTimerOn) {
			hour.innerText = "00";
			min.innerText = "00";
			sec.innerText = "00";
			milis.innerText = "00";

			document.querySelector("body").style.backgroundColor = "green";
			isTimerOn = true;
		} else {
			clearInterval(countdown);
			document.querySelector("body").style.backgroundColor = "#FFC300";
			isTimerOn = false;
		}
	}
});

window.addEventListener("keyup", function (e) {
	if (e.code == "Space" && isTimerOn) {
		console.log(e);
		countdown = setInterval(function(){
			milis.innerText = addPadding(milis.innerText);
			formatTime(milis, sec, 100);
			formatTime(sec, min, 60);
			formatTime(min, hour, 60);
		}, 10);
	}
});


function formatTime(time1, time2, limit) {
	if (time1.innerText == limit) {
		time1.innerText = "".padStart(`${limit - 1}`.length, 0);
		time2.innerText = addPadding(time2.innerText);
	}
}

function addPadding(time) {
	return (parseInt(time) + 1).toString().padStart(time.length, "0"); // * added 1 to previous value after parsing to int, added zero in start
}