const express = require("express");
const app = express(); 
const prompt=require("prompt-sync")({sigint:true});
var calc;
var input;
var resultado;
var operador;
var texto ="Que quieres hacer con el numero?";
var numero1 = prompt("Numero:", "");
var operador = prompt("", "");
var numero2 = prompt("Numero:", "");
app.listen(3000)
app.get("/", (req, res) => {
    res.send(numero1)
    res.send(console.log(texto))
    res.send(operador)
    res.send(numero2)

})

switch(operador){
    case "restar":
        resultado = numero1 - numero2;
        console.log(resultado);
    break;

    case "sumar":
        resultado= numero1 + numero2;
        console.log(resultado);
    break;

    case "dividir":
        resultado = numero1 / numero2;
        console.log(resultado);
        break;
}

