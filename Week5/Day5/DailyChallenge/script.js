// https://v6.exchangerate-api.com/v6/a7973e4e9141df7de98e0c00/codes
// https://v6.exchangerate-api.com/v6/a7973e4e9141df7de98e0c00/pair/EUR/GBP/AMOUNT

(function(){
    const form = document.forms[0]
    form.addEventListener("submit", convertCurrencies)
}())

async function getCurrency(){
    try{
        const select1 = document.querySelector("#cur1")
        const select2 = document.querySelector("#cur2")
        const response = await fetch("https://v6.exchangerate-api.com/v6/a7973e4e9141df7de98e0c00/codes")
        if (response.status !== 200){
           throw new Error(`ERROR OCCURED`) 
        } else{
            const codes = await response.json()
            createOptionTags(codes.supported_codes,select1,"USD")
            createOptionTags(codes.supported_codes,select2,"UAH")

        }
    } catch(err){
        console.log(err)
    }
       
}
getCurrency()

function createOptionTags(currencies,element,value){
    currencies.forEach(curr => {
        const option = document.createElement("option")
        option.value=`${curr[0]}`
        if(curr[0]===value){
            option.selected=true
        }
        const optionText = document.createTextNode(`${curr[0]} - ${curr[1]}`)
        option.appendChild(optionText)
        element.appendChild(option);
    });
}

function convertCurrencies(e){
    e.preventDefault()
    const currencyFrom = e.target.cur1.value;
    const currencyTo = e.target.cur2.value;
    const amount = e.target.amount.value;
    fetchConverter(currencyFrom,currencyTo,amount)
}

async function fetchConverter(from,to,amount){
    try{
        const response = await fetch(`https://v6.exchangerate-api.com/v6/a7973e4e9141df7de98e0c00/pair/${from}/${to}/${amount}`)
        if(response.status !==200){
            throw new Error(`ERROR in fetchConverter function`)
        }
        const result = await response.json()
        displayResult(result.conversion_result,result.target_code)
    } catch(err){
        console.log(err)
    }
}

async function displayResult(res,curr){
    const p = document.getElementById("result")
    p.textContent = res+" "+curr
}
  