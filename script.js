//Model
var userInput;
var template;
var gridTotal;
var cellSize;
var cells;
var item;
var targetId;
var y = 0;

var hintInt = 0;
var hintString = "";
var hintStringAdd = "";
var x = 0;

var solution = [];
var playerSelected = [];
var playerXMarkerSelected = [];
var grid = [];

var userSubmitted = false;
var markerBool = true;
var xMarkerBool = false;

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
  solutionHints();
  playerSelectionArray();
  playerSelection();
  console.log(solution);
  console.log(playerSelected);
  console.log(playerXMarkerSelected);
}

function userGridSize() {
  userInput = parseInt(document.getElementById("input").value);
  template = document.getElementById("container");

  userSubmitted = true;
  
   gridTotal = userInput * userInput;
}

function solutionHints() {
  rowHints();

  for(let i = 1; i < userInput + 1; i++) {
    for(let a = 0; a < userInput; a++) {
      if(solution[a][i - 1] == true) {
        hintInt++;
      } else if(solution[a][i - 1] == false || a == userInput - 1) {
        if(hintInt != 0) {
         hintString += hintInt;
        } 
        hintInt = 0;
      }
    }
    if(hintInt != 0) {
      hintString += hintInt;
     } 
     hintInt = 0;

    document.getElementById("column" + i).innerHTML = hintString;
    hintString = "";
  }
}

function playerSelection() {
  initializeGrid();

  document.addEventListener('click', (e) => {
    let elementId = e.target.id;

    if (document.getElementById(elementId).className == "grid-item") {
        console.log(elementId);
    } else { 
        console.log("Non Grid Item.");
    }

    for(let i = 0; i < grid.length; i++) {
      for(let a = 0; a < grid[i].length; a++) {
        if(grid[i][a] == elementId) {
          if(playerSelected[i][a] == false) {
            playerSelected[i][a] = true;
            document.getElementById(elementId).style.backgroundColor = "black";
          } else {
            playerSelected[i][a] = false;
            document.getElementById(elementId).style.backgroundColor = "white";
          }
        }
      }
    }
    console.log(playerSelected);
    winCondition();
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
        gridContainer += gridItem + i + closeGridItem + gridRow + ((i + userInput - 1) / userInput) + closeGridRow + i + closeDiv + closeDiv;
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
    playerXMarkerSelected[i] = [];
    for(let a = 0; a < userInput; a++) {
      playerSelected[i][a] = false;
      playerXMarkerSelected[i][a] = false;
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

function winCondition() {
  if(JSON.stringify(playerSelected) === JSON.stringify(solution)) {
    console.log("You Win!");
    document.getElementById("win").innerHTML = "<h1>You Win!</h1>";
  }
}

function markerFlags() {
  if(markerBool == false) {
    document.getElementById("marker").style.backgroundColor = "black";
    document.getElementById("xMarker").style.backgroundColor = "lightgray";
    markerBool = true;
    xMarkerBool = false;
  } else {
    document.getElementById("marker").style.backgroundColor = "lightgray";
    document.getElementById("xMarker").style.backgroundColor = "black";
    markerBool = false;
    xMarkerBool = true;
  }
}

function rowHints() {
  for(let i = 1; i < userInput + 1; i++) {
    for(let a = 0; a < userInput; a++) {
      if(solution[i - 1][a] == true) {
        hintInt++;
      } else if(solution[i - 1][a] == false || a == userInput - 1) {
        if(hintInt != 0) {
         hintString += hintInt;
        } 
        hintInt = 0;
      }
    }
    if(hintInt != 0) {
      hintString += hintInt;
     } 
     hintInt = 0;

    document.getElementById("row" + i).innerHTML = hintString;
    hintString = "";
  }
}