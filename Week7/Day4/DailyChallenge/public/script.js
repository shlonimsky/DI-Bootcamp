
const form = document.forms[0]
form.addEventListener("submit", sendData)
const allInputs = form.querySelectorAll("[required]")
const btn = document.querySelector("button")

const inputCheck = () => {
    let isEmpty = false
    for (const inp of allInputs.values()) {
        if(!inp.value || inp.value===" "){
            isEmpty = true
            break
        }
      }
    !isEmpty? btn.disabled=false:btn.disabled=true
}

async function sendData (e) {
    e.preventDefault()
    const user = {};
    for (let inp of allInputs){
        user[inp.name]=inp.value.toLowerCase()
    }
    console.log(user);
    // console.log(JSON.stringify(user))
    const response = await fetch(window.location.href,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(user)
    })
    const result = await response.json();
    appendToBody(result)
}
function appendToBody(mess){

document.getElementById("message").textContent=mess
}