let frutas=[
    {
        fruta: "coco",
        tipo: "neutra",
    },
    {
        fruta: "pera",
        tipo: "dulce",
    },
    {
        fruta: "sandia",
        tipo: "dulce",
    },
    {
        fruta: "naranja",
        tipo: "acida",
    },
    {
        fruta: "manzana",
        tipo: "acida",
    },
    {
        fruta: "fresa",
        tipo: "semiacida",
    },
    {
        fruta: "ciruela",
        tipo: "semiacida",
    },
    {
        fruta: "mango",
        tipo: "semiacida",
    },
]
let acidas=0;
let semiacida=0;
let neutra=0;
let dulce=0;

for(let i=0; i<frutas.length; i++){
    const element=frutas[i];
    if(element.tipo==="semiacida"){
        semiacida++
    }
    if(element.tipo==="acida"){
        acidas++
    }
    if(element.tipo==="dulce"){
        dulce++
    }
    if(element.tipo==="neutra"){
        neutra++
    }

}
/*con while seria asi
i=0;
while( i< frutas.length){
    const element=frutas[i];
    if(element.tipo==="semiacida"){
        semiacida++
    }
    if(element.tipo==="acida"){
        acidas++
    }
    if(element.tipo==="dulce"){
        dulce++
    }
    if(element.tipo==="neutra"){
        neutra++
    }
    i++
}*/

console.log("En nuestro array hay ",acidas, "frutas acidas");
console.log("En nuestro array hay ",semiacida, "frutas semiacidas");
console.log("En nuestro array hay ",dulce, "frutas dulces");
console.log("En nuestro array hay ",neutra, "frutas neutras");