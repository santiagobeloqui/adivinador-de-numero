// MODELO

class NumeroHumano{
    constructor(){
        this.intento = 50;
        this.min = 1;
        this.max = 101;
    }
    adivinarNumero(respuesta){
        if (respuesta == undefined){
            return this.intento;            
        } else if (respuesta == "mayor"){
            this.min = this.intento;
            this.intento = Math.floor(this.min + (this.max -this.min) / 2);
            return this.intento;   
        } else if (respuesta == "menor"){
            this.max = this.intento;
            this.intento = Math.floor(this.min + (this.max -this.min) / 2);
            return this.intento;
        } else if (respuesta == "igual"){
            return "ganar";
        }
    }
}

class NumeroMaquina{
    constructor(){
        this.numero = Math.floor((Math.random() * 100) + 1);
    }
    adivinarNumero(intento){
        if (intento > this.numero){
            return "mayor";
        } else if (intento < this.numero){
            return "menor";
        } else if (intento == this.numero){
            return "igual";
        }
    }
}

// CONTROLADOR
 
let lista = document.getElementById("lista");
let controles = document.getElementById("controles");


function adivinoYo() { 
    let numMaquina =  new NumeroMaquina();
    borrarContenido(lista);
    nuevoElementoLista("Adiviná el número secreto");
    borrarContenido(controles);
    let input = document.createElement("INPUT");    
    input.setAttribute("type", "text");
    controles.appendChild(input);
    let buttonEnviar = nuevoBoton("Comprobar");
    buttonEnviar.addEventListener("click", ()=>{
        intentar(input, numMaquina);
    });

}

function intentar(input, numMaquina){
    if (isNaN(input.value) || input.value == ""){
        nuevoElementoLista("Recordá que tenés que ingresar un número");
        return;
    }
    let intento = input.value;
    let respuesta = numMaquina.adivinarNumero(intento);
    let elementoLista = document.createElement("LI");
    if(respuesta == "menor"){
        nuevoElementoLista("El número secreto es mayor que " + intento);
    } else if (respuesta == "mayor"){
        nuevoElementoLista("El número secreto es menor que " + intento);
    } else if (respuesta == "igual") {
        nuevoElementoLista("¡Ganaste! " + intento + " es el número secreto");
        borrarContenido(controles);
    }
    input.value = "";
}

function adivinaMaquina(){
    let numHumano = new NumeroHumano();
    borrarContenido(lista);
    nuevoElementoLista("¿El número es " + numHumano.intento + " ?");
    borrarContenido(controles);
    let buttonMenor = nuevoBoton("Mi número es menor");
    buttonMenor.addEventListener("click", ()=>{
        evaluarIntento("menor", numHumano);
    });
    let buttonIgual = nuevoBoton("¡Ese es mi número!");
    buttonIgual.addEventListener("click", ()=>{
        evaluarIntento("igual", numHumano);
    });
    let buttonMayor = nuevoBoton("Mi número es mayor");
    buttonMayor.addEventListener("click", ()=>{
        evaluarIntento("mayor", numHumano);  
    });
}

function evaluarIntento(evaluacion, numHumano){
    let respuesta = numHumano.adivinarNumero(evaluacion);
    if (respuesta == "ganar"){
        nuevoElementoLista("¡Adiviné tu número!");
        borrarContenido(controles);
    } else{
        nuevoElementoLista("¿El número es " + numHumano.intento + " ?");       
    }
}

function borrarContenido(padre){
    while(padre.hasChildNodes()){
        padre.removeChild(padre.firstChild);
    }
}

function nuevoElementoLista(texto){
    let textNodeLi = document.createTextNode(texto);
    let elementoLista = document.createElement("LI");
    elementoLista.appendChild(textNodeLi);
    lista.appendChild(elementoLista);
}

function nuevoBoton(texto){
    let button = document.createElement("BUTTON");
    let textNodeButton = document.createTextNode(texto);
    button.appendChild(textNodeButton);    
    controles.appendChild(button);
    return button;
}


