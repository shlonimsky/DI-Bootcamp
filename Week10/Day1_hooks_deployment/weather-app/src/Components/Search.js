import { useState,useEffect } from "react"
import { useDispatch } from "react-redux"
import { addNewCityKey, showForecastByKey,showCityName } from "../Redux/actions"
// const apikey = 'wDxhLTEMv37UHBwB7kBcxivNtqRaw5gT'
const apikey = 'OzUJnnupHtHKQo9VDkzgoMLavh8JdvwN'
const LondonKey = '328328'


const Search = (props) => {
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [search,setSearch] = useState([])
    
const handleChange = (e) => {
    // if ( code < 65 || code > 95 || code !== 46 || code !== 37 || code!==39 || code !== 32 ||code !== 20 || code !== 13  ) console.log('true')
    // if (!text.match(/^[a-zA-Z\s]*$/)) e.preventDefault()
    setText(e.target.value)

    fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${text}`)
    .then(res => res.json())
    .then(data => setSearch(data))
}

const handleClick = (key,city) => {
    console.log(key)
    setText(city)
    dispatch(showForecastByKey(key))
    dispatch(showCityName(city))
    setSearch([])

}
console.log(text)
    return(
        <div>{text}
            <input onChange={(e) => handleChange(e)} value={text}/>
            <div>
                { !search ? <></> : (
                    <ul>
                        {search.map(el => (
                            <li key={el.Key} onClick={ () => handleClick(el.Key,el.LocalizedName)}>{el.LocalizedName}, {el.Country.LocalizedName}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Search

