function windChill() {
    var f = 35.74 + (0.6215 * 41) - (35.75 * (Math.pow(8, 0.16))) + (0.4275 * 41 * (Math.pow(8, 0.16)));
    document.getElementById("windchill").innerHTML = f;
}