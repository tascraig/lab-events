const canvas = document.getElementById('canvas');
const currentColor = document.getElementById('current-color'); //create a variable that represents the current color
const colors = document.querySelectorAll('.color');

const handleMouseOver = (event) => {
    event.target.style.background = currentColor.style.background;
}

//create our cells, add event listeners to them, and append them to the canvas
for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', handleMouseOver)
    canvas.append(cell);
}

//add event listeners to each color
for (let color of colors) {
    color.addEventListener('click', () => {
        currentColor.style.background = color.style.background
    })
}