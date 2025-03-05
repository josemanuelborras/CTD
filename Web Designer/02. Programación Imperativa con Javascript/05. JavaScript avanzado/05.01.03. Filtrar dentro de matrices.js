let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
];

console.table(matriz);

// Filtrar elementos
for(let i = 0; i < matriz.length; i++) {
    for(let j = 0; j < matriz[i].length; j++) {
        if(matriz[i][j] % 2 === 0) {
            console.log(matriz[i][j]);
        }
    }
}