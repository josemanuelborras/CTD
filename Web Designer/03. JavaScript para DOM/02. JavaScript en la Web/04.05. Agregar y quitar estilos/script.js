document.getElementById('styles').style.color = 'red'
console.log(document.getElementById('styles').style.color);
document.getElementById('styles').style.backgroundColor = 'yellow'
console.log(document.getElementById('styles').style.backgroundColor);

//  

const container = document.getElementById('div');
container.querySelector('p.styles1').innerHTML = 'Texto desde el script';
container.querySelector('p#styles2').style.color = 'blue';