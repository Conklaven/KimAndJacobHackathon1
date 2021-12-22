let restore = document.body.innerHTML
console.log(restore)

let toppingTwo = document.getElementById("imgthree");
let toppingThree = document.getElementById("imgfour");
let toppingFour = document.getElementById("imgfive");
let toppingFive = document.getElementById("imgsix");
let toppingSix = document.getElementById("imgseven");


toppingTwo.addEventListener("dragstart", startToDrag);
toppingThree.addEventListener("dragstart", startToDrag);
toppingFour.addEventListener("dragstart", startToDrag);
toppingFive.addEventListener("dragstart", startToDrag);
toppingSix.addEventListener("dragstart", startToDrag);



function startToDrag(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    console.log(e.target.id);
}

let dropbox = document.getElementById("imgOne");
dropbox.addEventListener("dragover", over)
dropbox.addEventListener("drop", dropping)

function over(e) {
    e.preventDefault();
    console.log("hi")
}

let price = document.getElementById("actualPrice")

function dropping(e) {
    // e.preventDefault();
    let dataItem = e.dataTransfer.getData("text/plain");
    let draggedItem = document.getElementById(dataItem);
    dropbox.appendChild(draggedItem);
    let moved = document.getElementById(dataItem)
    moved.classList.add("after");
    price.textContent = (parseFloat(price.textContent) + 5).toFixed(2);
    let p = moved.id
    let label = document.getElementById(`label${p}`)
    label.style.display = "none"
}
let reset = document.getElementById("reset")
reset.addEventListener("click", resetPizza)

function resetPizza() {
    window.location.reload();
}