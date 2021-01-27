function todoList(todos) {

  let content = document.querySelector("content");
  let listEl = document.createElement("ul");

  todos.forEach(el => {
    let listEls = document.createElement("li");
    listEls.innerText = el.todo;
    listEls.addEventListener("click", event => { ;
    event.preventDefault();
    if (listEls.style.textDecoration ==="line-through"){
      listEls.style.textDecoration = "none"
    } else {
      listEls.style.textDecoration = "line-through";
    }
  })
listEl.appendChild(listEls);
  })
  content.appendChild(listEls);
}


const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);