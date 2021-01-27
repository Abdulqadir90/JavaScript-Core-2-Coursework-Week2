function readingList(books) {
  let content = document.querySelector("content");
  let listEl = document.createElement("ul");
  content.appendChild(listEl);

  books.forEach(function (obj) {
    let el = document.createElement("li");
    listEl.appendChild(el);

    let titleEl = document.createElement("p");
    titleEl.innerHTML = obj["newTitle"];
    el.appendChild(titleEl);

    el.style.height = "50px";
    el.style.width = "50px";

    let authorEl = document.createElement("p");
    authorEl.innerHTML = obj["author"];
    el.appendChild(authorEl);

    let imgEl = document.createElement("img");
    imgEl.src = obj["image"];
    imgEl.style.width = "50%";
    el.appendChild(imgEl);

    if (obj["alreadyRead"]) {
      el.style.backgroundColor === "green";
    } else {
      el.style.backgroundColor ==="red";

    }

  });
}



const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    image: "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg" ,
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    image: "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg" ,
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    image: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/tpp20.jpg" , 
    alreadyRead: true
  }
];

readingList(books);