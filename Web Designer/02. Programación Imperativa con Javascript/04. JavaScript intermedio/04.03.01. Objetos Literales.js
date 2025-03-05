// Crear un objeto
console.log("---Creacion---");
let persona = {
    nombre: "Juan",
    apellido: "Gomez",
    edad: 30,
    coloresFavoritos: ["Azul", "Amarillo"],
    saludar: function() {
        return "Hola"
    },
    saludarConThis : function() {
        return `Hola soy ${this.nombre}`;
    }
}
console.log(persona);

// Acceso a las propiedades y metodos
console.log("---Acceso---");
console.log(persona.nombre);
console.log(persona.coloresFavoritos);
console.log(persona.coloresFavoritos[1]);

// Cambiar valores de propiedades o metodos
console.log("---Cambio de valores---");
persona.nombre = "Pablo";
console.log(persona.nombre);

// Agregar nuevas propiedades o metodos
console.log("---Propiedades/metodos nuevos---");
persona.deporteFavorito = "Futbol";
console.log(persona);

// Eliminar propiedades
console.log("---Propiedades/metodos nuevos---");
delete persona.deporteFavorito;
console.log(persona);

// Acceder a metodos
console.log("---Metodos---");
console.log(persona.saludar());

// this
console.log("---this---");
console.log(persona.saludarConThis());