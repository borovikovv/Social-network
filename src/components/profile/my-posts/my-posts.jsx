import React from 'react';
import style from './my-posts.module.css';
import Post from './post/post';
const MyPosts = (props) => {

    const posts = props.posts.map((post) => {
        return <Post key={post.id} message={post.text} />
    });
    return(
        <div className = {style.myPosts}>
            <div className = {style.createPost}>
                <h3 className={style.header}>My posts</h3>
                <textarea className={style.textArea} />
                <button className={`${style.button}, btn-sm d-flex btn-primary`}>Add post</button>
            </div>
            { posts }
        </div>
    )
}

export default MyPosts;