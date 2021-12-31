const nav = document.querySelector('.top');
const elements = document.querySelectorAll('.cool > li')
const arrow = document.querySelector('.dropdownBackground')

function mouseEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'),150)
    arrow.classList.add('open')

    const dropdown = this.querySelector('.dropdown');
    dropdown.classList.add('open')

    const dropdowncoords = dropdown.getBoundingClientRect();
    const navcoords = nav.getBoundingClientRect();
    const coords = {
        width: dropdowncoords.width,
        height: dropdowncoords.height,
        top: dropdowncoords.top - navcoords.top,
        left: dropdowncoords.left - navcoords.left
    }

    arrow.style.setProperty('width', `${coords.width}px`);
    arrow.style.setProperty('height', `${coords.height}px`);
    arrow.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function mouseLeave() {
    this.classList.remove('trigger-enter','trigger-enter-active');
    this.classList.remove('trigger-enter-active')
    arrow.classList.remove('open')
}

elements.forEach(element => {
    element.addEventListener('mouseenter',mouseEnter)
    element.addEventListener('mouseleave',mouseLeave)
})
