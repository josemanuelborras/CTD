// SetTimeout
const action = () => {
  setTimeout(() => {
    console.log("accion del boton con setTimeout");
  }, 5000);
};

// SetInterval
const action2 = () => {
  setInterval(() => {
    console.log("accion del boton con setInterval");
  }, 2000);
};

// ClearInterval
const action3 = () => {
  const interval = setInterval(() => {
    console.log("setInterval");
  }, 2000);

  setTimeout(() => {
    console.log('clearInterval')
    clearInterval(interval);
  }, 10000);
};

// ClearTimeOut
const action4 = () => {
  const interval = setInterval(() => {
    console.log("setInterval");
  }, 2000);

  const timeOut = setTimeout(() => {
    console.log('clearInterval')
    clearInterval(interval);
  }, 10000);

  clearTimeout(timeOut); // Nunca se iterrumpe el intervalo
};