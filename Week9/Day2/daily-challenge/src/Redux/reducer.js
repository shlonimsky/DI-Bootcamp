import {robots} from '../Robots/robots'
const initState = {robots,search : ""}

export const reducer = (state=initState,action={}) => {
    const copy = JSON.parse(JSON.stringify(state.robots))

    // console.log("copy",copy)
    // const filtered = copy.filter(rob => rob.name.toLowerCase().includes(state.search))
    // console.log("serach in reducer",state.search)
    // console.log("foltered",filtered)

    switch (action.type) {
        case 'SEARCH' : return {...state, search : action.payload.toLowerCase()}
        default : return {...state} //, robots : state.robots.filter(rob => rob.name.toLowerCase().includes(state.search))}
    }
    // if (action.type==='SEARCH')  return {...state, robots : filtered, search : action.payload.toLowerCase()}
    // else return{...state, robots : filtered}
      
        // return {
        //     ...state, robots : filtered
        // }
    
   
}