// Async Await
// Exercise Game - The word game You need to create 4 functions, each of them return a promises
// The 1st function, receives 2 famous persons name from the user - if the names are not a string -> reject else - resolve with the 
// name of the 2 ppl in an array
// The 2nd function, receives a noun if the noun is less than 3 letters - reject else - resolve with the noun
// The 3rd function, receives a city if the city doesn't start with an uppercase letter -> reject else - resolve with the city name
// The 4st function, receives a verb (finishing with "ing") if it doesn't end with "ing" -> reject (use the endWith string method) else resolve with the verb
// The last function, is an async function - it receives all the above promises, and return a sentence with it Ex: "Beyonce is playing football with Barack Obama in Paris"
async function first(name1,name2){
            if (typeof name1 !=="string" && typeof name2 !== "string"){
                throw new Error(`not a string`) 
            } else {
                const arrName=[name1,name2];
                return arrName
            }
        }


async function second(noun){
        if (noun.lemgth <3){
            throw new Error(`Less then 3 letters`)
        } else {
            return noun
        }
  }

  async function third(city){
    if (city[0] === city[0].toUpperCase()){
        return city
    } else{
        throw new Error(`First letter is low Case`)
    }
  }

  async function fourth(verb){
    const ing = verb.substr(-3, 3)
    if(ing ==="ing"){
        return verb
    } else {
        throw new Error(`Doesn't finish with -ing`)
    }
}

async function lastOne(){
    let sentence="";
    try {
        const func1 = await first("Obama","Beyonce");
        const func2 = await second ("guitar")
        const func3 = await third("New York")
        const func4 = await fourth("playing")
        sentence = `${func1[0]} is ${func4} ${func2} with ${func1[1]} in ${func3}`
        console.log(sentence)
    } catch (err){
        console.log(err)
    }
}
lastOne()



// The redoing exercise from previous lesson


 async function getWord () {
    const response = await fetch("http://random-word-api.herokuapp.com/word?number=1")
    if(response.status !== 200){
        throw new Error ("Couldnt find a word")
    }
    const word = await response.json();
    return word[0];


    // .then((resOne) => {
    //     if(resOne.status !== 200){
    //         throw new Error ("Couldnt find a word")
    //     }
    //     return resOne.json();
    // })
    // .then((resTwo) => {
    //     console.log(resTwo[0]);
    //     getGif(resTwo[0]);
    // })
    // .catch((err) => {
    //     const errorGif = "https://media.giphy.com/media/rZYf7RpRvRWOaMCCZz/giphy.gif"
    //     displayInfo(`ERROR WORD NOT FOUND ${err}`, errorGif)
    // })
}


async function getGif (word) {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${word}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    if(response.status !== 200){
        throw new Error ("Couldnt find a word");
    }
    if(response.data.length === 0) {
            throw new Error("Couldnt find a gif");
    } 
    const gif = await response.json();
    return gif.data.images.original.url
}


    // .then((resOne) => {
    //     if(resOne.status !== 200){
    //         throw new Error ("Couldnt find a word");
    //     }
    //     return resOne.json();
    // })
    // .then((resTwo) => {
    //     if(resTwo.data.length === 0) {
    //         throw new Error("Couldnt find a gif");
    //     } else {
    //         const gif = resTwo.data.images.original.url;
    //         displayInfo(word, gif);
    //         console.log(gif);
    //     }
       
    // })
    // .catch((err) => {
    //     const errorGif = "https://media.giphy.com/media/rZYf7RpRvRWOaMCCZz/giphy.gif"
    //     displayInfo("ERROR", errorGif)
    // })

    async function getAll(){
        try{
            const word = await getWord();
        const gif = await getGif(word);
        displayInfo(word,gif)

        } catch(err){

        }
    }



function displayInfo(wordUser, gifUser) {
    const container = document.getElementById("container");
    const div = document.createElement("div");
    const para = document.createElement("p");
    const image = document.createElement("img");

    const text = document.createTextNode(wordUser);
    para.appendChild(text);
    image.src = gifUser;

    div.append(para, image);
    container.appendChild(div);
}

getWord()