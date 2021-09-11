const time = document.querySelector('.hours');
const secHand = document.querySelector('.second');
const minHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

for(let i=1; i<=12; i++){
    time.innerHTML += "<div class='hour-number'><div>"+i+"</div></div>";
    let hours = document.getElementsByClassName("hour-number");
    hours[i-1].style.transform = `translateX(-50%) rotate(${i*30}deg)`;
    hours[i-1].firstChild.style.transform = `rotate(${i*-30}deg)`;
}

function startClock(){
    const now = new Date()
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    let secDeg = seconds * (360 / 60);
    let minDeg = minutes * (360 / 60) + (seconds / 12);
    // let minDeg = minutes * (360 / 60) + (seconds / 12);
    let hourDeg = hours * (360 / 12) + (minutes / 12) * (360 / 60);

    secHand.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
    minHand.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}
setInterval(startClock, 1000);


