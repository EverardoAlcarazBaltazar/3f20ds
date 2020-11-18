function factorial(n) {

    var resultado = [];

    for (var i = 0; i < n.length; i++) {
        resultado[i] = 1;
        for(var j = 1; j <= n[i]; j++) {
            resultado[i] *= j;
        }
    }

   return resultado;
}

window.onload = function() {

    var numeros = ("12345678910");
    var result = factorial(numeros);

    for (var i = 0; i < result.length; i++) {
        document.getElementById('resultado').innerHTML += 'factorial  '+ numeros[i] + ' = ' + result[i] + '<br/>';
    }
}
