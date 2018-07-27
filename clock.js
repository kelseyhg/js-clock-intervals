

var secondHand = document.getElementById("second");
var minuteHand = document.getElementById("minute");
var hourHand = document.getElementById("hour");
var d = new Date();
var hours = (d.getHours())*30;
var minutes = (d.getMinutes())*6;
var seconds = (d.getSeconds())*6;


console.log(hours/30, minutes/6, seconds/6);

hourHand.style.transform = "rotate(" + hours + "deg)";


var myVar = setInterval(doTick, 1000);

function doTick() {
    secondHand.style.transform = "rotate(" + seconds + "deg)";
    seconds += 6;
    minuteHand.style.transform = "rotate(" + minutes + "deg)";  
    minutes += .1;
    hourHand.style.transform = "rotate(" + hours + "deg)";
    hours += .01;

};





