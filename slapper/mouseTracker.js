$(document).mousemove(function (e) {
  $("#follow").css({
    left: e.pageX - 30,
    top: e.pageY - 50
  });
});
