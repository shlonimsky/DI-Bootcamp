// Daily Challenge : Show Only The Letters
// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event

// Hint : Check out keycodes in Javascript or Regular Expressions
const form = document.forms.onlyLeters
console.log(form)
form.addEventListener("submit", submitButton)
form.addEventListener("keydown", onlyLeters)

function submitButton(evt){
    evt.preventDefault();
const value = evt.target[0].value;
document.querySelector("#output").textContent = value;
console.log(value)
}

function onlyLeters(evt){
        const code = evt.keyCode;
        if (!((code == 8) || (code == 32) || (code >= 37 && code <= 40) 
        || (code >= 65 && code <= 90))) {
            evt.preventDefault();
        }
    }  
