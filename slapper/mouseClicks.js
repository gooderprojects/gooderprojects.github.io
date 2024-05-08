document.addEventListener('DOMContentLoaded', function () {
  var handImage = document.getElementById('hand-image');
  var cookieImage = document.getElementById('cookie-img');

  // Function to handle mousedown event
  function handleMouseDown() {
    // Apply the shrink class to the hand image
    handImage.classList.add('shrink');
  }

  // Function to handle mouseup event
  function handleMouseUp() {
    // Remove the shrink class from the hand image
    handImage.classList.remove('shrink');
  }

  // Function to handle click event for the cookie image
  function handleClick() {
    function playSound(src) {
      var audio = new Audio();
      audio.src = src;
      audio.play();
    }
    // Remove the pulse-animation class (if it's already applied)
    cookieImage.classList.remove('pulse-animation');

    // Add the pulse-animation class to restart the animation
    cookieImage.offsetWidth; // Trigger reflow to restart the animation
    cookieImage.classList.add('pulse-animation');

    // Do stuff when it gets clicked on ------------------------------------------------
    playSound("audio/slapp.mp3");
    // Create img element
    var gif = document.createElement("img");

    // Set source to your gif
    gif.src = "img/cookieExplosion.gif";

    // Set the position
    gif.style.position = "absolute";
    gif.style.left = event.clientX + (Math.floor(Math.random() * 101) - 50) + "px";
    gif.style.top = event.clientY + 50 + (Math.floor(Math.random() * 101) - 50) + "px";
    gif.style.width = "250px";

    // Add class for animation
    gif.classList.add("gif");
    gif.classList.add("selector")

    // Append the img element to the body
    document.body.appendChild(gif);

    // Calculate duration of the gif's animation
    var animationDuration = parseFloat(window.getComputedStyle(gif).animationDuration) * 1000;

    // Remove the gif after the animation completes
    setTimeout(function () {
      document.body.removeChild(gif);
    }, animationDuration);
  }

  // Add mousedown event listener to the body
  document.body.addEventListener('mousedown', handleMouseDown);

  // Add mouseup event listener to the body
  document.body.addEventListener('mouseup', handleMouseUp);

  // Add click event listener to the cookie image
  cookieImage.addEventListener('click', handleClick);

  // Add animationend event listener for the 'pulse' animation
  cookieImage.addEventListener('animationend', function (event) {
    // Check if the animation that ended is 'pulse'
    if (event.animationName === 'pulse') {
      // Remove the pulse-animation class when the 'pulse' animation ends
      cookieImage.classList.remove('pulse-animation');
    }
  });
});
