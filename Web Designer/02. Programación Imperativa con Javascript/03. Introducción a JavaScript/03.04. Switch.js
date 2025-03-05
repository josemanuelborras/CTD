let diaSemana = 7;
let mensaje = "";

switch (diaSemana) {
  case 1:
    mensaje = "lunes";
    break;
  case 2:
    mensaje = "martes";
    break;
  case 3:
    mensaje = "miercoles";
    break;
  case 4:
    mensaje = "jueves";
    break;
  case 5:
    mensaje = "viernes";
    break;
  case 6:
    mensaje = "sabado";
    break;
  case 7:
    mensaje = "domingo";
    break;
  default:
    mensaje = "numero de dia incorrecto";
    break;
}

console.log(mensaje);

let fruta = "naranja";
let mensajeFruta = "";

switch (fruta) {
  case "manzana":
    mensajeFruta = "Es una manzana";
    break;
  case "banana":
    mensajeFruta = "Es una banana";
    break;
  case "naranja":
    mensajeFruta = "Es una naranja";
    break;
  default:
    mensajeFruta = "Fruta desconocida";
    break;
}

console.log(mensajeFruta);
