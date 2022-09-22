
import {database} from "./configuracion.js";
import {ref, onValue } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js"; //se deben realizar las importaciones de objetos a suar


//CONSTRUCTOR
class agregarProductos{
    constructor(){
        this.database = database;
        this.nombrebaseRef = ref(this.database, 'productos'); //referencia apunta a la base de datos de firebase que se llama productos, si no está, la crea
    }
    getProductos(){
        const promesa = new Promise((resuelta, error) => { //las promesas son comunes en los lenguajes: un objeto que rpresenta un valor y podrá estar displible ahora o en el futuro
                onValue(this.nombrebaseRef, (snapshot) =>{ //snapshot= callback= nos retorna el contenido de bd
                    const data= snapshot.val();
                    resuelta(data);
                },{
                    onlyOnce:true

                });
            });
            return promesa;
        }
}

export default agregarProductos;