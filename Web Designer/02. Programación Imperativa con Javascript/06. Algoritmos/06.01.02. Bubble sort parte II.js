// Arreglo de strings
let array = ["Zapato", "Auto", "Torta", "Sillon", "Almendra", "almendra", "Autoz", "casa"];

for (let j = 0; j < array.length; j++) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
}

console.log(array);

// Arreglo de objetos
let objeto = [
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Miguel",
        edad: 45,
    },
    {
        nombre: "Daniel",
        edad: 30,
    }
];

for (let j = 0; j < objeto.length; j++) {
  for (let i = 0; i < objeto.length - 1; i++) {
    if (objeto[i].edad > objeto[i + 1].edad) {
      let temp = objeto[i];
      objeto[i] = objeto[i + 1];
      objeto[i + 1] = temp;
    }
  }
}

console.log(objeto);

for (let j = 0; j < objeto.length; j++) {
  for (let i = 0; i < objeto.length - 1; i++) {
    if (objeto[i].nombre > objeto[i + 1].nombre) {
      let temp = objeto[i];
      objeto[i] = objeto[i + 1];
      objeto[i + 1] = temp;
    }
  }
}

console.log(objeto);