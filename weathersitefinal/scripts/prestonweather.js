var prestonWeather = new XMLHttpRequest();
prestonWeather.open('GET', '//api.openweathermap.org/data/2.5/weather?id=5604473&appid=6206458334476c0ae3b4a83d9e2c25f8&units=imperial', true);

prestonWeather.send();

prestonWeather.onload = function() {
    var weatherInfo = JSON.parse(prestonWeather.responseText);
    console.log(weatherInfo);
    
    document.getElementById('currcon').innerHTML = weatherInfo.list["0"].weather["0"].main;
    document.getElementById('currlow').innerHTML = weatherInfo.list["0"].main.temp_min;
    document.getElementById('currhi').innerHTML = weatherInfo.list["0"].main.temp_max;
    document.getElementById('currws').innerHTML = weatherInfo.list["0"].wind.speed;
}