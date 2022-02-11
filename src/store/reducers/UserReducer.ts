import { UserActionTypes } from "../../types/enums";
import { IUserState } from "../../types/interfaces"
import { IUserActions } from "../../types/userActions";

const initState: IUserState = {
    id: 0,
    username: ''
}

export const userReducer = (state = initState, action: IUserActions): IUserState  => {
    switch (action.type) {
        case UserActionTypes.SET_USERNAME:
            return {...state, username: action.payload}
        default:
            return state;
    }
}