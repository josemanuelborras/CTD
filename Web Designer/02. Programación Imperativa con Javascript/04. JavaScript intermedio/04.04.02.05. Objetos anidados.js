let persona = {
  nombre: "Juan",
  edad: 30,
  ocupacion: "Ingeniero",
  habilidad: "Javascript",
};

persona.ubicacion = {
  ubicacion: {
    codigoPostal: "3500",
    ciudad: "Resistencia",
    calle: "Sarmiento",
    numero: 217,
  },
};

function eliminarPropiedad(objeto, propiedad) {
  switch (propiedad) {
    case "nombre":
      delete objeto.nombre;
      break;
    case "edad":
      delete objeto.edad;
      break;
    case "ocupacion":
      delete objeto.ocupacion;
      break;
    case "habilidad":
      delete objeto.habilidad;
      break;
    case "ubicacion":
      delete objeto.ubicacion;
      break;
    default:
      console.log("No existe la propiedad: " + propiedad);
      break;
  }
}

eliminarPropiedad(persona, "nombre");
console.log(persona);