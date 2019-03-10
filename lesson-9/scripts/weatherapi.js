var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','JSON/towndata.JSON',true)

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('preston').innerhtml = weatherInfo.name[4];
    document.getElementById('pmotto').innerhtml = weatherInfo.motto[4];
    document.getElementById('pyearFound').innerhtml = weatherInfo.yearFounded[4];
    document.getElementById('pcurrentPop').innerhtml = weatherInfo.currentPopulation[4];
    document.getElementById('paverageRain').innerhtml = weatherInfo.averageRainfall[4];
}