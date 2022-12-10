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

//View
let closeDiv = `</div>`

let gridContainer = `
<div id= "grid" class="grid-container">

`
let gridItem = "<div id= gridItem"

let closeGridItem = `
class="grid-item">

`
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
  console.log(playerSelected);
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
  document.addEventListener('click', (e) =>
  {
    let elementId = e.target.id;

    if (document.getElementById(elementId).className == "grid-item") {
        //console.log(elementId);
        
        document.getElementById(elementId).style.backgroundColor = "red";
    } else { 
        console.log("Non Grid Item.");
    }
  });
}

//Controller
function buildGrid() {
  for(let i = 1; i < gridTotal + 1; i++) {
    if(i < userInput + 1){
      gridContainer += gridItem + i + closeGridItem + gridColumn + i + closeGridColumn + i + closeDiv + closeDiv;
    } else if(i == (i * userInput) - (userInput - 1)) {
      gridContainer += gridItem + i + closeGridItem + gridRow + i + closeGridRow + i + closeDiv + closeDiv;
    } else {
      gridContainer += gridItem + i + closeGridItem + i + closeDiv;
    }
    //console.log((i * userInput) - (userInput - 1));
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