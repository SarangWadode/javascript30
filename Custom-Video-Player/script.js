const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const pausePlay = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const sliders = player.querySelectorAll('.player__slider')

function playPause() {
    (video.paused) ? video.play() : video.pause();
    updateButton();
}

function updateButton() {
    (video.paused) ? pausePlay.textContent = '►' : pausePlay.textContent = '❚❚';
}

function skip() {
    video.currentTime += parseInt(this.dataset.skip);
}

function sliding(e) {
    console.log(e.target.name)
    if(e.target.name === 'volume') {
        video.volume = e.target.value;
    }
    else {
        video.playbackRate = (parseFloat(e.target.value) * 16) / 2;
    }
    console.log(video.playbackRate)
}



video.addEventListener('click', playPause);
pausePlay.addEventListener('click', playPause);
skipButtons.forEach(button => button.addEventListener('click', skip));
sliders.forEach(button => button.addEventListener('change',sliding));
sliders.forEach(button => button.addEventListener('input',sliding));