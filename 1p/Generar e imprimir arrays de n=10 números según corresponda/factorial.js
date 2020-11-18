function factorial(n) {

    let resultado = [];

    for (let i = 0; i < n.length; i++) {
        resultado[i] = 1;
        for(let j = 1; j <= n[i]; j++) {
            resultado[i] *= j;
        }
    }

   return resultado;
}

window.onload = function() {

    let numeros = [1,2,3,4,5,6,7,8,9,10];
    let result = factorial(numeros);

    for (let i = 0; i < result.length; i++) {
        document.getElementById('resultado').innerHTML += 'factorial  '+ numeros[i] + ' = ' + result[i] + '<br/>';
    }
}
