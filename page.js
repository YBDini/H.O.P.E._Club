$(document).ready(function() {
  $("#notificationsButtons").on('click', 'span', function() {
    $("#notifications img").removeClass("opaque");

    var newImage = $(this).index();

    $("#notifications img").eq(newImage).addClass("opaque");

    $("#notificationsButtons span").removeClass("selected");
    $(this).addClass("selected");
  });
});