const parent = document.getElementById("grid");

const children = parent.children;
const childrenChild = parent.children.childrenChild;

let index = -1;

var column = [];
var column2 = [];
var column3 = [];
var column4 = [];
var column5 = [];
var columnString = [];
var columnString2 = [];
var columnString3 = [];
var columnString4 = [];
var columnString5 = [];
let columnCount = 0;
let columnCount2 = 0;
let columnCount3 = 0;
let columnCount4 = 0;
let columnCount5 = 0;
var verticalString = "";
var verticalString2 = "";
var verticalString3 = "";
var verticalString4 = "";
var verticalString5 = "";
var columnStringResult = "";
var columnStringResult2 = "";
var columnStringResult3 = "";
var columnStringResult4 = "";
var columnStringResult5 = "";
var row = [];
var row2 = [];
var row3 = [];
var row4 = [];
var row5 = [];
var rowString = [];
var rowString2 = [];
var rowString3 = [];
var rowString4 = [];
var rowString5 = [];
let rowCount = 0;
let rowCount2 = 0;
let rowCount3 = 0;
let rowCount4 = 0;
let rowCount5 = 0;
var rowStringResult = "";
var rowStringResult2 = "";
var rowStringResult3 = "";
var rowStringResult4 = "";
var rowStringResult5 = "";

for (let i = 0; i < children.length; i++) {
  let rand = Math.floor(Math.random() * 100) + 1;

if (rand <= 50) {
    //console.log("less");
    document.getElementById(children[i].id).style.backgroundColor = "white";
}
else {
    //console.log("greater");
    document.getElementById(children[i].id).style.backgroundColor = "black";
}
}

for (let i = 0; i < children.length; i++) {
  if(document.getElementById(children[i].id).style.backgroundColor == "black") {
    row.push({yes: "yes"})
    if(i > 4) {
     row2.push({yes: "yes"})
    }
    if(i > 9) {
      row3.push({yes: "yes"})
     }
     if(i > 14) {
      row4.push({yes: "yes"})
     }
     if(i > 19) {
      row5.push({yes: "yes"})
     }
  }
  else {
    row.push({no: "no"})
    if(i > 4) {
      row2.push({no: "no"})
     }
     if(i > 9) {
      row3.push({no: "no"})
     }
     if(i > 14) {
      row4.push({no: "no"})
     }
     if(i > 19) {
      row5.push({no: "no"})
     }
  }
}

for(let i = 0; i < 5; i++) {
  column.push(row[i * 5]);
  column2.push(row[i * 5 + 1]);
  column3.push(row[i * 5 + 2]);
  column4.push(row[i * 5 + 3]);
  column5.push(row[i * 5 + 4]);
}

for(let i = 0; i < 5; i++) {
  if(column[i].yes == "yes") {
    columnCount++;
  }
  else {
    if(columnCount != "0") {
    columnString.push({result: "" + columnCount})
    }
    columnCount = 0;
  }

  if(column2[i].yes == "yes") {
    columnCount2++;
  }
  else {
    if(columnCount2 != "0") {
    columnString2.push({result: "" + columnCount2})
    }
    columnCount2 = 0;
  }

  if(column3[i].yes == "yes") {
    columnCount3++;
  }
  else {
    if(columnCount3 != "0") {
    columnString3.push({result: "" + columnCount3})
    }
    columnCount3 = 0;
  }

  if(column4[i].yes == "yes") {
    columnCount4++;
  }
  else {
    if(columnCount4 != "0") {
    columnString4.push({result: "" + columnCount4})
    }
    columnCount4 = 0;
  }

  if(column5[i].yes == "yes") {
    columnCount5++;
  }
  else {
    if(columnCount5 != "0") {
    columnString5.push({result: "" + columnCount5})
    }
    columnCount5 = 0;
  }

  if(row[i].yes == "yes") {
    rowCount++;
  }
  else {
    if(rowCount != "0") {
    rowString.push({result: "" + rowCount})
    }
    rowCount = 0;
  }

  if(row2[i].yes == "yes") {
    rowCount2++;
  }
  else {
    if(rowCount2 != "0") {
    rowString2.push({result2: "" + rowCount2})
    }
    rowCount2 = 0;
  }

  if(row3[i].yes == "yes") {
    rowCount3++;
  }
  else {
    if(rowCount3 != "0") {
    rowString3.push({result3: "" + rowCount3})
    }
    rowCount3 = 0;
  }

  if(row4[i].yes == "yes") {
    rowCount4++;
  }
  else {
    if(rowCount4 != "0") {
    rowString4.push({result4: "" + rowCount4})
    }
    rowCount4 = 0;
  }
  if(row5[i].yes == "yes") {
    rowCount5++;
  }
  else {
    if(rowCount5 != "0") {
    rowString5.push({result5: "" + rowCount5})
    }
    rowCount5 = 0;
  }
}

