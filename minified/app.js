const todoList=document.querySelector(".todo__list"),todoForm=document.querySelector(".todo__add");let items=[{title:"Learn CSS Grid Layout",done:!0},{title:"Feed the cat",done:!1},{title:"Learn how to use Firefox Debugger",done:!1}];const addTodo=e=>{e.preventDefault();const f=document.querySelector(".todo__input").value;items.push({title:f,done:!1}),saveList(),document.querySelector(".todo__add").reset()},createList=(e=[],f)=>{f.innerHTML=e.map((g,h)=>`
        <li class="todo__item">
          <input type="checkbox" id="todo${h}" data-index="${h}" ${g.done?"checked":""} />
          <label for="todo${h}">
            <img src="./img/check.svg" class="todo__done" data-index="${h}" />
            <div class="todo__text">${g.title}</div>
            <span class="todo__delete" data-index="${h}">Delete</span>
          </label>
        </li>
      `).join("")},toggleDone=e=>{const f=e.target;if(f.classList.contains("todo__done")){const g=f.dataset.index;items[g].done=!items[g].done,saveList()}},removeSingle=e=>{const f=e.target;if(f.classList.contains("todo__delete")){const g=f.dataset.index;spliceItem(g)}},spliceItem=e=>{items.splice(e,1),saveList()},saveList=()=>{createList(items,todoList)};todoList.addEventListener("click",toggleDone),todoList.addEventListener("click",removeSingle),todoForm.addEventListener("submit",addTodo),createList(items,todoList);