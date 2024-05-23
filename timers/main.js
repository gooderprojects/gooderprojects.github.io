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

  // Sets time on timer
  document.getElementById("end-days").innerHTML = days;
  document.getElementById("end-hours").innerHTML = hours;
  document.getElementById("end-minutes").innerHTML = minutes;
  document.getElementById("end-seconds").innerHTML = seconds;

  // Updates site title
  document.getElementById("titleid").innerHTML = days.toString()+" days left...";

  if (days <= 7) {
    document.getElementById("end-span").style.color = "red";
    document.getElementById("end-subtitle").style.color = "red";
    document.getElementById("timer-title").style.color = "red";
  }

  if (timeleft_end < 0) {
    clearInterval(myfunc);
    console.log("End");
    window.open("maintenance.html", '_self');
  }
}

/*
 * [IMPORTANT]
 * When the main timer (main) runs out, quickly switch it to the x timer
 * Delete the xTimer function from this code and delete the timer from the html
 *

function xTimer(countDownDate, now) {
  var timeleft_x = countDownDate - now;

  // Calculates time until countDownDate
  var days = Math.floor(timeleft_x / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft_x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft_x % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft_x % (1000 * 60)) / 1000);

  // Sets time on timer
  document.getElementById("x-days").innerHTML = days;
  document.getElementById("x-hours").innerHTML = hours;
  document.getElementById("x-minutes").innerHTML = minutes;
  document.getElementById("x-seconds").innerHTML = seconds;

  if (timeleft_x < 0) {
    clearInterval(myfunc);
    console.log("End");
    window.open("maintenance.html", '_self');
  }
}
*/

var delayVar = 0;

// Main loop
var myfunc = setInterval(function() {
  var current_time = new Date().getTime();

  document.getElementById("current-date").innerHTML = new Date();

  // Runs all timers
  
  // for wick
  var countDownDate_end = new Date("May 30, 2024 15:00:01").getTime();
  endTimer(countDownDate_end, current_time);

  /*For st x
  var countDownDate_x = new Date("May 30, 2024 12:00:01").getTime();
  xTimer(countDownDate_x, current_time);
  */

  // No delay on open
  if (delayVar == 0) {
    delayVar = 1000;
  }

}, delayVar)
