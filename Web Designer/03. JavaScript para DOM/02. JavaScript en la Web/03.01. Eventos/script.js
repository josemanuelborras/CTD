// Declarativa
// function changeThisElement(element) {
//     element.innerHTML = 'Hola desde la funcion en el script';
// }

// Flecha

const changeThisElement = element => element.innerHTML = 'Hola desde la funcion en el script';
// -----

const displayDate = () => document.getElementById('test').innerHTML = Date();

document.getElementById("btn").onclick = displayDate; // sin parentesis para que se ejecute en el evento y no antes

// -----
const checkCookies = () => {
    let text = navigator.cookieEnabled === true ? 'Cookies habilitadas' : 'Cookies deshabilitadas';
    document.getElementById('test2').innerHTML = text;
}

const checkUnload = () => {
    alert('estas saliendo del navegador');
}

// -----
const upperCase = () => {
    const input = document.getElementById('name');
    input.value = input.value.toUpperCase();
}

// -----
const mouseOver = element => {
    element.innerHTML = 'Estas sobre el DIV';
}

const mouseOut = element => {
    element.innerHTML = 'Estas fuera del DIV';
}

// -----
const changeStyle = element => {
    element.style.background = 'aqua';
}