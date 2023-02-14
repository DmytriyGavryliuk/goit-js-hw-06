function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const colorEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");


function changeColorHandler() {
  const randomColor = getRandomHexColor();
    document.body.style.background = randomColor;
  colorEl.textContent = randomColor;
  console.log(`Changed to =>`,colorEl.textContent);
} 

buttonEl.addEventListener("click", changeColorHandler);