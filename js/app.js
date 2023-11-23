let startTime;
let stopwatchInterval;
let pausedTime = 0;

function start() {
  startTime = new Date().getTime() - pausedTime;
  stopwatchInterval = setInterval(display, 1);
}

function pause() {
  clearInterval(stopwatchInterval);
  pausedTime = new Date().getTime() - startTime;
  stopwatchInterval = null;
}

function reset() {
  pause();
  pausedTime = 0;
  const clock = document.querySelector("h5");
  clock.innerHTML = "00 : 00.00";
}

function display() {
  const currentTime = new Date().getTime();
  const chronoTime = currentTime - startTime;
  const ms = Math.floor(chronoTime / 10) % 100;
  const seg = Math.floor(chronoTime / 1000) % 60;
  const min = Math.floor(chronoTime / 1000 / 60) % 60;
  const displayTime = zerod(min) + " : " + zerod(seg) + "." + zerod(ms);
  const clock = document.querySelector("h5");
  clock.innerHTML = displayTime;
}
function zerod(number) {
  return (number < 10 ? "0" : "") + number;
}

const btns = document.getElementsByTagName("button");
btns[0].addEventListener("click", start);
btns[1].addEventListener("click", pause);
btns[2].addEventListener("click", reset);
