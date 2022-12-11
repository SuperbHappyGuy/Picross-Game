//Model
var userInput;
var userSubmitted = false;
var template;
var gridTotal;
var cellSize;
var cells;
var item;
var targetId;
var y = 0;

var solution = [];
var playerSelected = [];
var grid = [];



//View
let closeDiv = `</div>`

let gridContainer = `
<div id= "grid" class="grid-container">

`
let gridItem = "<div id= gridItem"

let closeGridItem = `
class="grid-item">

`
let gridNumb = "<div class= gridNumb>"

let gridColumn = "<div id= column" 

let closeGridColumn = ' class= "popover">test</div><div class="gridNumb">'

let gridRow = "<div id= row"

let closeGridRow = ' class= "popoverSide">test</div><div class="gridNumb">'

function gridStart() {
  userGridSize();
  buildGrid();
  solutionBuild();
  solutionReader();
  playerSelectionArray();
  playerSelection();
  console.log(solution);
  console.log(grid);
}

function userGridSize() {
  userInput = parseInt(document.getElementById("input").value);
  template = document.getElementById("container");

  userSubmitted = true;
  
   gridTotal = userInput * userInput;
}

function solutionReader() {
  for(let i = 0; i < userInput; i++) {
    for(let a = 0; a < userInput; a++) {
      if(solution[i][a] == true) {
        //solution[i][a] = "yes";
      } else {
        //solution[i][a] = "no";
      }
    }
  }
}

function playerSelection() {
  initializeGrid();

  document.addEventListener('click', (e) => {
    let elementId = e.target.id;

    if (document.getElementById(elementId).className == "grid-item") {
        console.log(elementId);
        
        document.getElementById(elementId).style.backgroundColor = "red";
    } else { 
        console.log("Non Grid Item.");
    }

    var result;
for( var i = 0, len = selected_products.length; i < len; i++ ) {
    if( selected_products[i][0] === 'r1' ) {
        result = selected_products[i];
        break;
    }
}
  });
}

//Controller
function buildGrid() {
  for(let i = 1; i < gridTotal + 1; i++) {
    if(i < userInput + 1){
      if(i == (i * userInput) - (userInput - 1)) {
        gridContainer += gridItem + i + closeGridItem + gridRow + i + closeGridRow + closeDiv + gridColumn + i + closeGridColumn + i + closeDiv + closeDiv;
      } else {
        gridContainer += gridItem + i + closeGridItem + gridColumn + i + closeGridColumn + i + closeDiv + closeDiv;
      }
    } else {
      if(i % userInput == 1) {
        gridContainer += gridItem + i + closeGridItem + gridRow + i + closeGridRow + i + closeDiv + closeDiv;
      } else {
        gridContainer += gridItem + i + closeGridItem + gridNumb + i + closeDiv + closeDiv;
      }
    }
  }

  if(userSubmitted == true) {
    template.innerHTML = gridContainer;
  }

  cells = 100/userInput;
  cellSize = 100/userInput + "% ";

  for(let i = 1; i < userInput; i++) {
    cellSize += cells + "% ";
  }

  document.getElementById("grid").style.gridTemplateColumns = cellSize;
}

function solutionBuild() {
  for(let i = 0; i < userInput; i++) {
    solution[i] = [];

    for(let a = 0; a < userInput; a++) {
      let rand = Math.floor(Math.random() * 100) + 1;
      let percent = Math.floor(Math.random() * 100) + 1;

      if(rand >= percent) {
        solution[i][a] = true;
      } else {
        solution[i][a] = false;
      }
    }
  }
}

function playerSelectionArray() {
  for(let i = 0; i < userInput; i++) {
    playerSelected[i] = [];
    for(let a = 0; a < userInput; a++) {
      playerSelected[i][a] = false;
    }
  }
}

function initializeGrid() {
  const parent = document.getElementById("grid");

  const children = parent.children;
  const childrenChild = parent.children.childrenChild;

  let x = 0;

  for(let i = 0; i < userInput; i++) {
    grid[i] = [];
      for(let a = 0; a < userInput; a++) {
        grid[i][a] = children[x].id;
        x++;
      } 
  }
}