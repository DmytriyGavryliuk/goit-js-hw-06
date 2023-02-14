const UlCategories = document.querySelector("#categories");
const LiItems = UlCategories.querySelectorAll(".item");
// const tittleEl = document.querySelector("h2");
// const listItems = document.querySelectorAll("li")

console.log(`Number of categories: `, LiItems.length);

for (const LiItem of LiItems) {
    console.log(`Category: `, LiItem.firstElementChild.textContent)

    


    console.log(`Elements: `, LiItem.lastElementChild.children.length)

   
}