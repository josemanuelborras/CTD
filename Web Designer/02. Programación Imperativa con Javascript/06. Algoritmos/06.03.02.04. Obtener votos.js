let temas = [
  {
    nombre: "Tema 1",
    votos: 230,
  },
  {
    nombre: "Tema 2",
    votos: 1230,
  },
  {
    nombre: "Tema 3",
    votos: 148,
  },
  {
    nombre: "Tema 4",
    votos: 5230,
  },
  {
    nombre: "Tema 5",
    votos: 30,
  },
];

// Busqueda lineal
function busquedaLineal(array, tema) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].nombre === tema) {
      return array[i].votos;
    }
  }

  return "No encontrado";
}

let cantVotos = busquedaLineal(temas, "Tema 1");
console.log(cantVotos);

function busquedaBinaria(array, tema) {
  let inicio = 0;
  let fin = array.length - 1;

  while(inicio <= fin) {
    let posMedio = Math.round((inicio + fin) /2);
    let medio = array[posMedio];

    if(medio.nombre === tema) {
      return medio.votos;
    }

    if(medio.nombre > tema) {
      fin = posMedio - 1;
    } else {
      inicio = posMedio + 1;
    }
  }
  return -1;
}

const cantVotos2 = busquedaBinaria(temas, "Tema 0");
console.log(cantVotos2);