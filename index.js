// top level elements
const $pixelPainter = document.getElementById('pixelPainter');
const $gridContainer = document.getElementById('gridContainer');
const $paletteContainer = document.getElementById('paletteContainer');

// application state
let $selectedColor = null;

// add desired number of cell elements in the grid-container (and add to the DOM)
for (let j = 0; j < 64; j++) {
    const $cell = document.createElement('DIV');
    $cell.className = 'cell';
    $cell.addEventListener('click', colorTheCell);
    $gridContainer.appendChild($cell);
}

// palette colors
const paletteColors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'black',
    'gray',
    'white'
];

// add cell elements to the palette-container
for (let k = 0; k < paletteColors.length; k++) {
    const $paletteCell = document.createElement('DIV');
    $paletteCell.className = 'paletteCell';
    $paletteCell.style.backgroundColor = paletteColors[k];
    $paletteCell.addEventListener('click', paletteSelection);
    $paletteContainer.appendChild($paletteCell);
}

function paletteSelection(y) {
    $selectedColor = y.target.style.backgroundColor;
}

let allTheCells = document.getElementsByClassName("cell");

for (let i = 0; i < allTheCells.length; i++) {
    allTheCells[i].addEventListener("click", colorTheCell);
}

function colorTheCell(x) {
  x.target.style.backgroundColor = $selectedColor;
}