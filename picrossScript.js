//Model
var userInput = 0;
var template = "";
var gridTotal = 0;
var cellSize = 0;
var cells = 0;

var cellIncrement = 0;

var hintInt = 0;
var hintString = "";

var solution = [];
var playerSelected = [];
var playerXMarkerSelected = [];
var grid = [];
var fullGrid = [];
var gridIDs = [];
var allTrue = [];
var colHintsArray = [];
var rowHintsArray = [];

var userSubmitted = false;
var win = false;
var errorChecked = false;
var mouseIsDown = false;
var leftMouse = false;
var rightMouse = false;
var mobile = false;
var start = false;

var timers = 0;
var score = 0;
var sec = 0;
var min = 0;
var hour = 0;

var gridHintAmount = "";
var hintAmountLetter = "abcdefghijklmnopqrstuvwxyz";

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

let closeGridColumn = ' class= "popover">test</div><div id="columnHint'

let closeGridColumnInside = ' class= "popover">'

let gridRow = "<div id= row"

let closeGridRow = ' class= "popoverSide">test</div><div id="rowHint'

let closeGridRowInside = ` class= "popoverSide">`

let closeHint = '">'

function gridStart(size) {
  if(start == true) {
    clearGrid();
  }
  timer();
  userGridSize(size);
  buildGrid();
  solutionBuild();
  solutionHints();
  hintSquareAmount();
  playerSelectionArray();
  playerSelection();
  getLeaderBoard(publicList[userInput - 2]);
  start = true;
  size = 0;
}

function userGridSize(input) {

  userInput = input
  template = document.getElementById("container");

  userSubmitted = true;
  
   gridTotal = userInput * userInput;
   console.log(userInput);
}

function solutionHints() {
  rowHints();

  for(let i = 1; i < userInput + 1; i++) {
    colHintsArray[i - 1] = [];
    for(let a = 0; a < userInput; a++) {
      if(solution[a][i - 1] == true) {
        hintInt++;
      } else if(solution[a][i - 1] == false || a == userInput - 1) {
        if(hintInt != 0) {
         hintString += hintInt;
         colHintsArray[i - 1].push(hintInt);
        } 
        hintInt = 0;
      }
    }
      if(hintInt != 0) {
        hintString += hintInt;
        colHintsArray[i - 1].push(hintInt);
      } 
     hintInt = 0;

     if(hintString == "") {
      hintString = "0";
      colHintsArray[i - 1].push(0);
     }

    document.getElementById("column" + i).innerHTML = hintString;
    hintString = "";
  }
  console.log(colHintsArray);
}

