const parent = document.getElementById("grid");

const children = parent.children;
const childrenChild = parent.children.childrenChild;

let index = -1;

var row1 = [];
var rowString = [];
let rowCount = 0;
var rowStringResult = "";

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
    row1.push({yes: "yes"})
  }
  else {
    row1.push({no: "no"})
  }

  if (children[i].id === "gridItem5") {
    break;
  }
}
  console.log(row1);

for(let i = 0; i < row1.length; i++) {
  if(row1[i].yes == "yes") {
    rowCount++;
  }
  else {
    if(rowCount != "0") {
    rowString.push({result: "" + rowCount})
    }
    console.log(rowCount);
    rowCount = 0;
  }
}

if(rowCount != "0") {
  rowString.push({result: "" + rowCount})
  }

console.log(rowCount);
console.log(rowString);

for(let i = 0; i < rowString.length; i++) {
  rowStringResult += rowString[i].result + " ";
}

if(rowStringResult == "") {
  rowStringResult = "0";
}

console.log(rowStringResult);
document.getElementById("row1").innerHTML = rowStringResult;

  const onClick = (event) => {
      console.log(event.target.id);
      document.getElementById(event.target.id).style.backgroundColor = "red";
  }
  window.addEventListener('click', onClick);