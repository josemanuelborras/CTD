// TRY, CATCH, FINALLY, THROW
try {
  // Forzamos un error
  alerta("Hola Mundo");
} catch (error) {
  document.getElementById("error").innerHTML = error.message;
}

// lanzar errores
const testNumber = () => {
  const message = document.getElementById("res");
  message.innerHTML = "";

  let num = document.getElementById("input").value;

  try {
    if (num.trim() == "") throw "vacio";
    if (isNaN(num)) throw "no es un numero";
    num = Number(num);
    if (num < 1) throw "muy bajo";
    if (num > 10) throw "muy alto";
    message.innerHTML = "El dato ingresado es " + num;
  } catch (error) {
    message.innerHTML = "El dato ingresado es " + error;
  }
};

// ----- async/await con fetch ----- //
const fetchData = async () => {
  try {
    // forzar error: "https://jsonplaceholder.typicode.com/posts/1134453dsf"
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error("Hubo un problema llamando a la API");
    }
    const data = await response.json();
    document.getElementById("async-await-text").innerHTML = data.title;
  } catch (error) {
    document.getElementById("async-await-text").innerHTML = error.message;
  }
};

fetchData();

// ----- otro ejemplo ------ //
function myFunction() {
  let message, x;

  message = document.getElementById("intro");

  message.innerHTML = "";

  x = document.getElementById("demo").value;

  try {
    //Ejecutamos un try con condicionales arrojando(throw) un mensaje:

    if (x == "") throw "Contenido vacío";

    if (isNaN(x)) throw "No es un número";

    x = Number(x);

    if (x > 10) throw "Número demasiado alto";

    if (x < 5) throw "Número demasiado bajo";
  } catch (err) {
    //Ejecutamos un catch para manejar el error mostrándolo en el navegador

    message.innerHTML = "Error: " + err + ".";
  } finally {
    //Ejecutamos la acción que termina con la función para devolver el valor requerido

    document.getElementById("demo").value = "";
  }
}
