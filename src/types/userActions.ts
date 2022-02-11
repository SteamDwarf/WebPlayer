import { UserActionTypes } from "./enums";

interface ISetUsername {
    type: UserActionTypes.SET_USERNAME,
    payload: string
}

export type IUserActions = ISetUsername;