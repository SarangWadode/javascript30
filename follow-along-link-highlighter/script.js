const links = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink() {
    const coords = this.getBoundingClientRect();
    console.log(coords);
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
}

links.forEach(link => {
    link.addEventListener('mouseenter',highlightLink)
})
