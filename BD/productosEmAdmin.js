import {database} from "./configuracion.js";
import {ref, set} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";


//VISTA PRELIMINAR DE LA IMAGEN DE PRODUCTO

document.getElementById("insertarImagen__addImg")
.onchange = function(e){
    let lectura= new FileReader();
    lectura.readAsDataURL(e.target.files[0]);
    lectura.onload = function(){
        let previsualiza = document.getElementById("contenedorImagen__preview");
        imagen = document.createElement("img");
        imagen.src = lectura.result;
        previsualiza.append(imagen);

    }
}


//lo que se encuentra dentro del import son métodos
/*
    var agregarProducto__nombre = document.getElementById("contenedor-registroProducto__nombre");
    var agregarProducto__codigo = document.getElementById("contenedor-registroProducto__codigo");
    var agregarProducto__tipo = document.getElementById("contenedor-registroProducto__tipo");
    var agregarProducto__descripcion = document.getElementById("contenedor-registroProducto__descr");
    var agregarProducto__imagen = document.getElementById("contenedor-registroProducto__addImg");
    var agregarProducto__precio = document.getElementById("contenedor-registroProducto__valor");

    var boton__agregarProductoAll = document.getElementById("guardarProducto__eventoBotonUno");
//FUNCIÓN PARA INSERTAR DATOS
function agregarProductoVistaProductos(){
    
    set(ref(database, "usuarios/" + agregarEmployee__id.value),{
        nameProduct: agregarProducto__nombre.value,
        codeProduct:agregarProducto__codigo.value,
        typeProduct: agregarProducto__tipo.value,
        discountProduct: agregarProducto__descripcion.value,
        imageproduct: agregarProducto__imagen.value,
        valueProduct: agregarProducto__precio.value,
    })
    .then(() => { 
        alert("el producto fue guardado correctamente");
    })
    .catch(error => 
        alert("no se han guardado los datos del producto"));
}

    boton__agregarProductoAll.addEventListener('click', agregarProductoVistaProductos);
*/