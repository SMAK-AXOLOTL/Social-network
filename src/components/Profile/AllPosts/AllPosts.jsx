import React from "react";
import s from './AllPosts.module.css'
import Post from "./Post/Post";

const AllPosts = (props) => {
    const postsMapped = props.postsData.map(x => <Post message={x.message} rating={x.rating}/>)

    let newPostElement = React.createRef()

    const onAddPost = () => {
        if (newPostElement.current.value !== ''){
            props.addPost()
        }
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.posts_block}>
            My posts
            <div>
                <textarea className={s.textArea} ref={newPostElement} value={props.newPostText} placeholder={'Enter new post here!'}
                          onChange={onPostChange}></textarea>
                <button onClick={onAddPost}>New post</button>
            </div>
            <div className={s.posts}>
                {postsMapped}
            </div>
        </div>)
}

export default AllPosts