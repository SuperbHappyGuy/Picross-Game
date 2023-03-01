//Model
var userInput;
var template;
var gridTotal;
var cellSize;
var cells;

var cellIncrement;

var hintInt = 0;
var hintString = "";

var solution = [];
var playerSelected = [];
var playerXMarkerSelected = [];
var grid = [];
var fullGrid = [];
var gridIDs = [];
var allTrue = [];

var userSubmitted = false;
var win = false;
var errorChecked = false;
var mouseIsDown = false;
var leftMouse = false;
var rightMouse = false;

var timers;
var score = 0;
var sec = 0;
var min = 0;
var hour = 0;

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
  getLeaderBoard(publicList[userInput - 2]);
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
         hintString += hintInt + "<br>";
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

  document.addEventListener('mousedown', (e) => {
    mouseIsDown = true;
    let elementId = e.target.id;

    if (document.getElementById(elementId).className == "grid-item") {
        console.log(elementId);
    } else { 
        console.log("Non Grid Item.");
    }

    for(let i = 0; i < grid.length; i++) {
      for(let a = 0; a < grid[i].length; a++) {
        if(grid[i][a] == elementId) {
          if(e.button == 0 && playerSelected[i][a] == false) {
            leftMouse = true;
            playerSelected[i][a] = true;
            playerXMarkerSelected[i][a] = false;
            document.getElementById(elementId).style.backgroundColor = "black";
          } else if(playerSelected[i][a] == true && e.button == 0) {
            leftMouse = true;
            playerSelected[i][a] = false;
            document.getElementById(elementId).style.backgroundColor = "white";
            document.getElementById(elementId).style.backgroundImage = "none";
          }
          
          if(e.button == 2 && playerXMarkerSelected[i][a] == false) {
            rightMouse = true;
            playerSelected[i][a] = false;
            playerXMarkerSelected[i][a] = true;
            document.getElementById(elementId).style.backgroundImage = "url(./Imgs/xMarker.png)";
            document.getElementById(elementId).style.backgroundSize = "90px 90px";
            document.getElementById(elementId).style.backgroundColor = "white";
          } else if(playerXMarkerSelected[i][a] == true && e.button == 2) {
            rightMouse = true;
            playerXMarkerSelected[i][a] = false;
            document.getElementById(elementId).style.backgroundColor = "white";
            document.getElementById(elementId).style.backgroundImage = "none";
          }
        }
      }
    }
    if(errorChecked == false) {
      errorCheck();
    }
    console.log(fullGrid);
    console.log(allTrue);
    winCondition();
  });

  document.addEventListener(`mouseup`, (event) => {
    mouseIsDown = false;
    leftMouse = false;
    rightMouse = false;
  })

  document.addEventListener('contextmenu', (event) => {
      let elementId = event.target.id;

      if (document.getElementById(elementId).className == "grid-item") {
      event.preventDefault();
      } 
    });

    document.addEventListener('mouseover', (event) => {
      let elementId = event.target.id;

      if (document.getElementById(elementId).className == "grid-item") {
        for(let i = 0; i < grid.length; i++) {
          for(let a = 0; a < grid[i].length; a++) {
            if(grid[i][a] == elementId) {
              for(let x = 0; x < userInput; x++) {
                document.getElementById(grid[i][(a % 1) + x]).style.boxShadow = "inset 0 0 0 1000px rgba(0,0,255,0.12)";
                document.getElementById(grid[(i % 1) + x][a]).style.boxShadow = "inset 0 0 0 1000px rgba(0,0,255,0.12)";
              }
            }
          }
        }
      }
    });

    document.addEventListener('mouseout', (event) => {
      let elementId = event.target.id;

      if (document.getElementById(elementId).className == "grid-item") {
        for(let i = 0; i < grid.length; i++) {
          for(let a = 0; a < grid[i].length; a++) {
            if(grid[i][a] == elementId) {
              for(let x = 0; x < (userInput); x++) {
                document.getElementById(grid[i][(a % 1) + x]).style.boxShadow = "inset 0 0 0 1000px rgba(0,0,0,0.0)";
                document.getElementById(grid[(i % 1) + x][a]).style.boxShadow = "inset 0 0 0 1000px rgba(0,0,0,0)";
              }
            }
          }
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

      if(rand >= 45) {
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
      if(errorChecked == false) {
        errorCheck();
      }
    }
  }, 1000);
}

function errorCheck() {
  for(let i = 0; i < userInput; i++) {
    fullGrid[i] = [];
    allTrue[i] = [];
    for(let a = 0; a < userInput; a++) {
      allTrue[i][a] = true;

      if(playerSelected[i][a] == true) {
        fullGrid[i][a] = true;
      }

      if(playerXMarkerSelected[i][a] == true) {
        fullGrid[i][a] = true;
      }
    }
  }
  if(JSON.stringify(fullGrid) === JSON.stringify(allTrue)) {
    solutionCheck();
    errorChecked = true;
  }
}

function solutionCheck() {
  for(let i = 0; i < userInput; i++) {
    for(let a = 0; a < userInput; a++) {
      cellIncrement++;
      if(playerSelected[i][a] != solution[i][a]) {
        document.getElementById(grid[i][a]).style.backgroundcolor = "red";
        hour++;
        score += 3600;
      }

      if(playerXMarkerSelected[i][a] == solution[i][a]) {
        document.getElementById(grid[i][a]).style.backgroundColor = "red";
        
        hour++;
        score += 3600;
      }
    }
  }
}