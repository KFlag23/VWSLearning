let formulario = document.forms.FormuPreg;
let contador = setTimeout(acabo, 30000);
let Prgu1 = document.getElementById("Pregu1").value
let Prgu2 = document.getElementById("Pregu2").value
let Prgu3 = document.getElementById("Pregu3").value
let Prgu4 = document.getElementById("Pregu4").value
let Prgu5 = document.getElementById("Pregu5").value
let Prgu6 = document.getElementById("Pregu6").value
intervalo = setInterval(tempo, 1000);
function tempo(){
    let tiempo=document.getElementById("segundos").textContent;
    document.getElementById("segundos").textContent= tiempo -1;
}
function final()
{
    document.getElementById("segundos").textContent=0
    clearTimeout(contador);
    clearInterval(intervalo)

}
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    if (Prgu1 && Prgu2 && Prgu3 && Prgu4 && Prgu5 && Prgu6 == "") {
        alert("Responde todas las preguntas");
    } 
    else{
        alert("Preguntas enviadas correctamente estas son las respuestas:  "+" "+document.getElementById("Pregu1").value+" "+document.getElementById("Pregu2").value+" "+document.getElementById("Pregu3").value+" "+document.getElementById("Pregu4").value+" "+document.getElementById("Pregu5").value+" "+document.getElementById("Pregu6").value)
    } 
    
});

function resetform(){
    location.reload();
}
function acabo(){
    final()
    alert("Se te acabo el tiempo")
    setTimeout(resetform,1000)

}
