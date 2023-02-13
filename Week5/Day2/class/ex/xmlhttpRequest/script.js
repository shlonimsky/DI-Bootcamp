// Exercise1:
// Create a program using XMLHTTPREQUEST to receive data from the below API and append it to the DOM.
// Use the events onload, onprogress,onerror
// http://universities.hipolabs.com/search?country=Israel

const request = new XMLHttpRequest;
request.open("GET", "http://universities.hipolabs.com/search?country=Israel")
request.send();

request.onload=function (){
    if (request.status !== 200) {
        console.log("error");
    } else {
        const university = JSON.parse(request.response);
        console.log(university)
        appending(university);
}
}

request.onprogress = function(ev){
    const percent = parseInt(ev.loaded/ev.total*100);
    const span = document.querySelector("span")
    span.textContent = percent;
console.log(`Loading`)
}

request.onerror = function (){
   console.log(`Error`)
}

function appending(data){
    
    data.forEach(element => {
        const {name, web_pages:[web]} = element
    const section = document.getElementById("container");
    const div = document.createElement("div")
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const pText1 = document.createTextNode(name)
    const pText2 = document.createTextNode(web)

    p1.appendChild(pText1)
    p2.appendChild(pText2)
    div.appendChild(p1)
    div.appendChild(p2)
    section.appendChild(div)
});
}