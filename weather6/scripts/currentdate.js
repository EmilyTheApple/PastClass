function getFormattedDate() {
var date = new Date();
var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
var wday = weekday[date.getDay()];
var day = format(date .getDate());
var month = format(date .getMonth());
var year = format(date getFullYear());
document.getElementById("currentdate").innerHTML = wday + day + month + year;
}