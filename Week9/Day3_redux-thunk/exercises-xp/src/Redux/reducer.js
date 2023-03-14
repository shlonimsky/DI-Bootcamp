const initState = {
    counter : 0
}

export const reducer = (state=initState,action={}) => {
    switch (action.type){
        case '+' : return{...state, counter : ++state.counter}
        case '-' : return{...state, counter : --state.counter}
        default : return {...state}
    }
}