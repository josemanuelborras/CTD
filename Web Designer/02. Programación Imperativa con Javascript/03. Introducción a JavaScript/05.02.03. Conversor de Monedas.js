// 5.1.3 Conversor de Monedas
// Opcion 1
function convertirMoneda(cantidad, tipoCambio) {
  let resultado = cantidad * tipoCambio;
  return resultado;
}

let cambio = convertirMoneda(1000, 0.001);
console.log(cambio);

// Opcion 2
function convertirMoneda2(cantidad, moneda) {
  let tipoDeCambio;

  switch (moneda) {
    case "dolar":
      tipoDeCambio = 0.001;
      break;
    case "real":
      tipoDeCambio = 0.005;
      break;
    case "euro":
      tipoDeCambio = 0.0009;
      break;
    default:
        console.log("moneda desconocida");
        return -1;
        // break;
  }

  let resultado = cantidad * tipoDeCambio;
  console.log(cantidad + " pesos son " + resultado + " " + moneda);
}

convertirMoneda2(1000, "dolar");
convertirMoneda2(1000, "real");
convertirMoneda2(1000, "euro");
convertirMoneda2(1000, "lira");
