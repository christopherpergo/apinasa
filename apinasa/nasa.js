// foto del dia

fetch("https://api.nasa.gov/planetary/apod?api_key=5RiasxgGjJrphvhUasTssVrbLa7tqu9ckJAOw6Yl")
.then(function mostrarRespuesta(respuesta){
  return respuesta.json()
}).then (function mostrarDatos (datos){
 document.getElementById("fotodeldia").innerHTML=`
 <div class="padrenasa"> <div>
 <img class="fotoapi" src="${datos.url}"></div><div> 
 <h2 class="h2title"> FOTO DEL DIA </h2>
 <p class="titleapi1" >Title: ${datos.title}</p>
 <p class="explicacionapi" >Explanation: ${datos.explanation}</p></div></div>`
})



    // Elegir una fecha

  function obtenerContenido() {
    let fechaInput = document.getElementById("fecha").value;
    let fechaSeleccionada = new Date(fechaInput);
    let dia = fechaSeleccionada.getDate();
    let mes = fechaSeleccionada.getMonth() + 1; 
    let año = fechaSeleccionada.getFullYear();
    

    // fetch(`https:api.nasa.gov/planetary/apod?api_key=5RiasxgGjJrphvhUasTssVrbLa7tqu9ckJAOw6Yl&date=${año}-${mes}-${dia}`)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=5RiasxgGjJrphvhUasTssVrbLa7tqu9ckJAOw6Yl&date=${año}-${mes}-${dia}`)

      .then(respuesta => respuesta.json())
      .then(datos => {
        let resultadoDiv = document.getElementById("resultado");
        let contenido = datos.url
        let contenido1 = datos.title
        let contenido2 = datos.explanation
        resultadoDiv.innerHTML = `
        <div id="resultado1">
        <a class="cerrar" href="index.html">X</a>
        <div class="padrenasa"> <div>
        <img class="fotoapi" src= "${contenido}">
        </div> <div>
       <p class="titleapi" >Title:  ${contenido1}</p>
       <p class="explicacionapi1" >Explanation:  ${contenido2}</p>
       </div>
       </div>
       </div>`
      })

  }
  function padLeft(value) {
    return value.toString().padStart(2, "0");
  }




