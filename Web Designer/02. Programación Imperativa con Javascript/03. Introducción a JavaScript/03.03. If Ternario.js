// Tradicional vs ternario
let numero = 0;

if(numero >= 0) {
    console.log("Es positivo");
} else {
    console.log("Es negativo");
}

(numero >= 0) ? console.log("Es positivo") : console.log("Es negativo");

// Asignacion a variables
let edad = 30;
let mensaje = (edad >= 18) ? "Es mayor" : "Es menor";
console.log(mensaje);

// Mas de una instruccion
let age = 20;
let msg = "";
let categoria = "";

(age >= 18) ? (
    msg = "Mayor",
    categoria = "Adulto",
    console.log("Sos Mayor de edad")
) : (
    msg = "Menor",
    categoria = "Menor",
    console.log("Sos Menor de edad")
);