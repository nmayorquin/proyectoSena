import {database} from "./configuracion.js";
import {ref, set, get, child,  update, remove} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";
//lo que se encuentra dentro del import son métodos

/*VARIABLES PARA GUARDAR DATOS*/ 
var agregarEmployee__nombre = document.getElementById("agregarE__nombre");
var agregarEmployee__id = document.getElementById("agregarE__id");
var agregarEmployee_email= document.getElementById("agregarE__email");
var agregarEmployee__pass= document.getElementById("agregarE__pass");
var agregarEmployee__Repetpass= document.getElementById("agregarE__Repetpass");

/*VARIABLES PARA FUNCIONES CON BOTONES */

var boton__verEmployee = document.getElementById("boton__verE");
var boton__agregarEmployee = document.getElementById("boton__agregarE");
var boton__updateEmployee = document.getElementById("boton__updateE");
var boton__deleteEmployee = document.getElementById("boton__deleteE");

//FUNCIÓN PARA INSERTAR DATOS
function insertarDatos(){
    
    set(ref(database, "usuarios/" + agregarEmployee__id.value),{
        nombreApellidoEmpleado: agregarEmployee__nombre.value,
        identificacionEmpleado: agregarEmployee__id.value,
        emailEmpleado: agregarEmployee_email.value,
        contraEmpleado: agregarEmployee__pass.value,
        repetContraEmpleado: agregarEmployee__Repetpass.value
    })
    .then(() => { 
        alert("el empleado fue guardado correctamente");
    })
    .catch(error => 
        alert("no se han guardado los datos del empleado"));
}

//USO DEL BOTON PARA INSERTAR DATOS
boton__agregarEmployee.addEventListener('click', insertarDatos);



//FUNCIÓN PARA TRAER DATOS

function seccionarDatos(){
    const referenciaDB = ref(database);

    get(child(referenciaDB, "usuarios/" + agregarEmployee__id.value))
    .then((snapshot) => { 
        if(snapshot.exists()){
            agregarEmployee__nombre = snapshot.val().nombreApellidoEmpleado;
            agregarEmployee_email= snapshot.val().emailEmpleado;
            agregarEmployee__pass= snapshot.val().contraEmpleado; 
            agregarEmployee__Repetpass= snapshot.val().repetContraEmpleado;
        }else{
            alert("no existe empleado con ese número de identificación, verifique");
        }
    })
    .catch(error => 
        alert("no se ha podido acceder a la base de datos"));
}

//USO DEL BOTON PARA SELECCIONAR EMPLEADO
boton__verEmployee.addEventListener('click', seccionarDatos);



//FUNCIÓN PARA ACTUALIZAR DATOS
function actualizarDatos(){
    update(ref(database, "usuarios/" + agregarEmployee__id.value),{
        nombreApellidoEmpleado: agregarEmployee__nombre.value,
        emailEmpleado: agregarEmployee_email.value,
        contraEmpleado: agregarEmployee__pass.value,
        repetContraEmpleado: agregarEmployee__Repetpass.value
    })
    .then(() => { 
        alert("el empleado fue actualizado correctamente");
    })
    .catch(error => 
        alert("no se han actualizado los datos del empleado"));
}

//USO DEL BOTON PARA ACTUALIZAR EMPLEADO
boton__updateEmployee.addEventListener('click', actualizarDatos);






//FUNCIÓN PARA ELIMINAR DATOS
function eliminarDatos(){
    remove(ref(database, "usuarios/" + agregarEmployee__id.value))
    .then(() => { 
        alert("el empleado fue eliminado correctamente");
    })
    .catch(error => 
        alert("no se ha eliminado el empleado"));
}

//USO DEL BOTON PARA ACTUALIZAR EMPLEADO
boton__deleteEmployee.addEventListener('click', eliminarDatos);

