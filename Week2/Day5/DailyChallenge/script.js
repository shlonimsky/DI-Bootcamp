// Daily Challenge: 99 Bottles Of Beer
// ==============================
// 99 bottles of beer on the wall
// 99 bottles of beer
// Take 1 down, pass it around
// 98 bottles of beer on the wall
// ==============================
let startCounting = +prompt(`Enter the number of bottles you want to start counting of:`)
bottlesOfBeer(startCounting)
function bottlesOfBeer (start) {
    let bottlesBroken = start;
    for (let n=1; bottlesBroken>=0; n++){
        
        if (bottlesBroken>n){
        wordsOfSong(bottlesBroken,n)
        bottlesBroken -= n;
        } else {
        n=bottlesBroken;
        wordsOfSong(bottlesBroken,n);
        return;
        }
    }
}

function wordsOfSong(bottle, down) {
    if (bottle === 1){
        console.log(`${bottle} bottle of beer on the wall
        ${bottle} bottle of beer
        Take ${down} down, pass it around
        ${bottle-down} bottle of beer on the wall`)
    } else if (bottle === down) {
        console.log(`${bottle} bottles of beer on the wall
        ${bottle} bottles of beer
        Take ${down} down, pass them around
        ${bottle-down} bottle of beer on the wall`)
    } else {
        console.log(`${bottle} bottles of beer on the wall
        ${bottle} bottles of beer
        Take ${down} down, pass them around
        ${bottle-down} bottles of beer on the wall`)
    }
}