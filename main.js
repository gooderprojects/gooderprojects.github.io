var myfunc = setInterval(function() {
  var now = new Date().getTime();
  // This gets the actual date
  document.getElementById("current_date").innerHTML = new Date();
  // This is for the end of the school year
  var countDownDate = new Date("May 31, 2022 15:00:00").getTime();

  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById("end_days").innerHTML = days;
  document.getElementById("end_hours").innerHTML = hours;
  document.getElementById("end_minutes").innerHTML = minutes;
  document.getElementById("end_seconds").innerHTML = seconds;

  if (days <= 7) {
    document.getElementById("end_span").style.color = "red";
  }

  if (timeleft < 0) {
      clearInterval(myfunc);
      console.log("End");
  }
}, 1000)
