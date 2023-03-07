const SearchBox = (props) => {
    return (
        <div>
        <input type="text" onChange = {(e) => props.handleChange(e)}/>
      </div>
    )

}

export default SearchBox