// import {getFromLocalStorage,addToLocalStorage} from '../helpers/storage'
const initState = {
    transactions : [], //getFromLocalStorage('transactions'),
    currentIndex: -1,
    users : []
}

// export const reducer = (state=initState, action={}) => {
//     const copy = JSON.parse(JSON.stringify([...state.transactions]))
//     console.log("reduse copy  ", copy)
//     switch (action.type){
//         case 'INSERT' : return {...state, transactions : copy.push(action.payload) };
//         case 'UPDATE' : return {...state};
//         case 'DELETE' : return {...state};
//         case 'UPDATE-INDEX' : return {...state};
//         default : return{...state}
//     }
// }

export const reducer = (state=initState, action={}) => {
    const copy = JSON.parse(JSON.stringify(state))
    console.log("copy: ",copy)

    // console.log("reduse state  ", state)
    switch (action.type){
        case 'USERS' : 
        return {...state,users : action.payload}
        case 'INSERT' : {
            state.transactions.push(action.payload)
        // addToLocalStorage('transactions',{transactions :  [...state.transactions, action.payload]} )
        return {...state, transactions :  [...state.transactions, action.payload] }
        };
        case 'UPDATE' : {
            // addToLocalStorage('transactions',[...state.transactions])
            copy.transactions.splice(state.currentIndex, 1, action.payload);
            return {...state, transactions : copy.transactions}
        }
        
        case 'DELETE' : {
            // state.transactions.splice(action.payload,1)
            copy.transactions.splice(action.payload,1);
            // addToLocalStorage('transactions',[...state.transactions])
            return {...state, transactions : copy.transactions}
        }
        
        case 'UPDATE-INDEX' : return {...state,currentIndex:action.payload};
        default : return{...state}
    }
}