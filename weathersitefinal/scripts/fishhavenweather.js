var prestonWeather = new XMLHttpRequest();
prestonWeather.open('GET', '//api.openweathermap.org/data/2.5/weather?id=5585010&appid=6206458334476c0ae3b4a83d9e2c25f8&units=imperial', true);

prestonWeather.send();

prestonWeather.onload = function() {
    var weatherInfo = JSON.parse(prestonWeather.responseText);
    console.log(weatherInfo);
    
    document.getElementById('currcon').innerHTML = weatherInfo.weather["0"].main;
    document.getElementById('currlow').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('currhi').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('currws').innerHTML = weatherInfo.wind.speed;
}