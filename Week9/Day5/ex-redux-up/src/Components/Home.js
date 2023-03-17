import logo from '../blog.png'
import { Link } from 'react-router-dom'
import { useState,useEffect} from 'react'
import { connect } from 'react-redux'


const Home = (props) => {

const [posts, setPost] = useState([])

useEffect(() => {
setPost(props.posts)
// console.log(posts)
},[posts])

return posts.length===0 ? (<p>No post to show</p>) : (
    <div className='container home'>
         {posts.map(post =>  {
        return(
            <div key={post.id} className='post card'>
                <img src={logo} />
                <div>
                    <Link to = {`/${post.id}`}>
                        <h4>{post.title}</h4>
                    </Link>
                    <p>{post.body}</p>
                </div>
            </div>
        )
    })}
    </div>
   
)
    
}


const mapStateToProps = (state) => {
    return {
        posts : state.data
    }
}

export default connect(mapStateToProps)(Home)