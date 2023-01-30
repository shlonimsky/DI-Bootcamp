// 🌟 Exercice 4 : Volume Of A Sphere
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
// retrieve form
const volumeForm = document.forms[0]
volumeForm.addEventListener("submit", calculateVolume)

function calculateVolume(event){
    event.preventDefault(); 
    const radius = volumeForm.elements[0].value
    if (formValidation(radius)){
        const volume = 4/3*Math.PI*radius*radius*radius
        volumeForm.elements[1].value = volume
        console.log(volume)
    } else {
        alert(`Error. Enter a number`)
    }

}


function formValidation(value){
    // Cheking if the form is empty
    let valid
    ( value === " " || isNaN(value)) ? valid = false : valid = true 
    return valid
}