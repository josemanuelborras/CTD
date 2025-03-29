// funcion sincrona
function myFunc1() {
  return "Hola";
}

// funcion asincrona usando Promise
function myFunc2() {
  return new Promise.resolve("Hola");
}

// funcion asicrona usando Async
async function myFunc3() {
  return "Hola";
}

// funcion lambda sincrona
const myFunc4 = () => "Hola";

// funcion lambda asincrona usando Promise
const myFunc5 = () => new Promise.resolve("Hola");

// funcion lambda asicrona usando Async
const myFunc6 = async () => "Hola";

// ----- async ----- //
function changeText(text) {
  document.getElementById("async-text").innerHTML = text;
}

async function myFunction() {
  return " Hola Mundo!";
}

myFunction().then(function (value) {
  changeText(value);
});

// ----- await ----- //
// *quitar async await para ver que devuelve
const changeText2 = async () => {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola mundo");
    }, 3000);
  });

  document.getElementById("await-text").innerHTML = await myPromise;
};

changeText2();

// ----- async/await con fetch ----- //
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  document.getElementById("async-await-text").innerHTML = data.title;
};

fetchData();
