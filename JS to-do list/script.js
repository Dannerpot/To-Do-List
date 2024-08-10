document.getElementById('add-btn').addEventListener('click', function(){
    const input = document.getElementById('todo-input');
    const todoText = input.value;

    if(todoText ===''){
        alert('Please enter a task');
        return;
    }
    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.textContent=todoText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent='Delete';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function(){
        todoList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    input.value='';
    })