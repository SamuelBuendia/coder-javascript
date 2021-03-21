$(document).ready(function () {
  
});

$("#start").click(function(){
  $('html, body').animate({
    scrollTop: $("#paso0").offset().top-150
  }, 2000);
});

var pagina = 0;
function paginacion (valor) {
  if (valor == 'siguiente') {
    pagina++
  } else if (valor == 'anterior') {
    pagina--
  }

  boton(pagina);
}

function boton (pagina) {
  if (pagina > 0) {
    $("#paginacionMenos").show(); 
    $('#paginacionMas').attr("disabled", true);
    $('#paginacionEnviarbtn').attr("disabled", true);
  } else {
    $("#paginacionMenos").hide(); 
    $('#paginacionMas').attr("disabled", false);
  }

  if (pagina > 6) {
    $("#paginacionMas").hide();
    $("#paginacionEnviar").show();
  } else {
    $("#paginacionMas").show();
    $("#paginacionEnviar").hide();
  }

  $('.radio-group .radio'.concat(pagina)).click(function () {
    $('.selected .fa').removeClass('fa-check');
    $('.radio'.concat(pagina)).removeClass('selected');
    $(this).addClass('selected');
    $('#paginacionMas').attr("disabled", false);
    $('#paginacionEnviarbtn').attr("disabled", false);
  });
}

$("#paginacionMas").on( "click", function() {
  $('.card-body ').hide();
  $('#paso'.concat(pagina)).show();
  $('html, body').animate({
    scrollTop: $('#paso'.concat(pagina)).offset().top-90
  }, 2000);
 });
$("#paginacionMenos").on( "click", function() {
  $('.card-body ').hide();
  $('#paso'.concat(pagina)).show();
  $('html, body').animate({
    scrollTop: $('#paso'.concat(pagina)).offset().top-90
  }, 2000);
});

function opcUno (opcion) {
  switch (opcion) {
    case 'Personal':
      costo1 = 100000;
      break;
    case 'Empresa Básica':
      costo1 = 150000;
      break;
    case 'Empresa Corporativa':
      costo1 = 200000;
      break;
    case 'Productos':
      costo1 = 250000;
      break;
    default:
      costo1 = 0;
      break;
  }
  opcion1 = opcion;
}

function opcDos (opcion) {
  switch (opcion) {
    case 'Usaré plantilla':
      costo2 = 100000;
      break;
    case 'Quiero Diseño':
      costo2 = 200000;
      break;
    default:
      costo2 = 0;
      break;
  }
  opcion2 = opcion;
}

function opcTres (opcion) {
  switch (opcion) {
    case 'Muchas animaciones':
      costo3 = 300000;
      break;
    case 'Pocas animaciones':
      costo3 = 200000;
      break;
    default:
      costo3 = 0;
      break;
  }
  opcion3 = opcion;
}

function opcCuatro (opcion) {
  switch (opcion) {
    case 'Si':
      costo4 = 300000;
      break;
    default:
      costo4 = 0;
      break;
  }
  opcion4 = opcion;
}

function opcCinco (opcion) {
  switch (opcion) {
    case 'Si':
      costo5 = 300000;
      break;
    default:
      costo5 = 0;
      break;
  }
  opcion5 = opcion;
}

function opcSeis (opcion) {
  switch (opcion) {
    case 'No, necesito uno':
      costo6 = 200000;
      break;
    default:
      costo6 = 0;
      break;
  }
  opcion6 = opcion;
}

function opcSiete (opcion) {
  switch (opcion) {
    case 'No, necesito uno':
      costo7 = 200000;
      break;
    default:
      costo7 = 0;
      break;
  }
  opcion7 = opcion;
}

function paginacionFinal() {

  $('#pasoInicial').hide();
  $('#pasoFinal').show();
   
  var total = this.costo1 + this.costo2 + this.costo3 + this.costo4 + this.costo5 + this.costo6 + this.costo7;

  $("#respuesta1").attr("value", this.opcion1);
  $("#respuesta2").attr("value", this.opcion2);
  $("#respuesta3").attr("value", this.opcion3);
  $("#respuesta4").attr("value", this.opcion4);
  $("#respuesta5").attr("value", this.opcion5);
  $("#respuesta6").attr("value", this.opcion6);
  $("#respuesta7").attr("value", this.opcion7);
  $("#respuesta").attr("value", total);
}

$("#paginacionEnviar").click(function(){
  $('html, body').animate({
    scrollTop: $('#pasoFinal').offset().top-90
  }, 1000);
});

$("#volverInicio").click(function(){
  $('html, body').animate({
    scrollTop: top-0
  }, 1000);
});


