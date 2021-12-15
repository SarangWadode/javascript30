const lists = document.querySelectorAll('[data-time]');
let count = [];
let mins = 0 ;
let secs = 0 ;
lists.forEach(list => {
    let time = list.dataset.time.split(':');
    mins += parseInt(time[0]);
    secs += parseInt(time[1]);
});
let totalSeconds = mins * 60 + secs;
let hrs = Math.floor(totalSeconds / 3600); 
totalSeconds = totalSeconds % 3600;
let minsleft = Math.floor(totalSeconds / 60);
totalSeconds = totalSeconds % 60;
let secsLeft = Math.floor(totalSeconds);
console.log("Hrs,mins,secs",hrs,minsleft,totalSeconds)
