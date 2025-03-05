const addClass = () => {
    const div = document.getElementById('div').classList;
    div.add('red-background', 'white-color');
}

const removeClass = () => {
    document.getElementById('div').classList.remove('red-background', 'white-color');
}

const toggleClass = () => {
    document.getElementById('div').classList.toggle('red-background');
    document.getElementById('div').classList.toggle('white-color');
}

