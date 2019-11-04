import { connect } from 'react-redux';
import Dialogs from './dialogs';
import { addMessageBodyCreator, sendMessageCreator } from '../../redux/dialogReducer';
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/with-auth-redirect";

const mapStateToProps = (state) => {
    return {
        messages: state.dialogReducer.messages,
        dialogs: state.dialogReducer.dialogs,
        newMessageText: state.dialogReducer.newMessageText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessageText: (text) => {
            dispatch(addMessageBodyCreator(text));
        },
        sendMessage: (text) => {
            dispatch(sendMessageCreator(text));
        }
    };
};

let DialogContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

export default DialogContainer;

