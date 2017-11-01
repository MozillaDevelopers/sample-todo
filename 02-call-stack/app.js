const todoList = document.querySelector(".todo__list");
const todoForm = document.querySelector(".todo__add");

// An initial list of dummy to-do items
let items = [
  { title: "Learn CSS Grid" },
  { title: "Feed the Cat" },
  { title: "Learn how to use Firefox Debugger" }
];

// A function to add a new To-Do item
const addTodo = e => {
  e.preventDefault();
  const title = document.querySelector(".todo__input").value;
  const todo = { title };
  
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
            <span class="todo__delete" data-index="${i}">Delete</span>
          </label>
        </li>
      `
    )
    .join("");
};

// a function to delete a single task
const removeSingle = e => {
  const el = e.target;
  if (!el.classList.contains("todo__delete")) return;
  const index = el.dataset.number;
  spliceItem(index);
};

// a fuction to remove a specific item from a list
const spliceItem = index => {
  const newItems = items.splice(index, 1);
  saveList();
};

// function to save list
const saveList = () => {
  createList(items, todoList);
};

// set up event listeners
todoList.addEventListener("click", removeSingle);
todoForm.addEventListener("submit", addTodo);

// Init list
createList(items, todoList);
