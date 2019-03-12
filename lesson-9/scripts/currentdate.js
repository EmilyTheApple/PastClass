function getdateformatted() {
  /*This section gets the date from the computer for the program to use and also gets the day of the month*/
  var date = new Date();
  var day = d.getDate();
  /*This section takes the variable weekday, takes the number of the day, applies it to the array and spits out a string under the variable n*/
  var weekday = new Array(7);
   weekday[0] = "Sunday";
   weekday[1] = "Monday";
   weekday[2] = "Tuesday";
   weekday[3] = "Wednesday";
   weekday[4] = "Thursday";
   weekday[5] = "Friday";
   weekday[6] = "Saturday";
  var n = weekday[d.getDay()];
  /*This section takes the month variable and the number of the month and converts to the month's name and puts it under mon*/
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var mon = month[d.getMonth()];
  /*This section gets the full year and puts it under the variable yr*/
  var yr = d.getFullYear();
  /*This section sticks them all in the right spots with the right spaces and a comma*/
  document.getElementById("currdate").innerHTML = n + ", " + day + mon + " " + yr;
  }