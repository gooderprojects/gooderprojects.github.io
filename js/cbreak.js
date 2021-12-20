function returnToMain() {
  console.log("Returning to main...")
  window.open('index.html', '_self');
}

function mainTimer(countDownDate, now) {
  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (days <= 5) {
    document.getElementById("main_span").style.color = "red";
    document.getElementById("main_div").style.fontSize = "250%";
    document.getElementById("subtitle").style.color = "red";
    document.getElementById("subtitle").style.fontSize = "75%";
    document.getElementById("syi").style.fontSize = "75%";
    document.getElementById("syi").style.marginLeft = "-500px";
    document.getElementById("syi").style.marginTop = "100px";
  }

  if (timeleft < 0) {
      clearInterval(myfunc);
      console.log("End");
      returnToMain();
  }
}

var delayVar = 0;
var myfunc = setInterval(function() {
  var current_time = new Date().getTime();
  // This gets the actual date
  document.getElementById("current_date").innerHTML = new Date();

  // This is for Christmas break
  var countDownDate = new Date("Jan 2, 2022 00:00:00").getTime();
  mainTimer(countDownDate, current_time);

  // This makes no delay at the beginning
    if (delayVar == 0) {
      delayVar = 1000;
    }

}, delayVar)
