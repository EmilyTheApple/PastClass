var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','EmilyTheApple.github.io\lesson-9\JSON\towndata.JSON',true)

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('preston').innerhtml = weatherInfo.name[4];
    console.log(weatherInfo.name[4]);
    document.getElementById('pmotto').innerhtml = weatherInfo.motto[4];
    console.log(weatherInfo.motto[4]);
    document.getElementById('pyearFound').innerhtml = weatherInfo.yearFounded[4];
    console.log(weatherInfo.yearFounded[4]);
    document.getElementById('pcurrentPop').innerhtml = weatherInfo.currentPopulation[4];
    console.log(weatherInfo.currentPopulation[4]);
    document.getElementById('paverageRain').innerhtml = weatherInfo.averageRainfall[4];
    console.log(weatherInfo.averageRainfall[4]);

    document.getElementById('sodasprings').innerhtml = weatherInfo.name[5];
    console.log(weatherInfo.name[5]);
    document.getElementById('smotto').innerhtml = weatherInfo.motto[5];
    console.log(weatherInfo.motto[5]);
    document.getElementById('syearFound').innerhtml = weatherInfo.yearFounded[5];
    console.log(weatherInfo.yearFounded[5]);
    document.getElementById('scurrentPop').innerhtml = weatherInfo.currentPopulation[5];
    console.log(weatherInfo.currentPopulation[5]);
    document.getElementById('saverageRain').innerhtml = weatherInfo.averageRainfall[5];
    console.log(weatherInfo.averageRainfall[5]);

    document.getElementById('fishhaven').innerhtml = weatherInfo.name[1];
    console.log(weatherInfo.name[1]);
    document.getElementById('fmotto').innerhtml = weatherInfo.motto[1];
    console.log(weatherInfo.motto[1]);
    document.getElementById('fyearFound').innerhtml = weatherInfo.yearFounded[1];
    console.log(weatherInfo.yearFounded[1]);
    document.getElementById('fcurrentPop').innerhtml = weatherInfo.currentPopulation[1];
    console.log(weatherInfo.currentPopulation[1]);
    document.getElementById('faverageRain').innerhtml = weatherInfo.averageRainfall[1];
    console.log(weatherInfo.averageRainfall[1]);
}