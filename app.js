/* Watch Function */
const watchContainer = document.querySelector(".watch");

function watch() {
  let date = new Date();
  let currentTime = date.toLocaleString().slice(10);
  if (currentTime[1] < "9") {
    watchContainer.innerHTML = `<span>Local Time </span>${currentTime.replace(
      " ",
      "0"
    )}`;
  } else {
    watchContainer.innerHTML = currentTime;
  }
}
setInterval(watch, 1000);
/***************************************************************/
/* Counter Function */
const goBtn = document.querySelector("#go-btn");
const stopBtn = document.querySelector("#stop-btn");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

let hoursInterval;
let minutesInterval;
let secondsInterval;

/* Check Input Value */
hours.onkeyup = () => {
  if (hours.value >= 24) {
    hours.value = 23;
    minutes.value = 59;
  }
};
minutes.onkeyup = () => {
  if (minutes.value > 59) {
    minutes.value = 59;
    seconds.value = 59;
  }
};
seconds.onkeyup = () => {
  if (seconds.value > 59) {
    seconds.value = 59;
  }
};

function countHours() {
  if (hours.value == 0) {
    return NaN;
  }
  hours.value -= 1;
}

function countMinutes() {
  if (minutes.value == 0) {
    return NaN;
  }
  minutes.value -= 1;
}

function countSeconds() {
  if (seconds.value == 0) {
    return NaN;
  }
  seconds.value -= 1;
}

goBtn.onclick = () => {
  if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
    return NaN;
  }
  stopBtn.classList.remove("btn-hidden");
  goBtn.classList.add("btn-hidden");
  hoursInterval = setInterval(countHours, 1000 * 60 * 60);
  minutesInterval = setInterval(countMinutes, 1000 * 60);
  secondsInterval = setInterval(countSeconds, 1000);
};

stopBtn.onclick = () => {
  goBtn.classList.remove("btn-hidden");
  stopBtn.classList.add("btn-hidden");
  clearInterval(hoursInterval);
  clearInterval(minutesInterval);
  clearInterval(secondsInterval);
};
