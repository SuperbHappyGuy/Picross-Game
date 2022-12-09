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

let mainHtml = `
<div id= "grid" class="grid-container">
<div id= "gridItem1" class="grid-item">
  <div id= "row" class= "popoverSide">test</div>
  <div id= "column" class= "popover">test</div><div class="gridNumb">1</div></div>
<div id= "gridItem2" class="grid-item">
  <div id= "column2" class= "popover">test</div><div class="gridNumb">2</div></div>
<div id= "gridItem3" class="grid-item">
  <div id= "column3" class= "popover">test</div><div class="gridNumb">3</div></div>  
<div id= "gridItem4" class="grid-item">
  <div id= "column4" class= "popover">test</div><div class="gridNumb">4</div></div>
<div id= "gridItem5" class="grid-item">
  <div id= "column5" class= "popover">test</div><div class="gridNumb">5</div></div>
<div id= "gridItem6" class="grid-item">
  <div id = "row2" class= "popoverSide">test</div><div class="gridNumb">6</div></div>  
<div id= "gridItem7" class="grid-item"><div class="gridNumb">7</div></div>
<div id= "gridItem8" class="grid-item"><div class="gridNumb">8</div></div>
<div id= "gridItem9" class="grid-item"><div class="gridNumb">9</div></div>
<div id= "gridItem10" class="grid-item"><div class="gridNumb">10</div></div>  
<div id= "gridItem11" class="grid-item">
  <div id= "row3" class= "popoverSide">test</div><div class="gridNumb">11</div></div>
<div id= "gridItem12" class="grid-item"><div class="gridNumb">12</div></div>
<div id= "gridItem13" class="grid-item"><div class="gridNumb">13</div></div>
<div id= "gridItem14" class="grid-item"><div class="gridNumb">14</div></div>
<div id= "gridItem15" class="grid-item"><div class="gridNumb">15</div></div>
<div id= "gridItem16" class="grid-item">
  <div id= "row4" class= "popoverSide">test</div><div class="gridNumb">16</div></div>
<div id= "gridItem17" class="grid-item"><div class="gridNumb">17</div></div>
<div id= "gridItem18" class="grid-item"><div class="gridNumb">18</div></div>
<div id= "gridItem19" class="grid-item"><div class="gridNumb">19</div></div>
<div id= "gridItem20" class="grid-item"><div class="gridNumb">20</div></div>
<div id= "gridItem21" class="grid-item">
  <div id= "row5" class= "popoverSide">test</div><div class="gridNumb">21</div></div>
<div id= "gridItem22" class="grid-item"><div class="gridNumb">22</div></div>
<div id= "gridItem23" class="grid-item"><div class="gridNumb">23</div></div>
<div id= "gridItem24" class="grid-item"><div class="gridNumb">24</div></div>
<div id= "gridItem25" class="grid-item"><div class="gridNumb">25</div></div>
</div>
`

function gridStart() {
  userGridSize();
  buildGrid();

  

  solutionBuild();
  solutionReader();
  playerSelectionArray();
  playerSelection();
  console.log(solution);
  console.log(playerSelected);
  //document.getElementById("gridItem" + 21).style.backgroundColor = "red";
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
        solution[i][a] = "yes";
      }
      else {
        solution[i][a] = "no";
      }
    }
  }
}

function playerSelection() {
  document.addEventListener('click', (e) =>
  {
    let elementId = e.target.id;

    if (document.getElementById(elementId).className == "grid-item") {
        console.log(elementId);
        
        document.getElementById(elementId).style.backgroundColor = "red";
    }
    else { 
        console.log("Non Grid Item.");
    }
  });
}

//Controller
function buildGrid() {
  for(let i = 1; i < gridTotal + 1; i++) {
    if(i < userInput + 1){
      gridContainer += gridItem + i + closeGridItem + gridColumn + i + closeGridColumn + i + closeDiv + closeDiv;
    }
    else if(i == (i * userInput) - (userInput - 1)) {
      gridContainer += gridItem + i + closeGridItem + gridRow + i + closeGridRow + i + closeDiv + closeDiv;
    }
    else {
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

      }
      else {
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