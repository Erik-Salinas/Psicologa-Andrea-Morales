/* 
*VENTANA MODAL
*/
/* 
las variables son espacios donde se puede guardar información y asociarla a un determinado nombre al que haremos referencia durante el programa. Cada vez que se consulte el nombre de la varianle,  devolverá la información que contiene.
*/
/*document.querySelector devuelve el primer elemento del documento HTML que coincida con el grupo especificado de selectores.

El método querySelector() recibe entre paréntesis y comillas los selectores de la misma forma que se indican en CSS. id(#) y class (.).
*/
const openModal = document.querySelector(".contacto");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");

/* activacion de modal */

/* Con el metodo addEventListener() permite añadir una escucha del evento indicado (primer parámetro), y en el caso de que ocurra, se ejecutará la función asociada indicada (segundo parámetro).

Con .addEventListener() se pueden añadir fácilmente varias funcionalidades.
Con .addEventListener() se pueden indicar ciertos comportamientos especiales.

*/
openModal.addEventListener("click", (e) => {
    e.preventDefault(); /* anulación de recarga de pagina  */
    /*  alert("eh abriste una ventana") */
    modal.classList.add("modal--show");
    /* Los métodos .classList.add() y .classList.remove() permiten indicar una o múltiples clases CSS a añadir o eliminar.

    */
})

/* desactivacion de modal */
closeModal.addEventListener("click", (e) => {
    e.preventDefault();/* anulación de recarga de pagina  */
    /*  alert("eh abriste una ventana") */
    modal.classList.remove("modal--show");
    /* variable modal entra a sus clases / remover es eliminar */
})

