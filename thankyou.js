
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let number = Math.floor(Math.random() * (max - min) + min); 
    console.log(number);
    let space = document.getElementById("confirmation-number")
    console.log(space);
    space.textContent = number
  }
 getRandomInt(50000, 99999)