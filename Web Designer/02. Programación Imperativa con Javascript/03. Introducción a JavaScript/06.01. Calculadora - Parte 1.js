function sumar(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}

let rdoSuma = sumar(54, 45);
console.log(rdoSuma);

function restar(num1, num2) {
  let resultado = num1 - num2;
  return resultado;
}

let rdoResta = restar(54, 45);
console.log(rdoResta);

function multiplicar(num1, num2) {
  return num1 * num2;
}

let rdoMult = multiplicar(54, 45);
console.log(rdoMult);

function dividir(num1, num2) {
  if (num2 === 0) {
    return "no se puede dividir por 0";
  } else {
    return num1 / num2;
  }
}

let rdoDiv0 = dividir(54, 0);
console.log(rdoDiv0);

let rdoDiv = dividir(54, 45);
console.log(rdoDiv);
