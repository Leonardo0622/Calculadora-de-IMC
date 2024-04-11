function calcular(){
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    var imc = peso/ Math.pow(altura,2)
    var imccondecimal = imc.toFixed(2)
    

    if (imccondecimal < 18.5){

        document.getElementById('resultado').innerText = 'Bajo Peso \n Resultado: ' + imccondecimal;
    }
    else if( imccondecimal < 25 && imccondecimal >=18.5 ){
        document.getElementById('resultado').innerText = 'Peso Normal \n Resultado: ' + imccondecimal;
    }

    else if( imccondecimal < 30 && imccondecimal >= 25 ){
        document.getElementById('resultado').innerText = 'Sobre Peso \n Resultado: ' + imccondecimal;
    }

    else if( imccondecimal < 35 && imccondecimal >= 30 ){
        document.getElementById('resultado').innerText = 'Obesidad Tipo 1 \n Resultado: ' + imccondecimal;
    }

    else if( imccondecimal < 40 && imccondecimal >= 35 ){
        document.getElementById('resultado').innerText = 'Obesidad Tipo 2 \n Resultado: ' + imccondecimal;
    }

    else if( imccondecimal >= 40 ){
        document.getElementById('resultado').innerText = 'Obesidad tipo 3 (mórbida) \n Resultado: ' + imccondecimal;
    }

}

function calcular2() {
    var numero = parseInt(document.getElementById('numero').value);

    var contador = 0;

    for (var divisor = 1; divisor <= numero; divisor++) {
        if (numero % divisor === 0) {
            contador++;
        }
    }

    if (contador === 2) {
        document.getElementById('resultado2').innerText = 'El numero es primo';
    } else {
        document.getElementById('resultado2').innerText = 'El numero no es primo';
    }
    

}