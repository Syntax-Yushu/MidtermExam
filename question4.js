let tasks = [];

// Function to add a task
function addTask(name, description) {
  const task = {
    id: tasks.length + 1,
    name: name,
    description: description,
  };
  tasks.push(task);
}

// Function to view all tasks
function viewTasks() {
  return tasks;
}

// Function to update a task
function updateTask(id, newName, newDescription) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.name = newName;
    task.description = newDescription;
  }
}

// Function to delete a task
function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
}

addTask('Task 1', 'This is the first task');
addTask('Task 2', 'This is the second task');
console.log(viewTasks()); 

updateTask(1, 'Updated Task 1', 'Updated description');
console.log(viewTasks()); 

deleteTask(2);
console.log(viewTasks());
