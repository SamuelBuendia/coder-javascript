$(document).ready(function () {
  console.log("hola");
  document.getElementById("hola").click();
});


$(document).ready(function () {
  $('.radio-group .radio').click(function () {
    $('.selected .fa').removeClass('fa-check');
    $('.radio').removeClass('selected');
    $(this).addClass('selected');
  });
});


$("#start").click(function(){
  $('html, body').animate({
    scrollTop: $("#pasoUno").offset().top-70
  }, 2000);
});


