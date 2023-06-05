what
const searchInput = document.getElementById("input");
const searchButton = document.getElementById("button");

searchButton.addEventListener("click", ()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&appid=b47455588de3ea0e8f6634db25933dba&q="+searchInput.value)
    .then(res => res.json())
    .then(data => loadData(data))

    // fetch('https://api.lyrics.ovh/suggest/'+input.value+'')
})

function loadData(user){
    console.log(user);
    document.querySelector("#name").innerHTML = user.name;
    document.querySelector("#temp").innerHTML = Math.round(user.main.temp) + " °C";
    document.querySelector("#feel-temp").innerHTML = Math.round(user.main.feels_like) + " °C";
    document.querySelector("#humidity").innerHTML = user.main.humidity + " %";
    document.querySelector("#speed").innerHTML = user.wind.speed + " km/h";
    document.querySelector("#weather").innerHTML = user.weather[0].description;
}