const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");



function inputChange(event) {
    spanEl.style.fontSize = inputEl.value + "px";
    console.log(inputEl.value)
}


inputEl.addEventListener("input", inputChange);