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
      console.log("End");
  }
}

function fartFriday() {
  const current_date = new Date();
  var resultDate = new Date(current_date.getTime());
  resultDate.setDate(current_date.getDate() + (7 + 5 - current_date.getDay()) % 7, "00:00:00");
  resultDate.setHours(15, 0, 0, 1);
  return resultDate;
}

var delayVar = 0;

// Main loop
var myfunc = setInterval(function() {
  const current_date = new Date();
  const current_time = current_date.getTime();

  weekendTimer(fartFriday(), current_time);

  // No delay on open
  if (delayVar == 0) {
    delayVar = 1000;
  }

}, delayVar)
