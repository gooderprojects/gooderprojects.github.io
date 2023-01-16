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

  if (days <= 7) {
    document.getElementById("end-span").style.color = "red";
    document.getElementById("end-subtitle").style.color = "red";
  }

  if (timeleft_end < 0) {
    clearInterval(myfunc);
    console.log("End");
    window.open("../maintenance.html", '_self');
  }
}

/*function cbreakTimer(countDownDate, now) {
  var timeleft_cbreak = countDownDate - now;

  // Calculates time until countDownDate
  var days = Math.floor(timeleft_cbreak / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft_cbreak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft_cbreak % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft_cbreak % (1000 * 60)) / 1000);

  document.getElementById("cbreak-days").innerHTML = days;
  document.getElementById("cbreak-hours").innerHTML = hours;
  document.getElementById("cbreak-minutes").innerHTML = minutes;
  document.getElementById("cbreak-seconds").innerHTML = seconds;

  if (days <= 7) {
    document.getElementById("cbreak-span").style.color = "red";
    document.getElementById("cbreak-days").style.color = "red";
    document.getElementById("cbreak-hours").style.color = "red";
    document.getElementById("cbreak-minutes").style.color = "red";
    document.getElementById("cbreak-seconds").style.color = "red";
    document.getElementById("cbreak-subtitle").style.color = "red";
  }

  if (timeleft_cbreak < 0) {
    clearInterval(myfunc);
    console.log("End");
    window.open("../maintenance.html", '_self');
  }
}
*/

function tbreakTimer(countDownDate, now) {
  var timeleft_tbreak = countDownDate - now;

  // Calculates time until countDownDate
  var days = Math.floor(timeleft_tbreak / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft_tbreak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft_tbreak % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft_tbreak % (1000 * 60)) / 1000);

  document.getElementById("tbreak-days").innerHTML = days;
  document.getElementById("tbreak-hours").innerHTML = hours;
  document.getElementById("tbreak-minutes").innerHTML = minutes;
  document.getElementById("tbreak-seconds").innerHTML = seconds;

  if (days <= 7) {
    document.getElementById("tbreak-span").style.color = "red";
    document.getElementById("tbreak-days").style.color = "red";
    document.getElementById("tbreak-hours").style.color = "red";
    document.getElementById("tbreak-minutes").style.color = "red";
    document.getElementById("tbreak-seconds").style.color = "red";
    document.getElementById("tbreak-subtitle").style.color = "red";
  }

  if (timeleft_tbreak < 0) {
    clearInterval(myfunc);
    console.log("End");
    window.open("../maintenance.html", '_self');
  }
}

function sbreakTimer(countDownDate, now) {
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

  if (timeleft_sbreak < 0) {
    clearInterval(myfunc);
    console.log("End");
    window.open("../maintenance.html", '_self');
  }
}


var delayVar = 0;

// Main loop
var myfunc = setInterval(function() {
  var current_time = new Date().getTime();

  document.getElementById("current-date").innerHTML = new Date();

  // Runs all timers
  var countDownDate_end = new Date("May 25, 2023 15:00:01").getTime();
  endTimer(countDownDate_end, current_time);

  var countDownDate_tbreak = new Date("Feb 23, 2023 15:00:01").getTime();
  tbreakTimer(countDownDate_tbreak, current_time);

  var countDownDate_sbreak = new Date("Apr 18, 2023 15:00:01").getTime();
  sbreakTimer(countDownDate_sbreak, current_time);

  // No delay on open
  if (delayVar == 0) {
    delayVar = 1000;
  }

}, delayVar)
