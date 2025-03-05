// 5.1.4. Evaluador de Rango de Edad

function evaluarEdad(edad) {
  if (edad < 12) {
    console.log("Niño");
  } else if (edad < 18) {
    console.log("Adolescente");
  } else if (edad < 30) {
    console.log("Adulto");
  } else {
    console.log("Adulto Mayor");
  }
}

evaluarEdad(11);
evaluarEdad(17);
evaluarEdad(25);
evaluarEdad(30);