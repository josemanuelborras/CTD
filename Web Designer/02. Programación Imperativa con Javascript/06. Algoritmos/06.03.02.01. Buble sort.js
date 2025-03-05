let numeros = [8, 4, 2, 9, 5, 7, 85, 1, 3];

function ordenarElemento(array) {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}

let arrayOrdenado = ordenarElemento(numeros);
console.log(arrayOrdenado);
