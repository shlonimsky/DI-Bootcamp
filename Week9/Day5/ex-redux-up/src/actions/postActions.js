const deletePost = (id) => {
    console.log("id in action",id)
    return {
        type : 'DELETE_POST',
        payload : id
    }
}
export default deletePost