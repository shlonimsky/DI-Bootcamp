// In a separate js file, create an Actor component.
// In the App component, create an array of objects containing three actors. Requirement: Each object should have the properties "firstName", "lastName" and "image" (a url).
// In the App component, call the Actor component and pass the actors list as attribute.
// Render the list of actors.
import './Actor.css'

const Actor = (props) => {
   
    return(
    
        props.actorList.map(act => (
            <>
            <ul className='green'>
                <li style={{
                    border : 'solid',
                    backgroundColor : 'pink'
                }}>{act.fname}</li>
                <li>{act.lname}</li>
                <li><img src={act.img}  alt='actor' style={{
                    width : '100px'
                }}></img></li>
            </ul>
            </>

        ))
    )
}

export default Actor