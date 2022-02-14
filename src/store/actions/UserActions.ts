import { Dispatch } from "redux";
import { useActions } from "../../hooks/useActions";
import { UserActionTypes } from "../../types/enums";
import { ISignInData, ISignUpData } from "../../types/interfaces";
import { IUserActions } from "../../types/userActions";

export const setUsernameAction = (username: string): IUserActions => ({
    type: UserActionTypes.SET_USERNAME,
    payload: username
});
export const setAuthStateAction = (state: string | null): IUserActions => ({
    type: UserActionTypes.SET_AUTH_STATE,
    payload: state
});
export const signInUserAction = (signInData: ISignInData): IUserActions => ({
    type: UserActionTypes.SIGN_IN_USER,
    payload: signInData
});


const signUpSuccessAction = (signUpData: ISignUpData) : IUserActions => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: signUpData
});
const signUpErrorAction = (error: string): IUserActions => ({
    type: UserActionTypes.SIGN_UP_ERROR,
    payload: error
});

export const signUpUser = (newUser: ISignUpData) => {
    return (dispatch: Dispatch<IUserActions>) => {
        fetch('http://localhost:3004/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newUser) 
        })
        .then(response => response.ok ? response.json : Promise.reject(response))
        .then(() => dispatch(signUpSuccessAction(newUser)))
        .catch((e) => dispatch(signUpErrorAction(e.statusText)));
    }
}

export const logOutUser = (): IUserActions => ({
    type: UserActionTypes.LOG_OUT
});

const fetchUsersSuccessAction = (users: ISignUpData[]) : IUserActions => ({
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: users
});
const fetchUsersErrorAction = (error: string): IUserActions => ({
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: error
});

export const fetchUsers = () => {
    return (dispatch: Dispatch<IUserActions>) => {
        fetch('http://localhost:3004/users')
            .then(response => response.ok ? response.json : Promise.reject(response))
            .then(json => console.log(json.name) /* dispatch(fetchUsersSuccessAction(json)) */)
            .catch(e => dispatch(fetchUsersErrorAction(e.statusText)));
    }
}