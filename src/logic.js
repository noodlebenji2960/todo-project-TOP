export let projectArray = [    {title:"Tic-tac-toe-TOP", 
                                description:"Tic-tac-toe project for The Odin Project", 
                                notes:"none",
                                todoList:[  {title:"Animate",
                                            description:"add animations to ",
                                            dueDate:"2023-03-05",
                                            priority:"high",
                                            notes:"",
                                            check:false},
                                            {title:"AI",
                                            description:"add additional ai opponents with varying difficulties ",
                                            dueDate:"2023-01-05",
                                            priority:"low",
                                            notes:"",
                                            check:false}],
                                check:false},
                                {title:"Chess",
                                description:"personal chess project - no tutorials", 
                                notes:"none",
                                todoList:[  {title:"artifical intellegance",
                                            description:"",
                                            dueDate:"2023-03-05",
                                            priority:"medium",
                                            notes:"",
                                            check:false},
                                            {title:"add colors",
                                            description:"add additional ai opponents with varying difficulties ", 
                                            dueDate:"2023-01-05",
                                            priority:"low",
                                            notes:"",
                                            check:false}],
                                check:false}];

function Project(title, description, notes){
    this.title = title;
    this.description = description;
    this.notes = notes;
    this.todoList = [];
    this.check = false;
}

export function newProject(){
    const titleInput = document.getElementById("titleInput")
    const descriptionInput = document.getElementById("descriptionInput")
    const notesInput = document.getElementById("notesInput")

    const project = new Project( titleInput.value, descriptionInput.value, notesInput.value );
    projectArray.push(project);
}

export function selectProject(selectedProjectTitle){
    projectArray.forEach(function(object){object.check = false})
    const selectedProjectObject = projectArray.find(function(object){if(object.title==selectedProjectTitle){return true}})
    selectedProjectObject.check = true
}

//////////////////////////////////////////

function ToDo(title, description, notes, dueDate, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.check = false
}

export function newTodo(){
    const titleInput = document.getElementById("titleInput")
    const descriptionInput = document.getElementById("descriptionInput")
    const notesInput = document.getElementById("notesInput")
    const dueDateInput = document.getElementById("dueDateInput")
    const newTodo = new ToDo ( titleInput.value, descriptionInput.value, notesInput.value)
    let projectObject = projectArray.find(function(object){
        if(object.check==true){
            return true
        }
    })
    projectObject.todoList.push(newTodo)
}

export function selectTodo(selectedTodoTitle){
    projectArray.forEach(function(object){object.todoList.forEach(function(object){object.check=false})})
    const selectedProjectObject = projectArray.find(function(object){if(object.check==true){return true}})
    const selectedTodoObject = selectedProjectObject.todoList.find(function(object){if(object.title==selectedTodoTitle){return true}})
    selectedTodoObject.check = true
}

/////////////////////////////////////////////

export function getProjectArrayLocal(){
    projectArray = JSON.parse(localStorage.getItem("projectArray"))
}

export function saveProjectArrayLocal(){
    localStorage.removeItem("projectArray")
    localStorage.setItem("projectArray", JSON.stringify(projectArray))
}