const myPromise = new Promise((resolve, reject) => {
  const random = Math.round(Math.random() * 10);

  setTimeout(() => {
    resolve(random);
  }, 2000);
});

const isEven = (number) => {
  const even = number % 2 == 1 ? "es impar" : "es par";
  document.getElementById("loading").innerHTML = "";
  document.getElementById("response").innerHTML = `el numero ${number} ${even}`;
};

document.getElementById("loading").innerHTML = "Cargando...";
myPromise
    .then(isEven)
    .catch((error) => {
        document.getElementById("loading").innerHTML = "";
        document.getElementById("response").innerHTML = error;
        console.log(error);
});
