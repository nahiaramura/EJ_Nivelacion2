let random = Math.floor(Math.random() * 100) + 1;  
let contadorIntentos = 0;

function adivinarNumRnd(event) {
    event.preventDefault(); 

    let numero = parseInt(document.getElementById('numero').value);
    if (isNaN(numero) || numero < 1 || numero > 100) {
        alert("Por favor, ingrese un número válido entre 1 y 100.");
        return false; 
    }

    contadorIntentos++;

    if (numero < random) {
        alert("Su número es menor al número generado. Intente nuevamente.");
    } else if (numero > random) {
        alert("Su número es mayor al número generado. Intente nuevamente.");
    } else {
        alert("¡Felicitaciones! Adivinaste el número en " + contadorIntentos + " intentos.");
        return true;  
    }

    document.getElementById('numero').value = '';
    return false;
}

