// var
function ejemplo1() {
    if(true) {
        var mensaje = "Hola var";
    }
    console.log(mensaje); // Hola var
}

ejemplo1();

//  let
function ejemplo2() {
    if(true) {
        let mensaje2 = "Hola let";
        console.log(mensaje2); // Hola let
    }
    console.log(mensaje2); // ReferenceError: mensaje2 is not defined
}

ejemplo2();