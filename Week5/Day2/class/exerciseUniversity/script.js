const xhr = new XMLHttpRequest();

function initialize (e) {
    e.preventDefault()
    const query = myform.elements[0].value;
    console.log(query);
    xhr.open("GET", `http://universities.hipolabs.com/search?country=${query}`)
    xhr.send();
}

xhr.onload = function () {
    if (xhr.status !== 200){
        console.log("error");
    } else {
        const data = JSON.parse(xhr.response);
        console.log(data);
        displayUniversity(data);
    }
}

const div = document.getElementById("uploadPercent");

xhr.onprogress = function (event) {
    const span = document.querySelector("span");
    div.style.display = "block";
    const percent = parseInt((event.loaded / event.total) * 100);
    span.textContent = percent;
}

xhr.onerror = function () {
    console.log("error from the server");
}


function displayUniversity(allUni){
    const section = document.getElementById("container");
    div.style.display = "none";
    allUni.forEach(elem => {
        const {
            name,
            web_pages : [web]
        } = elem

        const card = document.createElement("div");
        card.classList.add("university");
        const nameR = document.createElement("p");
        const addressR = document.createElement("p");
        const textName = document.createTextNode(name);
        const textAddress = document.createTextNode(web);
        nameR.appendChild(textName);
        addressR.appendChild(textAddress);

        card.appendChild(nameR);
        card.appendChild(addressR);

        section.appendChild(card);
    })
}

const myform = document.forms[0];
myform.addEventListener("submit", initialize);