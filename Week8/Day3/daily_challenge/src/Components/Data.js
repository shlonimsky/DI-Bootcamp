const Data = (props) => {
    return(
        <div className='data'>
        <h1>Entered information:</h1>
        <h4>Your name: {props.data.firstName} {props.data.lastName}</h4>
        <h4>Your age: {props.data.age}</h4>
        <h4>Your gender: {props.data.gender}</h4>
        <h4>Your destination: {props.data.destination}</h4>
        <h4>Your dietary restrictions:</h4>
        <p>Nuts free: {props.data.nutsFree? "Yes" : "No"} </p>
        <p>Lactose free : {props.data.lactoseFree? "Yes" : "No"} </p>
        <p>Vegan meal  : {props.data.vegan? "Yes" : "No"} </p>
        </div>
    )
}
export default Data