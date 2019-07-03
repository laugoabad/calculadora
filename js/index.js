
jQuery(function($) {

//Al seleccionar el radio de las operaciones, le cambia el backgroundColor
//a la operacion seleccionada
  $('input:radio[name="operacion"]').on("click", function() {
    var radioChecked = document.querySelector('input[name="operacion"]:checked');
    radioChecked.parentElement.style.backgroundColor = "rgb(195, 29, 36)";
   });


//Hace los cálculos con el click en el botón '='
  $('#calcular').click(function() {
  var operando1 = parseInt(document.getElementById('operando1').value);
  var operando2 = parseInt(document.getElementById('operando2').value);
  var radioChecked = document.querySelector('input[name="operacion"]:checked');
  var operacion = radioChecked.value;
  var resultado;
  switch (operacion) {
    case "+" : {
      resultado = operando1 + operando2;
      break;
    }
    case "-" : {
      resultado = operando1 - operando2;
      break;
    }
    case "*" : {
      resultado = operando1 * operando2;
      break;
    }
    case "/" : {
      resultado = operando1 / operando2;
      break;
    }
    default:
    text ="Tenés que elegir una operación"
  }
  resultado = resultado.toFixed(2);
  document.getElementById('resultado').innerHTML = resultado;
 });


//Resetea todo con click en el botón 'reset'
  $('#reset').click(function() {
    $('input:text').val('');
    document.getElementById('resultado').innerHTML = '';
      var radioChecked = document.querySelector('input[name="operacion"]:checked');
      radioChecked.parentElement.style.backgroundColor = "rgba(181, 254, 55, 0.46)"
 });



});
