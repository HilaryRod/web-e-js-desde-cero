const comentarion = document.getElementById("comentario");
const boxComments = document.getElementsByClassName("comentarios")[0];
let todoslosComments=[];//almacenara todos los comentarios para que no se pierdan


function agregarComentario(){
    if(comentarion.value===""){
        alert("Debes escribir algo para poder enviar tu comentario")
    }
    else{
    let fechaActual = new Date().toLocaleString(); 
    boxComments.innerHTML="";// limpiar el campo donde se imprimen los comentarios
    //console.log(fechaActual + " " +comentarion.value);
    todoslosComments.push(`${comentarion.value}--${fechaActual}`); //almacenar la fecha y el comentario
    //console.log(todoslosComments)
    for (let i=0; i<todoslosComments.length; i++){//recorremos para ir impriendo
        boxComments.innerHTML+=(`<li> ${todoslosComments[i]}</li> `); //imprimir los comentarios actualizados
    }
    comentarion.value=""
    }
}
/*let comentar=(event)=>{
    event.preventDefault()
}*/
