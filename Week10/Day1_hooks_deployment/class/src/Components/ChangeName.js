import { useContext } from "react"
import { AppContext } from "../App"


const ChaangeName = (props) => {
    // return(
    //     <div>
    //         <input onChange={(e) => props.setName(e.target.value)}/>
    //     </div>
    // )

    //destruction

    
    const {name,setName} = useContext(AppContext)
    return(
        <div>
            <input onChange={(e) => setName(e.target.value)}/>
        </div>
    )
}

export default ChaangeName