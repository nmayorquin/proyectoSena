import {auth, database} from "./configuracion.js";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import {ref, set} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";

//signIn retorna una promesa


class autenticarUsuarios{
    constructor(){
        this.auth = auth;
        this.database = database;
    }

    //FUNCIÓN PARA LOGIN
    ingreso(email, password){
        return signInWithEmailAndPassword (this.auth, email, password);
    }

    //FUNCIÓN PARA LOGIN

    async registro(email, password){
        const estadoUsuario = await createUserWithEmailAndPassword(this.auth, email, password);
    
        const registroUsuario = {
            email: email,
            role:"",
        }
        const nuevoUsuarioRef = ref (this.database, `usuarios/${estadoUsuario.registroUsuario}`);
        return await set(nuevoUsuarioRef, registroUsuario);
    }

}

export default autenticarUsuarios;

