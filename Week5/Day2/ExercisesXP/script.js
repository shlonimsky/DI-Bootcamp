// 🌟 Exercise 1 : Giphy API
// With your knewly accumulated knowledge of AJAX lets write some cool code!
// You will work with this part of the documention
// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs
const xhr1 = new XMLHttpRequest();
xhr1.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
xhr1.send();
xhr1.onload = function(){
    const res = JSON.parse(xhr1.response)
    console.log(res)
 }

//  🌟 Exercise 2 : Giphy API
//  Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
//  Console.log the Javascript Object

const xhr2 = new XMLHttpRequest();
xhr2.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2")
xhr2.send();
xhr2.onload = function(){
    const res = JSON.parse(xhr2.response)
    console.log(res)
 }