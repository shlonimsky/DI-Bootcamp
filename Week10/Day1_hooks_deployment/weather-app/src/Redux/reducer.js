const initState = {
    cityKeys : JSON.parse(localStorage.getItem("cityKeys")) || []
}

export const reducer = (state=initState,action={}) => {
    console.log(state)
    switch (action.type){
        case 'SAVE_KEY' : 
        const newArr = state.cityKeys.push(action.payload)
        console.log(state.cityKeys)
        return{...state, cityKeys : newArr}
        default : return {...state}
    }
}