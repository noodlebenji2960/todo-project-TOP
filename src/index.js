import './style.css';
import closeIcon from "./assets/close.svg"
import folderIcon from "./assets/project.svg"
import newIcon from "./assets/plus.svg"
import { projectArray } from './logic';
import { newProject as newProjectLogic} from './logic';
import { newTodo as newTodoLogic} from './logic';
import { selectProject as selectProjectLogic} from './logic';
import { selectTodo as selectTodoLogic} from './logic';
import { saveProjectArrayLocal } from './logic';
import { getProjectArrayLocal } from './logic';

const containerDiv = document.getElementById("container")

function renderProjectsList(){
    document.getElementById("projectsList").textContent=""
    document.getElementById("todosList").textContent=""
    document.getElementById("todosDescription").value=""
    if(projectArray.length>0){
        for(let i=0; i<projectArray.length;i++){
            const li = document.createElement("li")
            document.getElementById("projectsList").appendChild(li)
            li.id=projectArray[i].title

            const text = document.createElement("span")
            text.textContent = projectArray[i].title + "(" + projectArray[i].todoList.length + ")"
            li.appendChild(text)


            li.addEventListener("click", (e)=>selectProject(e))
            const close = document.createElement("img");
            close.src = closeIcon
            close.classList.add("delete")
            close.addEventListener("click", (e)=>removeProject(e))
            li.appendChild(close)
        }

        function removeProject(e){
            e.stopPropagation()
            const index = projectArray.findIndex(function(object){if(object.title==e.target.parentNode.id){return true}})
            projectArray.splice(index, 1)
            renderProjectsList()
        }

        function selectProject(e){
            document.getElementById("todosDescription").value=""
            document.getElementById("projectsNav").style.transition = "300ms"
            document.getElementById("todosNav").style.transition = "300ms"
            for(let i=0; i<projectArray.length;i++){
                document.getElementById("projectsList").children[i].classList.remove("selected");
            }
            e.target.parentNode.classList.add("selected")
            const selectedProjectTitle = e.target.parentNode.id
            selectProjectLogic(selectedProjectTitle)
            renderTodoList()
        }

        renderTodoList

    }else{
        const li = document.createElement("li")
        document.getElementById("projectsList").appendChild(li)
        li.textContent = "No Projects"
    }
}

