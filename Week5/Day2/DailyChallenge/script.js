// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

(function(){
    const searchForm = document.forms.ex2
    searchForm.addEventListener("submit", findTheGif)
    counter =0;
}());
function findTheGif(e){
    e.preventDefault();
const searchValue = e.target[0].value
console.log(searchValue)
retriveGifAPI(searchValue)
}
function retriveGifAPI(string){
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://api.giphy.com/v1/gifs/random?q=${string}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
xhr.send();
xhr.onload = function(){
    if (xhr.status !== 200) {
        alert("error,enter another value");
    } else {
        const res = JSON.parse(xhr.response)
        displayGif(res);
    }
 }
}

const section = document.getElementById("container")

 function displayGif(obj){
    const {data:{images:{original:{url}}}} = obj
    console.log(url);
    // const section = document.getElementById("container")
    const div = document.createElement("div")
    const img = document.createElement("img")
    img.src=url
    const btn = document.createElement("button")
    btn.id=counter
    btn.addEventListener("click", deleteGif)
    const btnText = document.createTextNode("DELETE")

    div.appendChild(img)
    div.appendChild(btn)
    btn.appendChild(btnText)
    section.appendChild(div)
    counter++;
 }

 function deleteGif(e){
    const btnID = document.getElementById(`${e.target.id}`);
    btnID.parentElement.remove();
    // section.children[btnID].remove()
 }