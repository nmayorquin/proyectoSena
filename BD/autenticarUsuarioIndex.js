import autenticarUsuarios from "../BD/autenticar.js"

const permisoUsuario = new autenticarUsuarios();

const loguearse = document.getElementById ("ingreso-plataforma");
loguearse.addEventListener('submit', botonLoguearse);

const formularioRegistro = document.querySelector (".formularioInscripcion");
formularioRegistro.addEventListener('submit', formularioInscripcion);


function botonLoguearse(event){
    event.preventDefault();
    const email = document.getElementById ("ingreso-usuarioEmail");
    const password = document.getElementById ("ingreso-pass");

    permisoUsuario.ingreso(email.value, password.value)
    .then((logged) => {
        location.href = "../HTML/crudAdministrador.html";
     })

     .catch(error => 
         console.log(error));
}


function formularioInscripcion(event){
    event.preventDefault();

    const email = document.getElementById ("email_usuario");
    const password = document.getElementById ("pass_usuario");

    permisoUsuario.registro(email.value, password.value)
        .then((logged) => {
           location.href = "../HTML/crudAdministrador.html";
           alert("registro con éxito");
        })

        .catch(error => 
            console.log(error));
}