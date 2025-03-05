function eliminarPrimerElemento(array) {
    let primerElemento = array.shift();
    return primerElemento;
}

let arreglo = [1, 2, 3];
let eliminado = eliminarPrimerElemento(arreglo);
console.log(arreglo);
console.log(eliminado);