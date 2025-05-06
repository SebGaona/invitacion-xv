function actualizarCuentaAtras() {
    const fechaObjetivo = new Date("June 7, 2025 00:00:00").getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `Faltan ${dias} días - ${horas} horas - ${minutos} minutos y ${segundos} segundos`;

    if (diferencia < 0) {
        document.getElementById("countdown").innerHTML = "¡Llegó el 5 de julio!";
    }
}


setInterval(actualizarCuentaAtras, 1000);
