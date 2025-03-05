// 5.1.2. Calculadora de Índice de Masa Corporal (IMC)

let peso = 70;
let altura = 170;

function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura);

  if (imc < 18.5) {
    console.log("Bajo peso");
  } else if (imc < 24.9) {
    console.log("Peso normal");
  } else if (imc < 29.9) {
    console.log("Sobrepeso");
  } else {
    console.log("Obesidad");
  }
}

calcularIMC(70, 1.70);
