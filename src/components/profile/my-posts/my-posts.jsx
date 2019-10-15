import React from 'react';
import style from './my-posts.module.css';
import Post from './post/post';
const MyPosts = (props) => {

    let newPostElement = React.createRef();
    const addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    };

    const posts = props.posts.map((post) => {
        return <Post key={post.id} message={post.text} />
    });
    return(
        <div className = {style.myPosts}>
            <div className = {style.createPost}>
                <h3 className={style.header}>My posts</h3>
                <textarea ref={newPostElement} className={style.textArea} />
                <button onClick={ addPost } className={style.button}>Add post</button>
            </div>
            { posts }
        </div>
    )
}

export default MyPosts;