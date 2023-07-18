/*Catalogo de peliculas:

• Comedia
    - Back to the Future - ATP
    - The Truman Show - +13
    - The Wolf of Wall Street - +16

̉• Crimen
    - No hay peliculas ATP
    - El secreto de sus ojos - +13
    - The Godfather - +16

• Drama
    - Casablanca - ATP
    - The Shawshank Redemption - +13
    - Taxi Driver - +16

• Musical
    - La La Land - ATP
    - Les Miserables - +13
    - The Rocky Horror Picture Show - +16 */

    
let formulario=document.forms.FormuCine;
let h1res=document.getElementById('resultado');
let textoRes=document.getElementById('Peliculas');
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const h1append = document.createDocumentFragment()
    const h1wtext = h1append.appendChild(document.createElement('h1'));
    let Edad= document.getElementById('EdadCine').value;
    const selectElement = document.getElementById('generos');
    const selectedOptionText = selectElement.options[selectElement.selectedIndex].text;
    var peliculascomedia= ["The Wolf of Wall Street ", "The Truman Show","Back to the Future"];
    var peliculascrimen= ["The Godfather ","El secreto de sus ojos"];
    var peliculasdrama= ["Taxi Driver ","Casablanca","The Shawshank Redemption",];
    var peliculasmusica= ["The Rocky Horror Picture Show"," La La Land", "Les Miserables"];

    if(Edad>16 && selectedOptionText=='Musical'){
        h1wtext.textContent=" The Rocky Horror Picture Show \n La La Land\n Les Miserables";
        document.body.appendChild(h1wtext);

    };
    if(Edad<16 && selectedOptionText=='Musical'){
        h1wtext.textContent="Les Miserables";
        document.body.appendChild(h1wtext);

    }
    if(Edad>16 && selectedOptionText=='Drama'){
        h1wtext.textContent=" Taxi Driver "+ "Casablanca"+"The Shawshank Redemption";
        document.body.appendChild(h1wtext);

    };
      if(Edad<16 && selectedOptionText=='Drama'){
        h1wtext.textContent="The Shawshank Redemption";
        document.body.appendChild(h1wtext);

    }
      if(Edad>16 && selectedOptionText=='Crimen'){
        h1wtext.textContentt=" The Godfather "+ "\nEl secreto de sus ojos";
        document.body.appendChild(h1wtext);

    };
      if(Edad<16 && selectedOptionText=='Crimen'){
        h1wtext.textContent="El secreto de sus ojos";
        document.body.appendChild(h1wtext);

    }
      if(Edad>16 && selectedOptionText=='Comedia'){
        h1wtext.textContent=" The Wolf of Wall Street  "+ "The Truman Show"+"Back to the Future";
        document.body.appendChild(h1wtext);

    };
      if(Edad<16 && selectedOptionText=='Comedia'){
        h1wtext.textContent="The Truman Show ";
        document.body.appendChild(h1wtext);

      }

      setTimeout(refrescar,2000);
});

function refrescar(){
    location.reload();
}
