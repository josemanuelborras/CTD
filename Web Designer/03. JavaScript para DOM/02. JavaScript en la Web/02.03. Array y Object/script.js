const array = ['HTML', 'CSS', 'Javascript', 'ReactJS'];

const object = {
    nombre: 'Juan',
    ocupacion: 'Desarrollador',
    lenguaje: 'JavaScript'
}

const objectArray = [
    { materia: 'HTML', dificultad: 6, necesario: true},
    { materia: 'CSS', dificultad: 8, necesario: true},
    { materia: 'JavasCript', dificultad: 9.5, necesario: true},
    { materia: 'ReactJS', dificultad: 8, necesario: false},
]

// for ... of
let text = '';
for(let tech of array) {
    text += tech + ' ';
}
console.log(text)

// for ... in
let prop = '';
for(let property in object) {
    prop += object[property] + ', ';
}
console.log(prop);

let key = '';
for(let property in object) {
    key += property + ' ';
}
console.log(key);

let objArr = '';
for(let elem of objectArray) {
    objArr += elem.materia + ' ';
}
console.log(objArr);