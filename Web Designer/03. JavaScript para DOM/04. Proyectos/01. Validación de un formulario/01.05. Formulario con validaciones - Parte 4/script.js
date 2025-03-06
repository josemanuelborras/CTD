const submitFunction = (event) => {
  if(!validarFormulario()) {
    event.preventDefault();
  } else {
    event.preventDefault();
    
    alert(
      'Los datos enviados son: ' + '\n' +
      'Nombre: ' + document.getElementById('nombre').value + '\n' +
      'Apellido: ' + document.getElementById('apellido').value + '\n' +
      'Documento: ' + document.getElementById('documento').value + '\n' +
      'Email: ' + document.getElementById('email').value + '\n' +
      'Edad: ' + document.getElementById('edad').value + '\n' +
      'Actividad: ' + document.getElementById('actividad').value + '\n' +
      'Nivel de estudio: ' + document.getElementById('nivelEstudio').value + '\n'
    )
  }
};

document.getElementById("formulario").addEventListener("submit", submitFunction);

const validarFormulario = () => {
  const camposTexto = document.querySelectorAll("input[type=text");
  let validacionCorrecta = true;

  camposTexto.forEach((campo) => {
    let errorCampo = document.getElementById("error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)
    );
    if (campo.value.length == "") {
      mostrarError(errorCampo, "No puede estar vacio");
      validacionCorrecta = false;
    } else if (campo.value.length > 0 && campo.value.length < 3) {
      mostrarError(errorCampo, "Debe tener mas de 3 caracteres");
      validacionCorrecta = false;
    } else {
      ocultarError(errorCampo);
    }
  });

  const campoEmail = document.getElementById('email');
  let errorEmail = document.getElementById('errorEmail');

  // Expresion regular (valida cadena de texto para emails)
  if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(campoEmail.value)) {
    ocultarError(errorEmail);
  } else {
    mostrarError(errorEmail, 'Ingrese un email valido');
    validacionCorrecta = false;
  }

  const campoEdad = document.getElementById('edad');
  let errorEdad = document.getElementById('errorEdad');

  if (campoEdad.value < 18) {
    mostrarError(errorEdad, 'Debes ser mayor a 18');
    validacionCorrecta = false
  } else {
    ocultarError(errorEdad);
  }

  const campoActividad = document.getElementById('actividad');
  const errorActividad = document.getElementById('errorActividad');

  if (campoActividad.value == '') {
    mostrarError(errorActividad, 'Debes seleccionar una actividad');
    validacionCorrecta = false;
  } else {
    ocultarError(errorActividad)
  }

  const campoNivelEstudio = document.getElementById('nivelEstudio');
  const errorNivelEstudio = document.getElementById('errorNivelEstudio');

  if (campoNivelEstudio.value == '') {
    mostrarError(errorNivelEstudio, 'Debes seleccionar un nivel de estudio');
    validacionCorrecta = false;
  } else {
    ocultarError(errorNivelEstudio);
  }

  const campoAceptoTerminos = document.getElementById('aceptoTerminos');
  const errorAceptoTerminos = document.getElementById('errorAceptoTerminos');

  if (!campoAceptoTerminos.checked) {
    mostrarError(errorAceptoTerminos, 'Debes aceptar los terminos y condiciones');
    validacionCorrecta = false;
  } else {
    ocultarError(errorAceptoTerminos);
  }

  return validacionCorrecta;
};

const mostrarError = (elemento, mensaje) => {
  elemento.textContent = mensaje;
  elemento.style.display = "block";
};

const ocultarError = (elemento) => {
  elemento.textContent = "";
  elemento.style.display = "none";
};
