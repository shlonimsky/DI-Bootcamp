export  const changePropOne = (value) => {
    return{
        type : "PROP_ONE",
        payload : value
    }
}

export const changePropTwo = (value) => {
    return {
        type : "PROP_TWO",
        payload : value
    }
}
export const swithchProps =() => {
    return {
        type : 'PROP_SWITCH'
    }
}
// export {changePropOne,changePropTwo}