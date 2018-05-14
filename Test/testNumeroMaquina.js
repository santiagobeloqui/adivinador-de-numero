const modelo = require("./modelo");


function testNumeroMaquina(){
    let errores = 0;
    for(let i = 0; i <= 999; i++){
        let numMaquina = new modelo.NumeroMaquina();
        if(numMaquina.numero < 1 || numMaquina.numero > 100 ){
            errores++;
        }        
    }
    if(errores == 0){
        console.log("Test pasado");
    } else{
        console.log("Test no pasado. " + errores + " errores en 1000 intentos.");
    }
}

testNumeroMaquina();