if(rowCount != "0") {
  rowString.push({result: "" + rowCount})
  }
  if(rowCount2 != "0") {
    rowString2.push({result2: "" + rowCount2})
    }
    if(rowCount3 != "0") {
      rowString3.push({result3: "" + rowCount3})
      }
      if(rowCount4 != "0") {
        rowString4.push({result4: "" + rowCount4})
        }
        if(rowCount5 != "0") {
          rowString5.push({result5: "" + rowCount5})
          }
          if(columnCount != "0") {
            columnString.push({result: "" + columnCount})
            }
            if(columnCount2 != "0") {
              columnString2.push({result: "" + columnCount2})
              }
              if(columnCount3 != "0") {
                columnString3.push({result: "" + columnCount3})
                }
                if(columnCount4 != "0") {
                  columnString4.push({result: "" + columnCount4})
                  }
                  if(columnCount5 != "0") {
                    columnString5.push({result: "" + columnCount5})
                    }
for(let i = 0; i < rowString.length; i++) {
  rowStringResult += rowString[i].result + " ";
}
for(let i = 0; i < rowString2.length; i++) {
  rowStringResult2 += rowString2[i].result2 + " ";
}
for(let i = 0; i < rowString3.length; i++) {
  rowStringResult3 += rowString3[i].result3 + " ";
}
for(let i = 0; i < rowString4.length; i++) {
  rowStringResult4 += rowString4[i].result4 + " ";
}
for(let i = 0; i < rowString5.length; i++) {
  rowStringResult5 += rowString5[i].result5 + " ";
}
for(let i = 0; i < columnString.length; i++) {
  columnStringResult += columnString[i].result + " ";
}
for(let i = 0; i < columnString2.length; i++) {
  columnStringResult2 += columnString2[i].result + " ";
}
for(let i = 0; i < columnString3.length; i++) {
  columnStringResult3 += columnString3[i].result + " ";
}
for(let i = 0; i < columnString4.length; i++) {
  columnStringResult4 += columnString4[i].result + " ";
}
for(let i = 0; i < columnString5.length; i++) {
  columnStringResult5 += columnString5[i].result + " ";
}

if(rowStringResult == "") {
  rowStringResult = "0";
}
if(rowStringResult2 == "") {
  rowStringResult2 = "0";
}
if(rowStringResult3 == "") {
  rowStringResult3 = "0";
}
if(rowStringResult4 == "") {
  rowStringResult4 = "0";
}
if(rowStringResult5 == "") {
  rowStringResult5 = "0";
}
if(columnStringResult == "") {
  columnStringResult = "0";
}
if(columnStringResult2 == "") {
  columnStringResult2 = "0";
}
if(columnStringResult3 == "") {
  columnStringResult3 = "0";
}
if(columnStringResult4 == "") {
  columnStringResult4 = "0";
}
if(columnStringResult5 == "") {
  columnStringResult5 = "0";
}

console.log(columnStringResult);

document.getElementById("row").innerHTML = rowStringResult;
document.getElementById("row2").innerHTML = rowStringResult2;
document.getElementById("row3").innerHTML = rowStringResult3;
document.getElementById("row4").innerHTML = rowStringResult4;
document.getElementById("row5").innerHTML = rowStringResult5;

document.getElementById("column").innerHTML = columnStringResult.charAt(0) + "<br>" + columnStringResult.charAt(2) + "<br>" + columnStringResult.charAt(4);
document.getElementById("column2").innerHTML = columnStringResult2.charAt(0) + "<br>" + columnStringResult2.charAt(2) + "<br>" + columnStringResult2.charAt(4);
document.getElementById("column3").innerHTML = columnStringResult3.charAt(0) + "<br>" + columnStringResult3.charAt(2) + "<br>" + columnStringResult3.charAt(4);
document.getElementById("column4").innerHTML = columnStringResult4.charAt(0) + "<br>" + columnStringResult4.charAt(2) + "<br>" + columnStringResult4.charAt(4);
document.getElementById("column5").innerHTML = columnStringResult5.charAt(0) + "<br>" + columnStringResult5.charAt(2) + "<br>" + columnStringResult5.charAt(4);

  const onClick = (event) => {
      console.log(event.target.id);
      document.getElementById(event.target.id).style.backgroundColor = "red";
  }
  window.addEventListener('click', onClick);