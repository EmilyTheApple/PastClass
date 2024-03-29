var manhattanWeather = new XMLHttpRequest();
manhattanWeather.open('GET', '//api.openweathermap.org/data/2.5/weather?id=5585010&appid=6206458334476c0ae3b4a83d9e2c25f8&units=imperial', true);

manhattanWeather.send();

manhattanWeather.onload = function() {
    var weatherInfo = JSON.parse(manhattanWeather.responseText);
    console.log(weatherInfo);
    
    document.getElementById('mnycon').innerHTML = weatherInfo.list["0"].weather["0"].main;
    document.getElementById('mnylow').innerHTML = weatherInfo.list["0"].main.temp_min;
    document.getElementById('mnyhi').innerHTML = weatherInfo.list["0"].main.temp_max;
}