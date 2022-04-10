console.log("i can smell you.");

/**
 * This code was written my me (https://github.com/Zbomb2000)
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

  if (timeleft_weekend < 0) {
      clearInterval(myfunc);
      console.log("End");
  }
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

// Will named this function, not me
function fartFriday() {
  const current_date = new Date();
  var resultDate = new Date(current_date.getTime());
  resultDate.setDate(current_date.getDate() + (7 + 5 - current_date.getDay()) % 7, "00:00:00");
  resultDate.setHours(15, 0, 1, 0);
  return resultDate;
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
  const current_date = new Date();
  var countDownDate;
  const date_var = new Date();
  const day_var = getDayInformation();
  const current_time = current_date.getTime();

  document.getElementById("current-date").innerHTML = new Date();

  // Runs all timers
  var countDownDate_end = new Date("May 26, 2022 15:00:01").getTime();
  endTimer(countDownDate_end, current_time);

  weekendTimer(fartFriday(), current_time);

  // Runs sday timer
  if (schoolTime()) {
    countDownDate = new Date((date_var.getMonth()+1)+"/"+day_var+"/"+date_var.getFullYear()+" 15:00:01").getTime();
  } else {
    countDownDate = new Date((date_var.getMonth()+1)+"/"+day_var+"/"+date_var.getFullYear()+" 8:00:01").getTime();
  }

  if (date_var.getDay() == 6 || date_var.getDay() == 0) {
    countDownDate = new Date((date_var.getMonth()+1)+"/"+getNextMonday().getDate()+"/"+date_var.getFullYear()+" 00:00:01");
    sdayTimer(countDownDate.getTime(), date_var.getTime());
  } else if (date_var.getDay() == 5) {
    if (date_var.getHours() >= 15) {
      countDownDate = new Date((date_var.getMonth()+1)+"/"+getNextMonday().getDate()+"/"+date_var.getFullYear()+" 00:00:01");
      sdayTimer(countDownDate.getTime(), date_var.getTime());
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
