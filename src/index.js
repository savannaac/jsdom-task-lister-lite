
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form")
  const taskInput= document.getElementById("new-task-description")
  
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault()
  })
});