function renderTodoList(){
    document.getElementById("todosList").textContent=""
    const selectedProjectObject = projectArray.find(function(object){if(object.check==true){return true}})
    if(selectedProjectObject.todoList.length>0){
        document.getElementById("todosNav").style.visibility = "visible"
        document.getElementById("projectsNav").style.width = ((window.innerWidth/2)-20) + "px"
        document.getElementById("todosNav").style.width = ((window.innerWidth/2)-20) + "px"
        for(let i=0; i<selectedProjectObject.todoList.length;i++){
            const li = document.createElement("li")
            document.getElementById("todosList").appendChild(li)

            const text = document.createElement("span")
            text.textContent = selectedProjectObject.todoList[i].title
            li.appendChild(text)

            li.id = selectedProjectObject.todoList[i].title

            const priority = document.createElement("div")
            priority.classList.add("priority")
            if(selectedProjectObject.todoList[i].priority=="low"){
                priority.style.backgroundColor = "#47B134"
            } else if(selectedProjectObject.todoList[i].priority=="medium"){
                priority.style.backgroundColor = "#F3AA21"
            } else if(selectedProjectObject.todoList[i].priority=="high"){
                priority.style.backgroundColor = "#B1343C"
            } else {}
            li.appendChild(priority)

            li.addEventListener("click", (e)=>selectTodo(e))

            const close = document.createElement("img");
            close.src = closeIcon
            close.classList.add("delete")
            close.addEventListener("click", (e)=>removeTodo(e, selectedProjectObject))
            li.appendChild(close)
        }

        function removeTodo(e,selectedProjectObject){
            e.stopPropagation()
            const index = selectedProjectObject.todoList.findIndex(function(object){if(object.title==e.target.parentNode.id){return true}})
            selectedProjectObject.todoList.splice(index, 1)
            renderProjectsList()
            renderTodoList()
        }

        function selectTodo(e){
            const selectedTodoTitle = e.target.parentNode.id

            const selectedProjectObject = projectArray.find(function(object){if(object.check==true){return true}})

            const selectedTodoObject = selectedProjectObject.todoList.find(function(object){if(object.title==selectedTodoTitle){return true}})


            for(let i=0; i<selectedProjectObject.todoList.length;i++){
                document.getElementById("todosList").children[i].classList.remove("selected");
            }
            
            e.target.parentNode.classList.add("selected")
            selectTodoLogic(selectedTodoTitle)

            //Render Due Date
            document.getElementById("todosDueDate").value = selectedTodoObject.dueDate

            //Render Priority
            const todosPriority = document.getElementById("todosPriority")
            if(selectedTodoObject.priority=="low"){
                todosPriority.style.backgroundColor = "#47B134"
                todosPriority.value = "low"
            } else if(selectedTodoObject.priority=="medium"){
                todosPriority.style.backgroundColor = "#F3AA21"
                todosPriority.value = "medium"
            } else if(selectedTodoObject.priority=="high"){
                todosPriority.style.backgroundColor = "#B1343C"
                todosPriority.value = "high"
            } else {}

            todosPriority.addEventListener("change", function(){
                if(todosPriority.value=="low"){
                    todosPriority.style.backgroundColor = "#47B134"
                } else if(todosPriority.value=="medium"){
                    todosPriority.style.backgroundColor = "#F3AA21"
                } else if(todosPriority.value=="high"){
                    todosPriority.style.backgroundColor = "#B1343C"
                } else {}
            })

            //Render Description
            if(selectedTodoObject.description!==""){
                document.getElementById("todosDescription").value = selectedTodoObject.description
                
            } else {
                document.getElementById("todosDescription").value = ""
                document.getElementById("todosDescription").setAttribute("placeholder", "No content")
            }

            //Render Notes
            if(selectedTodoObject.notes!==""){
                document.getElementById("todosNotes").value = selectedTodoObject.notes
            } else {
                document.getElementById("todosNotes").value = ""
                document.getElementById("todosNotes").setAttribute("placeholder", "No content")
            }

            document.getElementById("todosContent").style.visibility = "visible"
            document.getElementById("projectsNav").style.transition = "300ms"
            document.getElementById("todosNav").style.transition = "300ms"
            document.getElementById("projectsNav").style.width = "100px"
            document.getElementById("todosNav").style.width = "100px"
            document.getElementById("todosContent").style.width = (window.innerWidth - 240) + "px"
        }

    } else{
        const li = document.createElement("li")
        document.getElementById("todosList").appendChild(li)
        li.textContent = "No to-do's"
    }
}

