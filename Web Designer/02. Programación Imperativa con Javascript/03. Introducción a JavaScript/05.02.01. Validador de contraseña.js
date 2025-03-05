// 5.1.1 Validador de contraseña

let password = "1234";

function validarPassword(pass) {
  if (pass === password) {
    console.log("Contraseña correcta");
  } else {
    console.log("Contraseña incorrecta");
  }
}

validarPassword("1234");
validarPassword("otraPassword");
