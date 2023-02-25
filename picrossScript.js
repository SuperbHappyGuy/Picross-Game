//Model
var userInput;
var template;
var gridTotal;
var cellSize;
var cells;

var hintInt = 0;
var hintString = "";

var solution = [];
var playerSelected = [];
var playerXMarkerSelected = [];
var grid = [];

var userSubmitted = false;
var win = false;

var timers;
var score = 0;

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
  timer();
  userGridSize();
  buildGrid();
  solutionBuild();
  solutionHints();
  playerSelectionArray();
  playerSelection();
  console.log(solution);
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

     if(hintString == "") {
      hintString = "0";
     }

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
          if(playerSelected[i][a] == false && playerXMarkerSelected[i][a] == false) {
            playerSelected[i][a] = true;
            document.getElementById(elementId).style.backgroundColor = "black";
          } else if(playerSelected[i][a] == true && playerXMarkerSelected[i][a] == false) {
            playerSelected[i][a] = false;
            playerXMarkerSelected[i][a] = true;
            document.getElementById(elementId).style.backgroundColor = "red";
          } else if(playerXMarkerSelected[i][a] == true && playerSelected[i][a] == false) {
            playerXMarkerSelected[i][a] = false;
            document.getElementById(elementId).style.backgroundColor = "white";
          }
        }
      }
    }
    console.log(playerSelected);
    console.log(playerXMarkerSelected);
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
  if(JSON.stringify(playerSelected) === JSON.stringify(solution) && win == false) {
    console.log("You Win!");
    document.getElementById("win").innerHTML = `<h1>You Win!</h1>
                                                Name: <input id= "scoreName" type="text" name="score">
                                                <input id="btn" type="button" onclick="postScore()" value="Submit">
                                               `;
    win = true;
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

     if(hintString == "") {
      hintString = "0";
     }

    document.getElementById("row" + i).innerHTML = hintString;
    hintString = "";
  }
}

function timer() {
  var sec = 0;
  var min = 0;
  var hour = 0;
  timers = setInterval(function(){
    if(sec == 60) {
      sec = 0;
      min++;
    }
    if(min == 60) {
      min = 0;
      hour++;
    }
    document.getElementById('time').innerHTML= hour + ":" + min + ":" + sec;

    if(win == false) {
      sec++;
      score++;
    }
    
  }, 1000);
}