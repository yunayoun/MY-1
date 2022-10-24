let minutes = 0;
let seconds = 0;
let tenmillis = 0;
const appendTens = document.getElementById("tenmillis");
const appendSeconds = document.getElementById("seconds");
const appendMinutes = document.getElementById("minutes");
const buttonStart = document.getElementById("btn_start");
const buttonStop = document.getElementById("btn_stop");
const buttonReset = document.getElementById("btn_reset");
let intervalId;

buttonStart.onclick = function () {
  clearInterval(intervalId);
  intervalId = setInterval(operateTimer, 10);
};
buttonStop.onclick = function () {
  clearInterval(intervalId);
};

buttonReset.onclick = function () {
  clearInterval(intervalId);
  tenmillis = 0;
  seconds = 0;
  minutes = 0;
  appendMinutes.textContent = "00";
  appendSeconds.textContent = "00";
  appendTens.textContent = "00";
};

function operateTimer() {
  tenmillis++; //변수야이건
  appendTens.textContent = tenmillis > 9 ? tenmillis : "0" + tenmillis; //변수야이건
  if (tenmillis > 99) {
    seconds++;
    appendSeconds.textContent = seconds > 9 ? seconds : "0" + seconds;
    tenmillis = 0;
    appendTens.textContent = "00";
  }
  if (seconds > 59) {
    minutes++;
    appendMinutes.textContent = minutes > 9 ? minutes : "0" + minutes;
    seconds = 0;
    appendSeconds.textContent = "00";
  }
}
