(() => {
    const allTasks = JSON.parse(localStorage.getItem("tasks"))
    for (const task of allTasks){
        appendTasks(task)
    }
})()

function appendTasks({name,discription,start_date,end_date,isCompleted}){
    const container = document.getElementById("container")
    const div = document.createElement("div")

    if ( checkIfExpire(end_date) ){
        div.classList.add("red")
    } else {
        isCompleted? div.classList.add("grey") : div.classList.add("green") ;
    }

    // div.addEventListener("click", showTask)
    const pName = document.createElement("p");
    pName.addEventListener("click", showTask)

    const pDiscription = document.createElement("p")
    pDiscription.classList.add("not_visible")
    const pStartDate = document.createElement("p")
    pStartDate.classList.add("not_visible")
    const pLeftDays = document.createElement("p")
    const isDone = document.createElement ("input")
    isDone.classList.add("not_visible")
    isDone.addEventListener("click", changeTheStatus())
    isDone.type = "checkbox"
    isDone.checked = isCompleted
    const isDoneLabel = document.createElement("label")
    isDoneLabel.classList.add("not_visible")


    pName.textContent = name
    pDiscription.textContent = discription
    pStartDate.textContent = `The task starts ${start_date}`
    pLeftDays.textContent = amountOfDaysLeft(end_date)
    isDoneLabel.textContent = "Done"


    div.appendChild(pName)
    div.appendChild(pLeftDays)
    div.appendChild(pDiscription)
    div.appendChild(pStartDate)
    div.appendChild(isDone)
    div.appendChild(isDoneLabel)
    container.appendChild(div)
}

function checkIfExpire(end_date){
    const date1 = new Date(end_date)
    const date2 = new Date()
    const diff = date1-date2
    const res = diff>0? false: true
    return res
}

function amountOfDaysLeft(date){
    const dateNow = new Date()
    const dateEnd = new Date(date)
    const dateLeft = Math.ceil((dateEnd-dateNow)/86400000);
    if (dateLeft>0){
        return `The days left: ${dateLeft}`
    } else {
        return "The time is over"
    }
}

function showTask(e){
    const div = e.currentTarget.parentNode
    for (let i=2; i<=5; i++){
        div.children[i].classList.toggle("not_visible")
    }
}
function changeTheStatus(e){
    const a = e;
    console.log(e)
}