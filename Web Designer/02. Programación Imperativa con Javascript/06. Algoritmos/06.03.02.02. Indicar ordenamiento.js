let numeros = [8, 4, 2, 9, 5, 7, 85, 1, 3];
let numeros2 = [1, 2, 3, 4, 5, 6];

function estaOrdenado(array) {
  let ordenado = true;
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        ordenado = false;
      }
    }
  }

  return ordenado;
}

const arrayDesordenado = estaOrdenado(numeros);
console.log(arrayDesordenado);

const arrayOrdenado = estaOrdenado(numeros2);
console.log(arrayOrdenado);
