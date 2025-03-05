const prompt = require("prompt-sync")({ sigint: true });

let i = 1;
do {
  console.log("El contador es: " + i);
  i++;
} while (1 < -10);

let nroAdivinar = 4;
let intento = 0;
let numero;

do {
  numero = parseInt(prompt("Ingrese un numero: "));

  if (numero < nroAdivinar) {
    console.log("numero muy bajo");
  } else if (numero > nroAdivinar) {
    console.log("numero muy bajo");
  } else {
    console.log("Numero correcto");
  }

  intento++;
} while (numero != nroAdivinar);

console.log("Intentos " + intento);