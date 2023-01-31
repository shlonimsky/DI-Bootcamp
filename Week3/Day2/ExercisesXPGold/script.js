// Exercise 1 : Select A Kind Of Music
// Display the value of the selected option.
// Add an additional option to the select tag:
// <option value="classic">Classic</option>
// The newly added option should be selected by default.
const music = document.querySelector("#genres")
function valueOfSelected (){
    // Getting the value of <option> with attribute "selected"
for (let option of music){
    const check = option.hasAttribute("selected")
    if (check){
        // displaying the value of the "selected" option
        console.log(option.getAttribute("value"))
        //  removing "selected"
        option.removeAttribute("selected")
    }
}
}
function addingClassic(){
    const newOption = document.createElement("option")
    const optionText = document.createTextNode("Classic")
    newOption.setAttribute("value", "classic")
    newOption.setAttribute("selected","")
    newOption.appendChild(optionText)
    music.appendChild(newOption)
}
valueOfSelected()
addingClassic()