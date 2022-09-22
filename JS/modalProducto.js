const abrirModal = document.querySelector(".seccion-izq__productos"); //se guarda en una variable el sitio del click
 
const modal = document.querySelector(".modal"); //se guarda en una variable el contenedor que tiene todo el modal

const modalSalir = document.querySelector(".modal__salida"); //se guarda en una variable el boton en este caso, etiqueta a



abrirModal.addEventListener("click", (e)=> {
    e.preventDefault();
    modal.classList.add("modal--show");
});


modalSalir.addEventListener("click", (e)=> {
    e.preventDefault();
    modal.classList.remove("modal--show");
});
