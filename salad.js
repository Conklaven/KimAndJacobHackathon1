let restore = document.body.innerHTML

let toppings = [{
        "name": "Lettuce",
        "image": "https://i.imgur.com/enr9wwI.png",
        "price": 1.00
    },
    {
        "name": "Red Onions",
        "image": "https://lamppostpizzaorange.com/wp-content/plugins/pizzatime/images/onions.png",
        "price": 1.50
    },
    {
        "name": "Green Olives",
        "image": "https://lamppostpizzaorange.com/wp-content/uploads/2020/10/green-olives-3.png",
        "price": 2.75
    },
    {
        "name": "Avacodos",
        "image": "https://lamppostpizzaorange.com/wp-content/uploads/2020/10/avocado-3.png",
        "price": 1.25
    },
    {
        "name": "Mushrooms",
        "image": "https://lamppostpizzaorange.com/wp-content/uploads/2020/10/mushrooms-1.png",
        "price": 3.00
    },
    {
        "name": "Anchovies",
        "image": "https://lamppostpizzaorange.com/wp-content/uploads/2020/10/anchovies-3.png",
        "price": 3.50
    }
]

let parent = document.getElementById("toppings")

function getToppings() {
    for (let i = 0; i < toppings.length; i++) {
        let name = toppings[i].name
        let img = toppings[i].image
        let price = (toppings[i].price).toFixed(2)
        console.log(price)
        console.log(typeof price)
        let newDiv = document.createElement("div")
        let image = document.createElement("img")
        newDiv.classList.add("image")
        newDiv.classList.add("topping")
        newDiv.classList.add("salad")
        newDiv.setAttribute("id", name)
        newDiv.addEventListener("dragstart", startToDrag)
        image.setAttribute("src", img)
        image.setAttribute("draggable", "true")
        image.setAttribute("width", "200px")
        image.setAttribute("id", `img${name}`)
        let text = document.createElement("p")
        let title = document.createTextNode(name)
        text.setAttribute("id", `labelimg${name}`)
        let toppingPrice = document.createElement("p")
        toppingPrice.setAttribute("value", price)
        let amount = document.createTextNode(`$${price}`)
        console.log(typeof amount)
        toppingPrice.setAttribute("id", `img${name}cost`)
        text.appendChild(title)
        toppingPrice.appendChild(amount)
        newDiv.appendChild(image)
        newDiv.appendChild(text)
        newDiv.appendChild(toppingPrice)
        parent.appendChild(newDiv)

    }
}
getToppings()



function startToDrag(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
}

let dropbox = document.getElementById("imgSalad");
dropbox.addEventListener("dragover", over)
dropbox.addEventListener("drop", dropping)

function over(e) {
    e.preventDefault();
}

let pizzaPrice = document.getElementById("actualPrice")

function dropping(e) {
    // e.preventDefault();
    let dataItem = e.dataTransfer.getData("text/plain");
    let draggedItem = document.getElementById(dataItem);
    dropbox.appendChild(draggedItem);
    draggedItem.classList.add("saladafter");
    let toppingCost = document.getElementById(`${draggedItem.id}cost`)
    let valueOfTopping = toppingCost.getAttribute("value");
    console.log(valueOfTopping)
    pizzaPrice.textContent = ((parseFloat(pizzaPrice.textContent)) + (parseFloat(valueOfTopping))).toFixed(2);
    let p = draggedItem.id
    let label = document.getElementById(`label${p}`)
    let costLabel = document.getElementById(`${draggedItem.id}cost`)
    label.style.display = "none"
    costLabel.style.display = "none"
}
let reset = document.getElementById("reset")
reset.addEventListener("click", resetPizza)

function resetPizza() {
    window.location.reload();
}

let buyNow = document.getElementById("buynowbtn")
console.log(buyNow)
buyNow.addEventListener("click",buyNowAlert)

function buyNowAlert(){
    let totalPrice = (document.getElementById("actualPrice")).textContent
    confirm(`Your total comes to $${totalPrice}. Please confirm.`)
}