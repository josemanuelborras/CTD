let matriz = [
    ["nombre", "apellido", "edad"],
    ["Juan", "Perez", 35],
    ["Pablo", "Sanchez", 25],
    ["Jose", "Gomez", 45],
];

console.table(matriz);

// Recorrer todos los datos
console.log("---Recorrer todos---");
for(let i = 0; i < matriz.length; i++) { // Recorrer filas
    for(let j = 0; j < matriz[i].length; j++) { // Recorrer las columnas
        console.log(matriz[i][j]);
    }
}
