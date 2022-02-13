import { UserActionTypes } from "../../types/enums";
import { IUserActions } from "../../types/userActions";

export const setUsernameAction = (username: string): IUserActions => ({
    type: UserActionTypes.SET_USERNAME,
    payload: username
});
export const setAuthStateAction = (state: string | null): IUserActions => ({
    type: UserActionTypes.SET_AUTH_STATE,
    payload: state
});