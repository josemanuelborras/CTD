

const saludo = document.querySelectorAll('p.saludo');

document.getElementById('test').innerHTML = 'Parrafo escrito desde el primer saludo ' + saludo[0].innerHTML;


const form = document.forms['form1'];
let text = '';

for(let i = 0; i < form.length; i++) {
    text += form.elements[i].value + '<br>';
}

document.getElementById('test2').innerHTML = text;