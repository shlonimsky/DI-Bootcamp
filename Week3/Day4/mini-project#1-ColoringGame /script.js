
const color = ["#A63744","#84430E","#7B68EE","#FFE4E1","#000080","#FF4500","#FFEFD5","#B0E0E6","#FF0000","#2E8B57","#9ACD32", "#D2B48C","#708090","#2E8B57","#FFFAFA","#FFA500","#FF4500","#9370DB","#00FF00","#FF00FF","#FFA07A"]
// The variable that keeps a clicked color in pickingAColor function
let colorId;
// A boolean variable, that checks if the mous is down
let isClicked = false;
const button = document.getElementById("btn")
button.addEventListener("click", buttonClear)
function creatingColors(){
    // This funcytion creates new <div>, adds background and eventListener("click")
    for (let item of color){
        const newColor = document.createElement("div")
        // adding attribute "name" to <div>
        newColor.setAttribute("name", item)
        // adding sizes to <div> 
        newColor.classList.add("colors")
        // adding background
        newColor.style.background=item
        newColor.addEventListener("click", pickingAColor)
        document.getElementById("palette").appendChild(newColor)
    }
}
creatingColors()

function pickingAColor(evt){
colorId = evt.target.getAttribute("name")
}

function creatingCanvas(){
    for (let i=0; i<=1440; i++){
    // creating <div>
    const newDiv = document.createElement("div")
    // adding to each div the class
    newDiv.classList.add("canvasUnits")
    newDiv.addEventListener("mousedown", bgMousDown)
    newDiv.addEventListener("mouseover", bgMousOver)
    newDiv.addEventListener("mouseup", bgMousUp)
    // Appending div to section
    document.getElementById("canvas").appendChild(newDiv)
    }
}
creatingCanvas()

function bgMousDown(evt){
console.log(evt)
evt.target.style.background=colorId
isClicked = true
}
 
function bgMousOver(evt){
if (isClicked===true){
    evt.target.style.background=colorId
}
}
function bgMousUp(){
    isClicked = false
}

function buttonClear(evt){
    let div = document.getElementById("canvas").children
    console.log(div)
    for (let i of div){
    i.style.background="white"
    }
}
