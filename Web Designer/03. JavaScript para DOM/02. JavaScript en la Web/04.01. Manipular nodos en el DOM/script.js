const paragraph = document.createElement('p');
const node = document.createTextNode('contenido nuevo');
paragraph.appendChild(node);

const container = document.getElementById('div1');
container.appendChild(paragraph);

// 

const p1 = document.getElementById('p1');
container.insertBefore(paragraph, p1);

// 
const p2 = document.getElementById('p2');
p2.remove();
container.removeChild(p1);

// 
const p3 = document.getElementById('p3');
container.replaceChild(paragraph, p3);