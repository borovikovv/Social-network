import React from 'react';
import style from './my-posts.module.css';
import Post from './post/post';
const MyPosts = () => {
    return(
        <div className = {style.myPosts}>
            <div className = {style.createPost}>
                <textarea className={style.textArea} />
                <button>Add post</button>
            </div>
            <Post message = "Hello, world" />
        </div>
    )
}

export default MyPosts;