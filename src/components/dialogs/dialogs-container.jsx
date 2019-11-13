import { connect } from 'react-redux';
import Dialogs from './dialogs';
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/with-auth-redirect";
import { sendMessageBody } from '../../redux/dialogReducer';
import { reset } from 'redux-form';

const mapStateToProps = (state) => {
    return {
        messages: state.dialogReducer.messages,
        dialogs: state.dialogReducer.dialogs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetDialogsForm: () => {
            dispatch(reset('addMessageText'));
        },
        sendMessage: (text) => {
            dispatch(sendMessageBody(text));
        }
    }
}


let DialogContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

export default DialogContainer;

