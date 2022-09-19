var multiplica = document.querySelectorAll("#igual");

function adherir (){
   
for (let i= 0; i<multiplica.length; i++){
    columna= multiplica[i]   
    var newInput= document.createElement("input")
    var idInput= columna.childNodes[3].getAttribute("id")
    newInput.setAttribute("id", idInput) 
    columna.appendChild(newInput)}

}
