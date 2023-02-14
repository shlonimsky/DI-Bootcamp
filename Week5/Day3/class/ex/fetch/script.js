// Exercise : use fetch
// PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then append the gif to the page. Use this documentation 
// https://developers.giphy.com/docs/api/endpoint#random https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Part II
// Instead of having a fixed category of gif. First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1 You will then fetch 1 random gif, depending on the word. The word will be the gif category Display the word and the gif on the page
// For example: you will fetch the random-word-api. This api will return a random word - for example : "happy" Using this word as a category, you will fetch one random gif with the category of "happy" and display it on the page
// Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"
function getGif(word =receiveWord()){
    fetch (`https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    .then(resOne => {
        if(resOne.status !== 200){
            console.log(`Status Error`)
        } 
        else {
            return resOne.json()
        }
    })
    .then(resTwo => {
        if (resTwo.data.length===0){
            console.log(`The data is empty`)
            getGifError("error")
        } else{
        const img = resTwo.data.images.original.url
        createImage(img)
        }
    })
    .catch(err => console.log("Some Error"))
}
getGif()

function createImage(url){
    const section = document.getElementById("container");
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = url;
    div.appendChild(img)
    section.appendChild(div)
}

function receiveWord(){
    fetch(`http://random-word-api.herokuapp.com/word?number=1`)
    .then(resOne => {
        if(resOne.status !== 200){
            console.log(`Error`)
        } else {
            // console.log(resOne.json())
            return resOne.json()
        }
    })
    .then(resTwo => {
        console.log(resTwo);
        return resTwo
    })
}

function getGifError(error){
fetch (`https://api.giphy.com/v1/gifs/random?tag=${error}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    .then(resOne => resOne.json())
    .then(resTwo => {
        const img = resTwo.data.images.original.url
        createImage(img)
    })
    .catch(err => console.log("Error"))
}
