const video = document.querySelector('.flex')
const speed = document.querySelector('.speed')
const bar = document.querySelector('.speed-bar')

function handleMove(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    console.log(playbackRate);
    bar.textContent = playbackRate.toFixed(1) + 'x';
    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove',handleMove)
