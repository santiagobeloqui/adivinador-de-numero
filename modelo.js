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
        this.numero = Math.floor(Math.random() * 100 + 1);
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

export {NumeroHumano, NumeroMaquina};

