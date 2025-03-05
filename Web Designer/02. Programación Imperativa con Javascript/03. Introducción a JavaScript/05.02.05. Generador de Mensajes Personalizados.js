// 5.1.5. Generador de Mensajes Personalizados
function mensajePersonalizado(nombre, momentoDelDia) {
    let saludo = (momentoDelDia === "mañana" ? "Buenos dias" : "Buenas tardes");
    console.log(`${saludo} ${nombre}`);
}

mensajePersonalizado('Juan', "mañana");
mensajePersonalizado('Pedro', "tarde");
