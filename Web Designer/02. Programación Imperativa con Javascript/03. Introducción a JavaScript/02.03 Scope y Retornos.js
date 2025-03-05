// scope global
let num1 = 5;
console.log(5); // 5

// scope local
function func() {
    let num2 = 15;
};
// console.log(num2); // Error: num2 is not defined

function suma(num1, num2, num3) {
    let resultado = num1 + num2 + num3;
    return resultado;
};

let rdoSuma = suma(7, 8, 9);
console.log(rdoSuma); // 24

function promedio() {
    let rdoSuma = suma (5, 8, 3);
    let rdoPromedio = rdoSuma / 3;
    return rdoPromedio;
};

let rdoProm = promedio();
console.log(rdoProm); // 5.333333333333333