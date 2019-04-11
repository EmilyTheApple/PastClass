var templeObject = new XMLHttpRequest();
templeObject.open('GET','/EmilyTheApple.github.io/TempleInn\JSON\temples.JSON',true)

templeObject.send();

templeObject.onload = function() {
    var templeInfo = JSON.parse(templeObject.responseText);
    console.log(templeInfo);
    
    document.getElementById('mcname').innerHTML = templeInfo.temples[0].name;
    document.getElementById('mcaddress').innerHTML = templeInfo.temples[0].address;
    document.getElementById('mctelephone').innerHTML = templeInfo.temples[0].telephone;
    document.getElementById('mcservices').innerHTML = templeInfo.temples[0].services;
    document.getElementById('mchistory').innerHTML = templeInfo.temples[0].history;
    document.getElementById('mcordinances').innerHTML = templeInfo.temples[0].ordinances;
    document.getElementById('mcsessions').innerHTML = templeInfo.temples[0].sessions;
    document.getElementById('mcclosure').innerHTML = templeInfo.temples[0].closure;

    document.getElementById('vbcname').innerHTML = templeInfo.temples[1].name;
    document.getElementById('vbcaddress').innerHTML = templeInfo.temples[1].address;
    document.getElementById('vbctelephone').innerHTML = templeInfo.temples[1].telephone;
    document.getElementById('vbcservices').innerHTML = templeInfo.temples[1].services;
    document.getElementById('vbchistory').innerHTML = templeInfo.temples[1].history;
    document.getElementById('vbcordinances').innerHTML = templeInfo.temples[1].ordinances;
    document.getElementById('vbcsessions').innerHTML = templeInfo.temples[1].sessions;
    document.getElementById('vbcclosure').innerHTML = templeInfo.temples[1].closure;
    
    document.getElementById('mnyname').innerHTML = templeInfo.temples[2].name;
    document.getElementById('mnyaddress').innerHTML = templeInfo.temples[2].address;
    document.getElementById('mnytelephone').innerHTML = templeInfo.temples[2].telephone;
    document.getElementById('mnyservices').innerHTML = templeInfo.temples[2].services;
    document.getElementById('mnyhistory').innerHTML = templeInfo.temples[2].history;
    document.getElementById('mnyordinances').innerHTML = templeInfo.temples[2].ordinances;
    document.getElementById('mnysessions').innerHTML = templeInfo.temples[2].sessions;
    document.getElementById('mnyclosure').innerHTML = templeInfo.temples[2].closure;

    document.getElementById('fgtname').innerHTML = templeInfo.temples[3].name;
    document.getElementById('fgtaddress').innerHTML = templeInfo.temples[3].address;
    document.getElementById('fgttelephone').innerHTML = templeInfo.temples[3].telephone;
    document.getElementById('fgtservices').innerHTML = templeInfo.temples[3].services;
    document.getElementById('fgthistory').innerHTML = templeInfo.temples[3].history;
    document.getElementById('fgtordinances').innerHTML = templeInfo.temples[3].ordinances;
    document.getElementById('fgtsessions').innerHTML = templeInfo.temples[3].sessions;
    document.getElementById('fgtclosure').innerHTML = templeInfo.temples[3].closure;
}