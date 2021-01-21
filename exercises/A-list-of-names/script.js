function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

for (let i = 0; i < arrayOfPeople.length; i++) {
  let firstHeader = document.createElement("h1");
  firstHeader.innerHTML = arrayOfPeople[i]["name"];
  content.append(firstHeader);
  let secondHeader = document.createElement("h2");
  secondHeader.innerHTML = arrayOfPeople[i]["job"];
  content.append(secondHeader);

}
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
