function swichToCbreak() {
  window.open("cbreak.html")
}

function endTimer(countDownDate, now) {
  var timeleft_end = countDownDate - now;

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

function christmasbTimer(countDownDate, now) {
  var timeleft_end = countDownDate - now;

  var days = Math.floor(timeleft_end / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft_end % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft_end % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft_end % (1000 * 60)) / 1000);

  document.getElementById("cbreak_days").innerHTML = days;
  document.getElementById("cbreak_hours").innerHTML = hours;
  document.getElementById("cbreak_minutes").innerHTML = minutes;
  document.getElementById("cbreak_seconds").innerHTML = seconds;

  if (days <= 7) {
    document.getElementById("cbreak_span").style.color = "red";
    document.getElementById("cbreak_days").style.color = "red";
    document.getElementById("cbreak_hours").style.color = "red";
    document.getElementById("cbreak_minutes").style.color = "red";
    document.getElementById("cbreak_seconds").style.color = "red";
    document.getElementById("cbreak_subtitle").style.color = "red";
  }

  if (timeleft_end < 0) {
      clearInterval(myfunc);
      console.log("End");
      window.open("cbreak.html")
  }
}

var myfunc = setInterval(function() {
  var current_time = new Date().getTime();
  // This gets the actual date
  document.getElementById("current_date").innerHTML = new Date();

  // This is for the end of the school year
  var countDownDate_end = new Date("May 26, 2022 15:00:01").getTime();
  endTimer(countDownDate_end, current_time);

  // This is for Christmas break
  var countDownDate_cbreak = new Date("Dec 1, 2021 15:00:01").getTime();
  christmasbTimer(countDownDate_cbreak, current_time);


}, 1000)
