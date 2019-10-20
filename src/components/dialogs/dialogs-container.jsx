import { connect } from 'react-redux';
import Dialogs from './dialogs';
import { addMessageBodyCreator, sendMessageCreator } from '../../redux/dialogReducer';

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

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogContainer;

