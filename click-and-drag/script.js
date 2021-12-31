const items = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

function handleDown(e) {
    isDown = true;
    items.classList.add('active');
    startX = e.pageX - this.offsetLeft;
    scrollLeft = this.scrollLeft;
}

function handleUp() {
    isDown = false;
    items.classList.remove('active')
}

function handleLeave() {
    isDown = false;
    items.classList.remove('active')
}

function handleMove(e) {
    e.preventDefault();
    if(!isDown) return;
    x = e.pageX - this.offsetLeft;
    let walk = x - startX;
    console.log(walk)
    items.scrollLeft = scrollLeft - walk;
}

items.addEventListener('mousedown',handleDown)
items.addEventListener('mouseup',handleUp)
items.addEventListener('mouseleave',handleLeave)
items.addEventListener('mousemove',handleMove)
