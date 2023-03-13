import {connect} from 'react-redux'
const Results = (props) => {
    return(
        <div>
            <h1>Results</h1>
            <p>His name: {props.he}</p>
            <p>Her name: {props.she}</p>
            <p>percentage: {props.perc}</p>
            <p>Result: {props.res}</p>



        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return{
        he: state.his_name,
        she : state.her_name,
        perc : state.percentage,
        res : state.result,
    }
}



export default connect(mapStateToProps)(Results)