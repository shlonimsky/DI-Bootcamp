const div = document.getElementById("info");
const h1 = document.querySelector("h1");

(function(){
    console.log(`here`);
    const button = document.querySelector("button")
    button.addEventListener("click", mainFunction)
}())

async function mainFunction(){
    try {
        deleteAll()
    const random = Math.floor(Math.random() * 83) + 1;
    const resultPeople = await fetch(`https://www.swapi.tech/api/people/${random}`)
    if (resultPeople.status !== 200){
        throw new Error (`The character not found`)
    
    } else {
        const people = await resultPeople.json();

        const {result : {properties : {
                name : fullName, 
                height, 
                gender,
                birth_year,
                homeworld
            }}} =people
    
        const resultHome = await fetch(homeworld);
        const planet = await resultHome.json();
        const {result : {properties : {name : planetName}}} = planet
        console.log(planetName)
        displayCharacter(fullName,height,gender,birth_year,planetName)
    }
    
    } catch (err){
        console.log(err)
        displayError()
    }
}


// function getPeople(){

// }



function displayError(){
    h1.textContent = `Oh no! This person is not availble`
}

function displayCharacter(name,height,gender,birth,home){
    h1.textContent = name
    const p1 = document.createElement("p")
    p1.textContent=`Height : ${height}`;
    const p2 = document.createElement("p");
    p2.textContent = `Gender : ${gender}`;
    const p3 = document.createElement("p");
    p3.textContent = `Birth Year : ${birth}`;
    const p4 = document.createElement("p");
    p4.textContent = `Home World : ${home}`;
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    div.appendChild(p4)
}

function deleteAll(){
    while(div.children[1]!=undefined){
        div.children[1].remove()
    }
    const icon = document.createElement("i")
    icon.classList.add("fa-solid","fa-spinner","fa-spin-pulse")
    h1.textContent="Loading...  ";
    h1.appendChild(icon);
}
