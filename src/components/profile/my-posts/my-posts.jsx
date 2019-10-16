import React from 'react';
import style from './my-posts.module.css';
import Post from './post/post';
import { addPost, updatePostText } from './../../../state/state';
const MyPosts = (props) => {
    const { newPostText, posts } = props;

    let newPostElement = React.createRef();
    const onPostChanged = () => {
        let text = newPostElement.current.value;
        updatePostText(text);
    };



    const profilePosts = posts.map((post) => {
        return <Post key={post.id} message={post.text} />
    });
    return(
        <div className = {style.myPosts}>
            <div className = {style.createPost}>
                <h3 className={style.header}>My posts</h3>
                <textarea value={newPostText}
                            ref={newPostElement}
                            onChange={onPostChanged}
                            className={style.textArea} />
                <button 
                    onClick={ addPost }
                    className={style.button}>Add post</button>
            </div>
            { profilePosts }
        </div>
    )
}

export default MyPosts;