let can = document.querySelector('#canvas');
let gridBox;
for(let i = 1; i <= 16*16; i++){
gridBox = document.createElement('div');
can.appendChild(gridBox);
gridBox.classList.add('gridBox');
}

let gridBoxHover = document.querySelectorAll('.gridBox')
gridBoxHover.forEach((gridBox) => 
    gridBox.addEventListener('mouseover', () => {
        gridBox.classList.add('gridHover');
})
)
