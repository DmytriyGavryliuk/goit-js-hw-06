const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const UlIngridientsEl = document.querySelector("#ingredients");

let LiFragment = new DocumentFragment();

for (const value of ingredients) {
    const LiItem = document.createElement("li");
    LiItem.classList.add("item");
    LiItem.textContent += value;

    LiFragment.appendChild(LiItem)
}



UlIngridientsEl.append(LiFragment);