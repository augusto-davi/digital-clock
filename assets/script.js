const $spanSec = document.querySelector(".seconds");
const $spanMin = document.querySelector(".minutes");
const $spanHour = document.querySelector(".hours");

const time = {
  second: 1000,
  showSecond() {
    const currentSec = new Date();
    const seconds = currentSec.getSeconds();
    if (seconds < 10) $spanSec.insertAdjacentText("afterbegin", "0");
    $spanSec.insertAdjacentText("beforeend", seconds);
    return seconds;
  },
  showMinute() {
    const currentMin = new Date();
    const minutes = currentMin.getMinutes();
    if (minutes < 10) $spanMin.insertAdjacentText("afterbegin", "0");
    $spanMin.insertAdjacentText("beforeend", minutes);
  },
  showHour() {
    const currentHour = new Date();
    const hours = currentHour.getHours();
    if (hours < 10) $spanHour.insertAdjacentText("afterbegin", "0");
    $spanHour.insertAdjacentText("beforeend", hours);
  },
};

setInterval(time.showSecond, time.second);
setInterval(time.showMinute, time.second);
setInterval(time.showHour, time.second);

setInterval(() => {
  $spanSec.textContent = "";
  $spanMin.textContent = "";
  $spanHour.textContent = "";
}, time.second - 0.01);

time.showMinute();
time.showSecond();
time.showHour();
