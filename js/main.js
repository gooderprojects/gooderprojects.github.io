/**
 * This code was written my me (https://github.com/Zbomb2000)
 * I don't really care what you do with it
 * That's pretty much it
*/

function mainTimer(countDownDate, now) {
  var timeleft_main = countDownDate - now;

  // Calculates time until countDownDate
  var days = Math.floor(timeleft_main / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft_main % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft_main % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft_main % (1000 * 60)) / 1000);

  document.getElementById("main-days").innerHTML = days;
  document.getElementById("main-hours").innerHTML = hours;
  document.getElementById("main-minutes").innerHTML = minutes;
  document.getElementById("main-seconds").innerHTML = seconds;

  if (days <= 7) {
    document.getElementById("main-span").style.color = "red";
    document.getElementById("main-subtitle").style.color = "red";
  }

  if (timeleft_main < 0) {
      clearInterval(myfunc);
      console.log("main");
  }
}


var delayVar = 0;

// Main loop
var myfunc = setInterval(function() {
  var current_time = new Date().getTime();

  document.getElementById("current-date").innerHTML = new Date();

  // Runs all timers
  var countDownDate_main = new Date("Apr 25, 2022 00:00:01").getTime();
  mainTimer(countDownDate_main, current_time);

  // No delay on open
  if (delayVar == 0) {
    delayVar = 1000;
  }

}, delayVar)
