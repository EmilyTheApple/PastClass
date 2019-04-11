var templeObject = new XMLHttpRequest();
templeObject.open('GET','/EmilyTheApple.github.io/TempleInn\JSON\temples.JSON',true)

templeObject.send();

templeObject.onload = function() {
    var templeInfo = JSON.parse(templeObject.responseText);
    console.log(templeInfo);

    document.getElementById('mcname').innerHTML = 
    document.getElementById('mcaddress').innerHTML =
    document.getElementById('mctelephone').innerHTML =
    document.getElementById('mcservices').innerHTML =
    document.getElementById('mchistory').innerHTML =
    document.getElementById('mcordinances').innerHTML =
    document.getElementById('mcsessions').innerHTML =
    document.getElementById('mcclosure').innerHTML =

    document.getElementById('vbcname').innerHTML =
    document.getElementById('vbcaddress').innerHTML =
    document.getElementById('vbctelephone').innerHTML =
    document.getElementById('vbcservices').innerHTML =
    document.getElementById('vbchistory').innerHTML =
    document.getElementById('vbcordinances').innerHTML =
    document.getElementById('vbcsessions').innerHTML =
    document.getElementById('vbcclosure').innerHTML =
    
    document.getElementById('mnyname').innerHTML =
    document.getElementById('mnyaddress').innerHTML =
    document.getElementById('mnytelephone').innerHTML =
    document.getElementById('mnyservices').innerHTML =
    document.getElementById('mnyhistory').innerHTML =
    document.getElementById('mnyordinances').innerHTML =
    document.getElementById('mnysessions').innerHTML =
    document.getElementById('mnyclosure').innerHTML =

    document.getElementById('fgtname').innerHTML =
    document.getElementById('fgtaddress').innerHTML =
    document.getElementById('fgttelephone').innerHTML =
    document.getElementById('fgtservices').innerHTML =
    document.getElementById('fgthistory').innerHTML =
    document.getElementById('fgtordinances').innerHTML =
    document.getElementById('fgtsessions').innerHTML =
    document.getElementById('fgtclosure').innerHTML =
}