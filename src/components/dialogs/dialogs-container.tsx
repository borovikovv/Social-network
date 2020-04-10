import { connect } from 'react-redux';
import Dialogs from './dialogs';
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/with-auth-redirect";
import {sendMessageBody} from '../../redux/dialogReducer';
import { reset } from 'redux-form';
import {AppStateType} from "../../redux/store";
import {DialogType, MessageType} from "../../types/types";

type MapStateToPropsType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
};
type MapDispatchToPropsType = {
    resetDialogsForm: () => void
    sendMessage: (text: string) => void
};
type Props = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType) => {
    return {
        messages: state.dialogReducer.messages,
        dialogs: state.dialogReducer.dialogs
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        resetDialogsForm: () => {
            dispatch(reset('addMessageText'));
        },
        sendMessage: (text: string) => {
            dispatch(sendMessageBody(text));
        }
    }
};


let DialogContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

export default DialogContainer;

