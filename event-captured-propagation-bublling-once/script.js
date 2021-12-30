const div = document.querySelectorAll('div')
const button = document.querySelector('button');

function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation();
}

div.forEach(div => div.addEventListener('click', logText , {
    capture: false,
    // once: true
}))

function clicked() {
    console.log('Clicked!!!!')
}

button.addEventListener('click', clicked , {
    once: true
});
