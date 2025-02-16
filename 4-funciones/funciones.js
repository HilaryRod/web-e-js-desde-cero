let librosLeidos =[]; //array donde voy a almacenar los titulos de los libros
const librosH3=document.getElementById('librosleidos'); //poner en una constante mi h3 donde voy a imprimir mis libros leidos

function agregarLibro(){
    let titulo=document.getElementById('libro').value // obtener el nombre del libro mediante el input
    librosLeidos.push(titulo)//agregar el libro a mi array
    alert("Libro agregado con exito")
    document.getElementById('libro').value="";//limpiar el campo de titulo de libro
    //return titulo
    librosH3.innerHTML="";//limpiar el campo de libros leidos por si ya habia presionado anteriormente
}

function mostrarLibrosLeidos(){
    //console.log('Mostrar libros')
    librosH3.innerHTML=""; //limpiar el campo donde voy a escribir los libros leidos
    if (librosLeidos.length<1){ //comprobacion de si si hay libros leidos
        librosH3.innerHTML= "No hay libros leidos aun"
        //console.log("No hay libros leidos")
    }
    else{
    for (let i=0; i<librosLeidos.length; i++){
        librosH3.innerHTML+=(` ${i+1}.-${librosLeidos[i]} `); //imprimir los libros leidos en mi h3 
        //console.log(librosLeidos[i])
    }}
}