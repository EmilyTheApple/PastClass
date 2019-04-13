var canadaWeather = new XMLHttpRequest();
canadaWeather.open('GET', '//api.openweathermap.org/data/2.5/weather?id=5585010&appid=6206458334476c0ae3b4a83d9e2c25f8&units=imperial', true);

canadaWeather.send();

canadaWeather.onload = function() {
    var weatherInfo = JSON.parse(canadaWeather.responseText);
    console.log(weatherInfo);
    
    document.getElementById('vbccon').innerHTML = weatherInfo.list["0"].weather["0"].main;
    document.getElementById('vbclow').innerHTML = weatherInfo.list["0"].main.temp_min;
    document.getElementById('vbchi').innerHTML = weatherInfo.list["0"].main.temp_max;
}