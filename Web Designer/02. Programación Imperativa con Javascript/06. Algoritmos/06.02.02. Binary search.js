let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nroBuscado = 30;

function busquedaBinaria(array, valor) {
  let indideBusqueda = 0;
  let limiteBusqueda = array.length - 1;
  while (indideBusqueda <= limiteBusqueda) {
    const mitad = Math.round((indideBusqueda + limiteBusqueda) / 2);
    const medio = array[mitad];
    if (medio == valor) {
      return mitad;
    }

    if (medio > valor) {
      limiteBusqueda = mitad + 1;
    } else {
      limiteBusqueda = mitad - 1;
    }
  }
  return -1;
}

let indiceEncontrado = busquedaBinaria(arreglo, nroBuscado);
console.log(indiceEncontrado);
