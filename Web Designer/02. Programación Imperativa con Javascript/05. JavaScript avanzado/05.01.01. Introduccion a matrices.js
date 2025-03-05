// Crear una matriz
let matriz = [
    ["nombre", "apellido", "edad"], // primera fila
    ["Juan", "Perez", 35], //segunda fila
    ["Pablo", "Sanchez", 25], //tercera fila
];

// visualizar una matriz
console.log("---Table---");
console.table(matriz);

// Acceder a un dato
console.log("---Datos---");
console.log(matriz[1][1]); //Perez
console.log(matriz[2][0]); // Pablo

// Modificar datos
console.log("---Modificar---");
console.log(matriz[1][1]); // Perez
matriz[1][1] = "Gomez";
console.log(matriz[1][1]); // Gomez

// Recorrer una columna
console.log("---Recorrer columna---");
for(let i = 0; i < matriz.length; i++) {
    console.log(matriz[i][1]); // apellido Gomez Sanchez
}

// Recorrer una fila
console.log("---Recorrer fila---");
for(let i = 0; i < matriz[1].length; i++) {
    console.log(matriz[1][i]); // Juan Gomez 35
}
