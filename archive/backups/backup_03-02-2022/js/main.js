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

  if (days <= 7) {
    document.getElementById("end-span").style.color = "red";
    document.getElementById("end-subtitle").style.color = "red";
  }

  if (timeleft_end < 0) {
      clearInterval(myfunc);
      console.log("End");
  }
}

function springbTimer(countDownDate, now) {
  var timeleft_sbreak = countDownDate - now;

  // Calculates time until countDownDate
  var days = Math.floor(timeleft_sbreak / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft_sbreak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft_sbreak % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft_sbreak % (1000 * 60)) / 1000);

  document.getElementById("sbreak-days").innerHTML = days;
  document.getElementById("sbreak-hours").innerHTML = hours;
  document.getElementById("sbreak-minutes").innerHTML = minutes;
  document.getElementById("sbreak-seconds").innerHTML = seconds;

  if (days <= 7) {
    document.getElementById("sbreak-span").style.color = "red";
    document.getElementById("sbreak-days").style.color = "red";
    document.getElementById("sbreak-hours").style.color = "red";
    document.getElementById("sbreak-minutes").style.color = "red";
    document.getElementById("sbreak-seconds").style.color = "red";
    document.getElementById("sbreak-subtitle").style.color = "red";
  }

  if (timeleft_end < 0) {
      clearInterval(myfunc);
      console.log("End");
  }
}


var delayVar = 0;

// Main loop
var myfunc = setInterval(function() {
  var current_time = new Date().getTime();

  document.getElementById("current-date").innerHTML = new Date();

  // Runs all timers
  var countDownDate_end = new Date("May 26, 2022 15:00:01").getTime();
  endTimer(countDownDate_end, current_time);

  var countDownDate_sbreak = new Date("Apr 15, 2022 15:00:01").getTime();
  springbTimer(countDownDate_sbreak, current_time);

  // No delay on open
  if (delayVar == 0) {
    delayVar = 1000;
  }

}, delayVar)
