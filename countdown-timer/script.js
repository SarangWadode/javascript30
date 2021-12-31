// const time = document.querySelector('input')
const timedisplay = document.querySelector('.display__time-left')
const endTimeDisplay = document.querySelector('.display__end-time')
let countdown

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds)
    displayEndTime(then)
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0 ) {
            clearInterval(countdown);
            return
        }
        displayTimeLeft(secondsLeft)
    },1000)

}

function displayTimeLeft(secondsLeft) {
    const minutes = Math.floor(secondsLeft / 60);
    const remainingsecs = secondsLeft % 60;
    const display = `${minutes} : ${remainingsecs < 10 ? '0':''} ${remainingsecs}`
    document.title = display
    timedisplay.textContent = display
}

function displayEndTime(timestamp) {
    const then = new Date(timestamp)
    const mins = then.getMinutes();
    const hours = then.getHours();
    const endtime = `We will be back at ${hours} : ${mins}`;
    endTimeDisplay.textContent = endtime;
}

timer(600)