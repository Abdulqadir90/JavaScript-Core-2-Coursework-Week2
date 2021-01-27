
// Part 1

function colors() {
    let blue = document.getElementById("blueBtn");
    let orange = document.getElementById("orangeBtn");
    let green = document.getElementById("greenBtn");
    let jumboContainer = document.querySelector(".jumbotron");
    let btnDonate = document.getElementById("donate-button");
    let btnVolunteerButton = document.getElementById("volunteer-button");

    blue.addEventListener('click', event => {
        jumboContainer.style.backgroundColor = "#588fbd";
        btnDonate.style.backgroundColor  = "#ffa500";
        btnVolunteerButton.style.background = "black";
        btnVolunteerButton.style.color = "white";
      })

      orange.addEventListener('click', event => {
        jumboContainer.style.backgroundColor = "#f0ad4e";
        btnDonate.style.backgroundColor  = "#5751fd";
        btnVolunteerButton.style.background = "#31b0d5";
        btnVolunteerButton.style.color = "white";
      })  

      green.addEventListener('click', event => {
        jumboContainer.style.backgroundColor = "#87ca8a";
        btnDonate.style.backgroundColor  = "black";
        btnVolunteerButton.style.background = "#8c9c08";
        btnVolunteerButton.style.color = "white";
      })

    }
      colors();
  
    //   Part 2

let formEl = document.querySelector(".form-group");
let submitBtn = document.getElementsByClassName("btn btn-primary");
let yourName = document.querySelector("#example-text-input");
let email = document.querySelector("#exampleInputEmail1");
let describeYourself = document.querySelector("#exampleTextarea");

submitBtn.addEventListener("click", submitBtnClicked);
function submitBtnClicked(e) {
  e.preventDefault();
  let submit = true;
  if (yourName.value.length === 0) {
    yourName.style.backgroundColor = "red";
    submit = false;
  }
  if (email.value.length === 0 || !email.value.includes("@")) {
    email.style.backgroundColor = "red";
    submit = false;
  }
  if (describeYourself.value.length === 0) {
    describeYourself.style.backgroundColor = "red";
    submit = false;
  }

   if (submit) {
    yourName.value = "";
    email.value = "";
    describeYourself.value = "";
    alert("Thank you for filling out the form");
  }
}

