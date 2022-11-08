import autenticarUsuarios from "../BD/autenticar.js"

const permisoUsuario = new autenticarUsuarios();

const loguearse = document.getElementById ("ingreso-plataforma");
loguearse.addEventListener('submit', botonLoguearse);

const formularioRegistro = document.getElementById ("formularioInscripcion");
formularioRegistro.addEventListener('submit', formularioInscripcion);


function botonLoguearse(event){

    event.preventDefault();
    const email = document.getElementById ("ingreso-plataforma__email");
    const password = document.getElementById ("ingreso-plataforma__pass");

    permisoUsuario.ingreso(email.value, password.value)
    .then((logged) => {
        alert("usted ha ingresado al sistema");
        location.href = "../HTML/crudAdministrador.html";
     })

     .catch(error => 
         alert("verifique su usuario y contraseña e inténtelo nuevamente"));
}


function formularioInscripcion(event){
    event.preventDefault();

    const email = document.getElementById ("email_usuario");
    const password = document.getElementById ("pass_usuario");

    permisoUsuario.registro(email.value, password.value)
        .then((logged) => {
           alert("registro con éxito");
        })

        .catch(error => 
            console.log(error));
}