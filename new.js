// Array to store tasks, will be loaded from localStorage if available
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDescription = taskInput.value.trim(); // Get input value and remove extra spaces

    if (taskDescription === "") {
        alert("Please enter a task.");
        return;
    }

    let task = {
        description: taskDescription,
        isCompleted: false
    };

    tasks.push(task); // Add the new task to the array
    taskInput.value = ""; // Clear the input field
    saveTasks(); // Save tasks to localStorage
    displayTasks(); // Update the task list
}

// Function to display all tasks
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the current list

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        // Task description with conditional class for completed tasks
        let taskText = document.createElement("span");
        taskText.textContent = task.description;
        taskText.className = task.isCompleted ? "completed" : "";

        // Button to mark task as completed
        let completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.onclick = () => completeTask(index);

        // Button to remove the task
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeTask(index);

        // Button to edit the task
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editTask(index);

        // Append task text and buttons to the list item
        li.appendChild(taskText);
        li.appendChild(completeButton);
        li.appendChild(editButton);
        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

// Function to mark a task as completed
function completeTask(index) {
    tasks[index].isCompleted = true;
    saveTasks(); // Save the updated tasks to localStorage
    displayTasks(); // Update the list to reflect the completed task
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1); // Remove the task from the array
    saveTasks(); // Save the updated tasks to localStorage
    displayTasks(); // Update the task list
}

// Function to edit a task
function editTask(index) {
    const newDescription = prompt("Edit task:", tasks[index].description);
    if (newDescription) {
        tasks[index].description = newDescription;
        saveTasks(); // Save the updated tasks to localStorage
        displayTasks(); // Update the task list
    }
}
// Function to clear all tasks
function clearAllTasks() {
    tasks = []; // Clear the tasks array
    localStorage.removeItem("tasks"); // Remove tasks from localStorage
    displayTasks(); // Update the task list to show no tasks
}

// Function to save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Display tasks on page load
displayTasks();
