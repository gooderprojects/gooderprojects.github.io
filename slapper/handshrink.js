// Watches for mouse down/up
document.addEventListener('DOMContentLoaded', function() {
  var image = document.getElementById('hand-image');

  // Add mousedown event listener
  document.body.addEventListener('mousedown', function() {
    image.classList.add('shrink'); // Apply the shrink class
    console.log("mouse down");
  });

  // Add mouseup event listener
  document.body.addEventListener('mouseup', function() {
    image.classList.remove('shrink'); // Remove the shrink class
    console.log("mouse up");
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var image2 = document.getElementById('cookie-img');

  // Add click event listener
  image2.addEventListener('click', function() {
    // Toggle pulse-animation class
    if (!image2.classList.contains('pulse-animation')) {
      image2.classList.add('pulse-animation');
      console.log("mouse up yeyeyeyyeye");
    } else {
      image2.classList.remove('pulse-animation');
      console.log("mouse down yeyeyeyyeye");
    }
  });
});
