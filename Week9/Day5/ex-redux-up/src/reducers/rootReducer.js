const initState = {
    data : [
        {id: '1', title: 'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
        {id: '2', title: 'Dolorem eum magni eos aperiam quia', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
        {id: '3', title: 'Ea molestias quasi exercitationem repellat qui ipsa sit aut', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
    ]
}

const rootReducer = (state=initState,action={}) => {
    switch (action.type) {
        case "DELETE_POST" : 
            const newArr = state.data.filter(post =>  post.id != action.payload)
            return {...state, data : newArr}
        default : return {...state}
    }
}

export default rootReducer