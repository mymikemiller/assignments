var date = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

var ampm = date.getHours() < 12 ? "AM" : "PM";


console.log("Today is: " + days[date.getDay()]);
console.log("Current time is: " + time + " " + ampm);
