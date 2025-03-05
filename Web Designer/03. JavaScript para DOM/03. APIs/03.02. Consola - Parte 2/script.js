// Log
console.log('Hola mundo por fuera');

// Group
console.group();
console.log('Otro Hola mundo por dentro del grupo');
console.warn('Otro Hola mundo por dentro del grupo');
console.error('Otro Hola mundo por dentro del grupo');
// GroupEnd
console.groupEnd();
console.log('Hola mundo por fuera');

// Group con etiqueta
console.group('Con etiqueta');
console.log('Otro Hola mundo por dentro del grupo de la etiqueta');
console.groupEnd();

console.log('Hola mundo por fuera de la etiqueta');

// GroupCollapsed
console.groupCollapsed();
console.log('Otro Hola mundo por dentro del grupo');
console.warn('Otro Hola mundo por dentro del grupo');
console.error('Otro Hola mundo por dentro del grupo');
console.groupEnd();
console.log('Hola mundo por fuera del grupo colapsado');

// Table
const array = ['HTML', 'CSS', 'JAVASRIPT', 'REACT'];
console.table(array);

// Time
console.time('demora');
for(let i = 0; i < 10000; i++) {
  for (let j = 0; j < 5000; j ++) {
  }
}
console.timeEnd('demora');

// Trace
const anotherFunc = () => {
  console.trace();
}

const myFunc = () => {
  anotherFunc();
}