"use strict";

function medida(valor, tipo){
    this.valor=valor;
    this.tipo=tipo;
}

function temperatura(valor, tipo){
    medida.call(this, valor, tipo);
    this.category ='temperatura';
}

temperatura.prototype = new medida();

medida.prototype.set_valor = function(){
    this.valor=valor;
}

medida.prototype.set_tipo = function(){
    this.tipo=tipo;
}

medida.prototype.get_valor = function(){
    return this.valor=valor;
}

medida.prototype.get_tipo = function(){
    return this.tipo=tipo;
}


function calculate(){
    
    var result = new temperatura();
    
    var original = document.getElementById("original");
    var temp = original.value;
    
    var regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([cCfF])\s*$/i; 
    var m = temp.match(regexp);     /*Cuando cumple la expresión regular*/
    
    if (m){
        /*var num = m[1];
        var type = m[2];
        num = parseFloat(num);      //string --> float*/

        result.set_valor(parseFloat(m[1]));
        result.set_valor(m[2]);

        if (result.get_tipo=='c' || result.get_tipo=='C'){
            result.set_valor((num * 9/5)+32);
            result = result.toFixed(2) + " Farenheit";  //toFixed --> Redondeo
        }
        else{
            result.set_valor((num -32)*5/9);
            result = result.toFixed(2) + " Celsius";
        }
        converted.innerHTML = result;
    }
    else{
        converted.innerHTML = "ERROR. Try something like '-4.2C' instead."
    }
}