function main(){
    const mainContainer = document.createElement("main")

    function createProjectsNav() {
        const projectsNav = document.createElement('nav');
        projectsNav.id = "projectsNav"
        projectsNav.style.width = (window.innerWidth - 20) + "px"

        projectsNav.appendChild(resizeElement(projectsNav))
        
        const title = document.createElement('div');
        title.classList.add("title")
        title.innerText = "Projects"
        const newProjectIcon = document.createElement("img")
        newProjectIcon.src = newIcon
        newProjectIcon.addEventListener("click", (e) => openForm(e, "New Project"))
        title.appendChild(newProjectIcon)
        projectsNav.appendChild(title)

        const projectsList = document.createElement("ul")
        projectsList.id = "projectsList"
        projectsNav.appendChild(projectsList);

        renderProjectsList;
    
        return projectsNav;
     }

    function createTodosNav() {
        const todosNav = document.createElement('nav');
        todosNav.id="todosNav"

        todosNav.appendChild(resizeElement(todosNav))

        const title = document.createElement('div');
        title.classList.add("title")
        title.innerText = "Tasks"
        const newTodoIcon = document.createElement("img")
        newTodoIcon.src = newIcon
        newTodoIcon.addEventListener("click", (e) => openForm(e, "New to-do"))
        title.appendChild(newTodoIcon)
        todosNav.appendChild(title)

        const todosList = document.createElement("ul")
        todosList.id = "todosList"
        todosNav.appendChild(todosList)
        
        return todosNav;
    }

    function createTodosContent() {
        const todosContent = document.createElement('div');
        todosContent.id = "todosContent"

        const todosDescriptionLabel = document.createElement("label")
        todosDescriptionLabel.setAttribute("for", "todosDescription")
        todosDescriptionLabel.textContent = "Description"
        todosContent.appendChild(todosDescriptionLabel)

        const todosDescription = document.createElement("textarea")
        todosDescription.id = "todosDescription"
        todosDescription.setAttribute("cols", "auto")
        todosDescription.setAttribute("rows", "auto")
        todosDescription.addEventListener("change", saveTodos)
        todosContent.appendChild(todosDescription)
        todosDescription.style.height = (window.innerHeight-315) + "px"

        const todosPriorityLabel = document.createElement("label")
        todosPriorityLabel.setAttribute("for", "todosPriority")
        todosPriorityLabel.textContent = "Priority"
        todosContent.appendChild(todosPriorityLabel)

        const todosPriority = document.createElement("select")
        todosPriority.id = "todosPriority"
        todosPriority.style.width = "100%";
        const priorityTiers = ["low", "medium", "high"]
        for(let i=0;i<priorityTiers.length;i++){
            const option = document.createElement("option")
            option.innerText = priorityTiers[i]
            option.style.backgroundColor = "#FFFFFF"
            todosPriority.appendChild(option)
        }
        todosPriority.addEventListener("change", saveTodos)
        todosContent.appendChild(todosPriority)

        const todosDueDateLabel = document.createElement("label")
        todosDueDateLabel.setAttribute("for", "todosDueDate")
        todosDueDateLabel.textContent = "Due Date"
        todosContent.appendChild(todosDueDateLabel)

        const todosDueDate = document.createElement("input")
        todosDueDate.setAttribute("type", "date")
        todosDueDate.id = "todosDueDate"
        todosDueDate.addEventListener("change", saveTodos)
        todosContent.appendChild(todosDueDate)

        const todosNotesLabel = document.createElement("label")
        todosNotesLabel.setAttribute("for", "todosNotes")
        todosNotesLabel.textContent = "Notes"
        todosContent.appendChild(todosNotesLabel)

        const todosNotes = document.createElement("textarea")
        todosNotes.id = "todosNotes"
        todosNotes.addEventListener("change", saveTodos)
        todosContent.appendChild(todosNotes)

        function saveTodos(){
            const selectedProjectObject = projectArray.find(function(object){if(object.check==true){return true}})

            const selectedTodoObject = selectedProjectObject.todoList.find(function(object){if(object.check==true){return true}})

            selectedTodoObject.dueDate = document.getElementById("todosDueDate").value
            selectedTodoObject.priority = document.getElementById("todosPriority").value
            selectedTodoObject.description = document.getElementById("todosDescription").value
            selectedTodoObject.notes = document.getElementById("todosNotes").value

            saveProjectArrayLocal()
        }
        
        return todosContent;
    }

    function resizeElement(element){
        var resizer = document.createElement('div');
        resizer.classList.add("resizer")
        resizer.addEventListener('mousedown', initResize, false);
        
        function initResize(e) {
            element.style.transition = null
            window.addEventListener('mousemove', Resize, false);
            window.addEventListener('mouseup', stopResize, false);
        }
        function Resize(e) {
            element.style.width = (e.clientX - element.offsetLeft) + "px"
            todosContent.style.width = (window.innerWidth) - (todosContent.offsetLeft) + "px"
        }
    
        function stopResize(e) {
            element.style.transition = "500ms"
            window.removeEventListener('mousemove', Resize, false);
            window.removeEventListener('mouseup', stopResize, false);
        }
    
        return resizer
    }

    mainContainer.appendChild(createProjectsNav())
    mainContainer.appendChild(createTodosNav())
    mainContainer.appendChild(createTodosContent())

    return mainContainer
}

function footer() {
    const footer = document.createElement('footer');

    const span = document.createElement("span")
    const a = document.createElement("a")
    footer.appendChild(span)
    span.textContent = "designed by Ben"
    a.href = "https://github.com/noodlebenji2960"
    span.appendChild(a)
    return footer;
 }

function createOverlay(){
    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlay")
    overlayDiv.id = "overlay"
    containerDiv.insertBefore(overlayDiv, containerDiv.children[0])
    overlayDiv.addEventListener("click", removeOverlay)
}

export function removeOverlay(e){
    document.getElementById("overlay").remove()
}

