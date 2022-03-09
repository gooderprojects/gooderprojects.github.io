/**
 * This code was written my me (github.com/Zbomb2000)
 * I don't really care what you do with it
 * That's pretty much it
*/

function weekendTimer(countDownDate, now) {
  var timeleft_end = countDownDate - now;
  var timer_header = document.getElementById("sday-title");
  timer_header.innerHTML = "Time Remaining Until The End of the Weekend:";

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

function sdayTimer(countDownDate, now, school_time) {
  var date_var = new Date()
  var date_hours = date_var.getHours();
  var timeleft_end = countDownDate - now;

  var timer_header = document.getElementById("sday-title");
  if (school_time == false) {
    if (date_hours >= 0) {
      if (date_hours < 8) {
        timer_header.innerHTML = "Time Remaining Until School Today:";
      } else {
        timer_header.innerHTML = "Time Remaining Until School Tomorrow:";
      }
    } else {
      timer_header.innerHTML = "Time Remaining Until School Tomorrow:";
    }
  } else {
    timer_header.innerHTML = "Time Remaining Until the End of the School Day:";
    var day_html = true;
  }

  // Calculates time until countDownDate
  var days = Math.floor(timeleft_end / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft_end % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft_end % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft_end % (1000 * 60)) / 1000);

  if (day_html) {
    document.getElementById("sday-days").innerHTML = "0";
  }
  else {
    document.getElementById("sday-days").innerHTML = days;
  }
  document.getElementById("sday-hours").innerHTML = hours;
  document.getElementById("sday-minutes").innerHTML = minutes;
  document.getElementById("sday-seconds").innerHTML = seconds;
}

function getNextMonday() {
  var d = new Date();
  d.setDate(d.getDate() + (((1 + 7 - d.getDay()) % 7) || 7));
  return d;
}

function schoolTime() {
  var date_var = new Date();

  if (date_var.getHours() >= 8) {
    if (date_var.getHours() <= 15) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function getDayInformation() {
  date_var = new Date();
  day_var = date_var.getDate();
  current_time = date_var.getHours();
  if (current_time <= 8) {
    return day_var;
  } else {
    return day_var + 1;
  }
}


var delayVar = 0;

// Main loop
var myfunc = setInterval(function() {
  var countDownDate;
  var current_time = new Date().getTime();
  var date_var = new Date();
  var day_var = getDayInformation();

  if (schoolTime()) {
    countDownDate = new Date((date_var.getMonth()+1)+"/"+day_var+"/"+date_var.getFullYear()+" 15:00:01").getTime();
  } else {
    countDownDate = new Date((date_var.getMonth()+1)+"/"+day_var+"/"+date_var.getFullYear()+" 8:00:01").getTime();
  }

  if (date_var.getDay() == 6 || date_var.getDay() == 0) {
    countDownDate = new Date((date_var.getMonth()+1)+"/"+getNextMonday().getDate()+"/"+date_var.getFullYear()+" 00:00:01");
    weekendTimer(countDownDate.getTime(), date_var.getTime());
  } else if (date_var.getDay() == 5) {
    if (date_var.getHours() >= 15) {
      countDownDate = new Date((date_var.getMonth()+1)+"/"+getNextMonday().getDate()+"/"+date_var.getFullYear()+" 00:00:01");
      weekendTimer(countDownDate.getTime(), date_var.getTime());
    } else {
      sdayTimer(countDownDate, current_time, schoolTime());
    }
  } else {
    sdayTimer(countDownDate, current_time, schoolTime());
  }

  // No delay on open
  if (delayVar == 0) {
    delayVar = 1000;
  }

}, delayVar)
