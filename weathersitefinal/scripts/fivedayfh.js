var prestonWeather = new XMLHttpRequest();
prestonWeather.open('GET', '//api.openweathermap.org/data/2.5/forecast?id=5585010&appid=6206458334476c0ae3b4a83d9e2c25f8&units=imperial', true);

prestonWeather.send();

prestonWeather.onload = function() {
    var weatherInfo = JSON.parse(prestonWeather.responseText);
    console.log(weatherInfo);

    document.getElementById('des1').innerHTML = weatherInfo.list[5].weather["0"].description;
    document.getElementById('h1').innerHTML = weatherInfo.list[5].main.temp_max;
    document.getElementById('l1').innerHTML = weatherInfo.list[5].main.temp_min;
    document.getElementById('ws1').innerHTML = weatherInfo.list[5].wind.speed;

    document.getElementById('des2').innerHTML = weatherInfo.list[13].weather["0"].description;
    document.getElementById('h2').innerHTML = weatherInfo.list[13].main.temp_max;
    document.getElementById('l2').innerHTML = weatherInfo.list[13].main.temp_min;
    document.getElementById('ws2').innerHTML = weatherInfo.list[13].wind.speed;
    
    document.getElementById('des3').innerHTML = weatherInfo.list[21].weather["0"].description;
    document.getElementById('h3').innerHTML = weatherInfo.list[21].main.temp_max;
    document.getElementById('l3').innerHTML = weatherInfo.list[21].main.temp_min;
    document.getElementById('ws3').innerHTML = weatherInfo.list[21].wind.speed;
    
    document.getElementById('des4').innerHTML = weatherInfo.list[29].weather["0"].description;
    document.getElementById('h4').innerHTML = weatherInfo.list[29].main.temp_max;
    document.getElementById('l4').innerHTML = weatherInfo.list[29].main.temp_min;
    document.getElementById('ws4').innerHTML = weatherInfo.list[29].wind.speed;
   
    document.getElementById('des5').innerHTML = weatherInfo.list[37].weather["0"].description;
    document.getElementById('h5').innerHTML = weatherInfo.list[37].main.temp_max;
    document.getElementById('l5').innerHTML = weatherInfo.list[37].main.temp_min;
    document.getElementById('ws5').innerHTML = weatherInfo.list[37].wind.speed;
}