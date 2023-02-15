// 1rst Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
function makeAllCaps(arr){
    return new Promise(function(resolve,reject){
        const isNitString = arr.some(element => (typeof element!="string"))
        if (isNitString){
            reject(`Error: the array contains not only string`)
        } else{
           const arrToUpperCase =arr.map(element => element.toUpperCase())
            resolve(arrToUpperCase)
        }
    })
}
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
function sortWords(arr){
    return new Promise(function(resolve,reject){
        if (arr.length>4){
            resolve(arr.sort())
        } else {
            reject(`Error: the length is less then 4`)
        }
    })
}
//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))


//   2nd Daily Challenge
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`
//   Create three functions. The two first functions should return a promise..
//   The first function is named toJs():
//   this function converts the morse json string provided above to a morse javascript object.
//   if the morse javascript object is empty, throw an error (use reject)
//   else return the morse javascript object (use resolve)
function toJs(){
    const morseObj = JSON.parse(morse)
    return new Promise(function(resolve,reject){
        if (Object.keys(morseObj).length === 0){
            reject(`json is empty`)
        } else {
            resolve(morseObj)
        }
    })
}
toJs()
.then(obj => toMorse(obj))
.then(arr => joinWords(arr))
.catch(err => console.log(err))
//   The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
//   This function asks the user for a word or a sentence.
//   if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
//   else return an array with the morse translation of the user’s word.
  function toMorse(morseJS){
    const morseKeys = Object.keys(morseJS);
    const sentence = prompt(`Enter a word or a sentence`).toLowerCase().replace(" ","").split("")
    const isNotInMorse = sentence.some(elem => (morseKeys.includes(elem)===false) )
    return new Promise(function(resolve,reject){
        if (isNotInMorse){
            reject(`Was entered the symbol that is not in the Morse`)
        } else {
            const translation = sentence.map(elem => morseJS[elem]);
            resolve(translation)
        }
   })
  }

//   The third function called joinWords(morseTranslation), takes one argument: the morse translation array
//   this function joins the morse translation by using line break and display it on the page (ie. On the DOM)
//   Chain the three functions.
function joinWords(morseTranslation){
    const section = document.getElementById("container")
    section.textContent = `Translation to Morse of:`
    morseTranslation.forEach(element => {
        const p = document.createElement("p");
        const pText = document.createTextNode(element);
        p.appendChild(pText);
        section.appendChild(p)
    });

}