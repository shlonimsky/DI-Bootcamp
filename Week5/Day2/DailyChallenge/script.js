// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.
// const searchForm = document.forms.ex2

(function(){
    // add event to form
    const searchForm = document.forms.ex2
    searchForm.addEventListener("submit", retrieveFormValue)
    // creating counter for unique IDs
    counter =0;
}());


function retrieveFormValue(e){
    // finding an input value and calling the function for finding gif
    e.preventDefault();
    const searchValue = e.target[0].value
    retriveGifAPI(searchValue)
}

function retriveGifAPI(string){
    // sending request to Gif API and retrieving it
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.giphy.com/v1/gifs/random?tag=${string}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    xhr.send();
    xhr.onload = function(){
    // checking a status of respons and calling function to display the gif
    if (xhr.status !== 200) {
        alert("error,enter another value");
    } else {
        const res = JSON.parse(xhr.response)
        console.log(res)
        displayGif(res);
    }
 }
}

const section = document.getElementById("container")

 function displayGif(obj){
    // creating <img> and <button> and appending it to DOM

    const {data:{images:{original:{url}}}} = obj
    console.log(url);

    addButtonDeleteAll()

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

 function addButtonDeleteAll(){
    // checking if delete all button exist and if not - create it
    if(document.getElementById("deleteAll")===null){
        const btn = document.createElement("button")
        btn.id="deleteAll"
        btn.addEventListener("click", deleteAllGifs)
        const btnText = document.createTextNode("DELETE ALL")
        btn.appendChild(btnText)
        section.appendChild(btn)
    }
 }

 function deleteGif(e){
    // removing the gif after clicking on Delete button
    const btnID = document.getElementById(`${e.target.id}`);
    btnID.parentElement.remove();
    // section.children[btnID].remove()
 }
 function deleteAllGifs(){
    // deleting all child in container
do {
    section.children[0].remove()
} while(section.children[0]!=null)
 }