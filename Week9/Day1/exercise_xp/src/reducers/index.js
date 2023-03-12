const initialState ={
    count : 0
}

export const reducer = (state=initialState,action={}) => {
switch(action.type){
    case 'ADD' : return {...state, count : state.count+1}
    case 'REDUCE' : return {...state,count : state.count-1}
    default : return{...state}
}
}