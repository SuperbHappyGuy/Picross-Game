const parent = document.getElementById("grid");

const children = parent.children;
const childrenChild = parent.children.childrenChild;

let index = -1;


for (let i = 0; i < children.length; i++) {
  let rand = Math.floor(Math.random() * 100) + 1;

if (rand <= 50) {
    console.log("less");
    document.getElementById(children[i].id).style.backgroundColor = "white";
}
else {
    console.log("greater");
    document.getElementById(children[i].id).style.backgroundColor = "darkgrey";
}

  if (children[i].id === "gridItem5") {
    index = i;
  }
}

console.log(index); // 👉️ 2

  const onClick = (event) => {
      console.log(event.target.id);
      document.getElementById(event.target.id).style.backgroundColor = "red";
  }
  window.addEventListener('click', onClick);