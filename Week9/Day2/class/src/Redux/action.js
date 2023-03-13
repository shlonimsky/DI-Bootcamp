export const HerName = (name) => {
    return {
        type : 'HER_NAME',
        payload : name
    }
}

export const HisName = (name) => {
    return {
        type : 'HIS_NAME',
        payload : name
    }
}

export const GetResult = (obj) => {
    return {
        type : 'FETCH_RES',
        payload : obj
    }
}