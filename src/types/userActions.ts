import { UserActionTypes } from "./enums";
import { ISignInData, ISignUpData } from "./interfaces";

interface ISetUsername {
    type: UserActionTypes.SET_USERNAME,
    payload: string
}
interface ISetAuthState {
    type: UserActionTypes.SET_AUTH_STATE,
    payload: string | null
}
interface ISignInUser {
    type: UserActionTypes.SIGN_IN_USER,
    payload: ISignInData
}

interface ISignUpSuccess {
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: ISignUpData
}
interface ISignUpError {
    type: UserActionTypes.SIGN_UP_ERROR,
    payload:  string
}
interface ILogOut {
    type: UserActionTypes.LOG_OUT
}
interface IFetchUsersSuccess {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: ISignUpData[]
}
interface IFetchUsersError {
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: string
}

export type IUserActions = ISetUsername | 
                            ISetAuthState | 
                            ISignInUser | 
                            ISignUpSuccess |
                            ISignUpError |
                            ILogOut |
                            IFetchUsersSuccess | 
                            IFetchUsersError;