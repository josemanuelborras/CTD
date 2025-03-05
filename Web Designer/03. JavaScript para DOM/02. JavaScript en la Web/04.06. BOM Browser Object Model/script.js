console.log(window);

const clickMe = () => {
    const height = window.innerHeight;
    const width = window.innerWidth;

    console.log('height', height);
    console.log('width', width);
}

// 

const openWindow = () => {
    window.open('https://www.google.com', 'Pagina-de-Google');
}

// 

const history = () => {
    console.log(window.history);
}
const historyBack = () => window.history.back();
document.getElementById('btn4').addEventListener('click', historyBack);
const historyForward= () => window.history.forward();
document.getElementById('btn5').addEventListener('click', historyForward);

// 

document.getElementById('screenh').innerHTML = screen.height + 'px';
document.getElementById('screenw').innerHTML = screen.width + 'px';
document.getElementById('screenc').innerHTML = screen.colorDepth + 'bits';

// 

document.getElementById('location').innerHTML = window.location.href;

// 

document.getElementById('cookies').innerHTML = navigator.cookieEnabled ? 'Si' : 'No';

// 

document.getElementById('browser').innerHTML = navigator.appCodeName;
document.getElementById('so').innerHTML = navigator.platform;