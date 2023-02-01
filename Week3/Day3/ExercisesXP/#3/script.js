const box = document.getElementById("box")
const target = document.getElementById("target")

box.setAttribute("draggable", true)
console.log(box)
box.addEventListener("dragstart", dragStarting)
target.addEventListener("dragover", draggingOver)
target.addEventListener("dragleave", draggingOver)
target.addEventListener("drop", dropping)

function dragStarting (evt){
    console.log(evt)
    evt.dataTransfer.setData("text/plain", evt.target.id)
}

function draggingOver(evt){
    evt.preventDefault();

}

function dropping(evt){
   const id = evt.dataTransfer.getData("text/plain")
    const elem = document.getElementById(id)
    evt.target.appendChild(elem)
}
