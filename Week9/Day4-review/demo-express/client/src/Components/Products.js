import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
// import { search } from '../../../routes/products'


const Products = (props) => {
    const [products,setProducts] = useState([])
    const [useText,setSearchText] = useState('')
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')

    useEffect( () => { // useEfect is allready async
        const getProducts = async () => {
            try{
                const response = await fetch('/api/products/')
                const data = await response.json()
                setProducts(data)
            } catch (err){
                console.log(err)
            }
        }
        getProducts()
    },[]) //,[] = didMount

    //MY solution
    // const searchProd = async (e) => {
    //     try{
    //         const resp = await fetch(`/api/products/search?q=${e.target.value}`)
    //         const data = await resp.json()
    //         setProducts(data)
    //     } catch (err){
    //         console.log(err)
    //     }
    // }

    const search = () => {
    fetch(`/api/products/search?q=${useText}`)
    .then(res => res.json())
    .then(data => {
      setProducts(data)
    })
    .catch(e => {
      console.log(e);
    })
    }

    const add = (e) => {
        e.preventDefault()
        fetch('/api/products/',{
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify({name,price})
        })
        .then(res => res.json())
        .then(data => {
        setProducts(data)
        })
        .catch(e => {
        console.log(e);
        })
    }
    return(
        <div>
            <h1>Shop</h1>
            <div>
                {/* my solution */}
                {/* <input onChange={(e) => searchProd(e)} placeholder='search'/>
                <button>Search</button> */}
                <input onChange={(e) => setSearchText(e.target.value)} placeholder='search'/>
                <button onClick={search}>Search</button>
            </div>
           
            <div>
                <h4>Add Product</h4>
                <form>
                    Name: <input onChange={(e) => setName(e.target.value) } />
                    Proce: <input onChange={(e) => setPrice(e.target.value) } />
                    <input onClick={add} type="submit" value="ADD" />

                </form>
            </div>

            {
                products.map(item => {
                    return(
                        <div key={item.id} style={{display : 'inline-block',margin:"20px",border:"solid", padding:"20px"}}>
                            <h2>{item.name}</h2>
                            <p>{item.price}</p>
                            <Link to={`/${item.id}`}>Show</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products