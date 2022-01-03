const container = document.getElementById('container');
const userInput = prompt('Choose a grid width/length:')

for (i = 0; i < userInput; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    container.appendChild(rowDiv);
    for (j = 0; j < userInput; j++) {
        let squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        rowDiv.appendChild(squareDiv);
    };
};

const squares = document.querySelectorAll('.square');

for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseenter', e => e.target.classList.add('mouseenter'));
};