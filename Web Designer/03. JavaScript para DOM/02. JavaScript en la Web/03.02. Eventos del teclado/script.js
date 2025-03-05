const keyDown = (event) => {
    const key = event.key;
    console.log(key);
}

const keyUp = (event) => {
    const key = event.key;
    console.log(key);
}

const keyPress = (event) => {
    const key = event.key;
    console.log(key);
}

let tecla;
const altPress = (event) => {
    tecla = event.altKey;
    console.log(tecla);
    document.getElementById('alt').innerHTML = tecla ? "Estas presionando la tecla ALT" : "Estas presionando otra tecla";
}

let capsLock;
const modifier = (event) => {
    capsLock = event.getModifierState('CapsLock');
    console.log(capsLock);
    document.getElementById('capsLock').innerHTML = capsLock ? 'Mayusculas Activado' : '';
}
