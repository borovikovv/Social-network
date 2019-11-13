import React from 'react';
import style from "./dialogs.module.css";
import {Field, reduxForm} from "redux-form";

const AddTextForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit } className={style.containerTextarea}>
            <Field  className={style.textarea}
                    component={'textarea'}
                    name={'addMessageText'}
                    placeholder=' Type message text...' />
            <button className={style.button}>Send message</button>
        </form>
    )
};

const DialogsForm = reduxForm({form: 'addMessageText'})(AddTextForm);

export default DialogsForm;