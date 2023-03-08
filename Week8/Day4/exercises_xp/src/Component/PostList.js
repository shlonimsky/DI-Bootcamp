import { json } from "react-router-dom"
import list from "./list.json"

const PostList =(props) => {

    const content = list.map((post,i) => 
        (
            <div key={i}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            </div>
        ))
    return content
}

export default PostList