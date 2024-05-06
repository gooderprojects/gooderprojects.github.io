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
    playSound("audio/slapp.mp3");
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
