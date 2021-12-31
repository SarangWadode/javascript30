const moles = document.querySelectorAll('.mole')
const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
let lasthole
let timeUp = false
let score = 0

function randomTime(min,max) {
    return Math.round(Math.random() * (max - min) + min)
}

function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index]
    if (hole === lasthole) {
        console.log('Opps! this is the same hole')
        return randomHole(holes)
    }
    lasthole = hole
    return hole
}

function peep() {
    const time = randomTime(300,2000)
    const hole = randomHole(holes)
    hole.classList.add('up')
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep()
    },time)
}

function startGame() {
    timeUp = false;
    peep();
    scoreBoard.textContent = 0;
    score = 0;
    setTimeout(() => {
        timeUp = true
    },10000)
}

function handleClick(e) {
    console.log(e)
    if (!e.isTrusted) return;
    score++
    scoreBoard.textContent = score;

}

moles.forEach(mole => mole.addEventListener('click',handleClick))
