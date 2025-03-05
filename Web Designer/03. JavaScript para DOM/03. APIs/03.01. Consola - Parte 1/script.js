// Con string
console.log("Hola mundo");

// Con variable
const mensaje = "Hola desde una variable";
const texto = `Este es el mansaje: ${mensaje}`;
console.log(texto);

// Numeros
console.log(1, 2, 3);

// Arreglo
console.log(["HTML", "CSS", "JS", "ReactJS"]);

// Objeto
console.log(
  {
    lenguaje: "JAVASCRIPT",
    tipo: "programacion",
  },
  {
    lenguaje: "HTML",
    tipo: "maquetado",
  },
  {
    lenguaje: "CSS",
    tipo: "estilos",
  }
);

// Sustituciones de cadena
for (let i = 0; i < 5; i++) {
  console.log("Hola, %s. Me has llamado %d veces.", "Bob", i + 1);
}

// Estilos css
const css = "color: white; background: red";
const css2 = "color: green; background: aqua";
console.log("%cEstilos css, y este otro: %c, otro estilo", css, css2);

// Assert
const a = 5;
const b = 6;
console.assert(a + b == 11, 'Es correcto (no lo muestra');
console.assert(a + b == 10, 'Este mensaje es el que se muestra');

// Clear
console.clear();
console.log('antes de eso hay un clear');

// Count
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.count('mi array se ejecuta: ')
}

// Error
console.error('mensaje de error');

// Info
console.info('mensaje de informacion');

// Warn
console.warn('mensaje de advertencia');