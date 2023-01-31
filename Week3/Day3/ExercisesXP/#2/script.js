// 🌟 Exercise 2 : Move The Box
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of 
// the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of 
// the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions
const button = document.querySelector("#btn")
button.addEventListener("click", moveDiv)

function moveDiv(){
    console.log(`clicked`)
    const id = setInterval(moveDiv, 1)
    let x=0;
    function moveDiv(){
        let div = document.querySelector("#animate")
        if (x === 350){
        clearInterval(id)
        } else {
            x++
            div.style.left =`${x}px`
        }
        }
}

