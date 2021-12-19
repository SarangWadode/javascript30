const links = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink() {
    const coords = this.getBoundingClientRect();
    const newCoords = {
        width: coords.width,
        height: coords.height,
        left: coords.left + window.scrollX,
        top: coords.top + window.scrollY
    }
    console.log(newCoords.top,newCoords.left);
    highlight.style.width = `${newCoords.width}px`;
    highlight.style.height = `${newCoords.height}px`;
    highlight.style.transform = `translate(${newCoords.left}px, ${coords.top}px)`;
    console.log(highlight.style.width,highlight.style.height)
}

links.forEach(link => {
    link.addEventListener('mouseenter',highlightLink)
})
