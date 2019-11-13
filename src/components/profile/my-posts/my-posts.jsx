import React from 'react';
import style from './my-posts.module.css';
import Post from './post/post';
import PostForm from "./post-form/post-form";

const MyPosts = (props) => {
    const { posts, addPost, resetPostText } = props;

    const submit = (value) => {
      addPost(value.postForm)
        resetPostText();
    };

    const profilePosts = posts.map((post) => {
        return <Post key={post.id} message={post.text} />
    });
    return(
        <div className = {style.myPosts}>
            <div className = {style.createPost}>
                <h3 className={style.header}>My posts</h3>
            </div>
            <PostForm onSubmit={submit} />
            { profilePosts }
        </div>
    )
}

export default MyPosts;