document.addEventListener('DOMContentLoaded', function() {
    // Task list
    const taskList = document.getElementById('task-list');
    const completedTaskList = document.getElementById('completed-task-list');

    // Task input
    const taskInput = document.getElementById('task-input');

    // Add Task function
    window.addTask = function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            const currentDate = new Date();
            const timestamp = currentDate.toLocaleString();

            taskItem.innerHTML = `
                <span>${taskText}</span>
                <span>${timestamp}</span>
                <button onclick="completeTask(this)">Complete</button>
            `;

            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    };

    // Complete Task function
    window.completeTask = function(button) {
        const taskItem = button.parentNode;
        taskItem.classList.add('completed-task');
        button.parentNode.removeChild(button);
        completedTaskList.appendChild(taskItem);
    };
});