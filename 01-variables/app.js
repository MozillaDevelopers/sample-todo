const todoList = document.querySelector(".todo__list");
const todoForm = document.querySelector(".todo__add");

// An initial list of dummy to-do items
let items = [
  { title: "Learn CSS Grid" },
  { title: "Feed the cat" },
  { title: "Learn how to use Firefox Debugger" }
];

// A function to add a new To-Do item
const addTodo = e => {
  e.preventDefault();
  const title = document.querySelector(".todo__input");
  const todo = {
    title,
    done: false
  };

  items.push(todo);
  saveList();
  document.querySelector(".todo__add").reset();
};

// A function to create the To-Do list from the items array
const createList = (list = [], listTarget) => {
  listTarget.innerHTML = list
    .map(
      (item, i) => `
        <li class="todo__item">
          <label for="todo${i}">
            <div class="todo__text">${item.title}</div>
          </label>
        </li>
      `
    )
    .join("");
};

// function to save list
const saveList = () => {
  createList(items, todoList);
};

// set up event listeners
todoForm.addEventListener("submit", addTodo);

// Init list
createList(items, todoList);
