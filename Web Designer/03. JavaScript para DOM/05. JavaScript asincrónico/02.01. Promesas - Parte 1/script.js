const number = prompt('Numero del 1 al 10');


const myPromise = new Promise ((resolve, reject) => {

    const random = Math.round(Math.random()*10);

    setTimeout(() => {
        if(random == number) {
            resolve('Ganaste');
        } else if (random > number) {
            reject(`El numeo ${number} es mas grande`);
        } else {
            reject(`El numero ${number} es mas chico`)
        }
    }, 2000);
});

document.getElementById('loading').innerHTML = 'Cargando...';
myPromise.then(res => {
    document.getElementById('loading').innerHTML = '';
    document.getElementById('response').innerHTML = res;
    console.log(res);
}).catch(error => {
    document.getElementById('loading').innerHTML = '';
    document.getElementById('response').innerHTML = error;
    console.log(error);
}).finally(
    console.log('Operacion que se ejecuta siempre')
);