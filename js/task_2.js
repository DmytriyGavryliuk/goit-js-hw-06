// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
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