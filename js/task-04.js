const valueEl = document.querySelector("#value");
const incrementEl = document.querySelector('[data-action="increment"]');
const decrementEl = document.querySelector('[data-action="decrement"]');
let counterValue = 0;

function decrementValue() {
 return  valueEl.textContent = counterValue -= 1;
}

function incrementValue() {
 return  valueEl.textContent = counterValue += 1;
}


incrementEl.addEventListener("click", incrementValue);
decrementEl.addEventListener("click", decrementValue);