function evaluarNota(){
   let nota=Math.floor(Math.random() * 101)
//se genara un numero aleatorio, con math random entre el 0 y 1, multiplicamos por 101 para tener un numero entre el 0 y 100 y despues con math floor se redondea
   let msj=("La nota del estudiante es: "+nota)
if (nota===0){
   alert("La nota es 0, intenta de nuevo con otro numero")
   alert("Da click en el boton de Evaluar Nota de nuevo")
}
else if(nota>=90){
    alert(msj+" Aprobaste, Excelente")
   }
   else if(nota>=75){
    //no se evalua que sea igual a 89 pq esta dentro del else donde ya se  cumplio la condicion de que la nota es menor a 90 
    alert(msj+" Aprobaste, Bien")
   }
   else if(nota>=60){
    alert(msj+" Aprobaste, Suficiente")
   }
   else{
    alert(msj+" El estudiante no aprueba")
   }
}
