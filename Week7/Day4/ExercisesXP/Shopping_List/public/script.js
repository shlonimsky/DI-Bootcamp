(function(){
    const form = document.forms[0];
    form.addEventListener("submit", retrieveFormData)
    getShoppingList()
})()

async function getShoppingList(){
    const response = await fetch('/api/list')
    const result = await response.json()
    if (result.length>0){
        for (let obj of result){
            appendList(obj)
        }
    }
}


function retrieveFormData (e){
    e.preventDefault();
    const form = document.forms[0]
    const item = e.target.item.value;
    const amount = e.target.amount.value;
    sendData({item,amount})
}

async function sendData(obj){
    const response = await fetch('/api/list', {
        method : "POST" ,
        headers : {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(obj)
    })
    const result = await response.json()
    for (const item of result){
        appendList(item)
    }
}

function appendList(obj){
    const ul = document.getElementById('list')
    const li = document.createElement("li")
    li.textContent = obj.item +" " + obj.amount
    ul.appendChild(li)
}