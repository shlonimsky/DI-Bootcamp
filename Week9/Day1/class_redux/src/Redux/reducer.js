const initState = {
    property_one : 'text one from storee Redux',
    property_two : 'hi, its Nastya'
}

export const reducer = (state = initState, action={}) => {
//state wee could call whatever wee want
//action by dfault its an object, it anothr parameter it useed to change values of obj 
switch(action.type){
    case 'PROP_ONE' : return {...state,property_one : action.payload}
    case 'PROP_TWO' : return {...state,property_two:action.payload}
    case 'PROP_SWITCH' : return {...state, property_one : state.property_two,property_two: state.property_one}
    default: return {...state}
}
// return {...state}
}