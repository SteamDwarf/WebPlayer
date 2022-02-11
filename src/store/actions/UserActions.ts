import { UserActionTypes } from "../../types/enums";
import { IUserActions } from "../../types/userActions";

export const setUsernameAction = (username: string): IUserActions => ({
    type: UserActionTypes.SET_USERNAME,
    payload: username
});