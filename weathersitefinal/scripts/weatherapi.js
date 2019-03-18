var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','/EmilyTheApple.github.io/lesson-9/JSON/towndata.JSON',true)

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('preston').innerHTML = weatherInfo.towns[4].name;
    console.log(weatherInfo.towns[4].name);
    document.getElementById('pmotto').innerHTML = weatherInfo.towns[4].motto;
    console.log(weatherInfo.towns[4].motto);
    document.getElementById('pyearFound').innerHTML = weatherInfo.towns[4].yearFounded;
    console.log(weatherInfo.towns[4].yearFounded);
    document.getElementById('pcurrentPop').innerHTML = weatherInfo.towns[4].currentPopulation;
    console.log(weatherInfo.towns[4].currentPopulation);
    document.getElementById('paverageRain').innerHTML = weatherInfo.towns[4].averageRainfall;
    console.log(weatherInfo.towns[4].averageRainfall);

    document.getElementById('sodasprings').innerHTML = weatherInfo.towns[5].name;
    console.log(weatherInfo.towns[5].name);
    document.getElementById('smotto').innerHTML = weatherInfo.towns[5].motto;
    console.log(weatherInfo.towns[5].motto);
    document.getElementById('syearFound').innerHTML = weatherInfo.towns[5].yearFounded;
    console.log(weatherInfo.towns[5].yearFounded);
    document.getElementById('scurrentPop').innerHTML = weatherInfo.towns[5].currentPopulation;
    console.log(weatherInfo.towns[5].currentPopulation);
    document.getElementById('saverageRain').innerHTML = weatherInfo.towns[5].averageRainfall;
    console.log(weatherInfo.towns[5].averageRainfall);

    document.getElementById('fishhaven').innerHTML = weatherInfo.towns[1].name;
    console.log(weatherInfo.towns[1].name);
    document.getElementById('fmotto').innerHTML = weatherInfo.towns[1].motto;
    console.log(weatherInfo.towns[1].motto);
    document.getElementById('fyearFound').innerHTML = weatherInfo.towns[1].yearFounded;
    console.log(weatherInfo.towns[1].yearFounded);
    document.getElementById('fcurrentPop').innerHTML = weatherInfo.towns[1].currentPopulation;
    console.log(weatherInfo.towns[1].currentPopulation);
    document.getElementById('faverageRain').innerHTML = weatherInfo.towns[1].averageRainfall;
    console.log(weatherInfo.towns[1].averageRainfall);
}