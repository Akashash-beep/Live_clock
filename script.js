
let AMPM = document.getElementById('meridian');

function dateandtime() {
    let datetime = new Date();
    let hr = datetime.getHours();
    let min = parsezero(datetime.getMinutes());
    let sec = parsezero(datetime.getSeconds());
    if (hr > 12) {
        hr = hr - 12;
        AMPM.innerHTML = "PM";
    }
    let Hours = document.getElementById('hours');
    let Minutes = document.getElementById('minutes');
    let Seconds = document.getElementById('seconds');
    Hours.innerHTML = parsezero(hr);
    Minutes.innerHTML = min;
    Seconds.innerHTML = sec;


}

function parsezero(num) {
    return num < 10 ? "0" + num : num;

}
setInterval(dateandtime, 500);