import { error } from "console";
import { stat } from "fs";
import { UserActionTypes } from "../../types/enums";
import { IUserState } from "../../types/interfaces"
import { IUserActions } from "../../types/userActions";

const initState: IUserState = {
    id: 0,
    username: '',
    isAuth: 'false',
    error: null
}

export const userReducer = (state = initState, action: IUserActions): IUserState  => {
    switch (action.type) {
        case UserActionTypes.SET_USERNAME:
            return {...state, username: action.payload}
        case UserActionTypes.SET_AUTH_STATE:
            return {...state, isAuth: action.payload}
        case UserActionTypes.SIGN_IN_USER:
            return {...state, isAuth: 'true', username: action.payload.userName}
        case UserActionTypes.SIGN_UP_SUCCESS: 
            return {...state, isAuth: 'true', username: action.payload.userName, error: null}
        case UserActionTypes.SIGN_UP_ERROR:
            return {...state, error: action.payload}
        case UserActionTypes.LOG_OUT:
            return {...state, username: '', isAuth: ''}
        default:
            return state;
    }
}