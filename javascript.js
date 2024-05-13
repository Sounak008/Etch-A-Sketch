let can = document.querySelector('#canvas');
let gridBox;
let boxes = 16;


let button = document.getElementById('btn');
function promptFunction() {
    boxes = Number(prompt("Enter square size", "16"));
    createGrid();
}

button.onclick = promptFunction;

function createGrid() {

can.innerHTML = ' ';

for(let i = 1; i <= boxes*boxes; i++){
gridBox = document.createElement('div');
can.appendChild(gridBox);
gridBox.classList.add('gridBox');
gridBox.style.width = `calc(100%/${boxes})`;
gridBox.style.height = `calc(100%/${boxes})`;
}


let gridBoxHover = document.querySelectorAll('.gridBox')
gridBoxHover.forEach((gridBox) =>
    gridBox.addEventListener('mouseover', () => {
        gridBox.classList.add('gridHover');
})
)
}
createGrid();
