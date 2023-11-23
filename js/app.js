let startTime;
let stopwatchInterval;
let pausedTime = 0;
let isRunning;

function start() {
  if (!isRunning) {
    startTime = new Date().getTime() - pausedTime;
    stopwatchInterval = setInterval(display, 1);
    btns[0].innerText = "Reanudar";
    btns[0].removeEventListener("click", start);
    btns[0].addEventListener("click", resume);
    isRunning = true;
  }
}

function resume() {
  if (!isRunning) {
    stopwatchInterval = setInterval(display, 1);
    isRunning = true;
  }
}

function pause() {
  clearInterval(stopwatchInterval);
  pausedTime = new Date().getTime() - startTime;
  stopwatchInterval = null;
  isRunning = false;
}

function reset() {
  pause();
  pausedTime = 0;
  const clock = document.querySelector("h5");
  clock.innerHTML = "00 : 00.00";
  btns[0].innerText = "Inciar";
  btns[0].removeEventListener("click", resume);
  btns[0].addEventListener("click", start);
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
