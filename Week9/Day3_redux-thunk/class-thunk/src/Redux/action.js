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

//Module redux-thunk
//getState gets the state of the store.  and just with the thunk
//Without it we cant get the state

export const getUsers = () => (dispatch,getState) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      // setUsers(data)
    dispatch({
    type : 'USERS',
    payload : data
    })
    })
}