    //logout del sistema

    const salida = document.getElementById("salirPlataforma");
    
    salida.addEventListener("click",(eventoSalida) => {
        eventoSalida.preventDefault();
        
         auth
         .signOut()
 
         .then(() => {
 
             console.log("ha salido del sistema"); //si este mensaje se muestra, significa que se ejecutó el método
         })
    })