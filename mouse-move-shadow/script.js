const hero = document.querySelector('.hero');

function moveShadow(e) {
    const head = this.querySelector('h1');
    const x = e.clientX;
    const y = e.clientY;
    head.style.textShadow = `${x/10}px ${y/10}px 0 rgb(156, 55, 55)`;
    console.log(e.clientX)
    // console.log(head.style.textShadow)
}
hero.addEventListener('mousemove',moveShadow);
