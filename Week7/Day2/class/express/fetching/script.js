async function getData(){
    const response = await fetch("http://localhost:5000/api/products");
    const data = await response.json() //ready to use data
    data.forEach(obj => {
        console.log(obj)
        appendData(obj)
    })
}
getData()

const appendData = ({name,price}) => {

    const container = document.getElementById("root")
    const p=document.createElement("p")
    p.textContent = `${name} costs ${price} $`
    container.appendChild(p)
}

const searchWithParams = () => {
    const prod_id = document.getElementById('prod_id').value;
    fetch(`http://localhost:5000/api/products/${prod_id}`)
    .then(res => res.json())
    .then(data => {
       appendData(data)
    })
    .catch(err => {
      console.log(data);
    })
  }

const searchWithQuery = () => {
    try{
    const nameQuery = document.getElementById("prod_name").value;
    fetch (`http://localhost:5000/api/search?q=${nameQuery}`)
    .then(res => res.json())
    .then(res1 => {
        res1.forEach(el => appendData(el))
    })
    } catch(err){
        console.log(err)
    }
}