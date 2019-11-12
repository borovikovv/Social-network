import React, { Component } from 'react';
import style from './profile-status.module.css';

export default class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: ''
    }

    toggleEditMode = () => {
        this.setState(({editMode}) => {
            return {
                editMode: !editMode
            }
        });
        this.props.updateUserStatus(this.state.status)
    }

    onHandlerChange = (e) => {
        let statusText = e.target.value;
        this.setState({
            status: statusText
        });
    }


    render() {

        return (
            <div>
                {
                    !this.state.editMode &&
                        <div className={style.status}>
                            <span onDoubleClick={this.toggleEditMode} className={style.text}>{this.props.status}</span>
                        </div>
                }
                {
                    this.state.editMode &&
                        <div className={style.inputBlock}>
                            <input
                                onBlur={this.toggleEditMode}
                                autoFocus={true}
                                value={this.state.status}
                                onChange={this.onHandlerChange}/>
                        </div>

                }
            </div>
        )
    }
}