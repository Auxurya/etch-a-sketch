const container = document.getElementById('container');

for (i = 0; i < 256; i++) {
    let squareDiv = document.createElement('div');
    squareDiv.classList.add("square");
    container.appendChild(squareDiv);
};

const squares = document.querySelectorAll('.square');

for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseenter', e => e.target.classList.add('mouseenter'));
};