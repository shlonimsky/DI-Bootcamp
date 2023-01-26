// Prompt the user for several words (separated by commas).
// Put the words into an array. 
// Hello,hi,morning
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
let sentence = prompt(`Please, enter several words (separated by commas and space)`);
sentence = sentence.split(", ");
console.log(sentence);
let longest = 0;
// let arr = ["Hello", "myfriend", "by"]
for (let word of sentence) {
 if (word.length>longest){
    longest = word.length;
 }
}
let div;
for (let i = -1; i <= sentence.length; i++){
    if (i<0 || i === sentence.length){
        div = "";
        div = div.padEnd(longest+4,"*")
        console.log(div)
    } else  {
        div = "";
        div = "* "+sentence[i] + div.padEnd(longest-sentence[i].length," ") + " *";
        console.log(div);
    } 
}
