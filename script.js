//Model
var userInput;
var userSubmitted = false;
var template;
var gridTotal;
var cellSize;
var cells;

var grid = [];

//View
let closeDiv = `</div>`

let gridContainer = `
<div id= "grid" class="grid-container">

`

let gridItem = `
<div id= "gridItem"
`

let closeGridItem = `
class="grid-item">
`

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

function gridView() {
  userGridSize();
  buildGrid();
  console.log(gridTotal);
}

function userGridSize() {
  userInput = parseInt(document.getElementById("input").value);
  template = document.getElementById("container");

  userSubmitted = true;
  
   gridTotal = userInput * userInput;
}

//Controller
function buildGrid() {
  for(let i = 1; i < gridTotal + 1; i++) { 
  gridContainer += gridItem + i + closeGridItem + i + closeDiv;
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
  console.log(cellSize);
}