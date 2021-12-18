const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(data => {
    console.log(data.coords)
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading})deg`;
}, (err) => {
    console.log("Please allow location to use this Compass and Speedometer :|")
})
