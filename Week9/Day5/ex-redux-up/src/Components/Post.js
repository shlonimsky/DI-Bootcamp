import {useSelector,useDispatch} from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import deletePost from '../actions/postActions'
// import React from 'react'



const Post = (props) => {
    const dispatch = useDispatch()

    const id = useParams().post_id
    const allPosts = useSelector(state => state.data)
    // console.log(allPosts)
    const post = allPosts.find(item => item.id == id)


    // console.log(post)

    // const handleClick = () => {
    //     dispatch(() => deletePost(id))
    // }
    return !post ? (<p>Loading</p>) :
    (
        <div className='container'>
        <div className=''>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
        <button onClick={() => dispatch(deletePost(id))}> <Link to={'/'}> Delete post </Link>  </button>
        </div>
        
    )
}


export default Post