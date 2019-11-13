import React, { Fragment } from 'react';
import style from  './dialogs.module.css';
import DialogsForm from "./dialogs-form";


const Dialogs = (props) => {
    const { messages, dialogs, resetDialogsForm, sendMessage } = props;

    const submit = (value) => {
        sendMessage(value.addMessageText)
        resetDialogsForm();
    };


    const dialogPerson = dialogs.map((person) => {
        return  <div key={person.id} className={style.dialog}>
                    <div className={style.imageContainer}>
                        <img className={style.img} src={person.image} alt='img'/>
                    </div>
                    <span className={style.name}>
                        {person.name} 
                    </span>
                </div>
    });  
    const dialogMessage = messages.map((message) => {
        return  <div key={message.id} className={style.message}>
                    <span className={`${style.text} ${style.speechBubble}`}>
                        { message.text }
                    </span>
                </div>
    });

    return (
        <Fragment>
            <div className={style.component}>
                <div className={style.dialogs}>
                    { dialogPerson }
                </div>
                <div className={style.messages}>
                    { dialogMessage }
                </div>
            </div>
            <DialogsForm onSubmit={submit} />
        </Fragment>
    )
};

export default Dialogs;