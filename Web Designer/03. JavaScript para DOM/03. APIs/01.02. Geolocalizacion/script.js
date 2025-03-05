const geoLocation = document.getElementById('ubicacion');

const showPosition = position => {
    geoLocation.innerHTML = 'Latitud: ' + position.coords.latitude + '<br>Longitud: ' + position.coords.longitude;
}

const getLocation = () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        geolocation.innerHTML = 'No esta activo.'
    }
}