const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
const test = document.querySelector('.sample')
navigator.geolocation.watchPosition(data => {
    console.log(data.coords)
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading})deg`;
    test.innerHTML += `<br> <p>Speed: ${data.coords.speed} Heading: ${data.coords.heading}</p>` 
}, (err) => {
    console.log("Please allow location to use this Compass and Speedometer :|")
})

