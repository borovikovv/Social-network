import React from 'react';
import style from './my-posts.module.css';
import Post from './post/post';

const MyPosts = (props) => {
    const { newPostText, posts, addPost, changePostText } = props;


    let newPostElement = React.createRef();
    const onPostChanged = () => {
        let text = newPostElement.current.value;
        changePostText(text);
    };

    const onAddedPost = () => {
        addPost(newPostText);
    };



    const profilePosts = posts.map((post) => {
        return <Post key={post.id} message={post.text} />
    });
    return(
        <div className = {style.myPosts}>
            <div className = {style.createPost}>
                <h3 className={style.header}>My posts</h3>
                <textarea value={newPostText}
                placeholder='How are you doing?'
                            ref={newPostElement}
                            onChange={onPostChanged}
                            className={style.textArea} />
                <button 
                    onClick={ onAddedPost }
                    className={style.button}>Add post</button>
            </div>
            { profilePosts }
        </div>
    )
}

export default MyPosts;