function playerSelection() {
  initializeGrid();

  if(mobile == false) {
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
            document.getElementById(elementId).style.backgroundImage = "none";
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
    winCondition();
  });
}

  document.addEventListener('ontouchstart', (event) => {
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
            document.getElementById(elementId).style.backgroundImage = "none";
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
    winCondition();
  });

  document.addEventListener('ontouchmove', (event) => {
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

      if(mouseIsDown == true) {
        for(let i = 0; i < grid.length; i++) {
          for(let a = 0; a < grid[i].length; a++) {
            if(grid[i][a] == elementId) {
              if(leftMouse == true && playerSelected[i][a] == false) {
                playerSelected[i][a] = true;
                playerXMarkerSelected[i][a] = false;
                document.getElementById(elementId).style.backgroundColor = "black";
              } else if(playerSelected[i][a] == true && leftMouse == true) {
                playerSelected[i][a] = false;
                document.getElementById(elementId).style.backgroundColor = "white";
                document.getElementById(elementId).style.backgroundImage = "none";
              }
              
              if(rightMouse == true && playerXMarkerSelected[i][a] == false) {
                playerSelected[i][a] = false;
                playerXMarkerSelected[i][a] = true;
                document.getElementById(elementId).style.backgroundImage = "url(./Imgs/xMarker.png)";
                document.getElementById(elementId).style.backgroundSize = "90px 90px";
                document.getElementById(elementId).style.backgroundColor = "white";
              } else if(playerXMarkerSelected[i][a] == true && rightMouse == true) {
                playerXMarkerSelected[i][a] = false;
                document.getElementById(elementId).style.backgroundColor = "white";
                document.getElementById(elementId).style.backgroundImage = "none";
              }
            }
          }
        }
      }
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

    if(mobile == false) {
    document.addEventListener('mouseover', (event) => {
      let elementId = event.target.id;

      if (document.getElementById(elementId).className == "grid-item") {
        for(let i = 0; i < grid.length; i++) {
          for(let a = 0; a < grid[i].length; a++) {
            if(grid[i][a] == elementId) {
              for(let x = 0; x < userInput; x++) {
                document.getElementById(grid[i][(a % 1) + x]).style.boxShadow = "inset 0 0 0 1000px rgba(0,0,255,0.17)";
                document.getElementById(grid[(i % 1) + x][a]).style.boxShadow = "inset 0 0 0 1000px rgba(0,0,255,0.17)";
              }
            }
          }
        }
      }

      if(mouseIsDown == true) {
        for(let i = 0; i < grid.length; i++) {
          for(let a = 0; a < grid[i].length; a++) {
            if(grid[i][a] == elementId) {
              if(leftMouse == true && playerSelected[i][a] == false) {
                playerSelected[i][a] = true;
                playerXMarkerSelected[i][a] = false;
                document.getElementById(elementId).style.backgroundColor = "black";
              } else if(playerSelected[i][a] == true && leftMouse == true) {
                playerSelected[i][a] = false;
                document.getElementById(elementId).style.backgroundColor = "white";
                document.getElementById(elementId).style.backgroundImage = "none";
              }
              
              if(rightMouse == true && playerXMarkerSelected[i][a] == false) {
                playerSelected[i][a] = false;
                playerXMarkerSelected[i][a] = true;
                document.getElementById(elementId).style.backgroundImage = "url(./Imgs/xMarker.png)";
                document.getElementById(elementId).style.backgroundSize = "90px 90px";
                document.getElementById(elementId).style.backgroundColor = "white";
              } else if(playerXMarkerSelected[i][a] == true && rightMouse == true) {
                playerXMarkerSelected[i][a] = false;
                document.getElementById(elementId).style.backgroundColor = "white";
                document.getElementById(elementId).style.backgroundImage = "none";
              }
            }
          }
        }
      }
    });
  }

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

    document.addEventListener('touchmove', (event) => {
        event.preventDefault();
    });
}

//Controller
function hintSquareAmount() {
  for(let i = 1; i < userInput + 1; i++) {
    for(let a = 0; a < colHintsArray[i - 1].length - 1; a++) {
      gridHintAmount = gridColumn + i + hintAmountLetter[a] + closeGridColumnInside + colHintsArray[i - 1][a + 1] + closeDiv;
      document.getElementById("columnHint" + i).innerHTML += gridHintAmount;
      document.getElementById("column" + i).style.top = -200 + ((colHintsArray[i - 1].length - 2) * -93) + "px";
      document.getElementById("column" + i + hintAmountLetter[a]).style.top = -200 + (((colHintsArray[i - 1].length - 3) - a) * -93) + "px";
    }
    document.getElementById("column" + i).innerHTML = colHintsArray[i - 1][0];

    for(let a = 0; a < rowHintsArray[i - 1].length - 1; a++) {
      gridHintAmount = gridRow + i + hintAmountLetter[a] + closeGridRowInside + rowHintsArray[i - 1][a + 1] + closeDiv;
      document.getElementById("rowHint" + i).innerHTML += gridHintAmount;
      document.getElementById("row" + i).style.left = -142 + ((rowHintsArray[i - 1].length - 2) * -93) + "px";
      document.getElementById("row" + i + hintAmountLetter[a]).style.left = -142 + (((rowHintsArray[i - 1].length - 3) - a) * -93) + "px";
    }
    document.getElementById("row" + i).innerHTML = rowHintsArray[i - 1][0];
  }
}

function buildGrid() {
  for(let i = 1; i < gridTotal + 1; i++) {
    if(i < userInput + 1){
      if(i == (i * userInput) - (userInput - 1)) {
        gridContainer += gridItem + i + closeGridItem + gridRow + i + closeGridRow + i + closeHint + closeDiv + gridColumn + i + closeGridColumn + i + closeHint + closeDiv + closeDiv;
      } else {
        gridContainer += gridItem + i + closeGridItem + gridColumn + i + closeGridColumn + i + closeHint + closeDiv + closeDiv;
      }
    } else {
      if(i % userInput == 1) {
        gridContainer += gridItem + i + closeGridItem + gridRow + ((i + userInput - 1) / userInput) + closeGridRow + ((i + userInput - 1) / userInput) + closeHint + closeDiv + closeDiv;
      } else {
        gridContainer += gridItem + i + closeGridItem + closeDiv;
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
  //gridSpacers();
}

function solutionBuild() {
  for(let i = 0; i < userInput; i++) {
    solution[i] = [];

    for(let a = 0; a < userInput; a++) {
      let rand = Math.floor(Math.random() * 100) + 1;
      let percent = Math.floor(Math.random() * 100) + 1;

      if(rand >= 38) {
        solution[i][a] = true;
      } else {
        solution[i][a] = false;
      }
    }
  }
}
//Work in Progress
function gridSpacers() {
  if(userInput > 5) {
    for(let i = 0; i < userInput + 0; i++) {
      document.getElementById("gridItem" + ((userInput / 2) + (i * userInput))).style.borderRight = "5px solid rgba(0, 0, 255, 1)";
      document.getElementById("gridItem" + ((userInput / 2) + (i * userInput) + 1)).style.borderLeft = "5px solid rgba(0, 0, 255, 1)";
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
    rowHintsArray[i - 1] = [];
    for(let a = 0; a < userInput; a++) {
      if(solution[i - 1][a] == true) {
        hintInt++;
      } else if(solution[i - 1][a] == false || a == userInput - 1) {
        if(hintInt != 0) {
         hintString += hintInt;
         rowHintsArray[i - 1].push(hintInt);
        } 
        hintInt = 0;
      }
    }
    if(hintInt != 0) {
      hintString += hintInt;
      rowHintsArray[i - 1].push(hintInt);
     } 
     hintInt = 0;

     if(hintString == "") {
      hintString = "0";
      rowHintsArray[i - 1].push(0);
     }

    document.getElementById("row" + i).innerHTML = hintString;
    hintString = "";
  }
  console.log(rowHintsArray);
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

function mobileCheck() {
  if(/Android|iPhone/i.test(navigator.userAgent)) {
    mobile = true;
  }
}

function clearGrid() {
  userInput = 0;
  template = "";
  gridTotal = 0;
  cellSize = 0;
  cells = 0;
  cellIncrement = 0;
  hintInt = 0;
  hintString = "";
  solution = [];
  playerSelected = [];
  playerXMarkerSelected = [];
  grid = [];
  fullGrid = [];
  gridIDs = [];
  allTrue = [];
  colHintsArray = [];
  rowHintsArray = [];
  userSubmitted = false;
  win = false;
  errorChecked = false;
  mouseIsDown = false;
  leftMouse = false;
  rightMouse = false;
  mobile = false;
  start = false;
  timers = 0;
  score = 0;
  sec = 0;
  min = 0;
  hour = 0;
  gridHintAmount = 0;

  document.getElementById("grid").innerHTML = "";
  document.getElementById("container").innerHTML = "";
  document.getElementById('time').innerHTML = "";
}