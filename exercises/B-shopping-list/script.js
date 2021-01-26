function shoppingList(arrayOfLists) {
  let content = document.querySelector("#content");

  let ulEls = document.createElement("ul");
  content.appendChild(ulEls);
  shopping.forEach(function (items) {
    let listEls = document.createElement("li");
    listEls.innerHTML = items;
    ulEls.appendChild(listEls);

  });


}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
