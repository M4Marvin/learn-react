import './style.css'

const buttonIncrement = document.getElementById('increment')
const buttonDecrement = document.getElementById('decrement')
const counterDisplay = document.getElementById('display')

let count = 1
counterDisplay.innerHTML = count

const increase = () => {
  count ++;
  counterDisplay.innerHTML = count
  console.log("inc 1")
} ;

const decrease = () => {
  count --;
  counterDisplay.innerHTML = count
  console.log("dec 1")
} ;

buttonIncrement.addEventListener("click", increase)
buttonDecrement.addEventListener("click", decrease)