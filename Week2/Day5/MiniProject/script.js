let num;
function playTheGame(){
    let answer = confirm(`Would ypu like to play the game?`);
    if (!answer) {
        alert(`No probblem, Good by!`);
    } else {
        do {
            num = +prompt(`Please, enter a number from 0 to 10`);
        }
        while (isNaN(num) || num === " " || num<0 || num>10)
    }
    let computerNumber = Math.random() * 10;
    computerNumber = Math.round(computerNumber);
    console.log(computerNumber)
    console.log(num)
    compareNumbers(num,computerNumber)
}


function compareNumbers(userNumber,computerNumber) {
    console.log(num);
    for (let attempt = 1; attempt<=3; attempt++){
    if (attempt === 3) {
        alert(`Out of chances`);
    } else {
     if (userNumber === computerNumber) {
        alert(`WINNER`);
        break;
    } else if (userNumber > computerNumber){
        alert(`Your number is bigger then the computer's, guess again`);
        userNumber = +prompt(`Enter the bigger number. You have ${3-attempt} attempts`);
        continue;
    } else {
        console.log(userNumber)
        alert(`Your number is lower then the computer's, guess again`);
        userNumber = +prompt(`Enter the lower number. You have ${3-attempt} attempts`);
        continue;
    }
    }
}
}
