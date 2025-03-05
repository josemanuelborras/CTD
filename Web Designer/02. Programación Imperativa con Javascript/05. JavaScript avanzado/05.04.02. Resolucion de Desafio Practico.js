let gastos = [
  [10, 20, 30, 40, 50, 60, 70],
  [5, 15, 25, 35, 45, 55, 65],
  [8, 18, 28, 38, 28, 58, 68],
  [12, 22, 32, 42, 52, 62, 72],
];
// Gastos de toda una semana
function gastosSemanaEspecifica(matriz, numSemana) {
  let sumaGastos = 0;
  for (let i = 0; i < matriz[numSemana].length; i++) {
    sumaGastos += matriz[numSemana - 1][i];
  }

  return sumaGastos;
}

let sumaGastosSemanales = gastosSemanaEspecifica(gastos, 2);
console.log(sumaGastosSemanales);

// Gastos de un dia
function gastosDeUnDia(matriz, numDia) {
  let gasto = 0;
  for (let i = 0; i < matriz.length; i++) {
    gasto += matriz[i][numDia - 1];
  }
  return gasto;
}

let gastoDelDia = gastosDeUnDia(gastos, 1);
console.log(gastoDelDia);

// Gasto total
function gastoTotal(matriz) {
  let acumulador = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      acumulador += matriz[i][j];
    }
  }
  return acumulador;
}

let gastosTotales = gastoTotal(gastos);
console.log(gastosTotales);

// Callbacks

function gastosPorSemana(matriz, callback) {
  let gastoPorSemana = [];
  let gastosSemanales = 0;

  matriz.forEach(function(semana) {
    gastosSemanales = semana.reduce(function(total, dia) {
      return total + dia;
    });
    gastoPorSemana.push(gastosSemanales);
  }, 0);

  callback(gastoPorSemana);

};

function mostrarResultados(resultado) {
    console.log(resultado);
}

gastosPorSemana(gastos, mostrarResultados);