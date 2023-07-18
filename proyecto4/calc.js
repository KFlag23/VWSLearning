let formulario = document.forms.formucalc;
let restar = document.getElementById('restar');
let sumar = document.getElementById('sumar');
let multi = document.getElementById('multi');
let divid= document.getElementById('divid');
let potencia= document.getElementById('potencia');
let raiz=document.getElementById('raiz');
let redondeo=document.getElementById('Redondeo');
var operador;
var resultado;
redondeo.addEventListener('click', (event) => {
    event.preventDefault(); 
    var h1res=document.getElementById('ResultadoOper');
    resultado=parseInt(resultado);
    h1res.textContent=Math.round(resultado);
    });
raiz.addEventListener('click', (event) => {
    event.preventDefault(); 
    var h1res=document.getElementById('ResultadoOper');
    const Num1 = document.getElementById('Num1TXT').value;
    const Num2 = document.getElementById('Num2TXT').value;
    resultado = Math.sqrt(Num1,Num2)
    h1res.textContent=resultado;
    });
potencia.addEventListener('click', (event) => {
    event.preventDefault(); 
    var h1res=document.getElementById('ResultadoOper');
    const Num1 = document.getElementById('Num1TXT').value;
    const Num2 = document.getElementById('Num2TXT').value;
    resultado = Math.pow(Num1,Num2)
    h1res.textContent=resultado;
    });
restar.addEventListener('click', (event) => {
    operador = '-';
    
    });
sumar.addEventListener('click', (event) => {
    operador = '+';
    });
 multi.addEventListener('click', (event) => {
     operador = '*';
     });

divid.addEventListener('click', (event) => {
    operador = '/';
        });
            

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); 
    var h1res=document.getElementById('ResultadoOper');
    const Num1 = document.getElementById('Num1TXT').value;
    const Num2 = document.getElementById('Num2TXT').value;// Prevenir el envío del formulario
    var Num1In= parseInt(Num1);
    var Num2In= parseInt(Num2);

    if (operador== '+') {
        resultado=Num1In+Num2In
    }else if (operador== '*'){
        resultado=Num1In*Num2In
    }else if (operador=='-'){
        resultado=Num1In-Num2In
    }else if (operador== '/'){
        resultado=Num1In / Num2In
    }
    h1res.textContent=resultado;

});