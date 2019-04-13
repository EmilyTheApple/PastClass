var germanyWeather = new XMLHttpRequest();
germanyWeather.open('GET', '//api.openweathermap.org/data/2.5/weather?id=5585010&appid=6206458334476c0ae3b4a83d9e2c25f8&units=imperial', true);

germanyWeather.send();

germanyWeather.onload = function() {
    var weatherInfo = JSON.parse(germanyWeather.responseText);
    console.log(weatherInfo);
    
    document.getElementById('fgcon').innerHTML = weatherInfo.list["0"].weather["0"].main;
    document.getElementById('fglow').innerHTML = weatherInfo.list["0"].main.temp_min;
    document.getElementById('fghi').innerHTML = weatherInfo.list["0"].main.temp_max;
}