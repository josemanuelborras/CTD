let num1 = 7;
let num2 = 9;
let resultado;

// and
resultado = (num1 > 6) && (num2 > 6); // true
console.log(resultado);
resultado = (num1 > 8) && (num2 > 8); // false
console.log(resultado);

//  or
resultado = (num1 > 6) || (num2 > 6); // true
console.log(resultado);
resultado = (num1 > 8) || (num2 > 8); // true
console.log(resultado);
resultado = (num1 > 10) || (num2 > 10); // false
console.log(resultado);

// not
resultado = !(num1 > 6); // false
console.log(resultado);
