import React from 'react';
import style from "./post-form.module.css";
import { Field, reduxForm } from "redux-form";

const Post = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <Field placeholder='How are you doing?'
                   name={'postForm'}
                   component={'textarea'}
                   type={'text'}
                   className={style.textArea} />
            <button className={style.button}>Add post</button>
        </form>
    )
};

const PostForm = reduxForm({form: 'postForm'})(Post);

export default PostForm;