let array = [14, 3, 51, 7, 92, 110, 5, 17, 13, 48];
let elemento = 51;

let posicion = -1;

for (let i = 0; i < array.length; i++) {
  if (array[i] === elemento) {
    posicion = i;
  }
}

console.log(posicion);

function linearSearch(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1;
}

let indice = linearSearch(array, elemento);
console.log(indice);