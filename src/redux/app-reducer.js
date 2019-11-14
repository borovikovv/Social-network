import { setLoginData } from './aythReducer';

const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS';

let initialState = {
    initializationSuccess: false
};

const appReducer = (state = initialState, action) => {
        switch (action.type) {
            case INITIALIZATION_SUCCESS:
                return {
                    ...state,
                    initializationSuccess: true
                };
            default:
                return state;
        }
};

const initializationSuccess = () => ({
   type: INITIALIZATION_SUCCESS
});

export const initialization = () => (dispatch) => {
    let promise = dispatch(setLoginData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializationSuccess());
        });
};

export default appReducer;