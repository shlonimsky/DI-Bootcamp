import {useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'


const ProductPage = (props) => {
    const [product,setProduct] = useState([])
    const [name,setName] = useState(product.name)
    const [price,setPrice] = useState(product.price)
    const params = useParams()

    useEffect(() => {
        fetch(`/api/products/${params.id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(err => console.log(err))
    },[])

    const changeName = (e) => {
        e.preventDefault()
        fetch(`/api/products/${params.id}`,{
            method: "PUT",
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify({name,price})
        })
        .then(res => res.json())
        .then(data => {
        setProduct(data)
        })
        .catch(e => {
        console.log(e);
        })
    }


    const deleteItem = (e) => {
       const ifDelete =  window.confirm('Are you sure?')
       ifDelete ? (
       fetch(`/api/products/${params.id}`,{
        method: "DELETE"
        // headers: {'Content-Type' : 'application/json'},
        // body : JSON.stringify({name,price})
        })
        .then(res => res.json())
        .then(data => {
        console.log(data)
        console.log(product)
        })
        .catch(e => {
        console.log(e);
        })
       ) : e.preventDefault()

    }

    return(
        <>
        <h1>Product Page</h1>
        <div>
            <form> Edit: {'  '}

                <input onChange={(e) => setName(e.target.value)} value={name} placeholder='change a name'/>
                <input onChange={(e) => setPrice(e.target.value)} value={price} placeholder='change a price'/>
                <button onClick={changeName}>edit</button>
            </form>
        </div>
        <div>
            <button onClick={(e) => deleteItem(e)}><Link to={`/`}>Delete Item</Link></button>
        </div>
        {
            product.map(item => {
               return (
                    <div key={item.id} style={{display : 'inline-block',margin:"20px",border:"solid", padding:"20px"}}>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <Link to={`/`}>Show All</Link>
                </div>
                )
            }
               )
        }
        </>
    )
}

export default ProductPage