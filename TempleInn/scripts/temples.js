var templeObject = new XMLHttpRequest();
templeObject.open('GET','/EmilyTheApple.github.io/TempleInn\JSON\temples.JSON',true)

templeObject.send();

templeObject.onload = function() {
    var templeInfo = JSON.parse(templeObject.responseText);
    console.log(templeInfo) 
}