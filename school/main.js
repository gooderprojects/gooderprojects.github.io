console.log("i can smell you.");

/**
 * This code was written my me (https://github.com/Zbomb2000)
 * I don't really care what you do with it
 * That's pretty much it
*/

function goToHomePage() {
  window.open("../index.html", '_self');
  console.log("exited")
}

function staticTimer(timer, countDownDate, now, static_timer) {
  var timeleft_end = countDownDate - now;

  // Calculates time until countDownDate
  var days = Math.floor(timeleft_end / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft_end % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft_end % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft_end % (1000 * 60)) / 1000);

  document.getElementById(timer+"-days").innerHTML = days;
  document.getElementById(timer+"-hours").innerHTML = hours;
  document.getElementById(timer+"-minutes").innerHTML = minutes;
  document.getElementById(timer+"-seconds").innerHTML = seconds;

  if (days <= 7) {
    if (static_timer == true) {
      document.getElementById(timer+"-span").style.color = "red";
      document.getElementById(timer+"-subtitle").style.color = "red";
      document.getElementById(timer+"-days").style.color = "red";
      document.getElementById(timer+"-hours").style.color = "red";
      document.getElementById(timer+"-minutes").style.color = "red";
      document.getElementById(timer+"-seconds").style.color = "red";
    }
  }

  if (timeleft_end <= 0) {
    console.log("End");
    clearInterval(myfunc);
    window.open("maintenance.html", '_self');
  }
}


var delayVar = 0;

// Main loop
var myfunc = setInterval(function() {
  const current_date = new Date();
  const current_time = current_date.getTime();

  document.getElementById("current-date").innerHTML = new Date();

  // Runs all timers
  var countDownDate_end = new Date("Aug 26, 2022 00:00:01").getTime();
  staticTimer("end", countDownDate_end, current_time, true);

  // No delay on open
  if (delayVar == 0) {
    delayVar = 1000;
  }

}, delayVar)
