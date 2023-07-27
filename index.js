const startBtn = document.getElementById("start-button");
const stopBtn = document.getElementById("stop-button");
const resetBtn = document.getElementById("reset-button");
const timer = document.getElementById("timer");
let timerInterval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function start() {
   startBtn.disabled = true;
   stopBtn.disabled = false;
   resetBtn.disabled = true;
   timerInterval = setInterval(updateTime, 10);
}

function stop() {
   startBtn.disabled = false;
   stopBtn.disabled = true;
   resetBtn.disabled = false;
   clearInterval(timerInterval);
}

function reset() {
   startBtn.disabled = false;
   stopBtn.disabled = true;
   resetBtn.disabled = true;
   clearInterval(timerInterval);
   minutes = 0;
   seconds = 0;
   milliseconds = 0;
   timer.textContent = "00 : 00 : 00 : 000";
}

function updateTime() {
   milliseconds = milliseconds + 10;
   if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;
      if (seconds === 60) {
         seconds = 0;
         minutes++;
      }
      if (minutes === 60) {
         minutes = 0;
         hours++;
      }
   }
   const timeString = getTimeString();
   timer.textContent = timeString;
}

function getTimeString() {
   const paddedMinutes = padTime(minutes);
   const paddedSeconds = padTime(seconds);
   const paddedMilliseconds = padTime(milliseconds, 3);
   const paddedHours = padTime(hours);
   return `${paddedHours} : ${paddedMinutes} : ${paddedSeconds} : ${paddedMilliseconds}`;
}

function padTime(time) {
   return time.toString().padStart(2, "0");
}

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
