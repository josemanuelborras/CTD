const prompt = require("prompt-sync")({ sigint: true });

// Almacenar tareas en un array
let tareas = [];

// Agregar tareas al array
function agregarTarea(nombre, fecha = null) {
  tareas.push({
    nombre: nombre,
    completada: false,
    fechaLimite: fecha,
  });
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
function modificarTarea(indice, nombre, fecha = null) {
  if (indice >= 0 && indice < tareas.length) {
    tareas[indice].nombre = nombre;
    if (fechaLimite !== null) {
      tareas[indice].fechaLimite = fecha;
    }
    console.log("Modificada");
  } else {
    console.log("El indice no existe");
  }
}

function mostrarMenu() {
  console.log("--- Menu ---");
  console.log("1. Agregar Tarea");
  console.log("2. Eliminar Tarea");
  console.log("3. Marcar como completada");
  console.log("4. Modificar tarea");
  console.log("5. Mostrar todo");
  console.log("0. Salir");
}

// Interactiar con el usuario
function interactuar() {
  let opcion = -1;
  while (opcion != 0) {
    mostrarMenu();
    opcion = parseInt(prompt("Ingrese un numero"));

    switch (opcion) {
      case 1:
        let nombreTarea = prompt("Ingrese un nombre");
        agregarTarea(nombreTarea);
        break;
      case 2:
        let indiceAEliminar = parseInt(prompt("Ingrese un indice"));
        eliminarTarea(indiceAEliminar);
        break;
      case 3:
        let indiceACompletar = parseInt(prompt("Ingrese un indice"));
        completarTarea(indiceACompletar);
        break;
      case 4:
        let indiceAModificar = parseInt(prompt("Ingrese un indice"));
        let nuevoNombre = prompt("Ingrese un nombre nuevo");
        let nuevaFecha = prompt("Ingrese una fecha");
        modificarTarea(indiceAModificar, nuevoNombre, nuevaFecha);
        break;
      case 5:
        console.log(tareas);
        break;
      default:
        console.log("Opcion no disponible");
        mostrarMenu();
        break;
    }
  }
}

interactuar();