const nav = document.querySelector('#main');

function fixedNav() {
    if ( nav.offsetTop < window.scrollY) {
        nav.classList.add('fixed')
    }
}
window.addEventListener('scroll',fixedNav)
