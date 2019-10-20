import React, { Fragment } from 'react';
import style from  './dialogs.module.css';


const Dialogs = (props) => {
    const { messages, dialogs, newMessageText, addMessageText,
            sendMessage } = props;

    const onMessageAdd = () => {
        sendMessage(newMessageText);
    };
    const onAddedMessageText = (e) => {
        let text = e.target.value;
        addMessageText(text);
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
            <div className={style.containerTextarea}>
                <textarea  className={style.textarea}
                        value={newMessageText}
                        onChange={onAddedMessageText}
                        placeholder=' Type message text...' />
                <button onClick={ onMessageAdd } className={style.button}>Send message</button>
            </div>
        </Fragment>
    )
};

export default Dialogs;