const doValidation = () => {
    const name = document.getElementById('name');
    
    document.getElementById('error').innerHTML = name.checkValidity() ? 'Nombre correcto' : 'Nombre requerido';
}

