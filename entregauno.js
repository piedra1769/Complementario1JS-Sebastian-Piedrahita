console.log("Adivina adivinador");

//1. Pedir la edad
//2. Comparar la edad con diferentes límites
//3. Imprimir mensaje por cada condición

let edad = prompt("Ingresa tu edad");

if (edad == "") {
    alert("No ingresaste tu edad");    
}



if (edad < 20) {
    console.log ("Todavía no tienes 20");
}

else if (edad < 30) {
    console.log ("Estás en los 20s")

}

else if (edad < 40) {
    console.log ("Estás en los 30s")

}

else {
    console.log ("Ya estás viejo");
}
