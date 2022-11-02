

var date = new Date();
// get the date as a string
var n = date.toDateString();
// get the time as a string
// var time = date.toLocaleTimeString(date.getHours(), date.getMinutes());
var time = date.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
// var time = time.substring();

// log the date in the browser console
document.getElementById("date").innerHTML = n;

// log the time in the browser console
document.getElementById("time").innerHTML = time;
