import React, { useState, useEffect } from 'react';
import style from './profile-status.module.css';

const ProfileStatus = React.memo(props => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect((status) => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status)
    };

    const onHandlerChange = (e) => {
        setStatus(e.target.value);
    }


    return (
        <div>
            {
                !editMode &&
                <div className={style.status}>
                    <span onDoubleClick={activateEditMode} className={style.text}>{props.status || '...'}</span>
                </div>
            }
            {
                editMode &&
                <div className={style.inputBlock}>
                    <input
                        onBlur={deactivateEditMode}
                        autoFocus={true}
                        value={status}
                        onChange={onHandlerChange}/>
                </div>

            }
        </div>
    )
});

export default ProfileStatus;