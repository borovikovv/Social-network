import { connect } from 'react-redux';
import MyPosts from './my-posts';
import { addPostActionCreator, onPostChangedActionCreator } from '../../../redux/profileReducer';

const mapStateToProps = (state) => {
    return {
        posts: state.profileReducer.posts, 
        newPostText: state.profileReducer.newPostText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostActionCreator(text)); 
        },
        changePostText: (text) => {
            dispatch(onPostChangedActionCreator(text));
        }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;