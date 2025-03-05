// Crear un array
let array = [24, 37, 18, 59, 7];
let array2 = ["Juan", "Raul", "Mateo"];
let array3 = [true, false, false, true];
let array4 = [12, "string", true]

// Acceder a un elemanto especifico
console.log(array[0]); // 24
console.log(array[1]); // 37
console.log(array[3]); // 59
console.log(array[4]); // 7

console.log("-----");
// Obtener la longitud de un array
console.log(array.length);  // 5
console.log(array2.length); // 3
console.log(array3.length); // 4
console.log(array4.length); // 3

console.log("-----");
// Recorrer un array
for(let i = 0; i < array.length; i++) {
    console.log("posicion: " + (i+1) + " = " + array[i]);
}

console.log("-----");
