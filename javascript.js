let can = document.querySelector("#canvas");
let gridBox;
let boxes = 20;

let button = document.getElementById("btn");
function promptFunction() {
  boxes = Number(prompt("Enter square size", "16"));
  if (boxes === 0 || boxes > 100)
  {
    alert("Enter values from 1 to 100")
  }
  else
  {
  createGrid();
  }
}

button.onclick = promptFunction;

function createGrid() {
  can.innerHTML = " ";

  for (let i = 1; i <= boxes * boxes; i++) {
    gridBox = document.createElement("div");
    can.appendChild(gridBox);
    gridBox.classList.add("gridBox");
    gridBox.style.width = `calc(100%/${boxes})`;
    gridBox.style.height = `calc(100%/${boxes})`;
    const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
    gridBox.style.setProperty('--main-bg-color', randomColor);
  }

  let gridBoxHover = document.querySelectorAll(".gridBox");
  gridBoxHover.forEach((gridBox) =>
    gridBox.addEventListener("mouseover", () => {
      gridBox.classList.add("gridHover");
    })
  );
}
createGrid();
