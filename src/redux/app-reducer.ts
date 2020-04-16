import { setLoginData } from './aythReducer';
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";

const INITIALIZATION_SUCCESS = 'INITIALIZATION_SUCCESS';

export type InitialozationStateType = {
    initializationSuccess: boolean
}

let initialState: InitialozationStateType = {
    initializationSuccess: false
};

const appReducer = (state = initialState, action: any): InitialozationStateType => {
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

type initializationSuccessActionType = {
    type: typeof INITIALIZATION_SUCCESS;
}

type ActionsTypes = initializationSuccessActionType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

const initializationSuccess = (): initializationSuccessActionType => ({
   type: INITIALIZATION_SUCCESS
});

export const initialization = () => (dispatch: any) => {
    let promise = dispatch(setLoginData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializationSuccess());
        });
};

export default appReducer;