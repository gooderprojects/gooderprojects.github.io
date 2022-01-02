// This is the function for the end of school year timer
function endTimer(countDownDate, now) {
  // Gets the time left until the end of the school year
  var timeleft_end = countDownDate - now;

  // Does some calculating stuff
  var days = Math.floor(timeleft_end / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft_end % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft_end % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft_end % (1000 * 60)) / 1000);

  // Changes the numbers on the timer
  document.getElementById("end_days").innerHTML = days;
  document.getElementById("end_hours").innerHTML = hours;
  document.getElementById("end_minutes").innerHTML = minutes;
  document.getElementById("end_seconds").innerHTML = seconds;

  // It it is within 7 days, the timer turns red
  if (days <= 7) {
    document.getElementById("end_span").style.color = "red";
    document.getElementById("end_subtitle").style.color = "red";
  }

  // Does something after the timer ends
  if (timeleft_end < 0) {
      clearInterval(myfunc);
      console.log("End");
  }
}

// This is the function for the Christmas break timer
function cswTimer(countDownDate, now) {
  // Gets time until the end of the school year
  var timeleft_end = countDownDate - now;

  // Does some calculating stuff
  var days = Math.floor(timeleft_end / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft_end % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft_end % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft_end % (1000 * 60)) / 1000);

  // Changes the numbers on the timer
  document.getElementById("cbreak_days").innerHTML = days;
  document.getElementById("cbreak_hours").innerHTML = hours;
  document.getElementById("cbreak_minutes").innerHTML = minutes;
  document.getElementById("cbreak_seconds").innerHTML = seconds;

  // It it is within 7 days, the timer turns red
  if (days <= 7) {
    document.getElementById("cbreak_span").style.color = "red";
    document.getElementById("cbreak_days").style.color = "red";
    document.getElementById("cbreak_hours").style.color = "red";
    document.getElementById("cbreak_minutes").style.color = "red";
    document.getElementById("cbreak_seconds").style.color = "red";
    document.getElementById("cbreak_subtitle").style.color = "red";
  }

  // Does something after the timer ends
  if (timeleft_end < 0) {
      clearInterval(myfunc);
      console.log("End");
      window.open("cbreak.html", "_self")
  }
}

// This is the function for the spring break timer
function springbTimer(countDownDate, now) {
  // Gets the time left until spring break
  var timeleft_end = countDownDate - now;

  // Does some calculating stuff
  var days = Math.floor(timeleft_end / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft_end % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft_end % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft_end % (1000 * 60)) / 1000);

  // Changes the number on the timer
  document.getElementById("sbreak_days").innerHTML = days;
  document.getElementById("sbreak_hours").innerHTML = hours;
  document.getElementById("sbreak_minutes").innerHTML = minutes;
  document.getElementById("sbreak_seconds").innerHTML = seconds;

  // Makes the timer red if it is within 7 days
  if (days <= 7) {
    document.getElementById("sbreak_span").style.color = "red";
    document.getElementById("sbreak_days").style.color = "red";
    document.getElementById("sbreak_hours").style.color = "red";
    document.getElementById("sbreak_minutes").style.color = "red";
    document.getElementById("sbreak_seconds").style.color = "red";
    document.getElementById("sbreak_subtitle").style.color = "red";
  }

  // Ends the timer
  if (timeleft_end < 0) {
      clearInterval(myfunc);
      console.log("End");
      window.open("cbreak.html")
  }
}

var delayVar = 0;

// This is the main function
var myfunc = setInterval(function() {
  // Gets the current time
  var current_time = new Date().getTime();

  // This gets the actual date
  document.getElementById("current_date").innerHTML = new Date();

  // This is for the end of the school year
  var countDownDate_end = new Date("May 26, 2022 15:00:01").getTime();
  endTimer(countDownDate_end, current_time);

  // This is for Catholic Schools week
  var countDownDate_cbreak = new Date("Feb 10, 2022 15:00:01").getTime();
  christmasbTimer(countDownDate_cbreak, current_time);

  // This is for spring break
  var countDownDate_sbreak = new Date("Apr 15, 2022 15:00:01").getTime();
  springbTimer(countDownDate_sbreak, current_time);

  // This makes no delay at the beginning
  if (delayVar == 0) {
    delayVar = 1000;
  }

}, delayVar)
