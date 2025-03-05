let numeros = [8, 1, 4, 2, 1, 1, 9, 5, 7, 85, 1, 3];

function contarCoincidencias(array, num) {
  let cantidad = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == num) {
      cantidad++;
    }
  }
  return cantidad;
}

let cant = contarCoincidencias(numeros, 1);
console.log(cant);
