/**
 * This code was written my me (https://github.com/Zbomb2000)
 * I don't really care what you do with it
 * That's pretty much it
*/

function weekendTimer(countDownDate, now) {
  var timeleft_weekend = countDownDate - now;

  // Calculates time until countDownDate
  var days = Math.floor(timeleft_weekend / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft_weekend % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft_weekend % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft_weekend % (1000 * 60)) / 1000);

  document.getElementById("weekend-days").innerHTML = days;
  document.getElementById("weekend-hours").innerHTML = hours;
  document.getElementById("weekend-minutes").innerHTML = minutes;
  document.getElementById("weekend-seconds").innerHTML = seconds;

  if (days <= 7) {
    document.getElementById("weekend-span").style.color = "red";
    document.getElementById("weekend-subtitle").style.color = "red";
  }

  if (timeleft_weekend < 0) {
      clearInterval(myfunc);
      console.log("weekend");
  }
}

function getNextWeekend(date) {
  const dateCopy = new Date(date.getTime());

  const nextFriday = new Date(
    dateCopy.setDate(
      dateCopy.getDate() + ((7 - dateCopy.getDay() + 5) % 7 || 7),
    ),
  );
  return nextFriday;
}

var delayVar = 0;

// Main loop
var myfunc = setInterval(function() {
  current_date = new Date();
  document.getElementById("current-date").innerHTML = new Date();

  // Runs all timers
  var countDownDate_weekend = getNextWeekend(current_date);
  weekendTimer(countDownDate_weekend.getTime(), current_date.getTime());

  // No delay on open
  if (delayVar == 0) {
    delayVar = 1000;
  }

}, delayVar)
