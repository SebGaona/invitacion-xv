function actualizarCuentaAtras() {
    const fechaObjetivo = new Date("June 7, 2025 00:00:00").getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `Faltan ${dias} días &#10084 ${horas} horas &#10084 ${minutos} minutos &#10084 ${segundos} segundos`;

    if (diferencia < 0) {
        document.getElementById("countdown").innerHTML = "¡Llegó el 5 de julio!";
    }
}

document.getElementById("button").addEventListener("click", function() {

    window.open("https://wa.me/4463360783?text=Hola,%20quiero%20confirmar%20mi%20asistencia%20a%20los%20XV!", "_blank");


    window.location.href = "assist.html";
  });



setInterval(actualizarCuentaAtras, 1000);


const audio = document.getElementById("music");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const volumeSlider = document.getElementById("volume");

playButton.addEventListener("click", () => {
    audio.play();
});

pauseButton.addEventListener("click", () => {
    audio.pause();
});

volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
});

  
  
  