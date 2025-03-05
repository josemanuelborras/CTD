// Funciones declaradas
// Hoisting
console.log(suma(3, 7));

function suma(num1, num2) {
    return num1 + num2;
};

console.log(suma(3, 7));

// Funciones expresadas
let resta = function(num1, num2) {
    return num1 - num2;
}

console.log(resta(6, 3));

// Arrow functions
let multiplicar = (num1, num2) => {
    return num1 * num2;
};

console.log(multiplicar(3, 4));

// This
let objeto = {
    valor: 10,
    doble: function() {
        return this.valor * 2;
    },
    triple: () => {
        return this.valor * 3; // NaN
    }
}

console.log(objeto.triple());