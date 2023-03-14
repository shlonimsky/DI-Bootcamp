import {toStorage} from '../storage/storage'

const initState = {
    transactions : JSON.parse(localStorage.getItem("transactions")) || [],
    currentIndex: -1
}


export const reducer = (state=initState, action={}) => {
    const copy = JSON.parse(JSON.stringify(state.transactions))
    console.log("copy: ",copy)

    // console.log("reduse state  ", state)
    switch (action.type){

        case 'INSERT' : 
        copy.push(action.payload)
        toStorage("transactions",copy)
        return {...state, transactions :  copy };

        case 'UPDATE' : 
        copy.splice(state.currentIndex, 1, action.payload)
        toStorage("transactions",copy)
        return {...state, transactions : copy}

        
        case 'DELETE' : {
            copy.splice(action.payload,1);
            toStorage("transactions",copy)
            return {...state, transactions : copy}
        }
        case 'UPDATE-INDEX' : return {...state, currentIndex : action.payload};
        default : return{...state}
    }
}