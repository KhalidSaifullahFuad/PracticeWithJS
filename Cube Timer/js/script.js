var hour = document.getElementById("hour"); 	// * selcted hour using dom;
var min = document.getElementById("min"); 		// * selcted min using dom;
var sec = document.getElementById("sec"); 		// * selcted sec using dom;
var milis = document.getElementById("milis"); 	// * selcted sec using dom;

var isTimerOn = false; 							// * for detecting if the timer is on/off
var allowed = true;								// * for detecting the space key repeating

var countdown; 									// * for assigning the setinterval and clearinterval

window.addEventListener("keydown", function (e) {
	if (e.repeat != undefined) {
		allowed = !e.repeat;
	}
	if (!allowed) return;
	allowed = false;

	if (e.keyCode == 32) {
		console.log("keydown - " + isTimerOn);
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
	if (e.keyCode == 32 && isTimerOn) {
		countdown = setInterval(function(){
			milis.innerText = formatTime(milis.innerText);
			checkTime(milis, sec, 100);
			checkTime(sec, min, 60);
			checkTime(min, hour, 60);
		}, 10);
	}
});


function checkTime(time1, time2, limit) {
	if (time1.innerText == limit) {
		time1.innerText = "".padStart(`${limit - 1}`.length, 0);
		time2.innerText = formatTime(time2.innerText);
	}
}

function formatTime(time) {
	return (parseInt(time) + 1).toString().padStart(time.length, "0"); // * added 1 to prevous value after pasring to int, added zero in start
}

//if (sec.innerText == 60) {
//     sec.innerText = "00";
//     min.innerText = (parseInt(min.innerText) + 1).toString().padStart(2, "0");

//     if (min.innerText == 60) {
//         min.innerText = "00";
//         hour.innerText = (parseInt(hour.innerText) + 1).toString().padStart(2, "0");

//         if (hour.innerText == 12) {
//             hour.innerText = "00";
//             hour.innerText.padStart(2, "0");
//             clearInterval(countdown);
//         }
//     }
// }
