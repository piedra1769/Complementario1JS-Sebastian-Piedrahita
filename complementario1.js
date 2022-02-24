console.log('Puedes elegir dos opciones');

// Se podrá seleccionar entre dos opciones diferentes, para práctica

let opcion = parseInt(prompt('Selecciona una opción de reto: \n 1. Tabla de multiplicar \n 2. Juego de Geografía'));

// Restringir las elecciones a los números 1, 2 o 3
while (opcion < 1 || opcion > 2 || isNaN(opcion)){
alert('Debes seleccionar solo una opción entre 1 y 2');
opcion = parseint(prompt('Selecciona una opción de reto: \n 1. Tabla de multiplicar \n 2. Juego de Geografía'));
}

// Descripción del primera opción
switch (opcion) {
    
    case 1:
        alert('Opción 1: Vamos con tablas de multiplicar');
        let numero = parseInt (prompt('Escribe el número del que quieres hacer su tabla de multiplicar hasta por 10'));
        for (let i = 0; i <= 10; i++) {
            const resultado = numero * i;
            alert(`${numero} x ${i} = ${resultado}`);
        }
        break;
        
    case 2: 
        pais = prompt('¿En qué país en el que queda el Chimborazo? \n a. Colombia \n b. Argentina \n c. Ecuador');

        while (pais!='c') {
            switch (pais) {
            
                case 'a': 
                alert ('Estás cerca');
                pais = prompt('¿En qué país en el que queda el Chimborazo? \n a. Colombia \n b. Argentina \n c. Ecuador');
                break;

                case 'b':
                alert ('No tan lejos');     
                pais = prompt('¿En qué país en el que queda el Chimborazo? \n a. Colombia \n b. Argentina \n c. Ecuador');
                break;

                default:
                alert ('Esa no es una opción');
                pais = prompt('¿En qué país en el que queda el Chimborazo? \n a. Colombia \n b. Argentina \n c. Ecuador');
                break;
            }
        }  
        alert ('¡Felicitaciones!')
    }