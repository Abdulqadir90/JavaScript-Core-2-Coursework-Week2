function shoppingList(arrayOfLists) {
  let content = document.querySelector("content");

  for (let i =0; i < arrayOfLists.length; i++) {
    let newList = document.createElement("ul");
    newList.innerHTML = arrayOfLists[i];
    content.append(newList);
    let itemsEl = document.createElement("li");
    itemsEl.innerHTML = arrayOfLists[i];
    newList.append(itemsEl);
  }


  


}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
