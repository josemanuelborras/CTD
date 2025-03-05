const prompt = require("prompt-sync")({ sigint: true });

// Almacenar tareas en un array
let tareas = [];
let categorias = [
  "Trabajo",
  "Personal",
  // Agregar mas categorias
];

// Recibo categorias
function mostrarCategorias() {
  console.log("Categrorias: ");
  categorias.forEach(function (categoria, indice) {
    console.log(indice + ". " + categoria);
  });
}

// Cargar nuevas categorias
function agregarCategoria(nombre) {
  categorias.push(nombre);
  console.log("Agregada");
}

// Agregar tareas al array
function agregarTarea(nombre, fecha = null) {
  mostrarCategorias();

  let numeroCategoria = parseInt(prompt("Ingresar numero de categoria: "));

  if (numeroCategoria >= 0 && numeroCategoria < categorias.length) {
    tareas.push({
      nombre: nombre,
      completada: false,
      fechaLimite: fecha,
      categoria: numeroCategoria,
    });
    console.log("Tarea Agregada");
  } else {
    console.log("Categoria incorrecta");
  }
}

// Eliminar una tarea
function eliminarTarea(indice) {
  if (indice >= 0 && indice < tareas.length) {
    tareas.splice(indice, 1);
    console.log("Eliminado");
  } else {
    console.log("El indice no existe");
  }
}

// Completar una tarea
function completarTarea(indice) {
  if (indice >= 0 && indice < tareas.length) {
    tareas[indice].completada = true;
    console.log("Completada");
  } else {
    console.log("El indice no existe");
  }
}

// Modificar una tarea
function modificarTarea(indice, nombre, fecha = null, categoriaNueva) {
  if (indice >= 0 && indice < tareas.length) {
    tareas[indice].nombre =
      nombre != undefined ? nombre : tareas[indice].nombre;
    tareas[indice].fechaLimite =
      fecha != undefined ? fecha : tareas[indice].fechaLimite;
    tareas[indice].categoria =
      categoriaNueva != undefined ? categoriaNueva : tareas[indice].categoria;
    console.log("Modificada");
  } else {
    console.log("El indice no existe");
  }
}

// Filtro de categorias
function filtroPorCategorias(numeroCategoria) {
  let tareasfiltradas = tareas.filter(function(tarea) {
    return tarea.categoria === numeroCategoria;
  });
  return tareasfiltradas;
};

// Filtro por estado
function contarCompletadasPorCat(numeroCategoria) {
  let tareasCategoria = filtroPorCategorias(numeroCategoria);
  let tareasCompletadas = tareasCategoria.reduce(function(contador, tarea) {
    return tarea.completada ? contador + 1 : contador;
  }, 0);

  let totalTareas = tareasCategoria.length;

  console.log("Tareas completadas de la categoria: " + numeroCategoria + ": " + tareasCompletadas + " de " + totalTareas);
}

// Tareas incompletas
function tareasIncompletas() {
  console.log("Tareas incompletas");
  tareas.forEach(function(tarea) {
    if(!tarea.completada) {
      console.log(tarea.nombre, categorias[tarea.categoria]);      
    };
  });
}


function mostrarMenu() {
  console.log("--- Menu ---");
  console.log("1. Agregar Tarea");
  console.log("2. Eliminar Tarea");
  console.log("3. Marcar como completada");
  console.log("4. Modificar tarea");
  console.log("5. Mostrar todo");
  console.log("6. Ver Categorias");
  console.log("7. Agregar Categoria");
  console.log("8. Filtrar por categorias");
  console.log("9. Ver cantidad de tareas completadas por categoria");
  console.log("10. Ver tareas incompletas");
  console.log("0. Salir");
}

// Interactiar con el usuario
function interactuar() {
  let opcion = -1;
  while (opcion != 0) {
    mostrarMenu();
    opcion = parseInt(prompt("Ingrese un numero: "));

    switch (opcion) {
      case 1:
        let nombreTarea = prompt("Ingrese un nombre: ");
        agregarTarea(nombreTarea);
        break;
      case 2:
        let indiceAEliminar = parseInt(prompt("Ingrese un indice: "));
        eliminarTarea(indiceAEliminar);
        break;
      case 3:
        let indiceACompletar = parseInt(prompt("Ingrese un indice: "));
        completarTarea(indiceACompletar);
        break;
      case 4:
        let indiceAModificar = parseInt(prompt("Ingrese un indice: "));
        if (indiceAModificar >= 0 && indiceAModificar < tareas.length) {
          let opcion = parseInt(
            prompt("Elija una opcion: 1. Nombre, 2. Fecha, 3. Categoria")
          );

          switch (opcion) {
            case 1:
              let nuevoNombre = prompt("Ingrese un nombre nuevo: ");
              modificarTarea(
                indiceAModificar,
                nuevoNombre,
                undefined,
                undefined
              );
              break;
            case 2:
              let nuevaFecha = prompt("Ingrese una fecha: ");
              modificarTarea(
                indiceAModificar,
                undefined,
                nuevaFecha,
                undefined
              );
              break;
            case 3:
              let nuevaCategoria = parseInt(
                prompt("Ingrese un numero de categoria: ")
              );
              if (nuevaCategoria >= 0 && nuevaCategoria < categorias.length) {
                modificarTarea(
                  indiceAModificar,
                  undefined,
                  undefined,
                  nuevaCategoria
                );
              } else {
                console.log("Categoria incorrecta");
              }
              break;
            default:
              console.log("Opcion Incorrecta.");
              break;
          }
        } else {
          console.log("Indice incorrecto.");
        }
        modificarTarea(
          indiceAModificar,
          nuevoNombre,
          nuevaFecha.nuevaCategoria
        );
        break;
      case 5:
        console.log(tareas);
        break;
      case 6:
        mostrarCategorias();
        break;
      case 7:
        let nombreCategoria = prompt("Ingrese un nombre: ");
        agregarCategoria(nombreCategoria);
        break;
      case 8:
        mostrarCategorias();
        let nroCategoria = parseInt(prompt("Ingrese una categoria"));
        if(nroCategoria >= 0 && nroCategoria < categorias.length) {
          let tareasCategorias = filtroPorCategorias(nombreCategoria);
          console.log("Tareas filtradas:");
          console.log(tareasCategorias);
        } else {
          console.log("Indice incorrecto");
        }
        break;
      case 9:
        mostrarCategorias();
        let numCate = parseInt(prompt("Ingrese el numero de la categoria: "));
        contarCompletadasPorCat(numCate);
        break;
      case 10:
        tareasIncompletas();
        break;
      default:
        console.log("Opcion no disponible");
        break;
    }
  }
}

interactuar();
