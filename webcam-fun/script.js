const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    const mediaStream = new MediaStream();
    console.log(mediaStream);
    video.src = mediaStream;
    // navigator.mediaDevices.getUserMedia({video: true, audio: false})
    // .then(localMediaStream => {
    //     const MediaStream
    //     video.src = window.URL.createObjectURL(localMediaStream);
    // })
}
getVideo();