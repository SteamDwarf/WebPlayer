import { UserActionTypes } from "./enums";

interface ISetUsername {
    type: UserActionTypes.SET_USERNAME,
    payload: string
}
interface ISetAuthState {
    type: UserActionTypes.SET_AUTH_STATE,
    payload: string | null
}

export type IUserActions = ISetUsername | ISetAuthState;