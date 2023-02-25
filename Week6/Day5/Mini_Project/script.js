
(function (){
    // localStorage.clear()
    const startDate = document.getElementById("start_date")
    const endDate = document.getElementById("end_date")
 
    const form = document.forms[0]

    form.addEventListener("submit", retrieveData)
}())

function retrieveData(e){

    const form = document.forms[0]
    const retrieveFormData = new FormData(form)
    const newTask = Object.fromEntries(retrieveFormData)
    newTask["isCompleted"] = false
    saveInLocalStorage(newTask)
}

function saveInLocalStorage(newTask){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.push(newTask)
const sortedTasks = sortArray(tasks)
console.log("newArr",sortedTasks)
localStorage.setItem("tasks",JSON.stringify(sortedTasks))
}

function sortArray(arr){
    const newArr = arr.sort((x, y) => {
        return Date.parse(x["start_date"])- Date.parse(y["start_date"]);
    });
   return newArr
}
