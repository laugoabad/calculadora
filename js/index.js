
//Al seleccionar la operacion, le cambia el backgroundColor
//a la operacion seleccionada

function marcarOperacion() {
  var radioChecked = document.querySelector('input[name="operacion"]:checked');
  radioChecked.parentElement.style.backgroundColor = "rgb(254, 73, 0)";
};


//Hace los cálculos con el click en el botón '='
function calcular() {
  var operando1 = parseFloat(document.getElementById('operando1').value);
  var operando2 = parseFloat(document.getElementById('operando2').value);
  var radioChecked = document.querySelector('input[name="operacion"]:checked');
  var operacion = radioChecked.value;
  var resultado;
  if ((isNaN(operando1)) || (isNaN(operando2))) {
    alert('Los valores ingresados no son correctos');
    return;
  }

  switch (operacion) {
    case "+": {
      resultado = operando1 + operando2;
      break;
    }
    case "-": {
      resultado = operando1 - operando2;
      break;
    }
    case "*": {
      resultado = operando1 * operando2;
      break;
    }
    case "/": {
      resultado = operando1 / operando2;
      break;
    }
    default:
      text = "Tenés que elegir una operación"
  }
  resultado = resultado.toFixed(7);
  document.getElementById('resultado').innerHTML = resultado;
};

//Resetea todo con click en el botón 'reset'
function reset() {
  $('input:text').val('');
  document.getElementById('resultado').innerHTML = '';
  var radioChecked = document.querySelectorAll('input[name="operacion"]');
  radioChecked.forEach(function (item, index, arr) {
    arr[index].parentElement.style.backgroundColor = "rgb(143, 242, 7)";
  });
};

//Lleva el resultado como entrada para la siguiente operacion
function continuar() {
  var resultado = document.getElementById('resultado').innerHTML;
  $('input:text').val('');
  document.getElementById('resultado').innerHTML = '';
  document.getElementById('operando1').value = resultado;
  var radioChecked = document.querySelectorAll('input[name="operacion"]');
  radioChecked.forEach(function (item, index, arr) {
    arr[index].parentElement.style.backgroundColor = "rgb(143, 242, 7)";
  });

};
