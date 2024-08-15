console.log('Testing line for JavaScript 👽👽👽👽');

class Task {
    constructor(description, labelColor){
        this.description = description;
        this.labelColor = labelColor;
    }

    get printMessage(){
        console.log(`You added '${this.description}', this task has a ${this.labelColor} priority.`)
    }
   
}

const shop = new Task('buy groceries','red');
const organize = new Task('organize desk','green');
console.log(shop, organize);
shop.printMessage;
organize.printMessage;

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
        listItems.push(fieldValue);
        taskField.value = '';
        console.log(listItems);
    }
}

/*
Red - Crucial (Very Important)
Orange - High Priority
Yellow - Medium Priority
Green - Low Priority
*/
