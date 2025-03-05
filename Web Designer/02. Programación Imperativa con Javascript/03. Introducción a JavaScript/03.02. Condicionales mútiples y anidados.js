let clima = "soleado";
let temperatura = 28;
let mensaje = "";

if(clima === "soleado" || temperatura >=25) {
    console.log("Dia caluroso");
} else {
    console.log("Dia no caluroso");
}

// Condicionales multiples
let puntos = 75;

if(puntos >= 90 ) {
    console.log('A');
} else if (puntos >= 80) {
    console.log('B');
} else if(puntos >= 70) {
    console.log('C');
} else {
    console.log('D')
}

// Condicionales anidados
let nota = -8;

if(nota >= 1 && nota <=10) {
    if(nota >= 7 && nota <=10) {
        console.log("aprobado");
    } else {
        console.log("Recursar");
    }
} else {
    console.log("error");
}