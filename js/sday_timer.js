/**
 * This code was written my me (github.com/Zbomb2000)
 * I don't really care what you do with it
 * That's pretty much it
*/

function sdayTimer(countDownDate, now, school_time) {
  var date_var = new Date()
  var timeleft_end = countDownDate - now;

  var timer_header = document.getElementById("sday-title");
  if (school_time) {
    timer_header.innerHTML = "Time Remaining Until the End of the School Day:";
  }
  else {
    timer_header.innerHTML = "Time Remaining Until School Tomorrow:";
  }

  // Calculates time until countDownDate
  var days = Math.floor(timeleft_end / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft_end % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft_end % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft_end % (1000 * 60)) / 1000);

  document.getElementById("sday-days").innerHTML = days;
  document.getElementById("sday-hours").innerHTML = hours;
  document.getElementById("sday-minutes").innerHTML = minutes;
  document.getElementById("sday-seconds").innerHTML = seconds;
}

function schoolTime() {
  var date_var = new Date();

  if (date_var.getHours() >= 8) {
    if (date_var.getHours() <= 15) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

function getDayInformation() {
  date_var = new Date();
  day_var = date_var.getDate();
  current_time = date_var.getHours();
  if (current_time <= 8) {
    return day_var;
  }
  else {
    return day_var + 1;
  }
}


var delayVar = 0;

// Main loop
var myfunc = setInterval(function() {
  var current_time = new Date().getTime();
  var date_var = new Date()
  var day_var = getDayInformation();

  // Runs timer
  if (schoolTime()) {
    countDownDate = new Date((date_var.getMonth()+1)+"/"+day_var+"/"+date_var.getFullYear()+" 15:00:01").getTime();
  }
  else {
    countDownDate = new Date((date_var.getMonth()+1)+"/"+day_var+"/"+date_var.getFullYear()+" 8:00:01").getTime();
  }

  sdayTimer(countDownDate, current_time, schoolTime());

  // No delay on open
  if (delayVar == 0) {
    delayVar = 1000;
  }

}, delayVar)
