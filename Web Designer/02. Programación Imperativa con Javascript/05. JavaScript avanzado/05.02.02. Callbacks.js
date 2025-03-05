// funcion que recorre un array y ejecuta el callback
function procesarArray(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// Funcion de callback
function mostrarElemento(elemento) {
  console.log(elemento);
}

function pares(num) {
    if(num % 2 === 0) {
        console.log(num);
    }
}

function multiplicar(elemento) {
    console.log(elemento * 2);
}

function cuadrado(elemento) {
    console.log(elemento * elemento);
}

let array = [1, 2, 3, 4];

procesarArray(array, mostrarElemento);
console.log("----");
procesarArray(array, pares);
console.log("----");
procesarArray(array, multiplicar);
console.log("----");
procesarArray(array, cuadrado);
