$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").slideToggle();
    });
  $(".clickable2").click(function() {
    $("#dolphin").fadeToggle();
    $("#dolphin").slideToggle();
    }); 
});