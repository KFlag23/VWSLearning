function saludo(){
    const boton= 
    alert("Hola mundo!")
}

function enviouser(){
    var Nombre= document.getElementById("Nombre").value;
    var Contra= document.getElementById("contraseña").value;
    var ContraText= document.getElementById("TextContra");
    ContraText.textContent= "Tu contraseña es:"+ Contra;
    alert("Hola tu Nombre es:"+Nombre+" y tu contraseña es: "+Contra)

}

function timer(){
    setTimeout()
}