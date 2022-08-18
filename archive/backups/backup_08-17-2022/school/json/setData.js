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

function staticTimer(timer, countDownDate, now) {
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

  if (timeleft_end < 0) {
    document.getElementById(timer+"-days").innerHTML = "Done";
    document.getElementById(timer+"-hours").innerHTML = "Done";
    document.getElementById(timer+"-minutes").innerHTML = "Done";
    document.getElementById(timer+"-seconds").innerHTML = "Done";
  }
}

// Will named this function, not me
function fartFriday() {
  const current_date = new Date();
  var resultDate = new Date(current_date.getTime());
  resultDate.setDate(current_date.getDate() + (7 + 5 - current_date.getDay()) % 7, "00:00:00");
  resultDate.setHours(15, 0, 1, 0);
  return resultDate;
}


var delayVar = 0;

// Main loop
var myfunc = setInterval(function() {
  const current_date = new Date();
  const current_time = current_date.getTime();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Runs all timers
  document.getElementById("current-time").innerHTML = new Date();
  staticTimer("end", new Date("May 26, 2022 15:00:01").getTime(), current_time);
  staticTimer("sday", new Date(monthNames[current_date.getMonth()]+" "+current_date.getDate()+", "+current_date.getFullYear()+" 15:00:01").getTime(), current_time);
  staticTimer("weekend", fartFriday(), current_time);
  staticTimer("x", new Date("May 25, 2022 15:00:01"), current_time, true);
  staticTimer("fenwick", new Date("May 19, 2022 15:00:01"), current_time, true);

  // No delay on open
  if (delayVar == 0) {
    delayVar = 1000;
  }

}, delayVar)
