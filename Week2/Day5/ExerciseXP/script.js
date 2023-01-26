let num;
function playTheGame(){
    let answer = confirm(`Would ypu like to play the game?`);
    if (!answer) {
        alert(`No probblem, Good by!`);
        return;
    } else {
        do {
            num = prompt(`Please, enter a number from 0 to 10`);
        }
        // I added charCodeAt(0) to exclude a space, because it gives 0 that counts like an attempt.
        while (num == "" || num.charCodeAt(0) === 32 || isNaN(+num) || num<0 || num>10)
    }
    num = Number(num);
    let computerNumber = Math.random() * 10;
    computerNumber = Math.round(computerNumber);
    console.log(computerNumber)
    compareNumbers(num,computerNumber)
}


function compareNumbers(userNumber,computerNumber) {
    for (let attempt = 1; attempt<=3; attempt++){
    if (attempt === 3) {
        alert(`Out of chances`);
    } else {
     if (userNumber === computerNumber) {
        alert(`WINNER`);
        break;
    } else if (userNumber > computerNumber){
        userNumber = +prompt(`Your number is bigger then the computer's, guess again. Left ${3-attempt} attempts`);
        continue;
    } else {
        userNumber = +prompt(`Your number is lower then the computer's, guess again. Left ${3-attempt} attempts`);
        continue;
    }
    }
}
}
