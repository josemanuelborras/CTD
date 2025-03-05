// slice
let fruta = ["Manzana", "Naranja", "Banana", "Frutilla", "Kiwi"];

let primerasTres = fruta.slice(0, 3);
console.log(primerasTres);

let desdeSegundo = fruta.slice(1);
console.log(desdeSegundo);

let ultimasDos = fruta.slice(-2);
console.log(ultimasDos);

let entreDosIndices = fruta.slice(-3, 4);
console.log(entreDosIndices);

// splice
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

meses.splice(1, 2, "NuevoMes1", "NuevoMes2");

console.log(meses);

meses.splice(2, 0, "NuevoMes3");
console.log(meses);

// sort
let numeros = [5, 4, 8, 1, 6, 9];

numeros.sort();
console.log(numeros);

let palabras = ["perro", "gato", "zorro", "auto"];
palabras.sort();
console.log(palabras);

// find
let edades = [25, 18, 30, 15, 22];

let mayorDeEdad = edades.find(edad => edad >= 18);

console.log(mayorDeEdad); // 25

let primeraEdadMayor = edades.find(edad => edad > 30);
console.log(primeraEdadMayor); // undefined