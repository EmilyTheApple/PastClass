var prestonWeather = new XMLHttpRequest();
prestonWeather.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6206458334476c0ae3b4a83d9e2c25f8&units=imperial', true);

prestonWeather.send();

prestonWeather.onload = function() {
    var weatherInfo = JSON.parse(prestonWeather.responseText);
    console.log(weatherInfo);

}