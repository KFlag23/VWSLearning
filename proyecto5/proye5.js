
let formulario=document.forms.FormuCine;
let h1res=document.getElementById('resultado');
let textoRes=document.getElementById('Peliculas');
let itemcomedia=document.createElement("h1");
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const h1append = document.createDocumentFragment()
    const h1wtext = h1append.appendChild(document.createElement('h1'));
    let Edad= document.getElementById('EdadCine').value;
    const selectElement = document.getElementById('generos');
    const selectedOptionText = selectElement.options[selectElement.selectedIndex].text;
    var peliculascomedia= ['The Wolf of Wall Street ', 'The Truman Show','Back to the Future'];
    var peliculascrimen= ["The Godfather ","El secreto de sus ojos"];
    var peliculasdrama= ["Taxi Driver ","Casablanca","The Shawshank Redemption",];
    var peliculasmusica= ["The Rocky Horror Picture Show"," La La Land", "Les Miserables"];
    if(Edad>16 && selectedOptionText=='Musical'){
        for(var x=0;x < peliculasmusica.length;x++){
          itemcomedia.innerText+=peliculasmusica[x];
          h1res.appendChild(itemcomedia);
        }
    };
    if(Edad<16 && selectedOptionText=='Musical'){
        for(var x=0;x < peliculasmusica.length;x++){
          itemcomedia.innerText+=peliculasmusica[x];
          h1res.appendChild(itemcomedia);
        }
    }
    if(Edad>16 && selectedOptionText=='Drama'){
        for(var x=0;x < peliculasdrama.length;x++){
          itemcomedia.innerText+=peliculasdrama[x];
          h1res.appendChild(itemcomedia);
        }
    };
      if(Edad<16 && selectedOptionText=='Drama'){
        for(var x=0;x < peliculasdrama.length;x++){
          itemcomedia.innerText+=peliculasdrama[x];
          h1res.appendChild(itemcomedia);
        }
    }
      if(Edad>16 && selectedOptionText=='Crimen'){
        for(var x=0;x < peliculascrimen.length;x++){
          itemcomedia.innerText+=peliculascrimen[x];
          h1res.appendChild(itemcomedia);
        }
    };
      if(Edad<16 && selectedOptionText=='Crimen'){
        for(var x=0;x < peliculascrimen.length;x++){
          itemcomedia.innerText+=peliculascrimen[x];
          h1res.appendChild(itemcomedia);
        }
    }
      if(Edad>16 && selectedOptionText=='Comedia'){
        for(var x=0;x < peliculascomedia.length;x++){
          itemcomedia.innerText=peliculascomedia[x];
          h1res.appendChild(itemcomedia);        }
    };
      if(Edad<16 && selectedOptionText=='Comedia'){
        for(var x=0;x < peliculascomedia.length;x++){
          itemcomedia.innerText=peliculascomedia[x];
          h1res.appendChild(itemcomedia);

                }

      }
});

function resetear(){
  itemcomedia.parentNode.removeChild(itemcomedia)
}