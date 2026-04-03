const countid = document.getElementById("count");
let counts = 0;
function decremnt() {
  counts = counts - 1;
  console.log("DECREMENT", counts);
  countid.innerText = counts;
  uplodecolre();
}

function increment() {
  counts = counts + 1;
  console.log("INCREMENT", counts);
  countid.innerText = counts;
  incrmtcolre();
}

function rest() {
  counts = counts = 0;
  console.log("REST", counts);
  countid.innerText = counts;
  rescolor();
}

function uplodecolre() {
  countid.innerText = counts;
  countid.style.color = "#c2af09fd";
}
function incrmtcolre() {
  countid.innerText = counts;
  countid.style.color = "blue";
}
function rescolor() {
  countid.innerText = counts;
  countid.style.color = "red";
}
