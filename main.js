var weekName = document.getElementById('toWeek')
var monthName = document.getElementById('toMonth')
var dateToday = document.getElementById('toDate') 

// showDateToday

var date = new Date();
var td = date.getDate()
var mo = date.getMonth() + 1 
var yr = date.getFullYear()
if (td < 10) {td = `0${td}`}
if(mo < 10){ mo = `0${mo}`}
var toDateNow = `${td}/${mo}/${yr}`

// showWeek-monthName -------

var dateNum = date.toLocaleString('default', { month: 'long' })

let toDay = date.toLocaleString('en-us', {weekday: 'long'})
weekName.innerHTML = toDay
dateToday.innerHTML = toDateNow
monthName.innerHTML = dateNum

// showClock -------

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
    if (h == 0) {h = 12n}
  if (h > 12) {h = h - 12
    session = "PM" }
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
var time = `${h}:${m}:${s} ${session}`
document.getElementById("MyClock").innerHTML = time;
setInterval(showTime, 1000);
}
showTime();
