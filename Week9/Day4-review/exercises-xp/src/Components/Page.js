import {useParams,Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import { createClient } from 'pexels';

const APIkey = 'yzo5xjljIaO8BzoPN5ANmmhv2uUj5UsgoDxD8K5fnWRn17L1hpcezT4d'
const client = createClient(APIkey);
let text = 'hello'

// client.photos.search({ query, per_page: 30 }).then(photos => console.log(photos)); 


const Page = (props) => {
    const [photos,setPhoto] = useState([])
    // const [photos,setPhoto] = useState([])

    let params = useParams()
    console.log("params",params)

    let query = params.q
    if (!query) {
        query=props.theme
    console.log("query",query)
    }
    console.log("query",query)

    // let query = props.theme
    // if ( !query) query = useParams()


    useEffect(() => {
    // const url=`https://api.pexels.com/v1/search?query=${query}&per_page=30`;
    // const gallery = fetch(url,{
    //   method: 'GET',
    //   headers:{
    //     Accept: 'application/json',
    //     Authorization: APIkey
    //   }
    // })
    // .then(response => response.json())
    // .then(results => setPhoto(results.photos))
    // .catch(err => console.error(err));

    client.photos.search({ query, per_page: 30 })
    .then(res => setPhoto(res.photos));

    },[query])

    const handleChange = (e) => {
        text=(e.target.value)
        console.log(text)
    }
    console.log(photos)

    const handleClick = (e) => {
        // e.preventDefault()
        console.log("in link func",text)
    }
//onclick={(e) => handleClick(e)}
return(
<>
    <div className='inLine'>
        {/* <form action={`/search/${text}` } > */}
        <input onChange={(e) => handleChange(e)} type="text" placeholder='search'/>
        {/* <button  type='button'> <Link to={'/search'+'/'+text} onclick={(e) => handleClick(e)} >Search</Link></button> */}
        <div> <Link to={`/search/${text}`} onclick={(e) => handleClick(e)} >Search</Link></div>

        {/* </form> */}

    </div>

    <div>
        <Link to={`/mountain`}>Mountain</Link>
        <Link to={`/beach`}>Beaches</Link>
        <Link to={`/bird`}>Birds</Link>
        <Link to={`/food`}>Food</Link>

        <h2>{props.theme} pictures</h2>
        <div className='container'>
        {photos.lenhtj === 0 ?  <p>Loading</p> : <></>}
            {
                photos.map(item => {
                    return (
                       <img key={item.id} src={item.src.small} alt='img'/>
                    )
                })
            
            }
        </div>
      
    </div>
</>
)
}

export default Page