const doValidation = () => {
    const inputNumber = document.getElementById('inputNumber');

    // Con condicional
    // if(!inputNumber.checkValidity()) {
    //     document.getElementById('error').innerHTML = inputNumber.validationMessage;
    // } else {
    //     document.getElementById('error').innerHTML = 'No hay errores';
    // }
    
    // Con ternario
    document.getElementById('error').innerHTML = inputNumber.checkValidity() ? 'Numero correcto' : inputNumber.validationMessage;
}

