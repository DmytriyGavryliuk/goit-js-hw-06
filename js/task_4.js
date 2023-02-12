// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const valueEl = document.querySelector("#value");
const incrementEl = document.querySelector('[data-action="increment"]');
const decrementEl = document.querySelector('[data-action="decrement"]');
let counterValue = 0;

function decrementValue() {
    console.log("-1");
 return  valueEl.textContent = counterValue -= 1;
}

function incrementValue() {
    console.log("+1");
 return  valueEl.textContent = counterValue += 1;
}


incrementEl.addEventListener("click", incrementValue);
decrementEl.addEventListener("click", decrementValue);