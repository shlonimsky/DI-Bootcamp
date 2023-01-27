// Mini-Project : Hanging Game
// Prompt player 1 for a word. The word must have a minimum of 8 letters. Present the word 
// in the console with stars (********).
// At this point continuously prompt player 2 for a letter.
// If the letter is in the word chosen by player 1, display the word in stars again but with the correct 
// letter (*****t**).
// If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
// If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
// Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
// If player 1 wins, display a message that says CONGRATS YOU WIN.

let inputWord = prompt(`Player 1, enter a word with 8 letters`);
// let inputLetter = prompt(`Player 2, enter a letter. Amount of chances: ${n}`)

function startAGame (word ="elephant"){
    let wordHidden = "";
    let letersAttempted =[];
  
    wordHidden = wordHidden.padEnd(word.length, "*");
    console.log(wordHidden);
    console.log(wordHidden);
    console.log(wordHidden);
    console.log(wordHidden);

    for (let n =10; n >=0; n--){

      if (isFinished(wordHidden)){
        console.log(wordHidden)
        console.log(`CONGRATS YOU WIN`)
        return;
      } else if (n === 0){
        console.log(`YOU LOSE`)
        return
      } else {
        let letter = prompt(`Player 2, enter a letter. Amount of chances: ${n}
        Leters that you tried:  ${letersAttempted}`)
        letersAttempted.push(letter)
        wordHidden = searchALetter(word, wordHidden, letter)
        console.log(wordHidden)
      }

    }
    }
startAGame(inputWord)

// Checking is the game finished
function isFinished (str){
    let arr = str.split("")
    for (let i=0; i<= arr.length-1; i++){
        if ("*" === arr[i]){
          return false
        } 
    }
    return true
}

function searchALetter (wordReal="elephant",wordInStars="elep***nt", letter="h"){
    let wordHidden =wordInStars
    for (let i=0; i<=wordReal.length-1; i++){
        if (letter === wordReal[i]){
            wordHidden = addNewLetter(wordHidden, letter, i)
        }
    }
    return wordHidden;
}
searchALetter()

// Swapping the "*" to the guesed letter
function addNewLetter(string, letter, index){
    let word = string.split("")
    word.splice(index,1,letter)
    let wordString = word.join("")
    return wordString
}
