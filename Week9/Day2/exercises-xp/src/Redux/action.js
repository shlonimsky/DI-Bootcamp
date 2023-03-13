export const Insert = (obj) => {
    // console.log("Insetr action ",obj)
    return {
        type : 'INSERT',
        payload : obj
    }
}

export const Update = (obj) => {
    return {
        type : 'UPDATE',
        payload : obj
    }
}

export const Delete = (ind) => {
    console.log("index in action", ind)
    return {
        type : 'DELETE',
        payload : ind
    }
}

export const UpdateIndex = (ind) => {
    return {
        type : 'UPDATE-INDEX',
        payload : ind
    }
}