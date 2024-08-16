class Task {
    constructor(description, labelColor){
        this.description = description;
        this.labelColor = labelColor;
    }

    printMessage(){
        console.log(`You added '${this.description}', this task has a ${this.labelColor} priority.`)
    }

    formatTask(){
        return ` <div style="background-color:${this.labelColor}" class="list-item">
              <p class="list-item__text">${this.description}</p>
              <button class="btn-remove">✖</button>
            </div>`
    }
    
   
}
const addButton = document.getElementById('btn-add');
const taskField = document.getElementById('task-field');
const listItems = [];

addButton.addEventListener('click', addTask);
taskField.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        addTask();
    }
});


function addTask() {
    if (taskField.value.trim() === ''){
        console.log('Please enter something');
    } else {
        const fieldValue = taskField.value;
        const priorityColor = 'crimson'; // set as default for now
        const newTask = new Task(fieldValue, priorityColor); 
        listItems.push(newTask);
        newTask.printMessage;        
        taskField.value = '';
        
        updateList();
        
        
    }
}

function updateList(){
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
   listItems.forEach(task => {
        const taskHTML = task.formatTask();
        taskList.innerHTML += taskHTML;

        getDeleteButtons();
    });
}

function crossOutTask(){

}

function removeTask(e){
  console.log('task removed');
  const taskItemTarget = e.target;
  const taskItem = taskItemTarget.closest('.list-item');
//   taskItem.remove();

if (taskItem) {
   console.log('Task item exists', taskItem);

   const parentEl = taskItem.parentElement;
  if (parentEl) {
    const taskIndex = Array.from(parentEl.children).indexOf(taskItem);
            console.log('Index position:', taskIndex);

            listItems.splice(taskIndex, 1);

            taskItem.remove();
  }
}

}

function getDeleteButtons(){
    const removeButtons = document.querySelectorAll('.btn-remove');
    removeButtons.forEach(button => {
    button.addEventListener('click', removeTask);
})
}


/*
Red - Crucial (Very Important)
Orange - High Priority
Yellow - Medium Priority
Green - Low Priority
*/
