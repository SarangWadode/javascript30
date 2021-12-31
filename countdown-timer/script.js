const timedisplay = document.querySelector('.display__time-left')
const endTimeDisplay = document.querySelector('.display__end-time')
let countdown
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {
    clearInterval(countdown)
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
    const then = new Date(timestamp);
    const mins = then.getMinutes();
    const hours = then.getHours();
    const endtime = `Will be back at ${hours} : ${mins}`;
    endTimeDisplay.textContent = endtime;
}

function starttime() {
    const seconds = this.dataset.time;
    timer(seconds);
}

function handleSubmit(e) {
    e.preventDefault();
    const mins = parseInt(this.minutes.value);
    timer(mins * 60)
    this.reset();
}

buttons.forEach(button => button.addEventListener('click',starttime));
document.customForm.addEventListener('submit',handleSubmit)

