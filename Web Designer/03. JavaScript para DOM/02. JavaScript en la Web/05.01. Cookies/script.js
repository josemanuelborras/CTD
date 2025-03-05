const cookie = 'cookie=Valor de la cookie';

document.cookie = cookie;

// 

const user = document.cookie;
confirm(`Es tu nombre de usuario? ${user}`);

// 

const getCookie = (cname) => {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

const userCookie = document.cookie;
const usuario = getCookie('userCookie');

confirm('userCookie' + userCookie)