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

  if (timeleft_end < 0) {
      window.open("maintenance.html", '_self');
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
  staticTimer("end", countDownDate_end, current_time, true);

  var countDownDate_x = new Date("May 25, 2022 15:00:01").getTime();
  staticTimer("x", countDownDate_x, current_time, true);

  var countDownDate_fenwick = new Date("May 19, 2022 15:00:01").getTime();
  staticTimer("fenwick", countDownDate_fenwick, current_time, true);

  staticTimer("weekend", fartFriday(), current_time, false);

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
