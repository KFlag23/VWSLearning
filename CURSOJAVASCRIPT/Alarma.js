
let formulario = document.forms.formularios;
let tiempos = document.getElementById('tiempo');
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario
    alert("Alarma creada de " + tiempos.value);
    var TextoTemp = document.getElementById('Temporizador');
    TextoTemp.textContent = tiempos.value;
    const temporizadors = tiempos.value * 1000;
    console.log(temporizadors);

    function temporizador() {
        setTimeout(acabo, temporizadors);
    }

    temporizador();
});
function acabo(){
    alert("Se te acabo el tiempo")

}

