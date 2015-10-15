"use strict";

function medida(valor, tipo){
    this.Valor=valor;
    this.Tipo=tipo;
}

function temperatura(valor, tipo){
    medida.call(this, valor, tipo);
    this.category ='temperatura';
}

temperatura.prototype = new medida();

medida.prototype.set_valor = function(v){
    this.Valor=v;
}

medida.prototype.set_tipo = function(t){
    this.Tipo=t;
}

medida.prototype.get_valor = function(){
    return this.Valor;
}

medida.prototype.get_tipo = function(){
    return this.Tipo;
}
temperatura.prototype.a_fa=function(){
    return ((this.get_valor()*9)/5)+32;
}
temperatura.prototype.a_c=function(){
    return ((this.Valor-32)*5)/9;
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
        alert("Resultado->"+result.get_valor());
        result.set_tipo(m[2]);
        alert("Tipo->"+result.get_tipo());

        if (result.get_tipo() =='c' || result.get_tipo() =='C'){
            result.set_valor(result.a_fa());
            result = result.get_valor() + " Farenheit";  //toFixed --> Redondeo
        }
        else{
            result.set_valor(result.a_c());
            result = result.get_valor() + " Celsius";
        }
        converted.innerHTML = result;
    }
    else{
        converted.innerHTML = "ERROR. Try something like '-4.2C' instead."
    }
}