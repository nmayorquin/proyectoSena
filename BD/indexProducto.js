import agregarProductos from "../BD/agregarProducto.js";


let agregarProducto = new agregarProductos(); 


//llamada a la función de productos
getProductos();

function getProductos(){
    agregarProducto.getProductos()
    .then((producto) => { //then y catch son funciones de promesas de js
        mostrarProducto(producto);
    })
    .catch(error => 
        console.log(error));
    
}
//FUNCIÓN PARA MOSTRAR PRODUCTO
function mostrarProducto(producto){
    const elementostablaProductos = document.getElementById("modal__listadoProductos"); //se trae el campo donde se ingresan los datos
   
    elementostablaProductos.innerHTML = ""; //me permite vaciar la tabla
    let conjuntoProductos = Object.keys(producto).map((key) => producto[key]); // crea un arreglo de llaves principales

    //SE CREA UN FOR EACH PARA PODER MOSTRAR LOS PRODUCTOS

    conjuntoProductos.forEach(producto => {  
        elementostablaProductos.innerHTML +=   
        `         <tr>
            <th scope="row"> <img src="${producto.imagen}" class="modal__imagenProducto" alt=""/> </th>
            <td > ${producto.nombre}</td>
            <td > ${producto.codigo}</td>
            <td > ${producto.tipo}</td>
            <td > ${producto.descripcion}</td>
            <td > ${producto.valor}</td>
           

                </tr> 
        
        `;     //literal template: permite concatenar de forma directa con signo pesos y llaves 


             


    });


}
