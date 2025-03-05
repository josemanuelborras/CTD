let numeros = [10, 20, 30, 40, 50];

// Modificar cada uno de los elementos
for(let i = 0; i < numeros.length; i++) {
    numeros[i] = i + 1;
}
console.log(numeros); // [1, 2, 3, 4, 5]
console.log('-----');

// Agregar elementos a un array
numeros[numeros.length] = 60;

console.log(numeros); // [10, 20, 30, 40, 50, 60]
console.log('-----');

// Extraer elementos de un array a una varible
let numeroSeleccionado = numeros[1];
console.log(numeroSeleccionado); // 20

console.log('-----');

// Extraer todos los elemendos para algo especifico
let nuevoArray = [10, 20, 30, 40, 50];
// Variable acumuladora
let sumaNumeros = 0;
for(let i = 0; i < nuevoArray.length; i++) {
    // sumaNumeros = sumaNumeros + numeros[i];
    sumaNumeros += nuevoArray[i];
}

console.log(sumaNumeros);
let promedio = sumaNumeros / nuevoArray.length;
console.log(promedio);

console.log('-----');

// Encontrar el mayor o menor
let otrosNumeros = [10, 48, 7, 53, 19];
let menor = otrosNumeros[0];
let mayor = otrosNumeros[0];

for(let i = 0; i <= otrosNumeros.length; i++) {
    if(otrosNumeros[i] < menor) {
        menor = otrosNumeros[i];
    }
}
console.log("menor: " + menor);

for(let i = 0; i <= otrosNumeros.length; i++) {
    if(otrosNumeros[i] > mayor) {
        mayor = otrosNumeros[i];
    }
}

console.log("mayor: " + mayor);