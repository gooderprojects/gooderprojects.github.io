console.log("i can smell you");

/**
 * This code was written my me (github.com/Zbomb2000)
 * I don't really care what you do with it
 * That's pretty much it
*/

function endTimer(countDownDate, now) {
  var timeleft_end = countDownDate - now;

  // Calculates time until countDownDate
  var days = Math.floor(timeleft_end / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft_end % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft_end % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft_end % (1000 * 60)) / 1000);

  document.getElementById("end-days").innerHTML = days;
  document.getElementById("end-hours").innerHTML = hours;
  document.getElementById("end-minutes").innerHTML = minutes;
  document.getElementById("end-seconds").innerHTML = seconds;

  document.getElementById("titleid").innerHTML = days.toString()+" days left...";

  if (days <= 7) {
    document.getElementById("end-span").style.color = "red";
    document.getElementById("end-subtitle").style.color = "red";
  }

  if (timeleft_end < 0) {
    clearInterval(myfunc);
    console.log("End");
    window.open("maintenance.html", '_self');
  }
}

var delayVar = 0;

// Main loop
var myfunc = setInterval(function() {
  var current_time = new Date().getTime();

  document.getElementById("current-date").innerHTML = new Date();

  // Runs all timers
  var countDownDate_end = new Date("May 23, 2024 15:00:01").getTime();
  endTimer(countDownDate_end, current_time);

  // No delay on open
  if (delayVar == 0) {
    delayVar = 1000;
  }

}, delayVar)
