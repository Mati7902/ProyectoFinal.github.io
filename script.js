const apiKey = "20d66fe92d055ea9c827e1c8dbe9f05d";
const ciudadPredeterminada = "Encarnación,py";
const lang = "es";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadPredeterminada}&APPID=${apiKey}&units=metric&lang=${lang}`;

const TEMPERATURA = document.getElementById("temperature");
const VIENTO = document.getElementById("wind");
const ESTADO = document.getElementById("weather-description");
const CLIMA = document.getElementById("weather-icon");
const BUSCADOR = document.getElementById("buscador");
const BOTON = document.getElementById("boton");

document.addEventListener("DOMContentLoaded", () => {
    obtenerDatos(apiUrl);
});

BOTON.addEventListener("click", () => {
    let valor = BUSCADOR.value;
    const newURL = `https://api.openweathermap.org/data/2.5/weather?q=${valor},py&APPID=${apiKey}&units=metric&lang=${lang}`;
    obtenerDatos(newURL);
});

function obtenerDatos(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const temperatura = data.main.temp.toFixed(1);
            const viento = data.wind.speed.toFixed(1);
            const clima = data.weather[0].description;
            const icon = data.weather[0].icon;

            TEMPERATURA.textContent = `${temperatura}°C`;
            VIENTO.textContent = `de: ${viento} m/s`;
            ESTADO.textContent = clima;
            CLIMA.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDA3I4mJr9FtLAFpOLM3M5bG6ejUMqCn66g&usqp=CAU";
        })
        .catch((err) => console.error(err));
}


