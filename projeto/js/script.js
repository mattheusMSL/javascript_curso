
// function adding tasks 
function addTask(){

  // task title
  const taskTitle = document.querySelector("#task-title").value;

  if(taskTitle){

    // clone template  
     const template = document.querySelector(".template");
     const newTask = template.cloneNode(true);

    // add title
    newTask.querySelector(".task-title").textContent = taskTitle;

    // remove unnecessary classlist 
    newTask.classList.remove("template");
    newTask.classList.remove("hide");
    
    // add task in the list 
    const list = document.querySelector("#task-list");

    list.appendChild(newTask);

    // EventListener that removes the task

   const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function () {
      removeTask(this)
    });

    // EventListener that complete task 
    
    const completeBtn =  newTask.querySelector(".done-btn").addEventListener("click", function () {
      completeTask(this);
    })

    // clean task title 
    document.querySelector("#task-title").value = "";
    };
    
};

// function remove task

function removeTask(task){
  task.parentNode.remove(true);
};

//function complete task

function completeTask(task){
  const taskToComplete = task.parentNode;
  taskToComplete.classList.toggle("done");

};

// eventListener click which adds the task
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", (e) => {
   e.preventDefault();
   addTask();
});