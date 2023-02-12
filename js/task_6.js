
const inputValue = document.querySelector("#validation-input");

const validValue = 6;



inputValue.addEventListener("input", validChecker);

function validChecker(event) {
    const symbolsCounter = event.currentTarget.value.length;
    if (symbolsCounter >= validValue) {
        inputValue.classList.add("valid")
        inputValue.classList.remove("invalid")
        return
    } inputValue.classList.add("invalid");
}