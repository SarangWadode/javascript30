const hero = document.querySelector('.hero');

function moveShadow(e) {
    const head = this.querySelector('h1');
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    const x = e.clientX;
    const y = e.clientY;
    const walkX = Math.round(x/width*100 - 50);
    const walkY = Math.round(y/height*100 - 50);
    console.log(walkX,walkY)
    head.style.textShadow = `${walkX}px ${walkY}px 0 rgb(55, 153, 156)`
}
hero.addEventListener('mousemove',moveShadow);
