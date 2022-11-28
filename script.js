const parent = document.getElementById("grid");

const children = parent.children;
const childrenChild = parent.children.childrenChild;

let index = -1;

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
    document.getElementById(children[i].id).style.backgroundColor = "darkgrey";
}
}

for (let i = 0; i < children.length; i++) {
  if(document.getElementById(children[i].id).style.backgroundColor == "darkgrey") {
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

  //if (children[i].id === "gridItem5") {
    //break;
  //}
}

for(let i = 0; i < 5; i++) {
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

console.log(rowString);
document.getElementById("row1").innerHTML = rowStringResult;
document.getElementById("row2").innerHTML = rowStringResult2;
document.getElementById("row3").innerHTML = rowStringResult3;
document.getElementById("row4").innerHTML = rowStringResult4;
document.getElementById("row5").innerHTML = rowStringResult5;

  const onClick = (event) => {
      console.log(event.target.id);
      document.getElementById(event.target.id).style.backgroundColor = "red";
  }
  window.addEventListener('click', onClick);