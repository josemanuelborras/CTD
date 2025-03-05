// Almacenar tareas en un array
let tareas = [];

// Agregar tareas al array
function agregarTarea(nombre, fecha = null) {
    tareas.push({
        nombre: nombre,
        completada: false,
        fechaLimite: fecha
    })
}

// Eliminar una tarea
function eliminarTarea(indice) {
    if(indice >= 0 && indice < tareas.length) {
        tareas.splice(indice, 1);
        console.log("Eliminado");
    } else {
        console.log("El indice no existe");
    }
}

function completarTarea(indice) {
    if(indice >= 0 && indice < tareas.length) {
        tareas[indice].completada = true;
        console.log("Completada");
    } else {
        console.log("El indice no existe");
    }
}