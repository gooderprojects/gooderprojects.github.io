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

  document.getElementById("end_days").innerHTML = days;
  document.getElementById("end_hours").innerHTML = hours;
  document.getElementById("end_minutes").innerHTML = minutes;
  document.getElementById("end_seconds").innerHTML = seconds;

  if (days <= 7) {
    document.getElementById("end_span").style.color = "red";
    document.getElementById("end_subtitle").style.color = "red";
  }

  if (timeleft_end < 0) {
      clearInterval(myfunc);
      console.log("End");
  }
}

function springbTimer(countDownDate, now) {
  var timeleft_end = countDownDate - now;

  // Calculates time until countDownDate
  var days = Math.floor(timeleft_end / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft_end % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft_end % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft_end % (1000 * 60)) / 1000);

  document.getElementById("sbreak_days").innerHTML = days;
  document.getElementById("sbreak_hours").innerHTML = hours;
  document.getElementById("sbreak_minutes").innerHTML = minutes;
  document.getElementById("sbreak_seconds").innerHTML = seconds;

  if (days <= 7) {
    document.getElementById("sbreak_span").style.color = "red";
    document.getElementById("sbreak_days").style.color = "red";
    document.getElementById("sbreak_hours").style.color = "red";
    document.getElementById("sbreak_minutes").style.color = "red";
    document.getElementById("sbreak_seconds").style.color = "red";
    document.getElementById("sbreak_subtitle").style.color = "red";
  }

  if (timeleft_end < 0) {
      clearInterval(myfunc);
      console.log("End");
  }
}

function triTimer(countDownDate, now) {
  var timeleft_end = countDownDate - now;

  // Calculates time until countDownDate
  var days = Math.floor(timeleft_end / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft_end % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft_end % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft_end % (1000 * 60)) / 1000);

  document.getElementById("tri_days").innerHTML = days;
  document.getElementById("tri_hours").innerHTML = hours;
  document.getElementById("tri_minutes").innerHTML = minutes;
  document.getElementById("tri_seconds").innerHTML = seconds;

  if (days <= 7) {
    document.getElementById("tri_span").style.color = "red";
    document.getElementById("tri_subtitle").style.color = "red";
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

  document.getElementById("current_date").innerHTML = new Date();

  // Runs all timers
  var countDownDate_end = new Date("May 26, 2022 15:00:01").getTime();
  endTimer(countDownDate_end, current_time);

  var countDownDate_sbreak = new Date("Apr 15, 2022 15:00:01").getTime();
  springbTimer(countDownDate_sbreak, current_time);

  var countDownDate_tri = new Date("Feb 25, 2022 00:00:01").getTime();
  triTimer(countDownDate_tri, current_time);

  // No delay on open
  if (delayVar == 0) {
    delayVar = 1000;
  }

}, delayVar)
