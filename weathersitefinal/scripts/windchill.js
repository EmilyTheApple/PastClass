function windChill() {
    var t = document.getElementById("currhi").innerHTML
    var v = document.getElementById("currws").innerHTML
    var f = 35.74 + (0.6215 * t) - (35.75 * (Math.pow(v, 0.16))) + (0.4275 * t * (Math.pow(v, 0.16)));
    document.getElementById("windchill").innerHTML = f;
}