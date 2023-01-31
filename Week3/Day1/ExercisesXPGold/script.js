// Exercise 1 : Red Table
// write some Javascript code to color all diagonal table cells in red.
const table = document.querySelectorAll("tr")
console.log(table)


function diagonalCells (){
for (let n=0; n<=table.length-1; n++){
    table[n].children[n].classList.add("diagonal")
    console.log(table[n].children[n])
}
}
diagonalCells()