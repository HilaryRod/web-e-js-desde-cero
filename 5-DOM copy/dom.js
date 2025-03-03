//localStorage.clear()
const comentarion = document.getElementById("comentario");
const boxComments = document.getElementsByClassName("comentarios")[0];
//let todoslosComments=[];//almacenara todos los comentarios para que no se pierdan
const checkAnonimo= document.querySelector('#anonimo').checked
let todosloscomentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
const inputUser= document.getElementById("user")
//activar el campo de usuario
document.querySelector('#anonimo').addEventListener('change', function() {
    if (this.checked) {
        inputUser.removeAttribute('hidden');
    } else {
        inputUser.setAttribute('hidden', true);
    }
});
function mostrarComentarios() {
    boxComments.innerHTML = ""; // Limpiar la lista antes de renderizar
    todosloscomentarios.forEach(comentarioObj => {
        boxComments.innerHTML += `<li><strong>${comentarioObj.usuario}:</strong> ${comentarioObj.comentario} a las ${comentarioObj.fecha}</li>`;
    });
}
mostrarComentarios();
//por si hay comments guardados en el local storage 
function agregarComentario() {
    if (comentarion.value === "") {
        alert("Debes escribir algo para poder enviar tu comentario");
    } else {
        let fechaActual = new Date().toLocaleString();
        if (document.querySelector('#anonimo').checked){
        // Crear objeto de comentario y agregarlo al array
        let nuevoComentario = {
            usuario: inputUser.value,
            comentario: comentarion.value,
            fecha: fechaActual
        };
        
        todosloscomentarios.push(nuevoComentario);
        
        // Guardar en localStorage
        localStorage.setItem("comentarios", JSON.stringify(todosloscomentarios));
        
        // Mostrar comentarios actualizados
        mostrarComentarios();
        
        // Limpiar el input
        inputUser.value="";
        comentarion.value = "";}
        else{
            console.log("Anonimo")
            let nuevoComentario = {
                usuario: "Anonimo",
                comentario: comentarion.value,
                fecha: fechaActual
            };
            
            todosloscomentarios.push(nuevoComentario);
            
            // Guardar en localStorage
            localStorage.setItem("comentarios", JSON.stringify(todosloscomentarios));
            
            // Mostrar comentarios actualizados
            mostrarComentarios();
            
            // Limpiar el input
            comentarion.value = "";
        }
    }
}
/*Eliminar todos los comentarios
}*/
function eliminarTodo(){
    contra=prompt("Escribe el password")
    if (contra===("Anime")){
        localStorage.clear();
        // Redirige a la misma URL, refrescando la página
location.href = location.href;
}
    else alert("Password Incorrecto")

}