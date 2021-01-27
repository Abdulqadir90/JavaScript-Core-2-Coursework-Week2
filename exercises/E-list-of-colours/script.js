function listOfColours(colours) {

  let content = document.getElementById("content");
  let selectedEl = document.createElement("selected");
  let pEl = document.createElement("p");
  content.appendChild(selectedEl);
  content.appendChild(pEl);
   colours.forEach((colour) => {
    let option = document.createElement("option");
    option.innerHTML = colour;
    option.value = colour;
    selectedEl.appendChild(option);
  });

 pEl.innerHTML = `You have selected: `;
  selectedEl.addEventListener("click", function () {
    pEl.innerHTML = `You have selected: ${selectedEl.value}`;
    pEl.style.color = selectedEl.value;
  });
}


const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
