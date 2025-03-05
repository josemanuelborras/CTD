const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const job = document.getElementById('job');

const save = () => {
    localStorage.setItem('userName', `${firstName.value} ${lastName.value}`);
    localStorage.setItem('job', job.value);
}

const logout = () => {
    localStorage.removeItem('userName');
}

const eraseAll = () => {
    localStorage.clear();
}
document.getElementById('welcome').innerHTML = localStorage.getItem('userName') ? 'Bienvenido ' + localStorage.getItem('userName') : '';