let colores = ["Rojo", "Naranja", "Azul"];
console.log("Colores: ", colores);
// push
let violeta = colores.push("Violeta");
console.log("push('Violeta'): ", violeta); // devuelve la cantidad de elementos
console.log("Colores: ", colores);

let verdeDorado = colores.push("Verde", "Gris");
console.log("push('Verde', 'Gris'): ", verdeDorado);
console.log("Colores: ", colores);

// pop
let colorEliminado = colores.pop();
console.log("pop():", colorEliminado);
console.log("Colores: ",  colores);

// shift
let colorEliminado2 = colores.shift();
console.log("shift(): ", colorEliminado2);
console.log("Colores", colores);

// unshift
let dorado = colores.unshift("Dorado");
console.log("unshift('Dorado'): ", dorado);
console.log("Colores", colores);

let blancoNegro = colores.unshift("Blanco", "Negro");
console.log("unshift('Blanco', 'Negro'): ", blancoNegro);
console.log("Colores", colores);

// join
let coloresJoin = colores.join("-");
console.log("join('-'): ", coloresJoin);
console.log("Colores", colores);

let coloresJoin2 = colores.join();
console.log("join(): ", coloresJoin2);
console.log("Colores", colores);

// indexOf
let encontrado = colores.indexOf("Dorado");
console.log("indexOf('Dorado')", encontrado);
console.log("Colores", colores);

let noEncontrado = colores.indexOf("Celeste");
console.log("indexOf('Celeste')", noEncontrado);
console.log("Colores", colores);

colores.push("Dorado");
let encontradoRepetido = colores.indexOf("Dorado");
console.log("indexOf('Dorado')", encontradoRepetido);
console.log("Colores", colores);

// lastIndexOf
let encontradoAtras = colores.lastIndexOf("Dorado");
console.log("lastIndexOf('Dorado')", encontradoAtras);
console.log("Colores", colores);

let noEncontradoAtras = colores.lastIndexOf("Celeste");
console.log("lastIndexOf('Celeste')", noEncontradoAtras);
console.log("Colores", colores);

// includes
let incluye = colores.includes("Naranja");
console.log("includes('Naranja')", incluye);
console.log("Colores", colores);

let noIncluye = colores.includes("Celeste");
console.log("includes('Celeste')", noIncluye);
console.log("Colores", colores);

