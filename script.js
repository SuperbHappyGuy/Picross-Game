const parent = document.getElementById("grid");

const children = parent.children;

let index = -1;

for (let i = 0; i < children.length; i++) {
  if (children[i].id === "gridItem5") {
    index = i;
    break;
  }
}

console.log(index); // 👉️ 2