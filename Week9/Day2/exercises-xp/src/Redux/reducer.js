const initState = {
    transactions : JSON.parse(localStorage.getItem("transactions")) || [],
    currentIndex: -1
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
        case 'INSERT' : return {...state, transactions :  [...state.transactions, action.payload] };
        case 'UPDATE' : {
            copy.transactions.splice(state.currentIndex, 1, action.payload);
            return {...state, transactions : copy.transactions}
        }
        case 'DELETE' : {
            copy.transactions.splice(action.payload,1);
            return {...state, transactions : copy.transactions}
        }
        case 'UPDATE-INDEX' : return {...state,currentIndex:action.payload};
        default : return{...state}
    }
}