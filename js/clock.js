// Getting Elements
const h2Element = document.querySelector("#clock");

// Declare Variables
let hours = 0;
let minutes = 0;
let seconds = 0;

let Interval;

// Check Console
// console.log(h2Element);

// Functions
function startClock() {
  Interval = setInterval(() => {
    hours = new Date().getHours();
    minutes = new Date().getMinutes();
    seconds = new Date().getSeconds();

    if (hours < 10) hours = String(hours).padStart(2, "0");
    if (minutes < 10) minutes = String(minutes).padStart(2, "0");
    if (seconds < 10) seconds = String(seconds).padStart(2, "0");

    h2Element.innerText = `${hours}:${minutes}:${seconds}`;
  }, 1000);
}

startClock();
