const modelo = require("./modelo");

let errores = 0;
let intentos = 0;

function testNumeroHumano(respuesta, min, max, intento){
    intentos ++;
    let numHumano = new modelo.NumeroHumano();
    numHumano.adivinarNumero(respuesta);
    if(numHumano.min != min || numHumano.max != max || numHumano.intento != intento){
        errores ++;
    }
}

testNumeroHumano(undefined, 1, 101, 50);
testNumeroHumano("igual", 1, 101, 50);
testNumeroHumano("mayor", 50, 101, 75);
testNumeroHumano("menor", 1, 50, 25);

if(errores == 0){
    console.log("Test pasado");
} else{
    console.log("Test no pasado. " + errores + " errores en " + intentos + " intentos.")
}


