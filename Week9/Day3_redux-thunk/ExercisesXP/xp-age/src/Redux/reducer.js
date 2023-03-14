import {PLUS,MINUS} from './actions'
const initState = {
    age : 20
}
export const reducer = (state = initState,action={}) => {
    switch (action.type){
        case  PLUS : return {...state,age : ++state.age}
        case  MINUS : return {...state, age : --state.age}
        default : return {...state}
    }
}