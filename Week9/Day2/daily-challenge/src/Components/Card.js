import {connect} from 'react-redux'

const Card = (props) => {
    return(
        <div>
            {
                props.rob.map(pers => {
                    if ( pers.name.toLowerCase().includes(props.text)) {
                        return (
                            <div key={pers.id} className="bg-light-green dib br3 ma3 grow bw2  shadow-5"> 
                            <img src={`https://robohash.org/set_set4/1${pers.username}}?size=300x300`} alt='robo'/>
                            <h4>{pers.name}</h4>
                            <h4>{pers.username}</h4>
                            <h4>{pers.email}</h4>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.search)
    return{
        rob : state.robots,
        text : state.search
    }
}

export default connect(mapStateToProps)(Card)