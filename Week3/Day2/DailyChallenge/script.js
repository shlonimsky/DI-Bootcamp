const inputForm = document.forms[0]
console.log(inputForm)
inputForm.addEventListener("submit", story)


function story(evt){
    evt.preventDefault();
    const arrWords = valuesForm();
    const story = `It was yesterday evening. I came to ${arrWords[4]} to visit a ${arrWords[0]}. 
    Suddenly,  in the left window I saw a huge ${arrWords[2]}'s eye that stare in my bag. At that moment I thought:
    "I have to ${arrWords[3]}!" And I ${arrWords[3]} and tought that I'm so ${arrWords[1]}`
    const storyText = document.createTextNode(story)
    document.querySelector("#story").appendChild(storyText)
}


function valuesForm(){
let arrWords = [];
    for (let i=0; i<=inputForm.elements.length-2; i++){
        let value = inputForm.elements[i].value
        if (formValidation(value)){
            arrWords.push(value)
        } else {
            alert(`Error, enter a word`) 
            break
        }
    }
    return arrWords
}

function formValidation(value){
    // Cheking if the form is empty
    let valid;
    ( value === "" || !isNaN(value)) ? valid = false : valid = true ;
    return valid
}