function openForm(e, formType){
    createOverlay()
    const div = document.createElement("div");
    div.classList.add("popupWindow")
    document.getElementById("overlay").appendChild(div)
    div.addEventListener("click", (e) => {e.stopPropagation()}); //stops closure of div

    //Form
    const form = document.createElement("form")
    div.appendChild(form)

    //Fieldset
    const fieldset = document.createElement("fieldset")
    form.appendChild(fieldset)

    //legend
    const legend = document.createElement("legend")
    if(formType == "New Project"){
        legend.innerText = "New Project"
    }else if(formType == "New to-do"){
        legend.innerText = "New to-do"
    } else {
    }
    fieldset.appendChild(legend)

    //Title
    const titleInputLabel = document.createElement("label")
    titleInputLabel.for = "titleInput"
    titleInputLabel.innerText = "Title:"
    fieldset.appendChild(titleInputLabel)
    const titleInput = document.createElement("input")
    titleInput.id = "titleInput"
    titleInput.type = "text"
    fieldset.appendChild(titleInput)

    //Description
    const descriptionInputLabel = document.createElement("label")
    descriptionInputLabel.for = "descriptionInput"
    descriptionInputLabel.innerText = "Description:"
    fieldset.appendChild(descriptionInputLabel)
    const descriptionInput = document.createElement("input")
    descriptionInput.id = "descriptionInput"
    descriptionInput.type = "text"
    fieldset.appendChild(descriptionInput)

    //Notes
    const notesInputLabel = document.createElement("label")
    notesInputLabel.for = "notesInput"
    notesInputLabel.innerText = "Notes:"
    fieldset.appendChild(notesInputLabel)
    const notesInput = document.createElement("input")
    notesInput.id = "notesInput"
    notesInput.type = "text"
    fieldset.appendChild(notesInput)

    if(e.target.innerText == "New to-do"){

        //dueDate
        const dueDateInputLabel = document.createElement("label")
        dueDateInputLabel.for = "dueDateInput"
        dueDateInputLabel.innerText = "Due Date:"
        fieldset.appendChild(dueDateInputLabel)
        const dueDateInput = document.createElement("input")
        dueDateInput.id = "dueDateInput"
        dueDateInput.type = "date"
        fieldset.appendChild(dueDateInput)

        //priority
        const priorityInputLabel = document.createElement("label")
        priorityInputLabel.for = "priorityInput"
        priorityInputLabel.innerText = "Priority:"
        fieldset.appendChild(priorityInputLabel)
        fieldset.appendChild(document.createElement("br"))
        
        const priorityTiers = ["Low", "Medium", "High"]
        for(let i=0;i<priorityTiers.length;i++){
            const priorityInputLabel = document.createElement("label")
            priorityInputLabel.setAttribute("for", priorityTiers[i])
            priorityInputLabel.innerText = priorityTiers[i]
            fieldset.appendChild(priorityInputLabel)
            const priorityInput = document.createElement("input")
            priorityInput.id = priorityTiers[i]
            priorityInput.type = "radio"
            priorityInput.name = "priorityInput"
            fieldset.appendChild(priorityInput)
        }
        fieldset.appendChild(document.createElement("br"))

    }else {}

    //submit button
    const submitButton = document.createElement("button")
    submitButton.id = "submitButton"
    submitButton.innerText = "Submit"
    if(formType == "New Project"){
        submitButton.type = "button"
        submitButton.addEventListener("click", newProjectLogic)
        submitButton.addEventListener("click", removeOverlay)
        submitButton.addEventListener("click", renderProjectsList)
    } else if(formType == "New to-do"){
        submitButton.type = "button"
        submitButton.addEventListener("click", newTodoLogic)
        submitButton.addEventListener("click", removeOverlay)
        submitButton.addEventListener("click", renderProjectsList)
        submitButton.addEventListener("click", renderTodoList)
    } else{
        submitButton.type = "submit"
    }
    
    fieldset.appendChild(submitButton)

    //clear button
    const clearButton = document.createElement("button")
    clearButton.id = "clearButton"
    clearButton.type = "button"
    clearButton.innerText = "Clear"
    clearButton.addEventListener("click", clearForm)
    fieldset.appendChild(clearButton)
}

function clearForm() {
    document.getElementById("titleInput").value = "";
    document.getElementById("descriptionInput").value = "";
    document.getElementById("notesInput").value = "";
  }


containerDiv.appendChild(main())
containerDiv.appendChild(footer())
getProjectArrayLocal()
renderProjectsList()