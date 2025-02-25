const nuevoCap=document.getElementById("capNuevo");
const ElimCap=document.getElementById("capBorrar");
const cajaTexto=document.getElementById("cajaTexto");
const libro={
    titulo:"A Dog's Purpose",
    autor:"W. Bruce Cameron",
    anio: 2010,
    estado:"disponible",
    capitulos:["etapa 1", "etapa 2", "El reencuentro"
    ],
    describirLibro: function(){
        return `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, su estado es ${this.estado}, con capitulos: ${this.capitulos}`
    }
}
console.log(libro.describirLibro())
function eliminarCap(){
    if (libro.capitulos.includes(ElimCap.value)){
        cajaTexto.innerHTML=""
        libro.capitulos=libro.capitulos.filter(capitulo=>capitulo!==ElimCap.value)
        alert("Capitulo eliminado con exito");
        ElimCap.value="";
        cajaTexto.innerHTML=libro.describirLibro()
    }
    else(
        alert("No hay ningun capitulo llamado asi")
    )
}
function agregarCap(){
    if (nuevoCap.value==""){
    alert("El campo esta vacio, escribe un capitulo")
    }
    else{
    cajaTexto.innerHTML=""
    libro.capitulos.push(nuevoCap.value)
    alert("Se agrego correctamente el nuevo capitulo")
    nuevoCap.value="";
    cajaTexto.innerHTML=libro.describirLibro()}
}
function mostrarInfo(){
    console.log("See esta mosntrando")
    cajaTexto.innerText=libro.describirLibro()
}