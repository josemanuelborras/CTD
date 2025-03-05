const prompt = require("prompt-sync")({ sigint: true });

let contar = 0;
while (contar <= 10) {
  console.log("El contador es: " + contar);
  contar++;
}

console.log("contar fuera del ciclo es: " + contar); // 11

let control = "si";
let nota;
let sumaNotas = 0;
let cant = 0;
console.log("Registro de notas");

while (control == "si") {
  console.log("Ingrese una nota:");
  nota = parseInt(prompt("Nota alumno:"));

  // sumaNotas = sumaNotas + nota; es igual a suimaNotas += nota;
  sumaNotas += nota;

  cant++;

  control = prompt("Ingrese 'si' para agregar mas notas, 'no' para finalizar");
}

let promedio = sumaNotas / cant;
console.log(promedio);
