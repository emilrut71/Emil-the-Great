 const todoList = document.querySelector('.todo_list');
  
  const todoInput = document.querySelector('.todo_input');

  const todoButton = document.querySelector('.todo_button');
  

  todoButton.addEventListener("click", svea)

  function svea(event){
      event.preventDefault();
      if(todoInput.value === ""){
        return null
    }
      const newDiv = document.createElement('div');
      const newLi = document.createElement("li");
      newDiv.classList.add("todo");
      newDiv.classList.add("todo_item");
      newLi.innerText = todoInput.value;
      newDiv.appendChild(newLi);
      console.log(todoInput.value);
  todoList.appendChild(newDiv);
  todoInput.value = "";
}
