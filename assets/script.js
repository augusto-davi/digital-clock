const $spanSec = document.querySelector(".seconds");
const $spanMin = document.querySelector(".minutes");
const $spanHour = document.querySelector(".hours");

const getCurrentTime = function () {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  return { seconds, minutes, hours };
};

const setCurrentTime = {
  SECOND: 1000,
  updateTime() {
    setInterval(() => {
      const isMinuteUpToDate = getCurrentTime().seconds === 0;
      const isHourUpToDate = isMinuteUpToDate && getCurrentTime().minutes === 0;

      if (isMinuteUpToDate) {
        const currentMin = getCurrentTime().minutes;
        if (currentMin < 10) $spanMin.textContent = `0${currentMin}`;
        else $spanMin.textContent = `${currentMin}`;
      }

      if (isMinuteUpToDate && isHourUpToDate) {
        const currentHour = getCurrentTime().hours;
        if (currentMin < 10) $spanMin.textContent = `0${currentHour}`;
        $spanHour.textContent = `${currentHour}`;
      }
    }, setCurrentTime.SECOND);
  },
  updateSecond() {
    setInterval(() => {
      const currentSec = getCurrentTime().seconds;
      if (currentSec < 10) $spanSec.textContent = `0${currentSec}`;
      else $spanSec.textContent = `${currentSec}`;
    }, setCurrentTime.SECOND);
  },
};

(function showSeconds() {
  const seconds = getCurrentTime().seconds;
  if (seconds < 10) $spanSec.insertAdjacentText("afterbegin", "0");
  $spanSec.insertAdjacentText("beforeend", seconds);
})();

(function showMinutes() {
  const minutes = getCurrentTime().minutes;
  if (minutes < 10) $spanMin.insertAdjacentText("afterbegin", "0");
  $spanMin.insertAdjacentText("beforeend", minutes);
})();

(function showHours() {
  const hours = getCurrentTime().hours;
  if (hours < 10) $spanHour.insertAdjacentText("afterbegin", "0");
  $spanHour.insertAdjacentText("beforeend", hours);
})();

setCurrentTime.updateSecond();
setCurrentTime.updateTime();
