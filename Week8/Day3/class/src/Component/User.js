const User = (props) => {
// console.log(props) //it will be executed twice because of <React.StrictMode> in index
    const style_rob = {
        display:'inlineblock', padding:'10px', margin: '10px', border:"solid white"
    }
return( //ALWAYS NEED TO RETURN
    <div style = {style_rob}>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
        <h5>{props.username}</h5>

    </div>
    )

}
export default User