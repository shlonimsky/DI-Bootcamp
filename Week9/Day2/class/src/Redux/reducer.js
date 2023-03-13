const data = {
    his_name : "",
    her_name : "",
    percentage : "",
    result : ""
}

export const reducer = (state=data,action={}) => {
    switch (action.type) {
        case 'HER_NAME': return{...state,her_name:action.payload}
        case 'HIS_NAME' : return{...state,his_name:action.payload}
        case 'FETCH_RES' : return {...state, percentage:action.payload.percentage, result: action.payload.result}
        default : return {...state}
    }
}