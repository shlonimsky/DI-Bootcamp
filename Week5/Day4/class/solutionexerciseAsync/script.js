// Async Await
// Exercise Game - The word game You need to create 4 functions, each of them return a promises

// The 1st function, receives 2 famous persons name from the user - if the names are not a string -> reject else - resolve with the name of the 2 ppl in an array

// The 2nd function, receives a noun if the noun is less than 3 letters - reject else - resolve with the noun

// The 3rd function, receives a city if the city doesn't start with an uppercase letter -> reject else - resolve with the city name

// The 4st function, receives a verb (finishing with "ing") if it doesn't end with "ing" -> reject (use the endWith string method) else resolve with the verb

// The last function, is an async function - it receives all the above promises, and return a sentence with it Ex: "Beyonce is playing football with Barack Obama in Paris"

async function getNames (nameOne, nameTwo) {
    if(typeof nameOne !== "string" || typeof nameTwo !== "string") {
        throw new Error("Bad names")
    } else {
        return [nameOne, nameTwo]
    }
}

async function getNoun (noun) {
    if(noun.length < 3) {
        throw new Error("Bad noun")
    } else {
        return noun;
    }
}

async function getCity (city) {
    if(city[0] !== city[0].toUpperCase()) {
        throw new Error("Bad city")
    } else {
        return city;
    }
}


async function getVerb (verb) {
    if(!verb.endsWith("ing")) {
        throw new Error("Bad verb")
    } else {
        return verb;
    }
}

async function getAll() {
    try {
        const names = await getNames("Beyonce", "Obama");
        const verb =  await getVerb("playing");
        const noun =  await getNoun("football");
        const city =  await getCity("Paris");
        console.log(`${names[0]} and ${names[1]} are ${verb} ${noun} in ${city}`);
    } catch (err) {
        console.log("AN ERROR OCCURED IN THE PROMISES");
    }
}

getAll()

