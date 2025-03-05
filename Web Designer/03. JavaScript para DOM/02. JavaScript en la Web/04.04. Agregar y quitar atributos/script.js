const paragraph1 = document.getElementById('paragraph1');
let text = paragraph1.getAttribute('class');
document.getElementById('attribute').innerHTML = text;

// 

const paragraph2 = document.getElementById('paragraph2');
paragraph2.setAttribute('class', 'red-background');
let text2 = paragraph2.getAttribute('class');
document.getElementById('added-attribute').innerHTML = text2;

// 

const input = document.getElementById('input');
input.setAttribute('value', 'Valor seteado desde el script');

// 

const input2 = document.getElementById('input2');
input2.removeAttribute('value');