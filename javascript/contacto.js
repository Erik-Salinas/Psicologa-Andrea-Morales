/*
*CONTACTO 
 */
/* Variables*/
const formulario = document.querySelector(".formulario");

//Crear el evento
formulario.addEventListener("submit", validarFormulario)

// Funcion
function validarFormulario(e) {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;

    /* document.getElementById  devuelve una referencia al elemento por su id 
    
    El método getElementById() recibe entre paréntesis y comillas los id (No hay que espesificar como en el querySelector)*/
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `¡Gracias por confiar en nosotros ${nombre} ${apellido} nos contactaremnos con usted dentro de las 24 hs.!  `
    /*textContent devuelve el contenido de texto puro del elemento, sin tener en cuenta ninguna etiqueta HTML o estilo CSS */
}
