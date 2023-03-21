const initState = {
    cityKeys : JSON.stringify(localStorage.getItem("cityKeys")) || []
}

export const reducer = (state=initState,action={}) => {
    switch (action.type){
        case 'SAVE_KEY' : 
        const newArr = state.cityKeys.push(action.payload)
        console.log(state.cityKeys)
        return{...state, cityKeys : newArr}
        default : return {...state}
    }
}