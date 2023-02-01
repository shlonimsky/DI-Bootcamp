let tasks = "";
const form = document.querySelector("form")

form.addEventListener("submit", addTask)

function addTask(evt){
    // Checks if the input not empty and pushed a value to array
    evt.preventDefault()
const value = evt.target[0].value
if(value !== ""){
    tasks = value
    creatingTask(tasks)
} else {
    console.log(`empty`)
}
}
function creatingTask(task){
    // adding a new task to the list
    // <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
    // <label for="vehicle2"> I have a car</label><br>
    const container = document.querySelector("#list")
    const div = document.createElement("div")
    div.classList.add("listTasks")
    const button = document.createElement("button")
    // Creating icon <i class="fa-regular fa-trash-can"></i>
    const iconTrash = document.createElement("i")
    iconTrash.classList.add("pink")
    iconTrash.classList.add("fa-regular", "fa-trash-can")
    const newInput = document.createElement("input")
    newInput.setAttribute("type","checkbox");
    newInput.setAttribute("value", task)
    const newLabel = document.createElement("label")
    const labelText = document.createTextNode(tasks)
    const brTag = document.createElement("br")
    container.appendChild(div)
    // Appending 
    button.appendChild(iconTrash)
    div.appendChild(button)
    div.append(newInput)
    newLabel.appendChild(labelText)
    div.appendChild(newLabel)
    div.appendChild(brTag)
}