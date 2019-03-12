var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','/EmilyTheApple.github.io/lesson-9/JSON/towndata.JSON',true)

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('preston').innerhtml = weatherInfo.towns[4].name;
    console.log(weatherInfo.towns[4].name);
    document.getElementById('pmotto').innerhtml = weatherInfo.towns[4].motto;
    console.log(weatherInfo.towns[4].motto);
    document.getElementById('pyearFound').innerhtml = weatherInfo.towns[4].yearFounded;
    console.log(weatherInfo.towns[4].yearFounded);
    document.getElementById('pcurrentPop').innerhtml = weatherInfo.towns[4].currentPopulation;
    console.log(weatherInfo.towns[4].currentPopulation);
    document.getElementById('paverageRain').innerhtml = weatherInfo.towns[4].averageRainfall;
    console.log(weatherInfo.towns[4].averageRainfall);

    document.getElementById('sodasprings').innerhtml = weatherInfo.towns[5].name;
    console.log(weatherInfo.towns[5].name);
    document.getElementById('smotto').innerhtml = weatherInfo.towns[5].motto;
    console.log(weatherInfo.towns[5].motto);
    document.getElementById('syearFound').innerhtml = weatherInfo.towns[5].yearFounded;
    console.log(weatherInfo.towns[5].yearFounded);
    document.getElementById('scurrentPop').innerhtml = weatherInfo.towns[5].currentPopulation;
    console.log(weatherInfo.towns[5].currentPopulation);
    document.getElementById('saverageRain').innerhtml = weatherInfo.towns[5].averageRainfall;
    console.log(weatherInfo.towns[5].averageRainfall);

    document.getElementById('fishhaven').innerhtml = weatherInfo.towns[1].name;
    console.log(weatherInfo.towns[1].name);
    document.getElementById('fmotto').innerhtml = weatherInfo.towns[1].motto;
    console.log(weatherInfo.towns[1].motto);
    document.getElementById('fyearFound').innerhtml = weatherInfo.towns[1].yearFounded;
    console.log(weatherInfo.towns[1].yearFounded);
    document.getElementById('fcurrentPop').innerhtml = weatherInfo.towns[1].currentPopulation;
    console.log(weatherInfo.towns[1].currentPopulation);
    document.getElementById('faverageRain').innerhtml = weatherInfo.towns[1].averageRainfall;
    console.log(weatherInfo.towns[1].averageRainfall);
}