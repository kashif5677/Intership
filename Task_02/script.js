const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add task
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');


    const span = document.createElement('span');
    span.textContent = taskText;
    span.classList.add('task-text');



    // Toggle complete
    span.addEventListener('click', () => {
        li.classList.toggle('completed');
    });




    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = '';
    taskInput.focus();
});

// Optional: Add task with Enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addBtn.click();
})
