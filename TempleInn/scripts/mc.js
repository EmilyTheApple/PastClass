var mexicoWeather = new XMLHttpRequest();
mexicoWeather.open('GET', '//api.openweathermap.org/data/2.5/weather?id=3530597&appid=6206458334476c0ae3b4a83d9e2c25f8&units=imperial', true);

mexicoWeather.send();

mexicoWeather.onload = function() {
    var weatherInfo = JSON.parse(mexicoWeather.responseText);
    console.log(weatherInfo);
    
    document.getElementById('mccon').innerHTML = weatherInfo.list[0].weather["0"].main;
    document.getElementById('mclow').innerHTML = weatherInfo.list["0"].main.temp_min;
    document.getElementById('mchi').innerHTML = weatherInfo.list["0"].main.temp_max;
}