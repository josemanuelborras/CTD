let persona = {
    nombre: "Juan",
    edad: 30,
    ocupacion: "Ingeniero",
}

function verObjeto(obj) {
    console.log(obj.nombre);
    console.log(obj.edad);
    console.log(obj.ocupacion);
    console.log(obj.habilidad);
}

verObjeto(persona);

persona.ocupacion = "Deportista";
persona.habilidad = "Ingles";

verObjeto(persona);