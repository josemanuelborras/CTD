// npm i prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

function sumar(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}

function restar(num1, num2) {
  let resultado = num1 - num2;
  return resultado;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  if (num2 === 0) {
    return "no se puede dividir por 0";
  } else {
    return num1 / num2;
  }
}

console.log("Bienvenido");
console.log("Indique la operacion a realizar:");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicacion");
console.log("4. Division");

let opcion = parseInt(prompt("Ingrese el numero que desee:"));
let num1;
let num2;
let resultado;

switch (opcion) {
  case 1:
    num1 = parseInt(prompt("Ingrese el 1er numero:"));
    num2 = parseInt(prompt("Ingrese el 2do numero:"));
    resultado = sumar(numero1, numero2);
    console.log("El resultado es: ", resultado);
    break;
  case 2:
    num1 = parseInt(prompt("Ingrese el 1er numero:"));
    num2 = parseInt(prompt("Ingrese el 2do numero:"));
    resultado = restar(numero1, numero2);
    console.log("El resultado es: ", resultado);
    break;
  case 3:
    num1 = parseInt(prompt("Ingrese el 1er numero:"));
    num2 = parseInt(prompt("Ingrese el 2do numero:"));
    resultado = multiplicar(numero1, numero2);
    console.log("El resultado es: ", resultado);
    break;
  case 4:
    num1 = parseInt(prompt("Ingrese el 1er numero:"));
    num2 = parseInt(prompt("Ingrese el 2do numero:"));
    resultado = dividir(numero1, numero2);
    if (typeof resultado === "string") {
      console.log(resultado);
    } else {
      console.log("El resultado es: ", resultado);
    }
    break;
  default:
    console.log("Numero de operacion incorrecto");
    break;
}
