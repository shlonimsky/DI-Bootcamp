const Card = (props) => {
return(
    <>
        <img src={props.hero.image} alt="hero"></img>
        <h4>Name: {props.hero.name}</h4>
        <h4>Occupation: {props.hero.occupation}</h4>
    </>
)
}

export default Card