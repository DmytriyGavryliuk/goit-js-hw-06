





const colorEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");


function changeColorHandler() {
    document.body.style.background = getRandomHexColor();
  colorEl.textContent = document.body.style.backgroundColor;
  console.log(`Changed to =>`,colorEl.textContent);
} 

buttonEl.addEventListener("click", changeColorHandler);



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}
;

