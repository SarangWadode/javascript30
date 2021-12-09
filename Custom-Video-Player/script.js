const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const pausePlay = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');

function playPause() {
    (video.paused) ? video.play() : video.pause();
    updateButton();
}

function updateButton() {
    (video.paused) ? pausePlay.textContent = '►' : pausePlay.textContent = '❚❚';
}

function skip() {
    console.log(video.currentTime)
    video.currentTime += parseInt(this.dataset.skip);
    console.log(video.currentTime)
}

video.addEventListener('click', playPause);
pausePlay.addEventListener('click', playPause);
skipButtons.forEach(button => button.addEventListener('click', skip));