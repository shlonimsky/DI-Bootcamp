// Using Javascript:
// Retrieve the div and console.log it
const div = document.querySelector("#container")
console.log(div)
// Change the name “Pete” to “Richard”.
div.nextElementSibling.lastElementChild.textContent = "Richard"
console.log()
// Change each first name of the two <ul>'s to your name.
let listOfUl = document.getElementsByClassName("list")
console.log(listOfUl)
for (let ul of listOfUl) {
    ul.firstElementChild.textContent = "Anastasiia"
    // Add a class called student_list to both of the <ul>'s.
    ul.classList.add("student_list");
}
// Delete the <li> that contains the text node “Sarah”.
document.body.children[2].removeChild(document.body.children[2].children[1]);

// Add the classes university and attendance to the first <ul>.
document.body.children[1].classList.add("university", "attendance");
