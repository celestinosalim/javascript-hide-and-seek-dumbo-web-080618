// const getFirstSelector = ()=> {document.getElementById(selector)}
// debugger

function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function deepestChild() {
  return document.getElementById("grand-node").querySelectorAll("div")[3]
}

function increaseRankBy(n) {
  let lists = document.getElementById("app").querySelectorAll("ul.ranked-list li")
  for (let element of lists) {
    element.innerHTML=parseInt(element.innerHTML)+n;
  }
}
