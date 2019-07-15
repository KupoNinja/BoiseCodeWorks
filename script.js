function displayTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let meridiem = "AM";
  if (hours > 11) {
    meridiem = "PM";
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  let clock = document.querySelector('#clock');
  clock.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
};

setInterval(displayTime, 1000);

function displayCalendar() {
  let currentDay = new Date();
  let years = currentDay.getFullYear();
  let months = currentDay.getMonth();
  let days = currentDay.getDay();

  let calendar = document.querySelector('#calendar');
  calendar.innerText = months + " " + days + " " + years;
}
displayCalendar();