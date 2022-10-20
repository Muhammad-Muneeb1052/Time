window.addEventListener('load', dateCall)
function dateCall(){
    var date = new Date();
    console.log(date);
    var day = date.getDay();
    var hours = date.getHours();
    var minuts= date.getMinutes();
    var ampm= hours > 12 ? 'PM' : 'AM';
    var dayNames = ["SUN","MON","TUS","WED","THR","FRI","SAT",];
    // hours = hours % 12;
    // hours = hours ? 12 : console.log("error");
    hours < 10 ? '0' + hours : hours;
    minuts < 10 ? '0' + minuts : minuts;
    document.getElementById('day').innerHTML = dayNames[day];
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minuts;
    document.getElementById('ampm').innerHTML = ampm;
    setTimeout(dateCall, 10000);
}
