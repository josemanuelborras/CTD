// Strings
let saludo = "Hola usuario!";

// Accesos
console.log("---Accesos---");
let posicion1 = saludo[0];
console.log(posicion1); // H
let posicion2 = saludo[3];
console.log(posicion2); // a
let posicion3 = saludo[20];
console.log(posicion3); // undefined

// length
console.log("---Length---");
let longitud = saludo.length;
console.log(longitud); // 13

let arrayNombre = ["Juan", "Marta", "Ricardo"];
console.log(arrayNombre.length);
console.log(arrayNombre[2].length);

// indexOf
console.log("---IndexOf---");
let encuentraUno = saludo.indexOf("a");
console.log(encuentraUno);

let encuentraMas = saludo.indexOf("usuario");
console.log(encuentraMas);

let noEncuentra = saludo.indexOf("w");
console.log(noEncuentra);

// slice
console.log("---Slice---");
console.log("---Opcion 1---");

let frase1 = saludo.slice(1, 7);
console.log(frase1);

console.log("---Opcion 2---");
let frase2 = saludo.slice(3);
console.log(frase2);

console.log("---Opcion 3---");
let frase3 = saludo.slice(-1);
console.log(frase3);

let frase4 = saludo.slice(-6);
console.log(frase4);

// trim
console.log("---Trim---");
let mensaje = "     Mensaje con espadio    ";
console.log(mensaje);
let sinEspacios = mensaje.trim();
console.log(sinEspacios);

// split
console.log("---Split---");
let separadorEspacio = saludo.split(" ");
console.log(separadorEspacio);

let arrayNuevo = "Hola, como estas?"
let separador2 = arrayNuevo.split(", ");
console.log(separador2);

let separador3 = arrayNuevo.split("!");
console.log(separador3);

// replace
console.log("---Replace---");
let texto = "programo en Java";
let textoReemplazado = texto.replace("Java", "JavaScript");
console.log(textoReemplazado);
console.log(texto);
let textoNoEncontrado = texto.replace("C++", "Javascript");
console.log(textoNoEncontrado);
