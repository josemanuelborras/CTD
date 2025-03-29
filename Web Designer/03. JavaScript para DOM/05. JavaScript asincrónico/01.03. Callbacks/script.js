const users = ['Pedro', 'Juan', 'Jose', 'Ricky'];

const sendNotifications = (userName) => {
    console.log(`Como estas ${userName}`);
}

const sayHello = (userName) => {
    console.log('Hola ' + userName);
}

const sentToUser = (array, action) => {
    array.map(a => action(a));
    console.log('La tarea Finalizo');
}

sentToUser(users, sendNotifications);
sentToUser(users, sayHello);