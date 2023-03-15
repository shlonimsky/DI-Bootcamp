import {SEARCH,GET,LOADING} from './constants'
const initState = {
    robots : [],
    search : "",
}

export  const reducer = (state=initState, action = {}) => {
    console.log("in reducer",state)
    switch (action.type) {

        case GET : return {...state, robots : action.payload}

        case SEARCH : 
        // const clone = JSON.parse(JSON.stringify(state.robots))
        state.robots.filter(r => r.name.toLowerCase().includes(state.str))
        return{...state, search : action.payload}

        default: return{...state}
    }
}
