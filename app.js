const board = document.querySelector('#board');
const colors = ['rgb(161, 226, 40)', 'rgb(33, 101, 248)', 'rgb(242, 10, 168)', 'rgb(241, 248, 33)', 'rgb(46, 209, 6)'];
const SQUARES_NUMBER = 1000;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => 
        setColor(square)
    )

    square.addEventListener('mouseleave', () => 
    removeColor(square)
)

    board.append(square);
}

function setColor(elem) {
    const color = getRandomColor();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elem) {
    elem.style.backgroundColor = '#1d1d1d';
    elem.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index];
}