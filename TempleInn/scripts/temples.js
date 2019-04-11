var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','/EmilyTheApple.github.io/',true)

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);