const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(localMediaStream => {
        video.srcObject = localMediaStream;
        video.play();
    })
    .catch(err => {
        console.log("Opps! It looks you've not given the video access😢",err)
    })
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video,0,0,width,height);
    },15)
}

function snapPhoto() {
    snap.play();
    snap.currentTime = 0;

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download','handsomeboy')
    link.textContent = "Download Image"
    strip.insertBefore(link,strip.firstChild);
}

video.addEventListener('canplay',paintToCanvas);

getVideo();
